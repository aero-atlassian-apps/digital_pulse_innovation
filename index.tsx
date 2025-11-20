import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import { HelmetProvider } from 'react-helmet-async';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);

// Wrapping in Suspense is required for some React 19 + i18n interactions even with useSuspense: false
// Removing StrictMode to isolate potential double-invocation issues with the beta React version
root.render(
  <HelmetProvider>
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-400">Loading...</div>}>
      <App />
    </Suspense>
  </HelmetProvider>
);