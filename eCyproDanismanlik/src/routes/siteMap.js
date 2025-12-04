/**
 * Site Map - Tüm sayfa yapısı ve route tanımlamaları
 *
 * Bu dosya sitenin tüm sayfalarını, route'larını ve yapısal bilgilerini içerir.
 * Navbar, breadcrumb ve sitemap.xml oluşturmak için kullanılır.
 */

export const siteMap = {
  pages: [
    {
      id: 'home',
      path: '/',
      name: 'Anasayfa',
      title: 'eCyPro Yönetim Danışmanlığı - Kurumsal Yönetim ve Stratejik Danışmanlık',
      description: 'Kurumsal yönetim, stratejik planlama, İK danışmanlığı ve liderlik koçluğu alanında profesyonel hizmetler. Başarınız için doğru partner.',
      showInNav: true,
      showInFooter: true,
      priority: 1.0,
      changeFreq: 'weekly',
      sections: [
        {
          id: 'hero',
          name: 'Hero',
          component: 'HomeHero',
          order: 1
        },
        {
          id: 'services-overview',
          name: 'Hizmetler Özeti',
          component: 'ServicesOverview',
          order: 2
        },
        {
          id: 'why-choose-us',
          name: 'Neden Biz',
          component: 'WhyChooseUs',
          order: 3
        },
        {
          id: 'statistics',
          name: 'İstatistikler',
          component: 'Statistics',
          order: 4
        },
        {
          id: 'team-preview',
          name: 'Ekibimiz',
          component: 'TeamPreview',
          order: 5
        },
        {
          id: 'testimonials',
          name: 'Referanslar',
          component: 'Testimonials',
          order: 6
        },
        {
          id: 'blog-preview',
          name: 'Blog',
          component: 'BlogPreview',
          order: 7
        },
        {
          id: 'contact-cta',
          name: 'İletişim',
          component: 'ContactCTA',
          order: 8
        }
      ]
    },
    {
      id: 'about',
      path: '/hakkimizda',
      name: 'Hakkımızda',
      title: 'Hakkımızda - eCyPro Yönetim Danışmanlığı',
      description: 'eCyPro Yönetim Danışmanlığı olarak misyonumuz, vizyonumuz ve değerlerimiz. Kurumunuza değer katan danışmanlık hizmetleri.',
      showInNav: true,
      showInFooter: true,
      priority: 0.9,
      changeFreq: 'monthly',
      sections: [
        {
          id: 'about-hero',
          name: 'About Hero',
          component: 'AboutHero',
          order: 1
        },
        {
          id: 'mission-vision',
          name: 'Misyon & Vizyon',
          component: 'MissionVision',
          order: 2
        },
        {
          id: 'company-values',
          name: 'Değerlerimiz',
          component: 'CompanyValues',
          order: 3
        },
        {
          id: 'team',
          name: 'Ekibimiz',
          component: 'TeamGrid',
          order: 4
        },
        {
          id: 'certifications',
          name: 'Sertifikalar',
          component: 'Certifications',
          order: 5
        },
        {
          id: 'timeline',
          name: 'Tarihçemiz',
          component: 'CompanyTimeline',
          order: 6
        }
      ]
    },
    {
      id: 'services',
      path: '/hizmetler',
      name: 'Hizmetler',
      title: 'Danışmanlık Hizmetlerimiz - eCyPro',
      description: 'Stratejik yönetim, İK, liderlik, kurumsal etik ve kamu yönetimi danışmanlığı hizmetlerimiz.',
      showInNav: true,
      showInFooter: true,
      priority: 0.95,
      changeFreq: 'weekly',
      sections: [
        {
          id: 'services-hero',
          name: 'Services Hero',
          component: 'ServicesHero',
          order: 1
        },
        {
          id: 'all-services-grid',
          name: 'Tüm Hizmetler',
          component: 'AllServicesGrid',
          order: 2
        },
        {
          id: 'process',
          name: 'Sürecimiz',
          component: 'OurProcess',
          order: 3
        },
        {
          id: 'case-studies',
          name: 'Vaka Çalışmaları',
          component: 'CaseStudies',
          order: 4
        },
        {
          id: 'cta',
          name: 'Call to Action',
          component: 'ServicesCTA',
          order: 5
        }
      ],
      children: [
        {
          id: 'service-stratejik-yonetim',
          path: '/hizmetler/stratejik-yonetim',
          name: 'Stratejik Yönetim Danışmanlığı',
          title: 'Stratejik Yönetim Danışmanlığı - eCyPro',
          description: 'Kurumsal strateji geliştirme, rekabet analizi ve stratejik planlama danışmanlığı hizmetleri.',
          showInNav: true,
          priority: 0.9,
          changeFreq: 'monthly',
          serviceSlug: 'stratejik-yonetim',
          sections: [
            { id: 'service-hero', name: 'Hero', component: 'ServiceDetailHero', order: 1 },
            { id: 'what-we-do', name: 'Ne Yapıyoruz', component: 'WhatWeDo', order: 2 },
            { id: 'benefits', name: 'Faydalar', component: 'ServiceBenefits', order: 3 },
            { id: 'process', name: 'Süreç', component: 'ServiceProcess', order: 4 },
            { id: 'case-studies', name: 'Vaka Çalışmaları', component: 'ServiceCaseStudies', order: 5 },
            { id: 'pricing', name: 'Fiyatlandırma', component: 'ServicePricing', order: 6 },
            { id: 'faq', name: 'SSS', component: 'ServiceFAQ', order: 7 },
            { id: 'cta', name: 'CTA', component: 'ServiceCTA', order: 8 }
          ]
        },
        {
          id: 'service-insan-kaynaklari',
          path: '/hizmetler/insan-kaynaklari',
          name: 'İnsan Kaynakları Yönetimi',
          title: 'İnsan Kaynakları Danışmanlığı - eCyPro',
          description: 'İK süreçleri, performans yönetimi, ücretlendirme ve yetenek geliştirme danışmanlığı.',
          showInNav: true,
          priority: 0.9,
          changeFreq: 'monthly',
          serviceSlug: 'insan-kaynaklari',
          sections: [
            { id: 'service-hero', name: 'Hero', component: 'ServiceDetailHero', order: 1 },
            { id: 'what-we-do', name: 'Ne Yapıyoruz', component: 'WhatWeDo', order: 2 },
            { id: 'benefits', name: 'Faydalar', component: 'ServiceBenefits', order: 3 },
            { id: 'process', name: 'Süreç', component: 'ServiceProcess', order: 4 },
            { id: 'case-studies', name: 'Vaka Çalışmaları', component: 'ServiceCaseStudies', order: 5 },
            { id: 'pricing', name: 'Fiyatlandırma', component: 'ServicePricing', order: 6 },
            { id: 'faq', name: 'SSS', component: 'ServiceFAQ', order: 7 },
            { id: 'cta', name: 'CTA', component: 'ServiceCTA', order: 8 }
          ]
        },
        {
          id: 'service-orgutsel-davranis',
          path: '/hizmetler/orgutsel-davranis',
          name: 'Örgütsel Davranış ve İletişim',
          title: 'Örgütsel Davranış ve İletişim Danışmanlığı - eCyPro',
          description: 'Kurumsal kültür, değişim yönetimi ve iç iletişim danışmanlığı hizmetleri.',
          showInNav: true,
          priority: 0.9,
          changeFreq: 'monthly',
          serviceSlug: 'orgutsel-davranis',
          sections: [
            { id: 'service-hero', name: 'Hero', component: 'ServiceDetailHero', order: 1 },
            { id: 'what-we-do', name: 'Ne Yapıyoruz', component: 'WhatWeDo', order: 2 },
            { id: 'benefits', name: 'Faydalar', component: 'ServiceBenefits', order: 3 },
            { id: 'process', name: 'Süreç', component: 'ServiceProcess', order: 4 },
            { id: 'case-studies', name: 'Vaka Çalışmaları', component: 'ServiceCaseStudies', order: 5 },
            { id: 'pricing', name: 'Fiyatlandırma', component: 'ServicePricing', order: 6 },
            { id: 'faq', name: 'SSS', component: 'ServiceFAQ', order: 7 },
            { id: 'cta', name: 'CTA', component: 'ServiceCTA', order: 8 }
          ]
        },
        {
          id: 'service-liderlik-koclugu',
          path: '/hizmetler/liderlik-koclugu',
          name: 'Liderlik ve Yönetici Koçluğu',
          title: 'Liderlik ve Yönetici Koçluğu - eCyPro',
          description: 'Executive coaching, liderlik eğitimleri ve yönetici gelişim programları.',
          showInNav: true,
          priority: 0.9,
          changeFreq: 'monthly',
          serviceSlug: 'liderlik-koclugu',
          sections: [
            { id: 'service-hero', name: 'Hero', component: 'ServiceDetailHero', order: 1 },
            { id: 'what-we-do', name: 'Ne Yapıyoruz', component: 'WhatWeDo', order: 2 },
            { id: 'benefits', name: 'Faydalar', component: 'ServiceBenefits', order: 3 },
            { id: 'process', name: 'Süreç', component: 'ServiceProcess', order: 4 },
            { id: 'case-studies', name: 'Vaka Çalışmaları', component: 'ServiceCaseStudies', order: 5 },
            { id: 'pricing', name: 'Fiyatlandırma', component: 'ServicePricing', order: 6 },
            { id: 'faq', name: 'SSS', component: 'ServiceFAQ', order: 7 },
            { id: 'cta', name: 'CTA', component: 'ServiceCTA', order: 8 }
          ]
        },
        {
          id: 'service-kurumsal-etik',
          path: '/hizmetler/kurumsal-etik',
          name: 'Kurumsal Etik ve Sosyal Sorumluluk',
          title: 'Kurumsal Etik ve Sosyal Sorumluluk Danışmanlığı - eCyPro',
          description: 'Etik kod oluşturma, sürdürülebilirlik ve KSS danışmanlığı hizmetleri.',
          showInNav: true,
          priority: 0.85,
          changeFreq: 'monthly',
          serviceSlug: 'kurumsal-etik',
          sections: [
            { id: 'service-hero', name: 'Hero', component: 'ServiceDetailHero', order: 1 },
            { id: 'what-we-do', name: 'Ne Yapıyoruz', component: 'WhatWeDo', order: 2 },
            { id: 'benefits', name: 'Faydalar', component: 'ServiceBenefits', order: 3 },
            { id: 'process', name: 'Süreç', component: 'ServiceProcess', order: 4 },
            { id: 'case-studies', name: 'Vaka Çalışmaları', component: 'ServiceCaseStudies', order: 5 },
            { id: 'pricing', name: 'Fiyatlandırma', component: 'ServicePricing', order: 6 },
            { id: 'faq', name: 'SSS', component: 'ServiceFAQ', order: 7 },
            { id: 'cta', name: 'CTA', component: 'ServiceCTA', order: 8 }
          ]
        },
        {
          id: 'service-kamu-yonetimi',
          path: '/hizmetler/kamu-yonetimi',
          name: 'Belediye ve Kamu Kurumları',
          title: 'Belediye ve Kamu Kurumları Danışmanlığı - eCyPro',
          description: 'Kamu kurumları için stratejik planlama, hizmet kalitesi ve e-belediyecilik danışmanlığı.',
          showInNav: true,
          priority: 0.9,
          changeFreq: 'monthly',
          serviceSlug: 'kamu-yonetimi',
          sections: [
            { id: 'service-hero', name: 'Hero', component: 'ServiceDetailHero', order: 1 },
            { id: 'what-we-do', name: 'Ne Yapıyoruz', component: 'WhatWeDo', order: 2 },
            { id: 'benefits', name: 'Faydalar', component: 'ServiceBenefits', order: 3 },
            { id: 'process', name: 'Süreç', component: 'ServiceProcess', order: 4 },
            { id: 'case-studies', name: 'Vaka Çalışmaları', component: 'ServiceCaseStudies', order: 5 },
            { id: 'pricing', name: 'Fiyatlandırma', component: 'ServicePricing', order: 6 },
            { id: 'faq', name: 'SSS', component: 'ServiceFAQ', order: 7 },
            { id: 'cta', name: 'CTA', component: 'ServiceCTA', order: 8 }
          ]
        },
        {
          id: 'service-girisimcilik',
          path: '/hizmetler/girisimcilik',
          name: 'Girişimcilik Danışmanlığı',
          title: 'Girişimcilik ve Startup Danışmanlığı - eCyPro',
          description: 'Startup kuruluş danışmanlığı, iş planı hazırlama ve yatırım hazırlığı hizmetleri.',
          showInNav: true,
          priority: 0.85,
          changeFreq: 'monthly',
          serviceSlug: 'girisimcilik',
          sections: [
            { id: 'service-hero', name: 'Hero', component: 'ServiceDetailHero', order: 1 },
            { id: 'what-we-do', name: 'Ne Yapıyoruz', component: 'WhatWeDo', order: 2 },
            { id: 'benefits', name: 'Faydalar', component: 'ServiceBenefits', order: 3 },
            { id: 'process', name: 'Süreç', component: 'ServiceProcess', order: 4 },
            { id: 'case-studies', name: 'Vaka Çalışmaları', component: 'ServiceCaseStudies', order: 5 },
            { id: 'pricing', name: 'Fiyatlandırma', component: 'ServicePricing', order: 6 },
            { id: 'faq', name: 'SSS', component: 'ServiceFAQ', order: 7 },
            { id: 'cta', name: 'CTA', component: 'ServiceCTA', order: 8 }
          ]
        }
      ]
    },
    {
      id: 'blog',
      path: '/blog',
      name: 'Blog',
      title: 'Blog - eCyPro Yönetim Danışmanlığı',
      description: 'Yönetim, liderlik, strateji ve İK konularında güncel içerikler, makaleler ve uzman görüşleri.',
      showInNav: true,
      showInFooter: true,
      priority: 0.8,
      changeFreq: 'daily',
      sections: [
        {
          id: 'blog-hero',
          name: 'Blog Hero',
          component: 'BlogHero',
          order: 1
        },
        {
          id: 'categories',
          name: 'Kategoriler',
          component: 'BlogCategories',
          order: 2
        },
        {
          id: 'featured-posts',
          name: 'Öne Çıkanlar',
          component: 'FeaturedPosts',
          order: 3
        },
        {
          id: 'all-posts-grid',
          name: 'Tüm Yazılar',
          component: 'AllPostsGrid',
          order: 4
        },
        {
          id: 'newsletter',
          name: 'Newsletter',
          component: 'NewsletterSignup',
          order: 5
        }
      ]
    },
    {
      id: 'contact',
      path: '/iletisim',
      name: 'İletişim',
      title: 'İletişim - eCyPro Yönetim Danışmanlığı',
      description: 'Bize ulaşın, projeleriniz için ücretsiz ön görüşme talep edin. İstanbul merkezli, Türkiye geneli hizmet.',
      showInNav: true,
      showInFooter: true,
      priority: 0.9,
      changeFreq: 'monthly',
      sections: [
        {
          id: 'contact-hero',
          name: 'Contact Hero',
          component: 'ContactHero',
          order: 1
        },
        {
          id: 'contact-form',
          name: 'İletişim Formu',
          component: 'ContactForm',
          order: 2
        },
        {
          id: 'contact-info',
          name: 'İletişim Bilgileri',
          component: 'ContactInfo',
          order: 3
        },
        {
          id: 'map',
          name: 'Harita',
          component: 'LocationMap',
          order: 4
        },
        {
          id: 'faq',
          name: 'SSS',
          component: 'ContactFAQ',
          order: 5
        }
      ]
    }
  ],
  footerLinks: {
    kurumsal: {
      title: 'Kurumsal',
      links: [
        { name: 'Hakkımızda', path: '/hakkimizda' },
        { name: 'Ekibimiz', path: '/hakkimizda#team' },
        { name: 'Değerlerimiz', path: '/hakkimizda#values' },
        { name: 'Referanslar', path: '/#testimonials' }
      ]
    },
    hizmetler: {
      title: 'Hizmetler',
      links: [
        { name: 'Stratejik Yönetim', path: '/hizmetler/stratejik-yonetim' },
        { name: 'İnsan Kaynakları', path: '/hizmetler/insan-kaynaklari' },
        { name: 'Liderlik Koçluğu', path: '/hizmetler/liderlik-koclugu' },
        { name: 'Kamu Yönetimi', path: '/hizmetler/kamu-yonetimi' },
        { name: 'Tüm Hizmetler', path: '/hizmetler' }
      ]
    },
    kaynaklar: {
      title: 'Kaynaklar',
      links: [
        { name: 'Blog', path: '/blog' },
        { name: 'Vaka Çalışmaları', path: '/hizmetler#case-studies' },
        { name: 'SSS', path: '/iletisim#faq' }
      ]
    },
    yasal: {
      title: 'Yasal',
      links: [
        { name: 'Gizlilik Politikası', path: '/gizlilik-politikasi' },
        { name: 'Kullanım Şartları', path: '/kullanim-sartlari' },
        { name: 'Çerez Politikası', path: '/cerez-politikasi' },
        { name: 'KVKK', path: '/kvkk' }
      ]
    }
  },
  metadata: {
    version: '2.0.0',
    lastUpdated: '2025-12-04',
    totalPages: 13,
    language: 'tr'
  }
};

