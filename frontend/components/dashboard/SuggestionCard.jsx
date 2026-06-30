export default function SuggestionCard({ suggestions }) {
  if (!suggestions?.length) return null;

  return (
    <div className="mt-8 rounded-2xl bg-slate-800 p-6">

      <h3 className="mb-5 text-xl font-bold text-yellow-400">
        💡 Resume Improvement Suggestions
      </h3>

      <div className="space-y-3">

        {suggestions.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-yellow-300"
          >
            {item}
          </div>
        ))}

      </div>

    </div>
  );
}