import { useScrollReveal } from '../hooks'
import { portfolioData } from '../data'

const { skills } = portfolioData

function SkillBar({ name, level, icon, delay = 0 }) {
  const [ref, visible] = useScrollReveal(0.2)

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-lg">{icon}</span>
          <span className="font-mono text-sm text-slate-300">{name}</span>
        </div>
        <span className="font-mono text-xs text-cyan-400">{level}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

function ToolChip({ name, icon }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/40 hover:bg-slate-900/80 transition-all duration-200 group cursor-default">
      <span className="text-base">{icon}</span>
      <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-400 transition-colors">
        {name}
      </span>
    </div>
  )
}

export default function Skills() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="skills" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">
            02 — Skills
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
            Technical Stack
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Programming Languages */}
          <div>
            <div className="font-mono text-xs text-slate-500 mb-6">// programming_languages</div>
            <div className="space-y-6">
              {skills.languages.map((lang, i) => (
                <SkillBar key={lang.name} {...lang} delay={i * 150} />
              ))}
            </div>

            {/* Domains */}
            <div className="mt-10">
              <div className="font-mono text-xs text-slate-500 mb-4">// domains & concepts</div>
              <div className="flex flex-wrap gap-2">
                {skills.domains.map((domain) => (
                  <span
                    key={domain}
                    className="px-3 py-1.5 bg-slate-900/80 border border-slate-700/60 rounded-lg font-mono text-xs text-slate-400 hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200 cursor-default"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <div className="font-mono text-xs text-slate-500 mb-6">// tools & environment</div>
            <div className="grid grid-cols-2 gap-3">
              {skills.tools.map((tool) => (
                <ToolChip key={tool.name} {...tool} />
              ))}
            </div>

            {/* Terminal-style snippet */}
            <div className="mt-8 bg-slate-950 border border-slate-800 rounded-xl p-5 font-mono text-xs">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-slate-600 text-xs">~/logesh/skills</span>
              </div>
              <div className="space-y-1.5 text-slate-400">
                <div>
                  <span className="text-cyan-400">$</span>{' '}
                  <span className="text-slate-300">python --version</span>
                </div>
                <div className="text-slate-500">Python 3.11.0</div>
                <div className="mt-2">
                  <span className="text-cyan-400">$</span>{' '}
                  <span className="text-slate-300">git --version</span>
                </div>
                <div className="text-slate-500">git version 2.40.0</div>
                <div className="mt-2">
                  <span className="text-cyan-400">$</span>{' '}
                  <span className="text-slate-300">mysql --version</span>
                </div>
                <div className="text-slate-500">mysql Ver 8.0.32</div>
                <div className="mt-2">
                  <span className="text-cyan-400">$</span>{' '}
                  <span className="text-green-400">
                    echo "Ready to ship 🚀"
                    <span className="animate-blink text-slate-400">_</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
