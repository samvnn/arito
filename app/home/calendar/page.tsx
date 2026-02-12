"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import IonIcon from "@/components/shared/IonIcon";

// Shared subject palette – aligned with Library page for consistency
const SUBJECTS: Record<
  string,
  { name: string; bg: string; bgLight: string; icon: string }
> = {
  Mathematics: { name: "Mathematics", bg: "bg-[#375A50]", bgLight: "bg-[#e8e4f0]", icon: "calculator-outline" },
  Science: { name: "Science", bg: "bg-[#2d6a4f]", bgLight: "bg-[#e0f2e8]", icon: "flask-outline" },
  Biology: { name: "Biology", bg: "bg-[#40916c]", bgLight: "bg-[#e8eaf6]", icon: "leaf-outline" },
  Computing: { name: "Computing", bg: "bg-[#1b4332]", bgLight: "bg-[#e8f0f0]", icon: "code-slash-outline" },
  English: { name: "English", bg: "bg-[#5c4d7a]", bgLight: "bg-[#f5e6f0]", icon: "book-outline" },
  History: { name: "History", bg: "bg-[#6b5b4a]", bgLight: "bg-[#f5f0e0]", icon: "time-outline" },
  Chemistry: { name: "Chemistry", bg: "bg-[#7b2c4a]", bgLight: "bg-[#fce4ec]", icon: "flask-outline" },
  default: { name: "Other", bg: "bg-primary", bgLight: "bg-primary/10", icon: "document-text-outline" },
};

function getSubject(key: string) {
  return SUBJECTS[key] ?? SUBJECTS.default;
}

// Mock exams to focus on – replace with backend later
const EXAMS_TO_FOCUS = [
  { id: "1", code: "COMCI101", subjectId: "Computing", priority: "Top priority", hrsLeft: 12, hrsTotal: 24 },
  { id: "2", code: "MATH202", subjectId: "Mathematics", priority: "High", hrsLeft: 8, hrsTotal: 16 },
  { id: "3", code: "BIO150", subjectId: "Biology", priority: "Medium", hrsLeft: 20, hrsTotal: 30 },
];

// Mock events – replace with backend later
const EVENTS: {
  date: string;
  label: string;
  type: "exam" | "deadline" | "other";
  subjectId?: string;
}[] = [
  { date: "2025-01-01", label: "exam!", type: "exam", subjectId: "Computing" },
  { date: "2025-01-15", label: "Quiz", type: "other", subjectId: "Mathematics" },
  { date: "2025-01-20", label: "Assignment due", type: "deadline", subjectId: "English" },
];

const DAYS_HEADER = ["M", "T", "W", "T", "F", "S", "S"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

type ViewMode = "month" | "week" | "day";

function dateKey(d: Date) {
  return (
    d.getFullYear() +
    "-" +
    String(d.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(d.getDate()).padStart(2, "0")
  );
}

function getEventsForDate(date: Date) {
  const key = dateKey(date);
  return EVENTS.filter((e) => e.date === key);
}

function getCalendarDays(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const daysInMonth = last.getDate();
  const prevMonth = new Date(year, month, 0);
  const prevDays = prevMonth.getDate();
  // Monday = 0, Sunday = 6 (so week starts on Monday)
  const startOffset = (first.getDay() + 6) % 7;

  const days: { date: Date; isCurrentMonth: boolean; dayNum: number }[] = [];
  for (let i = startOffset - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevDays - i),
      isCurrentMonth: false,
      dayNum: prevDays - i,
    });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      date: new Date(year, month, d),
      isCurrentMonth: true,
      dayNum: d,
    });
  }
  const remaining = 42 - days.length;
  for (let d = 1; d <= remaining; d++) {
    days.push({
      date: new Date(year, month + 1, d),
      isCurrentMonth: false,
      dayNum: d,
    });
  }
  return days;
}

