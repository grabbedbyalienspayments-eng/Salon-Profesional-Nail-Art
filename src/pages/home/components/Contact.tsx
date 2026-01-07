export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contactează-ne
          </h2>
          <p className="text-[#F2C7DA] text-lg max-w-2xl mx-auto">
            Suntem aici pentru tine. Vizitează-ne sau contactează-ne pentru orice întrebare
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F2C7DA]/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#F5C84C] to-[#F2C7DA] rounded-full flex-shrink-0">
                  <i className="ri-map-pin-line text-2xl text-[#0E0E0E]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Adresa salonului</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Strada Frumuseții nr. 25<br />
                    Sector 1, București 010101<br />
                    România
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F2C7DA]/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#F5C84C] to-[#F2C7DA] rounded-full flex-shrink-0">
                  <i className="ri-time-line text-2xl text-[#0E0E0E]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Program de lucru</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Luni - Vineri: 10:00 - 20:00<br />
                    Sâmbătă: 10:00 - 18:00<br />
                    Duminică: Închis
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F2C7DA]/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#F5C84C] to-[#F2C7DA] rounded-full flex-shrink-0">
                  <i className="ri-phone-line text-2xl text-[#0E0E0E]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Telefon & Email</h3>
                  <p className="text-gray-300 leading-relaxed">
                    <a href="tel:+40700000000" className="hover:text-[#F5C84C] transition-colors">
                      070 000 000
                    </a>
                    <br />
                    <a href="mailto:contact@contactshine.ro" className="hover:text-[#F5C84C] transition-colors">
                      contact@contactshine.ro
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-[#F2C7DA]/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 flex items-center justify-center bg-gradient-to-br from-[#F5C84C] to-[#F2C7DA] rounded-full flex-shrink-0">
                  <i className="ri-links-line text-2xl text-[#0E0E0E]"></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Social Media</h3>
                  <div className="flex gap-4">
                    <a
                      href="/"
                      className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-facebook-fill text-xl text-white"></i>
                    </a>
                    <a
                      href="/"
                      className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-instagram-fill text-xl text-white"></i>
                    </a>
                    <a
                      href="/"
                      className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300 cursor-pointer"
                    >
                      <i className="ri-tiktok-fill text-xl text-white"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#F2C7DA]/20 h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8476838486845!2d26.096306315744384!3d44.43925997910158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2sBucharest%2C%20Romania!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația Shine & Shape Nails Studio"
            ></iframe>
          </div>
        </div>
      </div>

      <a
        href="https://wa.me/40700000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 flex items-center justify-center bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all duration-300 z-40 cursor-pointer group"
      >
        <i className="ri-whatsapp-fill text-3xl text-white group-hover:scale-110 transition-transform duration-300"></i>
      </a>
    </section>
  );
}
