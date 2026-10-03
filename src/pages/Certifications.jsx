import SectionHeading from '../components/SectionHeading'

const certificates = [
  { title: 'NPTEL – Programming in Java', issuer: 'NPTEL', detail: 'Programming in Java', initial: 'N', url: 'https://drive.google.com/file/d/1YmYJTXJZBLQSWnXnpcx9chiIO_xOGEm9/view' },
  { title: 'Juniper Networks Certified Associate', issuer: 'Juniper Networks', detail: 'Junos (JNCIA-Junos)', initial: 'J', url: 'https://www.credly.com/badges/ae78f6e9-6ba7-4766-a591-c2e420b278c9/public_url' },
]

export default function Certifications() {
  return <div className="reveal">
    <SectionHeading eyebrow="Credentials" title="Certifications built on practical foundations.">
      Verified learning milestones from recognized technical programs.
    </SectionHeading>
    <div className="grid gap-5 md:grid-cols-2">
      {certificates.map(({ title, issuer, detail, initial, url }) => <article key={title} className="cert-card rounded-2xl border border-cyan-300/20 bg-white/80 p-6 dark:bg-white/5">
        <div className="flex items-start gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-lg text-violet-500 dark:text-violet-300">{initial}</div>
          <div>
            <p className="font-display text-xl font-semibold text-slate-950 dark:text-white">{title}</p>
            <p className="mt-2 text-sm font-medium text-cyan-700 dark:text-cyan-300">{issuer}</p>
            <span className="mt-4 inline-flex rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">{detail}</span>
            <a href={url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-bold text-cyan-700 transition hover:text-violet-600 dark:text-cyan-300">
              View credential →
            </a>
          </div>
        </div>
      </article>)}
    </div>
  </div>
}
