import { GoogleGenerativeAI } from '@google/generative-ai';
import logger from './logger.js';

// Helper function to get environment variables (works in both Vite and Node.js)
const getEnvVar = (key) => {
  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      return import.meta.env[key];
    }
  } catch {
    // Ignore when import.meta is not available (e.g. during Node.js scripts)
  }

  if (typeof process !== 'undefined' && process.env) {
    return process.env[key];
  }

  return undefined;
};

// Gemini AI client initialization
const apiKey = getEnvVar('VITE_GEMINI_API_KEY');
const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = genAI ? genAI.getGenerativeModel({
  model: getEnvVar('VITE_GEMINI_MODEL') || 'gemini-pro'
}) : null;
const chatUnavailableMessage = 'Üzgünüm, şu anda AI asistana erişemiyorum. Lütfen daha sonra tekrar deneyin veya doğrudan iletişime geçin: +90 541 714 30 00';

// System prompts for different use cases
const PROMPTS = {
  chatbot: `Sen EcyPro Danışmanlık şirketinin AI asistanısın.
  Görevlerin:
  - Müşterilerin sorularını Türkçe, profesyonel ve öz yanıtlamak
  - Yönetim danışmanlığı hizmetleri hakkında bilgi vermek
  - İhtiyaca göre uygun hizmeti önerip iletişim/ön görüşmeye yönlendirmek

  Şirket Bilgileri:
  - EcyPro: Stratejik yönetim ve kurumsal danışmanlık
  - Hizmetler: Stratejik yönetim, insan kaynakları, liderlik koçluğu, örgütsel davranış ve iletişim, kurumsal etik, kamu/ belediye yönetimi, girişimcilik danışmanlığı
  - İletişim: +90 541 714 30 00, adobemre1@gmail.com
  - Web: https://www.ecypro.com

  Yanıt kuralları:
  - Türkçe, kısa ve net
  - Gereksiz teknik detay verme, hizmete yönlendir
  - Uygun olduğunda “Ön görüşme planla” CTA’sına çağrı yap (#contact)`,

  contentGeneration: `Sen EcyPro için içerik üreten AI asistansın.
  Görevlerin:
  - Blog yazıları üretmek
  - Hizmet açıklamaları yazmak
  - SEO optimizasyonu yapmak
  - Profesyonel danışmanlık içeriği oluşturmak

  İçerik kuralları:
  - Türkçe yaz
  - SEO dostu
  - Okunabilir ve anlaşılır
  - EcyPro uzmanlığını yansıt
  - Call-to-action içersin`,

  formAnalysis: `Sen EcyPro için form mesajlarını analiz eden AI asistansın.
  Görevlerin:
  - Gelen mesajları kategorize etmek
  - Önem derecesini belirlemek
  - Otomatik yanıt önerileri üretmek
  - Lead niteliklendirmesi yapmak

  Analiz kriterleri:
  - Aciliyet: Yüksek/Orta/Düşük
  - Kategori: Danışmanlık, MVP, Genel
  - Potansiyel: Yüksek/Orta/Düşük
  - Yanıt süresi: 1 saat/4 saat/24 saat`,

  seoOptimization: `Sen EcyPro için SEO uzmanı AI asistansın.
  Görevlerin:
  - Anahtar kelime araştırması
  - Meta title ve description optimizasyonu
  - İçerik SEO analizi
  - Teknik SEO önerileri

  SEO stratejisi:
  - Danışmanlık sektörüne odaklan
  - Long-tail keywords kullan
  - Local SEO (Türkiye) önemsenmeli
  - Teknik SEO best practices`
};

// Chatbot functions
export const generateChatResponse = async (userMessage, context = []) => {
  if (!model) {
    logger.warn('Gemini model not configured; returning fallback chat message.');
    return chatUnavailableMessage;
  }

  try {
    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: PROMPTS.chatbot }]
        },
        {
          role: 'model',
          parts: [{ text: 'Anladım, EcyPro AI asistanı olarak görev yapacağım.' }]
        },
        ...context.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.content }]
        }))
      ],
      generationConfig: {
        temperature: parseFloat(getEnvVar('VITE_GEMINI_TEMPERATURE')) || 0.7,
        maxOutputTokens: 1000,
      }
    });

    const result = await chat.sendMessage(userMessage);
    return result.response.text();
  } catch (error) {
    logger.error('Gemini chat error', error);
    return chatUnavailableMessage;
  }
};

