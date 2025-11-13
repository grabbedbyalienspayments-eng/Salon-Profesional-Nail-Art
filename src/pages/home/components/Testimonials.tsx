import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Maria Popescu',
      text: 'Cel mai bun salon de manichiură din București! Raluca este o adevărată artistă, iar unghiile mele arată impecabil de fiecare dată. Recomand cu încredere!',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20happy%20Romanian%20woman%20in%20her%2030s%20with%20brown%20hair%20and%20elegant%20appearance%2C%20warm%20genuine%20smile%2C%20modern%20beauty%20salon%20client%2C%20soft%20natural%20lighting%20with%20pink%20and%20gold%20tones%2C%20high-quality%20headshot%20photography&width=100&height=100&seq=testimonial-maria&orientation=squarish'
    },
    {
      name: 'Ana Ionescu',
      text: 'Atmosferă relaxantă, produse premium și rezultate care durează săptămâni întregi. Pedichiura SPA cu Andreea este o experiență de neuitat. Mă simt răsfățată de fiecare dată!',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20satisfied%20Romanian%20woman%20in%20her%2040s%20with%20blonde%20hair%20and%20refined%20style%2C%20confident%20smile%2C%20luxury%20beauty%20salon%20client%2C%20elegant%20lighting%20with%20warm%20tones%2C%20premium%20headshot%20photography&width=100&height=100&seq=testimonial-ana&orientation=squarish'
    },
    {
      name: 'Elena Dumitrescu',
      text: 'Am încercat multe saloane, dar aici am găsit perfecțiunea! Ioana este extrem de atentă la detalii, iar unghiile mele gel rezistă impecabil. Prețurile sunt corecte pentru calitatea oferită.',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20delighted%20Romanian%20woman%20in%20her%20late%2020s%20with%20dark%20hair%20and%20modern%20look%2C%20bright%20smile%2C%20beauty%20salon%20regular%20client%2C%20soft%20professional%20lighting%2C%20contemporary%20headshot%20photography&width=100&height=100&seq=testimonial-elena&orientation=squarish'
    },
    {
      name: 'Cristina Popa',
      text: 'Designurile personalizate sunt spectaculoase! Am primit atâtea complimente pentru nail art-ul realizat aici. Echipa este profesionistă și foarte prietenoasă. Merită fiecare leu!',
      rating: 5,
      avatar: 'https://readdy.ai/api/search-image?query=Professional%20portrait%20of%20cheerful%20Romanian%20woman%20in%20her%20early%2030s%20with%20red%20hair%20and%20stylish%20appearance%2C%20radiant%20smile%2C%20satisfied%20beauty%20client%2C%20elegant%20studio%20lighting%2C%20high-end%20portrait%20photography&width=100&height=100&seq=testimonial-cristina&orientation=squarish'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#1a1a1a] to-[#0E0E0E]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ce spun clientele noastre
          </h2>
          <p className="text-[#F2C7DA] text-lg">
            Mii de clienți mulțumiți care se întorc cu încredere
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#F2C7DA]/20">
                    <div className="flex gap-2 mb-6 justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-2xl text-[#F5C84C] animate-star"></i>
                      ))}
                    </div>

                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 text-center italic">
                      "{testimonial.text}"
                    </p>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-[#F5C84C]"
                      />
                      <div>
                        <div className="text-white font-bold text-lg">{testimonial.name}</div>
                        <div className="text-[#F2C7DA] text-sm">Client verificat</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border border-[#F2C7DA]/30 hover:bg-[#F2C7DA]/20 transition-all duration-300 text-white cursor-pointer"
          >
            <i className="ri-arrow-left-s-line text-2xl"></i>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-full border border-[#F2C7DA]/30 hover:bg-[#F2C7DA]/20 transition-all duration-300 text-white cursor-pointer"
          >
            <i className="ri-arrow-right-s-line text-2xl"></i>
          </button>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  index === currentIndex ? 'bg-[#F5C84C] w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes star {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }

        .animate-star {
          animation: star 2s ease-in-out infinite;
        }

        .animate-star:nth-child(2) {
          animation-delay: 0.2s;
        }

        .animate-star:nth-child(3) {
          animation-delay: 0.4s;
        }

        .animate-star:nth-child(4) {
          animation-delay: 0.6s;
        }

        .animate-star:nth-child(5) {
          animation-delay: 0.8s;
        }
      `}</style>
    </section>
  );
}
