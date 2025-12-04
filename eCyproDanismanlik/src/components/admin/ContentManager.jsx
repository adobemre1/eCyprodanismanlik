import { useState } from 'react';
import { Pencil, Eye, Plus } from 'lucide-react';

const ContentManager = () => {
  const [activeTab, setActiveTab] = useState('hero');
  const [editing, setEditing] = useState(null);
  const [showNewSectionModal, setShowNewSectionModal] = useState(false);
  const [newSectionName, setNewSectionName] = useState('');
  const [newSectionDescription, setNewSectionDescription] = useState('');

  const sections = [
    { id: 'hero', name: 'Ana Sayfa Hero', description: 'Ana sayfa başlık ve açıklama' },
    { id: 'about', name: 'Hakkımızda', description: 'Şirket hakkında bilgiler' },
    { id: 'services', name: 'Hizmetler', description: 'Sunulan hizmetler' },
    { id: 'team', name: 'Takım', description: 'Takım üyeleri' },
    { id: 'contact', name: 'İletişim', description: 'İletişim bilgileri' },
    { id: 'footer', name: 'Footer', description: 'Alt kısım bilgileri' },
  ];

  const [content, setContent] = useState({
    hero: {
      title: 'Profesyonel Danışmanlık Hizmetleri',
      subtitle: 'İşletmenizin büyümesi için uzman çözümler',
      description: '20+ yıllık deneyimimizle işletmenize değer katıyoruz.',
      ctaText: 'Hizmetlerimizi İnceleyin',
      backgroundImage: '/images/hero-bg.jpg'
    },
    about: {
      title: 'Hakkımızda',
      content: 'eCypro Danışmanlık olarak...',
      mission: 'Misyonumuz...',
      vision: 'Vizyonumuz...'
    }
  });

  const handleSave = (sectionId, field, value) => {
    setContent(prev => ({
      ...prev,
      [sectionId]: {
        ...prev[sectionId],
        [field]: value
      }
    }));
    setEditing(null);
  };

  const handleNewSection = () => {
    setShowNewSectionModal(true);
  };

  const ContentEditor = ({ sectionId, data }) => (
    <div className="space-y-6">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="p-4 bg-white border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-gray-700 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </label>
            <button
              onClick={() => setEditing(editing === `${sectionId}-${key}` ? null : `${sectionId}-${key}`)}
              className="text-blue-600 hover:text-blue-800"
            >
              <Pencil className="w-4 h-4" />
            </button>
          </div>

          {editing === `${sectionId}-${key}` ? (
            <div className="space-y-2">
              {key.includes('content') || key.includes('description') ? (
                <textarea
                  className="w-full p-2 border rounded-md"
                  rows={4}
                  defaultValue={value}
                  onBlur={(e) => handleSave(sectionId, key, e.target.value)}
                />
              ) : (
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  defaultValue={value}
                  onBlur={(e) => handleSave(sectionId, key, e.target.value)}
                />
              )}
              <div className="flex space-x-2">
                <button
                  onClick={() => setEditing(null)}
                  className="px-3 py-1 text-sm text-white bg-gray-500 rounded"
                >
                  İptal
                </button>
                <button
                  onClick={() => handleSave(sectionId, key, value)}
                  className="px-3 py-1 text-sm text-white bg-blue-600 rounded"
                >
                  Kaydet
                </button>
              </div>
            </div>
          ) : (
            <div className="p-2 text-gray-900 rounded bg-gray-50">
              {value || 'İçerik girilmemiş'}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            İçerik Yönetimi
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Website bölümlerinin içeriğini düzenleyin
          </p>
        </div>
        <div className="flex mt-4 md:mt-0 md:ml-4">
          <button
            onClick={handleNewSection}
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-green-600 rounded-md shadow-sm hover:bg-green-500"
          >
            <Plus className="w-4 h-4 mr-2" />
            Yeni Bölüm
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b border-gray-200">
          <nav className="flex px-6 -mb-px space-x-8" aria-label="Tabs">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveTab(section.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === section.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {section.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900">
              {sections.find(s => s.id === activeTab)?.name}
            </h3>
            <p className="text-sm text-gray-500">
              {sections.find(s => s.id === activeTab)?.description}
            </p>
          </div>

          {content[activeTab] ? (
            <ContentEditor sectionId={activeTab} data={content[activeTab]} />
          ) : (
            <div className="py-12 text-center">
              <div className="mb-4 text-gray-400">
                <Pencil className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-gray-900">
                İçerik Henüz Eklenmemiş
              </h3>
              <p className="mb-4 text-gray-500">
                Bu bölüm için içerik henüz tanımlanmamış.
              </p>
              <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                İçerik Ekle
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Önizleme</h3>
            <button className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50">
              <Eye className="w-4 h-4 mr-2" />
              Canlı Önizleme
            </button>
          </div>
          <div className="p-4 rounded-lg bg-gray-50 min-h-32">
            <p className="text-sm text-gray-500">
              Bu bölümde seçili içeriğin önizlemesi görüntülenecek.
            </p>
          </div>
        </div>
      </div>

      {/* New Section Modal */}
      {showNewSectionModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" onClick={() => setShowNewSectionModal(false)} />

            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Yeni Bölüm Ekle</h3>
                  <p className="text-sm text-gray-500">Website için yeni bir içerik bölümü oluşturun</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Bölüm Adı</label>
                    <input
                      type="text"
                      value={newSectionName}
                      onChange={(e) => setNewSectionName(e.target.value)}
                      placeholder="Örnek: Referanslar"
                      className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Açıklama (İsteğe bağlı)</label>
                    <input
                      type="text"
                      value={newSectionDescription}
                      onChange={(e) => setNewSectionDescription(e.target.value)}
                      placeholder="Bu bölümün ne için kullanıldığını açıklayın"
                      className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <button
                    onClick={() => setShowNewSectionModal(false)}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
                  >
                    İptal
                  </button>
                  <button
                    disabled={!newSectionName.trim()}
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Oluştur (Henüz aktif değil)
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentManager;
