import React from 'react';
import { useBooking } from './BookingContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface BookingButtonProps {
  label?: string;
  url?: string;
  className?: string;
}

const BookingButton: React.FC<BookingButtonProps> = ({ label, url, className }) => {
  const { open, defaultUrl } = useBooking();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onClick = () => {
    if (url || defaultUrl) {
      open(url);
    } else {
      navigate('/contact');
    }
  };

  return (
    <button type="button" onClick={onClick} className={className || 'inline-block bg-accent text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-white transition-colors'}>
      {label || t('hero.cta_secondary')}
    </button>
  );
};

export default BookingButton;
