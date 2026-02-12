"use client";

import { useState } from "react";
import IonIcon from "@/components/shared/IonIcon";

// Simulated data – replace with backend later
const SUBJECTS = [
  { name: "Mathematics", count: 45, bg: "bg-[#e8e4f0]", icon: "calculator-outline" },
  { name: "Science", count: 38, bg: "bg-[#e0f2e8]", icon: "flask-outline" },
  { name: "English", count: 32, bg: "bg-[#f5e6f0]", icon: "book-outline" },
  { name: "History", count: 28, bg: "bg-[#f5f0e0]", icon: "time-outline" },
  { name: "Chemistry", count: 35, bg: "bg-[#fce4ec]", icon: "flask-outline" },
  { name: "Physics", count: 30, bg: "bg-[#fff0e0]", icon: "flash-outline" },
  { name: "Biology", count: 42, bg: "bg-[#e8eaf6]", icon: "leaf-outline" },
  { name: "Geography", count: 25, bg: "bg-[#e0f2ee]", icon: "globe-outline" },
];

export default function LibraryPage() {
  const [view, setView] = useState<"subjects" | "all">("subjects");
  const [search, setSearch] = useState("");

  return (
    <div className="p-6 md:p-8 max-w-6xl mx-auto">
      {/* Header */}
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">
            Library
          </h1>
          <p className="text-sidebar-text-muted mt-1 text-sm md:text-base">
            Curriculum-aligned resources for your studies
          </p>
        </div>
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => setView("subjects")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              view === "subjects"
                ? "bg-primary text-primary-foreground"
                : "bg-surface border border-primary text-sidebar-text hover:bg-primary/5"
            }`}
          >
            Subjects
          </button>
          <button
            type="button"
            onClick={() => setView("all")}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              view === "all"
                ? "bg-primary text-primary-foreground"
                : "bg-surface border border-primary text-sidebar-text hover:bg-primary/5"
            }`}
          >
            All Resources
          </button>
        </div>
      </header>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="flex-1 relative">
          <IonIcon
            name="search-outline"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-sidebar-text-muted pointer-events-none"
          />
          <input
            type="search"
            placeholder="Search resources..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-primary/5 border border-primary-border-subtle text-sidebar-text placeholder:text-sidebar-text-muted text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40"
          />
        </div>
        <button
          type="button"
          className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-surface border border-primary text-sidebar-text text-sm font-medium hover:bg-primary/5 transition-colors shrink-0"
        >
          <IonIcon name="filter-outline" className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Subject cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {SUBJECTS.map((subject) => (
          <button
            key={subject.name}
            type="button"
            className={`${subject.bg} rounded-2xl p-6 text-left shadow-sm border border-primary-border-subtle hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary/20`}
          >
            <div className="flex justify-center mb-4">
              <span className="w-14 h-14 rounded-xl bg-white/80 flex items-center justify-center shadow-sm">
                <IonIcon
                  name={subject.icon}
                  className="w-8 h-8 text-primary"
                />
              </span>
            </div>
            <h2 className="font-bold text-sidebar-text text-center">
              {subject.name}
            </h2>
            <p className="text-sm text-sidebar-text-muted text-center mt-1">
              {subject.count} resources
            </p>
          </button>
        ))}
      </div>

      {/* Upload new resource */}
      <div className="flex justify-center sm:justify-end">
        <button
          type="button"
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm hover:bg-primary-dark transition-colors"
        >
          <IonIcon name="cloud-upload-outline" className="w-5 h-5" />
          Upload new resource
        </button>
      </div>
    </div>
  );
}
