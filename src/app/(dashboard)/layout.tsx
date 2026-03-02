import "@/app/globals.css";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 flex">
      <aside className="w-[240px] border-r border-neutral-800 px-5 py-8">
        <div className="text-xs uppercase tracking-[0.2em] text-neutral-400">
          Yulia Method
        </div>
      </aside>

      <main className="flex-1 px-8 py-10">
        {children}
      </main>
    </div>
  );
}
