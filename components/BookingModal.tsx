import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string | null;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, url }) => {
  const { t } = useTranslation();
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl mx-4">
        <div className="flex items-center justify-between p-4 border-b border-slate-100">
          <h3 className="text-lg font-bold text-primary">{t('booking.title')}</h3>
          <button onClick={onClose} className="text-slate-500 hover:text-primary">
            <X className="w-5 h-5" />
          </button>
        </div>
        {url ? (
          <div className="h-[70vh]">
            <iframe src={url} title="Booking" className="w-full h-full" />
          </div>
        ) : (
          <div className="p-8">
            <p className="text-slate-600 mb-6">{t('booking.fallback')}</p>
            <Link to="/contact" className="inline-block bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-colors">{t('booking.contact')}</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
