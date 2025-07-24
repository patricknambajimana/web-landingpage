import { useState } from "react";
import { RiDashboardLine, RiMenuLine, RiCloseLine } from "react-icons/ri";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <header className="w-full fixed shadow-xl z-10 bg-white h-25">
        <nav className="text-2xl flex justify-between items-center px-6 py-5 md:ml-4 lg:mr-40 lg:ml-50">
          <div className="flex items-center gap-2 ">
            <RiDashboardLine className="text-6xl text-primary-500/90" />
            <h2 className="text-4xl font-extrabold">
              Business <strong className="text-primary-800 font-extrabold">Cafe</strong>
            </h2>
          </div>

          <ul className="hidden md:flex gap-10 font-bold">
            <li className="hover:text-primary-500 text-primary-800">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary-500">
              <a href="#space">Space</a>
            </li>
            <li className="hover:text-primary-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className="md:hidden text-3xl text-primary-400" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseLine /> : <RiMenuLine />}
          </div>
        </nav>

        {isOpen && (
          <ul className="flex flex-col items-center gap-6 py-4 md:hidden text-xl font-semibold bg-white shadow-md">
            <li className="hover:text-primary-500">
              <a href="#home">Home</a>
            </li>
            <li className="hover:text-primary-500">
              <a href="#space">Space</a>
            </li>
            <li className="hover:text-primary-500">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-primary-500">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
}
