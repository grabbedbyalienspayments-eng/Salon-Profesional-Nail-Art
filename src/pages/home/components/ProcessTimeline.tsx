
import { useEffect, useRef, useState } from 'react';

export default function ProcessTimeline() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: 'ri-calendar-check-line',
      title: 'Programare',
      description: 'Alege data și ora care ți se potrivește cel mai bine'
    },
    {
      icon: 'ri-discuss-line',
      title: 'Consultare stil',
      description: 'Discutăm despre preferințele tale și alegem designul perfect'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Procedură',
      description: 'Aplicăm tehnicile profesionale cu atenție la fiecare detaliu'
    },
    {
      icon: 'ri-sparkling-2-line',
      title: 'Glow final',
      description: 'Admiră rezultatul impecabil și strălucitor'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Procesul nostru
          </h2>
          <p className="text-[#F2C7DA] text-lg max-w-2xl mx-auto">
            Patru pași simpli către unghii perfecte
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F2C7DA]/20 hover:border-[#F5C84C] transition-all duration-500 hover:scale-105 text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-[#F5C84C] to-[#F2C7DA] rounded-full relative z-10">
                      <i className={`${step.icon} text-4xl text-[#0E0E0E]`}></i>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F5C84C] to-[#F2C7DA] rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#0E0E0E] border-2 border-[#F5C84C] rounded-full flex items-center justify-center text-[#F5C84C] font-bold hidden lg:flex">
                    {index + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .delay-0 {
          transition-delay: 0ms;
        }

        .delay-200 {
          transition-delay: 200ms;
        }

        .delay-400 {
          transition-delay: 400ms;
        }

        .delay-600 {
          transition-delay: 600ms;
        }
      `}</style>
    </section>
  );
}
