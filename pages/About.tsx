import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';
import { Lightbulb, Terminal, Handshake } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO 
        title={t('nav.about')}
        description="Learn about Digital Pulse Innovation, our mission, values, and history."
      />
      
      <div className="py-20">
        {/* Mission */}
        <section className="max-w-4xl mx-auto px-4 text-center mb-24">
            <h1 className="text-5xl font-display font-black text-primary mb-8">{t('about.mission_title')}</h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
                {t('about.mission_desc')}
            </p>
        </section>

        {/* Values */}
        <section className="bg-slate-50 py-20 border-y border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-16">{t('about.values_title')}</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
                        <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t('about.values.innovation')}</h3>
                    </div>
                    <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
                        <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Terminal className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t('about.values.craft')}</h3>
                    </div>
                    <div className="bg-white p-8 rounded-2xl text-center shadow-sm">
                        <div className="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Handshake className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{t('about.values.collab')}</h3>
                    </div>
                </div>
            </div>
        </section>

        {/* Timeline / History */}
        <section className="max-w-5xl mx-auto px-4 pt-20">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Our Journey</h2>
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-200">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                       <span className="font-bold text-xs">2018</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <div className="font-bold text-primary mb-1">Company Founded</div>
                        <div className="text-slate-500 text-sm">Digital Pulse Innovation was born with a mission to revolutionize digital consulting.</div>
                    </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                       <span className="font-bold text-xs">2021</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <div className="font-bold text-primary mb-1">Vibe Coding Launch</div>
                        <div className="text-slate-500 text-sm">Introduced our proprietary framework for developer productivity and well-being.</div>
                    </div>
                </div>

                 <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-100 group-[.is-active]:bg-secondary text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                       <span className="font-bold text-xs">2024</span>
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
                        <div className="font-bold text-primary mb-1">Global Expansion</div>
                        <div className="text-slate-500 text-sm">Opening new offices in Dubai and Madrid to serve our international clients better.</div>
                    </div>
                </div>

            </div>
        </section>
      </div>
    </>
  );
};

export default About;