/**
 * Helper function to get page by path
 */
export const getPageByPath = (path) => {
  // First check top-level pages
  const topLevelPage = siteMap.pages.find(page => page.path === path);
  if (topLevelPage) return topLevelPage;

  // Then check children
  for (const page of siteMap.pages) {
    if (page.children) {
      const childPage = page.children.find(child => child.path === path);
      if (childPage) return { ...childPage, parent: page };
    }
  }

  return null;
};

/**
 * Helper function to get all routes for React Router
 */
export const getAllRoutes = () => {
  const routes = [];

  siteMap.pages.forEach(page => {
    routes.push({
      path: page.path,
      ...page
    });

    if (page.children) {
      page.children.forEach(child => {
        routes.push({
          path: child.path,
          ...child,
          parent: page
        });
      });
    }
  });

  return routes;
};

/**
 * Helper function to generate breadcrumbs
 */
export const getBreadcrumbs = (path) => {
  const breadcrumbs = [{ name: 'Anasayfa', path: '/' }];

  const page = getPageByPath(path);
  if (!page) return breadcrumbs;

  if (page.parent) {
    breadcrumbs.push({ name: page.parent.name, path: page.parent.path });
  }

  breadcrumbs.push({ name: page.name, path: page.path });

  return breadcrumbs;
};

export default siteMap;
