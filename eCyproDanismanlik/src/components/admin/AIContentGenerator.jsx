import { useState } from 'react';
import { Sparkles, FileText, RefreshCw, CheckCircle2, AlertCircle, Copy, Trash2, Info, Download } from 'lucide-react';
import { generateBlogPost, generateServiceDescription, getGeminiConfig } from '../../utils/gemini';
import logger from '../../utils/logger';

const AIContentGenerator = () => {
  const [mode, setMode] = useState('blog');
  const [topic, setTopic] = useState('');
  const [keywords, setKeywords] = useState('');
  const [length, setLength] = useState('medium');
  const [serviceName, setServiceName] = useState('');
  const [audience, setAudience] = useState('genel');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const { apiKey, model } = getGeminiConfig();

  const parseKeywords = (value) =>
    value
      .split(',')
      .map((k) => k.trim())
      .filter(Boolean);

  const handleGenerate = async () => {
    setLoading(true);
    setError('');
    setResult('');
    setCopied(false);

    try {
      let output = '';

      if (mode === 'blog') {
        if (!topic.trim()) {
          setError('Konu girin.');
          return;
        }
        output = await generateBlogPost(topic.trim(), parseKeywords(keywords), length);
      } else {
        if (!serviceName.trim()) {
          setError('Hizmet adı girin.');
          return;
        }
        output = await generateServiceDescription(serviceName.trim(), audience);
      }

      if (!output) {
        setError('AI yanıtı alınamadı. API anahtarını ve modeli kontrol edin.');
        return;
      }

      setResult(output.trim());
    } catch (err) {
      logger.error('AI content generation failed', err);
      setError('İçerik üretilirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      logger.error('Copy failed', err);
      setError('Panoya kopyalanamadı. Elle kopyalamayı deneyin.');
    }
  };

  const handleClear = () => {
    setResult('');
    setCopied(false);
  };

  const handleDownload = () => {
    if (!result) return;
    const blob = new Blob([result], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    const fileName = mode === 'blog' ? 'blog-icerik.txt' : 'hizmet-aciklamasi.txt';
    link.download = fileName;
    link.click();
    URL.revokeObjectURL(url);
  };

  const applySample = () => {
    if (mode === 'blog') {
      setTopic('MVP lansman stratejisi');
      setKeywords('ürün doğrulama, growth, GTM');
      setLength('medium');
    } else {
      setServiceName('Ürün Stratejisi Danışmanlığı');
      setAudience('startup');
    }
  };

  const disabled =
    loading || (mode === 'blog' ? !topic.trim() : !serviceName.trim());

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">AI İçerik Üretimi</h2>
          <p className="text-sm text-gray-600">
            Blog yazısı veya hizmet açıklaması için Gemini tabanlı içerik üret.
          </p>
        </div>
        <div className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-100 px-3 py-2 rounded-lg">
          <CheckCircle2 className="w-4 h-4" />
          <span>Hazır</span>
        </div>
      </div>

      <div className="flex items-start gap-2 rounded-lg border border-blue-100 bg-blue-50 px-3 py-2 text-xs text-blue-800">
        <Info className="w-4 h-4 mt-0.5" />
        <div>
          <p className="font-semibold">Gemini yapılandırması</p>
          <p>Model: {model || 'Tanımlı değil'} · API anahtarı: {apiKey ? 'Var' : 'Yok (fallback devrede)'}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setMode('blog')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-colors ${
            mode === 'blog'
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 text-gray-700 hover:border-gray-300'
          }`}
        >
          <FileText className="w-4 h-4" />
          Blog Yazısı
        </button>
        <button
          onClick={() => setMode('service')}
          className={`flex items-center gap-2 px-4 py-2 rounded-md border transition-colors ${
            mode === 'service'
              ? 'border-blue-500 bg-blue-50 text-blue-700'
              : 'border-gray-200 text-gray-700 hover:border-gray-300'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          Hizmet Açıklaması
        </button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {mode === 'blog' ? (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Konu</label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Örnek: MVP lansman stratejisi"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Anahtar Kelimeler (virgülle ayırın)</label>
              <input
                type="text"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
                placeholder="MVP, ürün doğrulama, büyüme"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Uzunluk</label>
              <select
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="short">Kısa (300-500 kelime)</option>
                <option value="medium">Orta (600-800 kelime)</option>
                <option value="long">Uzun (1000+ kelime)</option>
              </select>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Hizmet Adı</label>
              <input
                type="text"
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                placeholder="Örnek: Ürün stratejisi danışmanlığı"
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700">Hedef Kitle</label>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="genel">Genel</option>
                <option value="startup">Startup kurucuları</option>
                <option value="scaleup">Scale-up ekipleri</option>
                <option value="enterprise">Kurumsal ekipler</option>
              </select>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleGenerate}
          disabled={disabled}
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white shadow hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          {loading ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
          İçerik Üret
        </button>
        <button
          onClick={applySample}
          type="button"
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:border-gray-300"
        >
          Örnek doldur
        </button>
        <p className="text-sm text-gray-500">
          API anahtarı tanımlı değilse AI üretimi atlanır ve uyarı gösterilir.
        </p>
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-lg border border-yellow-200 bg-yellow-50 px-4 py-3 text-sm text-yellow-800">
          <AlertCircle className="w-4 h-4" />
          {error}
        </div>
      )}

      {result && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
            Oluşturulan içerik
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              type="button"
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-700 hover:border-gray-300"
            >
              <Copy className="w-3 h-3" />
              {copied ? 'Kopyalandı' : 'Kopyala'}
            </button>
            <button
              onClick={handleDownload}
              type="button"
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-700 hover:border-gray-300"
            >
              <Download className="w-3 h-3" />
              İndir
            </button>
            <button
              onClick={handleClear}
              type="button"
              className="inline-flex items-center gap-1 rounded-md border border-gray-200 px-2 py-1 text-xs font-medium text-gray-700 hover:border-gray-300"
            >
              <Trash2 className="w-3 h-3" />
              Temizle
            </button>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 text-sm leading-relaxed whitespace-pre-wrap">
            {result}
          </div>
        </div>
      )}
    </div>
  );
};

export default AIContentGenerator;
