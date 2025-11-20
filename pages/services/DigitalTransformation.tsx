import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';

const DigitalTransformation: React.FC = () => {
  const origin = window.location.origin;
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Digital Transformation", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/digital-transformation' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Digital Transformation", "item": origin + '/services/digital-transformation' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "What outcomes can we expect?", "acceptedAnswer": { "@type": "Answer", "text": "Improved time-to-market, reduced operational waste and higher adoption." } }, { "@type": "Question", "name": "How long does a typical engagement take?", "acceptedAnswer": { "@type": "Answer", "text": "Typically 8–12 weeks for an initial transformation wave." } }, { "@type": "Question", "name": "Which industries do you serve?", "acceptedAnswer": { "@type": "Answer", "text": "Finance, healthcare, retail, technology and more." } } ] };
  return (
    <>
      <SEO title="Digital Transformation" description="Modernize processes and leverage technology to stay ahead." canonical={origin + '/services/digital-transformation'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">Digital Transformation</h1>
          <p className="text-slate-600 mb-8">Modernize processes and leverage technology to stay ahead.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">Overview</h2>
                <p className="text-slate-700">We assess capabilities and define a roadmap that aligns strategy and execution.</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Approach</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Discovery and maturity assessment</li>
                  <li>Prioritized initiatives and change management</li>
                  <li>Delivery governance and value tracking</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Deliverables</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Transformation roadmap</li>
                  <li>Operating model recommendations</li>
                  <li>Implementation plan</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Case Studies</h2>
                <p className="text-slate-700">See how we accelerated delivery and adoption for leading enterprises.</p>
              </section>
            </div>
            <div className="md:col-span-1">
              <div className="p-6 bg-white rounded-xl border border-slate-100">
                <p className="text-slate-700 mb-4">Ready to discuss your goals?</p>
                <BookingButton label="Book Consultation" className="inline-block bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors" />
                <a href="/contact" className="mt-3 inline-block text-secondary font-bold text-sm">Download Methodology Guide</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalTransformation;
