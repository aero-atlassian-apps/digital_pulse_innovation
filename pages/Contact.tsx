import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.contact')}
        description="Contact Digital Pulse Innovation for your digital transformation needs."
      />
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Info */}
            <div>
                <h1 className="text-4xl md:text-5xl font-display font-black text-primary mb-6">{t('contact.title')}</h1>
                <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                    {t('contact.subtitle')}
                </p>

                <div className="space-y-8">
                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 shrink-0">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-1">{t('contact.info.office')}</h3>
                            <p className="text-slate-600">123 Innovation Drive, Tech City, 10101</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-teal-600 shrink-0">
                            <Mail className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-1">{t('contact.info.email')}</h3>
                            <p className="text-slate-600">contact@digitalpulse.io</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 shrink-0">
                            <Phone className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-primary mb-1">{t('contact.info.call')}</h3>
                            <p className="text-slate-600">(555) 123-4567</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-10">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div>
                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">{t('contact.form.name')}</label>
                        <input type="text" id="name" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">{t('contact.form.email')}</label>
                        <input type="email" id="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="john@example.com" />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-bold text-slate-700 mb-2">{t('contact.form.company')}</label>
                        <input type="text" id="company" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all" placeholder="Company Ltd" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">{t('contact.form.message')}</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-primary hover:bg-secondary text-white font-bold py-4 rounded-xl transition-colors shadow-lg">
                        {t('contact.form.submit')}
                    </button>
                </form>
            </div>

        </div>
      </div>
    </>
  );
};

export default Contact;