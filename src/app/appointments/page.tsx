"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AppointmentsPage() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetch("/api/appointments").then((r) => r.json()).then(setAppointments);
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-white">Agendamentos</h1>
          <p className="text-slate-400">Acompanhe suas reuniões e ligações.</p>
        </div>
        <Link href="#" className="bg-[#0071E3] px-4 py-2 rounded-lg text-white font-semibold hover:opacity-90">
          Novo agendamento
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-slate-400 text-sm border-b border-slate-700">
              <th className="pb-3 font-semibold">Título</th>
              <th className="pb-3 font-semibold">Data</th>
              <th className="pb-3 font-semibold">Tipo</th>
              <th className="pb-3 font-semibold">Status</th>
              <th className="pb-3 font-semibold text-right">Ação</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {appointments.map((appt: any) => (
              <tr key={appt.id} className="border-b border-slate-700 hover:bg-[#1e293b]/50 transition-colors">
                <td className="py-3 text-white">{appt.title}</td>
                <td className="py-3 text-slate-300">{new Date(appt.date).toLocaleDateString("pt-BR")}</td>
                <td className="py-3 text-slate-300">{appt.type}</td>
                <td className="py-3">
                  <span className={`px-2 py-1 rounded text-xs font-bold ${appt.status === "SCHEDULED" ? "bg-blue-900/30 text-blue-400" : appt.status === "COMPLETED" ? "bg-green-900/30 text-green-400" : "bg-slate-900/30 text-slate-400"}`}>
                    {appt.status}
                  </span>
                </td>
                <td className="py-3 text-right">
                  <Link href="#" className="text-[#0071E3] text-xs font-semibold hover:underline">Ver</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {appointments.length === 0 && (
        <div className="text-center py-10 text-slate-500">Nenhum agendamento marcado.</div>
      )}
    </div>
  );
}
