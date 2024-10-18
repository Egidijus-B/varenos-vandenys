import { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Import Link from React Router
import hero from '../assets/hero.png';

const Hero = () => {
  const [isVeiklaHovered, setIsVeiklaHovered] = useState(false); // Track hover state

  return (
    <section
      className="w-screen bg-cover bg-center md:py-10 lg:py-20 py-10 flex items-center justify-center hero-section"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="p-6 rounded md:mt-[-3rem] sm:mt-[-2rem] mt-[-1rem]">
        <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold mb-4 text-[#001AA4]">KOKYBĖ</h1>
        <p className="lg:text-4xl mb-8 text-[#001AA4] font-bold">
          VIENINTELIS KELIAS UŽTIKRINTI SVEIKĄ GYVENIMO BŪDĄ.
        </p>
        <div className="flex justify-center space-x-4">
          {/* "Apie mus" button */}
          <Link to="/apie-mus">
            <button
              className={`flex items-center py-2 px-4 rounded border border-[#001AA4] shadow-md transition-all duration-300 ${isVeiklaHovered ? 'bg-white text-[#001AA4]' : 'bg-[#001AA4] text-white'} hover:scale-105`}
              aria-label="Learn more about us"
            >
              Apie mus
              <FaArrowRightLong className="ml-2" />
            </button>
          </Link>

          {/* "Veikla" button */}
          <Link to="/veikla">
            <button
              className="flex items-center bg-white text-[#001AA4] py-2 px-4 rounded border border-[#001AA4] transition-all duration-300 hover:scale-105 hover:bg-[#001AA4] hover:text-white"
              onMouseEnter={() => setIsVeiklaHovered(true)}  // Set state on hover
              onMouseLeave={() => setIsVeiklaHovered(false)} // Reset state when not hovered
              aria-label="View our activities"
            >
              Veikla
              <FaArrowRightLong className="ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;

