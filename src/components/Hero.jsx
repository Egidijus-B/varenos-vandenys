import { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // Import Link from React Router

const Hero = () => {
  const [isVeiklaHovered, setIsVeiklaHovered] = useState(false); // Track hover state

  return (
    <section className="w-screen md:flex items-center justify-center">
      {/* Text Section */}
      <div className="md:w-1/2 p-6 lg:pr-0 md:p-20 lg:p-20 lg:ml-20">
        <h1 className="lg:text-6xl md:text-4.5xl text-3xl font-bold mb-4 text-[#001AA4]">KOKYBĖ</h1>
        <p className="lg:text-3xl mb-8 text-[#001AA4] font-bold">
          VIENINTELIS KELIAS UŽTIKRINTI SVEIKĄ GYVENIMO BŪDĄ.
        </p>
        <div className="flex space-x-4">
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

      {/* Image Section */}
      <div
        className="hidden md:block md:w-1/2 h-full hero_img" // Apply the class for background image
        aria-label="Hero background image"
      >
        {/* Empty div for background image */}
      </div>
    </section>
  );
};

export default Hero;





