import React from 'react';
import SEO from '../components/SEO';
import BookingButton from '../components/BookingButton';

const Resources: React.FC = () => {
  const origin = window.location.origin;
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
      <SEO title="Resources" description="Methodology, case studies and whitepapers." canonical={origin + '/resources'} jsonLd={jsonLd} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">Resources</h1>
          <p className="text-slate-600 mb-10">Explore our methodology, case studies and whitepapers.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="heading-3 text-primary mb-2">Methodology Guide</h2>
              <p className="text-slate-700 mb-4">Understand our approach to transformation and delivery.</p>
              <a href="/contact" className="inline-block text-secondary font-bold text-sm">Download</a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="heading-3 text-primary mb-2">Case Studies</h2>
              <p className="text-slate-700 mb-4">In-depth examples across industries and challenges.</p>
              <a href="/clients" className="inline-block text-secondary font-bold text-sm">View</a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="heading-3 text-primary mb-2">Whitepapers</h2>
              <p className="text-slate-700 mb-4">Insights and playbooks from our consulting practice.</p>
              <a href="/contact" className="inline-block text-secondary font-bold text-sm">Get Access</a>
            </div>
          </div>
          <div className="mt-10">
            <BookingButton label="Schedule Free Consultation" className="inline-block bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
