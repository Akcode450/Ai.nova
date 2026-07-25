import type { Metadata } from "next";
import { Geist, Vazirmatn } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-vazirmatn",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://akcode.dev"),

  title: {
    default: "AI Nova",
    template: "%s | AI Nova",
  },

  description:
    "طراحی و توسعه سیستم‌های هوش مصنوعی، AI Agent، اتوماسیون سازمانی، داشبوردهای مدیریتی و وب‌اپلیکیشن‌های مدرن.",

  keywords: [
    "AI",
    "Artificial Intelligence",
    "AI Agent",
    "Automation",
    "Next.js",
    "React",
    "هوش مصنوعی",
    "اتوماسیون",
    "طراحی سایت",
  ],

  authors: [
    {
      name: "AK Code",
    },
  ],

  creator: "AK Code",
  publisher: "AK Code",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "AI Nova",
    description:
      "AI Development Studio - طراحی سیستم‌های هوش مصنوعی و نرم‌افزارهای نسل جدید",
    url: "https://akcode.dev",
    siteName: "AI Nova",
    locale: "fa_IR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "AI Nova",
    description:
      "AI Development Studio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={cn(geist.variable, vazirmatn.variable)}
    >
      <body
        className={cn(
          "min-h-screen bg-[#050816] text-white antialiased",
          "font-vazirmatn"
        )}
      >
        {children}
      </body>
    </html>
  );
}