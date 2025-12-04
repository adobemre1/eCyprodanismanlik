const partners = ['Partner A', 'Partner B', 'Partner C', 'Partner D', 'Partner E', 'Partner F'];

const PartnersSection = () => {
  return (
    <section id="partners" className="bg-white py-14 scroll-mt-24" aria-labelledby="partners-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm font-semibold text-blue-700 uppercase tracking-[0.25em]">İş Ortakları</p>
            <h2 id="partners-heading" className="text-2xl lg:text-3xl font-bold text-gray-900">Güvenilir çözüm ortaklarımız</h2>
          </div>
          <p className="text-gray-600 max-w-xl">Marka tescili, teşvik ve medya projelerinde birlikte çalıştığımız seçili iş ortakları.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {partners.map((partner) => (
            <div key={partner} className="border border-slate-200 rounded-xl p-4 bg-slate-50 text-center text-gray-700 font-semibold">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
