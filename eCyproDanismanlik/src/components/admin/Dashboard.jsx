import { useMemo } from 'react';
import { BarChart3, Users, FileText, Briefcase, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const StatCard = ({ title, value, change, trend, icon: Icon, color }) => {
  const TrendIcon = trend === 'down' ? ArrowDownRight : ArrowUpRight;
  const trendColor = trend === 'down' ? 'text-red-600' : trend === 'up' ? 'text-green-600' : 'text-gray-600';
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="p-5 space-y-3">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <div className="flex-1 w-0 ml-5">
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="text-lg font-semibold text-gray-900">{value}</dd>
          </div>
        </div>
        <div className={`flex items-center text-sm ${trendColor}`}>
          <TrendIcon className="w-4 h-4 mr-1" />
          {change > 0 ? '+' : ''}{change}%
          <span className="ml-2 text-sm text-gray-500">son 30 günde</span>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const stats = useMemo(() => ([
    { title: 'Ziyaretçi', value: '15.4K', change: 12.5, trend: 'up', icon: Users, color: 'text-blue-600' },
    { title: 'Blog Yazıları', value: 32, change: 4.3, trend: 'up', icon: FileText, color: 'text-green-600' },
    { title: 'Aktif Hizmet', value: 8, change: -1.2, trend: 'down', icon: Briefcase, color: 'text-yellow-600' },
    { title: 'Dönüşüm Oranı', value: '3.4%', change: 6.1, trend: 'up', icon: BarChart3, color: 'text-purple-600' },
  ]), []);

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Yönetim Paneli</h2>
          <p className="text-sm text-gray-500">Site istatistiklerini ve yönetim araçlarını görüntüleyin.</p>
        </div>
        <button className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500">
          <BarChart3 className="w-4 h-4 mr-2" />
          Rapor Al
        </button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Hızlı Not</h3>
        <p className="text-sm text-gray-600">
          Admin modülleri (Blog/Hizmet/Takım/İçerik) mock veri ile çalışıyor. Gerçek API bağlamak için ilgili bileşenlerde
          `fetch` entegrasyonu eklenip auth katmanı tanımlanmalı.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
