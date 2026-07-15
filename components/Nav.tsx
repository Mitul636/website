"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/plans", label: "Plans" },
  { href: "/about", label: "About" },
  { href: "/rules", label: "Rules" },
  { href: "/policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <div className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="mark">◆</span> TigerHost
        </Link>
        <nav className="nav-links">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact" className="btn">Open a ticket</Link>
      </div>
    </div>
  );
}
