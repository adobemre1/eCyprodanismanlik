/**
 * İletişim Sayfası İçerikleri
 *
 * İletişim formu, bilgiler, harita ve SSS içerikleri
 */

export const contactContent = {
  hero: {
    title: "Bizimle İletişime Geçin",
    subtitle: "Kurumunuz İçin Doğru Çözümü Birlikte Bulalım",
    description: "Yönetim danışmanlığı hizmetlerimiz hakkında detaylı bilgi almak, ücretsiz ön görüşme talep etmek veya sorularınızı sormak için formu doldurun veya doğrudan iletişim bilgilerimizden bize ulaşın."
  },

  contactInfo: {
    title: "İletişim Bilgileri",
    subtitle: "Bize Ulaşın",
    phone: {
      label: "Telefon",
      value: "+90 541 714 30 00",
      link: "tel:+905417143000",
      icon: "Phone",
      availability: "Pazartesi - Cuma: 09:00 - 18:00"
    },
    email: {
      label: "E-posta",
      value: "info@ecypro.com",
      link: "mailto:info@ecypro.com",
      icon: "Mail",
      availability: "7/24 destek"
    },
    address: {
      label: "Adres",
      value: "Beyoğlu, İstanbul, Türkiye",
      icon: "MapPin",
      fullAddress: "Örnek Mahallesi, Danışmanlık Caddesi No: 123\nBeyoğlu, İstanbul 34000\nTürkiye"
    },
    social: {
      label: "Sosyal Medya",
      icon: "Share2",
      links: [
        {
          platform: "LinkedIn",
          url: "https://linkedin.com/company/ecypro",
          icon: "Linkedin"
        },
        {
          platform: "Twitter",
          url: "https://twitter.com/ecypro",
          icon: "Twitter"
        },
        {
          platform: "Instagram",
          url: "https://instagram.com/ecypro",
          icon: "Instagram"
        }
      ]
    }
  },

  form: {
    title: "İletişim Formu",
    subtitle: "Hemen Başlayalım",
    description: "Formu doldurun, 24 saat içinde size geri dönelim. Ücretsiz ön görüşme için randevu alabilirsiniz.",
    benefits: [
      "Ücretsiz 30 dakikalık ön görüşme",
      "İhtiyaç analizi ve öneri sunumu",
      "Yükümlülüksüz teklif",
      "24 saat içinde geri dönüş garantisi"
    ],
    fields: {
      name: {
        label: "Ad Soyad",
        placeholder: "Örn: Ahmet Yılmaz",
        required: true,
        type: "text"
      },
      email: {
        label: "E-posta",
        placeholder: "ornek@sirket.com",
        required: true,
        type: "email"
      },
      phone: {
        label: "Telefon",
        placeholder: "0532 123 45 67",
        required: true,
        type: "tel"
      },
      company: {
        label: "Şirket Adı",
        placeholder: "Şirketinizin adı",
        required: false,
        type: "text"
      },
      position: {
        label: "Pozisyon",
        placeholder: "Örn: Genel Müdür, İK Müdürü",
        required: false,
        type: "text"
      },
      serviceInterest: {
        label: "İlgilendiğiniz Hizmet",
        placeholder: "Hizmet seçin",
        required: true,
        type: "select",
        options: [
          { value: "", label: "Bir hizmet seçin" },
          { value: "stratejik-yonetim", label: "Stratejik Yönetim Danışmanlığı" },
          { value: "insan-kaynaklari", label: "İnsan Kaynakları Yönetimi" },
          { value: "orgutsel-davranis", label: "Örgütsel Davranış ve İletişim" },
          { value: "liderlik-koclugu", label: "Liderlik ve Yönetici Koçluğu" },
          { value: "kurumsal-etik", label: "Kurumsal Etik ve Sosyal Sorumluluk" },
          { value: "kamu-yonetimi", label: "Belediye ve Kamu Kurumları" },
          { value: "girisimcilik", label: "Girişimcilik Danışmanlığı" },
          { value: "diger", label: "Diğer / Bilgi Almak İstiyorum" }
        ]
      },
      budget: {
        label: "Tahmini Bütçe",
        placeholder: "Bütçe aralığı seçin",
        required: false,
        type: "select",
        options: [
          { value: "", label: "Belirtmek istemiyorum" },
          { value: "under-50k", label: "50.000 TL altı" },
          { value: "50k-100k", label: "50.000 - 100.000 TL" },
          { value: "100k-250k", label: "100.000 - 250.000 TL" },
          { value: "250k-500k", label: "250.000 - 500.000 TL" },
          { value: "over-500k", label: "500.000 TL üzeri" }
        ]
      },
      timeline: {
        label: "Başlangıç Zamanı",
        placeholder: "Ne zaman başlamak istersiniz?",
        required: false,
        type: "select",
        options: [
          { value: "", label: "Seçiniz" },
          { value: "asap", label: "Hemen" },
          { value: "1-month", label: "1 ay içinde" },
          { value: "1-3-months", label: "1-3 ay içinde" },
          { value: "3-6-months", label: "3-6 ay içinde" },
          { value: "planning", label: "Planlama aşamasında" }
        ]
      },
      message: {
        label: "Mesajınız",
        placeholder: "Projeniz veya ihtiyaçlarınız hakkında detaylı bilgi verin...",
        required: true,
        type: "textarea",
        rows: 6
      },
      consent: {
        label: "KVKK Onayı",
        text: "Kişisel verilerimin işlenmesine ve iletişim amacıyla kullanılmasına onay veriyorum.",
        required: true,
        type: "checkbox",
        link: {
          text: "KVKK Aydınlatma Metni",
          url: "/kvkk"
        }
      }
    },
    submitButton: {
      text: "Gönder",
      loadingText: "Gönderiliyor...",
      icon: "Send"
    }
  },

  workingHours: {
    title: "Çalışma Saatleri",
    schedule: [
      {
        days: "Pazartesi - Cuma",
        hours: "09:00 - 18:00",
        note: "Ofis saatleri"
      },
      {
        days: "Cumartesi",
        hours: "Randevulu",
        note: "Önceden randevu ile"
      },
      {
        days: "Pazar",
        hours: "Kapalı",
        note: "E-posta destek mevcut"
      }
    ]
  },

  map: {
    title: "Konumumuz",
    description: "İstanbul Beyoğlu'nda merkezi konumumuzda hizmet veriyoruz.",
    coordinates: {
      lat: 41.0369,
      lng: 28.9850
    },
    zoom: 15
  },

  quickActions: {
    title: "Hızlı İşlemler",
    actions: [
      {
        icon: "Calendar",
        title: "Randevu Al",
        description: "Online randevu sistemi ile kolayca randevu oluşturun",
        action: "Randevu Al",
        link: "#contact-form"
      },
      {
        icon: "FileText",
        title: "Teklif İste",
        description: "Projeniz için detaylı teklif talep edin",
        action: "Teklif İste",
        link: "#contact-form"
      },
      {
        icon: "MessageCircle",
        title: "Hemen Sor",
        description: "AI destekli chatbot ile anında cevap alın",
        action: "Chatbot Aç",
        link: "#chatbot"
      },
      {
        icon: "Download",
        title: "Broşür İndir",
        description: "Hizmetlerimiz hakkında detaylı broşür",
        action: "İndir (PDF)",
        link: "/assets/ecypro-brosur.pdf"
      }
    ]
  },

  faq: {
    title: "Sıkça Sorulan Sorular",
    subtitle: "İletişim Hakkında",
    questions: [
      {
        question: "İlk görüşme ücretli mi?",
        answer: "Hayır, ilk 30 dakikalık ön görüşme tamamen ücretsizdir. Bu görüşmede ihtiyaçlarınızı dinler, size özel çözüm önerilerimizi paylaşırız."
      },
      {
        question: "Ne kadar sürede geri dönüş yaparsınız?",
        answer: "Form başvurularına en geç 24 saat içinde geri dönüş yapıyoruz. Genellikle aynı gün içinde size ulaşıyoruz."
      },
      {
        question: "Sadece İstanbul'da mı hizmet veriyorsunuz?",
        answer: "Ofisimiz İstanbul'da olmakla birlikte, Türkiye genelinde ve online olarak hizmet veriyoruz. Uzaktan danışmanlık ve koçluk hizmetlerimiz mevcuttur."
      },
      {
        question: "Hangi sektörlere hizmet veriyorsunuz?",
        answer: "Üretim, hizmet, finans, teknoloji, kamu ve sivil toplum kuruluşları dahil tüm sektörlere hizmet veriyoruz."
      },
      {
        question: "Proje süresi ne kadar?",
        answer: "Proje süreleri hizmete ve ihtiyaca göre değişir. Bazı projeler 1-2 ay, bazıları 6-12 ay sürebilir. Detaylı bilgi için görüşelim."
      },
      {
        question: "Ödeme koşullarınız nedir?",
        answer: "Ödeme koşulları proje bazlı belirlenir. Genellikle proje başında ön ödeme, sonrasında aşamalı ödemeler şeklinde çalışırız."
      }
    ]
  },

  cta: {
    title: "Başlamaya Hazır mısınız?",
    description: "Kurumunuz için doğru çözümü birlikte bulalım. Ücretsiz danışmanlık için hemen iletişime geçin.",
    button: {
      text: "Formu Doldurun",
      link: "#contact-form"
    }
  },

  seo: {
    title: "İletişim - eCyPro Yönetim Danışmanlığı",
    description: "eCyPro ile iletişime geçin. Ücretsiz ön görüşme, teklif talebi veya sorularınız için bize ulaşın. Tel: +90 541 714 30 00",
    keywords: [
      "yönetim danışmanlığı iletişim",
      "danışmanlık teklif",
      "ücretsiz danışmanlık görüşmesi",
      "yönetim danışmanı İstanbul",
      "danışmanlık randevu"
    ]
  }
};

export default contactContent;
