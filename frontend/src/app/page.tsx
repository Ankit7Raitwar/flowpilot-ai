
import Link from "next/link";

type Feature = {
  title: string;
  description: string;
  icon: string;
};

const features: Feature[] = [
  {
    title: "Visual Workflow Builder",
    description: "Create automation workflows using simple steps.",
    icon: "🔀",
  },
  {
    title: "AI-Powered Actions",
    description: "Use AI to analyze and process your data.",
    icon: "🤖",
  },
  {
    title: "Real-Time Monitoring",
    description: "Track workflow executions and their status.",
    icon: "📊",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-full w-full bg-slate-950 text-white">
      <header className="border-b border-slate-800">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <h1 className="text-2xl font-bold">
            FlowPilot <span className="text-emerald-400">AI</span>
          </h1>

          <nav className="flex items-center gap-6">
            <Link href="/" className="text-sm text-slate-300">
              Home
            </Link>

            <Link
              href="/dashboard"
              className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Dashboard
            </Link>
          </nav>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="mb-4 font-medium text-emerald-400">
          Smart Workflow Automation
        </p>

        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          Automate Your Work
          <br />
          With AI
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-slate-400">
          Build powerful automated workflows, connect your favorite
          tools, and let AI handle repetitive tasks.
        </p>

        <Link
          href="/dashboard"
          className="mt-8 inline-block rounded-xl bg-emerald-500 px-7 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Start Building
        </Link>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-24 md:grid-cols-3">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
          >
            <div className="mb-4 text-3xl">{feature.icon}</div>

            <h3 className="text-lg font-semibold">
              {feature.title}
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              {feature.description}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