// Content generation functions
export const generateBlogPost = async (topic, keywords = [], length = 'medium') => {
  if (!model) {
    logger.warn('Gemini model not configured; blog generation skipped.');
    return null;
  }

  try {
    const prompt = `${PROMPTS.contentGeneration}

    Blog yazısı üret:
    Konu: ${topic}
    Anahtar kelimeler: ${keywords.join(', ')}
    Uzunluk: ${length} (short: 300-500 kelime, medium: 600-800 kelime, long: 1000+ kelime)

    Format:
    - Başlık (SEO dostu)
    - Giriş paragrafı
    - Ana içerik (paragraflar halinde)
    - Sonuç ve CTA
    - Meta description önerisi`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    logger.error('Gemini content generation error', error);
    return null;
  }
};

export const optimizeSEO = async (content, targetKeywords = []) => {
  if (!model) {
    logger.warn('Gemini model not configured; SEO optimization skipped.');
    return null;
  }

  try {
    const prompt = `${PROMPTS.seoOptimization}

    Aşağıdaki içeriği SEO için optimize et:
    İçerik: ${content}
    Hedef anahtar kelimeler: ${targetKeywords.join(', ')}

    Optimizasyon alanları:
    - Title tag önerisi
    - Meta description
    - Heading structure (H1, H2, H3)
    - Anahtar kelime yoğunluğu
    - Okunabilirlik iyileştirmeleri
    - Internal/external link önerileri`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    logger.error('Gemini SEO optimization error', error);
    return null;
  }
};

// Form analysis functions
export const analyzeContactMessage = async (message, formData = {}) => {
  if (!model) {
    logger.warn('Gemini model not configured; form analysis skipped.');
    return null;
  }

  try {
    const prompt = `${PROMPTS.formAnalysis}

    Aşağıdaki iletişim formu mesajını analiz et:

    Mesaj: ${message}
    Form verileri: ${JSON.stringify(formData)}

    Analiz sonuçları JSON formatında döndür:
    {
      "category": "Danışmanlık|MVP|Genel",
      "urgency": "Yüksek|Orta|Düşük",
      "potential": "Yüksek|Orta|Düşük",
      "responseTime": "1 saat|4 saat|24 saat",
      "suggestedResponse": "Önerilen otomatik yanıt",
      "tags": ["etiket1", "etiket2"],
      "sentiment": "Pozitif|Nötr|Negatif"
    }`;

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    try {
      return JSON.parse(response);
    } catch (parseError) {
      logger.error('JSON parse error', parseError);
      return {
        category: 'Genel',
        urgency: 'Orta',
        potential: 'Orta',
        responseTime: '24 saat',
        suggestedResponse: 'Mesajınız için teşekkür ederiz. En kısa sürede size geri döneceğiz.',
        tags: [],
        sentiment: 'Nötr'
      };
    }
  } catch (error) {
    logger.error('Gemini form analysis error', error);
    return null;
  }
};

// Service description generation
export const generateServiceDescription = async (serviceName, targetAudience = 'genel') => {
  if (!model) {
    logger.warn('Gemini model not configured; service description generation skipped.');
    return null;
  }

  try {
    const prompt = `${PROMPTS.contentGeneration}

    Hizmet açıklaması üret:
    Hizmet adı: ${serviceName}
    Hedef kitle: ${targetAudience}

    Gereksinimler:
    - 150-200 kelime
    - Fayda odaklı yaz
    - Call-to-action içersin
    - EcyPro uzmanlığını yansıt
    - SEO dostu anahtar kelimeler kullan`;

    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    logger.error('Gemini service description error', error);
    return null;
  }
};

// Utility functions
export const checkGeminiConnection = async () => {
  if (!genAI || !model) {
    logger.warn('Gemini API key not configured');
    return false;
  }

  try {
    const result = await model.generateContent('Test connection - respond with OK');
    return result.response.text().includes('OK');
  } catch (error) {
    logger.error('Gemini connection test failed', error);
    return false;
  }
};

export const getGeminiConfig = () => {
  return {
    apiKey: getEnvVar('VITE_GEMINI_API_KEY'),
    model: getEnvVar('VITE_GEMINI_MODEL'),
    temperature: getEnvVar('VITE_GEMINI_TEMPERATURE')
  };
};
