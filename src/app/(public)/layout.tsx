import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Yulia Method",
  description: "A structured internal rebuild. Four phases. One integrated system.",
};

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-neutral-50 text-neutral-950">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-14 flex items-center justify-between">
          <div className="text-sm tracking-[0.2em] uppercase text-neutral-600">Yulia Method</div>
          <nav className="flex items-center gap-6 text-sm text-neutral-700">
            <a className="hover:text-neutral-950" href="/method">Method</a>
            <a className="hover:text-neutral-950" href="/curriculum">Curriculum</a>
            <a className="hover:text-neutral-950" href="/login">Login</a>
          </nav>
        </header>
        {children}
        <footer className="mt-20 border-t border-neutral-200 pt-8 text-xs text-neutral-500">
          © {new Date().getFullYear()} Yulia Method
        </footer>
      </div>
    </div>
  );
}
