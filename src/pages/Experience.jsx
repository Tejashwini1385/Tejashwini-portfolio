import SectionHeading from '../components/SectionHeading'

const contributions = [
  'Backend API development using FastAPI',
  'Dashboard workflows and business logic',
  'Frontend-backend integration',
  'Data migration using real-world datasets',
  'Git and Jenkins development workflow',
]

export default function Experience() {
  return <div className="reveal">
    <SectionHeading eyebrow="Experience" title="Industry experience building practical workflows.">
      A hands-on software development internship focused on a real-world municipal funding platform.
    </SectionHeading>
    <article className="max-w-4xl rounded-2xl border border-cyan-300/20 bg-white p-7 dark:bg-white/5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-cyan-700 dark:text-cyan-300">Jan 2026 – May 2026</p>
          <h2 className="mt-2 font-display text-2xl font-semibold text-slate-950 dark:text-white">Software Development Intern</h2>
          <p className="mt-2 text-lg font-medium text-violet-700 dark:text-violet-300">Dvara Solutions Pvt Ltd</p>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-sm font-bold text-cyan-700 dark:text-cyan-200">Munify Funding Platform</span>
      </div>
      <p className="mt-6 border-t border-slate-100 pt-5 leading-7 text-slate-600 dark:border-white/10 dark:text-slate-300">Contributed to a web-based municipal funding platform designed to organize project proposals, funding workflows, approvals, documents, monitoring, and reporting.</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {contributions.map((item) => <div key={item} className="rounded-xl border border-cyan-300/15 bg-cyan-400/5 px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-200"><span className="mr-2 text-cyan-600 dark:text-cyan-300">✦</span>{item}</div>)}
      </div>
    </article>
  </div>
}
