import { useScrollReveal } from '../hooks'
import { portfolioData } from '../data'
import { MapPin, Mail, Phone, User } from 'lucide-react'

const { personal } = portfolioData

export default function About() {
  const [ref, visible] = useScrollReveal()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">
            01 — About
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
            Who I Am
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-start transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Text side */}
          <div>
            <div className="relative">
              {/* Decorative element */}
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/60 via-cyan-400/20 to-transparent" />
              <p className="font-body text-slate-300 text-lg leading-relaxed pl-4">
                {personal.about}
              </p>
            </div>

            <div className="mt-8 font-mono text-sm">
              <div className="text-slate-500 mb-3">// core traits</div>
              <div className="flex flex-wrap gap-2">
                {['Adaptable', 'Problem Solver', 'Quick Learner', 'Growth Mindset', 'Initiative Taker'].map(
                  (trait) => (
                    <span
                      key={trait}
                      className="px-3 py-1 border border-cyan-500/20 bg-cyan-500/5 text-cyan-400 text-xs rounded-full"
                    >
                      {trait}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Info card side */}
          <div className="space-y-4">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 glow-border transition-all duration-300">
              <div className="font-mono text-xs text-slate-500 mb-4">// contact.info</div>
              <div className="space-y-4">
                <InfoRow icon={<Mail size={16} />} label="Email" value={personal.email} href={`mailto:${personal.email}`} />
                <InfoRow icon={<Phone size={16} />} label="Phone" value={personal.phone} href={`tel:${personal.phone}`} />
                <InfoRow icon={<MapPin size={16} />} label="Location" value={personal.location} />
                <InfoRow icon={<User size={16} />} label="Status" value="Seeking Internships" highlight />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Projects', value: '1+' },
                { label: 'Certifications', value: '3' },
                { label: 'Languages', value: '3' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-slate-900/40 border border-slate-800 rounded-xl p-4 text-center hover:border-cyan-500/30 transition-colors"
                >
                  <div className="font-display text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="font-mono text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoRow({ icon, label, value, href, highlight }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-cyan-400 flex-shrink-0">{icon}</span>
      <div>
        <div className="font-mono text-xs text-slate-500">{label}</div>
        {href ? (
          <a href={href} className="font-body text-sm text-slate-300 hover:text-cyan-400 transition-colors">
            {value}
          </a>
        ) : (
          <div className={`font-body text-sm ${highlight ? 'text-cyan-400' : 'text-slate-300'}`}>
            {value}
          </div>
        )}
      </div>
    </div>
  )
}
