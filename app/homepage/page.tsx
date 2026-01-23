export default function Homepage() {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Welcome to your Arito dashboard
        </h1>
        <p className="text-primary/70 mb-6">
          This is a temporary homepage that users see after logging in successfully.
          You can customize this page later with your study planner, resources, and
          other features.
        </p>
        <div className="rounded-xl border border-primary/10 bg-white/60 backdrop-blur-sm p-6">
          <p className="text-primary/80">
            ✅ Auth is working. You&apos;re now on <code>/homepage</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
