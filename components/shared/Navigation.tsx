import Link from "next/link";

export default function Navigation() {
  return (
    <div className="px-4 md:px-8 lg:px-16 pt-3 sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto flex items-center justify-between bg-white rounded-full shadow-md px-3 py-2 gap-3">
        <button
          type="button"
          className="w-8 h-8 shrink-0 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
          aria-label="Open menu"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link
          href="/"
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
    </div>
  );
}
