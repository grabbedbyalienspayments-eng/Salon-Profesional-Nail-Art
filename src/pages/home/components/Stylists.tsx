
export default function Stylists() {
  const stylists = [
    {
      name: 'Raluca',
      title: 'Nail Artist Expert',
      description: 'Specializată în nail art avansat și designuri personalizate unice.',
      certifications: 'Certificări internaționale în gel sculpting și nail art',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20nail%20artist%20in%20elegant%20beauty%20salon%2C%20confident%20woman%20in%20her%2030s%20with%20warm%20smile%20wearing%20professional%20attire%2C%20modern%20luxury%20nail%20studio%20background%20with%20soft%20pink%20and%20gold%20lighting%2C%20portrait%20photography%20with%20professional%20beauty%20industry%20aesthetic&width=400&height=500&seq=stylist-1&orientation=portrait'
    },
    {
      name: 'Ioana',
      title: 'Gel Specialist',
      description: 'Expert în tehnici gel și acryl pentru unghii rezistente și naturale.',
      certifications: 'Master în aplicare gel și întărire profesională',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20gel%20nail%20specialist%20in%20luxury%20beauty%20salon%2C%20elegant%20woman%20in%20her%20late%2020s%20with%20friendly%20expression%20wearing%20professional%20beauty%20uniform%2C%20sophisticated%20nail%20studio%20background%20with%20soft%20ambient%20lighting%20and%20modern%20equipment%2C%20portrait%20photography%20with%20premium%20aesthetic&width=400&height=500&seq=stylist-2&orientation=portrait'
    },
    {
      name: 'Andreea',
      title: 'Pedichiură SPA',
      description: 'Specializată în tratamente SPA relaxante și îngrijire completă a picioarelor.',
      certifications: 'Certificare în pedichiură medicală și tratamente SPA',
      image: 'https://readdy.ai/api/search-image?query=Professional%20female%20pedicure%20SPA%20specialist%20in%20serene%20beauty%20salon%2C%20caring%20woman%20in%20her%2030s%20with%20gentle%20smile%20wearing%20spa%20professional%20attire%2C%20relaxing%20spa%20environment%20with%20candles%20and%20soft%20pink%20lighting%2C%20portrait%20photography%20with%20wellness%20and%20luxury%20aesthetic&width=400&height=500&seq=stylist-3&orientation=portrait'
    }
  ];

  return (
    <section id="stiliste" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Echipa noastră
          </h2>
          <p className="text-[#F2C7DA] text-lg max-w-2xl mx-auto">
            Profesioniști pasionați, dedicați frumuseții și perfecțiunii
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stylists.map((stylist, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#F2C7DA]/20 hover:border-[#F5C84C] transition-all duration-500 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={stylist.image}
                  alt={stylist.name}
                  className="w-full h-80 object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 ring-2 ring-inset ring-[#F5C84C]/0 group-hover:ring-[#F5C84C]/50 transition-all duration-500 rounded-t-2xl glow-effect"></div>
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {stylist.name}
                </h3>
                <div className="text-[#F5C84C] font-semibold mb-4 text-lg">
                  {stylist.title}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {stylist.description}
                </p>
                <div className="text-sm text-[#F2C7DA] border-t border-[#F2C7DA]/20 pt-4">
                  <i className="ri-award-line mr-2"></i>
                  {stylist.certifications}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .glow-effect {
          box-shadow: inset 0 0 0 0 rgba(245, 200, 76, 0);
          transition: box-shadow 0.5s ease;
        }

        .group:hover .glow-effect {
          box-shadow: inset 0 0 30px 5px rgba(245, 200, 76, 0.3);
        }
      `}</style>
    </section>
  );
}
