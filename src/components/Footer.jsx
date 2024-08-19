import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaExternalLinkAlt } from 'react-icons/fa';
import { RiGovernmentLine } from 'react-icons/ri';
// import CertificateImage from '../assets/Certificate - įmonės.png';
// import CertificateImageCeo from '../assets/Certificate - vadovo.png';
// import CertificateImageLogo from '../assets/Certificate-logotipas.gif';
// import CertificateImageManagers from '../assets/LT_SL_VADOVAI_2021.gif';
// import CertificateImageLT from '../assets/SL_LT_2021.gif'; // Correct image import
import Map from './Map'; // Adjust the import path as needed



const Footer = () => {
  return (
    <>
      {/* New Row for Certificates */}
      {/* <div className="py-8">
        <div className="container mx-auto flex justify-center">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-60 bg-gray-300 rounded">
              <img
                src={CertificateImage}
                alt="Certificate"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-35 lg:h-35 bg-gray-300 rounded-full">
              <img
                src={CertificateImageManagers}
                alt="Certificate"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-35 lg:h-35 bg-gray-300 rounded-full">
              <img
                src={CertificateImageLogo}
                alt="Certificate"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-35 lg:h-35 bg-gray-300 rounded-full">
              <img
                src={CertificateImageLT}
                alt="Certificate"
                className="w-full h-full object-cover rounded"
              />
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-60 bg-gray-300 rounded">
              <img
                src={CertificateImageCeo}
                alt="Certificate"
                className="w-full h-full object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Footer Section */}
      <footer className="bg-blue-900 text-white px-8 py-16 lg:py-10">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* First Column - Map */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className=" font-bold mb-4">Mūsų vieta</h2>
            <div className="relative w-full h-72 mb-4">
              <Map />
            </div>
          </div>

          {/* Second Column - Company Address and Telephone */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className=" font-bold mb-4">Rekvizitai</h2>
            <ul>
              <li className="p-2 text-white flex items-center">
                <RiGovernmentLine className="mr-2" />
                Įmonės kodas: 184626819
              </li>
              <li className="p-2 text-white flex items-center">
                <RiGovernmentLine className="mr-2" />
                PVM mokėtojo kodas: LT846268113
              </li>
              <li className="p-2 text-white flex items-center">
                <FaEnvelope className="mr-2" />
                <a href="mailto:info@varenosvandenys.lt" className="hover:text-gray-400 transition duration-300">
                  info@varenosvandenys.lt
                </a>
              </li>
              <li className="p-2 text-white flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                 Žalioji g. 26, LT-65210 Varėna
              </li>
              <li className="p-2 text-white flex items-center">
                <FaPhone className="mr-2" />
                <a href="tel:831031683" className="hover:text-gray-400 transition duration-300">
                  831031683
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column - Links */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className="font-bold mb-4">Nuorodos</h2>
            <ul>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Gedimai tinkluose
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Kainos
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Abonementų prisijungimas
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Projektai
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Kontaktai
                <FaExternalLinkAlt className="ml-2" />
              </li>
            </ul>
          </div>

          {/* Fourth Column - Additional Links */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h2 className=" font-bold mb-4">Papildoma informacija</h2>
            <ul>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Teisinė informacija
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Aptarnaujamos gyvenvietės
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Asmens duomenų apsauga
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Korupcijos prevencija
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Darbo užmokestis
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Viešieji pirkimai
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Administracija
                <FaExternalLinkAlt className="ml-2" />
              </li>
              <li className="p-2 text-white flex items-center hover:text-gray-400 transition duration-300">
                Karjera
                <FaExternalLinkAlt className="ml-2" />
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="border-gray-600 my-8" />

        {/* Second Row - Copyright */}
        <div className="container mx-auto text-center mt-8">
          <p>© 2024 UAB Varenos vandenys</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

















