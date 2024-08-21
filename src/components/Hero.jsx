import { FaArrowRightLong } from "react-icons/fa6";
import hero from '../assets/hero.png';

const Hero = () => {
  return (
    <section
      className="w-screen bg-cover bg-center md:py-10 lg:py-20 py-10 flex items-center justify-center hero-section"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className=" p-6 rounded  md:mt-[-3rem] sm:mt-[-2rem] mt-[-1rem]">
        <h1 className="lg:text-7xl md:text-5xl text-3xl font-bold mb-4 text-[#001AA4]">Kokybė</h1>
        <p className="lg:text-4xl mb-8 text-[#001AA4] font-bold">
          vienintelis kelias užtikrinti sveiką gyvenimo būdą.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            className=" button flex items-center text-white py-2 px-4 rounded hover:bg-white border "
          >
            Apie mus
            <FaArrowRightLong className="ml-2" />
          </button>
          <button
            className="flex items-center bg-white text-[#001AA4] py-2 px-4 rounded hover:bg-[#001AA4] hover:text-white border border-[#001AA4]"
          >
            Veikla
            <FaArrowRightLong className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;




