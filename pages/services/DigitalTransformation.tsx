import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';
import { useTranslation } from 'react-i18next';

const DigitalTransformation: React.FC = () => {
  const origin = window.location.origin;
  const { t } = useTranslation();
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Digital Transformation", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/digital-transformation' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Digital Transformation", "item": origin + '/services/digital-transformation' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "What outcomes can we expect?", "acceptedAnswer": { "@type": "Answer", "text": "Improved time-to-market, reduced operational waste and higher adoption." } }, { "@type": "Question", "name": "How long does a typical engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 8–12 weeks for an initial transformation wave." } }, { "@type": "Question", "name": "Which industries do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "Finance, healthcare, retail, technology and more." } } ] };
  return (
    <>
      <SEO title={t('services.items.digital.title')} description={t('services.items.digital.desc')} canonical={origin + '/services/digital-transformation'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">{t('services.items.digital.title')}</h1>
          <p className="text-slate-600 mb-8">{t('services.items.digital.desc')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.overview')}</h2>
                <p className="text-slate-700">{t('services.items.digital.overview')}</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.approach')}</h2>
                <ul className="space-y-2 text-slate-700">
                  {t('services.items.digital.points', { returnObjects: true }).map((p: string, idx: number) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.deliverables')}</h2>
                <ul className="space-y-2 text-slate-700">
                  {t('services.items.digital.deliverables', { returnObjects: true }).map((p: string, idx: number) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.case_studies')}</h2>
                <p className="text-slate-700">{t('sections.case_studies_desc')}</p>
              </section>
            </div>
            <div className="md:col-span-1">
              <div className="p-6 bg-white rounded-xl border border-slate-100">
                <p className="text-slate-700 mb-4">{t('cta.ready_discuss')}</p>
                <BookingButton className="inline-block bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors" />
                <a href="/contact" className="mt-3 inline-block text-secondary font-bold text-sm">{t('cta.download_methodology')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformation;
