import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const Clients: React.FC = () => {
  const { t } = useTranslation();

  // Mapping provided logos to the target clients requested
  const clientLogos = [
    { name: "Capgemini France", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDzlX8F1RdCfINcyvuY2M5dhyTfXA9-wSPVnL6O4iAGlWbzVz43uXHewg8Yaktor1TC1puNRkD9ZeMbOqTP91DNNVkEjMYNy4XtzMlzG9SqEV-5v_FA8eT8T6R64QVaGFarSB1IuCpIe-xttLOjvacnwhYNzgAfsUBVR8RAcQs5UNR5KhAOSXQvzO_dCtuor7qq0wwN4fMKZQlwy2zLROss_zv5_hXymMviXR_glfF3R74S1HYP_8Vw0tUXzp60ZhxrwDKMM3_Xzfk" },
    { name: "Amadeus", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmyNSl96TWNpuqp3mJbBZAg_NfcK3oHAwi3HFynB27xBtjf1KbxT6_eu1UcRyJyzJ8gVsA3q_eJy6MESi96zIRPxR_7f8AFCvKh1TBpMWJpbI9sC2Rnmdnqt52q39qKWJg4vSi2Gchr7e2cwcqvz7b0xtb35K1ztMmQyoMnWvo4gC_jXQVT8pCjPuPQmM5KvLS1sHI-cqR0jkaDk_ot6aFc4Nz5i6T8v_gy2-mWiyrgmV5g8dv2KcKTPu5OxEO4cm7om17UCU_Tx4" },
    { name: "SwissCaution", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAosjVxEbXxXVy_f26GF-94OHiDMQQFC5eE0Wv4Gsea7f3M550EtXFIlchURHG0ASqKJ1-885Y9utH8bI4DGHzU-5ejnpF3exmtB7mlO1Dh4uRqgT5UANB5U39Hdmnmuda1hWaDkY5AVX7pVHGF5TemCqTtn4RXN4utfxnFkKA_1XwYshEmNyxLvtWO8wmR18PGbGrXmjaZXN5W4z7mP_uXcrSd1ebggGO8xScAKIaj-z-P5tzHV4NqtrqXuzLNTIaj_dSvLC1FlTg" },
    { name: "Axel Springer", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY-QNO6H22eSf4aQDA_VwafcZmpIE3SlKOyH1sJl89KqXnQouT4VCrd4xFHOSE-jx5YB7auzzlP0bdDxxZqeknYIsGHVwcPDjD4xGtv0HYWQu9GxwlfOivBfanPJ7fT47WibAC9gPVt_FthfreB6E4Lk8tt32YJ5fKjpRdRDESK5WjZ9vHoyW9qiiAW7xZdxk-wsaZJHL8fLW7Ih4RMva5h5LEVLN7iCq_h7NR-dgiHhyckh2xnLdHLlL3wLWuXApAkvnpvWuSkj8" },
    { name: "Wemanity", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLcR-0bdMSs-hf15uAZh22UlBRCrlryKFa-FopmRgUVVkIJsLM0kkDEtUuOsFumf6RXmuEhzRieSRlQxUjJaN3Jp5xUMd6j-vTSVxk1N4kov6j53tnRV1cZ5D1YkDLRoOMdyyxJTpjW9wGMT_ydPnpiqummVp3t4sv3WQpoEhfDEs0-kx7_g1wHcByqnHNreoCEL8N6rsSCAgj-IXh4qsmG5M5cWD3qJHQRQKnXx6bfqk7QOM9Y0VPmNGtp4UxumAhCiP1PtXug1w" },
    { name: "ETSI", logo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgKvy7uIwXPF2QqLI1mQ3QQMOmy4oj5L5t01MqikUDp3zW5WaXctckn-uVOLQJWiIKkW0t5paCdba89Cinr8jrlzjW-I4f7g2kcFqfOA3PmxeGnNL3Aq3PEplkHixA0K-lJQFC2hxZnBjvHbjA7IyyBC6CyQa8hI_oqM6IiIVRtNDtR_lHlxYMq9fc6weB_VTm5Gv-vuxgN7Gh1RcSsZb_edAu_mBa0FiEawbxQF2ggByHKxZ87myGfymbFe2Mi18RwJKhiKKrAvQ" },
  ];

  return (
    <>
      <SEO 
        title={t('nav.clients')}
        description="See how Digital Pulse Innovation has helped industry leaders like Capgemini and Amadeus."
      />
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-display font-black text-primary mb-6">
              {t('clients.track_record')}
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              {t('clients.track_desc')}
            </p>
          </div>

          {/* Logos Grid */}
          <div className="mb-24">
            <h2 className="text-center text-sm font-bold uppercase tracking-widest text-slate-400 mb-12">
              {t('clients.title')}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center">
               {clientLogos.map((client, i) => (
                 <div key={i} className="flex flex-col items-center justify-center gap-4 group">
                    <div className="w-full h-24 flex items-center justify-center p-6 bg-slate-50 rounded-xl transition-all group-hover:bg-white group-hover:shadow-lg border border-transparent group-hover:border-slate-100">
                      <img 
                        src={client.logo} 
                        alt={client.name}
                        className="max-h-12 w-auto grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs font-bold text-slate-400 group-hover:text-primary transition-colors">{client.name}</span>
                 </div>
               ))}
            </div>
            
            {/* Placeholders for others */}
            <div className="mt-16 text-center">
                <p className="text-sm text-slate-400 mb-6">and many more...</p>
                <div className="flex flex-wrap justify-center gap-6 opacity-30">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-16 w-32 bg-slate-200 rounded-lg animate-pulse"></div>
                    ))}
                </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="border-t border-slate-100 pt-20">
            <h2 className="text-3xl font-display font-bold text-center text-primary mb-16">{t('clients.case_studies')}</h2>
            
            <div className="space-y-16">
              {/* Case 1 */}
              <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Finance Sector</p>
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Agile Transformation for a Global Enterprise</h3>
                      <div className="prose prose-lg text-slate-600 mb-8">
                          <p>A Fortune 500 company in the financial sector was struggling with slow product delivery cycles. We implemented a comprehensive Agile transformation strategy that realigned their engineering culture.</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-sm">Agile Coaching</span>
                          <span className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-sm">Vibe Coding</span>
                      </div>
                  </div>
                  <div className="lg:w-80 bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-lg border border-slate-100">
                      <span className="text-6xl font-black text-secondary mb-2 tracking-tight">40%</span>
                      <span className="font-bold text-primary text-lg leading-tight">{t('clients.metrics.market')}</span>
                  </div>
              </div>

              {/* Case 2 */}
              <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                         <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                         <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">SaaS Scale-up</p>
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Software Craftsmanship for a Tech Startup</h3>
                      <div className="prose prose-lg text-slate-600 mb-8">
                          <p>We embedded with the client's team, introducing modern development practices like TDD, pair programming, and continuous integration. This dramatically reduced technical debt and improved developer happiness.</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-sm">Software Craftsmanship</span>
                          <span className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-sm">TDD</span>
                      </div>
                  </div>
                  <div className="lg:w-80 bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-lg border border-slate-100">
                      <span className="text-6xl font-black text-accent mb-2 tracking-tight">75%</span>
                      <span className="font-bold text-primary text-lg leading-tight">{t('clients.metrics.bugs')}</span>
                  </div>
              </div>

              {/* Case 3 */}
              <div className="bg-slate-50 rounded-[2rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 shadow-sm border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex-1 flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <p className="text-slate-500 font-bold text-sm uppercase tracking-wider">Retail Giant</p>
                      </div>
                      <h3 className="text-3xl font-bold text-primary mb-4">Digital Product Innovation</h3>
                      <div className="prose prose-lg text-slate-600 mb-8">
                          <p>Launching a new digital service to capture a new market segment. We handled the ideation, prototyping, and MVP development, resulting in a product that users love.</p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                          <span className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-sm">Innovation</span>
                          <span className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-full text-sm font-bold shadow-sm">Product Design</span>
                      </div>
                  </div>
                  <div className="lg:w-80 bg-white rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-lg border border-slate-100">
                      <span className="text-6xl font-black text-secondary mb-2 tracking-tight">150%</span>
                      <span className="font-bold text-primary text-lg leading-tight">{t('clients.metrics.adoption')}</span>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;