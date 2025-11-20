import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const labelMap: Record<string, string> = {
  '': 'Home',
  services: 'Services',
  about: 'About Us',
  clients: 'Clients & Cases',
  team: 'Team',
  contact: 'Contact',
};

const Breadcrumbs: React.FC = () => {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  const buildPath = (idx: number) => '/' + parts.slice(0, idx + 1).join('/');
  return (
    <nav aria-label="Breadcrumb" className="bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-slate-600">
        <ol className="flex items-center gap-2">
          <li>
            <Link to="/" className="hover:text-primary">Home</Link>
          </li>
          {parts.map((p, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-slate-300">/</span>
              {i < parts.length - 1 ? (
                <Link to={buildPath(i)} className="hover:text-primary">{labelMap[p] || p}</Link>
              ) : (
                <span className="text-slate-700 font-semibold">{labelMap[p] || p}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
