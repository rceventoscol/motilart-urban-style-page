
import { useState, useEffect } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/90 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center">
            <span className="font-bold text-black text-xl">M</span>
          </div>
          <span className="text-white font-bold text-xl tracking-wider">MOTILART</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-white hover:text-gray-300 transition-colors">Inicio</a>
          <a href="#servicios" className="text-white hover:text-gray-300 transition-colors">Servicios</a>
          <a href="#testimonios" className="text-white hover:text-gray-300 transition-colors">Testimonios</a>
          <a href="#contacto" className="text-white hover:text-gray-300 transition-colors">Contacto</a>
        </nav>

        <a 
          href="https://wa.me/573023374406"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;
