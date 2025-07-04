import { Scissors, Users, Palette, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Corte Masculino",
      description: "Técnicas modernas y clásicas adaptadas a tu estilo"
    },
    {
      icon: Users,
      title: "Corte Femenino", 
      description: "Diseños únicos que realzan tu personalidad"
    },
    {
      icon: Star,
      title: "Barbería",
      description: "Servicio completo de barbería tradicional y moderna"
    },
    {
      icon: Palette,
      title: "Tintura / Tratamientos",
      description: "Coloración profesional y cuidados especializados"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-24 h-0.5 bg-gray-800 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada servicio está diseñado para resaltar lo mejor de ti
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-lg hover:bg-gray-50 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-gray-200"
            >
              <div className="bg-gray-900 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                <service.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
