import React, { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaFigma, FaReact } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';

const Frontend = () => {
  const [showHtml, setShowHtml] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [showReact, setShowReact] = useState(false);
  const [showTailwind, setShowTailwind] = useState(false);
  const [showJs, setShowJs] = useState(false);
  const [showTs, setShowTs] = useState(false);
  const [showNextjs, setShowNextjs] = useState(false);
  const [showJest, setShowJest] = useState(false);
  const [showFigma, setShowFigma] = useState(false);
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
        setShowHtml(true);
      }, 1000);
      setTimeout(() => {
        setShowCss(true);
      }, 1500);
      setTimeout(() => {
        setShowReact(true);
      }, 2000);
      setTimeout(() => {
        setShowTailwind(true);
      }, 2500);
      setTimeout(() => {
        setShowJs(true);
      }, 3000);
      setTimeout(() => {
        setShowTs(true);
      }, 3500);
      setTimeout(() => {
        setShowNextjs(true);
      }, 4000);
      setTimeout(() => {
        setShowJest(true);
      }, 4500);
      setTimeout(() => {
        setShowFigma(true);
      }, 5000);

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
          Frontend</h3>
        <div className="flex flex-wrap justify-center items-center gap-2">
          <div className={`transition-opacity duration-500 ease-in-out ${showHtml ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-orange-200 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaHtml5 className="text-2xl text-orange-500 mb-2" />
              <h4 className="text-sm font-medium">HTML5</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showCss ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-blue-300 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaCss3 className="text-2xl text-blue-500 mb-2" />
              <h4 className="text-sm font-medium">CSS3</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showReact ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-blue-300 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaReact className="text-2xl text-blue-500 mb-2" />
              <h4 className="text-sm font-medium">React</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showTailwind ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-green-200 bg-opacity-50 rounded-full border p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <RiTailwindCssFill className="text-2xl text-green-500 mb-2" />
              <h4 className="text-sm font-medium">Tailwind</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showJs ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-yellow-200 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaJs className="text-2xl text-yellow-500 mb-2" />
              <h4 className="text-sm font-medium">JavaScript</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showTs ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-blue-300 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaJs className="text-2xl text-blue-500 mb-2" />
              <h4 className="text-sm font-medium">TypeScript</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showNextjs ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-green-300 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaNodeJs className="text-2xl text-green-500 mb-2" />
              <h4 className="text-sm font-medium">Next.js</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showJest ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-purple-400 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaJs className="text-2xl text-purple-500 mb-2" />
              <h4 className="text-sm font-medium">Jest</h4>
            </div>
          </div>
          <div className={`transition-opacity duration-500 ease-in-out ${showFigma ? 'opacity-100' : 'opacity-0'}`}>
            <div className="bg-pink-200 border bg-opacity-50 rounded-full p-2 relative w-40 sm:w-24 skill-item flex flex-col items-center">
              <FaFigma className="text-2xl text-pink-500 mb-2" />
              <h4 className="text-sm font-medium">Figma</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
