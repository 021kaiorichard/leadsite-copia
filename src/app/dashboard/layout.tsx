"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Search, Sparkles, SquareKanban, Calendar } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/leads", label: "Leads", icon: Search },
  { href: "/sites", label: "Sites", icon: Sparkles },
  { href: "/crm", label: "CRM", icon: SquareKanban },
  { href: "/appointments", label: "Agendamentos", icon: Calendar },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#0f172a] overflow-hidden selection:bg-[#0071E3] selection:text-white">
      <aside className="hidden w-72 border-r border-slate-700 bg-[#1e293b]/40 backdrop-blur flex-col h-full z-30">
        <div className="p-6 flex items-center gap-3 border-b border-slate-700">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <rect width="30" height="30" x="1" y="1" rx="8" stroke="#0071E3" strokeWidth="2" />
            <path d="M10 10h12M10 16h8M16 22v-4" stroke="#0071E3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="font-extrabold tracking-tight text-white">LeadSite</span>
        </div>
        <nav className="p-4 space-y-1">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-sm font-medium ${active ? "bg-[#0071E3] text-white shadow-lg" : "text-slate-300 hover:bg-slate-700 hover:text-white"}`}
              >
                <Icon width="18" height="18" strokeWidth={2} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto p-6 border-t border-slate-700">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-800 text-white font-semibold">
            <span>👤 Usuário</span>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <main className="flex-1 overflow-y-auto p-6 sm:p-8">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
