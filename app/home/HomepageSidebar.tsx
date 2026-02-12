"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import IonIcon from "@/components/shared/IonIcon";
import { createClient } from "@/lib/supabase/client";

const navItems = [
  { href: "/home", label: "Home", icon: "home-outline" },
  { href: "/home/library", label: "Library", icon: "library-outline" },
  { href: "/home/calendar", label: "Calendar", icon: "calendar-outline" },
];

export default function HomepageSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<{
    email?: string;
    user_metadata?: { full_name?: string; avatar_url?: string; picture?: string };
  } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const getUser = async () => {
      const { data: { user: u } } = await supabase.auth.getUser();
      setUser(u ?? null);
    };
    getUser();
  }, [supabase]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleSignOut = async () => {
    setMobileMenuOpen(false);
    await createClient().auth.signOut();
    router.push("/?auth=open");
    router.refresh();
  };

  return (
    <>
      {/* Desktop: fixed left sidebar (hidden on mobile) */}
      <aside className="hidden md:flex fixed left-0 top-0 z-20 h-screen w-64 shrink-0 flex-col bg-sidebar-bg border-r border-primary-border-subtle overflow-hidden">
        <div className="shrink-0 p-4 bg-[#314f4e]">
          <Link href="/home" className="flex items-center gap-3">
            <Image
              src="/shared/arito-logo.png"
              alt="Arito Logo"
              width={70}
              height={36}
              className="h-9 w-auto shrink-0"
            />
          </Link>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <ul className="space-y-1">
            {navItems.map(({ href, label, icon }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-sidebar-active text-sidebar-text"
                        : "text-sidebar-text hover:bg-lavender/30"
                    }`}
                  >
                    <IonIcon name={icon} className="w-5 h-5 shrink-0" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="shrink-0 p-4 border-t border-primary-border-subtle space-y-1">
          <Link
            href="/home/profile"
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              pathname === "/home/profile"
                ? "bg-sidebar-active text-sidebar-text"
                : "text-sidebar-text hover:bg-lavender/30"
            }`}
          >
            <IonIcon name="person-outline" className="w-5 h-5 shrink-0" />
            Profile
          </Link>
          <button
            type="button"
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-text hover:bg-lavender/30 transition-colors w-full text-left"
          >
            <IonIcon name="log-out-outline" className="w-5 h-5 shrink-0" />
            Sign Out
          </button>
        </div>
      </aside>

      {/* Mobile: top bar (logo + menu) — visible only on small screens */}
      <header className="md:hidden fixed left-0 right-0 top-0 z-30 flex h-14 items-center justify-between bg-[#314f4e] px-4 safe-area-inset-top">
        <Link href="/home" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/shared/arito-logo.png"
            alt="Arito Logo"
            width={56}
            height={29}
            className="h-7 w-auto"
          />
        </Link>
        <Link
          href="/home/profile"
          className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
          aria-label="Go to profile"
        >
          {(user?.user_metadata?.avatar_url ?? user?.user_metadata?.picture) ? (
            <img
              src={(user.user_metadata.avatar_url ?? user.user_metadata.picture) as string}
              alt=""
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <span className="text-sm font-semibold">
              {(user?.user_metadata?.full_name ?? user?.email ?? "?").charAt(0).toUpperCase()}
            </span>
          )}
        </Link>
      </header>

      {/* Mobile: bottom nav (Home, Library, Calendar) — like Canva */}
      <nav
        className="md:hidden fixed bottom-0 left-0 right-0 z-30 flex items-center justify-around border-t border-primary-border-subtle bg-sidebar-bg safe-area-inset-bottom"
        style={{ paddingBottom: "env(safe-area-inset-bottom)", paddingTop: "0.75rem" }}
      >
        {navItems.map(({ href, label, icon }) => {
          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-0.5 py-2 px-4 min-w-[4rem] rounded-lg transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-sidebar-text-muted"
              }`}
            >
              <IonIcon
                name={icon}
                className={`w-6 h-6 shrink-0 ${isActive ? "text-primary" : ""}`}
              />
              <span className="text-xs font-medium">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Mobile: slide-out drawer (Profile, Sign out) */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity"
            aria-hidden
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className="md:hidden fixed top-0 right-0 z-50 h-full w-[min(20rem,85vw)] max-w-full bg-sidebar-bg shadow-xl flex flex-col animate-slide-in-right"
            role="dialog"
            aria-label="Menu"
          >
            <div className="flex h-14 items-center justify-between border-b border-primary-border-subtle px-4 bg-[#314f4e]">
              <span className="text-primary-foreground font-medium">Menu</span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-lg text-primary-foreground hover:bg-white/10 transition-colors"
                aria-label="Close menu"
              >
                <IonIcon name="close-outline" className="w-6 h-6" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-1">
              <Link
                href="/home/profile"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/home/profile"
                    ? "bg-sidebar-active text-sidebar-text"
                    : "text-sidebar-text hover:bg-lavender/30"
                }`}
              >
                <IonIcon name="person-outline" className="w-5 h-5 shrink-0" />
                Profile
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-sidebar-text hover:bg-lavender/30 transition-colors w-full text-left"
              >
                <IonIcon name="log-out-outline" className="w-5 h-5 shrink-0" />
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
