function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6 py-16">
      <section className="max-w-2xl w-full space-y-8">
        <div className="space-y-3">
          <p className="text-amber-300 font-semibold tracking-wide uppercase text-sm">
            Welcome
          </p>
          <h1 className="text-4xl sm:text-5xl font-black leading-tight">
            Conventional Commit Project
          </h1>
          <p className="text-slate-400 text-lg">
            A playground for practicing disciplined commit messages and
            automated, worry-free releases.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
            <h2 className="font-bold text-amber-300">Conventional Commits</h2>
            <p className="text-sm text-slate-400">
              Every commit follows a structured format (
              <code className="text-amber-200">feat</code>,{" "}
              <code className="text-amber-200">fix</code>,{" "}
              <code className="text-amber-200">chore</code>, etc.) enforced
              with commitlint.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
            <h2 className="font-bold text-amber-300">Semantic Versioning</h2>
            <p className="text-sm text-slate-400">
              Commit types map directly to version bumps — major, minor, or
              patch — so version numbers stay meaningful.
            </p>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
            <h2 className="font-bold text-amber-300">Automated Releases</h2>
            <p className="text-sm text-slate-400">
              semantic-release reads commit history to generate changelogs
              and publish releases automatically.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
