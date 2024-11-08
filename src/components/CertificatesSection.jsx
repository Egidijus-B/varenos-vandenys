import React from 'react';
import certificate1 from '../assets/Certificate-logotipas.gif';
import certificate2 from '../assets/LT_SL_VADOVAI_2021.gif';
import certificate3 from '../assets/SL_LT_2021.gif';
import certificate4 from '../assets/Certificate-įmonės.png';
import certificate5 from '../assets/Certificate-vadovo.png';


const CertificatesSection = () => {
  const certificates = [
    { id: 1, img: certificate1, link: "/assets/Certificate-logotipas.gif" },
    { id: 2, img: certificate2, link: "/assets/LT_SL_VADOVAI_2021" },
    { id: 3, img: certificate3, link: "/assets/SL_LT_2021" },
    { id: 4, img: certificate4, link: "/assets/Certificate-įmonės" },
    { id: 5, img: certificate5, link: "/assets/Certificate-vadovo" },
  ];

  return (
    <div className="py-12 bg-[#fff]">
      <div className="container mx-auto max-w-[1320px] flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Section - Mūsų pasiekimai */}
        <div className="w-full lg:w-1/5 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-blue-900">Mūsų pasiekimai</h2>
        </div>

        {/* Right Section - Certificates */}
        <div className="w-full lg:w-4/5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {certificates.map((certificate, index) => (
            <div 
              key={certificate.id} 
              className={`overflow-hidden ${index > 2 ? 'zoomed-certificate' : ''}`}
            >
              <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                <img 
                  src={certificate.img} 
                  alt={`Certificate ${certificate.id}`} 
                  className="w-full h-20 sm:h-24 md:h-32 object-contain" 
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificatesSection;











