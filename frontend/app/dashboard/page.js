"use client";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Dashboard from "./Dashboard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#09090B] text-zinc-100">

      <div className="flex">

        <Sidebar />

        <section className="flex-1 overflow-y-auto">

          <div className="mx-auto max-w-7xl px-10 py-8">

            <Header />

            <Dashboard />

          </div>

        </section>

      </div>

    </main>
  );
}