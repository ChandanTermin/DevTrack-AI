"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Dashboard from "./Dashboard";

export default function DashboardPage() {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }

    setAuthorized(true);
  }, [router]);

  if (!authorized) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#09090B] text-white">
        <p className="text-zinc-400">Loading...</p>
      </main>
    );
  }

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