"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import IonIcon from "../../components/IonIcon";
import { createClient } from "@/lib/supabase/client";

export default function SignupPage() {
  const [signupMethod, setSignupMethod] = useState<"email" | "magic-link">("email");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleEmailSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const name = formData.get("name") as string;

    // Validate passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    // Validate password length
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signUpError) throw signUpError;

      if (data.user) {
        // Check if user is already confirmed (auto-confirm enabled)
        if (data.session) {
          // User is logged in immediately, redirect to homepage
          router.push("/homepage");
          router.refresh();
        } else {
          // Email confirmation required
          setMessage("Check your email to confirm your account!");
        }
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during signup");
    } finally {
      setLoading(false);
    }
  };

  const handleMagicLinkSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    try {
      const { error: signInError } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signInError) throw signInError;

      setMessage("Check your email for the magic link!");
    } catch (err: any) {
      setError(err.message || "An error occurred sending the magic link");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    setLoading(true);
    setError(null);

    try {
      const { error: oauthError } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (oauthError) throw oauthError;
    } catch (err: any) {
      setError(err.message || "An error occurred with Google signup");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Welcome to Arito
            </h1>
            <p className="text-primary/70">
              Start your journey to smarter studying
            </p>
          </div>

          {/* Segmented Control */}
          <div className="mb-6">
            <div className="relative flex bg-primary/10 rounded-full p-1">
              <button
                type="button"
                onClick={() => setSignupMethod("email")}
                className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all duration-200 ${
                  signupMethod === "email"
                    ? "bg-primary text-white shadow-sm"
                    : "bg-transparent text-primary/60 hover:text-primary/80"
                }`}
              >
                Email & Password
              </button>
              <button
                type="button"
                onClick={() => setSignupMethod("magic-link")}
                className={`flex-1 py-2.5 px-4 rounded-full font-medium text-sm transition-all duration-200 ${
                  signupMethod === "magic-link"
                    ? "bg-primary text-white shadow-sm"
                    : "bg-transparent text-primary/60 hover:text-primary/80"
                }`}
              >
                Magic Link
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          {/* Success Message */}
          {message && (
            <div className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-lg text-sm">
              {message}
            </div>
          )}

          {/* Social Signup */}
          {signupMethod === "email" && (
            <>
              <div className="space-y-3 mb-8">
                <button
                  type="button"
                  onClick={handleGoogleSignup}
                  disabled={loading}
                  className="w-full border-2 border-primary/20 text-primary py-3 rounded-lg font-semibold hover:bg-primary/5 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <IonIcon name="logo-google" style={{ fontSize: '1.5rem' }} />
                  <span>Continue with Google</span>
                </button>
              </div>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-primary/20"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-primary/70">Or continue with</span>
                </div>
              </div>
            </>
          )}

          {/* Signup Form */}
          <form className="space-y-6" onSubmit={signupMethod === "email" ? handleEmailSignup : handleMagicLinkSignup}>
            {signupMethod === "email" ? (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-primary"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-primary"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-semibold text-primary mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-primary"
                    placeholder="Create a strong password"
                  />
                  <p className="mt-1 text-xs text-primary/60">
                    Must be at least 8 characters
                  </p>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-semibold text-primary mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-primary"
                    placeholder="Confirm your password"
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 mt-1 text-primary border-primary/20 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-primary/70">
                      I agree to the{" "}
                      <Link href="#" className="text-primary font-semibold hover:text-primary-dark">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-primary font-semibold hover:text-primary-dark">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "Creating Account..." : "Create Account"}</span>
                  {!loading && <IonIcon name="arrow-forward-outline" style={{ fontSize: '1.25rem' }} />}
                </button>
              </>
            ) : (
              <>
                <div>
                  <label htmlFor="magic-email" className="block text-sm font-semibold text-primary mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="magic-email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-primary"
                    placeholder="you@example.com"
                  />
                  <p className="mt-1 text-xs text-primary/60">
                    We'll send you a magic link to sign in
                  </p>
                </div>

                <div>
                  <label className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      required
                      className="w-4 h-4 mt-1 text-primary border-primary/20 rounded focus:ring-primary"
                    />
                    <span className="text-sm text-primary/70">
                      I agree to the{" "}
                      <Link href="#" className="text-primary font-semibold hover:text-primary-dark">
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link href="#" className="text-primary font-semibold hover:text-primary-dark">
                        Privacy Policy
                      </Link>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{loading ? "Sending..." : "Send Magic Link"}</span>
                  {!loading && <IonIcon name="mail-outline" style={{ fontSize: '1.25rem' }} />}
                </button>
              </>
            )}
          </form>

          {/* Login Link */}
          <div className="mt-8 text-center">
            <p className="text-primary/70">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
