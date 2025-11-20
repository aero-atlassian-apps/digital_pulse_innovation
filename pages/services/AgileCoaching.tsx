import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';

const AgileCoaching: React.FC = () => {
  const origin = window.location.origin;
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Agile Coaching", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/agile-coaching' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Agile Coaching", "item": origin + '/services/agile-coaching' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Do you coach leadership and teams?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we coach across levels to align outcomes and practices." } }, { "@type": "Question", "name": "How do you measure improvement?", "acceptedAnswer": { "@type": "Answer", "text": "Flow metrics, quality indicators and goal-driven KPIs." } }, { "@type": "Question", "name": "Can you help scale?", "acceptedAnswer": { "@type": "Answer", "text": "We guide sustainable scaling tailored to context." } } ] };
  return (
    <>
      <SEO title="Agile Coaching" description="Enhance productivity and deliver value faster with expert coaching." canonical={origin + '/services/agile-coaching'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">Agile Coaching</h1>
          <p className="text-slate-600 mb-8">Elevate team performance and delivery flow.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">Overview</h2>
                <p className="text-slate-700">Team and leadership coaching, scaling practices sustainably.</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Approach</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Team assessments and coaching plans</li>
                  <li>Flow and quality improvements</li>
                  <li>Scaling frameworks guidance</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Deliverables</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Coaching charter</li>
                  <li>Metrics and improvement backlog</li>
                  <li>Leadership enablement plan</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Case Studies</h2>
                <p className="text-slate-700">Examples of throughput gains and improved quality across teams.</p>
              </section>
            </div>
            <div className="md:col-span-1">
              <div className="p-6 bg-white rounded-xl border border-slate-100">
                <p className="text-slate-700 mb-4">Ready to accelerate delivery?</p>
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

export default AgileCoaching;
