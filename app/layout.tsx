import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Navbar } from "@/components/ui/Navbar";
import { Sidebar } from "@/components/ui/Sidebar";
import { RightRail } from "@/components/ui/RightRail";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrantsFound Agentic Platform",
  description:
    "Accelerate grant prospecting, reporting, and compliance with agentic workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${manrope.variable} font-sans bg-slate text-cloud min-h-screen`}
      >
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="flex min-h-screen bg-midnight">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col">
              <div className="flex flex-1 gap-6 px-6 py-6">
                <main id="main-content" className="flex-1">
                  {children}
                </main>
                <RightRail />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
