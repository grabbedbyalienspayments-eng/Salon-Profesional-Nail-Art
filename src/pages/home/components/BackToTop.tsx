
import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#F2C7DA] to-[#F5C84C] rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(242,199,218,0.6)] transition-all duration-300 z-40 cursor-pointer group"
        >
          <i className="ri-arrow-up-line text-2xl text-[#0E0E0E] group-hover:scale-110 transition-transform duration-300"></i>
        </button>
      )}
    </>
  );
}
