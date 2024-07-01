import React from 'react';
import { Link } from 'react-router-dom';
import { SiGmail } from "react-icons/si";
import { FaPhone, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMenu, FiX } from 'react-icons/fi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  links: { to: string; text: string; }[];
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, links }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-10 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      <div
        className={`transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        onClick={(e) => e.stopPropagation()} 
      >
        <ul className="flex flex-col items-center space-y-4 text-white text-xl">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="hover:bg-pink-500 hover:text-black p-2 rounded transition-colors duration-200">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const links = [
    { to: '/', text: 'Home' },
    { to: '/work', text: 'Work' },
    { to: '/projects', text: 'Projects' },
    { to: '/contactus', text: 'Contact Us' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20 flex justify-between items-center bg-transparent backdrop-blur-md p-8 space-x-9">
        <button onClick={toggleMenu} className="md:hidden text-white bg-black bg-opacity-30 rounded-full p-2">
          {isOpen ? (
            <FiX size={24} />
          ) : (
            <FiMenu size={24} />
          )}
        </button>
        <h1 className="text-3xl text-center font-bold italic text-white hidden md:block">
         Hello, I'm Yessi
        </h1>
        <nav className="md:flex">
          <div className="flex justify-center text-white space-x-12 flex-row">
            <ul className="hidden space-x-8 lg:flex">
              {links.map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="hover:bg-pink-500 p-2 rounded">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        <div className="flex space-x-4 gap-6">
          <a
            className="text-white hover:scale-110 transition-transform duration-200 ease-in-out transform"
            href="tel:+34613356063"
            title="Llamar a Yessi"
          >
            <FaPhone className=' bg-black bg-opacity-20 rounded-full p-2' size={40} />
          </a>
          <a
            className="text-white hover:scale-110 transition-transform duration-200 ease-in-out transform"
            href="mailto:martinezyessenia068@gmail.com"
            title="Enviar Correo"
          >
            <SiGmail className=' bg-black bg-opacity-30 rounded-full p-2' size={40} />
          </a>
          <a
            className="text-white hover:scale-110 transition-transform duration-200 ease-in-out transform"
            href="https://www.linkedin.com/in/yessenia-miranda-martinez"
            target="_blank"
            rel="noopener noreferrer"
            title="Ver su LinkedIn"
          >
            <FaLinkedinIn  className=' bg-black bg-opacity-30 rounded-full p-2' size={40} />
          </a>
          <a
            className="text-white hover:scale-110 transition-transform duration-200 ease-in-out transform"
            href="https://github.com/Yeshiprinss"
            target="_blank"
            rel="noopener noreferrer"
            title="Ir a su GitHub"
          >
            <FaGithub   className=' bg-black bg-opacity-30 rounded-full p-2' size={40} />
          </a>
        </div>
      </header>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} links={links} />
    </>
  );
};

export default Header;
