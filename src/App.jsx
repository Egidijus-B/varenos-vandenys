import 'leaflet/dist/leaflet.css';
import Navbar from './components/Navbar';
import Nav from './components/Nav';
import Hero from './components/Hero';
import ButtonGrid from './components/ButtonGrid';
import Footer from './components/Footer';



export default function App() {
  return (
    <div>
      <Navbar />
      <Nav />
      <Hero />
      <ButtonGrid />
      <Footer />
    </div>
      
  );
}
