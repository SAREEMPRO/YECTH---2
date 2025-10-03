import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ContactForm from './components/ContactForm';
// import ContactInfo from './components/ContactInfo';
import LocationMap from './components/LocationMap';
import SupportCenter from './components/SupportCenter';
import CallbackScheduler from './components/CallbackScheduler';
import Icon from '../../components/AppIcon';
import Logo from "../../../Logo.png"

const ContactSupport = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background mt-12">
      <Helmet>
        <title>Contact & Support - Y-Tech Computer | 24/7 IT Support in Tamil Nadu</title>
        <meta name="description" content="Contact Y-Tech Computer for 24/7 IT support across Tamil Nadu. Emergency support, service requests, AMC inquiries. Call +91 90926 19444 for immediate assistance." />
        <meta name="keywords" content="Y-Tech contact, IT support Tamil Nadu, computer repair Vellore, emergency IT support, AMC services, technical support" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-12">
     <div className="flex items-center justify-center space-x-3 mb-4">
  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
    <Icon name="Headphones" size={24} className="text-primary-foreground" />
  </div>
  <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-text-primary max-[250px]:text-xl">
    Contact & Support
  </h1>
</div>

            <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8 ">
              Get in touch with Y-Tech Computer. We're here to help with all your IT needs across Tamil Nadu with 24/7 emergency support and comprehensive service options.
            </p>

            {/* Quick Action Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div 
                className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-4 cursor-pointer hover:shadow-lg smooth-transition"
                onClick={() => window.open('tel:+919092619444', '_self')}
              >
                <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Phone" size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-brand-orange mb-1">Emergency Support</h3>
                <p className="text-sm text-text-secondary mb-2">24/7 Critical IT Issues</p>
                <p className="text-sm font-bold text-brand-orange">+91 90926 19444 , +91 98942 91164</p>
              </div>

              <div 
                className="bg-primary/10 border border-primary/20 rounded-xl p-4 cursor-pointer hover:shadow-lg smooth-transition"
                onClick={() => scrollToSection('contact-form')}
              >
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="MessageSquare" size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Service Request</h3>
                <p className="text-sm text-text-secondary mb-2">Submit detailed inquiry</p>
                <p className="text-sm font-medium text-primary">Fill Contact Form</p>
              </div>

              <div 
                className="bg-success/10 border border-success/20 rounded-xl p-4 cursor-pointer hover:shadow-lg smooth-transition"
                onClick={() => scrollToSection('callback-scheduler')}
              >
                <div className="w-10 h-10 bg-success rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon name="Calendar" size={20} className="text-success-foreground" />
                </div>
                <h3 className="font-semibold text-success mb-1">Schedule Callback</h3>
                <p className="text-sm text-text-secondary mb-2">We'll call you back</p>
                <p className="text-sm font-medium text-success">Book Time Slot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

         {/* Location & Map Section */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Visit Our Locations
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Find us across Tamil Nadu with convenient locations in major cities. Get directions and contact information for each service center.
            </p>
          </div>
          
          {/* Branch Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Main Branch */}
            <div className="bg-surface rounded-xl shadow-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Building" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-primary">Y-Tech Computer</h3>
                  <p className="text-sm text-text-secondary">Head Office</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary text-sm">
                    Vellore, Tamil Nadu, India
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-text-secondary flex-shrink-0" />
                  <a href="tel:+919092619444" className="text-primary hover:text-primary-dark text-sm">
                    +91 90926 19444
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-text-secondary flex-shrink-0" />
                  <a href="tel:+919894291164" className="text-primary hover:text-primary-dark text-sm">
                    +91 98942 91164
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-text-secondary flex-shrink-0" />
                  <span className="text-text-secondary text-sm">24/7 Emergency Support</span>
                </div>
              </div>
            </div>

            {/* Branch Office */}
            <div className="bg-surface rounded-xl shadow-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center">
                  <Icon name="Store" size={20} className="text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-text-primary">M/S. ANANTHAR SYSTEMS</h3>
                  <p className="text-sm text-text-secondary">Branch Office</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <Icon name="MapPin" size={16} className="text-text-secondary mt-0.5 flex-shrink-0" />
                  <p className="text-text-secondary text-sm">
                    No.17c/14, MF. Road, Navalpur, Ranipet, Walaja TK
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-text-secondary flex-shrink-0" />
                  <a href="tel:+919092619444" className="text-primary hover:text-primary-dark text-sm">
                    +91 90926 19444
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} className="text-text-secondary flex-shrink-0" />
                  <a href="tel:+919894291164" className="text-primary hover:text-primary-dark text-sm">
                    +91 98942 91164
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-text-secondary flex-shrink-0" />
                  <span className="text-text-secondary text-sm">24/7 Emergency Support</span>
                </div>
              </div>
            </div>
          </div>

          <LocationMap />
        </div>
      </section>


      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact Info */}
            {/* <div className="lg:col-span-1">
              <ContactInfo />
            </div> */}

            {/* Right Column - Forms */}
            <div className="lg:col-span-2 space-y-8">
              {/* Contact Form */}
              <div id="contact-form">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

   
      {/* Support Center Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Self-Service Support
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Find answers to common questions, download helpful guides, and access our comprehensive support resources.
            </p>
          </div>
          <SupportCenter />
        </div>
      </section>

      {/* Response Time Guarantees */}
      <section className="py-12 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="text-center mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-4">
              Our Response Time Commitments
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto mb-8">
              We guarantee specific response times based on the type of support you need. Your time is valuable, and we respect that.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                type: 'Emergency Support',
                time: 'Within 2 Hours',
                description: 'Critical system failures, security breaches',
                icon: 'AlertTriangle',
                color: 'brand-orange',
                available: '24/7'
              },
              {
                type: 'Service Requests',
                time: 'Within 4 Hours',
                description: 'Hardware repairs, software issues',
                icon: 'Wrench',
                color: 'primary',
                available: 'Business Hours'
              },
              {
                type: 'AMC Inquiries',
                time: 'Within 24 Hours',
                description: 'Annual maintenance contracts, quotes',
                icon: 'FileText',
                color: 'success',
                available: 'Business Days'
              },
              {
                type: 'General Support',
                time: 'Within 48 Hours',
                description: 'Product information, consultations',
                icon: 'MessageCircle',
                color: 'secondary',
                available: 'Business Days'
              }
            ]?.map((guarantee, index) => (
              <div key={index} className="bg-surface rounded-xl shadow-card p-6 text-center">
                <div className={`w-12 h-12 bg-${guarantee?.color}/10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon name={guarantee?.icon} size={24} className={`text-${guarantee?.color}`} />
                </div>
                <h3 className="font-semibold text-text-primary mb-2">{guarantee?.type}</h3>
                <p className={`text-lg font-bold text-${guarantee?.color} mb-2`}>{guarantee?.time}</p>
                <p className="text-sm text-text-secondary mb-3">{guarantee?.description}</p>
                <div className={`inline-flex items-center space-x-1 px-2 py-1 bg-${guarantee?.color}/10 rounded-full`}>
                  <Icon name="Clock" size={12} className={`text-${guarantee?.color}`} />
                  <span className={`text-xs text-${guarantee?.color} font-medium`}>{guarantee?.available}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-primary-foreground/90 mb-8 text-lg text-white">
            Our experienced team is ready to help you with any IT challenge. Don't let technology problems slow down your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('tel:+919092619444', '_self')}
              className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 smooth-transition flex items-center justify-center space-x-2"
            >
              <Icon name="Phone" size={20} />
              <span>Call Us Now</span>
            </button>
            <button
              onClick={() => window.open('https://wa.me/919092619444', '_blank')}
              className="bg-primary-foreground/10 text-white border border-primary-foreground/20 px-8 py-4 rounded-lg font-semibold hover:bg-primary-foreground/20 smooth-transition flex items-center justify-center space-x-2"
            >
              <Icon name="MessageCircle" size={20} />
              <span>WhatsApp Chat</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-text-primary text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="">
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
                  <div>
                    <span className="opacity-90 block">Vellore, Tamil Nadu</span>
                    <span className="opacity-70 text-xs">Head Office</span>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="opacity-60">📍</span>
                  <div>
                    <span className="opacity-90 block">Ranipet, Walaja TK</span>
                    <span className="opacity-70 text-xs">Branch Office</span>
                  </div>
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
                  <span className="opacity-60">📞</span>
                  <a
                    href="tel:+919894291164"
                    className="opacity-90 hover:opacity-100"
                  >
                    +91 98942 91164
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
              © {new Date()?.getFullYear()} Y-Tech Computer. All rights reserved.
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

export default ContactSupport;