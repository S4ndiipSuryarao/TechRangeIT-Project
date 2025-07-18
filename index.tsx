import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './src/HomePage'; // Assuming HomePage is in src/HomePage.tsx
import AboutPage from './src/AboutPage'; // Assuming AboutPage is in src/AboutPage.tsx
import ServicesPage from './src/ServicesPage'; // Assuming ServicesPage is in src/ServicesPage.tsx
import OurProcessPage from './src/OurProcessPage'; // Assuming OurProcessPage is in src/OurProcessPage.tsx
import WhyChooseUsPage from './src/WhyChooseUsPage'; // Assuming WhyChooseUsPage is in src/WhyChooseUsPage.tsx
import ContactUsPage from './src/ContactUsPage'; // Assuming ContactUsPage is in src/ContactUsPage.tsx
import ContactUs from './components/ContactUs';

const App: React.FC = () => { // Add the App component definition back
    return (
        <div className="relative">
            <CanvasBackground />
            <Header />
             <Routes>
                <Route path="/" element={<HomePage />} /> {/* Define a route for the home page */}
                <Route path="/about" element={<AboutPage />} /> {/* Define a route for the about page */}
                <Route path="/services" element={<ServicesPage />} /> {/* Define a route for the services page */}
                <Route path="/process" element={<OurProcessPage />} /> {/* Define a route for the our process page */}
                <Route path="/why-choose-us" element={<WhyChooseUsPage />} /> {/* Define a route for the why choose us page */}
                <Route path="/contact" element={<ContactUsPage />} /> {/* Define a route for the contact page */}
            </Routes>
            <ContactUs />
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
      <App />
    </BrowserRouter>
  </React.StrictMode>
);