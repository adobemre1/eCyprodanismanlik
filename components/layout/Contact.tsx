
import React, { useState } from 'react';
import { FadeIn } from '../common/FadeIn';
import { MessageCircle, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { trackEvent } from '../../lib/analytics';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setErrorMessage('Lütfen tüm alanları doldurunuz.');
      setStatus('error');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrorMessage('Lütfen geçerli bir e-posta adresi giriniz.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Simulate API Call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      // Mock Success
      trackEvent('Contact', 'Form Submit', 'Success');
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      trackEvent('Contact', 'Form Submit', 'Error');
      setStatus('error');
      setErrorMessage('Bir sorun oluştu, lütfen daha sonra tekrar deneyiniz.');
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <FadeIn>
            <div>
              <h2 id="contact-heading" className="text-h2-d font-serif font-bold text-primary mb-8">
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
                    <a href="mailto:info@ecypro.com" className="text-primary text-lg hover:text-secondary transition-colors">info@ecypro.com</a>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Telefon</h4>
                    <a href="tel:+902125550123" className="text-primary text-lg hover:text-secondary transition-colors">+90 (212) 555 0123</a>
                  </div>
                </div>
                
                <div className="pt-6">
                  <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer" onClick={() => trackEvent('Contact', 'WhatsApp Click')} className="inline-flex items-center gap-3 px-6 py-3 bg-[#25D366] text-white rounded-lg font-bold shadow-sm hover:shadow-md hover:bg-[#20bd5a] transition-all">
                    <MessageCircle size={20} />
                    WhatsApp'tan Ulaşın
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="bg-neutral p-10 md:p-14 rounded-3xl shadow-sm border border-slate-100">
              <p className="text-sm font-bold text-secondary uppercase tracking-widest mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                24 Saat İçinde Dönüş Yapıyoruz
              </p>
              
              {status === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-in fade-in">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Mesajınız Alındı!</h3>
                  <p className="text-green-700">En kısa sürede size dönüş yapacağız.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-bold text-green-600 hover:underline">Yeni mesaj gönder</button>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                  {status === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2">
                      <AlertCircle size={18} />
                      <span className="text-sm">{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group relative">
                      <input 
                        type="text" 
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="peer w-full bg-white border border-slate-200 rounded-lg px-4 pt-6 pb-2 text-primary focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all shadow-sm placeholder-transparent disabled:opacity-50"
                        placeholder="Ad Soyad"
                        disabled={status === 'submitting'}
                        required
                      />
                      <label 
                        htmlFor="name"
                        className="absolute left-4 top-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-secondary"
                      >
                        Adınız
                      </label>
                    </div>
                    <div className="group relative">
                      <input 
                        type="email" 
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="peer w-full bg-white border border-slate-200 rounded-lg px-4 pt-6 pb-2 text-primary focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all shadow-sm placeholder-transparent disabled:opacity-50"
                        placeholder="ornek@sirket.com"
                        disabled={status === 'submitting'}
                        required
                      />
                      <label 
                        htmlFor="email"
                        className="absolute left-4 top-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-secondary"
                      >
                        E-posta
                      </label>
                    </div>
                  </div>
                  
                  <div className="group relative">
                    <input 
                      type="text" 
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="peer w-full bg-white border border-slate-200 rounded-lg px-4 pt-6 pb-2 text-primary focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all shadow-sm placeholder-transparent disabled:opacity-50"
                      placeholder="Konu"
                      disabled={status === 'submitting'}
                      required
                    />
                    <label 
                      htmlFor="subject"
                      className="absolute left-4 top-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-secondary"
                    >
                      Konu
                    </label>
                  </div>

                  <div className="group relative">
                    <textarea 
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="peer w-full bg-white border border-slate-200 rounded-lg px-4 pt-6 pb-2 text-primary focus:outline-none focus:ring-1 focus:ring-secondary focus:border-secondary transition-all resize-none shadow-sm placeholder-transparent disabled:opacity-50"
                      placeholder="Mesajınız"
                      disabled={status === 'submitting'}
                      required
                    ></textarea>
                    <label 
                      htmlFor="message"
                      className="absolute left-4 top-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider transition-all peer-placeholder-shown:text-xs peer-placeholder-shown:text-slate-500 peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-secondary"
                    >
                      Mesajınız
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-primary text-white font-bold py-5 rounded-lg hover:bg-slate-800 disabled:bg-slate-400 transition-colors shadow-lg uppercase tracking-wider text-sm outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Gönderiliyor...
                      </>
                    ) : 'Gönder'}
                  </button>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
