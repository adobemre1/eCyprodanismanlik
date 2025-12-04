import { 
  Briefcase, 
  TrendingUp, 
  Globe, 
  ShieldCheck, 
  Users, 
  BarChart3, 
  Layers,
  Lightbulb,
  Building2,
  Mic2,
  Smartphone,
  Share2,
  Target,
  Award,
  Zap,
  MousePointerClick
} from 'lucide-react';
import { NavItem, ServiceCategory, Stat, CaseStudy, BlogPost, ValueProp } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Anasayfa', href: '#' },
  { 
    label: 'Hizmetler', 
    href: '#services',
    children: [
      { label: 'Danışmanlık Hizmetleri', href: '#cat-consulting' },
      { label: 'Etkinlik & Organizasyon', href: '#cat-events' },
      { label: 'Dijital & Sosyal Medya', href: '#cat-digital' },
    ]
  },
  { label: 'Neden Biz', href: '#value-prop' },
  { label: 'İçgörüler', href: '#insights' },
  { label: 'İletişim', href: '#contact' },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'cat-consulting',
    title: 'Danışmanlık Hizmetleri',
    description: 'Kurumsal yapınızı güçlendiren, operasyonel verimliliği artıran ve sürdürülebilir büyüme sağlayan stratejik yönetim çözümleri.',
    items: [
      {
        id: 'c1',
        title: 'Stratejik Yönetim Danışmanlığı',
        description: 'Kurumsal vizyonu netleştiren, rekabet avantajı sağlayan ve uzun vadeli yol haritaları sunan üst düzey yönetim danışmanlığı.',
        icon: Target,
        link: '#',
      },
      {
        id: 'c2',
        title: 'İnsan Kaynakları Yönetimi',
        description: 'Yetenek kazanımı, performans yönetimi sistemleri ve organizasyonel gelişim süreçlerinin optimizasyonu.',
        icon: Users,
        link: '#',
      },
      {
        id: 'c3',
        title: 'Örgütsel Davranış & İletişim',
        description: 'Kurum kültürünü analiz ederek iç iletişimi güçlendiren ve çalışan bağlılığını artıran dönüşüm projeleri.',
        icon: Briefcase,
        link: '#',
      },
      {
        id: 'c4',
        title: 'Liderlik ve Yönetici Koçluğu',
        description: 'C-level ve orta kademe yöneticilerin liderlik yetkinliklerini geliştiren birebir koçluk programları.',
        icon: Award,
        link: '#',
      },
      {
        id: 'c5',
        title: 'Belediye & Kamu Danışmanlığı',
        description: 'Kamu kurumlarında vatandaş odaklı hizmet tasarımı, süreç iyileştirme ve verimlilik artırma çalışmaları.',
        icon: Building2,
        link: '#',
      },
      {
        id: 'c6',
        title: 'Girişimcilik & Liderlik',
        description: 'Yeni nesil iş modellerinin inşası, yatırımcı sunumları ve start-up ölçeklenme stratejileri.',
        icon: Lightbulb,
        link: '#',
      }
    ]
  },
  {
    id: 'cat-events',
    title: 'Etkinlik & Organizasyon Hizmetleri',
    description: 'Marka değerini sahneye taşıyan, kusursuz operasyonel süreçlerle yönetilen prestijli kurumsal etkinlikler.',
    items: [
      {
        id: 'e1',
        title: 'Kurumsal Etkinlik Yönetimi',
        description: 'Bayi toplantıları, eğitim zirveleri, motivasyon kampları ve kurumsal buluşmaların 360° yönetimi.',
        icon: Mic2,
        link: '#',
      },
      {
        id: 'e2',
        title: 'Özel Davetler ve Lansmanlar',
        description: 'Ürün lansmanları, gala geceleri ve protokol katılımlı özel davetler için yüksek standartlı organizasyonlar.',
        icon: Zap,
        link: '#',
      }
    ]
  },
  {
    id: 'cat-digital',
    title: 'Dijital Dünya & Sosyal Medya',
    description: 'Dijital varlığınızı güçlendiren, etkileşimi artıran ve markanızı online dünyada doğru konumlandıran çözümler.',
    items: [
      {
        id: 'd1',
        title: 'Sosyal Medya Yönetimi',
        description: 'Marka sesine uygun içerik stratejisi, topluluk yönetimi ve moderasyon hizmetleri.',
        icon: Share2,
        link: '#',
      },
      {
        id: 'd2',
        title: 'Dijital Marka Görünürlüğü',
        description: 'Online itibar yönetimi, dijital PR çalışmaları ve marka bilinirliğini artırmaya yönelik stratejik hamleler.',
        icon: MousePointerClick,
        link: '#',
      }
    ]
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'v1',
    title: 'Stratejik Vizyon',
    description: 'Günü kurtaran taktikler yerine, geleceği inşa eden bütüncül ve sürdürülebilir stratejiler geliştiriyoruz.',
    icon: Target,
  },
  {
    id: 'v2',
    title: 'İnsan Odaklı Yaklaşım',
    description: 'Teknolojik dönüşümü yönetirken insan faktörünü merkeze alıyor, kültürel adaptasyonu sağlıyoruz.',
    icon: Users,
  },
  {
    id: 'v3',
    title: 'Modern Organizasyon',
    description: 'Hiyerarşik darboğazları aşan, çevik (agile) ve veri odaklı karar alabilen dinamik yapılar kuruyoruz.',
    icon: Layers,
  },
  {
    id: 'v4',
    title: 'Dijital Dönüşüm Yetkinliği',
    description: 'Geleneksel iş modellerini modern dijital araçlarla entegre ederek rekabet avantajı yaratıyoruz.',
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
    category: 'Organizasyon',
    description: 'Uluslararası katılımlı sektör zirvesinin mekan, içerik ve operasyon yönetimi başarıyla tamamlandı.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cs2',
    client: 'Finans Holding A.Ş.',
    sector: 'Danışmanlık',
    result: '%40 Ciro Artışı',
    category: 'Stratejik Yönetim',
    description: 'Şirket içi yeniden yapılanma ve performans yönetim sistemi entegrasyonu ile kârlılık artırıldı.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'cs3',
    client: 'Perakende Zinciri',
    sector: 'Dijital',
    result: '3x Etkileşim',
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
    title: 'Belirsizlik Dönemlerinde Stratejik Liderlik Yaklaşımı',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b2',
    category: 'Organizasyon',
    date: '02 Ekim 2023',
    title: 'Hibrit Çalışma Modelinde Kurum Kültürünü Korumak',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'b3',
    category: 'Dijital Trendler',
    date: '20 Eylül 2023',
    title: 'B2B Pazarlamada Dijital İtibarın Önemi',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
];