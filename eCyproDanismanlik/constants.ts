
import {
  Briefcase,
  Globe,
  Users,
  Layers,
  Lightbulb,
  Building2,
  Mic2,
  Share2,
  Target,
  Award,
  Zap,
  MousePointerClick
} from 'lucide-react';
import {
  NavItem,
  ServiceCategory,
  KpiItem,
  CaseStudy,
  BlogPost,
  ValueProp,
  TrustLogo,
  ContactConfig,
  HeroContent,
  TrustBarCopy,
  ContactFormCopy,
  FooterCopy,
  CookieBannerCopy,
  InsightsCopy,
  SuccessStoriesCopy,
  KPICopy,
  ValuePropCopy,
  ServicesCopy
} from './types';

export const FALLBACK_MESSAGES = {
  EMPTY_LIST: {
    tr: 'Şu anda listelenecek içerik bulunmuyor. Lütfen daha sonra tekrar ziyaret ediniz.',
    en: 'There is currently no content to display. Please check back later.'
  },
  LOADING: {
    tr: 'İçerik yükleniyor...',
    en: 'Loading content...'
  },
  ERROR: {
    tr: 'Bir hata oluştu.',
    en: 'An error occurred.'
  }
};

export const CONTACT_CONFIG: ContactConfig = {
  phone: '+902125550123',
  phoneDisplay: '+90 (212) 555 0123',
  whatsapp: 'https://wa.me/905555555555',
  email: 'info@ecypro.com',
  address: {
    tr: 'Büyükdere Cad. No:123, Levent, İstanbul',
    en: 'Buyukdere Ave. No:123, Levent, Istanbul'
  },
  mapLink: 'https://maps.google.com/?q=Büyükdere+Cad.+No:123,+Levent,+İstanbul'
};

export const HERO_CONTENT: HeroContent = {
  badge: {
    tr: 'Global Standartlarda İş Ortağı',
    en: 'Your Global Standard Business Partner'
  },
  title: {
    line1: {
      tr: 'Strateji, Etkinlik ve',
      en: 'Strategy, Events, and'
    },
    highlight: {
      tr: 'Dijital Çözümlerde',
      en: 'Digital Solutions'
    },
    line2: {
      tr: 'Güvenilir Partneriniz.',
      en: 'Your Reliable Partner.'
    }
  },
  description: {
    tr: 'EcyPro, kurumsal yönetim danışmanlığından prestijli organizasyonlara ve dijital marka yönetimine kadar, işinizin her aşamasında değer katan bütüncül çözümler sunar.',
    en: 'EcyPro offers holistic solutions adding value at every stage of your business, from corporate management consulting to prestigious organizations and digital brand management.'
  },
  primaryCta: {
    label: {
      tr: 'Hemen Teklif Al',
      en: 'Get a Quote Now'
    },
    href: '#contact'
  },
  secondaryCta: {
    label: {
      tr: 'Hizmetleri Keşfet',
      en: 'Explore Services'
    },
    href: '#services'
  },
  pillars: [
    {
      id: 'pillar-consulting',
      title: { tr: 'Danışmanlık', en: 'Consulting' },
      subtitle: { tr: 'Stratejik Yönetim', en: 'Strategic Mgmt.' },
      href: '#cat-consulting',
      icon: Briefcase
    },
    {
      id: 'pillar-events',
      title: { tr: 'Etkinlik & Org.', en: 'Events & Org.' },
      subtitle: { tr: 'Kurumsal & Özel', en: 'Corporate & Private' },
      href: '#cat-events',
      icon: Mic2
    },
    {
      id: 'pillar-digital',
      title: { tr: 'Dijital & Sosyal', en: 'Digital & Social' },
      subtitle: { tr: 'Marka Yönetimi', en: 'Brand Mgmt.' },
      href: '#cat-digital',
      icon: Layers
    }
  ]
};

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'nav-home',
    label: { tr: 'Anasayfa', en: 'Home' },
    href: '#hero',
    type: 'link'
  },
  {
    id: 'nav-services',
    label: { tr: 'Hizmetler', en: 'Services' },
    href: '#services',
    type: 'dropdown',
    children: [
      { id: 'nav-cat-consulting', label: { tr: 'Danışmanlık Hizmetleri', en: 'Consulting' }, href: '#cat-consulting', type: 'link' },
      { id: 'nav-cat-events', label: { tr: 'Etkinlik & Organizasyon', en: 'Events & Org.' }, href: '#cat-events', type: 'link' },
      { id: 'nav-cat-digital', label: { tr: 'Dijital & Sosyal Medya', en: 'Digital & Social' }, href: '#cat-digital', type: 'link' },
    ]
  },
  {
    id: 'nav-value',
    label: { tr: 'Neden Biz', en: 'Why Us' },
    href: '#value-prop',
    type: 'link'
  },
  {
    id: 'nav-cases',
    label: { tr: 'Başarı Hikayeleri', en: 'Case Studies' },
    href: '#success-stories',
    type: 'link'
  },
  {
    id: 'nav-insights',
    label: { tr: 'İçgörüler', en: 'Insights' },
    href: '#insights',
    type: 'link'
  },
  {
    id: 'nav-contact',
    label: { tr: 'İletişim', en: 'Contact' },
    href: '#contact',
    type: 'link'
  },
];

export const TRUST_LOGOS: TrustLogo[] = [
  {
    id: 'l1',
    name: 'Global Holding',
    sector: { tr: 'Enerji & Teknoloji', en: 'Energy & Tech' },
    alt: { tr: 'Global Enerji ve Teknoloji Holdingi Referansı', en: 'Global Energy and Technology Holding Reference' }
  },
  {
    id: 'l2',
    name: 'Finans Bankası',
    sector: { tr: 'Bankacılık & Finans', en: 'Banking & Finance' },
    alt: { tr: 'Uluslararası Finans Kuruluşu İş Ortağı', en: 'International Financial Institution Partner' }
  },
  {
    id: 'l3',
    name: 'Metro Yapı',
    sector: { tr: 'İnşaat & Kamu', en: 'Construction & Public' },
    alt: { tr: 'Büyükşehir Belediyesi İştiraki Projesi', en: 'Metropolitan Municipality Project' }
  },
  {
    id: 'l4',
    name: 'Tech Ventures',
    sector: { tr: 'Teknoloji & Yatırım', en: 'Tech & VC' },
    alt: { tr: 'Teknoloji Girişim Sermayesi Danışmanlığı', en: 'Tech Venture Capital Consulting' }
  },
  {
    id: 'l5',
    name: 'Perakende A.Ş.',
    sector: { tr: 'Perakende & FMCG', en: 'Retail & FMCG' },
    alt: { tr: 'Zincir Mağazalar Grubu Dönüşüm Projesi', en: 'Retail Chain Transformation Project' }
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cat-consulting',
    title: { tr: 'Danışmanlık Hizmetleri', en: 'Consulting Services' },
    description: {
      tr: 'Kurumsal yapınızı güçlendiren, operasyonel verimliliğinizi artıran ve sürdürülebilir büyümenizi sağlayan stratejik yönetim çözümleri sunuyoruz.',
      en: 'We provide strategic management solutions that strengthen your corporate structure, increase operational efficiency, and ensure sustainable growth.'
    },
    items: [
      {
        id: 'c1',
        title: { tr: 'Stratejik Yönetim Danışmanlığı', en: 'Strategic Management Consulting' },
        description: {
          tr: 'Kurumsal vizyonunuzu netleştiriyor, rekabet avantajı sağlayan ve uzun vadeli kârlılığınızı hedefleyen yol haritaları çiziyoruz.',
          en: 'We clarify your corporate vision and draw roadmaps aiming for competitive advantage and long-term profitability.'
        },
        icon: Target,
        link: '/hizmetler/stratejik-yonetim',
      },
      {
        id: 'c2',
        title: { tr: 'İnsan Kaynakları Yönetimi', en: 'Human Resources Management' },
        description: {
          tr: 'En değerli varlığınız olan insan kaynağını yönetmeniz için performans sistemleri ve yetenek kazanımı süreçlerinizi optimize ediyoruz.',
          en: 'We optimize your performance systems and talent acquisition processes to manage your most valuable asset: human resources.'
        },
        icon: Users,
        link: '/hizmetler/insan-kaynaklari',
      },
      {
        id: 'c3',
        title: { tr: 'Örgütsel Davranış & İletişim', en: 'Organizational Behavior & Comm.' },
        description: {
          tr: 'Kurum kültürünüzü analiz ederek, iç iletişimi güçlendiren ve çalışan bağlılığını artıran dönüşüm projelerini hayata geçiriyoruz.',
          en: 'By analyzing your corporate culture, we implement transformation projects that strengthen internal communication and increase employee engagement.'
        },
        icon: Briefcase,
        link: '/hizmetler/orgutsel-davranis',
      },
      {
        id: 'c4',
        title: { tr: 'Liderlik ve Yönetici Koçluğu', en: 'Leadership & Executive Coaching' },
        description: {
          tr: 'Yöneticilerinizin potansiyelini açığa çıkaran, karar alma ve ekip yönetimi yetkinliklerini geliştiren birebir koçluk sağlıyoruz.',
          en: 'We provide one-on-one coaching that unlocks the potential of your executives and improves their decision-making and team management competencies.'
        },
        icon: Award,
        link: '/hizmetler/liderlik-koclugu',
      },
      {
        id: 'c5',
        title: { tr: 'Belediye & Kamu Danışmanlığı', en: 'Municipality & Public Consulting' },
        description: {
          tr: 'Kamu kurumlarında vatandaş odaklı hizmet tasarımını, süreç iyileştirmeyi ve kaynak verimliliğini artıran çözümler üretiyoruz.',
          en: 'We produce solutions that increase citizen-oriented service design, process improvement, and resource efficiency in public institutions.'
        },
        icon: Building2,
        link: '/hizmetler/kamu-danismanligi',
      },
      {
        id: 'c6',
        title: { tr: 'Girişimcilik & Liderlik', en: 'Entrepreneurship & Leadership' },
        description: {
          tr: 'Yeni iş modellerinizin inşasında, yatırımcı sunumlarınızda ve ölçeklenme stratejilerinizde yanınızda yer alıyoruz.',
          en: 'We stand by you in building your new business models, investor presentations, and scaling strategies.'
        },
        icon: Lightbulb,
        link: '/hizmetler/girisimcilik',
      }
    ]
  },
  {
    id: 'cat-events',
    title: { tr: 'Etkinlik & Organizasyon Hizmetleri', en: 'Event & Organization Services' },
    description: {
      tr: 'Marka değerinizi sahneye taşıyan, kusursuz operasyonel süreçlerle yönetilen prestijli kurumsal etkinlikler tasarlıyoruz.',
      en: 'We design prestigious corporate events that bring your brand value to the stage, managed with flawless operational processes.'
    },
    items: [
      {
        id: 'e1',
        title: { tr: 'Kurumsal Etkinlik Yönetimi', en: 'Corporate Event Management' },
        description: {
          tr: 'Bayi toplantılarınızdan eğitim zirvelerinize kadar tüm kurumsal buluşmalarınızı 360° profesyonel anlayışla yönetiyoruz.',
          en: 'We manage all your corporate gatherings, from dealer meetings to educational summits, with a 360° professional approach.'
        },
        icon: Mic2,
        link: '/hizmetler/kurumsal-etkinlik',
      },
      {
        id: 'e2',
        title: { tr: 'Özel Davetler ve Lansmanlar', en: 'Private Receptions & Launches' },
        description: {
          tr: 'Ürün lansmanları ve protokol katılımlı davetleriniz için akılda kalıcı, yüksek standartlı organizasyonlar sunuyoruz.',
          en: 'We offer memorable, high-standard organizations for your product launches and protocol-attended invitations.'
        },
        icon: Zap,
        link: '/hizmetler/ozel-davetler',
      }
    ]
  },
  {
    id: 'cat-digital',
    title: { tr: 'Dijital Dünya & Sosyal Medya', en: 'Digital World & Social Media' },
    description: {
      tr: 'Dijital varlığınızı güçlendiren, hedef kitlenizle etkileşimi artıran ve markanızı online dünyada doğru konumlandıran çözümler.',
      en: 'Solutions that strengthen your digital presence, increase interaction with your target audience, and correctly position your brand in the online world.'
    },
    items: [
      {
        id: 'd1',
        title: { tr: 'Sosyal Medya Yönetimi', en: 'Social Media Management' },
        description: {
          tr: 'Marka sesinize uygun içerik stratejisi geliştiriyor, topluluk yönetimi ve moderasyon hizmetleriyle itibarınızı koruyoruz.',
          en: 'We develop content strategies suitable for your brand voice and protect your reputation with community management and moderation services.'
        },
        icon: Share2,
        link: '/hizmetler/sosyal-medya',
      },
      {
        id: 'd2',
        title: { tr: 'Dijital Marka Görünürlüğü', en: 'Digital Brand Visibility' },
        description: {
          tr: 'Online itibar yönetimi ve dijital PR çalışmalarıyla marka bilinirliğinizi artırıyor, dijital ayak izinizi güçlendiriyoruz.',
          en: 'We increase your brand awareness and strengthen your digital footprint through online reputation management and digital PR efforts.'
        },
        icon: MousePointerClick,
        link: '/hizmetler/dijital-gorunurluk',
      }
    ]
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'v1',
    title: { tr: 'Stratejik Vizyon', en: 'Strategic Vision' },
    description: {
      tr: 'Günü kurtaran taktikler yerine, kurumunuzun geleceğini inşa eden bütüncül ve sürdürülebilir büyüme stratejileri geliştiriyoruz.',
      en: 'Instead of short-term tactics, we develop holistic and sustainable growth strategies that build your organization\'s future.'
    },
    icon: Target,
  },
  {
    id: 'v2',
    title: { tr: 'İnsan Odaklı Yönetim', en: 'Human-Centric Management' },
    description: {
      tr: 'Teknolojik dönüşümü yönetirken insan faktörünü merkeze alıyor, kültürel adaptasyonu ve çalışan bağlılığını esas alıyoruz.',
      en: 'While managing technological transformation, we put the human factor at the center, basing our approach on cultural adaptation and employee engagement.'
    },
    icon: Users,
  },
  {
    id: 'v3',
    title: { tr: 'Saha Deneyimi', en: 'Field Experience' },
    description: {
      tr: 'Sadece teorik modelleri değil, farklı sektörlerde test edilmiş ve başarısı kanıtlanmış pratik uygulama yöntemlerini sunuyoruz.',
      en: 'We offer not just theoretical models, but practical application methods tested and proven successful across different sectors.'
    },
    icon: Layers,
  },
  {
    id: 'v4',
    title: { tr: 'Dijital Yetkinlik', en: 'Digital Competence' },
    description: {
      tr: 'Geleneksel iş modellerini modern dijital araçlarla entegre ederek rekabet avantajı ve operasyonel hız yaratmanızı sağlıyoruz.',
      en: 'We enable you to create competitive advantage and operational speed by integrating traditional business models with modern digital tools.'
    },
    icon: Globe,
  },
];

