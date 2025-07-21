import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './src/HomePage';
import AboutPage from './src/AboutPage';
import ServicesPage from './src/ServicesPage';
import OurProcessPage from './src/OurProcessPage';
import WhyChooseUsPage from './src/WhyChooseUsPage';
import ContactUsPage from './src/ContactUsPage';

const App: React.FC = () => {
  return (
    <div className="relative">
      <CanvasBackground />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process" element={<OurProcessPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
