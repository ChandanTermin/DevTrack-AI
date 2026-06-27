"use client";

export default function StatsCard({
  title,
  value,
  subtitle,
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg hover:shadow-violet-500/10">

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-3 text-4xl font-bold text-white">
        {value}
      </h2>

      <p className="mt-3 text-sm text-violet-400">
        {subtitle}
      </p>

    </div>
  );
}