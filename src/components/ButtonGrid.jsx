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
    { text: 'TEISINĖ INFORMACIJA', icon: <FaBalanceScale /> },
    { text: 'APTARNAUJAMOS GYVENVIETĖS', icon: <FaLocationDot /> },
    { text: 'ASMENS DUOMENŲ APSAUGA', icon: <BsFillShieldLockFill /> },
    { text: 'KORUPCIJOS PREVENCIJA', icon: <FaPeopleArrows /> },
    { text: 'DARBO UŽMOKESTIS', icon: <FaRegMoneyBillAlt /> },
    { text: 'VIEŠIEJI PIRKIMAI', icon: <HiOutlineClipboardDocumentList /> },
    { text: 'ADMINISTRACIJA', icon: <PiTreeStructureFill /> },
    { text: 'KARJERA', icon: <MdBusinessCenter /> },
  ];

  return (
    <section className="py-10 md:py-10 lg:py-20 w-screen bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Aktualios nuorodos</h2>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 md:max-w-[1240px]">
        {buttons.map((button, index) => (
          <button
            key={index}
            className="text-sm font-bold button-shadow flex items-center justify-center w-full h-[3.25rem] text-blue-900 bg-white rounded hover:bg-blue-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 px-4 md:px-6 border-none"
          >
            <span className="mr-2" aria-hidden="true">{button.icon}</span>
            <span className="sr-only">{button.text}</span>
            <span>{button.text}</span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ButtonGrid;