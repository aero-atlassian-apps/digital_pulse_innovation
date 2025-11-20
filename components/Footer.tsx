import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-secondary rounded-md flex items-center justify-center text-white">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-5 h-5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="font-display font-bold text-xl text-white">
                Digital Pulse
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-300 hover:text-secondary transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">{t('nav.services')}</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/services" className="hover:text-secondary transition-colors">{t('services.items.digital.title')}</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">{t('services.items.agile.title')}</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">{t('services.items.craft.title')}</Link></li>
              <li><Link to="/services" className="hover:text-secondary transition-colors">{t('services.items.vibe.title')}</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">{t('nav.about')}</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/about" className="hover:text-secondary transition-colors">{t('about.mission_title')}</Link></li>
              <li><Link to="/team" className="hover:text-secondary transition-colors">{t('nav.team')}</Link></li>
              <li><Link to="/clients" className="hover:text-secondary transition-colors">{t('nav.clients')}</Link></li>
              <li><Link to="/contact" className="hover:text-secondary transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">{t('nav.contact')}</h4>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0" />
                <span>123 Innovation Drive, Tech City, 10101</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <span>contact@digitalpulse.io</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center">
          <p className="text-sm text-slate-400">
            &copy; {new Date().getFullYear()} Digital Pulse Innovation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;