"use client";

import IonIcon from "@/components/shared/IonIcon";
import Link from "next/link";

// Simulated data – replace with backend later
const WEEK_DAYS = [
  { day: "Mon", sessions: 1, active: false },
  { day: "Tue", sessions: 2, active: true },
  { day: "Wed", sessions: 1, active: false },
  { day: "Thu", sessions: 2, active: false },
  { day: "Fri", sessions: 1, active: false },
  { day: "Sat", sessions: 0, active: false },
  { day: "Sun", sessions: 1, active: false },
];

const RECENTLY_VIEWED = [
  { tag: "Video", title: "Algebra Basics", category: "Mathematics", progress: 75 },
  { tag: "Notes", title: "Cell Biology", category: "Science", progress: 100 },
  { tag: "Document", title: "World War II", category: "History", progress: 40 },
  { tag: "Quiz", title: "Grammar Rules", category: "English", progress: 90 },
  { tag: "Video", title: "Chemical Reactions", category: "Chemistry", progress: 20 },
];

const QUOTE = {
  text: '"The expert in anything was once a beginner."',
  author: "— Helen Hayes",
};

const GOALS = [
  { label: "Complete Algebra Chapter 5", done: true },
  { label: "Watch Biology video series", done: false },
  { label: "Take Chemistry practice quiz", done: false },
  { label: "Review History notes", done: false },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export default function Homepage() {
  const greeting = getGreeting();
  const dateStr = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-sidebar-text">
            {greeting}, Student!
          </h1>
          <p className="text-sidebar-text-muted mt-1 text-sm md:text-base">
            Here&apos;s your study overview for today.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sidebar-text-muted text-sm shrink-0">
          <IonIcon name="calendar-outline" className="w-5 h-5" />
          <span>{dateStr}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left column – main content */}
        <div className="lg:col-span-2 space-y-6">
          {/* About Me */}
          <section className="rounded-2xl bg-surface border border-primary-border-subtle p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 shadow-sm">
            <div className="flex items-start gap-3">
              <IonIcon name="bulb-outline" className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="font-semibold text-sidebar-text">About Me</h2>
                <p className="text-sidebar-text-muted text-sm mt-1">
                  Complete your brain profile to get personalized study recommendations.
                </p>
              </div>
            </div>
            <button
              type="button"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-dark transition-colors"
            >
              Take Test
            </button>
          </section>

          {/* This Week */}
          <section className="rounded-2xl bg-surface border border-primary-border-subtle p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <IonIcon name="calendar-outline" className="w-5 h-5 text-sidebar-text" />
              <h2 className="font-bold text-sidebar-text">This Week</h2>
            </div>
            <div className="flex gap-2 mb-4 overflow-x-auto">
              {WEEK_DAYS.map(({ day, sessions, active }) => (
                <div
                  key={day}
                  className={`flex flex-col items-center justify-center min-w-[4.5rem] py-3 px-3 rounded-xl shrink-0 ${
                    active
                      ? "bg-sidebar-logo-bg text-primary-foreground"
                      : "bg-primary/[0.06] text-sidebar-text"
                  }`}
                >
                  <span className="text-sm font-normal">{day}</span>
                  <span
                    className={`text-lg font-bold mt-0.5 ${
                      active ? "text-primary-foreground" : "text-sidebar-text"
                    }`}
                  >
                    {sessions}
                  </span>
                  <span
                    className={`text-xs mt-0.5 ${
                      active ? "text-primary-foreground/90" : "text-sidebar-text-muted"
                    }`}
                  >
                    sessions
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <Link
                href="/home/calendar"
                className="inline-flex items-center px-4 py-2 rounded-xl border-2 border-primary bg-surface text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
              >
                View Full Schedule
              </Link>
            </div>
          </section>

          {/* Recently Viewed */}
          <section className="rounded-2xl bg-surface border border-primary-border-subtle p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <IonIcon name="book-outline" className="w-5 h-5 text-sidebar-text" />
                <h2 className="font-semibold text-sidebar-text">Recently Viewed</h2>
              </div>
              <Link
                href="/home/library"
                className="text-sm text-sidebar-text-muted hover:text-primary transition-colors"
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {RECENTLY_VIEWED.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-primary/5 border border-primary-border-subtle p-4"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-sidebar-active text-sidebar-text">
                      {item.tag}
                    </span>
                    <span className="text-xs font-medium text-sidebar-text-muted">
                      {item.progress}%
                    </span>
                  </div>
                  <h3 className="font-medium text-sidebar-text text-sm">{item.title}</h3>
                  <p className="text-xs text-sidebar-text-muted mt-0.5">{item.category}</p>
                  <div className="mt-2 h-1.5 rounded-full bg-primary/10 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${item.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right column – sidebar */}
        <div className="space-y-6">
          {/* Quote */}
          <section className="rounded-2xl bg-sidebar-active border border-primary-border-subtle p-5 shadow-sm">
            <span className="text-4xl text-primary/30 font-serif leading-none select-none">
              &ldquo;
            </span>
            <blockquote className="text-sidebar-text text-sm leading-relaxed -mt-2">
              {QUOTE.text}
            </blockquote>
            <p className="text-sidebar-text-muted text-xs mt-2">{QUOTE.author}</p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <button
                type="button"
                className="w-8 h-8 rounded-full flex items-center justify-center text-sidebar-text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Previous quote"
              >
                <IonIcon name="chevron-back-outline" className="w-4 h-4" />
              </button>
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      i === 0 ? "bg-primary" : "bg-primary/20"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                className="w-8 h-8 rounded-full flex items-center justify-center text-sidebar-text-muted hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Next quote"
              >
                <IonIcon name="chevron-forward-outline" className="w-4 h-4" />
              </button>
            </div>
          </section>

          {/* My Goals */}
          <section className="rounded-2xl bg-surface border border-primary-border-subtle p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <IonIcon name="locate-outline" className="w-5 h-5 text-sidebar-text" />
                <h2 className="font-semibold text-sidebar-text">My Goals</h2>
              </div>
              <button
                type="button"
                className="w-8 h-8 rounded-full flex items-center justify-center text-sidebar-text hover:bg-primary/10 transition-colors"
                aria-label="Add goal"
              >
                <IonIcon name="add" className="w-5 h-5" />
              </button>
            </div>
            <ul className="space-y-3">
              {GOALS.map((goal) => (
                <li key={goal.label} className="flex items-center gap-3">
                  <span
                    className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                      goal.done ? "bg-primary text-primary-foreground" : "border-2 border-primary/40"
                    }`}
                  >
                    {goal.done && (
                      <IonIcon name="checkmark" className="w-3 h-3" />
                    )}
                  </span>
                  <span
                    className={`text-sm ${
                      goal.done ? "text-sidebar-text-muted line-through" : "text-sidebar-text"
                    }`}
                  >
                    {goal.label}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
