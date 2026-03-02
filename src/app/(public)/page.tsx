export default function HomePage() {
  return (
    <main className="px-6 md:px-12 lg:px-24 py-24">
      {/* HERO */}
      <section className="max-w-5xl">
        <h1 className="text-5xl md:text-7xl leading-[1.05] tracking-tight font-semibold">
          You are not behind.
          <br />
          You are unstructured.
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-neutral-600">
          This is not motivation. It is architecture.
        </p>

        <div className="mt-12 flex gap-4">
          <a
            href="/method"
            className="rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Enter the Method
          </a>

          <a
            href="/curriculum"
            className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
          >
            Preview Phase I
          </a>
        </div>
      </section>

      {/* STATEMENT BLOCK */}
      <section className="mt-24 max-w-3xl">
        <p className="text-xl leading-relaxed text-neutral-800">
          You consume. You plan. You restart.
          <br />
          Nothing integrates.
        </p>

        <div className="mt-10 text-sm uppercase tracking-[0.25em] text-neutral-400">
          4 Phases. 1 System. No noise.
        </div>
      </section>

      <section className="mt-20 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-neutral-200 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Phase System
            </div>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800">
              A 4-phase sequence that turns scattered effort into a single
              operating system.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Lesson Format
            </div>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800">
              Text-based lessons. No video. No noise. Clear instructions and
              checkpoints.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Progress Logic
            </div>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800">
              Progress is calculated automatically. You always know what’s next.
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 p-8">
            <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
              Premium Access
            </div>
            <p className="mt-4 text-lg leading-relaxed text-neutral-800">
              One product. One price. Everything unlocked. Built to feel
              inevitable.
            </p>
          </div>
        </div>
      </section>

      {/* PRICING BLOCK */}
      <section className="mt-32 max-w-4xl rounded-3xl border border-neutral-200 p-10">
        <div className="text-xs uppercase tracking-[0.3em] text-neutral-500">
          Full Access
        </div>

        <div className="mt-4 text-3xl md:text-4xl font-medium">€799</div>

        <div className="mt-10 flex gap-4">
          <a
            href="/checkout"
            className="rounded-xl bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
          >
            Enter Full Method
          </a>

          <a
            href="/upgrade"
            className="rounded-xl border border-neutral-300 px-6 py-3 text-sm font-medium transition hover:bg-neutral-100"
          >
            Learn what unlocks
          </a>
        </div>
      </section>
    </main>
  );
}
