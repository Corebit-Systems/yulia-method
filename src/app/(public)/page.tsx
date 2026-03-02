export default function HomePage() {
  return (
    <main>
      <section className="mb-16">
        <h1 className="text-5xl leading-[1.05] tracking-tight md:text-6xl">
          You are not behind.<br />You are unstructured.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-700">
          This is not motivation. It is architecture.
        </p>

        <div className="mt-10 flex gap-3">
          <a
            href="/method"
            className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Enter the Method
          </a>
          <a
            href="/curriculum"
            className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-100"
          >
            Preview Phase I
          </a>
        </div>
      </section>

      <section className="mb-16">
        <p className="max-w-2xl leading-relaxed text-neutral-800">
          You consume. You plan. You restart. Nothing integrates.
        </p>
      </section>

      <section className="mb-16 rounded-3xl border border-neutral-200 p-8">
        <div className="text-sm uppercase tracking-[0.2em] text-neutral-500">
          Full access
        </div>
        <div className="mt-3 text-2xl font-medium">€799</div>

        <div className="mt-6 flex gap-3">
          <a
            href="/checkout"
            className="rounded-2xl bg-emerald-600 px-5 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Enter Full Method
          </a>
          <a
            href="/upgrade"
            className="rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-medium hover:bg-neutral-100"
          >
            Learn what unlocks
          </a>
        </div>
      </section>
    </main>
  );
}
