export default function MatchedSkills({ skills }) {
  return (
    <div className="rounded-2xl bg-slate-800 p-6">

      <h3 className="mb-5 text-xl font-bold text-green-400">
        ✅ Matched Skills
      </h3>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-green-500 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-300"
          >
            {skill}
          </span>
        ))}

      </div>

    </div>
  );
}