import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';

const VibeCoding: React.FC = () => {
  const origin = window.location.origin;
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Vibe Coding Program", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/vibe-coding' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Vibe Coding Program", "item": origin + '/services/vibe-coding' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "What is Vibe Coding?", "acceptedAnswer": { "@type": "Answer", "text": "A culture and practice program to elevate engineering teams." } }, { "@type": "Question", "name": "How does it improve outcomes?", "acceptedAnswer": { "@type": "Answer", "text": "Mentoring, practice communities and growth paths drive quality and speed." } }, { "@type": "Question", "name": "Is it customizable?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, tailored to team maturity and organizational goals." } } ] };
  return (
    <>
      <SEO title="Vibe Coding Program" description="Cultivate technical excellence and a positive engineering culture." canonical={origin + '/services/vibe-coding'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">Vibe Coding Program</h1>
          <p className="text-slate-600 mb-8">Build a culture that sustains excellence and delivery performance.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">Overview</h2>
                <p className="text-slate-700">Culture, practices and mentorship to elevate teams.</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Approach</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Practice communities</li>
                  <li>Mentoring and pairing</li>
                  <li>Recognition and growth paths</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Deliverables</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Program charter</li>
                  <li>Capability growth plan</li>
                  <li>Outcomes dashboard</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Case Studies</h2>
                <p className="text-slate-700">Improved retention and throughput via culture and practice uplift.</p>
              </section>
            </div>
            <div className="md:col-span-1">
              <div className="p-6 bg-white rounded-xl border border-slate-100">
                <p className="text-slate-700 mb-4">Ready to elevate culture?</p>
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

export default VibeCoding;
