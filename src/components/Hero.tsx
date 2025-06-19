import { ArrowRight } from "lucide-react";
const Hero = () => {
  return <section id="inicio" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Donde el corte
se vuelve</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600">ARTE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-2 font-light">
        </p>
          
          <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-8"></div>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transformamos tu imagen con cortes de precisión y técnicas urbanas. 
            Cada detalle cuenta, cada corte es una obra de arte.
          </p>

          <a href="https://wa.me/573023374406" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-pulse">
            Reserva tu corte
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
          </a>
        </div>
      </div>
    </section>;
};
export default Hero;