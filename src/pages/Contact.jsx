import { useState } from 'react'
import { Mail, Linkedin, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import { useScrollRevealAll } from '../hooks/useScrollReveal'

const projectTypes = [
  'React / Vite App',
  'E-commerce Store',
  'WordPress Site',
  'Supabase Backend',
  'Email Infrastructure',
  'Other / Not Sure',
]

const budgetRanges = [
  'Under ₹10,000',
  '₹10,000 – ₹25,000',
  '₹25,000 – ₹50,000',
  '₹50,000+',
  'Let\'s discuss',
]

export default function Contact() {
  useScrollRevealAll()

  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')
      setSubmitted(true)
    } catch (err) {
      alert(err.message || 'Failed to send. Please email directly at jay@scrpt.in')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="py-24 dot-grid relative overflow-hidden">
        <div className="orb w-80 h-80 bg-indigo-600/15 top-0 right-0" />
        <div className="max-w-6xl mx-auto px-6">
          <p className="section-tag reveal">Get In Touch</p>
          <h1 className="section-heading text-white mt-2 reveal delay-100">
            Let's build something{' '}
            <span className="gradient-text">great together</span>
          </h1>
          <p className="text-[#8899BB] mt-4 max-w-lg text-lg reveal delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-5 gap-12">
          {/* Left – Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact details */}
            <div className="reveal">
              <h2 className="text-white font-bold text-xl mb-5">Contact Details</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    label: 'Email',
                    value: 'jay@scrpt.in',
                    href: 'mailto:jay@scrpt.in',
                  },
                  {
                    icon: Linkedin,
                    label: 'LinkedIn',
                    value: 'linkedin.com/in/jaysahastrabudhe',
                    href: 'https://www.linkedin.com/in/jaysahastrabudhe/',
                  },
                  {
                    icon: MapPin,
                    label: 'Location',
                    value: 'Pune, Maharashtra, India',
                    href: null,
                  },
                  {
                    icon: Clock,
                    label: 'Response Time',
                    value: 'Usually within 24 hours',
                    href: null,
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-[#8899BB] text-xs">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith('http') ? '_blank' : undefined}
                          rel="noopener noreferrer"
                          className="text-white text-sm hover:text-indigo-400 transition-colors"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-white text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What to expect */}
            <div className="glass-card rounded-2xl p-6 reveal delay-100">
              <h3 className="text-white font-semibold mb-4">What happens next?</h3>
              <div className="space-y-3">
                {[
                  'I\'ll review your message and reply within 24 hours',
                  'We\'ll jump on a quick discovery call (30 mins)',
                  'I\'ll send a detailed proposal with timeline and pricing',
                  'We kick off once scope is agreed and deposit is paid',
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-[#8899BB] text-sm">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right – Form */}
          <div className="lg:col-span-3 reveal delay-100">
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                  <p className="text-[#8899BB]">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', projectType: '', budget: '', message: '' }) }}
                    className="mt-6 btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#8899BB] text-xs font-medium mb-2">Your Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={set('name')}
                        placeholder="Rahul Sharma"
                        className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#8899BB]/50 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#8899BB] text-xs font-medium mb-2">Email Address *</label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={set('email')}
                        placeholder="rahul@company.in"
                        className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#8899BB]/50 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#8899BB] text-xs font-medium mb-2">Project Type</label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, projectType: type }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            form.projectType === type
                              ? 'bg-indigo-500/20 border-indigo-500/60 text-indigo-300'
                              : 'border-white/8 text-[#8899BB] hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#8899BB] text-xs font-medium mb-2">Budget Range</label>
                    <div className="flex flex-wrap gap-2">
                      {budgetRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setForm((f) => ({ ...f, budget: range }))}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                            form.budget === range
                              ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-300'
                              : 'border-white/8 text-[#8899BB] hover:border-white/20 hover:text-white'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#8899BB] text-xs font-medium mb-2">Tell Me About Your Project *</label>
                    <textarea
                      required
                      value={form.message}
                      onChange={set('message')}
                      rows={5}
                      placeholder="Describe your project, goals, timeline, any existing tech stack..."
                      className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white text-sm placeholder-[#8899BB]/50 focus:outline-none focus:border-indigo-500/50 focus:bg-indigo-500/5 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center"
                  >
                    {loading ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-[#8899BB] text-xs text-center">
                    To connect directly:{' '}
                    <a href="https://www.linkedin.com/in/jaysahastrabudhe/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300">
                      message me on LinkedIn
                    </a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
