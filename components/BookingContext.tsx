import React, { createContext, useContext, useMemo, useState } from 'react';
import BookingModal from './BookingModal';

type Ctx = {
  open: (url?: string) => void;
  close: () => void;
  isOpen: boolean;
  defaultUrl?: string | null;
};

const BookingCtx = createContext<Ctx | null>(null);

export const useBooking = () => {
  const ctx = useContext(BookingCtx);
  if (!ctx) throw new Error('useBooking must be used within BookingProvider');
  return ctx;
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setUrl] = useState<string | null>(null);
  const defaultUrl = import.meta.env.VITE_BOOKING_URL || null;

  const open = (u?: string) => {
    setUrl(u || defaultUrl || null);
    setIsOpen(true);
  };
  const close = () => setIsOpen(false);

  const value = useMemo(() => ({ open, close, isOpen, defaultUrl }), [isOpen, defaultUrl]);

  return (
    <BookingCtx.Provider value={value}>
      {children}
      <BookingModal isOpen={isOpen} onClose={close} url={url || defaultUrl || undefined} />
    </BookingCtx.Provider>
  );
};
