
export default function Pricing() {
  const packages = [
    {
      name: 'Essentials',
      price: '150',
      description: 'Perfect pentru îngrijirea de bază',
      features: [
        'Manichiură clasică',
        'Îngrijire cuticule',
        'Aplicare lac clasic',
        'Masaj mâini',
        'Finisaj lucios'
      ]
    },
    {
      name: 'Beauty Pro',
      price: '280',
      description: 'Cel mai popular pachet',
      features: [
        'Manichiură gel completă',
        'Nail art simplu (2 unghii)',
        'Întărire rubber base',
        'Îngrijire cuticule premium',
        'Masaj relaxant',
        'Finisaj ultra-lucios'
      ],
      popular: true
    },
    {
      name: 'Luxury Glam',
      price: '450',
      description: 'Experiența completă de lux',
      features: [
        'Manichiură gel premium',
        'Nail art avansat (toate unghiile)',
        'Design personalizat',
        'Tratament SPA pentru mâini',
        'Aplicare cristale Swarovski',
        'Masaj extended',
        'Produse premium exclusive'
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="preturi" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Pachete și prețuri
          </h2>
          <p className="text-[#F2C7DA] text-lg max-w-2xl mx-auto">
            Alege pachetul perfect pentru tine și bucură-te de servicii premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-500 hover:scale-105 group ${
                pkg.popular
                  ? 'border-[#F5C84C] shadow-[0_0_40px_rgba(245,200,76,0.3)]'
                  : 'border-[#F2C7DA]/20 hover:border-[#F5C84C]'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F5C84C] to-[#F2C7DA] text-[#0E0E0E] px-6 py-2 rounded-full font-bold text-sm whitespace-nowrap">
                  Cel mai popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {pkg.name}
                </h3>
                <p className="text-gray-400 mb-6">{pkg.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-[#F5C84C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {pkg.price}
                  </span>
                  <span className="text-gray-400">RON</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-300">
                    <i className="ri-checkbox-circle-fill text-[#F5C84C] text-xl flex-shrink-0 mt-0.5"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => scrollToSection('programari')}
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-[#F5C84C] to-[#F2C7DA] text-[#0E0E0E] hover:shadow-[0_0_30px_rgba(245,200,76,0.6)]'
                    : 'bg-white/10 text-white border-2 border-[#F2C7DA] hover:bg-[#F2C7DA]/20'
                }`}
              >
                Rezervă acest pachet
              </button>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none micro-animate"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .micro-animate {
          background: linear-gradient(45deg, transparent 30%, rgba(245, 200, 76, 0.1) 50%, transparent 70%);
          background-size: 200% 200%;
          animation: micro-shine 3s ease-in-out infinite;
        }

        @keyframes micro-shine {
          0%, 100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </section>
  );
}
