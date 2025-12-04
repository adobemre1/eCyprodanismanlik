import { ShieldCheck, Award, Users, CheckCircle2 } from 'lucide-react';

const valueItems = [
  {
    title: '90 Günde MVP Teslimi',
    description: 'Konsept aşamasından pazar doğrulamasına kadar tam MVP geliştirme süreci ve ilk gelir elde etme.',
    icon: <Award className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: 'ISO27001 Uyumlu Geliştirme',
    description: 'Güvenlik ve uyumluluk standartlarını baştan entegre eden, sertifikaya hazır yazılım süreçleri.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: 'Teknoloji + Patent Stratejisi',
    description: 'MVP geliştirme ile paralel fikri mülkiyet koruması ve patent stratejisi danışmanlığı.',
    icon: <Users className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: 'Teşvik ve Fon Yönetimi',
    description: 'TÜBİTAK, KOSGEB ve AB fonları için proje hazırlama ve başarı garantili uygulama.',
    icon: <CheckCircle2 className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
];

const ValueSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 lg:py-28 scroll-mt-24" aria-labelledby="about-heading">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.25em]">Teknoloji Odaklı</p>
            <h2 id="about-heading" className="text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Yönetim danışmanlığı için tek ekip, tek yol haritası
            </h2>
            <p className="text-xl leading-relaxed text-gray-600">
              Strateji, insan kaynakları, liderlik ve iletişim başlıklarını tek plan altında birleştirip,
              uygulanabilir yol haritaları ve denetime hazır süreçlerle kurumunuzu güçlendiriyoruz.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="p-6 bg-white border border-blue-100 shadow-sm rounded-xl">
                <p className="text-sm font-semibold text-blue-700">İlk 2 haftada</p>
                <p className="text-gray-800">MVP hipotezleri, teknik mimari, geliştirme roadmap'ı</p>
              </div>
              <div className="p-6 bg-white border border-blue-100 shadow-sm rounded-xl">
                <p className="text-sm font-semibold text-blue-700">Tam entegrasyon</p>
                <p className="text-gray-800">MVP + ISO27001 + Patent + Teşvik danışmanlığı</p>
              </div>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {valueItems.map((item) => (
              <article key={item.title} className="h-full p-6 bg-white border border-blue-100 shadow-sm rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-50 rounded-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
