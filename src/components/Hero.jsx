import { useTypewriter } from '../hooks'
import { Download, Github, Linkedin, ArrowDown, Cpu } from 'lucide-react'
import { portfolioData } from '../data'

const { personal } = portfolioData

const roles = [
  'AI / ML Developer',
  'Python Programmer',
  'Data Science Enthusiast',
  'Problem Solver',
]

export default function Hero() {
  const [typed, done] = useTypewriter(personal.name, 80, 400)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Ambient glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* Floating tech icons */}
      <div className="absolute top-24 right-12 opacity-10 animate-float" style={{ animationDelay: '0s' }}>
        <Cpu size={48} className="text-cyan-400" />
      </div>
      <div className="absolute bottom-32 left-12 opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        <Cpu size={32} className="text-cyan-400" />
      </div>

      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
            Open to Internships
          </span>
        </div>

        {/* Main heading with typewriter */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight leading-none">
          <span className="text-gradient">
            {typed}
            {!done && <span className="animate-blink">|</span>}
          </span>
        </h1>

        {/* Subtitle */}
        <div
          className="font-mono text-cyan-400 text-sm md:text-base tracking-widest uppercase mb-6"
          style={{ animation: 'fadeIn 1s ease 1.5s both' }}
        >
          {personal.subtitle}
        </div>

        {/* Tagline */}
        <p
          className="font-body text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animation: 'fadeInUp 0.8s ease 2s both' }}
        >
          {personal.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          style={{ animation: 'fadeInUp 0.8s ease 2.3s both' }}
        >
          <a
            href="#projects"
            className="group px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold font-body rounded-lg transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center gap-2"
          >
            View My Work
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </a>

          <a
            href="#"
            download="LOGESHBALAN_Resume.pdf"
            className="group px-8 py-3 border border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-400 font-body rounded-lg transition-all duration-200 flex items-center gap-2 bg-slate-900/30 hover:bg-slate-900/60"
          >
            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            Download CV
          </a>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-6"
          style={{ animation: 'fadeIn 0.8s ease 2.6s both' }}
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <Github size={16} className="group-hover:scale-110 transition-transform" />
            GitHub
          </a>
          <span className="text-slate-700">·</span>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-slate-500 hover:text-cyan-400 transition-colors group"
          >
            <Linkedin size={16} className="group-hover:scale-110 transition-transform" />
            LinkedIn
          </a>
          <span className="text-slate-700">·</span>
          <span className="font-mono text-xs text-slate-500">{personal.location}</span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-cyan-400" />
          <span className="font-mono text-xs text-cyan-400 tracking-widest">SCROLL</span>
        </div>
      </div>
    </section>
  )
}
