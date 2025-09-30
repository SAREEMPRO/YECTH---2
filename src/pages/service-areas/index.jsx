import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceAreaCard from './components/ServiceAreaCard';
import InteractiveMap from './components/InteractiveMap';
import AreaDetailsModal from './components/AreaDetailsModal';
import ServiceRequestModal from './components/ServiceRequestModal';
import CoverageStats from './components/CoverageStats';
import Logo from "../../../Logo.png"

const ServiceAreas = () => {
  const [selectedArea, setSelectedArea] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestArea, setRequestArea] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  // Mock service areas data
  const serviceAreas = [
    {
      id: 1,
      name: 'Vellore',
      district: 'Vellore District',
      responseTime: 'Same Day',
      travelTime: '15 minutes',
      clientsServed: 450,
      businessPartnerships: 25,
      localContact: '+91 90926 19444',
      whatsapp: '+91 90926 19444',
      keyServices: ['Computer Repair', 'Network Setup', 'Data Recovery', 'AMC Services', 'Software Installation', 'Hardware Upgrade'],
      partnerships: [
        { name: 'VIT University', type: 'Educational Institution' },
        { name: 'CMC Hospital', type: 'Healthcare' },
        { name: 'Vellore Fort', type: 'Government' }
      ],
      testimonials: [
        {
          name: 'Rajesh Kumar',
          company: 'Kumar Textiles',
          content: 'Y-Tech has been our IT partner for 3 years. Their quick response and reliable service keeps our business running smoothly.'
        },
        {
          name: 'Dr. Priya Sharma',
          company: 'Sharma Clinic',
          content: 'Excellent service! They set up our entire clinic network and provide ongoing support. Highly recommended.'
        }
      ]
    },
    {
      id: 2,
      name: 'Thirupathur',
      district: 'Tirupattur District',
      responseTime: 'Same Day',
      travelTime: '45 minutes',
      clientsServed: 180,
      businessPartnerships: 12,
      localContact: '+91 98765 43211',
      whatsapp: '+91 98765 43211',
      keyServices: ['Computer Repair', 'Network Setup', 'Data Recovery', 'Software Installation'],
      partnerships: [
        { name: 'Thirupathur Municipality', type: 'Government' },
        { name: 'Local Schools Network', type: 'Educational' }
      ],
      testimonials: [
        {
          name: 'Murugan S',
          company: 'Murugan Industries',
          content: 'Professional service with fair pricing. They helped us upgrade our entire office IT infrastructure.'
        }
      ]
    },
    {
      id: 3,
      name: 'Vaniyambadi',
      district: 'Tirupattur District',
      responseTime: 'Next Day',
      travelTime: '1 hour',
      clientsServed: 120,
      businessPartnerships: 8,
      localContact: '+91 98765 43212',
      whatsapp: '+91 98765 43212',
      keyServices: ['Computer Repair', 'Data Recovery', 'Software Installation', 'Virus Removal'],
      partnerships: [
        { name: 'Vaniyambadi Leather Exporters', type: 'Manufacturing' },
        { name: 'Government Hospital', type: 'Healthcare' }
      ],
      testimonials: [
        {
          name: 'Abdul Rahman',
          company: 'Rahman Exports',
          content: 'Reliable IT support for our export business. They understand our urgent requirements and deliver on time.'
        }
      ]
    },
    {
      id: 4,
      name: 'Sri Perambudur',
      district: 'Kanchipuram District',
      responseTime: 'Next Day',
      travelTime: '2 hours',
      clientsServed: 95,
      businessPartnerships: 6,
      localContact: '+91 98765 43213',
      whatsapp: '+91 98765 43213',
      keyServices: ['Computer Repair', 'Network Setup', 'AMC Services', 'Hardware Upgrade'],
      partnerships: [
        { name: 'Industrial Park', type: 'Manufacturing Hub' },
        { name: 'Local IT Companies', type: 'Technology' }
      ],
      testimonials: [
        {
          name: 'Lakshmi Narayanan',
          company: 'Tech Solutions Pvt Ltd',
          content: 'Great support for our IT infrastructure. Professional team with good technical knowledge.'
        }
      ]
    },
    {
      id: 5,
      name: 'Gudiyatham',
      district: 'Vellore District',
      responseTime: 'Same Day',
      travelTime: '30 minutes',
      clientsServed: 160,
      businessPartnerships: 10,
      localContact: '+91 98765 43214',
      whatsapp: '+91 98765 43214',
      keyServices: ['Computer Repair', 'Network Setup', 'Data Recovery', 'Software Installation'],
      partnerships: [
        { name: 'Gudiyatham Municipality', type: 'Government' },
        { name: 'Local Business Association', type: 'Business Network' }
      ],
      testimonials: [
        {
          name: 'Venkatesh R',
          company: 'Venkatesh Traders',
          content: 'Quick and efficient service. They solved our network issues within hours of our call.'
        }
      ]
    },
    {
      id: 6,
      name: 'Ranipet',
      district: 'Ranipet District',
      responseTime: 'Same Day',
      travelTime: '25 minutes',
      clientsServed: 200,
      businessPartnerships: 15,
      localContact: '+91 98765 43215',
      whatsapp: '+91 98765 43215',
      keyServices: ['Computer Repair', 'Network Setup', 'Data Recovery', 'AMC Services', 'Software Installation'],
      partnerships: [
        { name: 'Ranipet Industrial Area', type: 'Manufacturing' },
        { name: 'Government Offices', type: 'Government' },
        { name: 'Educational Institutions', type: 'Education' }
      ],
      testimonials: [
        {
          name: 'Anitha Devi',
          company: 'Devi Enterprises',
          content: 'Excellent AMC service. Regular maintenance keeps our systems running without any issues.'
        }
      ]
    }
  ];

  const handleAreaSelect = (area) => {
    setSelectedArea(area);
  };

  const handleViewDetails = (area) => {
    setSelectedArea(area);
    setShowDetailsModal(true);
  };

  const handleRequestService = (area) => {
    setRequestArea(area);
    setShowRequestModal(true);
  };

  const handleServiceRequest = (requestData) => {
    console.log('Service request submitted:', requestData);
    setSuccessMessage(`Service request submitted successfully! Request ID: ${requestData?.requestId}. We will contact you within ${requestArea?.responseTime?.toLowerCase()}.`);
    setShowRequestModal(false);
    setRequestArea(null);
    
    // Clear success message after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000);
  };

  const handleEmergencyCall = () => {
    window.open('tel:+919092619444', '_self');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Service Areas - Y-Tech Computer | IT Support Across Tamil Nadu</title>
        <meta name="description" content="Y-Tech provides comprehensive IT services across Vellore, Thirupathur, Vaniyambadi, Sri Perambudur, Gudiyatham, and Ranipet. Same-day service available in select areas." />
        <meta name="keywords" content="IT services Tamil Nadu, computer repair Vellore, network setup Thirupathur, data recovery Vaniyambadi" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                Our Service Areas
              </h1>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Comprehensive IT support across Tamil Nadu with guaranteed response times and local expertise in every region we serve.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleEmergencyCall}
                  iconName="Phone"
                  iconPosition="left"
                  className="btn-emergency pulse-emergency"
                >
                  Emergency Support: 24/7
                </Button>
                <div className="flex items-center space-x-2 text-text-secondary">
                  <Icon name="Clock" size={16} />
                  <span className="text-sm">2-Hour Response Guarantee</span>
                </div>
              </div>
            </div>

            {/* Coverage Statistics */}
            <CoverageStats areas={serviceAreas} />
          </div>
        </section>

        {/* Success Message */}
        {successMessage && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4">
            <div className="bg-success/10 border border-success/20 rounded-lg p-4 flex items-center space-x-3">
              <Icon name="CheckCircle" size={20} className="text-success" />
              <p className="text-success font-medium">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Interactive Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                Interactive Coverage Map
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Explore our service areas and see response times for each location. Click on any area marker to view detailed information.
              </p>
            </div>

            <InteractiveMap
              areas={serviceAreas}
              selectedArea={selectedArea}
              onAreaSelect={handleAreaSelect}
            />
          </div>
        </section>

        {/* Service Areas Grid */}
        {/* <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-text-primary mb-4">
                All Service Locations
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Detailed information about our services, response times, and local partnerships in each area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceAreas?.map((area) => (
                <ServiceAreaCard
                  key={area?.id}
                  area={area}
                  onViewDetails={handleViewDetails}
                  onRequestService={handleRequestService}
                />
              ))}
            </div>
          </div>
        </section> */}

        {/* Service Commitment Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">
                  Our Service Commitment
                </h2>
                <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                  Quality IT support with transparent pricing and guaranteed response times across all service areas.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Clock" size={24} className="text-success" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Guaranteed Response
                  </h3>
                  <p className="text-text-secondary">
                    Same-day service in Vellore, Gudiyatham, and Ranipet. Next-day for other areas.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Local Expertise
                  </h3>
                  <p className="text-text-secondary">
                    Deep understanding of regional business needs and local partnerships.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Shield" size={24} className="text-warning" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    Quality Assurance
                  </h3>
                  <p className="text-text-secondary">
                    All services backed by our quality guarantee and customer satisfaction promise.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" size={24} className="text-brand-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">
                    24/7 Emergency
                  </h3>
                  <p className="text-text-secondary">
                    Round-the-clock emergency support available across all service areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary to-secondary">
          <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need IT Support in Your Area?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch with our local team for immediate assistance or schedule a service visit at your convenience.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={handleEmergencyCall}
                iconName="Phone"
                iconPosition="left"
                className="bg-white text-primary hover:bg-white/90"
              >
                Call Now: +91 90926 19444
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://wa.me/919092619444', '_blank')}
                iconName="MessageCircle"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                WhatsApp Support
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
                       height: "7rem",
                       marginLeft: "-5.1rem",
                     }}
                   />
   
                   <div>
                     <h3 className="text-xl font-bold">Y-Tech</h3>
                     <p className="text-sm opacity-80">Computer</p>
                   </div>
                 </div>
                 <p className="text-sm opacity-90 leading-relaxed">
                   Your trusted technology partner since 2004, providing
                   comprehensive IT solutions across Tamil Nadu with 2-hour
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
                       href="mailto:support@ytech.com"
                       className="opacity-90 hover:opacity-100"
                     >
                       support@ytech.com
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
      {/* Modals */}
      <AreaDetailsModal
        area={selectedArea}
        isOpen={showDetailsModal}
        onClose={() => {
          setShowDetailsModal(false);
          setSelectedArea(null);
        }}
        onRequestService={handleRequestService}
      />
      <ServiceRequestModal
        area={requestArea}
        isOpen={showRequestModal}
        onClose={() => {
          setShowRequestModal(false);
          setRequestArea(null);
        }}
        onSubmit={handleServiceRequest}
      />
    </div>
  );
};

export default ServiceAreas;