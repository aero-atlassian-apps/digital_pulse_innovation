import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { BookingProvider } from './components/BookingContext';
import Breadcrumbs from './components/Breadcrumbs';
import StickyCTA from './components/StickyCTA';
import Footer from './components/Footer';

// Pages
import ReactLazy from 'react';
const Home = ReactLazy.lazy(() => import('./pages/Home'));
const Services = ReactLazy.lazy(() => import('./pages/Services'));
const Resources = ReactLazy.lazy(() => import('./pages/Resources'));
const DigitalTransformation = ReactLazy.lazy(() => import('./pages/services/DigitalTransformation'));
const AgileCoaching = ReactLazy.lazy(() => import('./pages/services/AgileCoaching'));
const SoftwareCraftsmanship = ReactLazy.lazy(() => import('./pages/services/SoftwareCraftsmanship'));
const InnovationStrategy = ReactLazy.lazy(() => import('./pages/services/InnovationStrategy'));
const TrainingAcademy = ReactLazy.lazy(() => import('./pages/services/TrainingAcademy'));
const VibeCoding = ReactLazy.lazy(() => import('./pages/services/VibeCoding'));
const About = ReactLazy.lazy(() => import('./pages/About'));
const Clients = ReactLazy.lazy(() => import('./pages/Clients'));
const Team = ReactLazy.lazy(() => import('./pages/Team'));
const Contact = ReactLazy.lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <BookingProvider>
        <ScrollToTop />
        <Layout>
          <Breadcrumbs />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/agile-coaching" element={<AgileCoaching />} />
            <Route path="/services/software-craftsmanship" element={<SoftwareCraftsmanship />} />
            <Route path="/services/innovation-strategy" element={<InnovationStrategy />} />
            <Route path="/services/training-academy" element={<TrainingAcademy />} />
            <Route path="/services/vibe-coding" element={<VibeCoding />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <StickyCTA />
        </Layout>
      </BookingProvider>
    </BrowserRouter>
  );
}

export default App;
