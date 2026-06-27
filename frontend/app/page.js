export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex items-center justify-between p-8">
        <h1 className="text-3xl font-bold text-violet-400">
          DevTrack AI
        </h1>

        <button className="rounded-lg bg-violet-600 px-5 py-2 hover:bg-violet-700">
          Login
        </button>
      </nav>

      <section className="flex h-[80vh] flex-col items-center justify-center text-center">
        <h1 className="text-6xl font-bold">
          Build Your Career
          <br />
          with AI
        </h1>

        <p className="mt-6 max-w-xl text-gray-400">
          Resume Analyzer • Internship Tracker • AI Career Assistant
        </p>

        <button className="mt-10 rounded-xl bg-violet-600 px-8 py-4 text-xl hover:bg-violet-700">
          Get Started
        </button>
      </section>
    </main>
  );
}