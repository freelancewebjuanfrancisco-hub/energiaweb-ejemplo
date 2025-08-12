import { Check, Crown, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Plans = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const plans = [
    {
      name: "Básico",
      price: "29",
      period: "mes",
      description: "Perfecto para comenzar tu transformación",
      features: [
        "Acceso al gimnasio",
        "Uso de máquinas básicas",
        "Vestuarios y duchas",
        "App móvil incluida"
      ],
      popular: false,
      buttonStyle: "btn-primary",
      cardStyle: "border-gray-200"
    },
    {
      name: "Avanzado",
      price: "49",
      period: "mes", 
      description: "La opción más popular para resultados serios",
      features: [
        "Todo lo del plan Básico",
        "2 sesiones de entrenamiento personal",
        "Clases grupales ilimitadas",
        "Plan nutricional básico",
        "Acceso a zona funcional"
      ],
      popular: true,
      buttonStyle: "btn-secondary",
      cardStyle: "border-turquoise shadow-[0_0_30px_hsl(var(--turquoise)/0.3)]"
    },
    {
      name: "Premium",
      price: "79",
      period: "mes",
      description: "La experiencia completa de EnergíaFit",
      features: [
        "Todo lo del plan Avanzado",
        "Entrenamiento personal ilimitado",
        "Consulta nutricional personalizada",
        "Acceso prioritario a nuevas clases",
        "Invitado gratis los fines de semana",
        "Descuentos en suplementos"
      ],
      popular: false,
      buttonStyle: "btn-accent",
      cardStyle: "border-electric-blue shadow-[0_0_30px_hsl(var(--electric-blue)/0.3)]"
    }
  ];

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-graphite mb-4">
            Planes que se Adaptan a Ti
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Elige el plan perfecto para tu estilo de vida y objetivos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 border-2 ${plan.cardStyle} card-hover group`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-turquoise text-white px-4 py-2 rounded-full text-sm font-poppins font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Más Popular
                  </div>
                </div>
              )}

              {plan.name === "Premium" && (
                <div className="absolute -top-4 right-4">
                  <Crown className="w-8 h-8 text-electric-blue" />
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-poppins font-bold text-graphite mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-poppins font-bold text-graphite">
                    €{plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-turquoise mr-3 flex-shrink-0" />
                    <span className="text-graphite">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${plan.buttonStyle} py-3 text-lg rounded-full`}
                onClick={() => scrollToSection('contacto')}
              >
                Elegir Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;