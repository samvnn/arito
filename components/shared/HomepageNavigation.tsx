"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import IonIcon from "./IonIcon";
import { createClient } from "@/lib/supabase/client";

export default function HomepageNavigation() {
  const router = useRouter();
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    getUser();
  }, [supabase]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/?auth=open");
    router.refresh();
  };

  return (
    <div className="px-4 md:px-8 lg:px-16 pt-3 sticky top-0 z-50 relative">
      <nav className="max-w-4xl mx-auto flex items-center justify-between bg-white rounded-full shadow-md px-3 py-2 gap-3">
        <button
          type="button"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="w-8 h-8 shrink-0 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
          aria-label="Open menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link
          href="/homepage"
          className="text-lg font-serif italic text-gray-800 flex-1 text-center"
        >
          arito
        </Link>
        <Link
          href="/?auth=open"
          className="px-4 py-1.5 text-sm rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm shrink-0"
        >
          Get Started
        </Link>
      </nav>

      {/* Mobile / hamburger dropdown menu */}
      {showMobileMenu && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/20"
            onClick={() => setShowMobileMenu(false)}
          />
          <div className="absolute left-4 right-4 md:left-auto md:right-8 md:w-56 mt-2 bg-white rounded-2xl shadow-lg border border-gray-200 py-2 z-50">
            <div className="md:hidden flex flex-col gap-1 px-2">
              <Link href="/homepage" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>Dashboard</Link>
              <Link href="/homepage" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>Study Planner</Link>
              <Link href="/homepage" className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>Resources</Link>
            </div>
            {user?.email && (
              <div className="px-4 py-2 border-t border-gray-100">
                <p className="text-sm font-semibold text-gray-800">{user.user_metadata?.full_name || "User"}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
            )}
            <Link href="/homepage" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>
              <IonIcon name="person-outline" style={{ fontSize: "1rem" }} /> Profile
            </Link>
            <Link href="/homepage" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setShowMobileMenu(false)}>
              <IonIcon name="settings-outline" style={{ fontSize: "1rem" }} /> Settings
            </Link>
            <button
              onClick={() => { handleLogout(); setShowMobileMenu(false); }}
              className="w-full flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 text-left"
            >
              <IonIcon name="log-out-outline" style={{ fontSize: "1rem" }} /> Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
