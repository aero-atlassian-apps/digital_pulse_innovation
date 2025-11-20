import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { ArrowRight, Zap, Users, Code, Award, Activity, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookingButton from '../components/BookingButton';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    { icon: <Zap className="w-8 h-8 text-secondary" />, key: 'digital' },
    { icon: <Users className="w-8 h-8 text-secondary" />, key: 'agile' },
    { icon: <Code className="w-8 h-8 text-secondary" />, key: 'craft' },
    { icon: <Award className="w-8 h-8 text-secondary" />, key: 'vibe' },
  ];

  const clients = [
    "Capgemini France", "Amadeus", "SwissCaution", "Axel Springer", "Wemanity", "ETSI"
  ];

  return (
    <>
      <SEO 
        title={t('nav.home')}
        description="Digital Pulse Innovation - Driving Innovation, Transforming Business through software craftsmanship and agile coaching."
      />
      
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-black tracking-tight text-primary mb-8 leading-[1.1]">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-primary hover:bg-secondary transition-all shadow-xl hover:-translate-y-1">
                {t('hero.cta_primary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <BookingButton label={t('hero.cta_secondary')} className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-primary bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-all" />
            </div>
          </div>
        </div>
        
        {/* Abstract BG Decoration */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200 rounded-full blur-3xl"></div>
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-200 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Client Ticker */}
      <section className="py-10 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 overflow-hidden">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">{t('clients.title')}</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {clients.map((client, idx) => (
                    <span key={idx} className="text-xl md:text-2xl font-display font-bold text-slate-700">{client}</span>
                ))}
            </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                    <div key={feature.key} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                        <div className="mb-6 p-4 bg-white rounded-xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">{t(`services.items.${feature.key}.title`)}</h3>
                        <p className="text-slate-600 leading-relaxed">{t(`services.items.${feature.key}.desc`)}</p>
                        <Link to="/services" className="inline-flex items-center text-secondary font-bold mt-4 group-hover:translate-x-2 transition-transform">
                            Learn More <ArrowRight className="ml-1 w-4 h-4" />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">{t('propositions.title')}</h2>
            <p className="text-lg text-slate-600">{t('propositions.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{t('propositions.results.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('propositions.results.desc')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{t('propositions.performance.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('propositions.performance.desc')}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-secondary mb-6">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">{t('propositions.client.title')}</h3>
              <p className="text-slate-600 leading-relaxed">{t('propositions.client.desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{t('clients.metrics.market')}</p>
              <p className="text-3xl font-display font-bold text-primary">{t('metrics.values.market')}</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{t('clients.metrics.bugs')}</p>
              <p className="text-3xl font-display font-bold text-primary">{t('metrics.values.bugs')}</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-100">
              <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-2">{t('clients.metrics.adoption')}</p>
              <p className="text-3xl font-display font-bold text-primary">{t('metrics.values.adoption')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">{t('contact.title')}</h2>
              <p className="text-xl text-slate-300 mb-10">{t('contact.subtitle')}</p>
              <BookingButton label={t('hero.cta_secondary')} className="inline-block bg-accent text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors" />
          </div>
      </section>
    </>
  );
};

export default Home;
