const logos = ['Fortune Co', 'GlobalTech', 'Allied Group', 'Northwind', 'Vertex', 'Apex Partners'];

const TrustBarSection = () => {
  return (
    <section className="py-10 bg-white border-y border-slate-100" aria-labelledby="trust-heading">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6 text-xs font-semibold tracking-[0.25em] text-slate-500 uppercase">
          <span className="h-px w-6 bg-slate-200" aria-hidden="true" />
          <p id="trust-heading">Bize güvenen kurumlar</p>
          <span className="flex-1 h-px bg-slate-200" aria-hidden="true" />
        </div>
        <div className="grid items-center grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo}
              className="flex items-center justify-center h-14 rounded-lg bg-slate-50 border border-slate-100 text-sm font-semibold text-slate-500 uppercase tracking-wide transition-all duration-200 hover:text-slate-900 hover:bg-white hover:border-slate-200"
              aria-label={`${logo} logosu`}
            >
              <span className="opacity-60 hover:opacity-100 transition-opacity">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;
