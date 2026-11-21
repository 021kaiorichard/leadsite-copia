"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SitesPage() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    fetch("/api/websites").then((r) => r.json()).then(setSites);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Sites</h1>
          <p className="text-slate-400">Gerencie os sites gerados para seus clientes.</p>
        </div>
        <Link href="#" className="bg-[#0071E3] px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90">
          Gerar novo site
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {sites.map((site: any) => (
          <div key={site.id} className="bg-[#1e293b] rounded-xl border border-slate-700 p-5">
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-white font-semibold">{site.title}</h3>
              <span className={`px-2 py-1 rounded text-xs font-bold ${site.published ? "bg-green-900/30 text-green-400" : "bg-slate-900/30 text-slate-400"}`}>
                {site.published ? "Publicado" : "Rascunho"}
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-3">{site.subtitle || ""}</p>
            <div className="flex gap-2">
              <a href={`/sites/${site.slug}`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-[#0071E3] px-3 py-2 rounded text-center text-xs text-white font-semibold hover:opacity-90">
                Ver site
              </a>
              <Link href={`/sites/${site.id}`} className="bg-slate-800 px-3 py-2 rounded text-center text-xs text-slate-300 font-semibold hover:bg-slate-700">
                Editar
              </Link>
            </div>
          </div>
        ))}
      </div>

      {sites.length === 0 && (
        <div className="text-center py-10 text-slate-500">Nenhum site criado ainda.</div>
      )}
    </div>
  );
}
