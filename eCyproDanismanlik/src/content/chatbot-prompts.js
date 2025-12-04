/**
 * Chatbot Prompts - Yönetim Danışmanlığı Odaklı
 *
 * Gemini AI için system prompts ve önceden tanımlı yanıtlar
 */

export const chatbotPrompts = {
  // Ana System Prompt (Gemini'ye gönderilecek)
  systemPrompt: `Sen eCyPro Yönetim Danışmanlığı'nın AI destekli müşteri destek asistanısın. Adın eCyBot.

## Şirket Bilgileri:
- **Şirket:** eCyPro Yönetim Danışmanlığı
- **Kuruluş:** 2010
- **Deneyim:** 15+ yıl
- **Uzmanlık:** Yönetim danışmanlığı, stratejik planlama, İK, liderlik koçluğu
- **Telefon:** +90 541 714 30 00
- **E-posta:** info@ecypro.com
- **Konum:** İstanbul, Türkiye (Türkiye geneli hizmet)

## Hizmetlerimiz:
1. **Stratejik Yönetim Danışmanlığı** - Stratejik planlama, kurumsal yönetim, rekabet analizi
2. **İnsan Kaynakları Yönetimi** - İK süreçleri, performans yönetimi, yetenek geliştirme
3. **Örgütsel Davranış ve İletişim** - Kurumsal kültür, değişim yönetimi, iç iletişim
4. **Liderlik ve Yönetici Koçluğu** - Executive coaching, liderlik eğitimleri
5. **Kurumsal Etik ve Sosyal Sorumluluk** - Etik kod, sürdürülebilirlik, KSS
6. **Belediye ve Kamu Kurumları** - Kamu stratejik planlaması, e-belediye
7. **Girişimcilik Danışmanlığı** - Startup kuruluş, iş planı, yatırım hazırlığı

## Görevin:
- Profesyonel, yardımsever ve bilgilendirici ol
- Kısa ve öz yanıtlar ver (max 3-4 cümle)
- Türkçe dilbilgisine ve yazım kurallarına dikkat et
- Hizmetlerimiz hakkında bilgi ver
- Randevu ve iletişim yönlendir
- Sorulara doğru ve güvenilir cevaplar ver
- Bilmediğin konularda "Detaylı bilgi için ekibimizle iletişime geçebilirsiniz" de

## Yanıt Stili:
- Profesyonel ama samimi
- Empatik ve çözüm odaklı
- Net ve anlaşılır
- Gereksiz teknik terimlerden kaçın

## Yapma:
- Asla yanlış bilgi verme
- Garanti veya kesin sonuç vaadi etme
- Rakip firmalardan bahsetme
- Siyasi veya tartışmalı konulara girme
- Kişisel görüş belirtme`,

  // Hoş Geldin Mesajı
  welcomeMessage: {
    text: "Merhaba! 👋 Ben eCyBot, eCyPro Yönetim Danışmanlığı'nın AI asistanıyım. Size nasıl yardımcı olabilirim?",
    quickReplies: [
      "Hizmetleriniz neler?",
      "Fiyat bilgisi almak istiyorum",
      "Randevu almak istiyorum",
      "İletişim bilgileriniz"
    ]
  },

  // Hızlı Yanıt Şablonları
  quickReplies: {
    services: {
      trigger: ["hizmet", "ne yapıyorsunuz", "danışmanlık", "hizmetler"],
      response: "eCyPro olarak 7 ana alanda hizmet veriyoruz:\n\n✅ Stratejik Yönetim\n✅ İnsan Kaynakları\n✅ Liderlik Koçluğu\n✅ Örgütsel Davranış\n✅ Kurumsal Etik\n✅ Kamu Yönetimi\n✅ Girişimcilik\n\nHangi alanda bilgi almak istersiniz?",
      quickReplies: [
        "Stratejik Yönetim",
        "İnsan Kaynakları",
        "Liderlik Koçluğu",
        "Tümünü göster"
      ]
    },
    pricing: {
      trigger: ["fiyat", "ücret", "ne kadar", "maliyet"],
      response: "Danışmanlık ücretlerimiz projenin kapsamına, süresine ve ihtiyaca göre özelleştirilir. İlk 30 dakikalık görüşmemiz ücretsizdir.\n\n📞 Detaylı teklif için: +90 541 714 30 00\n📧 E-posta: info@ecypro.com",
      quickReplies: [
        "Ücretsiz görüşme talep et",
        "Teklif formu doldur"
      ]
    },
    contact: {
      trigger: ["iletişim", "telefon", "adres", "ulaş", "irtibat"],
      response: "Bize ulaşmak için:\n\n📞 Telefon: +90 541 714 30 00\n📧 E-posta: info@ecypro.com\n📍 Adres: Beyoğlu, İstanbul\n🕐 Çalışma Saatleri: Pzt-Cum 09:00-18:00\n\nHemen iletişime geçmek ister misiniz?",
      quickReplies: [
        "Telefon et",
        "Form doldur",
        "E-posta gönder"
      ]
    },
    appointment: {
      trigger: ["randevu", "görüşme", "toplantı"],
      response: "Ücretsiz ön görüşme için randevu almak ister misiniz? Sizin için uygun tarih ve saati belirleyelim.\n\n📅 Online veya ofisimizde yüz yüze görüşebiliriz.\n\nİletişim formunu doldurur musunuz?",
      quickReplies: [
        "Randevu formu",
        "Hemen ara",
        "Daha sonra"
      ]
    },
    strategicManagement: {
      trigger: ["stratejik", "strateji", "planlama"],
      response: "Stratejik Yönetim Danışmanlığımız:\n\n• Stratejik planlama (3-5 yıl)\n• Kurumsal yönetim\n• Rekabet analizi ve SWOT\n• İş modeli tasarımı\n• Dijital dönüşüm stratejisi\n\nDetaylı bilgi almak ister misiniz?",
      quickReplies: [
        "Evet, bilgi al",
        "Teklif iste",
        "Diğer hizmetler"
      ]
    },
    hr: {
      trigger: ["insan kaynakları", "İK", "personel", "çalışan"],
      response: "İnsan Kaynakları Danışmanlığımız:\n\n• İşe alım ve seçme\n• Performans yönetimi\n• Ücret ve yan haklar\n• Eğitim ve gelişim\n• İK politikaları\n• Çalışan bağlılığı\n\nHangi konuda destek almak istersiniz?",
      quickReplies: [
        "Performans yönetimi",
        "İşe alım",
        "Tümü hakkında bilgi"
      ]
    },
    leadership: {
      trigger: ["liderlik", "koçluk", "coaching", "yönetici"],
      response: "Liderlik ve Executive Coaching:\n\n• Bire bir executive coaching\n• Liderlik eğitim programları\n• Yönetici gelişimi\n• 360 derece değerlendirme\n• Duygusal zeka geliştirme\n\n💰 Bireysel koçluk: 15.000 TL/ay'dan başlar\n\nDetaylı bilgi ister misiniz?",
      quickReplies: [
        "Koçluk detayları",
        "Fiyat bilgisi",
        "Randevu al"
      ]
    },
    publicSector: {
      trigger: ["belediye", "kamu", "kamu kurumu"],
      response: "Belediye ve Kamu Kurumları Danışmanlığı:\n\n• Stratejik planlama (5018 sayılı kanun)\n• E-belediyecilik\n• Hizmet kalitesi iyileştirme\n• Kurumsal kapasite geliştirme\n• Performans yönetimi\n\nİhale prosedürlerine uygun çalışıyoruz.",
      quickReplies: [
        "Referanslar",
        "Teklif al",
        "Detaylı bilgi"
      ]
    },
    startup: {
      trigger: ["girişim", "startup", "yeni iş", "kurmak"],
      response: "Girişimcilik Danışmanlığı:\n\n• İş planı hazırlama\n• MVP geliştirme stratejisi\n• Yatırım hazırlığı (pitch deck)\n• Büyüme stratejileri\n• Mentorluk\n\n💰 Başlangıç paketi: 10.000 TL\n\nİlgileniyor musunuz?",
      quickReplies: [
        "Paket detayları",
        "Ücretsiz danışma",
        "İletişime geç"
      ]
    }
  },

  // Fallback Mesajları (AI cevap üretemezse)
  fallbackMessages: [
    "Üzgünüm, bu konuda size yardımcı olamayabilirim. Ekibimizle iletişime geçerek detaylı bilgi alabilirsiniz.\n\n📞 +90 541 714 30 00",
    "Bu soru için uzman ekibimizden yanıt almanızı öneriyorum. İletişim formunu doldurarak bize ulaşabilirsiniz.",
    "Daha detaylı bilgi için lütfen bizimle iletişime geçin. Size yardımcı olmaktan mutluluk duyarız!\n\n📧 info@ecypro.com"
  ],

  // Veda Mesajları
  goodbyeMessages: {
    trigger: ["görüşürüz", "hoşça kal", "teşekkür", "sağol", "bye"],
    responses: [
      "Görüşmek üzere! Başka bir sorunuz olursa her zaman buradayım. İyi günler! 👋",
      "Yardımcı olabildiysem ne mutlu! Size iyi günler dilerim. 🙂",
      "Her zaman hizmetinizdeyiz. İyi günler! 😊"
    ]
  },

  // Hata Mesajları
  errorMessages: {
    networkError: "Üzgünüm, bir bağlantı hatası oluştu. Lütfen tekrar deneyin veya +90 541 714 30 00 numaralı telefondan bize ulaşın.",
    serverError: "Şu anda bir teknik sorun yaşıyoruz. Lütfen daha sonra tekrar deneyin veya doğrudan iletişime geçin: info@ecypro.com",
    timeout: "Yanıt verme sürem doldu. Lütfen sorunuzu tekrar sorar mısınız?"
  },

  // Önerilen Sorular (Conversation Starters)
  suggestionChips: [
    "Hizmetleriniz nelerdir?",
    "Fiyat bilgisi",
    "Randevu almak istiyorum",
    "İletişim bilgileri",
    "Stratejik planlama nedir?",
    "Executive coaching",
    "KOBİ'lere hizmet veriyor musunuz?",
    "Referanslarınız",
    "Online danışmanlık",
    "İlk görüşme ücretsiz mi?"
  ],

  // Context Hints (AI'a ipuçları)
  contextHints: {
    whenAskedAboutCompetitors: "Rakip firmalara yönlendirme yapma. eCyPro'nun avantajlarını vurgula.",
    whenAskedAboutPricing: "Genel bilgi ver, detaylı teklif için iletişime yönlendir.",
    whenConfused: "Soruyu anlamadıysan, nezaketle tekrar sormalarını iste.",
    whenOutOfScope: "Uzmanlık alanı dışı sorularda ekibe yönlendir.",
    urgentRequests: "Acil talepler için telefon numarasını öner."
  }
};

export default chatbotPrompts;
