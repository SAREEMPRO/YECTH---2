import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import CompanyTimeline from './components/CompanyTimeline';
import CoreValues from './components/CoreValues';
// import TeamSection from './components/TeamSection';
import ServiceAreaMap from './components/ServiceAreaMap';
import CertificationsPartners from './components/CertificationsPartners';
import CommunityInvolvement from './components/CommunityInvolvement';
import PersonalCommitment from './components/PersonalCommitment';
import Logo from "../../../Logo.png"

const AboutYTech = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Y-Tech - Your Technology Partner Since 2004 | Mr. Perumal's Story</title>
        <meta 
          name="description" 
          content="Meet Mr. Perumal and learn about Y-Tech's 20-year journey from a small computer repair shop to Tamil Nadu's trusted IT solutions provider. Serving 2000+ businesses across 6 districts with 2-hour response guarantee." 
        />
        <meta name="keywords" content="Y-Tech Computer, Mr. Perumal, IT services Tamil Nadu, computer repair Vellore, technology partner, authorized service center" />
        <meta property="og:title" content="About Y-Tech - Your Technology Partner Since 2004" />
        <meta property="og:description" content="Discover Y-Tech's authentic story and Mr. Perumal's commitment to making technology simple and accessible for businesses across Tamil Nadu." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-y-tech" />
      </Helmet>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <CompanyTimeline />
        <CoreValues />
        {/* <TeamSection /> */}
        <ServiceAreaMap />
        <CertificationsPartners />
        <CommunityInvolvement />
        <PersonalCommitment />
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
    </div>
  );
};

export default AboutYTech;