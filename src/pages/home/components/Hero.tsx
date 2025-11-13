
import { useEffect, useRef } from 'react';

export default function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!particlesRef.current) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particlesRef.current?.appendChild(particle);

      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="acasa" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F2C7DA]/30 via-[#0E0E0E] to-[#F5C84C]/20"></div>
        <img
          src="https://readdy.ai/api/search-image?query=Elegant%20luxury%20nail%20salon%20close-up%20of%20perfectly%20manicured%20hands%20with%20glossy%20gel%20polish%20in%20soft%20pink%20and%20gold%20tones%2C%20professional%20beauty%20treatment%20with%20bokeh%20lights%20in%20background%2C%20high-end%20feminine%20aesthetic%20with%20warm%20ambient%20lighting%20and%20delicate%20shimmer%20effects%2C%20ultra-detailed%20macro%20photography%20showing%20precision%20and%20care&width=1920&height=1080&seq=hero-main&orientation=landscape"
          alt="Manichiură Premium"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div ref={particlesRef} className="absolute inset-0 z-10 pointer-events-none overflow-hidden"></div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white animate-fade-in"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Unghii care inspiră eleganță.
        </h2>
        <p className="text-xl md:text-2xl text-[#F2C7DA] mb-12 max-w-3xl mx-auto animate-fade-in-delay">
          Manichiură și pedichiură premium, create cu atenție la detalii.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-2">
          <button
            onClick={() => scrollToSection('programari')}
            className="px-8 py-4 bg-gradient-to-r from-[#F5C84C] to-[#F2C7DA] text-[#0E0E0E] font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(245,200,76,0.8)] transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
          >
            Rezervă acum
          </button>
          <button
            onClick={() => scrollToSection('galerie')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold text-lg rounded-full border-2 border-[#F2C7DA] hover:bg-[#F2C7DA]/20 transition-all duration-300 whitespace-nowrap"
          >
            Vezi galeria
          </button>
        </div>
      </div>

      <style>{`
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, #F2C7DA, #F5C84C);
          border-radius: 50%;
          opacity: 0;
          animation: float-up 5s ease-in infinite;
          box-shadow: 0 0 10px rgba(242, 199, 218, 0.8);
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(1);
            opacity: 0;
          }
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        .animate-fade-in-delay-2 {
          animation: fadeIn 1s ease-out 0.6s both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
