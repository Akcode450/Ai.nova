import Link from "next/link";
import Container from "./Container";
import { Button } from "@/components/ui/button";

const links = [
  {
    title: "راهکارها",
    href: "#solutions",
  },
  {
    title: "سرویس‌ها",
    href: "#services",
  },
  {
    title: "نمونه‌کارها",
    href: "#portfolio",
  },
  {
    title: "درباره ما",
    href: "#about",
  },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <Container>
        <nav className="mt-6 flex h-16 items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-6 backdrop-blur-xl">
          <Link
            href="/"
            className="text-xl font-bold tracking-wide text-white"
          >
            AI Nova
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <Button>شروع پروژه</Button>
        </nav>
      </Container>
    </header>
  );
}
