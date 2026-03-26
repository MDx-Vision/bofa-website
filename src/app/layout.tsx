import type { Metadata } from "next";
import { Lexend, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "BOFA | Breath of Fresh Aire",
    template: "%s | BOFA",
  },
  description:
    "BOFA — Minority-owned environmental remediation and general contracting. Asbestos, lead, mold removal. EPA-certified. Serving NYC and the tri-state area. Free estimates.",
  keywords: [
    "environmental remediation",
    "asbestos abatement",
    "lead paint removal",
    "mold remediation",
    "hazardous material removal",
    "general contracting",
    "construction management",
    "MWBE certified",
    "minority owned contractor",
    "NYC DOB",
    "government contracting",
    "residential remediation",
    "EPA certified contractor NYC",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bofaire.com",
    siteName: "BOFA",
    title: "BOFA | Minority-Owned Environmental Remediation & Contracting",
    description:
      "MWBE-certified environmental remediation and general contracting. Asbestos, lead, mold. Serving NYC and the tri-state area. Free estimates.",
  },
  twitter: {
    card: "summary_large_image",
    title: "BOFA | Minority-Owned Environmental Remediation & Contracting",
    description:
      "MWBE-certified. EPA-certified. Asbestos, lead, mold removal. NYC & tri-state area. Free estimates.",
  },
  icons: {
    icon: "/favicon.svg",
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
      <body className={`${lexend.variable} ${sourceSans.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
