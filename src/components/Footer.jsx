import React from 'react';
import { Link } from 'react-router-dom'; 
import { PhoneIcon, MapPinIcon, EnvelopeIcon, BriefcaseIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const Footer = () => {
  const linksSection1 = ["gedimai", "kainos", "abonementai", "projektai", "kontaktai"];
  const linksSection2 = ["teisine-informacija", "gyvenamosios-vietoves", "asmens-duomenu-apsauga", "korupcijos-prevencija", "darbo-uzmokestis", "viesieji-pirkimai", "administracija", "karjera"];

  return (
    <footer className="text-blue-900 px-4 py-12 md:px-8 lg:py-16 bg-[#fafafa] border-t border-[#e9ebef]">
      <div className="container mx-auto max-w-[1320px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex flex-col gap-12 w-full">
            {/* Rekvizitai and Working Hours next to each other */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
              {/* Rekvizitai Section */}
              <div className="flex-1">
                <h2 className="font-bold mb-4 text-xl text-center md:text-left">Rekvizitai</h2>
                <div className="grid grid-cols-1 gap-4 text-center md:text-left">
                  <div className="flex items-center space-x-2">
                    <BriefcaseIcon className="h-5 w-5 text-blue-900" />
                    <p className="text-blue-900 text-sm">184626819</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CurrencyDollarIcon className="h-5 w-5 text-blue-900" />
                    <p className="text-blue-900 text-sm">LT846268113</p>
                  </div>
                  <address className="text-blue-900 text-sm not-italic">
                    <div className="flex items-center space-x-2">
                      <MapPinIcon className="h-5 w-5 text-blue-900" />
                      <p>Žalioji g. 26, LT-65210 Varėna</p>
                    </div>
                  </address>
                  <div className="flex items-center space-x-2">
                    <PhoneIcon className="h-5 w-5 text-blue-900" />
                    <p className="text-blue-900 text-sm">
                      +370 310 31683
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <EnvelopeIcon className="h-5 w-5 text-blue-900" />
                    <p className="text-blue-900 text-sm">
                      info@varenosvandenys.lt
                    </p>
                  </div>
                </div>
              </div>

              {/* Darbo laikas Section */}
              <div className="flex-1">
                <h2 className="font-bold mb-4 text-xl text-center md:text-left">Darbo laikas</h2>
                <ul className="space-y-1 text-sm">
                  <li>Pirmadienis – penktadienis:</li>
                  <li>8:00 – 12:00</li>
                  <li>13:00 – 17:00</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex-1">
              <h2 className="font-bold mb-4 text-xl text-center md:text-left">Nuorodos</h2>
              <ul className="space-y-1 text-sm text-center md:text-left">
                {linksSection1.map((link, index) => (
                  <li key={index} className="p-1 hover:translate-x-1 transition-transform duration-300">
                    <Link to={`/${link}`} className="capitalize">{link.replace(/-/g, ' ')}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="font-bold mb-4 text-xl text-center md:text-left">Papildoma informacija</h2>
              <ul className="space-y-1 text-sm text-center md:text-left">
                {linksSection2.map((link, index) => (
                  <li key={index} className="p-1 hover:translate-x-1 transition-transform duration-300">
                    <Link to={`/${link}`} className="capitalize">{link.replace(/-/g, ' ')}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-blue-900 my-8" />

      {/* Copyright Section */}
      <div className="text-center text-sm mt-8">
        <p>© 2024 UAB Varenos vandenys</p>
      </div>
    </footer>
  );
};

export default Footer;























