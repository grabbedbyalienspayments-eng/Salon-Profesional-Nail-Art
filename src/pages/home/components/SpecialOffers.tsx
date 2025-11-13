
export default function SpecialOffers() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#F2C7DA]/10 via-[#0E0E0E] to-[#F5C84C]/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F2C7DA] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F5C84C] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Oferte speciale
          </h2>
          <p className="text-[#F2C7DA] text-lg">
            Profită de promoțiile noastre exclusive
          </p>
        </div>

        <div className="relative bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border-2 border-[#F5C84C] pulse-border">
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#F5C84C] to-[#F2C7DA] text-[#0E0E0E] px-8 py-3 rounded-full font-bold text-lg whitespace-nowrap">
            <i className="ri-gift-line mr-2"></i>
            Ofertă limitată
          </div>

          <div className="text-center mt-4">
            <h3
              className="text-3xl md:text-4xl font-bold text-white mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Pachet Noua Clientă
            </h3>

            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-5xl md:text-6xl font-bold text-[#F5C84C]" style={{ fontFamily: "'Playfair Display', serif" }}>
                20%
              </span>
              <span className="text-2xl text-white">reducere</span>
            </div>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              La prima manichiură gel pentru toate clientele noi. Descoperă calitatea serviciilor noastre premium la un preț special!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <div className="flex items-center gap-2 text-[#F2C7DA]">
                <i className="ri-checkbox-circle-fill text-xl"></i>
                <span>Valabil pentru manichiură gel</span>
              </div>
              <div className="flex items-center gap-2 text-[#F2C7DA]">
                <i className="ri-checkbox-circle-fill text-xl"></i>
                <span>Include îngrijire cuticule</span>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('programari')}
              className="px-10 py-4 bg-gradient-to-r from-[#F5C84C] to-[#F2C7DA] text-[#0E0E0E] font-bold text-lg rounded-full hover:shadow-[0_0_40px_rgba(245,200,76,0.8)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Rezervă acum cu reducere
            </button>

            <p className="text-sm text-gray-400 mt-6">
              * Oferta este valabilă doar pentru clienții noi, la prima vizită
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .pulse-border {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(245, 200, 76, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(245, 200, 76, 0.6);
          }
        }
      `}</style>
    </section>
  );
}
