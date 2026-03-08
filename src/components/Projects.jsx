import { useScrollReveal } from '../hooks'
import { portfolioData } from '../data'
import { Github, ExternalLink, Cpu, ChevronRight } from 'lucide-react'

const { projects } = portfolioData

function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollReveal(0.15)

  return (
    <div
      ref={ref}
      className={`group relative bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500 glow-border ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Card header */}
      <div className="p-6 pb-0">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <Cpu size={18} className="text-cyan-400" />
            </div>
            <div>
              <div className="font-mono text-xs text-cyan-400 tracking-wider">{project.category}</div>
              <h3 className="font-display text-lg font-bold text-slate-100 mt-0.5 leading-tight">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <a
              href={project.github}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href={project.demo}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              title="Live Demo"
            >
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <p className="font-body text-slate-400 text-sm leading-relaxed mb-5">
          {project.description}
        </p>
      </div>

      {/* Bullet points */}
      <div className="px-6 pb-5">
        <div className="space-y-2">
          {project.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-2">
              <ChevronRight size={12} className="text-cyan-400 flex-shrink-0 mt-1" />
              <span className="font-body text-xs text-slate-400">{bullet}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tech stack */}
      <div className="px-6 pb-6 border-t border-slate-800/60 pt-4">
        <div className="font-mono text-xs text-slate-600 mb-3">tech_stack</div>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-slate-800/80 rounded-md font-mono text-xs text-slate-400 border border-slate-700/50 hover:border-cyan-500/30 hover:text-cyan-400 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">
            03 — Projects
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
            What I've Built
          </h2>
          <p className="font-body text-slate-400 mt-3 max-w-lg">
            Projects focused on real-world AI/ML applications and smart automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}

          {/* Coming Soon Card */}
          <div className="border border-dashed border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[300px] hover:border-cyan-500/20 transition-colors group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:border-cyan-500/20 transition-colors">
              <span className="font-mono text-xl">+</span>
            </div>
            <div className="font-mono text-xs text-slate-600 tracking-wider">MORE COMING SOON</div>
            <p className="font-body text-slate-600 text-sm mt-2">
              Currently building new AI/ML projects
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
