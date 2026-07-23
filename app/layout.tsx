import type { Metadata } from "next";
import { Vazirmatn, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    "طراحی سایت، هوش مصنوعی و توسعه نرم‌افزار برای کسب‌وکارهای مدرن.",

  keywords: [
    "هوش مصنوعی",
    "طراحی سایت",
    "Next.js",
    "React",
    "AI",
  ],

  authors: [
    {
      name: "AK Code",
    },
  ],

  creator: "AK Code",

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
    <html
      lang="fa"
      dir="rtl"
      suppressHydrationWarning
      className={cn("font-sans", geist.variable)}
    >
      <body>{children}</body>
    </html>
  );
}