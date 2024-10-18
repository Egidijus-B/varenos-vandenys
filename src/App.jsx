import 'leaflet/dist/leaflet.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ButtonGrid from './components/ButtonGrid';
import Footer from './components/Footer';
import AccessibilityButton from './components/AccessibilityButton';
import NewsSection from './components/NewsSection';
import ClientCount from './components/ClientCount';
import CertificatesSection from './components/CertificatesSection';
import Map from './components/Map';
// Import page components
import GedimaiTinkluose from './pages/gedimaiTinkluose';
import Kainos from './pages/kainos';
import AbonementuPrisijungimas from './pages/abonementuPrisijungimas';
import Projektai from './pages/projektai';
import Kontaktai from './pages/kontaktai';
import TeisineInformacija from './pages/teisineInformacija';
import AptarnaujamosGyvenvietes from './pages/aptarnaujamosGyvenvietes';
import AsmensDuomenuApsauga from './pages/asmensDuomenuApsauga';
import KorupcijosPrevencija from './pages/korupcijosPrevencija';
import DarboUzmokestis from './pages/darboUzmokestis';
import ViesiejiPirkimai from './pages/viesiejiPirkimai';
import Administracija from './pages/administracija';
import Karjera from './pages/karjera';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Nav />
        <AccessibilityButton />

        {/* Main content area */}
        <Routes>
          {/* Render Hero and ButtonGrid only on the home route */}
          <Route path="/" element={<><Hero /><NewsSection /><ButtonGrid /><ClientCount /><CertificatesSection /><Map /></>} />

          {/* Render page components */}
          <Route path="/gedimai-tinkluose" element={<GedimaiTinkluose />} />
          <Route path="/kainos" element={<Kainos />} />
          <Route path="/abonementu-prisijungimas" element={<AbonementuPrisijungimas />} />
          <Route path="/projektai" element={<Projektai />} />
          <Route path="/kontaktai" element={<Kontaktai />} />
          <Route path="/teisine-informacija" element={<TeisineInformacija />} />
          <Route path="/aptarnaujamos-gyvenvietes" element={<AptarnaujamosGyvenvietes />} />
          <Route path="/asmens-duomenu-apsauga" element={<AsmensDuomenuApsauga />} />
          <Route path="/korupcijos-prevencija" element={<KorupcijosPrevencija />} />
          <Route path="/darbo-uzmokestis" element={<DarboUzmokestis />} />
          <Route path="/viesieji-pirkimai" element={<ViesiejiPirkimai />} />
          <Route path="/administracija" element={<Administracija />} />
          <Route path="/karjera" element={<Karjera />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
