export const blogPosts = [
  {
    slug: 'mvp-90-gun',
    title: '90 Günde MVP: Konseptten İlk Gelire',
    date: '15 Ocak 2026',
    category: 'MVP Geliştirme',
    readTime: '4 dk okuma',
    summary: 'Teknoloji odaklı girişimler için MVP hızlandırma metodolojisi; pazar doğrulama ve ilk gelir elde etme süreci.',
    sections: [
      { heading: 'Durum', body: 'İyi bir fikir var ama ürün-pazar uyumu doğrulanmamış, geliştirme süreci belirsiz.' },
      { heading: 'Müdahale', bullets: ['MVP hipotezleri ve başarı metrikleri tanımlandı.', 'Lean startup metodolojisi ile 90 günlük sprint planlandı.', 'Teknik mimari ve geliştirme roadmap\'ı çıkarıldı.'] },
      { heading: 'Sonuç', bullets: ['İlk MVP 85 günde tamamlandı', 'Pazar doğrulama metrikleri %70 başarı', 'İlk müşteri geliri 30 gün sonra elde edildi'] },
      { heading: 'Sonraki adım', body: 'İteratif geliştirme döngüsü ve ölçeklendirme stratejisi planlaması.' }
    ],
    ctaLabel: 'MVP danışmanlığı al',
    ctaHref: '#contact'
  },
  {
    slug: 'iso27001-uyumlu-gelisim',
    title: 'ISO27001 Uyumlu Yazılım Geliştirme Süreci',
    date: '08 Ocak 2026',
    category: 'Güvenlik & Uyumluluk',
    readTime: '5 dk okuma',
    summary: 'Kurumsal yazılım projelerinde güvenlik ve uyumluluk standartlarını baştan entegre eden geliştirme metodolojisi.',
    sections: [
      { heading: 'Durum', body: 'Güvenlik gereksinimleri geliştirme sonrası düşünülüyordu, sertifika süreci sorun yaratıyordu.' },
      { heading: 'Müdahale', bullets: ['ISO27001 gereksinimleri tasarım aşamasında entegre edildi.', 'Güvenlik odaklı geliştirme (SDL) metodolojisi uygulandı.', 'Otomatik test ve audit araçları kuruldu.'] },
      { heading: 'Sonuç', bullets: ['ISO27001 sertifikası ilk denemede alındı', 'Güvenlik açıkları %95 azaldı', 'Sertifika süreci 6 aydan 3 aya düştü'] },
      { heading: 'Sonraki adım', body: 'DevSecOps pipeline kurulumu ve sürekli güvenlik izleme sistemi.' }
    ],
    ctaLabel: 'Güvenlik danışmanlığı al',
    ctaHref: '#contact'
  },
  {
    slug: 'patent-mvp-entegrasyonu',
    title: 'MVP Geliştirme Sürecinde Fikri Mülkiyet Stratejisi',
    date: '02 Ocak 2026',
    category: 'Patent & Fikri Mülkiyet',
    readTime: '3 dk okuma',
    summary: 'Teknoloji girişimleri için MVP aşamasında patent koruma ve fikri mülkiyet stratejisi geliştirme.',
    sections: [
      { heading: 'Durum', body: 'Teknoloji fikri değerli ama patent koruması düşünülmemiş, rekabet avantajı riske girmiş.' },
      { heading: 'Müdahale', bullets: ['Teknoloji haritası çıkarılarak patentlenebilir unsurlar belirlendi.', 'Geçici patent başvuruları ve önceliklendirme yapıldı.', 'Fikri mülkiyet stratejisi MVP roadmap\'ına entegre edildi.'] },
      { heading: 'Sonuç', bullets: ['5 patent başvurusu tamamlandı', 'Rekabet avantajı korundu', 'Yatırım görüşmelerinde %30 değer artışı'] },
      { heading: 'Sonraki adım', body: 'Uluslararası patent stratejisi ve lisanslama modeli geliştirme.' }
    ],
    ctaLabel: 'Patent danışmanlığı al',
    ctaHref: '#contact'
  }
];

export const findBlogPost = (slug) => blogPosts.find((post) => post.slug === slug);
