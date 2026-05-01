'use client';
import { useState } from 'react';

const SUBJECTS = ['Order Inquiry', 'Wholesale / Bulk', 'Collaboration', 'Press', 'General Question'];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: SUBJECTS[0], message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1400);
  };

  const DETAILS = [
    { icon: '✉', label: 'Email', value: 'hello@valoreessentials.com' },
    { icon: '📍', label: 'Location', value: 'Lagos, Nigeria' },
    { icon: '📸', label: 'Instagram', value: '@valoreessentials' },
    { icon: '🕐', label: 'Response Time', value: 'Within 24 hours' },
  ];

  return (
    <div className="pt-[70px] min-h-screen">
      <section className="relative py-24 px-6 text-center overflow-hidden border-b border-gold/10">
        <div className="absolute inset-0 bg-hero-gradient opacity-60" />
        <div className="relative z-10">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-3 font-medium">Get in Touch</p>
          <h1 className="font-serif text-5xl italic mb-4">Let&apos;s Talk</h1>
          <p className="text-cream/50 max-w-md mx-auto text-sm leading-relaxed">
            Questions about kits, wholesale, or collaborations? We love hearing from our community.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[0.65rem] tracking-[0.3em] uppercase text-gold mb-4 font-medium">Contact Info</p>
            <h2 className="font-serif text-3xl italic mb-4 leading-snug">We&apos;re real people<br />who actually reply.</h2>
            <p className="text-cream/50 text-sm leading-relaxed mb-10">
              Whether you have a question about your order, want to stock our kits, or just want to say hello — our inbox is always open.
            </p>
            <div className="space-y-4 mb-12">
              {DETAILS.map(({ icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gold/10 border border-gold/25 rounded-sm flex items-center justify-center text-gold flex-shrink-0">
                    {icon}
                  </div>
                  <div>
                    <p className="text-[0.6rem] tracking-[0.2em] uppercase text-gold/70 mb-0.5">{label}</p>
                    <p className="text-cream/70 text-sm">{value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-sm overflow-hidden border border-gold/15 aspect-video bg-secondary flex items-center justify-center">
              <div className="text-center">
                <p className="text-4xl mb-2">🌍</p>
                <p className="font-serif italic text-cream/40">Lagos, Nigeria</p>
                <p className="text-cream/25 text-xs mt-1">West Africa · GMT+1</p>
              </div>
            </div>
          </div>

          <div className="bg-secondary border border-gold/10 rounded-sm p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <span className="text-5xl mb-4">✦</span>
                <h3 className="font-serif text-2xl italic text-gold mb-2">Message Sent!</h3>
                <p className="text-cream/50 text-sm">Thanks, {form.name}! We&apos;ll be in touch within 24 hours.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', subject: SUBJECTS[0], message: '' }); }}
                  className="mt-6 text-[0.68rem] tracking-[0.15em] uppercase text-gold border border-gold/30 px-5 py-2.5 hover:bg-gold/10 transition-colors rounded-sm"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1.5 font-medium">Name</label>
                    <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} placeholder="Your name"
                      className="w-full bg-primary border border-gold/15 text-cream text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50 placeholder:text-cream/25 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1.5 font-medium">Email</label>
                    <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com"
                      className="w-full bg-primary border border-gold/15 text-cream text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50 placeholder:text-cream/25 transition-colors" />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="subject" className="block text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1.5 font-medium">Subject</label>
                  <select id="subject" name="subject" value={form.subject} onChange={handleChange}
                    className="w-full bg-primary border border-gold/15 text-cream text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50 transition-colors">
                    {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-[0.62rem] tracking-[0.2em] uppercase text-gold mb-1.5 font-medium">Message</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell us anything..."
                    className="w-full bg-primary border border-gold/15 text-cream text-sm px-4 py-3 rounded-sm focus:outline-none focus:border-gold/50 placeholder:text-cream/25 transition-colors resize-none" />
                </div>
                <button type="submit" disabled={loading}
                  className="w-full bg-gold text-primary py-4 text-[0.72rem] tracking-[0.2em] uppercase font-medium hover:bg-gold/90 transition-all rounded-sm disabled:opacity-60">
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
