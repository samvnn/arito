import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arito",
  description: "Learn how you learn",
  openGraph: {
    title: "Arito",
    description: "Learn how you learn",
    url: "https://arito.vercel.app",
    images: [
      {
        url: "/arito-logo.png",
        width: 1200,
        height: 630,
        alt: "Arito preview",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Script
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
          strategy="afterInteractive"
          type="module"
        />
        {children}
      </body>
    </html>
  );
}
