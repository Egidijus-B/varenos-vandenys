import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaExternalLinkAlt } from 'react-icons/fa';
import { RiGovernmentLine } from 'react-icons/ri';
import Map from './Map';

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-900 text-white px-8 py-16 lg:py-10 fade-in">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* First Column - Map */}
          <div className="flex flex-col items-center md:items-start w-full order-4 lg:order-1 md:order-1">
            <h2 className="font-bold mb-4">Mūsų vieta</h2>
            <div className="relative w-full h-72 mb-4">
              <Map />
            </div>
          </div>
          {/* Second Column - Company Address and Telephone */}
          <div className="flex flex-col items-center md:items-start w-full order-3 lg:order-2 md:order-2">
            <h2 className="font-bold mb-4">Rekvizitai</h2>
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
          <div className="flex flex-col items-center md:items-start w-full order-1 lg:order-3 md:order-3">
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
          <div className="flex flex-col items-center md:items-start w-full order-2 lg:order-4 md:order-4">
            <h2 className="font-bold mb-4">Papildoma informacija</h2>
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

















