import HomepageSidebar from "./HomepageSidebar";

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <HomepageSidebar />
      {/* Mobile: full width + top/bottom bar spacing. Desktop: sidebar margin */}
      <main className="min-h-screen min-w-0 flex-1 overflow-y-auto pt-14 pb-24 md:pt-0 md:pb-0 md:ml-64">
        {children}
      </main>
    </div>
  );
}
