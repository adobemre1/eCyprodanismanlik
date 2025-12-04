/**
 * Form İçerikleri
 *
 * Tüm formlar için validation mesajları, placeholder'lar,
 * success/error mesajları ve genel form metinleri
 */

export const formContent = {
  // Validation Error Messages
  validation: {
    required: "{field} alanı zorunludur.",
    email: "Geçerli bir e-posta adresi giriniz.",
    phone: "Geçerli bir telefon numarası giriniz.",
    minLength: "{field} en az {min} karakter olmalıdır.",
    maxLength: "{field} en fazla {max} karakter olabilir.",
    pattern: "Lütfen geçerli bir {field} giriniz.",
    consent: "Devam etmek için KVKK onayı vermelisiniz.",
    invalidFormat: "Geçersiz format. Lütfen kontrol edin.",

    // Özel alan validasyonları
    name: {
      required: "Lütfen adınızı ve soyadınızı giriniz.",
      minLength: "Ad soyad en az 3 karakter olmalıdır.",
      pattern: "Lütfen geçerli bir ad soyad giriniz."
    },
    email: {
      required: "E-posta adresi zorunludur.",
      invalid: "Geçerli bir e-posta adresi giriniz. (örn: ornek@sirket.com)"
    },
    phone: {
      required: "Telefon numarası zorunludur.",
      invalid: "Geçerli bir telefon numarası giriniz. (örn: 0532 123 45 67)",
      pattern: "Telefon numarası 10 haneli olmalıdır."
    },
    message: {
      required: "Lütfen bir mesaj yazınız.",
      minLength: "Mesajınız en az 10 karakter olmalıdır.",
      maxLength: "Mesajınız en fazla 1000 karakter olabilir."
    },
    company: {
      minLength: "Şirket adı en az 2 karakter olmalıdır."
    },
    serviceInterest: {
      required: "Lütfen ilgilendiğiniz hizmeti seçiniz."
    }
  },

  // Success Messages
  success: {
    contactForm: {
      title: "Mesajınız Başarıyla Gönderildi!",
      message: "Teşekkür ederiz! Form başvurunuz başarıyla alındı. Ekibimiz en kısa sürede (24 saat içinde) size geri dönüş yapacaktır.",
      nextSteps: [
        "Başvurunuz inceleniyor",
        "24 saat içinde size ulaşacağız",
        "Ücretsiz ön görüşme ayarlayacağız"
      ],
      action: "Tamam"
    },
    quoteRequest: {
      title: "Teklif Talebiniz Alındı",
      message: "Teklif talebiniz başarıyla iletildi. Detaylı teklif en geç 48 saat içinde e-posta adresinize gönderilecektir.",
      action: "Anasayfaya Dön"
    },
    newsletter: {
      title: "Abonelik Başarılı!",
      message: "E-bülten aboneliğiniz başarıyla oluşturuldu. Artık yönetim, liderlik ve strateji konularında güncel içeriklerimizden haberdar olacaksınız.",
      action: "Kapat"
    },
    appointmentBooked: {
      title: "Randevunuz Oluşturuldu",
      message: "Randevu talebiniz alındı. Randevu detayları e-posta adresinize gönderildi. Görüşmek üzere!",
      action: "Takvime Ekle"
    }
  },

  // Error Messages
  error: {
    generic: {
      title: "Bir Hata Oluştu",
      message: "Üzgünüz, bir hata oluştu. Lütfen tekrar deneyin veya bizimle iletişime geçin.",
      action: "Tekrar Dene"
    },
    network: {
      title: "Bağlantı Hatası",
      message: "İnternet bağlantınızı kontrol edin ve tekrar deneyin.",
      action: "Tekrar Dene"
    },
    submission: {
      title: "Gönderim Başarısız",
      message: "Form gönderilemedi. Lütfen tüm alanları doğru doldurduğunuzdan emin olun ve tekrar deneyin.",
      action: "Tekrar Dene"
    },
    timeout: {
      title: "Zaman Aşımı",
      message: "İşlem zaman aşımına uğradı. Lütfen tekrar deneyin.",
      action: "Tekrar Dene"
    },
    rateLimited: {
      title: "Çok Fazla İstek",
      message: "Lütfen bir süre bekleyin ve tekrar deneyin.",
      action: "Tamam"
    },
    invalidData: {
      title: "Geçersiz Veri",
      message: "Girdiğiniz bilgilerde hata var. Lütfen tüm alanları kontrol edin.",
      action: "Düzelt"
    }
  },

  // Loading States
  loading: {
    submitting: "Gönderiliyor...",
    processing: "İşleniyor...",
    saving: "Kaydediliyor...",
    loading: "Yükleniyor...",
    sending: "Gönderiliyor...",
    validating: "Doğrulanıyor...",
    analyzing: "Analiz ediliyor...",
    generatingAI: "AI ile oluşturuluyor..."
  },

  // Button Labels
  buttons: {
    submit: "Gönder",
    send: "Gönder",
    save: "Kaydet",
    cancel: "İptal",
    close: "Kapat",
    back: "Geri",
    next: "İleri",
    finish: "Bitir",
    retry: "Tekrar Dene",
    reset: "Sıfırla",
    clear: "Temizle",
    edit: "Düzenle",
    delete: "Sil",
    confirm: "Onayla"
  },

  // Placeholders
  placeholders: {
    name: "Ad Soyad",
    firstName: "Adınız",
    lastName: "Soyadınız",
    email: "ornek@sirket.com",
    phone: "0532 123 45 67",
    company: "Şirket Adı",
    position: "Pozisyonunuz",
    message: "Mesajınız...",
    subject: "Konu",
    search: "Ara...",
    select: "Seçiniz...",
    date: "Tarih seçin",
    time: "Saat seçin",
    website: "https://www.ornek.com",
    address: "Adres",
    city: "Şehir",
    zipCode: "Posta Kodu"
  },

  // Helper Texts
  helperText: {
    email: "E-posta adresiniz gizli tutulacaktır.",
    phone: "Size en kısa sürede ulaşabilmemiz için",
    message: "Projeniz veya ihtiyaçlarınız hakkında detaylı bilgi verin",
    consent: "Verileriniz KVKK kapsamında korunur",
    optional: "(İsteğe bağlı)",
    required: "(Zorunlu)",
    characterCount: "{current}/{max} karakter",
    fileSize: "Maksimum dosya boyutu: {size}MB",
    fileTypes: "İzin verilen formatlar: {types}"
  },

  // Contact Form Specific
  contactForm: {
    title: "İletişim Formu",
    subtitle: "Bize Ulaşın",
    description: "Formu doldurun, size en kısa sürede geri dönelim.",
    consentText: "Kişisel verilerimin işlenmesine ve tarafıma bilgilendirme yapılmasına onay veriyorum.",
    consentLink: "KVKK Aydınlatma Metni",
    submitButton: "Mesaj Gönder",
    privacyNote: "Bilgileriniz güvende. Asla üçüncü şahıslarla paylaşılmaz."
  },

  // Quote Request Form
  quoteRequestForm: {
    title: "Teklif Talebi",
    subtitle: "Size Özel Teklif Hazırlayalım",
    description: "Projeniz için detaylı teklif almak üzere formu doldurun.",
    submitButton: "Teklif İste",
    additionalInfo: "Ek Bilgiler (isteğe bağlı)"
  },

  // Newsletter Form
  newsletterForm: {
    title: "E-Bültene Abone Olun",
    subtitle: "Yönetim ve Liderlik İçerikleri",
    description: "Güncel makaleler, etkinlikler ve özel içeriklerden haberdar olun.",
    emailPlaceholder: "E-posta adresiniz",
    submitButton: "Abone Ol",
    successMessage: "Başarıyla abone oldunuz!",
    privacyNote: "İstediğiniz zaman abonelikten çıkabilirsiniz."
  },

  // Appointment Form
  appointmentForm: {
    title: "Randevu Talebi",
    subtitle: "Ücretsiz Ön Görüşme",
    description: "Size uygun tarih ve saati seçin, detayları paylaşın.",
    submitButton: "Randevu Talep Et",
    preferredDate: "Tercih Ettiğiniz Tarih",
    preferredTime: "Tercih Ettiğiniz Saat",
    duration: "Tahmini Süre",
    meetingType: "Görüşme Türü",
    meetingTypes: [
      { value: "office", label: "Ofiste Yüz Yüze" },
      { value: "online", label: "Online (Zoom/Teams)" },
      { value: "phone", label: "Telefon" },
      { value: "onsite", label: "Sizin Ofisinizde" }
    ]
  },

  // File Upload
  fileUpload: {
    dragDrop: "Dosyayı buraya sürükleyin veya",
    browse: "Bilgisayardan Seç",
    maxSize: "Maksimum {size}MB",
    allowedTypes: "İzin verilen: {types}",
    uploading: "Yükleniyor... {percent}%",
    success: "Dosya başarıyla yüklendi",
    error: "Dosya yüklenemedi",
    remove: "Kaldır",
    tooLarge: "Dosya çok büyük. Maksimum {size}MB olmalıdır.",
    invalidType: "Geçersiz dosya türü. İzin verilenler: {types}"
  },

  // AI Features
  ai: {
    analyzing: "AI ile analiz ediliyor...",
    generating: "AI ile içerik oluşturuluyor...",
    suggestion: "AI Önerisi",
    improveWithAI: "AI ile İyileştir",
    aiAssistant: "AI Asistan",
    aiGeneratedNote: "Bu içerik AI tarafından oluşturulmuştur"
  }
};

export default formContent;
