import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';

const SoftwareCraftsmanship: React.FC = () => {
  const origin = window.location.origin;
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Software Craftsmanship", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/software-craftsmanship' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Software Craftsmanship", "item": origin + '/services/software-craftsmanship' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Can you help refactor legacy systems?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, with safe refactoring, tests and incremental architecture improvements." } }, { "@type": "Question", "name": "Do you provide hands-on coaching?", "acceptedAnswer": { "@type": "Answer", "text": "We pair, run workshops and embed practices in delivery teams." } }, { "@type": "Question", "name": "How do you ensure quality?", "acceptedAnswer": { "@type": "Answer", "text": "Quality gates, CI/CD automation and clean code standards." } } ] };
  return (
    <>
      <SEO title="Software Craftsmanship" description="Build robust, scalable software with clean code principles." canonical={origin + '/services/software-craftsmanship'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">Software Craftsmanship</h1>
          <p className="text-slate-600 mb-8">Raise engineering standards and delivery quality.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">Overview</h2>
                <p className="text-slate-700">Clean code, testing, CI/CD and architecture practices.</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Approach</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Codebase audits and coaching</li>
                  <li>Hands-on pairing and workshops</li>
                  <li>Quality gates and automation</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Deliverables</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Improvement plan</li>
                  <li>Engineering playbook</li>
                  <li>Automation pipeline templates</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Case Studies</h2>
                <p className="text-slate-700">Stories of defect reduction and faster releases via improved practices.</p>
              </section>
            </div>
            <div className="md:col-span-1">
              <div className="p-6 bg-white rounded-xl border border-slate-100">
                <p className="text-slate-700 mb-4">Ready to elevate quality?</p>
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

export default SoftwareCraftsmanship;
