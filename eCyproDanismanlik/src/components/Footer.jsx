import { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const contactPhone = '+90 541 714 30 00';
const contactEmail = 'adobemre1@gmail.com';
const contactAddress = 'İstanbul, Türkiye';

const Footer = () => {
  const [newsletterStatus, setNewsletterStatus] = useState({ state: 'idle', message: '' });

  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = (formData.get('email') || '').toString().trim();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setNewsletterStatus({ state: 'error', message: 'Geçerli bir e-posta adresi girin.' });
      return;
    }

    setNewsletterStatus({ state: 'success', message: 'Teşekkürler, bültene kaydoldunuz.' });
    event.currentTarget.reset();
  };

  return (
    <footer className="text-white bg-gradient-to-br from-gray-900 to-blue-900">
      {/* Main Footer */}
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="mb-4 text-2xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  EcyPro
                </span>
              </h3>
              <p className="mb-6 leading-relaxed text-gray-300">
                Yönetim danışmanlığı alanında Türkiye'nin önde gelen firması olarak,
                stratejik yönetim, insan kaynakları, liderlik gelişimi ve kurumsal etik konularında uzman çözümler sunuyoruz.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactPhone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactEmail}</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">{contactAddress}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-300 transition-colors hover:text-white">Kurumsal</a></li>
              <li><a href="#services" className="text-gray-300 transition-colors hover:text-white">Hizmetler</a></li>
              <li><a href="#blog" className="text-gray-300 transition-colors hover:text-white">Blog</a></li>
              <li><a href="#careers" className="text-gray-300 transition-colors hover:text-white">Kariyer</a></li>
              <li><a href="#contact" className="text-gray-300 transition-colors hover:text-white">İletişim</a></li>
              <li><a href="/gizlilik.html" className="text-gray-300 transition-colors hover:text-white">Gizlilik</a></li>
              <li><a href="/kullanim-sartlari.html" className="text-gray-300 transition-colors hover:text-white">Kullanım Şartları</a></li>
              <li><a href="/cerez-politikasi.html" className="text-gray-300 transition-colors hover:text-white">Çerez Politikası</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-lg font-semibold">Hizmetler</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 transition-colors hover:text-white">Stratejik Yönetim Danışmanlığı</a></li>
              <li><a href="#services" className="text-gray-300 transition-colors hover:text-white">İnsan Kaynakları Yönetimi</a></li>
              <li><a href="#services" className="text-gray-300 transition-colors hover:text-white">Liderlik ve Yönetici Koçluğu</a></li>
              <li><a href="#services" className="text-gray-300 transition-colors hover:text-white">Kurumsal Etik Danışmanlığı</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="pt-8 mt-12 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h4 className="mb-4 text-lg font-semibold">Bültenimize Abone Olun</h4>
            <p className="mb-6 text-gray-300">
              Yönetim danışmanlığı alanındaki son trendler, araştırmalar ve uygulama örneklerini kaçırmayın.
            </p>
            <form className="flex gap-2" onSubmit={handleNewsletterSubmit} noValidate>
              <input
                type="email"
                placeholder="E-posta adresiniz"
                required
                className="flex-1 px-4 py-2 text-white placeholder-gray-400 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                aria-label="E-posta adresi"
              />
              <button
                type="submit"
                className="px-6 py-2 font-semibold transition-all duration-300 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Bültene abone ol"
              >
                Abone Ol
              </button>
            </form>
            {newsletterStatus.state !== 'idle' && (
              <p
                className={`mt-3 text-sm ${newsletterStatus.state === 'success' ? 'text-green-300' : 'text-red-300'}`}
                role="status"
                aria-live="polite"
              >
                {newsletterStatus.message}
              </p>
            )}
            <p className="mt-3 text-xs text-gray-400">
              Abone olarak <a href="/gizlilik.html" className="underline hover:text-white">KVKK aydınlatma metnini</a> kabul etmiş olursunuz.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-gray-400">
              © 2024 EcyPro Danışmanlık. Tüm hakları saklıdır.
            </div>

            {/* Social Media Links */}
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/ecypro-danismanlik" className="text-gray-400 transition-colors hover:text-white" aria-label="LinkedIn'de takip edin">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="mailto:adobemre1@gmail.com?subject=EcyPro%20Danışmanlık%20İletişim" className="text-gray-400 transition-colors hover:text-white" aria-label="E-posta gönderin">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="tel:+905417143000" className="text-gray-400 transition-colors hover:text-white" aria-label="Telefon ile arayın">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </a>
              <a href="#contact" className="text-gray-400 transition-colors hover:text-white" aria-label="İletişim formuna gidin">
                <span className="sr-only">İletişim</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
