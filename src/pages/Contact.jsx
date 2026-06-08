import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-400 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Reach Out
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-5">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto leading-relaxed">
            We're here to answer your questions, help you choose the right treatment,
            and guide you every step of the way.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-50 rounded-xl">
                      <MapPin size={20} className="text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">Our Location</p>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        123 Luxury Blvd, Suite 200<br />
                        Miami, FL 33101
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-50 rounded-xl">
                      <Phone size={20} className="text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">Phone</p>
                      <a href="tel:+15613320225" className="text-gray-500 text-sm hover:text-gold-600 transition-colors">
                        561-332-0225
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-50 rounded-xl">
                      <Mail size={20} className="text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">Email</p>
                      <a href="mailto:hello@advancedmed.com" className="text-gray-500 text-sm hover:text-gold-600 transition-colors">
                        hello@advancedmed.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold-50 rounded-xl">
                      <Clock size={20} className="text-gold-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm mb-1">Hours</p>
                      <div className="text-gray-500 text-sm space-y-0.5">
                        <p>Mon – Fri: 9:00 AM – 7:00 PM</p>
                        <p>Saturday: 9:00 AM – 5:00 PM</p>
                        <p>Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-gray-900 text-sm mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" aria-label="Instagram" className="flex items-center gap-2 bg-gray-50 hover:bg-gold-50 border border-gray-100 hover:border-gold-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gold-600 transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                    Instagram
                  </a>
                  <a href="#" aria-label="Facebook" className="flex items-center gap-2 bg-gray-50 hover:bg-gold-50 border border-gray-100 hover:border-gold-200 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-700 hover:text-gold-600 transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    Facebook
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-52 flex items-center justify-center border border-gray-200">
                <div className="text-center text-gray-400">
                  <MapPin size={32} className="mx-auto mb-2" />
                  <p className="text-sm">123 Luxury Blvd, Miami FL</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 md:p-10 border border-gold-100">
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-8">
                  Have a question or need more information? We'll get back to you within one business day.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500 text-sm">
                      Thank you for reaching out. We'll be in touch very soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="(305) 000-0000"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="jane@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us what you're interested in or any questions you have..."
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 rounded-full transition-colors shadow-sm text-base"
                    >
                      Send Message <Send size={17} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
