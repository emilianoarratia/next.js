import type { NavigationItem } from "../../types/navigation";
import NavigationLink from "./NavigationLink";

const navigationItems: NavigationItem[] = [
  {
    href: "/",
    label: "Inicio",
  },
  {
    href: "/carrera",
    label: "Mi carrera",
  },
  {
    href: "/about",
    label: "Acerca de",
  },
  {
    href: "/blog",
    label: "Blog",
  },
];

export default function Navigation() {
  return (
    <nav
      aria-label="Navegación principal"
      className="order-3 w-full sm:order-0 sm:w-auto"
    >
      <ul className="flex items-center gap-1 overflow-x-auto text-sm font-medium">
        {navigationItems.map((item) => (
          <NavigationLink
            key={item.href}
            href={item.href}
            label={item.label}
          />
        ))}
      </ul>
    </nav>
  );
}