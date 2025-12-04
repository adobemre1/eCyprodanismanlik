import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Phone, Mail, MapPin, Send, Sparkles, AlertTriangle } from 'lucide-react';
import { analyzeContactMessage } from '../utils/gemini';
import logger from '../utils/logger';
import { trackEvent } from '../utils/analytics';

const ContactSection = () => {
  const { register, handleSubmit, reset, formState } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [analysisError, setAnalysisError] = useState('');
  const [autoResponse, setAutoResponse] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const persistAnalysis = (analysis, formData) => {
    if (typeof window === 'undefined' || !analysis) return;

    const entry = {
      id: Date.now(),
      category: analysis.category,
      urgency: analysis.urgency,
      potential: analysis.potential,
      responseTime: analysis.responseTime,
      tags: analysis.tags || [],
      need: formData.need || 'belirtilmedi',
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = JSON.parse(localStorage.getItem('ai_contact_insights') || '[]');
      const next = [entry, ...existing].slice(0, 20);
      localStorage.setItem('ai_contact_insights', JSON.stringify(next));
    } catch (err) {
      logger.error('Could not persist contact analysis', err);
    }
  };

  const onSubmit = async (data) => {
    // Form verisi yalnızca yerelde tutulur; backend entegrasyonu hazır olduğunda gönderim yapılabilir.
    setSubmitted(true);
    setAnalysisResult(null);
    setAnalysisError('');
    setAutoResponse('');
    setIsAnalyzing(true);

    try {
      const analysis = await analyzeContactMessage(data.message || '', {
        name: data.name,
        email: data.email,
        phone: data.phone,
        organization: data.organization,
        need: data.need,
      });

      if (!analysis) {
        setAnalysisError('AI analizi şu anda kullanılamıyor. Talebiniz alındı.');
      } else {
        setAnalysisResult(analysis);
        if (analysis.suggestedResponse) {
          setAutoResponse(analysis.suggestedResponse);
        }
        persistAnalysis(analysis, data);
      }
      trackEvent('form_submit', { form: 'contact', need: data.need || 'belirtilmedi' });
    } catch (error) {
      logger.error('Contact analysis failed', error);
      setAnalysisError('Form analiz edilirken bir hata oluştu. Talebiniz alındı.');
    } finally {
      setIsAnalyzing(false);
      reset();
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <section id="contact" className="py-16 text-white bg-slate-900 lg:py-20 scroll-mt-24" aria-labelledby="contact-heading">
      <div className="grid items-center gap-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-[0.25em]">İletişim</p>
          <h2 id="contact-heading" className="text-3xl font-bold lg:text-4xl">Kurumsal hedeflerinizi konuşalım</h2>
          <p className="max-w-xl text-slate-200">
            30 dakikalık keşif görüşmesinde stratejik hedeflerinizi, organizasyonel ihtiyaçlarınızı ve sürdürülebilir büyüme planınızı birlikte çıkaralım.
          </p>
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold border rounded-full bg-blue-100/20 text-blue-50 border-blue-200/30">
            <Sparkles className="w-3 h-3" />
            AI destekli önceliklendirme
          </div>
          <div className="grid gap-4 sm:grid-cols-2 text-slate-200">
            <div className="flex items-center gap-3 p-4 border bg-white/5 border-white/10 rounded-xl">
              <Phone className="w-5 h-5 text-blue-200" />
              <div>
                <p className="text-sm text-slate-300">Telefon</p>
                <p className="font-semibold">+90 541 714 30 00</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border bg-white/5 border-white/10 rounded-xl">
              <Mail className="w-5 h-5 text-blue-200" />
              <div>
                <p className="text-sm text-slate-300">E-posta</p>
                <p className="font-semibold">adobemre1@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border bg-white/5 border-white/10 rounded-xl">
              <MapPin className="w-5 h-5 text-blue-200" />
              <div>
                <p className="text-sm text-slate-300">Lokasyon</p>
                <p className="font-semibold">İstanbul, Türkiye</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 border bg-white/5 border-white/10 rounded-xl">
              <Send className="w-5 h-5 text-blue-200" />
              <div>
                <p className="text-sm text-slate-300">Yanıt Süresi</p>
                <p className="font-semibold">24 saat içinde dönüş</p>
              </div>
            </div>
          </div>
        </div>

        <form
          className="p-6 text-gray-900 bg-white border border-blue-100 shadow-2xl rounded-2xl"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-label="İletişim formu"
          aria-busy={formState.isSubmitting}
        >
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-semibold">Ad Soyad</label>
              <input
                id="name"
                type="text"
                className="px-4 py-3 border rounded-lg border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Adınız ve soyadınız"
                {...register('name', { required: 'Ad soyad zorunlu' })}
              />
              {formState.errors.name && <p className="text-sm text-red-600">{formState.errors.name.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="organization" className="font-semibold">Kurum / Organizasyon</label>
              <input
                id="organization"
                type="text"
                className="px-4 py-3 border rounded-lg border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Şirket adı veya kurum"
                {...register('organization', { required: 'Kurum/organizasyon zorunlu' })}
              />
              {formState.errors.organization && <p className="text-sm text-red-600">{formState.errors.organization.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold">E-posta</label>
              <input
                id="email"
                type="email"
                className="px-4 py-3 border rounded-lg border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="ornek@firma.com"
                {...register('email', {
                  required: 'E-posta zorunlu',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Geçerli bir e-posta girin',
                  },
                })}
              />
              {formState.errors.email && <p className="text-sm text-red-600">{formState.errors.email.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="font-semibold">Telefon</label>
              <input
                id="phone"
                type="tel"
                className="px-4 py-3 border rounded-lg border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+90 5xx xxx xx xx"
                {...register('phone', {
                  required: 'Telefon zorunlu',
                  pattern: {
                    value: /^[0-9+()\s-]{8,20}$/,
                    message: 'Geçerli bir telefon girin',
                  },
                })}
              />
              {formState.errors.phone && <p className="text-sm text-red-600">{formState.errors.phone.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="need" className="font-semibold">Öncelikli ihtiyacınız</label>
              <select
                id="need"
                className="px-4 py-3 border rounded-lg border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('need', { required: 'İhtiyaç seçimi zorunlu' })}
              >
                <option value="">Seçin</option>
                <option value="strategy">Stratejik yönetim ve konumlandırma</option>
                <option value="hr">İnsan kaynakları ve performans</option>
                <option value="organization">Örgütsel davranış ve iletişim</option>
                <option value="leadership">Liderlik ve yönetici koçluğu</option>
                <option value="ethics">Kurumsal etik ve sosyal sorumluluk</option>
                <option value="public">Kamu/Belediye yönetimi</option>
                <option value="entrepreneurship">Girişimcilik danışmanlığı</option>
                <option value="other">Diğer</option>
              </select>
              {formState.errors.need && <p className="text-sm text-red-600">{formState.errors.need.message}</p>}
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">Kısaca hedefiniz</label>
              <textarea
                id="message"
                rows={3}
                className="px-4 py-3 border rounded-lg border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Kurumsal hedefinizi, ekiplerinizin durumunu ve önceliklerinizi özetleyin"
                {...register('message')}
              />
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Verileriniz yalnızca sizinle iletişime geçmek için saklanır.
                <a href="/gizlilik.html" className="ml-1 text-blue-600 underline hover:text-blue-800" target="_blank" rel="noopener noreferrer">
                  KVKK aydınlatma metnini
                </a> inceleyin.
              </p>
              <button
                type="submit"
                className="px-6 py-3 font-semibold text-white transition-all rounded-lg shadow-md bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 disabled:opacity-60"
                disabled={formState.isSubmitting || isAnalyzing}
                aria-describedby="submit-description"
              >
                {isAnalyzing ? 'Analiz ediliyor...' : formState.isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
              </button>
            </div>
            <div id="submit-description" className="sr-only">
              Formu gönderdikten sonra 24 saat içinde sizinle iletişime geçeceğiz.
            </div>

            {submitted && (
              <div
                className="px-4 py-3 text-sm font-semibold text-green-800 border border-green-200 rounded-lg bg-green-50"
                role="status"
                aria-live="polite"
              >
                Talebiniz alındı. 24 saat içinde dönüş yapacağız.
              </div>
            )}

            {analysisResult && (
              <div className="p-4 mt-3 space-y-2 text-sm text-blue-900 border border-blue-100 rounded-lg bg-blue-50">
                <div className="flex items-center gap-2 font-semibold">
                  <Sparkles className="w-4 h-4" />
                  AI Analiz Özeti
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-xs text-blue-800/70">Kategori</p>
                    <p className="font-medium">{analysisResult.category}</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-800/70">Aciliyet</p>
                    <p className="font-medium">{analysisResult.urgency}</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-800/70">Potansiyel</p>
                    <p className="font-medium">{analysisResult.potential}</p>
                  </div>
                  <div>
                    <p className="text-xs text-blue-800/70">Önerilen yanıt süresi</p>
                    <p className="font-medium">{analysisResult.responseTime}</p>
                  </div>
                </div>
                {autoResponse && (
                  <div className="p-3 text-gray-800 bg-white border border-blue-100 rounded-md">
                    <p className="text-xs font-semibold text-blue-800">Önerilen otomatik yanıt</p>
                    <p className="mt-1 leading-relaxed">{autoResponse}</p>
                  </div>
                )}
                {analysisResult.tags?.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {analysisResult.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}

            {analysisError && (
              <div className="flex items-center gap-2 p-3 mt-3 text-sm text-yellow-800 border border-yellow-200 rounded-lg bg-yellow-50">
                <AlertTriangle className="w-4 h-4" />
                {analysisError}
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
