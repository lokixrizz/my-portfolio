import { portfolioData } from '../data'
import { Github, Linkedin, Mail, Terminal, Heart } from 'lucide-react'

const { personal } = portfolioData

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 font-mono text-cyan-400 font-semibold mb-3">
              <Terminal size={16} />
              <span>LB.dev</span>
            </div>
            <p className="font-body text-sm text-slate-500 max-w-xs leading-relaxed">
              Aspiring AI/ML developer passionate about building intelligent solutions and
              driving environmental impact through technology.
            </p>
          </div>

          {/* Nav */}
          <div>
            <div className="font-mono text-xs text-slate-600 mb-4 tracking-wider">NAVIGATION</div>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-sm text-slate-500 hover:text-cyan-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <div className="font-mono text-xs text-slate-600 mb-4 tracking-wider">CONNECT</div>
            <div className="flex flex-col gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-slate-500 hover:text-cyan-400 transition-colors group"
              >
                <Github size={15} className="group-hover:scale-110 transition-transform" />
                GitHub
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-sm text-slate-500 hover:text-cyan-400 transition-colors group"
              >
                <Linkedin size={15} className="group-hover:scale-110 transition-transform" />
                LinkedIn
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 font-body text-sm text-slate-500 hover:text-cyan-400 transition-colors group"
              >
                <Mail size={15} className="group-hover:scale-110 transition-transform" />
                {personal.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800/60 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} {personal.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-600">
            <span>Built with</span>
            <Heart size={11} className="text-red-400 fill-red-400" />
            <span>React + Tailwind CSS</span>
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-slate-500">Open to Opportunities</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
