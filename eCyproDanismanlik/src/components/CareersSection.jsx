import { ArrowRight, Briefcase } from 'lucide-react';

const CareersSection = () => {
  return (
    <section id="careers" className="bg-slate-900 text-white py-14 scroll-mt-24" aria-labelledby="careers-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-blue-200 uppercase tracking-[0.25em]">Kariyer</p>
          <h2 id="careers-heading" className="text-2xl lg:text-3xl font-bold">Ekibimize katılın</h2>
          <p className="text-blue-100 max-w-2xl">
            Patent, teşvik ve hukuki danışmanlıkta deneyimli uzmanlar arıyoruz. Hibrit çalışma, mentorluk ve sertifikasyon desteği sunuyoruz.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-lg px-4 py-3 text-sm font-semibold">
            <Briefcase className="w-5 h-5 text-blue-100" />
            Açık pozisyonlar: Uzman / Kıdemli Uzman
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Başvur
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
