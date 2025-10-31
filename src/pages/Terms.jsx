import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../components/ui/Header';
import Icon from '../components/AppIcon';
import Logo from "../../Logo.png"

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions - Y-Tech Computer & Services | Vellore</title>
        <meta name="description" content="Read Y-Tech Computer & Services maintenance terms and conditions for AMC services, warranty coverage, and service agreements in Vellore." />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-brand-orange/5 py-12">
            <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Maintenance Terms & Conditions
              </h1>
              <p className="text-xl text-text-secondary">
                Understanding our service agreement for Annual Maintenance Contracts (AMC)
              </p>
            </div>
          </section>

          {/* Terms Content */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 lg:px-6">
              <div className="bg-card border border-border rounded-xl p-8 shadow-card">
                <div className="prose prose-lg max-w-none">
                  <div className="mb-8 p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <p className="text-warning text-sm font-medium">
                      <strong>Note:</strong> Please read these terms carefully before signing any maintenance agreement. 
                      For clarification on any point, contact our support team.
                    </p>
                  </div>

                  <ol className="space-y-8 list-decimal list-outside pl-6">
                    <li className="pl-4">
                      <strong>Equipment Movement:</strong> Y-Tech computers and all peripherals should not be moved from 
                      their installed position without the knowledge and guidance of our concerned technician.
                    </li>

                    <li className="pl-4">
                      <strong>Service Response Time:</strong> Maintenance services will be provided within 2 hours of 
                      receiving the service request during business hours.
                    </li>

                    <li className="pl-4">
                      <strong>Damage Exclusion:</strong> Burned and damaged goods/parts are not covered under the Annual 
                      Maintenance Contract (AMC).
                    </li>

                    <li className="pl-4">
                      <strong>External Damage Responsibility:</strong> We shall not be responsible for repair of damage 
                      or malfunctions of the system due to accidents, or use of non-standard electrical power, dust, 
                      air conditioning issues. If repaired, the customer has to bear the cost of spares.
                    </li>

                    <li className="pl-4">
                      <strong>Parts Replacement Charges:</strong> Replacement of all parts (all spares), consumables parts 
                      like ribbon printer head, floppies, key switches & tops, hard disk media, CRT, cabinet, adaptor, 
                      plastic parts, CD-tape head/lenses/scanner unit/any type of magnetic media etc., shall be charged 
                      extra as they are not covered under any type of AMC Agreement (AMC with Parts or AMC without Parts) 
                      in laser printers.
                    </li>

                    <li className="pl-4">
                      <strong>Printer and Scanner Parts:</strong> All kinds of printer's spares and scanner's spares will 
                      be charged extra.
                    </li>

                    <li className="pl-4">
                      <strong>System Condition at Contract Termination:</strong> Customers will hand over the system in 
                      perfect working condition to Y-Tech Computers, who in turn will hand over the system in perfect 
                      working condition to customers at the time of termination of contract. AMC will cover only electronic 
                      parts of Computer Device, not any plastic or metal parts.
                    </li>

                    <li className="pl-4">
                      <strong>Initial System Condition and OTR Report:</strong> Initially AMC will be undertaken for the 
                      machines in OK conditions. If any repair is required before commencement of AMC, it shall be done 
                      at customer's cost i.e., ONE TIME REPAIR-REPORT (OTR-REPORT) before AMC undertaken. The system will 
                      be checked and repaired on customer cost. The above AMC contract is valid for hardware only. If 
                      software support is required apart from operating system, it will be charged extra.
                    </li>

                    <li className="pl-4">
                      <strong>Virus Attacks and Major Crashes:</strong> If any major crash occurs in the computer system 
                      due to virus attack, it will not be covered under AMC. Repair and damage cost will be paid by the 
                      customer.
                    </li>
                  </ol>

                  <div className="mt-12 p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">Contact for Clarifications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <Icon name="Phone" size={20} className="text-primary" />
                        <div>
                          <p className="text-sm text-text-secondary">Phone Support</p>
                          <p className="font-medium text-text-primary">+91 90926 19444</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Mail" size={20} className="text-primary" />
                        <div>
                          <p className="text-sm text-text-secondary">Email Support</p>
                          <p className="font-medium text-text-primary">support@ytechcomputer.com</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-text-secondary">
                      Last updated: {new Date().toLocaleDateString('en-IN', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

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
    </>
  );
}