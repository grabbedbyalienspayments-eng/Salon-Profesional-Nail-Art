
export default function Footer() {
  return (
    <footer className="bg-[#0E0E0E] border-t border-[#F2C7DA]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl font-bold text-[#F2C7DA] mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Shine & Shape
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Eleganță în fiecare detaliu. Salonul tău de încredere pentru manichiură și pedichiură premium în București.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Link-uri utile</h4>
            <ul className="space-y-2">
              <li>
                <a href="/termeni-si-conditii" className="text-gray-400 hover:text-[#F5C84C] transition-colors">
                  Termeni și Condiții
                </a>
              </li>
              <li>
                <a href="/politica-de-confidentialitate" className="text-gray-400 hover:text-[#F5C84C] transition-colors">
                  Politica de Confidențialitate
                </a>
              </li>
              <li>
                <a href="/gdpr" className="text-gray-400 hover:text-[#F5C84C] transition-colors">
                  GDPR
                </a>
              </li>
              <li>
                <a href="/politica-cookies" className="text-gray-400 hover:text-[#F5C84C] transition-colors">
                  Politica Cookies
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact rapid</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <i className="ri-phone-line text-[#F5C84C]"></i>
                <a href="tel:+40721234567" className="hover:text-[#F5C84C] transition-colors">
                  +40 721 234 567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="ri-mail-line text-[#F5C84C]"></i>
                <a href="mailto:contact@shineandshape.ro" className="hover:text-[#F5C84C] transition-colors">
                  contact@shineandshape.ro
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-[#F5C84C] mt-1"></i>
                <span>Strada Frumuseții nr. 25, Sector 1, București</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#F2C7DA]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © 2025 Shine & Shape Nails Studio. Toate drepturile rezervate.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300 cursor-pointer"
            >
              <i className="ri-facebook-fill text-lg text-[#F5C84C] hover:text-[#0E0E0E]"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300 cursor-pointer"
            >
              <i className="ri-instagram-fill text-lg text-[#F5C84C] hover:text-[#0E0E0E]"></i>
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300 cursor-pointer"
            >
              <i className="ri-tiktok-fill text-lg text-[#F5C84C] hover:text-[#0E0E0E]"></i>
            </a>
          </div>

          <div className="text-gray-400 text-sm text-center md:text-right">
            Made by{' '}
            <a
              href="https://websiteon.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F5C84C] hover:text-[#F2C7DA] transition-colors font-semibold"
            >
              WebsiteON.ro
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
