"use client";

export default function StatsCard({
  icon,
  title,
  value,
  subtitle,
}) {
  return (
    <div className="group rounded-3xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl">

      <div className="mb-5 flex items-center justify-between">

        <div className="rounded-xl bg-slate-800 p-3 text-blue-500">
          {icon}
        </div>

        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
          {title}
        </span>

      </div>

      <h2 className="text-4xl font-bold tracking-tight text-white">
        {value}
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        {subtitle}
      </p>

    </div>
  );
}