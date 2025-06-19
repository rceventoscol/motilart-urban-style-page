
import { Instagram, Facebook, MessageCircle } from "lucide-react";

const SocialMedia = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Síguenos
          </h2>
          <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            Mantente al día con nuestros últimos trabajos y tendencias
          </p>
        </div>

        <div className="flex justify-center space-x-8">
          <a 
            href="https://instagram.com/motilart52"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-2xl"
          >
            <Instagram className="text-white group-hover:rotate-12 transition-transform duration-300" size={32} />
          </a>
          
          <a 
            href="https://facebook.com/Motilart52"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-blue-600 p-6 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-2xl"
          >
            <Facebook className="text-white group-hover:rotate-12 transition-transform duration-300" size={32} />
          </a>
          
          <a 
            href="https://wa.me/573023374406"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-600 p-6 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-2xl"
          >
            <MessageCircle className="text-white group-hover:rotate-12 transition-transform duration-300" size={32} />
          </a>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">@motilart52</p>
          <p className="text-gray-500">Motilart52</p>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
