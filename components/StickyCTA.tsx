import React from 'react';
import BookingButton from './BookingButton';
import { useTranslation } from 'react-i18next';

const StickyCTA: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <BookingButton label={t('hero.cta_secondary')} className="bg-secondary hover:bg-primary text-white px-5 py-3 rounded-xl shadow-lg" />
    </div>
  );
};

export default StickyCTA;
