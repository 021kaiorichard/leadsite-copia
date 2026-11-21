"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [stats, setStats] = useState({ leads: 0, sites: 0, crm: 0, appointments: 0 });

  useEffect(() => {
    Promise.all([
      fetch("/api/leads").then((r) => r.json()),
      fetch("/api/websites").then((r) => r.json()),
      fetch("/api/crm").then((r) => r.json()),
      fetch("/api/appointments").then((r) => r.json()),
    ]).then(([leads, sites, crm, appts]) => {
      setStats({ leads: leads.length, sites: sites.length, crm: crm.length, appointments: appts.length });
    });
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-white">Dashboard</h1>
        <p className="text-slate-400">Visão geral dos seus leads, sites e funil de vendas.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Leads" value={stats.leads} color="#0071E3" icon="🔍" />
        <StatCard title="Sites" value={stats.sites} color="#0A3D2A" icon="✨" />
        <StatCard title="CRM" value={stats.crm} color="#B26B00" icon="📋" />
        <StatCard title="Agendamentos" value={stats.appointments} color="#1A7E3A" icon="📅" />
      </div>

      <div className="bg-[#1e293b] rounded-xl border border-slate-700 p-6">
        <h2 className="text-xl font-bold text-white mb-4">Ações rápidas</h2>
        <div className="grid gap-4 md:grid-cols-4">
          <ActionButton href="/leads" label="Novo Lead" icon="🔍" />
          <ActionButton href="/sites" label="Gerar Site" icon="✨" />
          <ActionButton href="/crm" label="Abrir CRM" icon="📋" />
          <ActionButton href="/appointments" label="Agendar" icon="📅" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, color, icon }: { title: string; value: number; color: string; icon: string }) {
  return (
    <div className="bg-[#1e293b] rounded-xl border border-slate-700 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
        <div className="w-10 h-10 rounded-lg bg-[#1e293b]/50 flex items-center justify-center text-[color]">
          {icon}
        </div>
      </div>
    </div>
  );
}

function ActionButton({ href, label, icon }: { href: string; label: string; icon: string }) {
  return (
    <a href={href} className="flex flex-col items-center gap-2 p-3 rounded-xl bg-[#1e293b] border border-slate-700 text-white hover:bg-slate-700 transition-colors">
      <span>{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}
