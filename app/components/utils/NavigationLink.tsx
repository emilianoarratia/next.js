"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavigationItem } from "../../types/navigation";

type NavigationLinkProps = NavigationItem;

export default function NavigationLink({
  href,
  label,
}: NavigationLinkProps) {
  const pathname = usePathname();

  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <li>
      <Link
        href={href}
        aria-current={isActive ? "page" : undefined}
        className={`inline-flex items-center rounded-lg px-3 py-2 transition-all duration-200 ${
          isActive
            ? "bg-emerald-100 font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200"
            : "text-zinc-600 hover:bg-zinc-100 hover:text-emerald-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-emerald-400"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}