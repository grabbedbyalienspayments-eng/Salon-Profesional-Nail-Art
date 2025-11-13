
export default function Services() {
  const services = [
    {
      icon: 'ri-hand-heart-line',
      title: 'Manichiură clasică',
      description: 'Îngrijire completă a mâinilor cu finisaj impecabil și durabil.'
    },
    {
      icon: 'ri-sparkling-2-line',
      title: 'Manichiură gel & acryl',
      description: 'Unghii rezistente și strălucitoare, cu aspect natural sau extins.'
    },
    {
      icon: 'ri-footprint-line',
      title: 'Pedichiură SPA',
      description: 'Tratament relaxant complet pentru picioare perfecte și îngrijite.'
    },
    {
      icon: 'ri-palette-line',
      title: 'Nail Art avansat',
      description: 'Designuri personalizate și creative, de la clasic la avangardist.'
    },
    {
      icon: 'ri-shield-star-line',
      title: 'Întărire cu rubber base',
      description: 'Protecție superioară pentru unghii fragile și predispuse la rupere.'
    },
    {
      icon: 'ri-heart-pulse-line',
      title: 'Îngrijire cuticule & tratamente',
      description: 'Tratamente profesionale pentru mâini sănătoase și frumoase.'
    }
  ];

  return (
    <section id="servicii" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Serviciile noastre
          </h2>
          <p className="text-[#F2C7DA] text-lg max-w-2xl mx-auto">
            Oferim o gamă completă de servicii profesionale pentru frumusețea și sănătatea unghiilor tale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F2C7DA]/20 hover:border-[#F5C84C] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(245,200,76,0.3)] cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#F2C7DA]/10 to-[#F5C84C]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 flex items-center justify-center mb-6 bg-gradient-to-br from-[#F5C84C] to-[#F2C7DA] rounded-full">
                  <i className={`${service.icon} text-3xl text-[#0E0E0E]`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none shimmer-border"></div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .shimmer-border {
          background: linear-gradient(90deg, transparent, rgba(245, 200, 76, 0.4), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </section>
  );
}
