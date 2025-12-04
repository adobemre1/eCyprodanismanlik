import { Compass, ClipboardCheck, Users, TrendingUp } from 'lucide-react';

const steps = [
  {
    title: 'İhtiyaç Analizi ve Değerlendirme',
    description: 'Kurumsal ihtiyaçların derinlemesine analizi, paydaş görüşmeleri ve mevcut durum değerlendirmesi yapılır.',
    result: 'Kapsamlı ihtiyaç raporu ve önceliklendirme matrisi',
    icon: <Compass className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: 'Strateji Geliştirme ve Planlama',
    description: 'Özelleştirilmiş çözüm stratejisi, uygulama planı ve başarı metrikleri belirlenir.',
    result: 'Detaylı uygulama roadmap ve KPI framework',
    icon: <ClipboardCheck className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: 'Uygulama ve Değişim Yönetimi',
    description: 'Çok disiplinli yaklaşım ile çözümün uygulanması ve değişim süreçlerinin yönetilmesi.',
    result: 'Başarılı uygulama ve çalışan adaptasyonu',
    icon: <Users className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
  {
    title: 'İzleme, Ölçme ve Sürekli İyileştirme',
    description: 'Sonuçların izlenmesi, performans ölçümü ve sürekli iyileştirme süreçlerinin kurulması.',
    result: 'Sürdürülebilir sonuçlar ve sürekli iyileştirme kültürü',
    icon: <TrendingUp className="w-6 h-6 text-blue-700" aria-hidden="true" />,
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="py-16 bg-slate-50 lg:py-20 scroll-mt-24" aria-labelledby="approach-heading">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-12 space-y-3 text-center">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.25em]">Çalışma Modeli</p>
          <h2 id="approach-heading" className="text-3xl font-bold text-gray-900 lg:text-4xl">
            Ölçülebilir çıktılar için adım adım ilerleyen playbook
          </h2>
          <p className="text-lg text-gray-600">
            Her aşamada karar destek metrikleri ve net sorumluluk dağılımı ile ilerliyoruz.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="relative p-6 bg-white border border-blue-100 shadow-sm rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-xl">{step.icon}</div>
                <div>
                  <span className="text-xs font-semibold text-blue-700">Adım {index + 1}</span>
                  <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                </div>
              </div>
              <p className="mb-4 text-gray-600">{step.description}</p>
              <p className="px-3 py-2 text-sm font-semibold text-blue-800 border border-blue-100 rounded-lg bg-blue-50">
                Çıktı: {step.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
