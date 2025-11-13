
import { useEffect, useRef, useState } from 'react';

export default function WhyUs() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ sets: 0, years: 0, rating: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounts({
        sets: Math.floor(3000 * progress),
        years: Math.floor(10 * progress),
        rating: Math.min(5.0, (5.0 * progress))
      });

      if (currentStep >= steps) {
        clearInterval(interval);
        setCounts({ sets: 3000, years: 10, rating: 5.0 });
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [isVisible]);

  const pillars = [
    {
      icon: 'ri-shield-check-fill',
      title: 'Precizie & sterilizare 100%',
      description: 'Standarde înalte de igienă și sterilizare pentru siguranța ta completă'
    },
    {
      icon: 'ri-flask-fill',
      title: 'Produse premium profesionale',
      description: 'Folosim doar branduri de top recunoscute internațional pentru rezultate impecabile'
    },
    {
      icon: 'ri-sparkling-fill',
      title: 'Durabilitate & estetică superioară',
      description: 'Tehnici avansate care garantează unghii frumoase pentru săptămâni întregi'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            De ce să ne alegi
          </h2>
          <p className="text-[#F2C7DA] text-lg max-w-2xl mx-auto">
            Excelență, profesionalism și pasiune în fiecare detaliu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-[#F2C7DA]/20 hover:border-[#F5C84C] transition-all duration-500 hover:scale-105"
            >
              <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-gradient-to-br from-[#F5C84C] to-[#F2C7DA] rounded-full">
                <i className={`${pillar.icon} text-4xl text-[#0E0E0E]`}></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                {pillar.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-gradient-to-br from-[#F2C7DA]/10 to-[#F5C84C]/10 rounded-2xl border border-[#F5C84C]/30">
            <div className="text-5xl md:text-6xl font-bold text-[#F5C84C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {counts.sets.toLocaleString()}+
            </div>
            <div className="text-white text-lg">seturi realizate</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-[#F2C7DA]/10 to-[#F5C84C]/10 rounded-2xl border border-[#F5C84C]/30">
            <div className="text-5xl md:text-6xl font-bold text-[#F5C84C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {counts.years}+
            </div>
            <div className="text-white text-lg">ani experiență</div>
          </div>

          <div className="text-center p-8 bg-gradient-to-br from-[#F2C7DA]/10 to-[#F5C84C]/10 rounded-2xl border border-[#F5C84C]/30">
            <div className="text-5xl md:text-6xl font-bold text-[#F5C84C] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              {counts.rating.toFixed(1)}
            </div>
            <div className="text-white text-lg flex items-center justify-center gap-2">
              Rating
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <i key={star} className="ri-star-fill text-[#F5C84C]"></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
