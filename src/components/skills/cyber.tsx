import React, { useState, useEffect, useRef } from 'react';
import { FaLinux, FaDatabase, FaSpider, FaSearch, FaNetworkWired } from 'react-icons/fa'; 
import { SiPostman, SiBurpsuite, SiWappalyzer } from 'react-icons/si';

const Cyber = () => {
  const [showKaliLinux, setShowKaliLinux] = useState(false);
  const [showPostman, setShowPostman] = useState(false);
  const [showBurpSuite, setShowBurpSuite] = useState(false);
  const [showDomainTools, setShowDomainTools] = useState(false);
  const [showNetCraft, setShowNetCraft] = useState(false);
  const [showWappalyzer, setShowWappalyzer] = useState(false);
  const [showDIRB, setShowDIRB] = useState(false);
  const [showFUZZ, setShowFUZZ] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!skillsRef.current) return;

    const topPos = skillsRef.current.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;
    if (topPos < screenHeight * 0.75) {
      setTimeout(() => {
        setShowHeading(true);
      }, 500);
      setTimeout(() => {
        setShowKaliLinux(true);
      }, 800);
      setTimeout(() => {
        setShowPostman(true);
      }, 1100);
      setTimeout(() => {
        setShowBurpSuite(true);
      }, 1400);
      setTimeout(() => {
        setShowDomainTools(true);
      }, 1700);
      setTimeout(() => {
        setShowNetCraft(true);
      }, 2000);
      setTimeout(() => {
        setShowWappalyzer(true);
      }, 2300);
      setTimeout(() => {
        setShowDIRB(true);
      }, 2600);
      setTimeout(() => {
        setShowFUZZ(true);
      }, 2900);

      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={skillsRef} className="bg-black flex flex-col text-center gap-8 py-9 relative w-full lg:w-1/2">
      <div className="w-11/12 md:w-3/4 lg:w-3/4 xl:w-2/3 mx-auto">
        <h3 className={`bg-opacity-50 border rounded p-3 m-5 bg-white text-3xl font-semibold mb-6 transition-opacity duration-500 ease-in-out ${showHeading ? 'opacity-100' : 'opacity-0'}`}>
          Auditorías Web
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <div className={`transition-opacity duration-500 ease-in-out ${showKaliLinux ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-green-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaLinux className="text-2xl text-green-400 mb-2" />
              <h4 className="text-sm font-medium">Kali Linux</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showPostman ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-orange-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <SiPostman className="text-2xl text-orange-400 mb-2" />
              <h4 className="text-sm font-medium">Postman</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showBurpSuite ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-red-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <SiBurpsuite className="text-2xl text-red-400 mb-2" />
              <h4 className="text-sm font-medium">BurpSuite</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showDomainTools ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-blue-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaSearch className="text-2xl text-blue-400 mb-2" />
              <h4 className="text-sm font-medium">DomainTools</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showNetCraft ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-yellow-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaSpider className="text-2xl text-yellow-400 mb-2" />
              <h4 className="text-sm font-medium">NetCraft</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showWappalyzer ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-purple-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <SiWappalyzer className="text-2xl text-purple-400 mb-2" />
              <h4 className="text-sm font-medium">Wappalyzer</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showDIRB ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-green-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaNetworkWired className="text-2xl text-green-400 mb-2" />
              <h4 className="text-sm font-medium">DIRB</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showFUZZ ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-gray-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaDatabase className="text-2xl text-gray-400 mb-2" />
              <h4 className="text-sm font-medium">FUZZ</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cyber;
