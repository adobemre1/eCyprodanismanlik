import { useState } from 'react';
import { PencilIcon, EyeIcon, TrashIcon, PlusIcon, PhotoIcon } from '@heroicons/react/24/outline';

const BlogManager = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Dijital Dönüşüm Stratejileri',
      excerpt: 'Modern işletmeler için dijital dönüşüm yaklaşımları...',
      author: 'Ahmet Yılmaz',
      status: 'published',
      category: 'Dijital Dönüşüm',
      publishDate: '2024-12-01',
      views: 1250,
      tags: ['dijital', 'strateji', 'inovasyon']
    },
    {
      id: 2,
      title: 'E-ticaret Trendleri 2025',
      excerpt: 'Gelecek yıl e-ticaret sektörünü şekillendirecek trendler...',
      author: 'Mehmet Kaya',
      status: 'draft',
      category: 'E-ticaret',
      publishDate: null,
      views: 0,
      tags: ['e-ticaret', 'trend', 'gelecek']
    },
    {
      id: 3,
      title: 'Veri Analizi ve İş Zekası',
      excerpt: 'Veri odaklı karar verme süreçleri...',
      author: 'Ayşe Demir',
      status: 'published',
      category: 'Veri Analizi',
      publishDate: '2024-11-28',
      views: 890,
      tags: ['veri', 'analiz', 'BI']
    }
  ]);

  const [selectedPost, setSelectedPost] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);



  const handleDelete = (postId) => {
    if (window.confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
      setPosts(posts.filter(post => post.id !== postId));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published': return 'bg-green-100 text-green-800';
      case 'draft': return 'bg-yellow-100 text-yellow-800';
      case 'archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'published': return 'Yayınlandı';
      case 'draft': return 'Taslak';
      case 'archived': return 'Arşivlendi';
      default: return 'Bilinmiyor';
    }
  };

  const publishedPosts = posts.filter(post => post.status === 'published').length;
  const draftPosts = posts.filter(post => post.status === 'draft').length;
  const totalViews = posts.reduce((sum, post) => sum + post.views, 0);

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Blog Yönetimi
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Blog yazılarınızı oluşturun, düzenleyin ve yönetin
          </p>
        </div>
        <div className="flex mt-4 md:mt-0 md:ml-4">
          <button
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500"
          >
            <PlusIcon className="w-4 h-4 mr-2" />
            Yeni Yazı
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <PhotoIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1 w-0 ml-5">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Toplam Yazı</dt>
                  <dd className="text-lg font-medium text-gray-900">{posts.length}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <EyeIcon className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1 w-0 ml-5">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Yayınlanan</dt>
                  <dd className="text-lg font-medium text-gray-900">{publishedPosts}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <PencilIcon className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="flex-1 w-0 ml-5">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Taslak</dt>
                  <dd className="text-lg font-medium text-gray-900">{draftPosts}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden bg-white rounded-lg shadow">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <EyeIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1 w-0 ml-5">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Toplam Görüntülenme</dt>
                  <dd className="text-lg font-medium text-gray-900">{totalViews.toLocaleString()}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Posts Table */}
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {posts.map((post) => (
            <li key={post.id}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center">
                      <p className="text-lg font-medium text-gray-900 truncate">{post.title}</p>
                      <span className={`ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(post.status)}`}>
                        {getStatusText(post.status)}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{post.excerpt}</p>
                    <div className="flex items-center mt-2 text-sm text-gray-500">
                      <span>Yazar: {post.author}</span>
                      <span className="mx-2">•</span>
                      <span>Kategori: {post.category}</span>
                      {post.publishDate && (
                        <>
                          <span className="mx-2">•</span>
                          <span>Yayın: {new Date(post.publishDate).toLocaleDateString('tr-TR')}</span>
                        </>
                      )}
                      <span className="mx-2">•</span>
                      <span>{post.views} görüntülenme</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-2">
                      {post.tags.map((tag, index) => (
                        <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center ml-4 space-x-2">
                    <button
                      onClick={() => setSelectedPost(post)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <EyeIcon className="w-5 h-5" />
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <PencilIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="text-red-400 hover:text-red-600"
                    >
                      <TrashIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50">
          <div className="relative w-11/12 max-w-4xl p-5 mx-auto bg-white border rounded-md shadow-lg top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{selectedPost.title}</h3>
              <button
                onClick={() => setSelectedPost(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Özet</label>
                <p className="mt-1 text-sm text-gray-900">{selectedPost.excerpt}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Yazar</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedPost.author}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Kategori</label>
                  <p className="mt-1 text-sm text-gray-900">{selectedPost.category}</p>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Etiketler</label>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedPost.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 w-full h-full overflow-y-auto bg-gray-600 bg-opacity-50">
          <div className="relative w-11/12 max-w-2xl p-5 mx-auto bg-white border rounded-md shadow-lg top-20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Yeni Blog Yazısı</h3>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Başlık</label>
                <input
                  type="text"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Blog yazısı başlığı"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Özet</label>
                <textarea
                  rows={3}
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Kısa özet"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Kategori</label>
                  <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option>Dijital Dönüşüm</option>
                    <option>E-ticaret</option>
                    <option>Veri Analizi</option>
                    <option>Yazılım Geliştirme</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Durum</label>
                  <select className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option value="draft">Taslak</option>
                    <option value="published">Yayınla</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200"
                >
                  İptal
                </button>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700">
                  Kaydet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogManager;
