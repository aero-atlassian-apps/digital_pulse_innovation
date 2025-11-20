import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';
import { useTranslation } from 'react-i18next';

const TrainingAcademy: React.FC = () => {
  const origin = window.location.origin;
  const { t } = useTranslation();
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Training & Academy", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/training-academy' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Training & Academy", "item": origin + '/services/training-academy' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Do you tailor curricula?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, programs are customized to team goals and context." } }, { "@type": "Question", "name": "Is training hands-on?", "acceptedAnswer": { "@type": "Answer", "text": "We focus on labs, mentoring and on-the-job coaching." } }, { "@type": "Question", "name": "How do you track capability growth?", "acceptedAnswer": { "@type": "Answer", "text": "Assessments, learning paths and practical outcomes tracking." } } ] };
  return (
    <>
      <SEO title={t('services.items.training.title')} description={t('services.items.training.desc')} canonical={origin + '/services/training-academy'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">{t('services.items.training.title')}</h1>
          <p className="text-slate-600 mb-8">{t('services.items.training.desc')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.overview')}</h2>
                <p className="text-slate-700">{t('services.items.training.overview')}</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.approach')}</h2>
                <ul className="space-y-2 text-slate-700">
                  {t('services.items.training.points', { returnObjects: true }).map((p: string, idx: number) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">{t('sections.deliverables')}</h2>
                <ul className="space-y-2 text-slate-700">
                  {t('services.items.training.deliverables', { returnObjects: true }).map((p: string, idx: number) => (
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
                <p className="text-slate-700 mb-4">{t('cta.ready_upskill')}</p>
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

export default TrainingAcademy;
