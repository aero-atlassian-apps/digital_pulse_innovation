import React from 'react';
import DigitalMaturityAssessment from '../../components/tools/DigitalMaturityAssessment';
import SEO from '../../components/SEO';
import { useTranslation } from 'react-i18next';
import { getMaturityAssessmentStructuredData, renderStructuredData } from '../../src/utils/structuredData';

const DigitalMaturityAssessmentPage: React.FC = () => {
  const { t } = useTranslation();

  const handleLeadCapture = async (data: any) => {
    // In a real implementation, this would send data to your backend
    console.log('Lead captured:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const structuredData = getMaturityAssessmentStructuredData(window.location.href, t);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <SEO 
        title={t('tools.assessment.seo_title', 'Digital Maturity Assessment - Digital Pulse Innovation')}
        description={t('tools.assessment.seo_description', 'Evaluate your organization\'s digital maturity across key dimensions with our comprehensive assessment tool.')}
        keywords={t('tools.assessment.seo_keywords', 'digital maturity assessment, digital transformation readiness, business assessment tool, digital strategy evaluation')}
      />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(structuredData)
        }}
        keywords={t('tools.assessment.seo_keywords', 'digital maturity assessment, digital transformation, maturity model, digital readiness')}
      />
      <DigitalMaturityAssessment onLeadCapture={handleLeadCapture} />
    </div>
  );
};

export default DigitalMaturityAssessmentPage;