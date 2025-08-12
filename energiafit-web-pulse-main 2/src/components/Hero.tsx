import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-gym.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Personas entrenando en EnergíaFit"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6 fade-in">
          Entrena hoy,
          <span className="block text-lime-yellow">transforma tu vida</span>
        </h1>
        
        <p className="text-xl md:text-2xl font-inter mb-8 fade-in-delay max-w-2xl mx-auto">
          Planes personalizados, entrenadores expertos y la mejor energía para ti
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-delay">
          <Button 
            size="lg"
            className="btn-accent px-8 py-4 text-lg rounded-full"
            onClick={() => scrollToSection('planes')}
          >
            Unirme ahora
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg rounded-full border-white text-white hover:bg-white hover:text-graphite transition-all duration-300"
            onClick={() => scrollToSection('servicios')}
          >
            <Play className="mr-2 w-5 h-5" />
            Descubrir más
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;