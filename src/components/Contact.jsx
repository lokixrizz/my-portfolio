import { useState } from 'react'
import { useScrollReveal } from '../hooks'
import { portfolioData } from '../data'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'

const { personal } = portfolioData

export default function Contact() {
  const [ref, visible] = useScrollReveal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate sending
    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-slate-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="font-mono text-cyan-400 text-sm tracking-widest uppercase mb-3">
            06 — Contact
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-100">
            Let's Connect
          </h2>
          <p className="font-body text-slate-400 mt-3 max-w-lg">
            Looking for internship opportunities in AI/ML. Feel free to reach out!
          </p>
        </div>

        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={20} className="text-cyan-400" />,
                  label: 'Email',
                  value: personal.email,
                  href: `mailto:${personal.email}`,
                },
                {
                  icon: <Phone size={20} className="text-cyan-400" />,
                  label: 'Phone',
                  value: personal.phone,
                  href: `tel:${personal.phone}`,
                },
                {
                  icon: <MapPin size={20} className="text-cyan-400" />,
                  label: 'Location',
                  value: personal.location,
                  href: null,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-4 p-5 bg-slate-900/60 border border-slate-800 rounded-xl hover:border-cyan-500/30 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-slate-800 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono text-xs text-slate-500">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-body text-sm text-slate-300 hover:text-cyan-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-body text-sm text-slate-300">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 bg-slate-900/40 border border-dashed border-slate-800 rounded-xl">
              <div className="font-mono text-xs text-slate-500 mb-2">// availability</div>
              <p className="font-body text-sm text-slate-400">
                Currently open to{' '}
                <span className="text-cyan-400">internships</span> and{' '}
                <span className="text-cyan-400">project collaborations</span> in
                AI/ML, Data Science, and Python development.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-slate-900/40 border border-cyan-500/20 rounded-2xl">
                <CheckCircle size={48} className="text-cyan-400 mb-4" />
                <h3 className="font-display text-2xl font-bold text-slate-100 mb-2">
                  Message Sent!
                </h3>
                <p className="font-body text-slate-400">
                  Thanks for reaching out. I'll get back to you soon.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <InputField
                    label="Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <InputField
                  label="Subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship Opportunity"
                  required
                />
                <div>
                  <label className="block font-mono text-xs text-slate-500 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about the opportunity..."
                    required
                    className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 font-body text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 disabled:bg-cyan-500/50 text-slate-950 font-semibold font-body rounded-xl transition-all duration-200 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] flex items-center justify-center gap-2 group"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-slate-950/30 border-t-slate-950 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function InputField({ label, name, type = 'text', value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block font-mono text-xs text-slate-500 mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-slate-900/60 border border-slate-800 rounded-xl px-4 py-3 font-body text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-900/80 transition-all"
      />
    </div>
  )
}
