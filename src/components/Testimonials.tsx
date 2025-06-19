
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Desde que me motilo aquí, no vuelvo a otro lado.",
      author: "Cliente Satisfecho"
    },
    {
      text: "El mejor corte que me han hecho. Profesionalismo total.",
      author: "Cliente VIP"
    },
    {
      text: "Cada detalle importa, y aquí lo entienden perfectamente.",
      author: "Cliente Frecuente"
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-24 h-0.5 bg-white mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:scale-105"
            >
              <Quote className="text-white mb-4" size={32} />
              
              <p className="text-gray-300 text-lg mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white font-medium">
                  — {testimonial.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
