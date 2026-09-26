
import Link from "next/link";
import type { BlogSection } from "../../data/blog-sections";

type ListItemProps = BlogSection;

export default function ListItem({
  href,
  label,
  description,
  number,
}: ListItemProps) {
  return (
    <li className="h-full list-none">
      <Link
        href={href}
        className="group flex h-full min-h-[280px] flex-col rounded-2xl border border-stone-200 bg-white p-7 transition-all duration-200 hover:-translate-y-1 hover:border-emerald-700 hover:shadow-lg"
      >
        {/* Número de la categoría */}
        <span className="mb-8 text-sm font-semibold tracking-widest text-emerald-700">
          {number}
        </span>

        {/* Título */}
        <h3 className="mb-4 text-2xl font-bold text-stone-900 transition-colors duration-200 group-hover:text-emerald-800">
          {label}
        </h3>

        {/* Descripción */}
        <p className="mb-8 flex-grow text-base leading-7 text-stone-600">
          {description}
        </p>

        {/* Enlace visual */}
        <span className="inline-flex items-center gap-2 font-semibold text-emerald-800">
          Ver publicaciones
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-2"
          >
            →
          </span>
        </span>
      </Link>
    </li>
  );
}