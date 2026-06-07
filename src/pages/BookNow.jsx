import { useState } from 'react'
import { CheckCircle, Calendar, Clock, Sparkles } from 'lucide-react'

const services = [
  'Weight Loss Consultation',
  'Body Contouring',
  'Skin Tightening',
  'Botox / Neurotoxins',
  'Korean Facial',
  'Chemical Peel',
  'Massage Therapy',
  'Skin Concern Analysis',
  'General Consultation',
]

const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '1:00 PM',
  '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM',
  '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM',
]

const steps = ['Your Info', 'Choose Service', 'Pick a Time', 'Confirm']

export default function BookNow() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSelect = (field, value) => setForm({ ...form, [field]: value })

  const next = () => setStep((s) => Math.min(s + 1, 3))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const canProceed = () => {
    if (step === 0) return form.name && form.email && form.phone
    if (step === 1) return !!form.service
    if (step === 2) return form.date && form.time
    return true
  }

  const handleSubmit = () => setSubmitted(true)

  // Get today's date for min date attribute
  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-rose-50 via-white to-amber-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Reserve Your Spot
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Book Now
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Secure your appointment in just a few steps. We look forward to
            welcoming you to Advanced Med MedSpa Lounge.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-green-500" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                You're All Set!
              </h2>
              <p className="text-gray-500 mb-2">
                Thank you, <strong>{form.name}</strong>! Your appointment request has been received.
              </p>
              <p className="text-gray-500 text-sm mb-8">
                We'll confirm your <strong>{form.service}</strong> on{' '}
                <strong>{form.date}</strong> at <strong>{form.time}</strong> via
                email at <strong>{form.email}</strong>.
              </p>
              <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 border border-gold-100 max-w-sm mx-auto">
                <Sparkles size={24} className="text-gold-500 mx-auto mb-3" />
                <p className="text-gray-700 text-sm leading-relaxed">
                  A confirmation email is on its way. If you have any questions,
                  call us at{' '}
                  <a href="tel:+13055550100" className="text-gold-600 font-semibold">
                    (305) 555-0100
                  </a>
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Stepper */}
              <div className="flex items-center mb-12">
                {steps.map((label, i) => (
                  <div key={label} className="flex items-center flex-1">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                          i < step
                            ? 'bg-gold-500 text-white'
                            : i === step
                            ? 'bg-gold-500 text-white ring-4 ring-gold-100'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {i < step ? <CheckCircle size={16} /> : i + 1}
                      </div>
                      <span
                        className={`text-xs mt-1.5 font-medium ${
                          i <= step ? 'text-gold-600' : 'text-gray-400'
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 mb-5 ${
                          i < step ? 'bg-gold-400' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Step 0 — Your Info */}
              {step === 0 && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                    Tell Us About Yourself
                  </h2>
                  <div className="space-y-5">
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
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
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
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="(305) 000-0000"
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={form.notes}
                        onChange={handleChange}
                        placeholder="Any health conditions, allergies, or questions for our team..."
                        className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 1 — Choose Service */}
              {step === 1 && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                    Which Service Interests You?
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((svc) => (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => handleSelect('service', svc)}
                        className={`text-left px-5 py-4 rounded-xl border-2 text-sm font-medium transition-all ${
                          form.service === svc
                            ? 'border-gold-500 bg-gold-50 text-gold-700'
                            : 'border-gray-200 hover:border-gold-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {form.service === svc && (
                          <CheckCircle size={14} className="inline mr-2 text-gold-500" />
                        )}
                        {svc}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2 — Pick a Time */}
              {step === 2 && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                    When Would You Like to Come In?
                  </h2>
                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      <Calendar size={13} className="inline mr-1" />
                      Select a Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      min={today}
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 rounded-xl border border-gray-200 text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                      <Clock size={13} className="inline mr-1" />
                      Select a Time *
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleSelect('time', slot)}
                          className={`py-2.5 px-2 rounded-lg border text-xs font-medium transition-all ${
                            form.time === slot
                              ? 'border-gold-500 bg-gold-500 text-white'
                              : 'border-gray-200 hover:border-gold-300 text-gray-700 hover:bg-gray-50'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3 — Confirm */}
              {step === 3 && (
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
                    Confirm Your Appointment
                  </h2>
                  <div className="bg-gradient-to-br from-rose-50 to-amber-50 rounded-2xl p-8 border border-gold-100 space-y-4">
                    {[
                      { label: 'Name', value: form.name },
                      { label: 'Email', value: form.email },
                      { label: 'Phone', value: form.phone },
                      { label: 'Service', value: form.service },
                      { label: 'Date', value: form.date },
                      { label: 'Time', value: form.time },
                      ...(form.notes ? [{ label: 'Notes', value: form.notes }] : []),
                    ].map((row) => (
                      <div key={row.label} className="flex justify-between items-start border-b border-gold-100 pb-3 last:border-0 last:pb-0">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{row.label}</span>
                        <span className="text-sm font-medium text-gray-900 text-right max-w-[60%]">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-gray-500 text-xs mt-4 text-center leading-relaxed">
                    By confirming, you agree to our cancellation policy. Cancellations must be made 24 hours in advance.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between mt-10">
                {step > 0 ? (
                  <button
                    onClick={back}
                    className="px-6 py-3 rounded-full border-2 border-gray-300 text-gray-700 hover:border-gray-400 font-semibold text-sm transition-colors"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}
                {step < 3 ? (
                  <button
                    onClick={next}
                    disabled={!canProceed()}
                    className="px-8 py-3 rounded-full bg-gold-500 hover:bg-gold-600 disabled:bg-gray-200 disabled:text-gray-400 text-white font-semibold text-sm transition-colors"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 rounded-full bg-gold-500 hover:bg-gold-600 text-white font-semibold text-sm transition-colors shadow-lg"
                  >
                    Confirm Booking ✓
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Trust bar */}
      {!submitted && (
        <section className="py-12 px-4 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              {[
                { emoji: '🔒', title: 'Secure & Private', desc: 'Your information is safe and never shared.' },
                { emoji: '📱', title: 'Confirmation Sent', desc: 'You\'ll receive an email confirmation immediately.' },
                { emoji: '📞', title: 'We\'ll Call to Confirm', desc: 'Our team will call within 1 business day.' },
              ].map((item) => (
                <div key={item.title} className="flex flex-col items-center">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                  <p className="text-gray-400 text-xs mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
