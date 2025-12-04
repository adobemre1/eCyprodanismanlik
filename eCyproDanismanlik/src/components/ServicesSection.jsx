import { Target, Users, TrendingUp, Award, Heart, Building2, BriefcaseBusiness, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Stratejik Yönetim Danışmanlığı',
    description: 'Kurumsal strateji, rekabet analizi ve konumlandırma ile sürdürülebilir büyüme planları oluşturuyoruz.',
    icon: <Target className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    highlights: [
      'Strateji oluşturma ve uygulama planı',
      'Rekabet analizi ve pazar araştırması',
      'SWOT – PESTLE analizleri',
      'Kurumsal hedef ve KPI belirleme',
    ],
  },
  {
    title: 'İnsan Kaynakları Yönetimi',
    description: 'Yetenek, performans, ödüllendirme ve bağlılık süreçlerini tek çatı altında kurguluyoruz.',
    icon: <Users className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    highlights: [
      'İşe alım ve yetenek yönetimi',
      'Performans ve ödüllendirme sistemleri',
      'Eğitim-gelişim programları',
      'Motivasyon ve bağlılık artışı',
    ],
  },
  {
    title: 'Örgütsel Davranış ve İletişim',
    description: 'Kültür dönüşümü, iletişim stratejisi ve ekip uyumu için uygulanabilir planlar tasarlıyoruz.',
    icon: <TrendingUp className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    highlights: [
      'Örgütsel davranış analizi',
      'Kültür dönüşümü ve iletişim ritüelleri',
      'İletişim stratejisi ve değişim planı',
      'Ekip içi iletişim iyileştirme',
    ],
  },
  {
    title: 'Liderlik ve Yönetici Koçluğu',
    description: 'Karar alma, kriz yönetimi ve ekip yönetişimi için liderlik koçluğu ve kılavuzlar sağlıyoruz.',
    icon: <Award className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    highlights: [
      'Liderlik koçluğu ve gelişim planı',
      'Kriz ve karar destek kılavuzları',
      '360° geri bildirim ve takip',
      'Rol-sorumluluk netleştirme',
    ],
  },
  {
    title: 'Kurumsal Etik ve Sosyal Sorumluluk',
    description: 'Etik standartlar, itibar yönetimi ve sosyal sorumluluk projelerini yapılandırıyoruz.',
    icon: <Heart className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    highlights: [
      'Etik standart ve politika seti',
      'İtibar yönetimi çerçevesi',
      'Sosyal sorumluluk proje planı',
      'Raporlama ve ölçümleme modeli',
    ],
  },
  {
    title: 'Belediye ve Kamu Yönetimi',
    description: 'Kamu projelerinde verimlilik, organizasyon ve paydaş yönetimini uçtan uca kurguluyoruz.',
    icon: <Building2 className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    highlights: [
      'Hizmet verimliliği analizi',
      'Organizasyon modellemesi',
      'Kamu proje planlama ve yürütme',
      'Paydaş ve performans yönetimi',
    ],
  },
  {
    title: 'Girişimcilik Danışmanlığı',
    description: 'Erken aşama ve büyüyen girişimlere iş modeli, pazar doğrulama ve yatırım hazırlığında destek veriyoruz.',
    icon: <BriefcaseBusiness className="w-6 h-6 text-blue-700" aria-hidden="true" />,
    highlights: [
      'İş modeli ve değer önerisi',
      'Pazar ve rekabet doğrulaması',
      'Yatırım hazırlığı ve paketleri',
      'Finansal plan ve KPI seti',
    ],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-16 bg-white lg:py-20 scroll-mt-24 reveal" aria-labelledby="services-heading">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.25em]">Danışmanlık Hizmetleri</p>
            <h2 id="services-heading" className="text-3xl font-bold text-gray-900 lg:text-4xl">
              Yönetim Danışmanlığı Çözümlerimiz
            </h2>
            <p className="max-w-3xl text-lg text-gray-600">
              Stratejik yönetimden insan kaynaklarına, liderlik gelişiminden kamu yönetimi danışmanlığına kadar
              kurumunuzun tüm ihtiyaçlarına özel çözümler sunuyoruz.
            </p>
          </div>
          <div className="px-5 py-3 text-sm text-blue-800 border border-blue-100 shadow-sm bg-blue-50 rounded-xl">
            <p className="font-semibold">Ücretsiz Ön Değerlendirme</p>
            <p>Kurumunuzun ihtiyaç analizi ve özelleştirilmiş çözüm önerisi</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="h-full p-8 transition-shadow border border-blue-100 bg-gradient-to-b from-white to-blue-50/40 rounded-xl shadow-[0_4px_24px_rgba(0,0,0,0.03)] hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-100 rounded-xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="mb-4 text-gray-600">{service.description}</p>
              <ul className="space-y-2 text-sm text-gray-700">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="w-2 h-2 mt-1 bg-blue-600 rounded-full" aria-hidden="true" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-semibold text-blue-700 rounded hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Detayları oku
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
