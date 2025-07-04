import { MapPin, Phone, Instagram, Facebook } from "lucide-react";
const Footer = () => {
  return <footer className="text-white py-12 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center">
                <span className="font-bold text-black text-xl">M</span>
              </div>
              <span className="font-bold text-2xl tracking-wider">MOTILART</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Estilo urbano que se nota. Corte que se respeta.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Phone size={18} className="text-gray-400" />
                <span className="text-gray-400">+57 302 337 4406</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-gray-400">Colombia</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="font-bold text-lg mb-4">Síguenos</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://instagram.com/motilart52" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com/Motilart52" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <div className="mb-4">
            
          </div>
          <p className="text-gray-500 text-sm">
            © 2024 MOTILART. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;