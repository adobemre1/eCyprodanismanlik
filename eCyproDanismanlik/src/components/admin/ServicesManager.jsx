import { useState } from 'react';
import { Pencil, Trash2, Plus, Check, ArrowUp, ArrowDown } from 'lucide-react';

const ServicesManager = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: 'Dijital Dönüşüm Danışmanlığı',
      description: 'İşletmenizin dijital dönüşüm yolculuğunda uzman desteği',
      shortDescription: 'Dijital teknolojilerle işletmenizi geleceğe taşıyoruz.',
      icon: '💡',
      category: 'Dijital',
      price: '₺15,000',
      duration: '3-6 ay',
      features: ['Dijital strateji', 'Altyapı değerlendirme', 'Değişim yönetimi', 'Eğitim ve destek'],
      status: 'active',
      order: 1
    },
    {
      id: 2,
      title: 'E-Ticaret Çözümleri',
      description: 'Modern e-ticaret platformları ve satış stratejileri',
      shortDescription: 'Online satışlarınızı artırın.',
      icon: '🛒',
      category: 'E-Ticaret',
      price: '₺25,000',
      duration: '2-4 ay',
      features: ['Platform kurulumu', 'Katalog yönetimi', 'Ödeme entegrasyonu', 'SEO ve pazarlama'],
      status: 'active',
      order: 2
    },
    {
      id: 3,
      title: 'Veri Analizi ve BI',
      description: 'İş zekası çözümleri ve veri analizi hizmetleri',
      shortDescription: 'Verilerinizden değerli içgörüler elde edin.',
      icon: '📊',
      category: 'Analitik',
      price: '₺20,000',
      duration: '4-8 ay',
      features: ['Veri altyapısı', 'Dashboard geliştirme', 'Raporlama', 'ML modelleri'],
      status: 'active',
      order: 3
    }
  ]);

  const [editingService, setEditingService] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleStatusChange = (serviceId, newStatus) => {
    setServices((prev) => prev.map((service) => (service.id === serviceId ? { ...service, status: newStatus } : service)));
  };

  const handleDelete = (serviceId) => {
    if (window.confirm('Bu hizmeti silmek istediğinizden emin misiniz?')) {
      setServices((prev) => prev.filter((service) => service.id !== serviceId));
    }
  };

  const handleOrderChange = (serviceId, direction) => {
    const currentIndex = services.findIndex((s) => s.id === serviceId);
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= services.length) return;

    const newServices = [...services];
    [newServices[currentIndex], newServices[newIndex]] = [newServices[newIndex], newServices[currentIndex]];
    newServices.forEach((service, idx) => { service.order = idx + 1; });
    setServices(newServices);
  };

  const getStatusColor = (status) => (status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800');
  const getStatusText = (status) => (status === 'active' ? 'Aktif' : 'Pasif');

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Hizmet Yönetimi</h2>
          <p className="mt-1 text-sm text-gray-500">Sunulan hizmetleri düzenleyin ve yönetin</p>
        </div>
        <div className="flex mt-4 md:mt-0 md:ml-4">
          <button onClick={() => setShowCreateModal(true)} className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500">
            <Plus className="w-4 h-4 mr-2" />
            Yeni Hizmet
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-md">
                <span className="text-sm font-bold text-white">{services.length}</span>
              </div>
              <div className="flex-1 w-0 ml-5">
                <dt className="text-sm font-medium text-gray-500 truncate">Toplam Hizmet</dt>
                <dd className="text-lg font-medium text-gray-900">{services.length}</dd>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-green-500 rounded-md">
                <Check className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 w-0 ml-5">
                <dt className="text-sm font-medium text-gray-500 truncate">Aktif Hizmet</dt>
                <dd className="text-lg font-medium text-gray-900">{services.filter((s) => s.status === 'active').length}</dd>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-purple-500 rounded-md">
                <span className="text-sm font-bold text-white">{new Set(services.map((s) => s.category)).size}</span>
              </div>
              <div className="flex-1 w-0 ml-5">
                <dt className="text-sm font-medium text-gray-500 truncate">Kategori</dt>
                <dd className="text-lg font-medium text-gray-900">{new Set(services.map((s) => s.category)).size}</dd>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {services.map((service, index) => (
            <li key={service.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-1">
                    <div className="flex-shrink-0">
                      <span className="text-2xl">{service.icon}</span>
                    </div>
                    <div className="flex-1 ml-4">
                      <div className="flex items-center flex-wrap gap-2">
                        <h4 className="text-sm font-medium text-gray-900">{service.title}</h4>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                          {getStatusText(service.status)}
                        </span>
                        <span className="px-2 py-1 text-xs text-gray-500 bg-gray-100 rounded">{service.category}</span>
                      </div>
                      <div className="mt-1 text-sm text-gray-600">
                        <p>{service.shortDescription}</p>
                        <div className="flex items-center mt-2 space-x-4 text-xs text-gray-500">
                          <span>Fiyat: {service.price}</span>
                          <span>Süre: {service.duration}</span>
                          <span>Sıra: {service.order}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                <div className="flex items-center space-x-3">
                  <div className="flex flex-col space-y-1">
                    <button onClick={() => handleOrderChange(service.id, 'up')} disabled={index === 0} className="text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                      <ArrowUp className="w-4 h-4" />
                    </button>
                      <button onClick={() => handleOrderChange(service.id, 'down')} disabled={index === services.length - 1} className="text-gray-400 hover:text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed">
                        <ArrowDown className="w-4 h-4" />
                      </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    {service.status === 'active' ? (
                      <button className="text-yellow-600 hover:text-yellow-800 text-xs" onClick={() => handleStatusChange(service.id, 'inactive')}>
                        Pasif yap
                      </button>
                    ) : (
                      <button className="text-green-600 hover:text-green-800 text-xs" onClick={() => handleStatusChange(service.id, 'active')}>
                        Aktif yap
                      </button>
                    )}
                    <button className="text-gray-400 hover:text-gray-600" onClick={() => setEditingService(service.id)}>
                      <Pencil className="w-5 h-5" />
                    </button>
                    <button className="text-red-400 hover:text-red-600" onClick={() => handleDelete(service.id)}>
                      <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-500">
                  {service.features.map((feature) => (
                    <span key={feature} className="px-2 py-1 bg-gray-100 rounded">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Modals would be implemented when backend/API is ready */}
      {showCreateModal && (
        <div className="p-4 text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded">
          Yeni hizmet oluşturma modalı için backend entegrasyonu beklenecek.
        </div>
      )}
      {editingService && (
        <div className="p-4 text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded">
          Hizmet düzenleme modalı için backend entegrasyonu beklenecek (ID: {editingService}).
        </div>
      )}
    </div>
  );
};

export default ServicesManager;
