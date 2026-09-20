"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/lib/data";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/experience", label: "Work experience" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Publications" },
  { href: "/articles", label: "Scholary Service" },
  { href: "/collaboration", label: "Awards" },
  { href: "/ieee-author", label: "Games" },
  { href: "/hire-me", label: "Hire me" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-[rgba(251,248,241,0.86)] backdrop-blur-md shadow-[0_6px_24px_rgba(17,24,39,0.04)]">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-[1.7rem] font-semibold tracking-tight text-paper"
        >
          {profile.name}
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-1.5 text-[11.5px] font-bold uppercase tracking-[0.12em]">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-2.5 py-1.5 transition-colors ${
                  active
                    ? "bg-[rgba(15,118,110,0.08)] text-signal"
                    : "text-muted hover:bg-[rgba(15,118,110,0.06)] hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
