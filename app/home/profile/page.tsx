"use client";

import { useEffect, useState } from "react";
import IonIcon from "@/components/shared/IonIcon";
import { createClient } from "@/lib/supabase/client";

// Simulated brain profile data – replace with backend later
const LEARNING_STYLES = [
  { name: "Visual", icon: "eye-outline", percentage: 75 },
  { name: "Auditory", icon: "ear-outline", percentage: 45 },
  { name: "Kinesthetic", icon: "hand-left-outline", percentage: 60 },
  { name: "Reading", icon: "book-outline", percentage: 55 },
];

const STRENGTHS = ["Mathematics", "Science"];
const AREAS_TO_IMPROVE = ["History", "Geography"];
const RETENTION_METHOD = {
  name: "Spaced Repetition",
  description:
    "This method works best for your learning style. We'll schedule reviews accordingly.",
};

export default function ProfilePage() {
  const [user, setUser] = useState<{
    email?: string;
    user_metadata?: { full_name?: string; avatar_url?: string; picture?: string };
  } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user: u },
      } = await supabase.auth.getUser();
      setUser(u ?? null);
    };
    getUser();
  }, [supabase]);

  const displayName = user?.user_metadata?.full_name ?? "Student User";
  const displayEmail = user?.email ?? "dummymy784@gmail.com";
  const avatarUrl =
    user?.user_metadata?.avatar_url ?? user?.user_metadata?.picture;

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-sidebar-text">
          My Profile
        </h1>
        <p className="text-sidebar-text-muted mt-1 text-sm md:text-base">
          Your personalized learning profile
        </p>
      </header>

      {/* Top section: User info + Brain Profile */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* User Information Card */}
        <section className="rounded-2xl bg-surface border border-primary-border-subtle p-6 shadow-sm flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center shrink-0 mb-4 overflow-hidden">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt=""
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            ) : (
              <IonIcon
                name="person-outline"
                className="w-10 h-10 text-primary-foreground"
              />
            )}
          </div>
          <h2 className="font-bold text-sidebar-text text-lg">{displayName}</h2>
          <p className="text-sidebar-text-muted text-sm mt-0.5">{displayEmail}</p>
          <button
            type="button"
            className="mt-4 px-5 py-2.5 rounded-xl border-2 border-primary bg-surface text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
          >
            Edit Profile
          </button>
        </section>

        {/* Brain Profile Card */}
        <section className="rounded-2xl bg-surface border border-primary-border-subtle p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <IonIcon
                  name="bulb-outline"
                  className="w-5 h-5 text-sidebar-text shrink-0"
                />
                <h2 className="font-bold text-sidebar-text">Brain Profile</h2>
              </div>
              <p className="text-sidebar-text-muted text-sm mt-0.5">
                How your brain learns best
              </p>
            </div>
            <button
              type="button"
              className="shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-primary bg-surface text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
            >
              <IonIcon name="refresh-outline" className="w-4 h-4" />
              Retake Test
            </button>
          </div>

          <h3 className="font-semibold text-sidebar-text text-sm mb-3">
            Learning Style Distribution
          </h3>
          <ul className="space-y-3 mb-5">
            {LEARNING_STYLES.map(({ name, icon, percentage }) => (
              <li key={name} className="flex items-center gap-3">
                <span className="shrink-0 w-8 h-8 rounded-full bg-lavender-subtle flex items-center justify-center">
                  <IonIcon name={icon} className="w-4 h-4 text-primary" />
                </span>
                <div className="flex-1 min-w-0">
                  <span className="text-sm font-medium text-sidebar-text">
                    {name}
                  </span>
                  <div className="mt-1 h-2 rounded-full bg-lavender overflow-hidden flex">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                </div>
                <span className="shrink-0 text-sm font-medium text-sidebar-text">
                  {percentage}%
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 p-3 rounded-xl bg-primary/5 border border-primary-border-subtle">
            <span className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <IonIcon
                name="time-outline"
                className="w-5 h-5 text-primary-foreground"
              />
            </span>
            <div>
              <p className="font-bold text-sidebar-text text-sm">
                Focus Span: 30-40 min
              </p>
              <p className="text-sidebar-text-muted text-xs">
                Balanced focus sessions
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom section: Strengths, Areas to Improve, Retention Method */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Strengths */}
        <section className="rounded-2xl bg-surface border border-primary-border-subtle p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <IonIcon
              name="trending-up-outline"
              className="w-5 h-5 text-sidebar-text shrink-0"
            />
            <h2 className="font-bold text-sidebar-text">Strengths</h2>
          </div>
          <ul className="space-y-2">
            {STRENGTHS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-primary/10"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <IonIcon name="checkmark" className="w-3.5 h-3.5 text-primary-foreground" />
                </span>
                <span className="text-sm font-medium text-sidebar-text">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Areas to Improve */}
        <section className="rounded-2xl bg-surface border border-primary-border-subtle p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <IonIcon
              name="analytics-outline"
              className="w-5 h-5 text-sidebar-text shrink-0"
            />
            <h2 className="font-bold text-sidebar-text">Areas to Improve</h2>
          </div>
          <ul className="space-y-2">
            {AREAS_TO_IMPROVE.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 px-3 py-2 rounded-full bg-amber-100"
              >
                <span className="shrink-0 w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <IonIcon
                    name="locate-outline"
                    className="w-3.5 h-3.5 text-white"
                  />
                </span>
                <span className="text-sm font-medium text-sidebar-text">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Retention Method */}
        <section className="rounded-2xl bg-lavender/50 border border-primary-border-subtle p-5 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <IonIcon
              name="bulb-outline"
              className="w-5 h-5 text-sidebar-text shrink-0"
            />
            <h2 className="font-bold text-sidebar-text">Retention Method</h2>
          </div>
          <h3 className="font-bold text-sidebar-text text-lg mb-2">
            {RETENTION_METHOD.name}
          </h3>
          <p className="text-sidebar-text-muted text-sm">
            {RETENTION_METHOD.description}
          </p>
        </section>
      </div>
    </div>
  );
}
