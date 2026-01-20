import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arino - Study Smarter, Not Harder",
  description: "Arino helps students study smarter—not harder—by cutting unnecessary content, using trusted curriculum-aligned resources, and personalizing learning with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
