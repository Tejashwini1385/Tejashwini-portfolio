import SectionHeading from '../components/SectionHeading'
import Icon from '../components/Icons'
import { skillGroups } from '../data/profile'

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'
const logos = {
  Java: 'java/java-original.svg', Python: 'python/python-original.svg', JavaScript: 'javascript/javascript-original.svg', C: 'c/c-original.svg', SQL: 'mysql/mysql-original.svg',
  React: 'react/react-original.svg', HTML5: 'html5/html5-original.svg', CSS3: 'css3/css3-original.svg', 'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
  'Node.js': 'nodejs/nodejs-original.svg', 'Express.js': 'express/express-original.svg', MySQL: 'mysql/mysql-original.svg', MongoDB: 'mongodb/mongodb-original.svg',
  Git: 'git/git-original.svg', GitHub: 'github/github-original.svg', 'VS Code': 'vscode/vscode-original.svg', Postman: 'postman/postman-original.svg', Docker: 'docker/docker-original.svg',
  GCP: 'googlecloud/googlecloud-original.svg', Vercel: 'vercel/vercel-original.svg', AWS: 'amazonwebservices/amazonwebservices-plain-wordmark.svg',
}
const concepts = new Set(['Machine Learning', 'Deep Learning', 'NLP', 'Generative AI'])

function SkillTile({ skill }) {
  const logo = logos[skill]
  return <div className="group flex min-h-32 flex-col items-center justify-center rounded-2xl border border-cyan-300/15 bg-white/70 p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-300/50 hover:bg-cyan-400/5 hover:shadow-lg hover:shadow-cyan-400/10 dark:bg-white/5">
    <div className="grid h-14 w-14 place-items-center transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,.5)]">
      {logo ? <img src={`${iconBase}${logo}`} alt="" className="h-12 w-12 object-contain" loading="lazy" /> : <span className="grid h-12 w-12 place-items-center rounded-xl border border-violet-300/30 bg-violet-400/10 text-violet-500 dark:text-violet-300"><Icon name={concepts.has(skill) ? 'code' : 'folder'} size={25} /></span>}
    </div>
    <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-100">{skill}</p>
  </div>
}

export default function Skills() {
  return <div className="reveal">
    <SectionHeading eyebrow="Technical toolkit" title="Technologies I use to learn and build.">A focused collection of programming, web, AI, data, tooling, and deployment technologies.</SectionHeading>
    <div className="space-y-10">{skillGroups.map((group) => <section key={group.title}><div className="mb-4 flex items-center gap-3"><span className="h-6 w-1 rounded-full bg-gradient-to-b from-cyan-300 to-violet-400" /><h2 className="font-display text-xl font-semibold text-slate-950 dark:text-white">{group.title}</h2></div><div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{group.skills.map((skill) => <SkillTile key={skill} skill={skill} />)}</div></section>)}</div>
  </div>
}
