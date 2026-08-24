import SectionHeading from '../components/SectionHeading'

const certificates = [
  ['NPTEL – Programming in Java', 'NPTEL', 'Programming in Java'],
  ['Juniper Networks Certified Associate', 'Juniper Networks', 'Junos (JNCIA-Junos)'],
]

export default function Certifications() { return <div className="reveal"><SectionHeading eyebrow="Credentials" title="Certifications built on practical foundations.">Verified learning milestones from recognized technical programs.</SectionHeading><div className="grid gap-5 md:grid-cols-2">{certificates.map(([title, issuer, detail], index) => <article key={title} className="cert-card rounded-2xl border border-cyan-300/20 bg-white/80 p-6 dark:bg-white/5"><div className="flex items-start gap-4"><div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-lg text-violet-500 dark:text-violet-300">{index === 0 ? 'N' : 'J'}</div><div><p className="font-display text-xl font-semibold text-slate-950 dark:text-white">{title}</p><p className="mt-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">{issuer}</p><span className="mt-4 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">{detail}</span></div></div></article>)}</div></div> }
