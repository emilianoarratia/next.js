
import type { Metadata } from "next";
import ListItem from "../components/utils/ListItem";
import { blogSections } from "../data/blog-sections";

export const metadata: Metadata = {
  title: "Blog académico | UTVT",
  description:
    "Explora publicaciones sobre tecnología, formación profesional e historias de nuestra comunidad académica.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Encabezado del blog */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="max-w-4xl">
          <span className="mb-6 inline-block text-sm font-bold uppercase tracking-[0.25em] text-emerald-800">
            Blog académico
          </span>

          <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-stone-900 sm:text-5xl lg:text-6xl">
            Ingeniería en Tecnologías de la Información e Innovación Digital
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-stone-600 sm:text-xl">
            Conocimiento, creatividad y tecnología para diseñar soluciones
            que mejoran la forma en que vivimos, aprendemos y trabajamos.
          </p>
        </div>
      </section>

      {/* Sección de categorías */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900">
            Explora el blog
          </h2>

          <p className="text-sm font-semibold tracking-wide text-emerald-800">
            Aprende. Crea. Innova.
          </p>
        </div>

        {/* Tarjetas de categorías */}
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogSections.map((section) => (
            <ListItem key={section.href} {...section} />
          ))}
        </ul>
      </section>
    </main>
  );
}