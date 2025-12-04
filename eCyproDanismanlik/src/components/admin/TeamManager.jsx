import { useMemo, useState } from 'react';
import { Plus, Pencil, Trash2, Users, ShieldCheck, ArrowUp, ArrowDown, CheckCircle2 } from 'lucide-react';

const statusBadge = (status) => status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
const statusLabel = (status) => status === 'active' ? 'Aktif' : 'Pasif';

const TeamManager = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'Ahmet Yılmaz', role: 'Kıdemli Danışman', department: 'Danışmanlık', experience: 12, status: 'active', order: 1, skills: ['Strateji', 'Operasyon'], bio: 'Büyüme ve operasyonel iyileştirme projelerinde uzman.' },
    { id: 2, name: 'Ayşe Kaya', role: 'Teknoloji Direktörü', department: 'Teknoloji', experience: 15, status: 'active', order: 2, skills: ['Yazılım Mimarisi', 'Bulut'], bio: 'Kurumsal mimari ve bulut dönüşümü liderliği.' },
    { id: 3, name: 'Mehmet Demir', role: 'Finansal Danışman', department: 'Finans', experience: 10, status: 'active', order: 3, skills: ['Finansal Analiz', 'Teşvikler'], bio: 'Teşvik ve yatırım projelerinde finansal modelleme.' },
  ]);

  const [selectedMember, setSelectedMember] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const stats = useMemo(() => {
    const active = teamMembers.filter((m) => m.status === 'active').length;
    const departments = new Set(teamMembers.map((m) => m.department)).size;
    const avgExp = (teamMembers.reduce((acc, m) => acc + m.experience, 0) / teamMembers.length || 0).toFixed(1);
    return { total: teamMembers.length, active, departments, avgExp };
  }, [teamMembers]);

  const handleStatusChange = (id, nextStatus) => {
    setTeamMembers((prev) => prev.map((m) => (m.id === id ? { ...m, status: nextStatus } : m)));
  };

  const handleDelete = (id) => {
    if (window.confirm('Bu üyeyi silmek istediğinize emin misiniz?')) {
      setTeamMembers((prev) => prev.filter((m) => m.id !== id));
    }
  };

  const handleOrderChange = (id, direction) => {
    const currentIndex = teamMembers.findIndex((m) => m.id === id);
    const newIndex = direction === 'up' ? currentIndex - 1 : currentIndex + 1;
    if (newIndex < 0 || newIndex >= teamMembers.length) return;

    const next = [...teamMembers];
    [next[currentIndex], next[newIndex]] = [next[newIndex], next[currentIndex]];
    next.forEach((m, idx) => { m.order = idx + 1; });
    setTeamMembers(next);
  };

  return (
    <div className="space-y-6">
      <div className="md:flex md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Takım Yönetimi</h2>
          <p className="text-sm text-gray-500">Ekip üyelerini düzenleyin, durumlarını ve sıralarını yönetin.</p>
        </div>
        <button onClick={() => setShowCreateModal(true)} className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500">
          <Plus className="w-4 h-4 mr-2" /> Yeni Üye
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-600" />
          <div>
            <p className="text-sm text-gray-500">Toplam Üye</p>
            <p className="text-lg font-semibold text-gray-900">{stats.total}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
          <CheckCircle2 className="w-8 h-8 text-green-600" />
          <div>
            <p className="text-sm text-gray-500">Aktif</p>
            <p className="text-lg font-semibold text-gray-900">{stats.active}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
          <ShieldCheck className="w-8 h-8 text-purple-600" />
          <div>
            <p className="text-sm text-gray-500">Departman</p>
            <p className="text-lg font-semibold text-gray-900">{stats.departments}</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 flex items-center gap-3">
          <Users className="w-8 h-8 text-yellow-600" />
          <div>
            <p className="text-sm text-gray-500">Ort. Deneyim</p>
            <p className="text-lg font-semibold text-gray-900">{stats.avgExp} yıl</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={member.id} className="p-4 space-y-3 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-blue-500 rounded-full">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{member.name}</p>
                  <p className="text-xs text-gray-500">{member.role}</p>
                </div>
              </div>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusBadge(member.status)}`}>{statusLabel(member.status)}</span>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{member.bio}</p>
            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
              <span className="px-2 py-1 bg-gray-100 rounded">Dept: {member.department}</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Deneyim: {member.experience}y</span>
              {member.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-100 rounded">{skill}</span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button onClick={() => handleOrderChange(member.id, 'up')} disabled={index === 0} className="text-gray-400 hover:text-gray-600 disabled:opacity-50">
                  <ArrowUp className="w-4 h-4" />
                </button>
                <button onClick={() => handleOrderChange(member.id, 'down')} disabled={index === teamMembers.length - 1} className="text-gray-400 hover:text-gray-600 disabled:opacity-50">
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                {member.status === 'active' ? (
                  <button className="text-yellow-600 hover:text-yellow-800 text-xs" onClick={() => handleStatusChange(member.id, 'inactive')}>
                    Pasif yap
                  </button>
                ) : (
                  <button className="text-green-600 hover:text-green-800 text-xs" onClick={() => handleStatusChange(member.id, 'active')}>
                    Aktif yap
                  </button>
                )}
                <button className="text-gray-500 hover:text-gray-700" onClick={() => setSelectedMember(member.id)}>
                  <Pencil className="w-4 h-4" />
                </button>
                <button className="text-red-500 hover:text-red-700" onClick={() => handleDelete(member.id)}>
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showCreateModal && (
        <div className="p-4 text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded">
          Yeni üye oluşturma modalı için backend entegrasyonu beklenecek.
        </div>
      )}
      {selectedMember && (
        <div className="p-4 text-sm text-blue-700 bg-blue-50 border border-blue-100 rounded">
          Üye düzenleme modalı için backend entegrasyonu beklenecek (ID: {selectedMember}). <button className="ml-2 text-blue-800 underline" onClick={() => setSelectedMember(null)}>Kapat</button>
        </div>
      )}
    </div>
  );
};

export default TeamManager;
