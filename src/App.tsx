/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { ForCompanies } from './pages/ForCompanies';
import { ForDrivers } from './pages/ForDrivers';
import { Clients } from './pages/Clients';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Benefits } from './pages/Benefits';
import { Fleet } from './pages/Fleet';
import { Security } from './pages/Security';
import { News } from './pages/News';
import { Events } from './pages/Events';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/companies" element={<ForCompanies />} />
            <Route path="/drivers" element={<ForDrivers />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/security" element={<Security />} />
            <Route path="/news" element={<News />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
