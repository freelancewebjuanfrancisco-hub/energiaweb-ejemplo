import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Inicio', id: 'inicio' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Planes', id: 'planes' },
    { name: 'Contacto', id: 'contacto' }
  ];

  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: Instagram, 
      href: 'https://instagram.com/energiafit' 
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      href: 'https://facebook.com/energiafit' 
    },
    { 
      name: 'TikTok', 
      icon: Youtube, 
      href: 'https://tiktok.com/@energiafit' 
    }
  ];

  return (
    <footer className="bg-graphite text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-3xl font-poppins font-bold text-gradient mb-4">
              EnergíaFit
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Más que un gimnasio, somos tu comunidad de bienestar. 
              Transformamos vidas a través del ejercicio, la nutrición y 
              la motivación constante.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-lime-yellow hover:text-graphite transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-6">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-300 hover:text-lime-yellow transition-colors duration-300"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-poppins font-bold mb-6">
              Contacto
            </h3>
            <div className="space-y-3 text-gray-300">
              <div>
                <div className="font-semibold text-white">Dirección</div>
                <div>Calle Fitness 123</div>
                <div>28001 Madrid, España</div>
              </div>
              <div>
                <div className="font-semibold text-white">Teléfono</div>
                <div>+34 91 123 45 67</div>
              </div>
              <div>
                <div className="font-semibold text-white">Email</div>
                <div>info@energiafit.es</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EnergíaFit. Todos los derechos reservados. Diseñado con 💪 para transformar vidas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;