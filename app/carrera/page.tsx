export default function CarreraPage() {
  return (
    <main className="flex flex-1 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-[0.16em] text-emerald-700">
            UTVT
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-emerald-950 sm:text-5xl">
            Mi carrera
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Ingeniería en Tecnologías de la Información e Innovación Digital.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900">
                Formación
              </h2>

              <p className="mt-3 leading-7 text-zinc-600">
                Conoce las áreas de formación y las competencias que se
                desarrollan durante la carrera.
              </p>
            </section>

            <section className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-zinc-900">
                Innovación digital
              </h2>

              <p className="mt-3 leading-7 text-zinc-600">
                Aprende sobre desarrollo de software, tecnologías digitales y
                soluciones para organizaciones.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}