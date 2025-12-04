import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', company: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const nextErrors: { [key: string]: string } = {};
    if (!formState.name.trim()) nextErrors.name = 'Adınız zorunludur.';
    if (!formState.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = 'Geçerli bir e-posta girin.';
    if (!formState.company.trim()) nextErrors.company = 'Şirket adı zorunludur.';
    if (!formState.message.trim()) nextErrors.message = 'Kısaca ihtiyacınızı yazın.';
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [key]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setFormState({ name: '', email: '', company: '', message: '' });
    setErrors({});
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white reveal">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <FadeIn>
            <div>
              <h2 className="text-h2-d font-serif font-bold text-primary mb-8">
                Birlikte Geleceği <br/>İnşa Edelim
              </h2>
              <p className="text-slate-600 text-lg mb-12 leading-relaxed font-light">
                Stratejik hedeflerinize ulaşmak için ilk adımı atın. Uzman ekibimiz, ihtiyaçlarınızı dinlemek ve size özel çözümler sunmak için hazır.
              </p>

              <div className="space-y-10 border-t border-slate-100 pt-10">
                <div>
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Genel Merkez</h4>
                  <p className="text-primary text-xl font-serif">Büyükdere Cad. No:123, Levent, İstanbul</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">E-posta</h4>
                    <p className="text-primary text-lg">info@ecypro.com</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Telefon</h4>
                    <p className="text-primary text-lg">+90 (212) 555 0123</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-neutral p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100">
              <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="group relative">
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Adınız</label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={handleChange('name')}
                      aria-invalid={Boolean(errors.name)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-4 text-primary focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all shadow-sm"
                      placeholder="Ad Soyad"
                    />
                    {errors.name && <p className="mt-2 text-xs font-semibold text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">E-posta</label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={handleChange('email')}
                      aria-invalid={Boolean(errors.email)}
                      className="w-full bg-white border border-slate-200 rounded-lg px-4 py-4 text-primary focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all shadow-sm"
                      placeholder="ornek@sirket.com"
                    />
                    {errors.email && <p className="mt-2 text-xs font-semibold text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Şirket</label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={handleChange('company')}
                    aria-invalid={Boolean(errors.company)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-4 text-primary focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all shadow-sm"
                    placeholder="Şirket Adı"
                  />
                  {errors.company && <p className="mt-2 text-xs font-semibold text-red-600">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Mesajınız</label>
                  <textarea
                    rows={4}
                    value={formState.message}
                    onChange={handleChange('message')}
                    aria-invalid={Boolean(errors.message)}
                    className="w-full bg-white border border-slate-200 rounded-lg px-4 py-4 text-primary focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all resize-none shadow-sm"
                    placeholder="Size nasıl yardımcı olabiliriz?"
                  ></textarea>
                  {errors.message && <p className="mt-2 text-xs font-semibold text-red-600">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-5 rounded-lg hover:bg-slate-800 transition-colors shadow-lg uppercase tracking-wider text-sm"
                >
                  Gönder
                </button>

                {submitted && (
                  <div className="p-3 text-sm font-semibold text-green-700 bg-green-50 border border-green-200 rounded-lg">
                    Teşekkürler! Mesajınız alındı, en kısa sürede dönüş yapacağız.
                  </div>
                )}
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
