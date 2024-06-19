
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex text-center bg-gray-800 p-4">
      <div className="text-white space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/work" className="hover:text-gray-300">Work</Link>
        <Link to="/projects" className="hover:text-gray-300">Projects</Link>
        <Link to="/contactus" className="hover:text-gray-300">Contact Us</Link>
        <Link to="/CV" className="hover:text-gray-300">CV</Link>
      </div>
      <div className="flex space-x-4">
        <a href="#"><FaFacebook size={24}/></a>
        <a href="#"><FaTwitter size={24}/></a>
        <a href="#"><FaInstagram size={24}/></a>
      </div>
    </header>
  );
};

export default Header;
