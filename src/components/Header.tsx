
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
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white/90"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/d78b8e3e-a955-4ed6-8d88-281294231438.png" 
            alt="MOTILART Logo" 
            className="h-8 md:h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-800 hover:text-gray-600 transition-colors">Inicio</a>
          <a href="#servicios" className="text-gray-800 hover:text-gray-600 transition-colors">Servicios</a>
          <a href="#testimonios" className="text-gray-800 hover:text-gray-600 transition-colors">Testimonios</a>
          <a href="#contacto" className="text-gray-800 hover:text-gray-600 transition-colors">Contacto</a>
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
