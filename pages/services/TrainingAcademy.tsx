import React from 'react';
import SEO from '../../components/SEO';
import BookingButton from '../../components/BookingButton';

const TrainingAcademy: React.FC = () => {
  const origin = window.location.origin;
  const serviceLd = { "@context": "https://schema.org", "@type": "Service", "name": "Training & Academy", "provider": { "@type": "Organization", "name": "Digital Pulse Innovation" }, "serviceType": "Consulting", "areaServed": "Global", "url": origin + '/services/training-academy' };
  const breadcrumbLd = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [ { "@type": "ListItem", "position": 1, "name": "Home", "item": origin + '/' }, { "@type": "ListItem", "position": 2, "name": "Services", "item": origin + '/services' }, { "@type": "ListItem", "position": 3, "name": "Training & Academy", "item": origin + '/services/training-academy' } ] };
  const faqLd = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [ { "@type": "Question", "name": "Do you tailor curricula?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, programs are customized to team goals and context." } }, { "@type": "Question", "name": "Is training hands-on?", "acceptedAnswer": { "@type": "Answer", "text": "We focus on labs, mentoring and on-the-job coaching." } }, { "@type": "Question", "name": "How do you track capability growth?", "acceptedAnswer": { "@type": "Answer", "text": "Assessments, learning paths and practical outcomes tracking." } } ] };
  return (
    <>
      <SEO title="Training & Academy" description="Upskill teams with tailored curricula, hands-on labs and mentoring." canonical={origin + '/services/training-academy'} jsonLd={[serviceLd, breadcrumbLd, faqLd]} />
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="heading-2 text-primary mb-6">Training & Academy</h1>
          <p className="text-slate-600 mb-8">Tailored curricula, labs and mentoring to build capabilities.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <section>
                <h2 className="heading-3 text-primary mb-3">Overview</h2>
                <p className="text-slate-700">Practical programs aligned to business outcomes.</p>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Approach</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Competency assessments</li>
                  <li>Hands-on labs and mentoring</li>
                  <li>On-the-job coaching</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Deliverables</h2>
                <ul className="space-y-2 text-slate-700">
                  <li>Customized learning paths</li>
                  <li>Workshop materials</li>
                  <li>Capability reports</li>
                </ul>
              </section>
              <section>
                <h2 className="heading-3 text-primary mb-3">Case Studies</h2>
                <p className="text-slate-700">Capability uplift and faster onboarding through structured programs.</p>
              </section>
            </div>
            <div className="md:col-span-1">
              <div className="p-6 bg-white rounded-xl border border-slate-100">
                <p className="text-slate-700 mb-4">Ready to upskill your teams?</p>
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

export default TrainingAcademy;
