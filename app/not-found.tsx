
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6 py-16">
      <section className="w-full max-w-2xl text-center">
        {/* Código de error */}
        <span className="mb-6 inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-bold tracking-widest text-emerald-900">
          ERROR DE NAVEGACIÓN · 404
        </span>

        {/* Título */}
        <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-stone-900 sm:text-6xl">
          Página no encontrada
        </h1>

        {/* Descripción */}
        <p className="mx-auto mb-10 max-w-xl text-lg leading-8 text-stone-600">
          La dirección que buscas no está disponible o pudo haber cambiado.
          Regresa al inicio para continuar explorando.
        </p>

        {/* Botones de navegación */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-800 px-7 py-4 font-semibold text-white transition-colors hover:bg-emerald-900"
          >
            Ir al inicio
          </Link>

          <Link
            href="/blog"
            className="inline-flex items-center justify-center rounded-xl border border-stone-300 bg-white px-7 py-4 font-semibold text-stone-800 transition-colors hover:border-emerald-700 hover:text-emerald-800"
          >
            Ver el blog
          </Link>
        </div>
      </section>
    </main>
  );
}