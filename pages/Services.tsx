import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Cloud, Users, Code, Lightbulb, GraduationCap, Activity } from 'lucide-react';
import BookingButton from '../components/BookingButton';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    { key: 'digital', icon: Cloud },
    { key: 'agile', icon: Users },
    { key: 'craft', icon: Code },
    { key: 'innovation', icon: Lightbulb },
    { key: 'training', icon: GraduationCap },
    { key: 'vibe', icon: Activity },
  ];

  const detailKeys = ['digital', 'agile', 'training', 'innovation'] as const;

  return (
    <>
      <SEO 
        title={t('nav.services')}
        description="Explore our services: Digital Transformation, Agile Coaching, Software Craftsmanship, Innovation Strategy, Training & Academy, Vibe Coding."
        canonical={window.location.origin + '/services'}
        jsonLd={[
          { "@context": "https://schema.org", "@type": "Service", "name": "Digital Transformation", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": window.location.origin + '/services/digital-transformation' },
          { "@context": "https://schema.org", "@type": "Service", "name": "Agile Coaching", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": window.location.origin + '/services/agile-coaching' },
          { "@context": "https://schema.org", "@type": "Service", "name": "Software Craftsmanship", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": window.location.origin + '/services/software-craftsmanship' },
          { "@context": "https://schema.org", "@type": "Service", "name": "Innovation Strategy", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": window.location.origin + '/services/innovation-strategy' },
          { "@context": "https://schema.org", "@type": "Service", "name": "Training & Academy", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": window.location.origin + '/services/training-academy' },
          { "@context": "https://schema.org", "@type": "Service", "name": "Vibe Coding Program", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": window.location.origin + '/services/vibe-coding' },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": window.location.origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": window.location.origin + '/services' } ] },
          { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
            { "@type": "Question", "name": "Which services do you offer?", "acceptedAnswer": { "@type": "Answer", "text": "Digital transformation, agile coaching, software craftsmanship, innovation strategy, training & academy, vibe coding." } },
            { "@type": "Question", "name": "Do you serve specific industries?", "acceptedAnswer": { "@type": "Answer", "text": "We work across finance, healthcare, retail, technology and more." } },
            { "@type": "Question", "name": "How can we start?", "acceptedAnswer": { "@type": "Answer", "text": "Book a consultation to discuss goals and tailor an approach." } },
            { "@type": "Question", "name": "Do you provide training?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with tailored curricula, hands-on labs and mentoring." } }
          ] }
        ]}
      />
      <div className="bg-slate-50 min-h-screen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-6">{t('services.title')}</h1>
            <p className="text-lg text-slate-600">{t('hero.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.key} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-secondary mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{t(`services.items.${service.key}.title`)}</h3>
                  <p className="text-slate-600 leading-relaxed">{t(`services.items.${service.key}.desc`)}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <BookingButton label={t('hero.cta_secondary')} className="inline-flex items-center text-secondary font-bold text-sm" />
                    <a href={`/services/${service.key === 'digital' ? 'digital-transformation' : service.key === 'agile' ? 'agile-coaching' : service.key === 'craft' ? 'software-craftsmanship' : service.key === 'innovation' ? 'innovation-strategy' : service.key === 'training' ? 'training-academy' : 'vibe-coding'}`} className="text-primary font-bold text-sm">{t('nav.services')}</a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">{t('services.details_title')}</h2>
            <p className="text-lg text-slate-600">{t('hero.subtitle')}</p>
          </div>

          <div className="space-y-10">
            {detailKeys.map((key) => {
              const iconMap: Record<string, React.ComponentType<any>> = {
                digital: Cloud,
                agile: Users,
                training: GraduationCap,
                innovation: Lightbulb,
              };
              const Icon = iconMap[key];
              const points = t(`services.items.${key}.points`, { returnObjects: true }) as string[];
              return (
                <section key={key} className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-1">
                    <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center text-secondary mb-4">
                      <Icon className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">{t(`services.items.${key}.title`)}</h3>
                    <p className="text-slate-600">{t(`services.items.${key}.desc`)}</p>
                  </div>
                  <div className="md:col-span-2">
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {Array.isArray(points) && points.map((p, idx) => (
                        <li key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-lg text-slate-700">{p}</li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      <BookingButton label={t('hero.cta_secondary')} className="inline-block bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors" />
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
