import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { ArrowUpRight } from '../components/Icons'

const stack = ['React.js', 'Tailwind CSS', 'Python 3.11+', 'FastAPI', 'Uvicorn', 'Pydantic', 'SQLAlchemy 2.x', 'PostgreSQL', 'Alembic', 'HTTPX', 'pandas', 'openpyxl', 'JWT authentication', 'Perdix integration']

function Architecture() {
  return <div className="mx-auto max-w-3xl space-y-3">
    <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">Presentation layer</p>
      <p className="mt-2 font-display text-xl font-semibold">Frontend</p>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">React.js and Tailwind CSS provide stakeholder-facing workflows and dashboards.</p>
    </div>
    <div className="text-center text-2xl text-cyan-500">↓</div>
    <div className="rounded-2xl border border-indigo-300/30 bg-indigo-400/10 p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-300">Application layer</p>
      <p className="mt-2 font-display text-xl font-semibold">FastAPI REST API</p>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Authentication, validation, business logic, workflow orchestration, and database interaction.</p>
    </div>
    <div className="text-center text-2xl text-cyan-500">↓</div>
    <div className="rounded-2xl border border-emerald-300/30 bg-emerald-400/10 p-6">
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-300">Data layer</p>
      <p className="mt-2 font-display text-xl font-semibold">PostgreSQL</p>
      <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">Structured storage for application data and workflow records.</p>
    </div>
  </div>
}

export default function Munify() {
  return <div className="reveal">
    <section className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950 p-7 text-white shadow-2xl shadow-cyan-950/20 sm:p-12 dark:bg-[#0b1728]">
      <div className="absolute right-0 top-0 h-56 w-56 translate-x-1/3 -translate-y-1/3 rounded-full bg-cyan-400/20 blur-3xl" />
      <p className="relative text-xs font-bold uppercase tracking-[.25em] text-cyan-300">Featured internship project</p>
      <h1 className="relative mt-5 max-w-4xl font-display text-4xl font-semibold tracking-tight sm:text-6xl">Municipal Funding Platform <span className="text-cyan-300">(Munify)</span></h1>
      <p className="relative mt-5 max-w-2xl text-lg leading-8 text-slate-300">A web-based municipal project funding and workflow management platform.</p>
    </section>

    <section className="mt-16">
      <SectionHeading eyebrow="01 · Project introduction" title="See Munify in action.">A short introduction to the platform and its workflow.</SectionHeading>
      <div className="overflow-hidden rounded-2xl border border-cyan-300/20 bg-slate-950 p-2 shadow-xl shadow-cyan-950/10">
        <video controls preload="metadata" className="aspect-video w-full rounded-xl bg-slate-900" aria-label="Munify project introduction video">
          <source src={`${import.meta.env.BASE_URL}Munify-introduction.mp4`} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
      <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">Project introduction video.</p>
    </section>

    <section className="mt-20">
      <SectionHeading eyebrow="02 · Architecture" title="Three layers, one connected workflow.">
        <Architecture />
      </SectionHeading>
    </section>

    <section className="mt-20">
      <SectionHeading eyebrow="03 · Technology stack" title="The project technology landscape." />
      <div className="flex flex-wrap gap-3">{stack.map((item) => <span key={item} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">{item}</span>)}</div>
    </section>

    <div className="mt-12 flex flex-wrap gap-4">
      <Link to="/projects" className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white dark:bg-cyan-400 dark:text-slate-950">Back to projects <ArrowUpRight /></Link>
      <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border border-slate-300 px-5 py-3 text-sm font-bold dark:border-white/20">Get in touch <ArrowUpRight /></Link>
    </div>
  </div>
}
