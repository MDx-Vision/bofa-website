import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BOFA | Breath of Fresh Aire",
    template: "%s | BOFA",
  },
  description:
    "BOFA delivers comprehensive environmental remediation and construction services for government, commercial, and residential clients nationwide. EPA certified, OSHA compliant.",
  keywords: [
    "environmental remediation",
    "asbestos abatement",
    "lead paint removal",
    "mold remediation",
    "hazardous material removal",
    "general contracting",
    "construction management",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bofaire.com",
    siteName: "BOFA",
    title: "BOFA | Breath of Fresh Aire",
    description:
      "Comprehensive environmental remediation and construction services for government, commercial, and residential clients nationwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOFA | Breath of Fresh Aire",
    description:
      "Comprehensive environmental remediation and construction services nationwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
