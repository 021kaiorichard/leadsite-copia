"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

export default function CrmPage() {
  const [items, setItems] = useState([]);
  const [stages, setStages] = useState([
    { id: "stage_novo", name: "Novo", color: "#0071E3" },
    { id: "stage_contato", name: "Contato", color: "#0A3D2A" },
    { id: "stage_proposta", name: "Proposta Enviada", color: "#B26B00" },
    { id: "stage_negociacao", name: "Negociação", color: "#D92D20" },
    { id: "stage_fechado", name: "Fechado", color: "#1A7E3A" },
  ]);

  useEffect(() => {
    fetch("/api/crm").then((r) => r.json()).then(setItems);
  }, []);

  const columns = stages.map((stage) => ({
    ...stage,
    items: items.filter((i: any) => i.stage_id === stage.id),
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white">CRM</h1>
          <p className="text-slate-400">Arraste os leads pelo funil de vendas.</p>
        </div>
        <button className="bg-[#0071E3] px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90 flex items-center gap-2">
          <Plus size="16" /> Adicionar lead
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map((col) => (
          <div
            key={col.id}
            className="w-72 min-w-[200px] bg-[#1e293b] rounded-xl border border-slate-700 flex flex-col"
          >
            <div className="p-3 border-b border-slate-700 flex items-center justify-between">
              <span className="font-semibold text-white">{col.name}</span>
              <span className={`w-2 h-2 rounded-full ${col.color}`}></span>
              <span className="text-xs text-slate-400">{col.items.length}</span>
            </div>
            <div className="flex-1 p-2 space-y-2 min-h-[200px]">
              {col.items.map((item: any) => (
                <div
                  key={item.id}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 cursor-pointer hover:bg-slate-700 transition-colors"
                >
                  <p className="text-white text-sm font-medium truncate">{item.notes || "Sem nota"}</p>
                  <p className="text-xs text-slate-400 mt-1">{item.lead_id}</p>
                </div>
              ))}
              {col.items.length === 0 && (
                <div className="text-center py-4 text-slate-500 text-xs">Vazio</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
