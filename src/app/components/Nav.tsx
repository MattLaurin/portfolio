"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";

const items = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 8);
    h();
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className={clsx(
        "fixed left-1/2 top-4 z-50 -translate-x-1/2 transition",
        scrolled ? "opacity-100" : "opacity-100"
      )}
    >
      <div className="card flex items-center gap-4 rounded-full px-3 py-2 backdrop-blur-md">
        {items.map((it) => (
          <Link
            key={it.href}
            href={it.href}
            className="rounded-full px-3 py-1 text-sm text-white/90 hover:bg-white/10"
          >
            {it.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
