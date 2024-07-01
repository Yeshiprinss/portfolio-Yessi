import React, { useState, useEffect, useRef } from 'react';
import { FaNodeJs } from 'react-icons/fa'; 
import { SiMysql, SiDocker, SiExpress, SiJest } from 'react-icons/si';

const Backend = () => {
  const [showNodeJs, setShowNodeJs] = useState(false);
  const [showMySQL, setShowMySQL] = useState(false);
  const [showDocker, setShowDocker] = useState(false);
  const [showExpress, setShowExpress] = useState(false);
  const [showJest, setShowJest] = useState(false);
  const [showHeading, setShowHeading] = useState(false);
  const skillsRef = useRef(null);

  const handleScroll = () => {
    if (!skillsRef.current) return;

    const topPos = skillsRef.current.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (topPos < screenHeight * 0.75) {
      setTimeout(() => {
        setShowHeading(true);
      }, 500);
      setTimeout(() => {
        setShowNodeJs(true);
      }, 1000);
      setTimeout(() => {
        setShowMySQL(true);
      }, 1500);
      setTimeout(() => {
        setShowDocker(true);
      }, 2000);
      setTimeout(() => {
        setShowExpress(true);
      }, 2500);
      setTimeout(() => {
        setShowJest(true);
      }, 3000);

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
          Backend
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <div className={`transition-opacity duration-500 ease-in-out ${showNodeJs ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-green-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaNodeJs className="text-2xl text-green-400 mb-2" />
              <h4 className="text-sm font-medium">Node.js</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showMySQL ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-blue-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <SiMysql className="text-2xl text-blue-400 mb-2" />
              <h4 className="text-sm font-medium">MySQL</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showDocker ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-blue-300 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <SiDocker className="text-2xl text-blue-500 mb-2" />
              <h4 className="text-sm font-medium">Docker</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showExpress ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-purple-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <SiExpress className="text-2xl text-purple-400 mb-2" />
              <h4 className="text-sm font-medium">Express</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showJest ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-red-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <SiJest className="text-2xl text-red-400 mb-2" />
              <h4 className="text-sm font-medium">Jest</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
