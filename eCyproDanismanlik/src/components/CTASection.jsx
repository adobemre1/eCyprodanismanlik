import { ArrowRight, Timer } from 'lucide-react';
import { trackEvent } from '../utils/analytics';

const CTASection = () => {
  return (
    <section className="text-white py-14 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 reveal" aria-labelledby="cta-heading">
      <div className="flex flex-col items-center justify-between max-w-6xl gap-6 px-4 mx-auto sm:px-6 lg:px-8 lg:flex-row">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-blue-100 uppercase tracking-[0.25em]">Danışmanlık süreci</p>
          <h2 id="cta-heading" className="text-2xl font-bold lg:text-3xl">Stratejik dönüşüm yolculuğunuza başlayın</h2>
          <p className="max-w-2xl text-blue-100">
            2 haftalık derinlemesine analiz ve strateji geliştirme süreci ile kurumunuzun ihtiyaçlarını, fırsatlarını ve
            sürdürülebilir büyüme yol haritasını belirliyoruz. TÜBİSAD standartlarında profesyonel danışmanlık.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <div className="flex items-center gap-2 px-4 py-3 text-sm font-semibold border rounded-lg bg-white/10 border-white/20">
            <Timer className="w-5 h-5 text-blue-100" />
            14 günde strateji raporu
          </div>
          <a
            href="#contact"
            onClick={() => trackEvent('cta_click', { location: 'CTASection', label: 'Planı Başlat' })}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-blue-900 transition-all bg-white rounded-lg shadow-md hover:shadow-lg"
          >
            Planı Başlat
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
