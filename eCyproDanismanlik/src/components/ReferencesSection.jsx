import { Building2, CheckCircle2, Quote, Award } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const references = [
  {
    name: 'Holding Grup',
    sector: 'Özel sektör',
    result: '12 ay strateji dönüşümü',
    detail: [
      'SWOT/PESTLE + rekabet konumlandırma tamamlandı, yönetim kurulu onayı alındı.',
      'Tek yol haritası ve OKR seti ile 12 ay uygulama; aylık raporlama ritüeli.',
      '%18 karar alma hızlanması, risk listesi ve paydaş matrisi netleşti.'
    ],
  },
  {
    name: 'Kamu Sağlık Kurumu',
    sector: 'Kamu',
    result: '%21 hizmet verimliliği',
    detail: [
      'Organizasyon modeli ve rol/sorumluluk matrisi güncellendi.',
      'Performans takip sistemi ve hizmet verimlilik ölçümü kuruldu.',
      '%21 verimlilik artışı; paydaş yönetimi ve raporlama standartları oturdu.'
    ],
  },
  {
    name: 'Perakende Zinciri',
    sector: 'Özel sektör',
    result: '%9 bağlılık artışı',
    detail: [
      'Yetenek segmentasyonu, 360° performans ve ödüllendirme modeli kuruldu.',
      'Eğitim-gelişim ve mentorluk programı yaygınlaştırıldı.',
      '12 ayda çalışan bağlılığı %9 arttı; kritik rollerde turnover %6 düştü.'
    ],
  },
  {
    name: 'Belediye Projesi',
    sector: 'Kamu',
    result: 'Kriz ve rol netliği',
    detail: [
      'Kamu projeleri için paydaş ve risk yönetimi çerçevesi kuruldu.',
      'Kriz/karar kılavuzları ve rol/sorumluluk matrisi netleştirildi.',
      'Kritik projelerde karar döngü süresi %15 kısaldı; raporlama ritmi oturdu.'
    ],
  },
];

const ReferencesSection = () => {
  return (
    <section id="references" className="bg-white py-16 lg:py-20 scroll-mt-24 reveal" aria-labelledby="references-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.25em]">Sonuçlar</p>
            <h2 id="references-heading" className="text-3xl lg:text-4xl font-bold text-gray-900">
              Kanıtlanmış çıktılar ve şeffaf raporlama
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl">
              Her sprint sonunda paylaşılan OKR ve risk raporlarıyla ilerlemeyi görünür kılıyor,
              koşullu teslimatlarla kaliteyi güvence altına alıyoruz.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4 text-blue-900 font-semibold shadow-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-blue-700" />
              %98 memnuniyet ve tekrar eden iş oranı
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {references.map((ref) => (
            <article key={ref.name} className="h-full border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <Building2 className="w-6 h-6 text-blue-700" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{ref.name}</h3>
                  <p className="text-sm text-blue-700 font-semibold">{ref.result}</p>
                  <p className="text-xs text-gray-500">{ref.sector}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 text-gray-600">
                <Quote className="w-5 h-5 text-blue-700 mt-1" aria-hidden="true" />
                <div className="space-y-2 text-sm">
                  {ref.detail.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-200">
                <div className="flex items-center gap-2 text-blue-700 text-sm font-semibold">
                  <Award className="w-4 h-4" aria-hidden="true" />
                  Doğrulanmış sonuç
                </div>
                <a
                  href="#contact"
                  onClick={() => trackEvent('cta_click', { location: 'references', label: 'Benzer proje' })}
                  className="text-sm font-semibold text-blue-700 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                >
                  Benzer projeyi konuşalım →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;
