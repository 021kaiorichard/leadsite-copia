"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Search, ChevronRight } from "lucide-react";

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/leads").then((r) => r.json()).then(setLeads);
  }, []);

  const filtered = leads.filter((l: any) =>
    l.name.toLowerCase().includes(search.toLowerCase()) ||
    l.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Leads</h1>
          <p className="text-slate-400">Encontre negócios locais sem site.</p>
        </div>
        <Link href="/api/leads?action=new" className="bg-[#0071E3] px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90">
          <Plus size="16" className="mr-2" /> Novo Lead
        </Link>
      </div>

      <div className="relative">
        <Search size="18" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
        <input
          type="text"
          placeholder="Buscar por nome, categoria ou cidade..."
          className="w-full pl-9 pr-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white focus:border-[#0071E3] outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-400 text-sm border-b border-slate-700">
              <th className="pb-3 font-semibold">Nome</th>
              <th className="pb-3 font-semibold">Categoria</th>
              <th className="pb-3 font-semibold">Cidade</th>
              <th className="pb-3 font-semibold">Status</th>
              <th className="pb-3 font-semibold">Site</th>
              <th className="pb-3 font-semibold text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {filtered.map((lead: any) => (
              <tr key={lead.id} className="border-b border-slate-700 hover:bg-[#1e293b]/50 transition-colors">
                <td className="py-3 text-white">{lead.name}</td>
                <td className="py-3 text-slate-300">{lead.category}</td>
                <td className="py-3 text-slate-300">{lead.city}</td>
                <td className="py-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-bold ${lead.status === "HOT" ? "bg-green-900/30 text-green-400" : lead.status === "WARM" ? "bg-amber-900/30 text-amber-400" : "bg-slate-900/30 text-slate-400"}`}
                  >
                    {lead.status}
                  </span>
                </td>
                <td className="py-3">
                  {lead.has_website ? (
                    <span className="text-slate-400 text-xs">Já tem site</span>
                  ) : (
                    <span className="text-red-400 text-xs font-bold">Sem site</span>
                  )}
                </td>
                <td className="py-3 text-right">
                  <Link
                    href={`/leads/${lead.id}`}
                    className="text-[#0071E3] text-xs font-semibold hover:underline flex items-center gap-1"
                  >
                    Ver <ChevronRight size="14" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-10 text-slate-500">Nenhum lead encontrado.</div>
      )}
    </div>
  );
}
