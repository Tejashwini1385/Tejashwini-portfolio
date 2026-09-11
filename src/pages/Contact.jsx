import { useState } from 'react'
import SectionHeading from '../components/SectionHeading'
import Icon, { ArrowUpRight } from '../components/Icons'
import { profile } from '../data/profile'

const socialLinks = [
  ['LinkedIn', 'linkedin', 'linkedin'],
  ['GitHub', 'github', 'github'],
]

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); window.setTimeout(() => setCopied(false), 2200) } catch { setCopied(false) }
  }
  return <div className="reveal">
    <SectionHeading eyebrow="Contact" title="Get In Touch">I&apos;m always open to collaboration, opportunities, and interesting projects. Let&apos;s build something meaningful together.</SectionHeading>
    <section className="mx-auto max-w-3xl rounded-3xl border border-cyan-300/20 bg-white/70 p-7 text-center shadow-2xl shadow-cyan-950/10 dark:bg-white/5 sm:p-10">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-cyan-300/25 bg-cyan-400/10 text-cyan-600 shadow-[0_0_24px_rgba(34,211,238,.14)] dark:text-cyan-300"><Icon name="mail" size={26} /></div>
      <h2 className="mt-6 font-display text-2xl font-semibold text-slate-950 dark:text-white">Let&apos;s start a conversation.</h2>
      <p className="mx-auto mt-3 max-w-xl leading-7 text-slate-600 dark:text-slate-300">Whether you&apos;re a recruiter, company representative, or potential collaborator, I&apos;d be glad to connect and discuss meaningful work.</p>
      <a href={`mailto:${profile.email}`} className="mt-6 inline-block break-all font-display text-lg font-semibold text-cyan-700 transition hover:text-violet-600 dark:text-cyan-300">{profile.email}</a>
      <div className="mt-7 flex flex-wrap justify-center gap-3"><a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 hover:shadow-lg hover:shadow-cyan-400/25">Open in Email <ArrowUpRight /></a><button type="button" onClick={copyEmail} className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/35 bg-cyan-400/5 px-5 py-3 text-sm font-bold text-slate-800 transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-cyan-400/10 dark:text-white">Copy Email</button></div>
      <p className="mt-4 h-5 text-sm font-medium text-cyan-700 dark:text-cyan-300" role="status">{copied ? 'Email copied!' : ''}</p>
    </section>
    <section className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">{socialLinks.map(([name, icon, key]) => <a key={name} href={profile[key]} target="_blank" rel="noreferrer" className="group flex items-center justify-between rounded-2xl border border-cyan-300/15 bg-white/70 p-5 transition hover:-translate-y-1 hover:border-cyan-300/50 hover:shadow-lg hover:shadow-cyan-400/10 dark:bg-white/5"><span className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-400/10 text-violet-600 transition group-hover:scale-110 group-hover:text-cyan-600 dark:text-violet-300 dark:group-hover:text-cyan-300"><Icon name={icon} size={20} /></span><span className="font-display font-semibold text-slate-900 dark:text-white">{name}</span></span><ArrowUpRight /></a>)}</section>
  </div>
}
