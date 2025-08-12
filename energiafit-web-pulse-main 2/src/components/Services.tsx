import { User, Users, Apple, Dumbbell } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: User,
      title: "Entrenamiento Personal",
      description: "Sesiones uno a uno con entrenadores certificados para maximizar tus resultados"
    },
    {
      icon: Users,
      title: "Clases Grupales",
      description: "Entrenamientos dinámicos en grupo con música motivacional y ambiente energético"
    },
    {
      icon: Apple,
      title: "Nutrición Deportiva",
      description: "Planes alimenticios personalizados para complementar tu rutina de ejercicios"
    },
    {
      icon: Dumbbell,
      title: "Zona Libre y Máquinas",
      description: "Acceso completo a equipos de última generación para todos los niveles"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-graphite mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para alcanzar tus objetivos fitness en un solo lugar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 card-shadow card-hover text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-electric-blue to-turquoise rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-poppins font-bold text-graphite mb-4">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;