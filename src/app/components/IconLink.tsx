import { ReactNode } from "react";

export default function IconLink({
  href, children, label,
}: { href: string; label: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="rounded-full bg-white/5 p-3 ring-1 ring-white/10 transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}
