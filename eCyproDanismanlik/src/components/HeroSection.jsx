import { ArrowRight, PlayCircle, ShieldCheck, Sparkles, LineChart } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative py-20 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 lg:py-28 scroll-mt-24"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, #e0e7ed 0, transparent 35%), radial-gradient(circle at 80% 0%, #c8d5e1 0, transparent 35%), radial-gradient(circle at 60% 60%, #a6b8cc 0, transparent 30%)`,
          }}
        />
      </div>

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div className="space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 text-xs sm:text-sm font-semibold text-blue-800 bg-white border border-blue-200 rounded-full shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-blue-700 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Güvenilir strateji ortağınız</span>
                  <span className="sm:hidden">Güvenilir ortak</span>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-sm sm:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] text-blue-700 font-semibold">EcyPro Danışmanlık</p>
                  <h1
                    id="hero-heading"
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] sm:leading-tight text-gray-900"
                  >
                    90 Günde MVP ve
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-900"> ISO27001 Uyumlu Dijital Dönüşüm</span>
                  </h1>
                  <p className="max-w-[680px] mx-auto text-base sm:text-lg md:text-xl leading-[1.5] sm:leading-[1.65] text-gray-600 lg:mx-0 lg:max-w-[720px] lg:text-[19px] lg:leading-[1.65]">
                    Teknoloji odaklı şirketler için MVP hızlandırma, stratejik planlama ve operasyonel mükemmellik.
                    Patent ve teşvik danışmanlığı ile tam destek. McKinsey seviyesinde uzmanlık.
                  </p>
                </div>

            <div className="flex flex-col justify-center gap-4 sm:gap-6 md:gap-8 sm:flex-row lg:justify-start" role="group" aria-label="Ana eylemler">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold text-white transition-all duration-300 rounded-lg shadow-lg sm:px-8 sm:py-4 sm:text-lg bg-gradient-to-r from-blue-600 to-blue-900 hover:from-blue-700 hover:to-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label="Ücretsiz danışmanlık için iletişime geçin"
              >
                <span className="hidden sm:inline">Keşif Görüşmesi Planla</span>
                <span className="sm:hidden">Keşif Görüşmesi</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 text-base sm:text-lg font-semibold text-blue-700 transition-colors border border-blue-100 rounded-lg hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 bg-white/80"
                aria-label="Çözümlerimizi keşfedin"
              >
                <PlayCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                <span className="hidden sm:inline">Çözümlerimizi Keşfet</span>
                <span className="sm:hidden">Çözümler</span>
              </a>
            </div>

            <div className="grid gap-3 text-left sm:gap-4 sm:grid-cols-3">
              {[
                { icon: <Sparkles className="w-4 h-4 text-blue-700 sm:w-5 sm:h-5" />, title: '68+', desc: 'Aktif müşteri' },
                { icon: <LineChart className="w-4 h-4 text-blue-700 sm:w-5 sm:h-5" />, title: '250+', desc: 'Tamamlanan danışmanlık' },
                { icon: <ShieldCheck className="w-4 h-4 text-blue-700 sm:w-5 sm:h-5" />, title: '%98', desc: 'Müşteri memnuniyeti' },
              ].map((item) => (
                <div key={item.title} className="p-3 bg-white border border-blue-100 shadow-sm sm:p-4 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    {item.icon}
                    <p className="text-xs text-gray-500 sm:text-sm">Kanıtlanmış sonuç</p>
                  </div>
                  <p className="text-xl font-bold text-gray-900 sm:text-2xl">{item.title}</p>
                  <p className="text-xs text-gray-600 sm:text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Abstract Pattern Background */}
          <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none" aria-hidden="true">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern id="hero-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path
                    d="M20 0L40 20L20 40L0 20Z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.5"
                    className="text-blue-600"
                  />
                  <circle
                    cx="20"
                    cy="20"
                    r="2"
                    fill="currentColor"
                    className="text-blue-500"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hero-pattern)" />
              <path
                d="M100 50 Q150 25 200 50 T300 50"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-blue-400"
                opacity="0.3"
              />
              <path
                d="M50 150 Q100 125 150 150 T250 150"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-blue-400"
                opacity="0.3"
              />
              <path
                d="M200 250 Q250 225 300 250 T350 250"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                className="text-blue-400"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Visual Element */}
          <div className="relative z-10" role="img" aria-label="Şirket istatistikleri görseli">
            <div className="p-1 shadow-2xl bg-gradient-to-br from-blue-500 to-blue-900 rounded-2xl">
              <div className="p-8 bg-white/10 backdrop-blur-sm rounded-2xl">
                <div className="grid grid-cols-2 gap-4" role="list" aria-label="Şirket başarı metrikleri">
                  <div className="p-4 rounded-lg bg-white/20" role="listitem">
                    <div className="text-2xl font-bold text-white" aria-label="250'den fazla danışmanlık">250+</div>
                    <div className="text-sm text-blue-100">Tamamlanan danışmanlık</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/20" role="listitem">
                    <div className="text-2xl font-bold text-white" aria-label="30'dan fazla sektör">30+</div>
                    <div className="text-sm text-blue-100">Sektör deneyimi</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/20" role="listitem">
                    <div className="text-2xl font-bold text-white" aria-label="15 yıldan fazla deneyim">15+</div>
                    <div className="text-sm text-blue-100">Yıl deneyim</div>
                  </div>
                  <div className="p-4 rounded-lg bg-white/20" role="listitem">
                    <div className="text-2xl font-bold text-white" aria-label="yüzde 98 müşteri memnuniyeti">%98</div>
                    <div className="text-sm text-blue-100">Memnuniyet skoru</div>
                  </div>
                </div>
                <div className="p-4 mt-6 border bg-white/10 rounded-xl border-white/10">
                  <p className="text-sm text-blue-100">Uçtan uca veri odaklı planlama</p>
                  <p className="text-lg font-semibold text-white">Stratejiden canlıya alıma kadar aynı ekip</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
