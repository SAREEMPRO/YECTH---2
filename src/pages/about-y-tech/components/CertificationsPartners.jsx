import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CertificationsPartners = () => {
  const partners = [
    {
      id: 1,
      name: "HP",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/HP_logo_2012.svg/2048px-HP_logo_2012.svg.png"
    },
    {
      id: 2,
      name: "Acer",
      logo: "https://1000logos.net/wp-content/uploads/2016/09/Acer-Logo-2048x1280.png"
    },
    {
      id: 3,
      name: "Dell",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Dell_Logo.svg/2048px-Dell_Logo.svg.png"
    },
    {
      id: 4,
      name: "Lenovo",
      logo: "https://logos-world.net/wp-content/uploads/2022/07/Lenovo-Logo.png"
    },
    {
      id: 5,
      name: "MSI",
      logo: "https://logos-world.net/wp-content/uploads/2020/11/MSI-Logo-2019-present.png"
    },
    {
      id: 6,
      name: "ASUS",
      logo: "https://logos-world.net/wp-content/uploads/2020/07/Asus-Logo.png"
    },
    {
      id: 7,
      name: "Canon",
      logo: "https://global.canon/en/corporate/logo/img/logo_01.png"
    },
    {
      id: 8,
      name: "Samsung",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Samsung-Logo-2005-present.jpg"
    },
    {
      id: 9,
      name: "Epson",
      logo: "https://pluspng.com/img-png/epson-logo-png-epson-logo-and-symbol-meaning-history-png-1920x1080.png"
    },
    {
      id: 10,
      name: "BenQ",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/BenQ-Logo.svg/2560px-BenQ-Logo.svg.png"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            We are proud to be associated with leading technology brands, ensuring 
            you get genuine products and authorized service support.
          </p>
        </div>

        {/* Auto-scrolling Partner Logos */}
        <div className="mb-16">
          <div className="relative overflow-hidden">
            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10"></div>
            
            {/* Scrolling container */}
            <div className="flex space-x-8 animate-scroll">
              {/* First set of logos */}
              {partners.map((partner) => (
                <div
                  key={partner.id}
                  className="flex-shrink-0 w-32 h-32 rounded-full bg-white shadow-lg border border-border flex items-center justify-center p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {partners.map((partner) => (
                <div
                  key={`${partner.id}-duplicate`}
                  className="flex-shrink-0 w-32 h-32 rounded-full bg-white shadow-lg border border-border flex items-center justify-center p-4 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-20 h-20 object-contain rounded-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-muted/30 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Why Partner With Leading Brands
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Genuine Products
              </h4>
              <p className="text-text-secondary text-sm">
                Access to authentic parts and components directly from manufacturers for optimal performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Award" size={24} className="text-primary" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Authorized Service
              </h4>
              <p className="text-text-secondary text-sm">
                Certified technicians trained by brand partners for professional and reliable service.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} className="text-accent" />
              </div>
              <h4 className="text-lg font-semibold text-text-primary mb-2">
                Warranty Protection
              </h4>
              <p className="text-text-secondary text-sm">
                Maintain your product warranty with authorized service and genuine replacement parts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-32rem - 2rem)); /* Adjust based on logo width and gap */
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default CertificationsPartners;