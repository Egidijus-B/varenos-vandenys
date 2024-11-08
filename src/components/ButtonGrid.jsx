import { Link } from 'react-router-dom';
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { MdBusinessCenter } from "react-icons/md";
import { PiTreeStructureFill } from "react-icons/pi";
import { BsFillShieldLockFill } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";

const ButtonGrid = () => {
  const buttons = [
    { text: 'TEISINĖ INFORMACIJA', icon: <FaBalanceScale />, link: "/teisine-informacija" },
    { text: 'APTARNAUJAMOS GYVENVIETĖS', icon: <FaLocationDot />, link: "/gyvenamosios-vietoves" },
    { text: 'ASMENS DUOMENŲ APSAUGA', icon: <BsFillShieldLockFill />, link: "/asmens-duomenu-apsauga" },
    { text: 'KORUPCIJOS PREVENCIJA', icon: <FaPeopleArrows />, link: "/korupcijos-prevencija" },
    { text: 'DARBO UŽMOKESTIS', icon: <FaRegMoneyBillAlt />, link: "/darbo-uzmokestis" },
    { text: 'VIEŠIEJI PIRKIMAI', icon: <HiOutlineClipboardDocumentList />, link: "/viesieji-pirkimai" },
    { text: 'ADMINISTRACIJA', icon: <PiTreeStructureFill />, link: "/administracija" },
    { text: 'KARJERA', icon: <MdBusinessCenter />, link: "/karjera" },
  ];

  return (
    <section className="py-10 md:py-10 lg:py-10 w-screen  md:max-w-[1320px] mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-10">Aktualios nuorodos</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {buttons.map((button, index) => (
          <Link 
            key={index}
            to={button.link} 
            className="text-sm font-bold flex items-center justify-center w-full h-[4.5rem] text-blue-900 bg-white rounded border border-blue-900 shadow-md hover:bg-blue-900 hover:text-white hover:shadow-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 md:px-6"
            aria-label={button.text}
          >
            <span className="mr-2" aria-hidden="true">{button.icon}</span>
            <span>{button.text}</span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ButtonGrid;



