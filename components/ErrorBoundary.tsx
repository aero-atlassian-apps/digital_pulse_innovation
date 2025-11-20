import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };
  static getDerivedStateFromError() { return { hasError: true }; }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) {
      return (
        <Fallback />
      );
    }
    return this.props.children;
  }
}

const Fallback: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-[40vh] flex flex-col items-center justify-center bg-slate-50 text-slate-700">
      <p className="mb-4 font-bold">{t('errors.unexpected')}</p>
      <Link to="/" className="inline-block bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">{t('cta.go_home')}</Link>
    </div>
  );
};