export default function CalendarPage() {
  const today = new Date();
  const [viewDate, setViewDate] = useState(() => new Date(today.getFullYear(), today.getMonth(), 1));
  const [viewMode, setViewMode] = useState<ViewMode>("month");

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();
  const calendarDays = useMemo(() => getCalendarDays(year, month), [year, month]);

  const goToToday = () => setViewDate(new Date(today.getFullYear(), today.getMonth(), 1));
  const prevMonth = () => setViewDate(new Date(year, month - 1, 1));
  const nextMonth = () => setViewDate(new Date(year, month + 1, 1));

  const isToday = (d: Date) =>
    d.getDate() === today.getDate() &&
    d.getMonth() === today.getMonth() &&
    d.getFullYear() === today.getFullYear();

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header – same pattern as Home and Library */}
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-sidebar-text flex items-center gap-2">
            <IonIcon name="calendar-outline" className="w-8 h-8 text-primary shrink-0" />
            Calendar
          </h1>
          <p className="text-sidebar-text-muted mt-1 text-sm md:text-base">
            Your schedule and exams at a glance
          </p>
        </div>
        <div className="flex items-center gap-2 text-sidebar-text-muted text-sm shrink-0">
          <IonIcon name="today-outline" className="w-5 h-5" />
          <span>
            {today.toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Left column (2/3): Calendar – same proportion as Home main content */}
        <div className="lg:col-span-2 flex flex-col">
          <section className="rounded-2xl bg-surface border border-primary-border-subtle overflow-hidden shadow-sm flex flex-col flex-1 min-h-0">
            <div className="p-5 border-b border-primary-border-subtle flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold text-sidebar-text">
                  {MONTHS[month]} {year}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={prevMonth}
                    className="p-2 rounded-xl text-sidebar-text-muted hover:bg-primary/5 hover:text-sidebar-text transition-colors"
                    aria-label="Previous month"
                  >
                    <IonIcon name="chevron-back-outline" className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={nextMonth}
                    className="p-2 rounded-xl text-sidebar-text-muted hover:bg-primary/5 hover:text-sidebar-text transition-colors"
                    aria-label="Next month"
                  >
                    <IonIcon name="chevron-forward-outline" className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="flex rounded-xl border border-primary-border-subtle p-0.5 bg-surface-alt">
                  {(["month", "week", "day"] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setViewMode(mode)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                        viewMode === mode
                          ? "bg-primary text-primary-foreground"
                          : "text-sidebar-text-muted hover:text-sidebar-text"
                      }`}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={goToToday}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl border-2 border-primary bg-surface text-primary font-medium text-sm hover:bg-primary/5 transition-colors"
                >
                  <IonIcon name="today-outline" className="w-4 h-4" />
                  Today
                </button>
              </div>
            </div>

            {viewMode === "month" && (
              <>
                <div className="grid grid-cols-7 border-b border-primary-border-subtle bg-surface-alt">
                  {DAYS_HEADER.map((day, i) => (
                    <div
                      key={`day-${i}`}
                      className="py-2.5 text-center text-xs font-semibold text-sidebar-text-muted uppercase"
                    >
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 auto-rows-fr min-h-[320px] flex-1">
                  {calendarDays.map(({ date, isCurrentMonth, dayNum }) => {
                    const events = getEventsForDate(date);
                    const isTodayCell = isToday(date);
                    return (
                      <div
                        key={date.toISOString()}
                        className={`border-b border-r border-primary-border-subtle last:border-r-0 p-2 min-h-[84px] flex flex-col ${
                          !isCurrentMonth ? "bg-background/50 text-sidebar-text-muted" : "bg-surface"
                        }`}
                      >
                        <span
                          className={`text-sm font-medium shrink-0 ${
                            isTodayCell
                              ? "flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground"
                              : ""
                          }`}
                        >
                          {dayNum}
                        </span>
                        <div className="mt-1 space-y-1 flex-1 min-h-0 overflow-hidden">
                          {events.slice(0, 3).map((ev) => {
                            const subj = getSubject(ev.subjectId ?? "");
                            const isExam = ev.type === "exam";
                            return (
                              <span
                                key={ev.date + ev.label}
                                className={`inline-block px-1.5 py-0.5 rounded-lg text-xs font-medium truncate max-w-full ${
                                  isExam
                                    ? "bg-red-100 text-red-700 border border-red-200"
                                    : `${subj.bgLight} text-sidebar-text border border-primary-border-subtle`
                                }`}
                                title={ev.label}
                              >
                                {ev.label}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {viewMode === "week" && (
              <div className="flex-1 p-8 flex items-center justify-center text-sidebar-text-muted text-sm">
                Week view – coming soon. Switch to Month for now.
              </div>
            )}
            {viewMode === "day" && (
              <div className="flex-1 p-8 flex items-center justify-center text-sidebar-text-muted text-sm">
                Day view – coming soon. Switch to Month for now.
              </div>
            )}
          </section>
        </div>

        {/* Right column (1/3): Exams to focus on – same proportion as Home sidebar */}
        <div className="space-y-6">
          <section className="rounded-2xl bg-surface border border-primary-border-subtle p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <IonIcon name="school-outline" className="w-5 h-5 text-sidebar-text" />
              <h2 className="font-bold text-sidebar-text">Exams to focus on</h2>
            </div>
            <div className="space-y-4">
              {EXAMS_TO_FOCUS.map((exam) => {
                const subj = getSubject(exam.subjectId);
                const progressPct = Math.round((exam.hrsLeft / exam.hrsTotal) * 100);
                return (
                  <div
                    key={exam.id}
                    className="rounded-xl bg-primary/5 border border-primary-border-subtle p-4"
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${subj.bgLight} text-sidebar-text`}
                      >
                        {subj.name}
                      </span>
                      <span className="text-xs font-medium text-sidebar-text-muted">
                        {progressPct}% left
                      </span>
                    </div>
                    <h3 className="font-semibold text-sidebar-text text-sm">{exam.code}</h3>
                    <p className="text-xs text-sidebar-text-muted mt-0.5">{exam.priority}</p>
                    <div className="mt-3">
                      <div className="flex justify-between text-xs text-sidebar-text-muted mb-1">
                        <span>hrs left to review</span>
                        <span>
                          {exam.hrsLeft}h / {exam.hrsTotal}h
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-primary/10 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-primary-border-subtle flex gap-2">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sidebar-active text-sidebar-text text-sm font-medium hover:bg-lavender/50 transition-colors"
              >
                <IonIcon name="stats-chart-outline" className="w-4 h-4" />
                Stats
              </button>
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-primary-border-subtle text-sidebar-text text-sm font-medium hover:bg-primary/5 transition-colors"
              >
                <IonIcon name="contract-outline" className="w-4 h-4" />
                Mini
              </button>
            </div>
          </section>

          {/* Subject legend – ties calendar to Library subjects */}
          <section className="rounded-2xl bg-sidebar-active border border-primary-border-subtle p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <IonIcon name="library-outline" className="w-5 h-5 text-sidebar-text" />
              <h2 className="font-semibold text-sidebar-text text-sm">Subjects</h2>
            </div>
            <ul className="space-y-2">
              {Object.entries(SUBJECTS)
                .filter(([key]) => key !== "default")
                .map(([key, subj]) => (
                  <li key={key} className="flex items-center gap-2 text-sm">
                    <span
                      className={`w-3 h-3 rounded-full shrink-0 ${subj.bg}`}
                      aria-hidden
                    />
                    <span className="text-sidebar-text-muted">{subj.name}</span>
                  </li>
                ))}
            </ul>
            <Link
              href="/home/library"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              View in Library
              <IonIcon name="arrow-forward-outline" className="w-4 h-4" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
