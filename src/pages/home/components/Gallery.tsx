
export default function Gallery() {
  const images = [
    {
      url: 'https://readdy.ai/api/search-image?query=Professional%20gel%20manicure%20with%20soft%20pink%20and%20nude%20tones%2C%20elegant%20almond-shaped%20nails%20with%20glossy%20finish%20on%20feminine%20hands%2C%20luxury%20nail%20salon%20work%20with%20perfect%20precision%2C%20simple%20clean%20white%20background%20highlighting%20the%20beautiful%20manicured%20nails%2C%20premium%20beauty%20treatment%20with%20smooth%20application%20and%20natural%20look&width=400&height=500&seq=gallery-1-new&orientation=portrait',
      title: 'Gel Nails Pink Nude'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Luxury%20French%20manicure%20with%20gold%20accent%20line%2C%20classic%20elegant%20white%20tips%20on%20natural%20pink%20base%2C%20professional%20nail%20art%20on%20well-groomed%20hands%2C%20simple%20minimalist%20background%2C%20high-end%20beauty%20treatment%20with%20perfect%20precision%20and%20glossy%20finish&width=400&height=300&seq=gallery-2&orientation=landscape',
      title: 'French Luxury'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Marble%20nail%20art%20design%20in%20pink%20and%20gold%20tones%2C%20sophisticated%20abstract%20patterns%20with%20metallic%20accents%2C%20professional%20gel%20manicure%20on%20elegant%20hands%2C%20clean%20simple%20background%2C%20luxury%20beauty%20aesthetic%20with%20shimmer%20effects%20and%20premium%20finish&width=400&height=500&seq=gallery-3&orientation=portrait',
      title: 'Marble Art Pink-Gold'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Luxury%20pedicure%20SPA%20treatment%20with%20scented%20candles%20and%20rose%20petals%2C%20perfectly%20polished%20toenails%20in%20soft%20pink%2C%20relaxing%20spa%20atmosphere%20with%20warm%20ambient%20lighting%2C%20simple%20elegant%20background%2C%20professional%20beauty%20care%20with%20premium%20products%20and%20serene%20aesthetic&width=500&height=400&seq=gallery-4&orientation=landscape',
      title: 'Pedichiură SPA'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Metallic%20chrome%20nails%20in%20rose%20gold%20and%20silver%20tones%2C%20mirror-like%20reflective%20finish%20on%20almond-shaped%20nails%2C%20professional%20manicure%20on%20elegant%20hands%2C%20simple%20clean%20background%2C%20futuristic%20luxury%20beauty%20aesthetic%20with%20high-gloss%20premium%20finish&width=400&height=500&seq=gallery-5&orientation=portrait',
      title: 'Metallic Chrome'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Elegant%20ombr%C3%A9%20gradient%20nails%20from%20soft%20pink%20to%20champagne%20gold%2C%20smooth%20color%20transition%20on%20long%20almond%20nails%2C%20professional%20gel%20manicure%20on%20feminine%20hands%2C%20simple%20minimalist%20background%2C%20luxury%20beauty%20treatment%20with%20glossy%20premium%20finish&width=400&height=300&seq=gallery-6&orientation=landscape',
      title: 'Ombré Elegant'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Delicate%20floral%20nail%20art%20with%20tiny%20pink%20roses%20and%20gold%20leaf%20accents%2C%20romantic%20feminine%20design%20on%20nude%20base%2C%20professional%20detailed%20manicure%20on%20elegant%20hands%2C%20simple%20clean%20background%2C%20luxury%20beauty%20aesthetic%20with%20artistic%20precision%20and%20glossy%20finish&width=400&height=500&seq=gallery-7&orientation=portrait',
      title: 'Floral Design'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Elegant%20crystal%20nail%20art%20with%20small%20diamonds%20and%20rhinestones%20on%20soft%20pink%20base%2C%20luxury%20manicure%20with%20sparkling%20gems%20on%20short%20square%20nails%2C%20professional%20beauty%20treatment%20on%20feminine%20hands%20showing%20only%20fingertips%2C%20simple%20white%20background%2C%20premium%20aesthetic%20with%20brilliant%20shine%20and%20delicate%20sparkle&width=500&height=400&seq=gallery-8-new&orientation=landscape',
      title: 'Crystal Elegance'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Minimalist%20geometric%20nail%20art%20in%20pink%20and%20gold%20lines%2C%20modern%20abstract%20design%20on%20short%20square%20nails%2C%20professional%20manicure%20on%20well-groomed%20hands%2C%20simple%20clean%20background%2C%20contemporary%20luxury%20beauty%20aesthetic%20with%20matte%20and%20glossy%20finish&width=400&height=500&seq=gallery-9&orientation=portrait',
      title: 'Geometric Modern'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Classic%20red%20gel%20nails%20with%20glossy%20finish%2C%20timeless%20elegant%20manicure%20on%20almond-shaped%20nails%2C%20professional%20beauty%20treatment%20on%20feminine%20hands%2C%20simple%20minimalist%20background%2C%20luxury%20salon%20aesthetic%20with%20perfect%20precision%20and%20vibrant%20color&width=400&height=300&seq=gallery-10&orientation=landscape',
      title: 'Classic Red'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Soft%20lavender%20and%20purple%20gradient%20nails%20with%20subtle%20silver%20glitter%20accents%2C%20dreamy%20pastel%20manicure%20on%20oval-shaped%20nails%2C%20professional%20gel%20treatment%20on%20elegant%20hands%2C%20simple%20clean%20background%2C%20luxury%20beauty%20aesthetic%20with%20delicate%20shimmer%20and%20premium%20finish&width=400&height=500&seq=gallery-11-new&orientation=portrait',
      title: 'Lavender Dreams'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=Holographic%20nails%20with%20rainbow%20shimmer%20effect%20in%20pink%20and%20gold%20tones%2C%20futuristic%20iridescent%20finish%20on%20coffin-shaped%20nails%2C%20professional%20gel%20manicure%20on%20feminine%20hands%2C%20simple%20elegant%20background%2C%20luxury%20beauty%20aesthetic%20with%20magical%20light-reflecting%20finish&width=400&height=500&seq=gallery-12&orientation=portrait',
      title: 'Holographic Shimmer'
    }
  ];

  return (
    <section id="galerie" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Galeria noastră
          </h2>
          <p className="text-[#F2C7DA] text-lg max-w-2xl mx-auto">
            Descoperă creațiile noastre și inspiră-te pentru următoarea ta vizită
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/90 via-[#0E0E0E]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8">
                <span className="text-white text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Vezi stilul
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
