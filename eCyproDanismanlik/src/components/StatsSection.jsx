const stats = [
  { label: 'Kurumsal müşteri', value: '120+', note: 'Strateji ve organizasyon projeleri' },
  { label: 'Hizmet alanı', value: '6', note: 'Strateji, İK, liderlik, iletişim, etik, kamu' },
  { label: 'Memnuniyet', value: '%94', note: 'SLA ve NPS ile ölçülür' },
  { label: 'Uygulama süresi', value: '12 ay', note: 'Strateji ve yürütme planı' },
];

const StatsSection = () => {
  return (
    <section id="stats" className="py-24 text-white bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 lg:py-32 scroll-mt-24 reveal">
      <div className="grid max-w-6xl gap-8 px-4 mx-auto sm:px-6 lg:px-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div key={item.label} className="p-8 text-center border shadow-lg rounded-2xl border-white/10 bg-white/5">
            <p className="text-6xl font-bold lg:text-7xl">{item.value}</p>
            <p className="mt-2 text-base tracking-wide text-blue-100 uppercase">{item.label}</p>
            <p className="mt-4 text-sm leading-relaxed text-blue-50">{item.note}</p>
            {index < stats.length - 1 && <div className="w-16 h-px mx-auto mt-6 bg-white/20" aria-hidden="true" />}
          </div>
        ))}
      </div>
      <div className="w-full h-px max-w-4xl mx-auto mt-16 bg-white/20" aria-hidden="true" />
    </section>
  );
};

export default StatsSection;
