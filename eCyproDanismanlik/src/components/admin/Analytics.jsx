import { useEffect, useMemo, useState } from 'react';
import { BarChart3, Users, Eye, TrendingUp, ArrowUpRight, ArrowDownRight, Sparkles, AlertTriangle } from 'lucide-react';
import logger from '../../utils/logger';

const StatCard = ({ title, value, change, trend, icon: Icon, color }) => {
  const TrendIcon = trend === 'down' ? ArrowDownRight : ArrowUpRight;
  const trendColor = trend === 'down' ? 'text-red-600' : 'text-green-600';

  return (
    <div className="overflow-hidden bg-white rounded-lg shadow">
      <div className="p-5 space-y-3">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <div className="flex-1 w-0 ml-5">
            <dl>
              <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
              <dd className="text-lg font-medium text-gray-900">{value}</dd>
            </dl>
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

const MiniBarChart = ({ data, color }) => {
  const max = Math.max(...data);
  return (
    <div className="flex items-end h-16 space-x-1">
      {data.map((value, idx) => (
        <div
          key={idx}
          className={`w-4 ${color} rounded-t`}
          style={{ height: `${(value / max) * 100}%` }}
        />
      ))}
    </div>
  );
};

const Analytics = () => {
  const [aiInsights, setAiInsights] = useState([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = localStorage.getItem('ai_contact_insights');
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setAiInsights(parsed);
        } else {
          logger.warn('AI insights data is not an array, resetting');
          localStorage.removeItem('ai_contact_insights');
        }
      }
    } catch (err) {
      logger.error('AI insights load failed, clearing corrupted data', err);
      localStorage.removeItem('ai_contact_insights');
    }
  }, []);

  const analyticsData = useMemo(() => ({
    visitors: { total: 15420, change: 12.5, trend: 'up', daily: [120, 145, 180, 165, 190, 210, 195] },
    pageViews: { total: 45230, change: 8.2, trend: 'up', daily: [340, 380, 420, 390, 450, 480, 460] },
    bounceRate: { total: 34.2, change: -5.1, trend: 'down', daily: [38, 36, 35, 37, 33, 32, 34] },
    avgSession: { total: '3:24', change: 15.3, trend: 'up', daily: ['2:45', '3:10', '3:30', '3:15', '3:45', '3:50', '3:20'] },
  }), []);

  const topPages = useMemo(() => ([
    { page: '/', views: 8420, percentage: 18.6 },
    { page: '/hizmetler', views: 6230, percentage: 13.8 },
    { page: '/hakkimizda', views: 4580, percentage: 10.1 },
    { page: '/iletisim', views: 3890, percentage: 8.6 },
    { page: '/blog', views: 3240, percentage: 7.2 },
  ]), []);

  const trafficSources = useMemo(() => ([
    { source: 'Organik', visitors: 8920, percentage: 57.8 },
    { source: 'Direct', visitors: 3240, percentage: 21.0 },
    { source: 'Sosyal', visitors: 1890, percentage: 12.2 },
    { source: 'Referral', visitors: 980, percentage: 6.3 },
    { source: 'E-posta', visitors: 390, percentage: 2.5 },
  ]), []);

  const recentActivity = useMemo(() => ([
    { id: 1, action: 'Yeni ziyaretçi', detail: 'İstanbul\'dan ziyaret', time: '2 dakika önce', type: 'visitor' },
    { id: 2, action: 'İletişim formu', detail: 'Mehmet K. dan mesaj', time: '5 dakika önce', type: 'contact' },
    { id: 3, action: 'Blog görüntüleme', detail: 'Dijital Dönüşüm makalesi', time: '8 dakika önce', type: 'pageview' },
    { id: 4, action: 'Hizmet sorgusu', detail: 'E-ticaret çözümleri', time: '12 dakika önce', type: 'service' },
    { id: 5, action: 'Yeni abonelik', detail: 'Bülten aboneliği', time: '15 dakika önce', type: 'subscription' },
  ]), []);

  const formatDate = (iso) => {
    try {
      return new Date(iso).toLocaleString('tr-TR', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return '';
    }
  };

  const clearInsights = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem('ai_contact_insights');
    setAiInsights([]);
  };

  const exportCSV = () => {
    if (!aiInsights.length) return;
    const headers = ['id', 'category', 'urgency', 'potential', 'responseTime', 'need', 'tags', 'createdAt'];
    const rows = aiInsights.map((entry) =>
      [
        entry.id,
        entry.category,
        entry.urgency,
        entry.potential,
        entry.responseTime,
        entry.need,
        (entry.tags || []).join('|'),
        entry.createdAt
      ].map((value) => `"${String(value).replace(/"/g, '""')}"`).join(',')
    );
    const csv = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'ai-lead-insights.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Analitik
          </h2>
          <p className="mt-1 text-sm text-gray-500">Website performansını ve kullanıcı davranışlarını takip edin</p>
        </div>
        <div className="flex mt-4 md:mt-0 md:ml-4">
          {/* Detaylı rapor butonu - ileride eklenebilir */}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard title="Toplam Ziyaretçi" value={analyticsData.visitors.total.toLocaleString()} change={analyticsData.visitors.change} trend={analyticsData.visitors.trend} icon={Users} color="text-blue-600" />
        <StatCard title="Sayfa Görüntüleme" value={analyticsData.pageViews.total.toLocaleString()} change={analyticsData.pageViews.change} trend={analyticsData.pageViews.trend} icon={Eye} color="text-green-600" />
        <StatCard title="Çıkma Oranı" value={`%${analyticsData.bounceRate.total}`} change={analyticsData.bounceRate.change} trend={analyticsData.bounceRate.trend} icon={BarChart3} color="text-yellow-600" />
        <StatCard title="Ortalama Oturum" value={analyticsData.avgSession.total} change={analyticsData.avgSession.change} trend={analyticsData.avgSession.trend} icon={TrendingUp} color="text-purple-600" />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">En Çok Görüntülenen Sayfalar</h3>
              <MiniBarChart data={analyticsData.pageViews.daily} color="bg-blue-500" />
            </div>
            <div className="space-y-4">
              {topPages.map((page) => (
                <div key={page.page} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{page.page}</p>
                    <p className="text-sm text-gray-500">{page.views.toLocaleString()} görüntüleme</p>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <div className="w-16 h-2 mr-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-blue-600 rounded-full" style={{ width: `${page.percentage}%` }} />
                      </div>
                      <span className="text-sm text-gray-500">%{page.percentage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">Trafik Kaynakları</h3>
              <MiniBarChart data={analyticsData.visitors.daily} color="bg-green-500" />
            </div>
            <div className="space-y-4">
              {trafficSources.map((source) => (
                <div key={source.source} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{source.source}</p>
                    <p className="text-sm text-gray-500">{source.visitors.toLocaleString()} ziyaretçi</p>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center">
                      <div className="w-16 h-2 mr-2 bg-gray-200 rounded-full">
                        <div className="h-2 bg-green-600 rounded-full" style={{ width: `${source.percentage}%` }} />
                      </div>
                      <span className="text-sm text-gray-500">%{source.percentage}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">AI Lead Insights</h3>
              <p className="text-sm text-gray-500">İletişim formlarından AI önceliklendirme (son 20 kayıt, PII saklanmaz)</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={exportCSV}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-700 border border-gray-200 rounded-md hover:border-gray-300 disabled:opacity-50"
                disabled={!aiInsights.length}
              >
                <BarChart3 className="w-3 h-3" />
                CSV
              </button>
              <button
                onClick={clearInsights}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-gray-700 border border-gray-200 rounded-md hover:border-gray-300 disabled:opacity-50"
                disabled={!aiInsights.length}
              >
                Temizle
              </button>
              <Sparkles className="w-5 h-5 text-blue-600" />
            </div>
          </div>

          {aiInsights.length === 0 ? (
            <div className="flex items-center gap-2 p-4 text-sm text-gray-600 border border-gray-200 rounded-lg bg-gray-50">
              <AlertTriangle className="w-4 h-4 text-gray-500" />
              Henüz AI analizi kaydı yok. İletişim formu gönderildiğinde otomatik eklenir.
            </div>
          ) : (
            <div className="grid gap-3 md:grid-cols-2">
              {aiInsights.map((entry) => (
                <div key={entry.id} className="p-4 space-y-2 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 text-xs font-semibold text-blue-700 rounded-full bg-blue-50">
                      {entry.category}
                    </span>
                    <span className="text-xs text-gray-500">{formatDate(entry.createdAt)}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>
                      <p className="text-xs text-gray-500">Aciliyet</p>
                      <p className="font-medium text-gray-900">{entry.urgency}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Potansiyel</p>
                      <p className="font-medium text-gray-900">{entry.potential}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Yanıt süresi</p>
                      <p className="font-medium text-gray-900">{entry.responseTime}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">İhtiyaç</p>
                      <p className="font-medium text-gray-900">{entry.need}</p>
                    </div>
                  </div>
                  {entry.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 text-xs font-semibold text-gray-800 bg-gray-100 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="mb-4 text-lg font-medium text-gray-900">Son Aktiviteler</h3>
          <div className="flow-root">
            <ul className="-mb-8">
              {recentActivity.map((activity, idx) => (
                <li key={activity.id}>
                  <div className="relative pb-8">
                    {idx !== recentActivity.length - 1 ? (
                      <span className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
                    ) : null}
                    <div className="relative flex space-x-3">
                      <div>
                        <span
                          className={`h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white ${
                            activity.type === 'visitor' ? 'bg-blue-500' :
                            activity.type === 'contact' ? 'bg-green-500' :
                            activity.type === 'pageview' ? 'bg-yellow-500' :
                            activity.type === 'service' ? 'bg-purple-500' : 'bg-gray-500'
                          }`}
                        >
                          {activity.type === 'visitor' && <Users className="w-4 h-4 text-white" />}
                          {activity.type === 'contact' && <Eye className="w-4 h-4 text-white" />}
                          {activity.type === 'pageview' && <Eye className="w-4 h-4 text-white" />}
                          {activity.type === 'service' && <BarChart3 className="w-4 h-4 text-white" />}
                          {activity.type === 'subscription' && <TrendingUp className="w-4 h-4 text-white" />}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1 pt-1.5">
                        <p className="text-sm text-gray-500">
                          <span className="font-medium text-gray-900">{activity.action}</span> - {activity.detail}
                        </p>
                        <p className="text-xs text-gray-400">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
