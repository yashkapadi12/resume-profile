import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { resumeData } from "@/data/resume-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yash Kapadi - DevOps Engineer",
  description: "Resume and portfolio of Yash Kapadi: DevOps Engineer & former Full-Stack Developer.",
  keywords: ["Yash Kapadi", "resume", "portfolio", "DevOps", "developer", "React", "Next.js"],
  authors: [{ name: "Yash Kapadi" }],
  openGraph: {
    title: "Yash Kapadi - DevOps Engineer",
    description: "Resume and portfolio of Yash Kapadi: DevOps Engineer & former Full-Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-base">
            <p className="text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} Yash Kapadi</p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {resumeData.personal.email && (
                <a
                  href={`mailto:${resumeData.personal.email}`}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  aria-label="Email"
                >
                  {resumeData.personal.email}
                </a>
              )}
              {resumeData.personal.phone && (
                <a
                  href={`tel:${resumeData.personal.phone}`}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                  aria-label="Phone"
                >
                  {resumeData.personal.phone}
                </a>
              )}
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}