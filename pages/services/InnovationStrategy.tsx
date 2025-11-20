import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';
import { useTranslation } from 'react-i18next';

const InnovationStrategy: React.FC = () => {
  const origin = window.location.origin;
  const { t } = useTranslation();
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Innovation Strategy", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/innovation-strategy' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Innovation Strategy", "item": origin + '/services/innovation-strategy' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "How do you validate ideas?", "acceptedAnswer": { "@type": "Answer", "text": "We run rapid prototyping and experiments to test hypotheses." } }, { "@type": "Question", "name": "What frameworks do you use?", "acceptedAnswer": { "@type": "Answer", "text": "Discovery, lean startup and portfolio governance tailored to context." } }, { "@type": "Question", "name": "Can you help build a pipeline of innovations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we shape an innovation backlog with prioritization and funding." } } ] };
  return (
    <>
      <SEO title={t('services.items.innovation.title')} description={t('services.items.innovation.desc')} canonical={origin + '/services/innovation-strategy'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">{t('services.items.innovation.title')}</h1>
          <p className="text-slate-600 mb-8">{t('services.items.innovation.desc')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.overview')}</h2>
                <p className="text-slate-700">{t('services.items.innovation.overview')}</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.approach')}</h2>
                <ul className="space-y-2 text-slate-700">
                  {t('services.items.innovation.points', { returnObjects: true }).map((p: string, idx: number) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.deliverables')}</h2>
                <ul className="space-y-2 text-slate-700">
                  {t('services.items.innovation.deliverables', { returnObjects: true }).map((p: string, idx: number) => (
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
                <p className="text-slate-700 mb-4">{t('cta.ready_growth')}</p>
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

export default InnovationStrategy;
