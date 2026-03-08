import { useScrollReveal } from '../hooks'
import { portfolioData } from '../data'
import { Award, Globe } from 'lucide-react'

const { certifications, languages } = portfolioData

export default function Certifications() {
  const [ref, visible] = useScrollReveal()
  const [langRef, langVisible] = useScrollReveal()

  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">
            05 — Certifications & Languages
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
            Credentials
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div
            ref={ref}
            className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Award size={18} className="text-cyan-400" />
              <span className="font-mono text-sm text-slate-300">Certifications</span>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <div
                  key={cert.title}
                  className="flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-cyan-500/10 transition-colors">
                    {cert.icon}
                  </div>
                  <div>
                    <div className="font-body text-sm font-semibold text-slate-200">
                      {cert.title}
                    </div>
                    <div className="font-mono text-xs text-cyan-400 mt-0.5">{cert.issuer}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-6 h-6 rounded-full border border-cyan-500/30 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div
            ref={langRef}
            className={`transition-all duration-700 delay-200 ${langVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <Globe size={18} className="text-cyan-400" />
              <span className="font-mono text-sm text-slate-300">Languages Spoken</span>
            </div>

            <div className="space-y-5">
              {languages.map((lang, i) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="font-body text-sm font-semibold text-slate-200">
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs text-slate-500 ml-2">
                        — {lang.skills}
                      </span>
                    </div>
                    <span className="font-mono text-xs text-cyan-400">{lang.level}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: langVisible ? `${lang.level}%` : '0%',
                        transitionDelay: `${i * 150 + 300}ms`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Fun terminal box */}
            <div className="mt-8 bg-slate-950/80 border border-slate-800 rounded-xl p-4 font-mono text-xs">
              <div className="text-slate-500 mb-2">// fun_fact.txt</div>
              <div className="text-slate-400 leading-relaxed">
                <span className="text-cyan-400">I</span> believe in learning from every
                experience — including{' '}
                <span className="text-cyan-400">rejection</span> and{' '}
                <span className="text-cyan-400">criticism</span> as fuel for growth.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
