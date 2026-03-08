import { useScrollReveal } from '../hooks'
import { portfolioData } from '../data'
import { Calendar, MapPin, Award } from 'lucide-react'

const { education } = portfolioData

function EducationCard({ edu, index }) {
  const [ref, visible] = useScrollReveal(0.2)

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 transition-all duration-700 ${
        visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Timeline line + dot */}
      <div className="flex flex-col items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 z-10 border-2 ${
            edu.current
              ? 'border-cyan-400 bg-cyan-500/10'
              : 'border-slate-700 bg-slate-900/60'
          }`}
        >
          {edu.icon}
        </div>
        {index === 0 && (
          <div className="w-px flex-1 bg-gradient-to-b from-cyan-400/40 to-transparent mt-2" />
        )}
      </div>

      {/* Card */}
      <div
        className={`flex-1 mb-10 p-6 rounded-2xl border transition-all duration-300 glow-border group ${
          edu.current
            ? 'bg-slate-900/80 border-cyan-500/20 hover:border-cyan-500/40'
            : 'bg-slate-900/40 border-slate-800 hover:border-slate-700'
        }`}
      >
        {edu.current && (
          <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs text-cyan-400">Currently Pursuing</span>
          </div>
        )}

        <h3 className="font-display text-xl font-bold text-slate-100 mb-1 leading-tight">
          {edu.degree}
        </h3>

        <div className="flex flex-wrap items-center gap-4 mt-3">
          <div className="flex items-center gap-1.5 font-mono text-sm text-slate-400">
            <MapPin size={13} className="text-cyan-400" />
            {edu.institution}
          </div>
          <div className="flex items-center gap-1.5 font-mono text-sm text-slate-500">
            <Calendar size={13} />
            {edu.period}
          </div>
        </div>

        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-slate-950/60 rounded-lg border border-slate-800">
          <Award size={14} className="text-cyan-400" />
          <span className="font-mono text-sm text-slate-300">{edu.score}</span>
        </div>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">
            04 — Education
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
            Academic Journey
          </h2>
        </div>

        <div className="max-w-2xl">
          {education.map((edu, i) => (
            <EducationCard key={edu.degree} edu={edu} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
