
const LogoCloud = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 justify-items-center items-center py-6 sm:py-8">
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <svg width="80" height="40" viewBox="0 0 100 40" fill="currentColor" className="text-gray-800">
          <rect x="0" y="10" width="80" height="20" rx="4" />
        </svg>
      </div>
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <svg width="80" height="40" viewBox="0 0 100 40" fill="currentColor" className="text-gray-800">
          <circle cx="50" cy="20" r="20" />
        </svg>
      </div>
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <svg width="80" height="40" viewBox="0 0 100 40" fill="currentColor" className="text-gray-800">
          <path d="M10,20 L50,5 L90,20 L50,35 Z" />
        </svg>
      </div>
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <svg width="80" height="40" viewBox="0 0 100 40" fill="currentColor" className="text-gray-800">
          <rect x="10" y="5" width="80" height="30" rx="15" />
        </svg>
      </div>
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <svg width="80" height="40" viewBox="0 0 100 40" fill="currentColor" className="text-gray-800">
          <polygon points="50,5 95,35 5,35" />
        </svg>
      </div>
      <div className="opacity-60 hover:opacity-100 transition-opacity">
        <svg width="80" height="40" viewBox="0 0 100 40" fill="currentColor" className="text-gray-800">
          <rect x="10" y="10" width="30" height="20" />
          <rect x="60" y="10" width="30" height="20" />
        </svg>
      </div>
    </div>
  );
};

const PartnersSection = () => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 px-4">
      <div className="container mx-auto">
        <h2 className="section-title">Proud to Be Used By</h2>
        <p className="section-subtitle">
          Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art customer service.
        </p>
        <LogoCloud />
      </div>
    </section>
  );
};

export default PartnersSection;
