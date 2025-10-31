import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import AMCTierCard from './components/AMCTierCard';
import ServiceFilter from './components/ServiceFilter';
import ServiceGuarantees from './components/ServiceGuarantees';
import IndustrySpecificSolutions from './components/IndustrySpecificSolutions';
import EmergencySupport from './components/EmergencySupport';
import Logo from "../../../Logo.png"

const ServicesOverview = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeSort, setActiveSort] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock Services Data
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
    {
      id: 7,
      title: "COMPUTER & LAPTOPS REPAIR",
      description: "Expert repair services for all computer and laptop brands with same-day service and warranty.",
      icon: "Laptop",
      features: ["All brands", "Same-day service", "Hardware repair", "Software issues"]
    },
    {
      id: 8,
      title: "COMPUTER & LAPTOPS ON RENT",
      description: "Flexible rental solutions for computers and laptops for short-term and long-term requirements.",
      icon: "Monitor",
      features: ["Short-term rental", "Long-term rental", "All configurations", "Delivery & setup"]
    },
    {
      id: 9,
      title: "ONSITE SERVICES ONCALL BASED",
      description: "Professional onsite technical support available on call basis for immediate issue resolution.",
      icon: "Phone",
      features: ["Onsite support", "Quick response", "Expert technicians", "Flexible timing"],
      emergency: true
    },
    {
      id: 10,
      title: "OFFICE 365",
      description: "Complete Office 365 solutions including setup, configuration, migration, and ongoing support.",
      icon: "Cloud",
      features: ["Setup & configuration", "Migration services", "User training", "Ongoing support"]
    },
    {
      id: 11,
      title: "SOFTWARE INSTALLATIONS",
      description: "Professional software installation services for all types of business and productivity applications.",
      icon: "Download",
      features: ["All software types", "License management", "Configuration", "User training"]
    }
  ];


  // Mock AMC Tiers Data


  // Filter and sort services
  const filteredAndSortedServices = useMemo(() => {
    let filtered = services;

    // Apply category filter
    if (activeFilter !== 'all') {
      filtered = filtered?.filter(service => service?.category === activeFilter);
    }

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(service =>
        service?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        service?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        service?.features?.some(feature => 
          feature?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        )
      );
    }

    // Apply sorting
    switch (activeSort) {
      case 'popular':
        filtered?.sort((a, b) => b?.popularity - a?.popularity);
        break;
      case 'price-low':
        filtered?.sort((a, b) => parseInt(a?.pricing?.replace('₹', '')?.replace(',', '')) - parseInt(b?.pricing?.replace('₹', '')?.replace(',', '')));
        break;
      case 'price-high':
        filtered?.sort((a, b) => parseInt(b?.pricing?.replace('₹', '')?.replace(',', '')) - parseInt(a?.pricing?.replace('₹', '')?.replace(',', '')));
        break;
      case 'response-time':
        filtered?.sort((a, b) => {
          const urgencyOrder = { 'emergency': 0, 'urgent': 1, 'standard': 2 };
          return urgencyOrder?.[a?.urgencyLevel] - urgencyOrder?.[b?.urgencyLevel];
        });
        break;
      default:
        break;
    }

    return filtered;
  }, [activeFilter, activeSort, searchQuery]);

  const handleLearnMore = (serviceId) => {
    console.log('Learn more about service:', serviceId);
    // Navigate to detailed service page
  };

  const handleBookNow = (serviceId) => {
    console.log('Book service:', serviceId);
    // Navigate to booking page
  };

  const handleSelectAMCPlan = (planId) => {
    console.log('Select AMC plan:', planId);
    // Navigate to AMC signup page
  };

  const handleIndustryLearnMore = (industryId) => {
    console.log('Learn more about industry solution:', industryId);
    // Navigate to industry-specific page
  };

  const handleEmergencyCall = () => {
    window.open('tel:+919092619444', '_self');
  };

  const handleScheduleCallback = () => {
    console.log('Schedule callback');
    // Open callback scheduling modal
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Services Overview - Y-Tech Computer | Complete IT Solutions</title>
        <meta name="description" content="Comprehensive IT services including computer repair, networking solutions, AMC contracts, and 24/7 emergency support. Serving Tamil Nadu since 2005." />
        <meta name="keywords" content="IT services, computer repair, networking, AMC, emergency support, Vellore, Tamil Nadu" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Icon name="Settings" size={16} />
                <span>Complete IT Solutions</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Professional IT Services
                <span className="block text-primary">Tailored for Your Business</span>
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                From emergency repairs to comprehensive maintenance contracts, we provide complete IT solutions 
                that keep your business running smoothly. Trusted by 50+ businesses since 2005.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={handleEmergencyCall}
                  className="btn-emergency pulse-emergency"
                >
                  Emergency Support: +91 90926 19444
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="Calendar"
                  iconPosition="left"
                  onClick={() => document.getElementById('services-grid')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Browse All Services
                </Button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Users', value: '50+', label: 'Happy Clients' },
{ icon: 'Cpu', value: '10+', label: 'IT Services' },
                { icon: 'Award', value: '15+ Years', label: 'Experience' },
                { icon: 'Shield', value: '99.8%', label: 'Success Rate' }
              ]?.map((stat, index) => (
                <div key={index} className="bg-card rounded-xl p-6 text-center border border-border card-hover">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Icon name={stat?.icon} size={24} className="text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat?.value}</div>
                  <div className="text-sm text-text-secondary">{stat?.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Support Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <EmergencySupport 
              onEmergencyCall={handleEmergencyCall}
              onScheduleCallback={handleScheduleCallback}
            />
          </div>
        </section>


        {/* Services Grid */}
        <section id="services-grid" className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
        
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSortedServices?.map(service => (
                <ServiceCard 
                  key={service?.id}
                  service={service}
                  onLearnMore={() => handleLearnMore(service?.id)}
                  onBookNow={() => handleBookNow(service?.id)}
                />
              ))}
              {filteredAndSortedServices?.length === 0 && (
                <div className="col-span-full text-center text-text-secondary">
                  No services found matching your criteria.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Service Guarantees */}
        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <ServiceGuarantees />
          </div>
        </section>




        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today for a free consultation and discover how our IT services 
              can transform your business operations.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                onClick={handleEmergencyCall}
              >
                Call Now: +91 90926 19444
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Mail"
                iconPosition="left"
                onClick={() => console.log('Navigate to contact')}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
 <footer className="bg-text-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="">
                {/* ⬇️ Increase logo box from 2.5 rem (10) to 4 rem (16) */}
                <img
                  src={Logo}
                  alt=""
                  style={{
                    width: "14rem",
                    height: "5rem",
                    marginLeft: "0.1rem",
                  }}
                />

              </div>
              <p className="text-sm opacity-90 leading-relaxed">
                Your trusted technology partner since 2005, providing
                comprehensive IT solutions across Tamil Nadu with
                emergency response guarantee.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/about-y-tech"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    About Y-Tech
                  </a>
                </li>
                <li>
                  <a
                    href="/services-overview"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Our Services
                  </a>
                </li>
                <li>
                  <a
                    href="/service-areas"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Service Areas
                  </a>
                </li>
                <li>
                  <a
                    href="/products-showcase"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="/contact-support"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Services</h4>
              <ul className="space-y-2 text-sm">
                <li className="opacity-80">Computer & Laptop Repair</li>
                <li className="opacity-80">Networking Solutions</li>
                <li className="opacity-80">AMC Services</li>
                <li className="opacity-80">Data Recovery</li>
                <li className="opacity-80">Emergency Support</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="opacity-60">📍</span>
                  <span className="opacity-90">Vellore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="opacity-60">📞</span>
                  <a
                    href="tel:+919092619444"
                    className="opacity-90 hover:opacity-100"
                  >
                    +91 90926 19444
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="opacity-60">✉️</span>
                  <a
                    href="mailto:support@ytechcomputer.com"
                    className="opacity-90 hover:opacity-100"
                  >
                    support@ytechcomputer.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="opacity-60">🕒</span>
                  <span className="opacity-90">24/7 Emergency Support</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm opacity-80">
              © {new Date()?.getFullYear()} Y-Tech Computer. All rights
              reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-sm opacity-80">Emergency Hotline:</span>
              <a
                href="tel:+919092619444"
                className="bg-brand-orange text-brand-orange-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-orange-dark transition-colors"
              >
                +91 98942 91164
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesOverview;