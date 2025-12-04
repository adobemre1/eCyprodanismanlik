
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
import { NavItem, ServiceCategory, Stat, CaseStudy, BlogPost, ValueProp, TrustLogo, ContactConfig, HeroContent } from './types';

export const FALLBACK_MESSAGES = {
  EMPTY_LIST: 'Şu anda listelenecek içerik bulunmuyor. Lütfen daha sonra tekrar ziyaret ediniz.',
  LOADING: 'İçerik yükleniyor...',
  ERROR: 'Bir hata oluştu.'
};

export const CONTACT_CONFIG: ContactConfig = {
  phone: '+902125550123',
  phoneDisplay: '+90 (212) 555 0123',
  whatsapp: 'https://wa.me/905555555555',
  email: 'info@ecypro.com',
  address: 'Büyükdere Cad. No:123, Levent, İstanbul',
  mapLink: 'https://maps.google.com/?q=Büyükdere+Cad.+No:123,+Levent,+İstanbul'
};

export const HERO_CONTENT: HeroContent = {
  badge: 'Global Standartlarda İş Ortağı',
  title: {
    line1: 'Strateji, Etkinlik ve',
    highlight: 'Dijital Çözümlerde',
    line2: 'Güvenilir Partneriniz.'
  },
  description: 'EcyPro, kurumsal yönetim danışmanlığından prestijli organizasyonlara ve dijital marka yönetimine kadar, işinizin her aşamasında değer katan bütüncül çözümler sunar.',
  primaryCta: {
    label: 'Hemen Teklif Al',
    href: '#contact'
  },
  secondaryCta: {
    label: 'Hizmetleri Keşfet',
    href: '#services'
  },
  pillars: [
    {
      id: 'pillar-consulting',
      title: 'Danışmanlık',
      subtitle: 'Stratejik Yönetim',
      href: '#cat-consulting',
      icon: Briefcase
    },
    {
      id: 'pillar-events',
      title: 'Etkinlik & Org.',
      subtitle: 'Kurumsal & Özel',
      href: '#cat-events',
      icon: Mic2
    },
    {
      id: 'pillar-digital',
      title: 'Dijital & Sosyal',
      subtitle: 'Marka Yönetimi',
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
  { id: 'l1', name: 'Global Holding', sector: 'Enerji & Teknoloji', alt: 'Global Enerji ve Teknoloji Holdingi Referansı' },
  { id: 'l2', name: 'Finans Bankası', sector: 'Bankacılık & Finans', alt: 'Uluslararası Finans Kuruluşu İş Ortağı' },
  { id: 'l3', name: 'Metro Yapı', sector: 'İnşaat & Kamu', alt: 'Büyükşehir Belediyesi İştiraki Projesi' },
  { id: 'l4', name: 'Tech Ventures', sector: 'Teknoloji & Yatırım', alt: 'Teknoloji Girişim Sermayesi Danışmanlığı' },
  { id: 'l5', name: 'Perakende A.Ş.', sector: 'Perakende & FMCG', alt: 'Zincir Mağazalar Grubu Dönüşüm Projesi' },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cat-consulting',
    title: 'Danışmanlık Hizmetleri',
    description: 'Kurumsal yapınızı güçlendiren, operasyonel verimliliğinizi artıran ve sürdürülebilir büyümenizi sağlayan stratejik yönetim çözümleri sunuyoruz.',
    items: [
      {
        id: 'c1',
        title: 'Stratejik Yönetim Danışmanlığı',
        description: 'Kurumsal vizyonunuzu netleştiriyor, rekabet avantajı sağlayan ve uzun vadeli kârlılığınızı hedefleyen yol haritaları çiziyoruz.',
        icon: Target,
        link: '/hizmetler/stratejik-yonetim',
      },
      {
        id: 'c2',
        title: 'İnsan Kaynakları Yönetimi',
        description: 'En değerli varlığınız olan insan kaynağını yönetmeniz için performans sistemleri ve yetenek kazanımı süreçlerinizi optimize ediyoruz.',
        icon: Users,
        link: '/hizmetler/insan-kaynaklari',
      },
      {
        id: 'c3',
        title: 'Örgütsel Davranış & İletişim',
        description: 'Kurum kültürünüzü analiz ederek, iç iletişimi güçlendiren ve çalışan bağlılığını artıran dönüşüm projelerini hayata geçiriyoruz.',
        icon: Briefcase,
        link: '/hizmetler/orgutsel-davranis',
      },
      {
        id: 'c4',
        title: 'Liderlik ve Yönetici Koçluğu',
        description: 'Yöneticilerinizin potansiyelini açığa çıkaran, karar alma ve ekip yönetimi yetkinliklerini geliştiren birebir koçluk sağlıyoruz.',
        icon: Award,
        link: '/hizmetler/liderlik-koclugu',
      },
      {
        id: 'c5',
        title: 'Belediye & Kamu Danışmanlığı',
        description: 'Kamu kurumlarında vatandaş odaklı hizmet tasarımını, süreç iyileştirmeyi ve kaynak verimliliğini artıran çözümler üretiyoruz.',
        icon: Building2,
        link: '/hizmetler/kamu-danismanligi',
      },
      {
        id: 'c6',
        title: 'Girişimcilik & Liderlik',
        description: 'Yeni iş modellerinizin inşasında, yatırımcı sunumlarınızda ve ölçeklenme stratejilerinizde yanınızda yer alıyoruz.',
        icon: Lightbulb,
        link: '/hizmetler/girisimcilik',
      }
    ]
  },
  {
    id: 'cat-events',
    title: 'Etkinlik & Organizasyon Hizmetleri',
    description: 'Marka değerinizi sahneye taşıyan, kusursuz operasyonel süreçlerle yönetilen prestijli kurumsal etkinlikler tasarlıyoruz.',
    items: [
      {
        id: 'e1',
        title: 'Kurumsal Etkinlik Yönetimi',
        description: 'Bayi toplantılarınızdan eğitim zirvelerinize kadar tüm kurumsal buluşmalarınızı 360° profesyonel anlayışla yönetiyoruz.',
        icon: Mic2,
        link: '/hizmetler/kurumsal-etkinlik',
      },
      {
        id: 'e2',
        title: 'Özel Davetler ve Lansmanlar',
        description: 'Ürün lansmanları ve protokol katılımlı davetleriniz için akılda kalıcı, yüksek standartlı organizasyonlar sunuyoruz.',
        icon: Zap,
        link: '/hizmetler/ozel-davetler',
      }
    ]
  },
  {
    id: 'cat-digital',
    title: 'Dijital Dünya & Sosyal Medya',
    description: 'Dijital varlığınızı güçlendiren, hedef kitlenizle etkileşimi artıran ve markanızı online dünyada doğru konumlandıran çözümler.',
    items: [
      {
        id: 'd1',
        title: 'Sosyal Medya Yönetimi',
        description: 'Marka sesinize uygun içerik stratejisi geliştiriyor, topluluk yönetimi ve moderasyon hizmetleriyle itibarınızı koruyoruz.',
        icon: Share2,
        link: '/hizmetler/sosyal-medya',
      },
      {
        id: 'd2',
        title: 'Dijital Marka Görünürlüğü',
        description: 'Online itibar yönetimi ve dijital PR çalışmalarıyla marka bilinirliğinizi artırıyor, dijital ayak izinizi güçlendiriyoruz.',
        icon: MousePointerClick,
        link: '/hizmetler/dijital-gorunurluk',
      }
    ]
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'v1',
    title: 'Stratejik Vizyon',
    description: 'Günü kurtaran taktikler yerine, kurumunuzun geleceğini inşa eden bütüncül ve sürdürülebilir büyüme stratejileri geliştiriyoruz.',
    icon: Target,
  },
  {
    id: 'v2',
    title: 'İnsan Odaklı Yönetim',
    description: 'Teknolojik dönüşümü yönetirken insan faktörünü merkeze alıyor, kültürel adaptasyonu ve çalışan bağlılığını esas alıyoruz.',
    icon: Users,
  },
  {
    id: 'v3',
    title: 'Saha Deneyimi',
    description: 'Sadece teorik modelleri değil, farklı sektörlerde test edilmiş ve başarısı kanıtlanmış pratik uygulama yöntemlerini sunuyoruz.',
    icon: Layers,
  },
  {
    id: 'v4',
    title: 'Dijital Yetkinlik',
    description: 'Geleneksel iş modellerini modern dijital araçlarla entegre ederek rekabet avantajı ve operasyonel hız yaratmanızı sağlıyoruz.',
    icon: Globe,
  },
];

export const STATS: Stat[] = [
  {
    id: 'kpi1',
    value: '100+',
    label: 'Büyük Ölçekli Etkinlik',
    description: 'Global ve yerel zirveler, lansmanlar.',
  },
  {
    id: 'kpi2',
    value: '25+',
    label: 'Danışmanlık Projesi',
    description: 'Farklı sektörlerde stratejik dönüşüm.',
  },
  {
    id: 'kpi3',
    value: '%35',
    label: 'Verimlilik Artışı',
    description: 'Operasyonel süreçlerde ölçülen ortalama iyileşme.',
  },
  {
    id: 'kpi4',
    value: '10+',
    label: 'Yıllık Tecrübe',
    description: 'Çok disiplinli sektör uzmanlığı.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    client: 'Global Lojistik Zirvesi',
    sector: 'Etkinlik & Org.',
    result: '2000+ Katılımcı',
    challenge: 'Farklı ülkelerden gelen 2000+ katılımcı için kusursuz bir lojistik, konaklama ve içerik akışı sağlama gerekliliği.',
    solution: '360° etkinlik yönetim sistemi ve dijital kayıt altyapısı ile entegre operasyon planı uygulandı.',
    category: 'Organizasyon',
    description: 'Uluslararası katılımlı sektör zirvesinin mekan, içerik ve operasyon yönetimi başarıyla tamamlandı.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cs2',
    client: 'Finans Holding A.Ş.',
    sector: 'Danışmanlık',
    result: '%40 Ciro Artışı',
    challenge: 'Hantal organizasyon yapısı nedeniyle karar alma süreçlerinde yavaşlık ve pazar payı kaybı riski.',
    solution: 'Çevik (Agile) yönetim metodolojisi entegrasyonu ve performans odaklı prim sistemi kurulumu.',
    category: 'Stratejik Yönetim',
    description: 'Şirket içi yeniden yapılanma ve performans yönetim sistemi entegrasyonu ile kârlılık artırıldı.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cs3',
    client: 'Perakende Zinciri',
    sector: 'Dijital',
    result: '3x Etkileşim',
    challenge: 'Geleneksel pazarlama kanallarının maliyet artışı ve genç hedef kitleye ulaşamama sorunu.',
    solution: 'Omnichannel içerik stratejisi ve veri odaklı sosyal medya reklam yönetimi kurgusu.',
    category: 'Sosyal Medya',
    description: 'Dijital marka kimliğinin yenilenmesi ve omnichannel içerik stratejisi ile müşteri bağlılığı güçlendirildi.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    category: 'Strateji',
    date: '15 Ekim 2023',
    readTime: '5 dk okuma',
    title: 'Belirsizlik Dönemlerinde Stratejik Liderlik Yaklaşımı',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b2',
    category: 'Liderlik',
    date: '02 Ekim 2023',
    readTime: '4 dk okuma',
    title: 'Hibrit Çalışma Modelinde Kurum Kültürünü Korumak',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b3',
    category: 'Dijital Trendler',
    date: '20 Eylül 2023',
    readTime: '6 dk okuma',
    title: 'B2B Pazarlamada Dijital İtibarın Önemi',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];