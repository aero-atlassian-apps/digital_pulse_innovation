import React from 'react';
import ROICalculator from '../../components/tools/ROICalculator';
import SEO from '../../components/SEO';
import { useTranslation } from 'react-i18next';
import { getROICalculatorStructuredData, renderStructuredData } from '../../src/utils/structuredData';

const ROICalculatorPage: React.FC = () => {
  const { t } = useTranslation();

  const handleLeadCapture = async (data: any) => {
    // In a real implementation, this would send data to your backend
    console.log('Lead captured:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  const structuredData = getROICalculatorStructuredData(window.location.href, t);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12">
      <SEO 
        title={t('tools.roi.seo_title', 'ROI Calculator - Digital Pulse Innovation')}
        description={t('tools.roi.seo_description', 'Calculate the potential return on investment from digital transformation services with our interactive ROI calculator.')}
        keywords={t('tools.roi.seo_keywords', 'ROI calculator, digital transformation ROI, business case, investment return, consulting ROI')}
      />
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: renderStructuredData(structuredData)
        }}
      />
      <ROICalculator onLeadCapture={handleLeadCapture} />
    </div>
  );
};

export default ROICalculatorPage;