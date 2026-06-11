import { useState } from 'react'
import { CheckCircle, Calendar, Clock, Sparkles, Phone, Mail, MapPin } from 'lucide-react'
import HeroPhoto from '../components/HeroPhoto'

const services = [
  'Non-Invasive Weight Loss',
  'Body Contouring',
  'Brazilian Lymphatic Drainage Massage',
  'Deep Tissue Massage',
  'Post-Op Massage',
  'Prenatal Massage',
  'Peptides / GLP-1 Evaluation',
  'IV Drip Therapy',
  'Intramuscular Shot',
  'Hair Restoration',
  'Blood Tests & Longevity Evaluation',
  'Acne Treatment / Facial',
  'Anti-Aging Facial',
  'Chemical Peel',
  'Hyperpigmentation Treatment',
  'Stretch Marks & Scars Treatment',
  'Membership Inquiry',
  'General Evaluation',
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
    name: '', email: '', phone: '', service: '', date: '', time: '', notes: '',
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
  const today = new Date().toISOString().split('T')[0]

  return (
    <>
      <HeroPhoto
        eyebrow="Contact & Reservations"
        title={"Book Your\nAppointment"}
        subtitle="Secure your appointment in minutes. We look forward to welcoming you."
        gradient="from-espresso-800 via-spa-800 to-espresso-700"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info sidebar */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-espresso mb-6">Get in Touch</h2>
              <div className="space-y-5">
                {[
                  { icon: <MapPin size={20} className="text-spa" />, label: 'Location', content: '44 Northeast 2nd Avenue\nDeerfield Beach, FL 33441' },
                  { icon: <Phone size={20} className="text-spa" />, label: 'Phone', content: '561-332-0225', href: 'tel:+15613320225' },
                  { icon: <Mail size={20} className="text-spa" />, label: 'Email', content: 'hello@advancedmedspaofficial.com', href: 'mailto:hello@advancedmedspaofficial.com' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="p-3 bg-cream-100 flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-espresso text-sm mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-espresso-500 text-sm hover:text-spa transition-colors">{item.content}</a>
                      ) : (
                        <p className="text-espresso-500 text-sm whitespace-pre-line">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-cream-100 p-6 border border-cream-300">
              <h4 className="font-semibold text-espresso text-sm mb-3">Hours</h4>
              <div className="text-espresso-500 text-sm space-y-1.5">
                <div className="flex justify-between"><span>Tue – Fri</span><span className="font-medium">10:00 AM – 8:00 PM</span></div>
                <div className="flex justify-between"><span>Saturday</span><span className="font-medium">8:00 AM – 4:00 PM</span></div>
                <div className="flex justify-between"><span>Sunday</span><span className="font-medium">By Appointment</span></div>
              </div>
            </div>
            <div className="overflow-hidden bg-cream-200 h-48 flex items-center justify-center border border-cream-300">
              <div className="text-center text-espresso-400">
                <MapPin size={30} className="mx-auto mb-2" />
                <p className="text-sm">123 Luxury Blvd, Miami FL</p>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <div className="bg-cream-100 p-8 md:p-10 border border-cream-300">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-spa-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={40} className="text-spa" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-espresso mb-3">You're All Set!</h2>
                  <p className="text-espresso-500 mb-2">Thank you, <strong>{form.name}</strong>! Your appointment request has been received.</p>
                  <p className="text-espresso-500 text-sm mb-8">
                    We'll confirm your <strong>{form.service}</strong> on <strong>{form.date}</strong> at <strong>{form.time}</strong> via email at <strong>{form.email}</strong>.
                  </p>
                  <div className="bg-white p-8 border border-cream-300 max-w-sm mx-auto">
                    <Sparkles size={24} className="text-spa mx-auto mb-3" />
                    <p className="text-espresso-500 text-sm leading-relaxed">
                      A confirmation is on its way. Questions? Call us at{' '}
                      <a href="tel:+15613320225" className="text-spa font-semibold">561-332-0225</a>
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  {/* Stepper */}
                  <div className="flex items-center mb-10">
                    {steps.map((label, i) => (
                      <div key={label} className="flex items-center flex-1">
                        <div className="flex flex-col items-center">
                          <div className={`w-9 h-9 flex items-center justify-center text-sm font-bold transition-colors ${
                            i < step ? 'bg-espresso text-cream-100' : i === step ? 'bg-espresso text-cream-100 ring-4 ring-cream-300' : 'bg-cream-200 text-espresso-400'
                          }`}>
                            {i < step ? <CheckCircle size={16} /> : i + 1}
                          </div>
                          <span className={`text-xs mt-1.5 font-medium ${i <= step ? 'text-espresso' : 'text-espresso-400'}`}>{label}</span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className={`flex-1 h-0.5 mx-2 mb-5 ${i < step ? 'bg-espresso' : 'bg-cream-300'}`} />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Step 0 */}
                  {step === 0 && (
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-espresso mb-6">Tell Us About Yourself</h2>
                      <div className="space-y-5">
                        {[
                          { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'Jane Smith' },
                          { label: 'Email Address *', name: 'email', type: 'email', placeholder: 'jane@email.com' },
                          { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '(305) 000-0000' },
                        ].map((f) => (
                          <div key={f.name}>
                            <label className="block text-[10px] font-medium text-espresso-600 mb-2 uppercase tracking-widest">{f.label}</label>
                            <input type={f.type} name={f.name} required value={form[f.name]} onChange={handleChange} placeholder={f.placeholder}
                              className="w-full px-4 py-3.5 border border-cream-300 bg-white text-espresso text-sm focus:outline-none focus:ring-2 focus:ring-spa-300 focus:border-transparent" />
                          </div>
                        ))}
                        <div>
                          <label className="block text-[10px] font-medium text-espresso-600 mb-2 uppercase tracking-widest">Additional Notes</label>
                          <textarea name="notes" rows={3} value={form.notes} onChange={handleChange}
                            placeholder="Any health conditions, allergies, or questions..."
                            className="w-full px-4 py-3.5 border border-cream-300 bg-white text-espresso text-sm focus:outline-none focus:ring-2 focus:ring-spa-300 focus:border-transparent resize-none" />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 1 */}
                  {step === 1 && (
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-espresso mb-6">Which Service Interests You?</h2>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {services.map((svc) => (
                          <button key={svc} type="button" onClick={() => handleSelect('service', svc)}
                            className={`text-left px-4 py-3 border-2 text-sm font-medium transition-all ${
                              form.service === svc ? 'border-espresso bg-espresso text-cream-100' : 'border-cream-300 hover:border-spa text-espresso hover:bg-white'
                            }`}>
                            {form.service === svc && <CheckCircle size={13} className="inline mr-1.5 text-cream-100" />}
                            {svc}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-espresso mb-6">When Would You Like to Come In?</h2>
                      <div className="mb-6">
                        <label className="block text-[10px] font-medium text-espresso-600 mb-2 uppercase tracking-widest">
                          <Calendar size={13} className="inline mr-1" />Select a Date *
                        </label>
                        <input type="date" name="date" min={today} value={form.date} onChange={handleChange}
                          className="w-full px-4 py-3.5 border border-cream-300 bg-white text-espresso text-sm focus:outline-none focus:ring-2 focus:ring-spa-300 focus:border-transparent" />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-espresso-600 mb-3 uppercase tracking-widest">
                          <Clock size={13} className="inline mr-1" />Select a Time *
                        </label>
                        <div className="grid grid-cols-4 gap-2">
                          {timeSlots.map((slot) => (
                            <button key={slot} type="button" onClick={() => handleSelect('time', slot)}
                              className={`py-2.5 px-1 border text-xs font-medium transition-all ${
                                form.time === slot ? 'border-espresso bg-espresso text-cream-100' : 'border-cream-300 hover:border-spa text-espresso hover:bg-white'
                              }`}>
                              {slot}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-espresso mb-6">Confirm Your Appointment</h2>
                      <div className="bg-white p-8 border border-cream-300 space-y-4">
                        {[
                          { label: 'Name', value: form.name },
                          { label: 'Email', value: form.email },
                          { label: 'Phone', value: form.phone },
                          { label: 'Service', value: form.service },
                          { label: 'Date', value: form.date },
                          { label: 'Time', value: form.time },
                          ...(form.notes ? [{ label: 'Notes', value: form.notes }] : []),
                        ].map((row) => (
                          <div key={row.label} className="flex justify-between items-start border-b border-cream-300 pb-3 last:border-0 last:pb-0">
                            <span className="text-[10px] font-bold text-espresso-400 uppercase tracking-widest">{row.label}</span>
                            <span className="text-sm font-medium text-espresso text-right max-w-[60%]">{row.value}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-espresso-400 text-xs mt-4 text-center">Cancellations must be made 24 hours in advance.</p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex justify-between mt-8">
                    {step > 0 ? (
                      <button onClick={back} className="px-6 py-3 border border-cream-300 text-espresso hover:border-espresso font-medium text-sm transition-colors">
                        Back
                      </button>
                    ) : <div />}
                    {step < 3 ? (
                      <button onClick={next} disabled={!canProceed()}
                        className="px-8 py-3 bg-spa hover:bg-spa-600 disabled:bg-cream-300 disabled:text-espresso-400 text-cream-100 text-[10px] tracking-widest uppercase font-medium transition-colors">
                        Continue
                      </button>
                    ) : (
                      <button onClick={() => setSubmitted(true)}
                        className="px-8 py-3 bg-spa hover:bg-spa-600 text-cream-100 text-[10px] tracking-widest uppercase font-medium transition-colors">
                        Confirm Booking
                      </button>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {!submitted && (
        <section className="py-10 px-4 bg-cream-100 border-t border-cream-300">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { title: 'Secure & Private', desc: 'Your information is never shared.' },
              { title: 'Instant Confirmation', desc: "You'll receive a confirmation email right away." },
              { title: "We'll Call to Confirm", desc: 'Our team follows up within 1 business day.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <h4 className="font-semibold text-espresso text-sm">{item.title}</h4>
                <p className="text-espresso-400 text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}
