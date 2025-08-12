import { Users, Award, Calendar, Target } from 'lucide-react';
import gymInterior from '@/assets/gym-interior.jpg';

const About = () => {
  const stats = [
    {
      icon: Calendar,
      number: "8+",
      label: "Años de experiencia"
    },
    {
      icon: Users,
      number: "1200+",
      label: "Clientes activos"
    },
    {
      icon: Target,
      number: "50+",
      label: "Clases semanales"
    },
    {
      icon: Award,
      number: "95%",
      label: "Satisfacción garantizada"
    }
  ];

  return (
    <section id="sobre-nosotros" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-graphite mb-6">
              Más que un gimnasio,
              <span className="text-gradient block">una comunidad</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              En EnergíaFit creemos que el fitness va más allá del ejercicio físico. 
              Somos una comunidad de personas apasionadas por el bienestar integral, 
              donde cada miembro encuentra el apoyo y la motivación necesaria para 
              alcanzar sus objetivos.
            </p>

            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Nuestro equipo de entrenadores certificados y especialistas en nutrición 
              trabajan contigo para crear un plan personalizado que se adapte a tu 
              estilo de vida y metas específicas.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-electric-blue to-turquoise rounded-full flex items-center justify-center mx-auto mb-3">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-poppins font-bold text-graphite">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden card-shadow">
              <img 
                src={gymInterior} 
                alt="Interior del gimnasio EnergíaFit"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 card-shadow">
              <div className="text-center">
                <div className="text-3xl font-poppins font-bold text-gradient mb-2">
                  EnergíaFit
                </div>
                <div className="text-sm text-muted-foreground">
                  Tu transformación comienza aquí
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;