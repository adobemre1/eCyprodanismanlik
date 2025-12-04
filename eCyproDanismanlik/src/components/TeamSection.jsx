import { Award, Users, Mail, Phone } from 'lucide-react';

const team = [
  {
    name: 'Emre Can Yüncü',
    title: 'Kurucu & Baş Danışman',
    bio: '15+ yıl teknoloji ve danışmanlık deneyimi. 50+ MVP projesi, ISO27001 sertifikalı süreçler.',
    avatar: 'E',
    expertise: ['MVP Geliştirme', 'Dijital Dönüşüm', 'ISO27001', 'Teknoloji Stratejisi'],
    achievements: ['50+ Başarılı MVP', 'ISO27001 Sertifikası', '15+ Yıl Deneyim', 'Teknoloji Patentleri']
  },
  {
    name: 'Ali Mert Şahin',
    title: 'Patent ve Fikri Mülkiyet Uzmanı',
    bio: 'TÜBİSAD üyesi, 200+ patent tescil süreci. Avrupa Patent Ofisi deneyimli.',
    avatar: 'A',
    expertise: ['Patent Tescil', 'Fikri Mülkiyet', 'Avrupa Patent Ofisi', 'TÜBİSAD'],
    achievements: ['200+ Patent Tescil', 'TÜBİSAD Üyesi', 'Avrupa Patent Deneyimi', 'Marka Tescil']
  },
  {
    name: 'Elif Korkmaz',
    title: 'Teşvik ve Hibe Uzmanı',
    bio: 'TÜBİTAK ve KOSGEB projelerinde 100M+ TL teşvik sağladı. Girişimcilik mentörü.',
    avatar: 'E',
    expertise: ['TÜBİTAK', 'KOSGEB', 'Ar-Ge Teşvikleri', 'Girişimcilik'],
    achievements: ['100M+ TL Teşvik', 'TÜBİTAK Başarı', 'Girişim Mentorluğu', 'Proje Yönetimi']
  },
];

const TeamSection = () => {
  return (
    <section id="team" className="py-20 lg:py-28 bg-gray-50 scroll-mt-24" aria-labelledby="team-heading">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.25em] mb-4">Uzman Ekibimiz</p>
          <h2 id="team-heading" className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
            Sektöründe Lider Danışmanlar
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600">
            Her biri alanında uzman, 15+ yıllık kurumsal deneyim ve TÜBİSAD üyesi danışmanlarımızla
            kurumunuzun tüm ihtiyaçlarına özel çözümler sunuyoruz.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article
              key={member.name}
              className="relative p-8 transition-all duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-xl hover:border-blue-200 group"
            >
              {/* Avatar and basic info */}
              <div className="flex items-start gap-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 text-lg font-bold text-white rounded-full shadow-lg bg-gradient-to-br from-blue-500 to-blue-600">
                  {member.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="mb-2 text-sm font-medium text-blue-600">{member.title}</p>
                  <p className="text-sm leading-relaxed text-gray-600">{member.bio}</p>
                </div>
              </div>

              {/* Expertise */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-900">
                  <Award className="w-4 h-4 text-blue-600" />
                  Uzmanlık Alanları
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs font-medium text-blue-700 rounded-full bg-blue-50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="flex items-center gap-2 mb-3 text-sm font-semibold text-gray-900">
                  <Users className="w-4 h-4 text-blue-600" />
                  Başarılar
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {member.achievements.map((achievement) => (
                    <div key={achievement} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full"></div>
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Mail className="w-4 h-4" />
                    <span>{member.contact.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="w-4 h-4" />
                    <span>{member.contact.phone}</span>
                  </div>
                </div>
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 transition-opacity opacity-0 pointer-events-none bg-gradient-to-r from-blue-500/5 to-blue-600/5 rounded-xl group-hover:opacity-100"></div>
            </article>
          ))}
        </div>

        {/* Team stats */}
        <div className="p-8 mt-16 text-center text-white bg-gradient-to-r from-blue-600 to-blue-900 rounded-2xl">
          <h3 className="mb-4 text-2xl font-bold">Toplamda 80+ Yıl Kurumsal Deneyim</h3>
          <div className="grid gap-6 md:grid-cols-4">
            <div>
              <div className="mb-2 text-3xl font-bold">15+</div>
              <div className="text-sm opacity-90">Yıl Ortalama Deneyim</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">500+</div>
              <div className="text-sm opacity-90">Tamamlanan Proje</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">30+</div>
              <div className="text-sm opacity-90">Sektör Deneyimi</div>
            </div>
            <div>
              <div className="mb-2 text-3xl font-bold">%98</div>
              <div className="text-sm opacity-90">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