export const KPI_ITEMS: KpiItem[] = [
  {
    id: 'kpi1',
    value: 120,
    suffix: '+',
    label: { tr: 'Tamamlanan Proje', en: 'Projects Completed' },
    helperText: { tr: 'Stratejik yönetim ve danışmanlık', en: 'Strategic management and consulting' },
    category: 'consulting'
  },
  {
    id: 'kpi2',
    value: 85,
    suffix: '',
    label: { tr: 'Yönetilen Etkinlik', en: 'Events Managed' },
    helperText: { tr: 'Kurumsal zirveler ve lansmanlar', en: 'Corporate summits and launches' },
    category: 'events'
  },
  {
    id: 'kpi3',
    value: 98,
    suffix: '%',
    label: { tr: 'Müşteri Memnuniyeti', en: 'Client Satisfaction' },
    helperText: { tr: 'Bağımsız anket sonuçlarına göre', en: 'According to independent surveys' },
    category: 'consulting'
  },
  {
    id: 'kpi4',
    value: 5000,
    suffix: '+',
    label: { tr: 'Eğitim Saati', en: 'Training Hours' },
    helperText: { tr: 'Liderlik ve gelişim programları', en: 'Leadership and development programs' },
    category: 'digital' // Using digital for training/development category or visual distinction
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    client: 'Global Lojistik Zirvesi',
    sector: { tr: 'Etkinlik & Org.', en: 'Events & Org.' },
    result: { tr: '2000+ Katılımcı', en: '2000+ Attendees' },
    challenge: {
      tr: 'Farklı ülkelerden gelen 2000+ katılımcı için kusursuz bir lojistik, konaklama ve içerik akışı sağlama gerekliliği.',
      en: 'The necessity to provide flawless logistics, accommodation, and content flow for 2000+ attendees from different countries.'
    },
    solution: {
      tr: '360° etkinlik yönetim sistemi ve dijital kayıt altyapısı ile entegre operasyon planı uygulandı.',
      en: 'An integrated operation plan with a 360° event management system and digital registration infrastructure was implemented.'
    },
    category: { tr: 'Organizasyon', en: 'Organization' },
    description: {
      tr: 'Uluslararası katılımlı sektör zirvesinin mekan, içerik ve operasyon yönetimi başarıyla tamamlandı.',
      en: 'Venue, content, and operation management of the international sector summit was successfully completed.'
    },
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cs2',
    client: 'Finans Holding A.Ş.',
    sector: { tr: 'Danışmanlık', en: 'Consulting' },
    result: { tr: '%40 Ciro Artışı', en: '%40 Revenue Growth' },
    challenge: {
      tr: 'Hantal organizasyon yapısı nedeniyle karar alma süreçlerinde yavaşlık ve pazar payı kaybı riski.',
      en: 'Slowness in decision-making processes and risk of market share loss due to cumbersome organizational structure.'
    },
    solution: {
      tr: 'Çevik (Agile) yönetim metodolojisi entegrasyonu ve performans odaklı prim sistemi kurulumu.',
      en: 'Integration of Agile management methodology and installation of performance-oriented bonus system.'
    },
    category: { tr: 'Stratejik Yönetim', en: 'Strategic Management' },
    description: {
      tr: 'Şirket içi yeniden yapılanma ve performans yönetim sistemi entegrasyonu ile kârlılık artırıldı.',
      en: 'Profitability was increased through internal restructuring and integration of performance management system.'
    },
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cs3',
    client: 'Perakende Zinciri',
    sector: { tr: 'Dijital', en: 'Digital' },
    result: { tr: '3x Etkileşim', en: '3x Engagement' },
    challenge: {
      tr: 'Geleneksel pazarlama kanallarının maliyet artışı ve genç hedef kitleye ulaşamama sorunu.',
      en: 'Cost increase in traditional marketing channels and the problem of not reaching the young target audience.'
    },
    solution: {
      tr: 'Omnichannel içerik stratejisi ve veri odaklı sosyal medya reklam yönetimi kurgusu.',
      en: 'Omnichannel content strategy and data-driven social media ad management setup.'
    },
    category: { tr: 'Sosyal Medya', en: 'Social Media' },
    description: {
      tr: 'Dijital marka kimliğinin yenilenmesi ve omnichannel içerik stratejisi ile müşteri bağlılığı güçlendirildi.',
      en: 'Customer loyalty was strengthened by renewing digital brand identity and omnichannel content strategy.'
    },
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    category: { tr: 'Strateji', en: 'Strategy' },
    date: { tr: '15 Ekim 2023', en: 'Oct 15, 2023' },
    readTime: { tr: '5 dk okuma', en: '5 min read' },
    title: { tr: 'Belirsizlik Dönemlerinde Stratejik Liderlik Yaklaşımı', en: 'Strategic Leadership Approach in Times of Uncertainty' },
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b2',
    category: { tr: 'Liderlik', en: 'Leadership' },
    date: { tr: '02 Ekim 2023', en: 'Oct 02, 2023' },
    readTime: { tr: '4 dk okuma', en: '4 min read' },
    title: { tr: 'Hibrit Çalışma Modelinde Kurum Kültürünü Korumak', en: 'Preserving Corporate Culture in Hybrid Work Model' },
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b3',
    category: { tr: 'Dijital Trendler', en: 'Digital Trends' },
    date: { tr: '20 Eylül 2023', en: 'Sep 20, 2023' },
    readTime: { tr: '6 dk okuma', en: '6 min read' },
    title: { tr: 'B2B Pazarlamada Dijital İtibarın Önemi', en: 'Importance of Digital Reputation in B2B Marketing' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];

export const TRUSTBAR_COPY: TrustBarCopy = {
  sectionTitle: {
    tr: 'Global İş Ortaklarımız',
    en: 'Our Global Business Partners'
  }
};

export const CONTACT_FORM_COPY: ContactFormCopy = {
  title: {
    tr: 'Birlikte Geleceği İnşa Edelim',
    en: 'Let\'s Build the Future Together'
  },
  description: {
    tr: 'Stratejik hedeflerinize ulaşmak için ilk adımı atın. Uzman ekibimiz, ihtiyaçlarınızı dinlemek ve size özel çözümler sunmak için hazır.',
    en: 'Take the first step to reach your strategic goals. Our expert team is ready to listen to your needs and offer solutions tailored to you.'
  },
  headquarters: { tr: 'Genel Merkez', en: 'Headquarters' },
  emailLabel: { tr: 'E-posta', en: 'Email' },
  phoneLabel: { tr: 'Telefon', en: 'Phone' },
  whatsapp: { tr: 'WhatsApp\'tan Ulaşın', en: 'Contact via WhatsApp' },
  responsePromise: { tr: '24 Saat İçinde Dönüş Yapıyoruz', en: 'We Respond Within 24 Hours' },
  successTitle: { tr: 'Mesajınız Alındı!', en: 'Message Received!' },
  successDesc: { tr: 'En kısa sürede size dönüş yapacağız.', en: 'We will get back to you as soon as possible.' },
  newMsg: { tr: 'Yeni mesaj gönder', en: 'Send new message' },
  errorMsg: { tr: 'Bir sorun oluştu, lütfen daha sonra tekrar deneyiniz.', en: 'An error occurred, please try again later.' },
  submitting: { tr: 'Gönderiliyor...', en: 'Sending...' },
  send: { tr: 'Gönder', en: 'Send' },
  labels: {
    name: { tr: 'Adınız', en: 'Your Name' },
    email: { tr: 'E-posta', en: 'Email' },
    subject: { tr: 'Konu', en: 'Subject' },
    message: { tr: 'Mesajınız', en: 'Your Message' },
    company: { tr: 'Şirket', en: 'Company' },
  },
  placeholders: {
    name: { tr: 'Ad Soyad', en: 'Full Name' },
    email: { tr: 'ornek@sirket.com', en: 'example@company.com' },
    subject: { tr: 'Konu', en: 'Subject' },
    message: { tr: 'Size nasıl yardımcı olabiliriz?', en: 'How can we help you?' },
    company: { tr: 'Şirket Adı', en: 'Company Name' },
  }
};

export const FOOTER_COPY: FooterCopy = {
  description: {
    tr: 'Stratejik yönetim danışmanlığı, kurumsal etkinlik yönetimi ve dijital çözümlerde global standartlarda hizmet sunan güvenilir iş ortağınız.',
    en: 'Your reliable business partner offering global standard services in strategic management consulting, corporate event management, and digital solutions.'
  },
  servicesTitle: { tr: 'Hizmetlerimiz', en: 'Our Services' },
  corporateTitle: { tr: 'Kurumsal', en: 'Corporate' },
  newsletterTitle: { tr: 'Bülten', en: 'Newsletter' },
  newsletterDesc: {
    tr: 'Sektörel trendler ve EcyPro haberleri için e-posta listemize katılın.',
    en: 'Join our email list for sectoral trends and EcyPro news.'
  },
  newsletterPlaceholder: { tr: 'E-posta adresiniz', en: 'Your email address' },
  subscribe: { tr: 'Abone Ol', en: 'Subscribe' },
  rights: { tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' },
  privacy: { tr: 'Gizlilik Politikası', en: 'Privacy Policy' },
  kvkk: { tr: 'KVKK Aydınlatma Metni', en: 'KVKK Clarification Text' },
  cookies: { tr: 'Çerez Politikası', en: 'Cookie Policy' }
};

export const COOKIE_BANNER_COPY: CookieBannerCopy = {
  text: {
    tr: 'Size daha iyi bir deneyim sunmak, site trafiğini analiz etmek ve içerikleri kişiselleştirmek için çerezler kullanıyoruz. Detaylı bilgi için Çerez Politikamızı inceleyebilirsiniz.',
    en: 'We use cookies to offer you a better experience, analyze site traffic, and personalize content. For detailed information, you can review our Cookie Policy.'
  },
  settings: { tr: 'Ayarlar', en: 'Settings' },
  accept: { tr: 'Kabul Et', en: 'Accept' },
  modalTitle: { tr: 'Çerez Tercihleri', en: 'Cookie Preferences' },
  modalDesc: { tr: 'Hangi çerezlerin kullanılmasına izin vereceğinizi buradan yönetebilirsiniz.', en: 'You can manage which cookies you allow to be used here.' },
  essential: { tr: 'Zorunlu Çerezler', en: 'Essential Cookies' },
  essentialDesc: { tr: 'Sitenin çalışması için gereklidir.', en: 'Necessary for the website to function.' },
  analytics: { tr: 'Analitik Çerezler', en: 'Analytics Cookies' },
  analyticsDesc: { tr: 'Ziyaretçi sayılarını ve trafiği ölçmemize yarar.', en: 'Used to measure visitor numbers and traffic.' },
  marketing: { tr: 'Pazarlama Çerezler', en: 'Marketing Cookies' },
  marketingDesc: { tr: 'Size özel reklamlar sunmak için kullanılır.', en: 'Used to deliver ads tailored to you.' },
  save: { tr: 'Tercihleri Kaydet', en: 'Save Preferences' },
  acceptAll: { tr: 'Tümünü Kabul Et', en: 'Accept All' },
  alwaysActive: { tr: 'Her Zaman Aktif', en: 'Always Active' }
};

export const INSIGHTS_COPY: InsightsCopy = {
  badge: { tr: 'Akademi & Blog', en: 'Academy & Blog' },
  title: { tr: 'EcyPro İçgörüler', en: 'EcyPro Insights' },
  description: {
    tr: 'İş dünyasını şekillendiren trendler, stratejik analizler ve uzman görüşleri.',
    en: 'Trends shaping the business world, strategic analyses, and expert opinions.'
  },
  viewAll: { tr: 'Tüm Yazıları Gör', en: 'View All Articles' },
  readArticle: { tr: 'Makaleyi Oku', en: 'Read Article' }
};

export const SUCCESS_STORIES_COPY: SuccessStoriesCopy = {
  badge: { tr: 'Referans Projeler', en: 'Reference Projects' },
  title: { tr: 'Başarı Hikayeleri', en: 'Success Stories' },
  description: {
    tr: 'Danışmanlık, etkinlik ve dijital hizmetlerimizle farklı sektörlerde yarattığımız somut değerler.',
    en: 'Tangible values we created in different sectors with our consulting, event, and digital services.'
  },
  viewAll: { tr: 'Tüm Projeleri Gör', en: 'View All Projects' },
  problem: { tr: 'Problem', en: 'Challenge' },
  solution: { tr: 'Çözüm', en: 'Solution' },
  result: { tr: 'Sonuç', en: 'Result' },
  details: { tr: 'Detaylar', en: 'Details' }
};

export const KPI_COPY: KPICopy = {
  titleLine1: { tr: 'Rakamlarla', en: 'Our Impact' },
  titleHighlight: { tr: 'Etkimiz', en: 'in Numbers' },
  description: {
    tr: 'Sadece strateji üretmiyoruz, işletmeniz için ölçülebilir finansal sonuçlar ve kalıcı değer yaratıyoruz.',
    en: 'We don\'t just produce strategy; we create measurable financial results and lasting value for your business.'
  }
};

export const VALUE_PROP_COPY: ValuePropCopy = {
  badge: { tr: 'Değer Önermemiz', en: 'Our Value Proposition' },
  title: { tr: 'Neden EcyPro?', en: 'Why EcyPro?' },
  description: {
    tr: 'Standart danışmanlık kalıplarının ötesinde, işinize özel tasarlanmış stratejik yaklaşımımızla fark yaratıyoruz.',
    en: 'We make a difference with our strategic approach tailored to your business, beyond standard consulting templates.'
  }
};

export const SERVICES_COPY: ServicesCopy = {
  badge: { tr: '360° Hizmet Portföyü', en: '360° Service Portfolio' },
  titleLine1: { tr: 'İşinizin Her Alanında', en: 'Professional Solutions' },
  titleLine2: { tr: 'Profesyonel Çözümler', en: 'In Every Area of Your Business' },
  countBadge: { tr: 'Hizmet Başlığı', en: 'Service Topics' },
  viewDetails: { tr: 'Detayları İncele', en: 'View Details' }
};
