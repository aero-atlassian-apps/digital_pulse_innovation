import React from 'react';
import { Helmet } from 'react-helmet-async';
import i18n from '../i18n';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  jsonLd?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords, canonical, jsonLd }) => {
  return (
    <Helmet>
      <title>{title} | Digital Pulse Innovation</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={{ en: 'en_US', fr: 'fr_FR', es: 'es_ES', ar: 'ar_AR' }[i18n.language as 'en'|'fr'|'es'|'ar'] || 'en_US'} />
      <meta property="og:locale:alternate" content="fr_FR" />
      <meta property="og:locale:alternate" content="es_ES" />
      <meta property="og:locale:alternate" content="ar_AR" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {canonical && <link rel="canonical" href={canonical} />}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
