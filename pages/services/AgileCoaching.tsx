import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';
import { useTranslation } from 'react-i18next';

const AgileCoaching: React.FC = () => {
  const origin = window.location.origin;
  const { t } = useTranslation();
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Agile Coaching", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/agile-coaching' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Agile Coaching", "item": origin + '/services/agile-coaching' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Do you coach leadership and teams?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we coach across levels to align outcomes and practices." } }, { "@type": "Question", "name": "How do you measure improvement?", "acceptedAnswer": { "@type": "Answer", "text": "Flow metrics, quality indicators and goal-driven KPIs." } }, { "@type": "Question", "name": "Can you help scale?", "acceptedAnswer": { "@type": "Answer", "text": "We guide sustainable scaling tailored to context." } } ] };
  return (
    <>
      <SEO title={t('services.items.agile.title')} description={t('services.items.agile.desc')} canonical={origin + '/services/agile-coaching'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">{t('services.items.agile.title')}</h1>
          <p className="text-slate-600 mb-8">{t('services.items.agile.desc')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.overview')}</h2>
                <p className="text-slate-700">{t('services.items.agile.overview')}</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.approach')}</h2>
                <ul className="space-y-2 text-slate-700">
                  {t('services.items.agile.points', { returnObjects: true }).map((p: string, idx: number) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.deliverables')}</h2>
                <ul className="space-y-2 text-slate-700">
                  {t('services.items.agile.deliverables', { returnObjects: true }).map((p: string, idx: number) => (
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
                <p className="text-slate-700 mb-4">{t('cta.ready_accelerate')}</p>
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

export default AgileCoaching;
