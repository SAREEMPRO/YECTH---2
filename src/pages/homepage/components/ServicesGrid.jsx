import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "AMC SERVICES",
      description: "Annual Maintenance Contracts providing comprehensive hardware and software support with regular checkups and preventive maintenance.",
      icon: "Shield",
      features: ["Regular maintenance", "Priority support", "Cost-effective", "Preventive care"],
      popular: true
    },
    {
      id: 2,
      title: "ASC SERVICES",
      description: "Authorized Service Center services with genuine parts and manufacturer-trained technicians for warranty claims.",
      icon: "Award",
      features: ["Genuine parts", "Trained technicians", "Warranty claims", "Brand authorized"]
    },
    {
      id: 3,
      title: "SERVER & FIREWALL",
      description: "Complete server setup, configuration, maintenance and enterprise-grade firewall security solutions.",
      icon: "Server",
      features: ["Server setup", "Firewall configuration", "Security implementation", "24/7 monitoring"]
    },
    {
      id: 4,
      title: "NETWORKING SERVICES",
      description: "End-to-end networking solutions including LAN/WAN setup, Wi-Fi configuration, and network infrastructure.",
      icon: "Wifi",
      features: ["LAN/WAN setup", "Wi-Fi configuration", "Network security", "Infrastructure planning"]
    },
    {
      id: 5,
      title: "SALE & PURCHASE",
      description: "Complete IT hardware solutions including new systems, laptops, servers, and peripherals with best pricing.",
      icon: "ShoppingCart",
      features: ["New systems", "Best prices", "Full setup", "Warranty included"]
    },
    {
      id: 6,
      title: "TONER REFILLING",
      description: "Professional toner refilling services for all printer brands with quality ink and guaranteed performance.",
      icon: "Printer",
      features: ["All brands", "Quality ink", "Cost saving", "Quick service"]
    },
    // {
    //   id: 7,
    //   title: "COMPUTER & LAPTOPS REPAIR",
    //   description: "Expert repair services for all computer and laptop brands with same-day service and warranty.",
    //   icon: "Laptop",
    //   features: ["All brands", "Same-day service", "Hardware repair", "Software issues"]
    // },
    // {
    //   id: 8,
    //   title: "COMPUTER & LAPTOPS ON RENT",
    //   description: "Flexible rental solutions for computers and laptops for short-term and long-term requirements.",
    //   icon: "Monitor",
    //   features: ["Short-term rental", "Long-term rental", "All configurations", "Delivery & setup"]
    // },
    // {
    //   id: 9,
    //   title: "ONSITE SERVICES ONCALL BASED",
    //   description: "Professional onsite technical support available on call basis for immediate issue resolution.",
    //   icon: "Phone",
    //   features: ["Onsite support", "Quick response", "Expert technicians", "Flexible timing"],
    //   emergency: true
    // },
    // {
    //   id: 10,
    //   title: "OFFICE 365",
    //   description: "Complete Office 365 solutions including setup, configuration, migration, and ongoing support.",
    //   icon: "Cloud",
    //   features: ["Setup & configuration", "Migration services", "User training", "Ongoing support"]
    // },
    // {
    //   id: 11,
    //   title: "SOFTWARE INSTALLATIONS",
    //   description: "Professional software installation services for all types of business and productivity applications.",
    //   icon: "Download",
    //   features: ["All software types", "License management", "Configuration", "User training"]
    // }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Settings" size={16} />
            <span>Our Services</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Complete IT Solutions Under One Roof
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            From computer repairs to networking solutions and software services, we provide comprehensive IT support to keep your business running smoothly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services?.map((service) => (
            <div
              key={service?.id}
              className={`relative bg-surface rounded-xl p-6 shadow-card hover:shadow-xl transition-all duration-300 border ${
                service?.popular ? 'border-primary ring-2 ring-primary/20' : service?.emergency ?'border-brand-orange ring-2 ring-brand-orange/20': 'border-border hover:border-primary/30'
              }`}
            >
              {/* Popular Badge */}
              {service?.popular && (
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}

              {/* Emergency Badge */}
              {service?.emergency && (
                <div className="absolute -top-3 left-6 bg-brand-orange text-brand-orange-foreground px-3 py-1 rounded-full text-xs font-semibold animate-pulse">
                  Emergency Support
                </div>
              )}

              {/* Service Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                service?.emergency ? 'bg-brand-orange/10' : 'bg-primary/10'
              }`}>
                <Icon 
                  name={service?.icon} 
                  size={24} 
                  className={service?.emergency ? 'text-brand-orange' : 'text-primary'} 
                />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-2">
                    {service?.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {service?.description}
                  </p>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-sm">
                      <Icon name="Check" size={14} className="text-accent flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <div className="pt-2">
                  {service?.emergency ? (
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full btn-emergency"
                      iconName="Phone"
                      iconPosition="left"
                      onClick={() => window.open('tel:+919092619444', '_self')}
                    >
                      Call Now
                    </Button>
                  ) : (
                    <Link to="/services-overview" className="block">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        iconName="ArrowRight"
                        iconPosition="right"
                      >
                        Learn More
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link to="/services-overview">
            <Button
              variant="default"
              size="lg"
              iconName="Grid3X3"
              iconPosition="left"
            >
              View All Services & Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;