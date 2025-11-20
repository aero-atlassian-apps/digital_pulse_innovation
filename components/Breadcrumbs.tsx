import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const parts = pathname.split('/').filter(Boolean);
  const buildPath = (idx: number) => '/' + parts.slice(0, idx + 1).join('/');
  const labelFor = (segment: string) => {
    const map: Record<string, string> = {
      '': t('nav.home'),
      services: t('nav.services'),
      resources: t('nav.resources'),
      about: t('nav.about'),
      clients: t('nav.clients'),
      team: t('nav.team'),
      contact: t('nav.contact'),
      'digital-transformation': t('services.items.digital.title'),
      'agile-coaching': t('services.items.agile.title'),
      'software-craftsmanship': t('services.items.craft.title'),
      'innovation-strategy': t('services.items.innovation.title'),
      'training-academy': t('services.items.training.title'),
      'vibe-coding': t('services.items.vibe.title'),
    };
    return map[segment] || segment;
  };
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-slate-600">
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/" className="hover:text-primary">{t('nav.home')}</Link>
          </li>
          {parts.map((p, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-slate-300">/</span>
              {i < parts.length - 1 ? (
                <Link to={buildPath(i)} className="hover:text-primary">{labelFor(p)}</Link>
              ) : (
                <span className="text-slate-700 font-semibold">{labelFor(p)}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
