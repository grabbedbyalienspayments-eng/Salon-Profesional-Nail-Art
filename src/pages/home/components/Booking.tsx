
import { useState } from 'react';

export default function Booking() {
  const [formData, setFormData] = useState({
    nume: '',
    telefon: '',
    serviciu: '',
    preferintaStil: '',
    zi: '',
    ora: '',
    mesaj: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nume || !formData.telefon || !formData.serviciu || !formData.zi || !formData.ora) {
      alert('Vă rugăm să completați toate câmpurile obligatorii.');
      return;
    }

    if (formData.mesaj.length > 500) {
      alert('Mesajul nu poate depăși 500 de caractere.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d4aulu7hkbdsb76v6tdg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          nume: '',
          telefon: '',
          serviciu: '',
          preferintaStil: '',
          zi: '',
          ora: '',
          mesaj: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="programari" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0E0E0E] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Rezervă o programare
          </h2>
          <p className="text-[#F2C7DA] text-lg max-w-2xl mx-auto">
            Completează formularul și te vom contacta pentru confirmare
          </p>
        </div>

        <form
          id="booking-form"
          data-readdy-form
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#F2C7DA]/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="nume" className="block text-white font-semibold mb-2">
                Nume complet *
              </label>
              <input
                type="text"
                id="nume"
                name="nume"
                value={formData.nume}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-[#F2C7DA]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F5C84C] transition-colors"
                placeholder="Introduceți numele dvs."
              />
            </div>

            <div>
              <label htmlFor="telefon" className="block text-white font-semibold mb-2">
                Telefon *
              </label>
              <input
                type="tel"
                id="telefon"
                name="telefon"
                value={formData.telefon}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-[#F2C7DA]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F5C84C] transition-colors"
                placeholder="07XX XXX XXX"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="serviciu" className="block text-white font-semibold mb-2">
              Serviciu dorit *
            </label>
            <select
              id="serviciu"
              name="serviciu"
              value={formData.serviciu}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 pr-8 bg-white/10 border border-[#F2C7DA]/30 rounded-lg text-white focus:outline-none focus:border-[#F5C84C] transition-colors appearance-none cursor-pointer"
              style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23F2C7DA%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.7rem center', backgroundSize: '1.5em 1.5em' }}
            >
              <option value="" style={{ color: '#000000' }}>Selectați serviciul</option>
              <option value="Manichiură clasică" style={{ color: '#000000' }}>Manichiură clasică</option>
              <option value="Manichiură gel & acryl" style={{ color: '#000000' }}>Manichiură gel & acryl</option>
              <option value="Pedichiură SPA" style={{ color: '#000000' }}>Pedichiură SPA</option>
              <option value="Nail Art avansat" style={{ color: '#000000' }}>Nail Art avansat</option>
              <option value="Întărire cu rubber base" style={{ color: '#000000' }}>Întărire cu rubber base</option>
              <option value="Îngrijire cuticule & tratamente" style={{ color: '#000000' }}>Îngrijire cuticule & tratamente</option>
              <option value="Pachet Essentials" style={{ color: '#000000' }}>Pachet Essentials</option>
              <option value="Pachet Beauty Pro" style={{ color: '#000000' }}>Pachet Beauty Pro</option>
              <option value="Pachet Luxury Glam" style={{ color: '#000000' }}>Pachet Luxury Glam</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="preferintaStil" className="block text-white font-semibold mb-2">
              Preferință stil (opțional)
            </label>
            <input
              type="text"
              id="preferintaStil"
              name="preferintaStil"
              value={formData.preferintaStil}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-[#F2C7DA]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F5C84C] transition-colors"
              placeholder="Ex: French, ombré, culori pastel..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="zi" className="block text-white font-semibold mb-2">
                Zi preferată *
              </label>
              <input
                type="date"
                id="zi"
                name="zi"
                value={formData.zi}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-[#F2C7DA]/30 rounded-lg text-white focus:outline-none focus:border-[#F5C84C] transition-colors cursor-pointer"
              />
            </div>

            <div>
              <label htmlFor="ora" className="block text-white font-semibold mb-2">
                Ora preferată *
              </label>
              <input
                type="time"
                id="ora"
                name="ora"
                value={formData.ora}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-[#F2C7DA]/30 rounded-lg text-white focus:outline-none focus:border-[#F5C84C] transition-colors cursor-pointer"
              />
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="mesaj" className="block text-white font-semibold mb-2">
              Mesaj suplimentar (max 500 caractere)
            </label>
            <textarea
              id="mesaj"
              name="mesaj"
              value={formData.mesaj}
              onChange={handleChange}
              maxLength={500}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-[#F2C7DA]/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F5C84C] transition-colors resize-none"
              placeholder="Detalii suplimentare despre programare..."
            ></textarea>
            <div className="text-right text-sm text-gray-400 mt-1">
              {formData.mesaj.length}/500 caractere
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-gradient-to-r from-[#F5C84C] to-[#F2C7DA] text-[#0E0E0E] font-bold text-lg rounded-full hover:shadow-[0_0_30px_rgba(245,200,76,0.6)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isSubmitting ? 'Se trimite...' : 'Trimite programarea'}
          </button>

          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
              <i className="ri-checkbox-circle-line text-2xl mr-2"></i>
              Programarea ta a fost trimisă cu succes! Te vom contacta în curând pentru confirmare.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
              <i className="ri-error-warning-line text-2xl mr-2"></i>
              A apărut o eroare. Vă rugăm să încercați din nou sau să ne contactați telefonic.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
