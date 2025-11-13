
export default function CTAFinal() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#0E0E0E] via-[#26161C] to-[#0E0E0E] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F2C7DA]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F5C84C]/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Frumusețea începe cu detaliile.
        </h2>

        <p className="text-xl md:text-2xl text-[#F2C7DA] mb-12 max-w-2xl mx-auto">
          Oferă-ți experiența pe care o meriți. Rezervă acum și descoperă diferența calității premium.
        </p>

        <button
          onClick={() => scrollToSection('programari')}
          className="group relative px-12 py-5 bg-gradient-to-r from-[#F5C84C] to-[#F2C7DA] text-[#0E0E0E] font-bold text-xl rounded-full overflow-hidden transition-all duration-300 transform hover:scale-110 whitespace-nowrap"
        >
          <span className="relative z-10 flex items-center gap-3">
            Rezervă acum
            <i className="ri-arrow-right-line text-2xl group-hover:translate-x-2 transition-transform duration-300"></i>
          </span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          <div className="absolute inset-0 cta-glow"></div>
        </button>

        <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-white">
          <div className="flex items-center gap-3">
            <i className="ri-time-line text-3xl text-[#F5C84C]"></i>
            <div className="text-left">
              <div className="font-bold">Program flexibil</div>
              <div className="text-sm text-gray-400">Luni - Sâmbătă</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <i className="ri-map-pin-line text-3xl text-[#F5C84C]"></i>
            <div className="text-left">
              <div className="font-bold">Locație centrală</div>
              <div className="text-sm text-gray-400">București</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <i className="ri-star-fill text-3xl text-[#F5C84C]"></i>
            <div className="text-left">
              <div className="font-bold">Rating 5.0</div>
              <div className="text-sm text-gray-400">3000+ clienți</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cta-glow {
          box-shadow: 0 0 60px rgba(245, 200, 76, 0.6);
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes glow-pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
