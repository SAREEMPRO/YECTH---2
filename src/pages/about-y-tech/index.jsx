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
        <title>About Y-Tech - Your Technology Partner Since 2005 | Mr. Perumal's Story</title>
        <meta 
          name="description" 
          content="Meet Mr. Perumal and learn about Y-Tech's 20-year journey from a small computer repair shop to Tamil Nadu's trusted IT solutions provider. Serving 2000+ businesses across 6 districts with response guarantee." 
        />
        <meta name="keywords" content="Y-Tech Computer, Mr. Perumal, IT services Tamil Nadu, computer repair Vellore, technology partner, authorized service center" />
        <meta property="og:title" content="About Y-Tech - Your Technology Partner Since 2005" />
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
<section className="relative py-20 bg-surface">
  {/* Background accents */}
  <div className="pointer-events-none absolute inset-0">
    <div className="mx-auto max-w-7xl h-full opacity-70">
      <div className="absolute -top-8 left-6 h-44 w-44 rounded-full bg-brand-orange/10 blur-3xl" />
      <div className="absolute bottom-0 right-10 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />
    </div>
  </div>

  <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
    {/* Header */}
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
        Our Trusted Clients
      </h2>
      <p className="mt-3 text-text-secondary max-w-2xl mx-auto">
        Serving industries, institutions, and organizations across Tamil Nadu with a strong reputation for reliability and 24/7 emergency support.
      </p>
    </div>

    {/* Grid */}
    <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
      {[
        {
          title: "🏭 Industrial Areas",
          count: 6,
          clients: [
            "Nidec India Precision Tools Ltd, Ranipet",
            "Nifco South India Manufacturing Private Limited, Sriperumbudur",
            "Indocool Composites Private Limited, Ranipet",
            "Amper Electric Scooters, Ranipet",
            "Thirumalai Chemicals Limited (TCL), Ranipet",
            "Ultra Technologies, Ranipet",
          ],
        },
        {
          title: "🏢 Government Sectors",
          count: 8,
          clients: [
            "Collector Office – Vellore, Ranipet",
            "RTO Office – Vellore, Ranipet",
            "EB Office – Vellore, Ranipet",
            "DRO Office – Vellore, Ranipet",
            "Forest Office – Vellore, Ranipet",
            "NH Office – Vellore, Ranipet",
            "Corporation – Vellore, Ranipet",
            "Female Jail – Vellore",
          ],
        },
        {
          title: "🎓 Educational Institutions",
          count: 7,
          clients: [
            "Don Bosco Matric Hr. Sec. School, Vellore",
            "Swami Vivekananda School, Serkadu",
            "Thiruvalur University, Vellore",
            "Holycross Matric Hr. Sec. School",
            "St. Marks Matric Hr. Sec. School",
            "Nettur Technical Training Foundation (NTTF), Vellore",
            "Oxford School, Vellore",
          ],
        },
        {
          title: "🏥 Hospitals",
          count: 4,
          clients: [
            "Akshayaa Hospital, Vellore",
            "Saradha Hospital, Vellore",
            "Annai Pet Clinic, Vellore / Chitoor / Kanchipuram",
            "Rajan Dental Clinic, Vellore",
          ],
        },
        {
          title: "📊 Auditor’s Offices",
          count: 4,
          clients: [
            "R.K. Associates, Vellore",
            "Mani & Co, Vellore",
            "Raja Varman, Vellore",
            "Karunagar CA, Vellore",
          ],
        },
        {
          title: "📸 Photo Studios",
          count: 2,
          clients: [
            "Saran Studio, Vellore",
            "Devi Studio, Vellore",
          ],
        },
        {
          title: "⚙️ Small Scale Industries",
          count: 3,
          clients: [
            "C-Tech Engineering & Construction Private Limited, Vellore",
            "B&B Developers & Builders Private Limited, Vellore",
            "Sai Subrapatham Café, Vellore",
          ],
        },
      ].map((card, i) => (
        <div
          key={i}
          className="group rounded-2xl border border-gray-200 bg-white/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-orange/30"
        >
          <div className="rounded-t-2xl bg-gradient-to-r from-blue-50 to-sky-100 p-5 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <h3 className="text-base md:text-lg font-semibold text-brand-primary">
                {card.title}
              </h3>
              <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                {card.count}
              </span>
            </div>
          </div>
          <div className="p-6">
            <ul className="text-sm text-text-secondary space-y-3 list-decimal list-inside marker:text-brand-orange">
              {card.clients.map((client, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 hover:text-brand-primary transition-colors duration-200"
                >
                  {idx + 1}.
                  <span className="font-medium">{client}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>

    {/* Footnote */}
    <div className="mt-12 text-center">
      <p className="text-sm md:text-base text-text-secondary">
        Clients spread across{" "}
        <span className="font-medium text-text-primary">
          Vellore, Thirupathur, Vaniyambadi, Sriperumbudur, Gudiyatham, Ranipet
        </span>{" "}
        and surrounding regions.
      </p>
    </div>
  </div>
</section>



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

export default AboutYTech;