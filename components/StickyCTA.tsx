import React from 'react';
import BookingButton from './BookingButton';

const StickyCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <BookingButton label="Schedule Free Consultation" className="bg-secondary hover:bg-primary text-white px-5 py-3 rounded-xl shadow-lg" />
    </div>
  );
};

export default StickyCTA;
