"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const logoClass = isHome
    ? "text-white text-sm font-medium tracking-tight"
    : "text-[#0C0C0C] text-sm font-medium tracking-tight";

  const linkClass = isHome
    ? "text-[10px] tracking-[0.35em] uppercase text-white/55 hover:text-white transition-colors"
    : "text-[10px] tracking-[0.35em] uppercase text-[#0C0C0C]/40 hover:text-[#0C0C0C] transition-colors";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-14 py-7">
      <Link href="/" className={logoClass}>
        the blanc.
      </Link>
      <nav className="flex items-center gap-8">
        <Link href="/financing" className={linkClass}>Financing</Link>
        <Link href="/blueprints" className={linkClass}>Blueprints</Link>
        <a href="mailto:hello@theblanc.io" className={linkClass}>Enquire</a>
      </nav>
    </header>
  );
}
