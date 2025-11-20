import React from 'react';
import SEO from '../components/SEO';
import BookingButton from '../components/BookingButton';
import { useTranslation } from 'react-i18next';

const Resources: React.FC = () => {
  const origin = window.location.origin;
  const { t } = useTranslation();
  const jsonLd = [
    { "@context": "https://schema.org", "@type": "CollectionPage", "name": "Resources", "url": origin + '/resources' },
    { "@context": "https://schema.org", "@type": "ItemList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Methodology Guide" },
      { "@type": "ListItem", "position": 2, "name": "Case Studies" },
      { "@type": "ListItem", "position": 3, "name": "Whitepapers" }
    ]}
  ];
  return (
    <>
      <SEO title={t('nav.resources')} description={t('resources.subtitle')} canonical={origin + '/resources'} jsonLd={jsonLd} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">{t('nav.resources')}</h1>
          <p className="text-slate-600 mb-10">{t('resources.subtitle')}</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="heading-3 text-primary mb-2">{t('resources.items.methodology.title')}</h2>
              <p className="text-slate-700 mb-4">{t('resources.items.methodology.desc')}</p>
              <a href="/contact" className="inline-block text-secondary font-bold text-sm">{t('cta.download')}</a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="heading-3 text-primary mb-2">{t('resources.items.case_studies.title')}</h2>
              <p className="text-slate-700 mb-4">{t('resources.items.case_studies.desc')}</p>
              <a href="/clients" className="inline-block text-secondary font-bold text-sm">{t('cta.view')}</a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="heading-3 text-primary mb-2">{t('resources.items.whitepapers.title')}</h2>
              <p className="text-slate-700 mb-4">{t('resources.items.whitepapers.desc')}</p>
              <a href="/contact" className="inline-block text-secondary font-bold text-sm">{t('cta.get_access')}</a>
            </div>
          </div>
          <div className="mt-10">
            <BookingButton label={t('hero.cta_secondary')} className="inline-block bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
