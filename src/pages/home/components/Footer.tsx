import { useState } from 'react';

export default function Footer() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const currentYear = new Date().getFullYear();

  const openModal = (modalName: string) => {
    setActiveModal(modalName);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = 'unset';
  };

  const modalContent = {
    termeni: {
      title: 'Termeni și Condiții',
      content: `
        <h3 class="text-2xl font-bold text-white mb-4">1. Acceptarea termenilor</h3>
        <p class="text-gray-300 mb-4">Prin accesarea și utilizarea serviciilor oferite de Shine & Shape Nails Studio, acceptați să fiți legat de acești Termeni și Condiții. Dacă nu sunteți de acord cu aceștia, vă rugăm să nu utilizați serviciile noastre.</p>

        <h3 class="text-2xl font-bold text-white mb-4">2. Programări și rezervări</h3>
        <p class="text-gray-300 mb-4">Programările pot fi efectuate online, telefonic sau direct la salon. Clientul se obligă să anunțe cu minimum 24 de ore înainte în cazul în care dorește să anuleze sau să reprogrameze o întâlnire. În caz contrar, salonul își rezervă dreptul de a solicita o taxă de anulare de 50% din valoarea serviciului rezervat.</p>

        <h3 class="text-2xl font-bold text-white mb-4">3. Servicii și prețuri</h3>
        <p class="text-gray-300 mb-4">Prețurile afișate pe website și în salon sunt orientative și pot fi ajustate în funcție de complexitatea serviciului dorit. Prețul final va fi comunicat clientului înainte de începerea serviciului. Plata se efectuează la finalul serviciului, cash sau prin card.</p>

        <h3 class="text-2xl font-bold text-white mb-4">4. Politica de returnare</h3>
        <p class="text-gray-300 mb-4">În cazul în care clientul nu este mulțumit de serviciul primit, îl rugăm să ne contacteze imediat. Ne rezervăm dreptul de a oferi o retușare gratuită în termen de 7 zile de la efectuarea serviciului, în cazul în care problema este cauzată de execuție defectuoasă.</p>

        <h3 class="text-2xl font-bold text-white mb-4">5. Responsabilități</h3>
        <p class="text-gray-300 mb-4">Shine & Shape Nails Studio nu își asumă responsabilitatea pentru reacțiile alergice la produsele utilizate. Recomandăm clienților să ne informeze despre orice alergii cunoscute înainte de începerea serviciului. De asemenea, ne rezervăm dreptul de a refuza un serviciu dacă apreciem că starea unghiilor clientului necesită tratament medical.</p>

        <h3 class="text-2xl font-bold text-white mb-4">6. Modificări ale termenilor</h3>
        <p class="text-gray-300 mb-4">Shine & Shape Nails Studio își rezervă dreptul de a modifica acești Termeni și Condiții în orice moment, fără notificare prealabilă. Modificările vor intra în vigoare imediat după publicarea pe website.</p>
      `
    },
    confidentialitate: {
      title: 'Politica de Confidențialitate',
      content: `
        <h3 class="text-2xl font-bold text-white mb-4">1. Introducere</h3>
        <p class="text-gray-300 mb-4">Shine & Shape Nails Studio respectă confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația românească aplicabilă.</p>

        <h3 class="text-2xl font-bold text-white mb-4">2. Datele pe care le colectăm</h3>
        <p class="text-gray-300 mb-4">Colectăm următoarele categorii de date personale:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Nume și prenume</li>
          <li>Număr de telefon</li>
          <li>Adresă de email</li>
          <li>Istoricul programărilor și serviciilor efectuate</li>
          <li>Preferințe privind serviciile (dacă sunt comunicate)</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">3. Scopul prelucrării datelor</h3>
        <p class="text-gray-300 mb-4">Utilizăm datele dumneavoastră personale pentru:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Gestionarea programărilor și confirmarea acestora</li>
          <li>Comunicarea cu dumneavoastră legată de serviciile noastre</li>
          <li>Îmbunătățirea serviciilor oferite</li>
          <li>Trimiterea de oferte și promoții (doar cu consimțământul dumneavoastră explicit)</li>
          <li>Respectarea obligațiilor legale</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">4. Partajarea datelor</h3>
        <p class="text-gray-300 mb-4">Nu vindem, nu închiriem și nu dezvăluim datele dumneavoastră personale unor terțe părți, cu excepția cazurilor în care:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Avem consimțământul dumneavoastră explicit</li>
          <li>Este necesar pentru furnizarea serviciilor (ex: procesatori de plăți)</li>
          <li>Suntem obligați prin lege</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">5. Drepturile dumneavoastră</h3>
        <p class="text-gray-300 mb-4">Conform GDPR, aveți următoarele drepturi:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Dreptul de acces la datele personale</li>
          <li>Dreptul de rectificare a datelor incorecte</li>
          <li>Dreptul de ștergere a datelor ("dreptul de a fi uitat")</li>
          <li>Dreptul de restricționare a prelucrării</li>
          <li>Dreptul la portabilitatea datelor</li>
          <li>Dreptul de opoziție față de prelucrare</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">6. Securitatea datelor</h3>
        <p class="text-gray-300 mb-4">Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră împotriva accesului neautorizat, pierderii sau distrugerii.</p>

        <h3 class="text-2xl font-bold text-white mb-4">7. Contact</h3>
        <p class="text-gray-300 mb-4">Pentru orice întrebări legate de prelucrarea datelor dumneavoastră, ne puteți contacta la: contact@contactshine.ro sau 070 000 000</p>
      `
    },
    gdpr: {
      title: 'GDPR - Protecția Datelor',
      content: `
        <h3 class="text-2xl font-bold text-white mb-4">Angajamentul nostru față de GDPR</h3>
        <p class="text-gray-300 mb-4">Shine & Shape Nails Studio este pe deplin conform cu Regulamentul General privind Protecția Datelor (GDPR - Regulamentul UE 2016/679) și cu legislația românească privind protecția datelor personale.</p>

        <h3 class="text-2xl font-bold text-white mb-4">1. Operatorul de date</h3>
        <p class="text-gray-300 mb-4">Operatorul de date personale este Shine & Shape Nails Studio, cu sediul în București, Strada Frumuseții nr. 25, Sector 1, 010101, România. Contact: contact@contactshine.ro, 070 000 000</p>

        <h3 class="text-2xl font-bold text-white mb-4">2. Temeiurile legale pentru prelucrare</h3>
        <p class="text-gray-300 mb-4">Prelucrăm datele dumneavoastră personale pe baza următoarelor temeiuri legale:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Executarea unui contract (programări și prestarea serviciilor)</li>
          <li>Consimțământul dumneavoastră (pentru marketing și comunicări promoționale)</li>
          <li>Interese legitime (îmbunătățirea serviciilor și securitatea salonului)</li>
          <li>Obligații legale (conformare fiscală și contabilă)</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">3. Perioada de stocare</h3>
        <p class="text-gray-300 mb-4">Păstrăm datele dumneavoastră personale doar pe perioada necesară îndeplinirii scopurilor pentru care au fost colectate:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Date de contact și programări: 3 ani de la ultima vizită</li>
          <li>Date financiare: conform legislației fiscale (minimum 10 ani)</li>
          <li>Consimțământ marketing: până la retragerea consimțământului</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">4. Transferuri internaționale</h3>
        <p class="text-gray-300 mb-4">Nu transferăm datele dumneavoastră în afara Uniunii Europene. Dacă acest lucru devine necesar, vom asigura garanții adecvate conform GDPR.</p>

        <h3 class="text-2xl font-bold text-white mb-4">5. Exercitarea drepturilor</h3>
        <p class="text-gray-300 mb-4">Pentru a vă exercita drepturile prevăzute de GDPR (acces, rectificare, ștergere, restricționare, portabilitate, opoziție), ne puteți contacta la:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Email: contact@contactshine.ro</li>
          <li>Telefon: 070 000 000</li>
          <li>Adresă: Strada Frumuseții nr. 25, Sector 1, București, 010101</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">6. Plângeri</h3>
        <p class="text-gray-300 mb-4">Dacă considerați că drepturile dumneavoastră nu sunt respectate, aveți dreptul de a depune o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP) din România.</p>

        <h3 class="text-2xl font-bold text-white mb-4">7. Minori</h3>
        <p class="text-gray-300 mb-4">Serviciile noastre nu sunt destinate minorilor sub 16 ani. Dacă descoperim că am colectat date personale de la un minor fără consimțământul părinților/tutorelui legal, vom șterge aceste informații.</p>

        <h3 class="text-2xl font-bold text-white mb-4">8. Actualizări</h3>
        <p class="text-gray-300 mb-4">Ne rezervăm dreptul de a actualiza această politică GDPR. Versiunea actualizată va fi publicată pe website-ul nostru cu indicarea datei ultimei modificări.</p>
      `
    },
    cookies: {
      title: 'Politica Cookies',
      content: `
        <h3 class="text-2xl font-bold text-white mb-4">Ce sunt cookie-urile?</h3>
        <p class="text-gray-300 mb-4">Cookie-urile sunt fișiere text de mici dimensiuni pe care website-ul nostru le stochează pe dispozitivul dumneavoastră (computer, telefon, tabletă) atunci când îl vizitați. Acestea ne ajută să vă oferim o experiență mai bună și să înțelegem cum este utilizat website-ul.</p>

        <h3 class="text-2xl font-bold text-white mb-4">Tipuri de cookie-uri utilizate</h3>
        
        <h4 class="text-xl font-bold text-white mb-3 mt-4">1. Cookie-uri esențiale (obligatorii)</h4>
        <p class="text-gray-300 mb-4">Aceste cookie-uri sunt necesare pentru funcționarea de bază a website-ului și nu pot fi dezactivate. Ele includ:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Cookie-uri de sesiune pentru navigare</li>
          <li>Cookie-uri pentru securitate</li>
          <li>Cookie-uri pentru funcționalități de bază (formulare, programări)</li>
        </ul>

        <h4 class="text-xl font-bold text-white mb-3 mt-4">2. Cookie-uri de performanță (opționale)</h4>
        <p class="text-gray-300 mb-4">Ne ajută să înțelegem cum interactionați cu website-ul nostru, colectând informații anonime despre:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Paginile vizitate</li>
          <li>Timpul petrecut pe site</li>
          <li>Sursa traficului</li>
        </ul>

        <h4 class="text-xl font-bold text-white mb-3 mt-4">3. Cookie-uri funcționale (opționale)</h4>
        <p class="text-gray-300 mb-4">Acestea ne permit să reținem preferințele dumneavoastră:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Limba preferată</li>
          <li>Setări de afișare</li>
          <li>Informații despre programări anterioare</li>
        </ul>

        <h4 class="text-xl font-bold text-white mb-3 mt-4">4. Cookie-uri de marketing (opționale)</h4>
        <p class="text-gray-300 mb-4">Utilizate pentru a vă arăta reclame relevante pe alte website-uri:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Retargeting și remarketing</li>
          <li>Publicitate personalizată</li>
          <li>Analiza eficienței campaniilor publicitare</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Cookie-uri terțe părți</h3>
        <p class="text-gray-300 mb-4">Website-ul nostru poate utiliza cookie-uri de la terțe părți:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Google Maps (pentru harta locației salonului)</li>
          <li>Google Analytics (pentru statistici de utilizare)</li>
          <li>Social Media Plugins (Facebook, Instagram, TikTok)</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Gestionarea cookie-urilor</h3>
        <p class="text-gray-300 mb-4">Puteți gestiona preferințele cookie-urilor în următoarele moduri:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Utilizând setările browserului dumneavoastră pentru a bloca sau șterge cookie-urile</li>
          <li>Modificând preferințele în banner-ul de cookie-uri de pe website</li>
          <li>Dezactivând cookie-urile opționale din setările contului</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Instrucțiuni pentru browsere populare</h3>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Google Chrome: Settings > Privacy and Security > Cookies and other site data</li>
          <li>Mozilla Firefox: Options > Privacy & Security > Cookies and Site Data</li>
          <li>Safari: Preferences > Privacy > Manage Website Data</li>
          <li>Microsoft Edge: Settings > Privacy, search, and services > Cookies and site data</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Consecințele respingerii cookie-urilor</h3>
        <p class="text-gray-300 mb-4">Dacă alegeți să dezactivați cookie-urile, este posibil ca unele funcționalități ale website-ului să nu funcționeze corespunzător, inclusiv:</p>
        <ul class="list-disc list-inside text-gray-300 mb-4 space-y-2">
          <li>Imposibilitatea de a vă autentifica</li>
          <li>Pierderea preferințelor salvate</li>
          <li>Experiență de navigare limitată</li>
        </ul>

        <h3 class="text-2xl font-bold text-white mb-4">Actualizări ale politicii</h3>
        <p class="text-gray-300 mb-4">Ne rezervăm dreptul de a actualiza această Politică de Cookie-uri. Vă recomandăm să o verificați periodic pentru a fi la curent cu orice modificări.</p>

        <h3 class="text-2xl font-bold text-white mb-4">Contact</h3>
        <p class="text-gray-300 mb-4">Pentru întrebări despre utilizarea cookie-urilor, ne puteți contacta la: contact@contactshine.ro sau 070 000 000</p>
      `
    }
  };

  return (
    <>
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
                  <button 
                    onClick={() => openModal('termeni')}
                    className="text-gray-400 hover:text-[#F5C84C] transition-colors text-left"
                  >
                    Termeni și Condiții
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('confidentialitate')}
                    className="text-gray-400 hover:text-[#F5C84C] transition-colors text-left"
                  >
                    Politica de Confidențialitate
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('gdpr')}
                    className="text-gray-400 hover:text-[#F5C84C] transition-colors text-left"
                  >
                    GDPR
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => openModal('cookies')}
                    className="text-gray-400 hover:text-[#F5C84C] transition-colors text-left"
                  >
                    Politica Cookies
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold text-white mb-4">Contact rapid</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <i className="ri-phone-line text-[#F5C84C]"></i>
                  <a href="tel:+40700000000" className="hover:text-[#F5C84C] transition-colors">
                    070 000 000
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-mail-line text-[#F5C84C]"></i>
                  <a href="mailto:contact@contactshine.ro" className="hover:text-[#F5C84C] transition-colors">
                    contact@contactshine.ro
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
              © {currentYear} Shine & Shape Nails Studio. Toate drepturile rezervate.
            </div>

            <div className="flex items-center gap-4">
              <a
                href="/"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-facebook-fill text-lg text-[#F5C84C] hover:text-[#0E0E0E]"></i>
              </a>
              <a
                href="/"
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300 cursor-pointer"
              >
                <i className="ri-instagram-fill text-lg text-[#F5C84C] hover:text-[#0E0E0E]"></i>
              </a>
              <a
                href="/"
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

      {/* Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-[#1a1a1a] border-2 border-[#F2C7DA]/30 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-[#1a1a1a] border-b border-[#F2C7DA]/20 p-6 flex justify-between items-center">
              <h2 
                className="text-3xl font-bold text-[#F2C7DA]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {modalContent[activeModal as keyof typeof modalContent].title}
              </h2>
              <button
                onClick={closeModal}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full hover:bg-[#F5C84C] transition-all duration-300"
              >
                <i className="ri-close-line text-2xl text-white"></i>
              </button>
            </div>
            
            <div 
              className="p-6 text-gray-300 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: modalContent[activeModal as keyof typeof modalContent].content 
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
