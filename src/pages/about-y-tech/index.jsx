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
 <section className="relative py-20 sm:py-24">
  {/* Decorative background */}
  <div className="absolute inset-0 -z-10">
    <div className="h-full w-full bg-gradient-to-b from-surface to-surface/60" />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_400px_at_50%_-20%,theme(colors.primary/10),transparent)]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)] bg-[linear-gradient(to_right,theme(colors.border)_1px,transparent_1px),linear-gradient(to_bottom,theme(colors.border)_1px,transparent_1px)] bg-[size:32px_32px]"
    />
  </div>

  <div className="max-w-7xl mx-auto px-4 lg:px-6">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/40 dark:bg-white/5 px-3 py-1 text-xs font-medium text-text-secondary backdrop-blur">
        <span className="size-1.5 rounded-full bg-primary" />
        Trusted by sectors
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-text-primary antialiased">
        Our Valued Clients
      </h2>
      <p className="mt-3 text-base sm:text-lg text-text-secondary leading-relaxed antialiased">
        A curated snapshot of partners across industrial, government, education, healthcare and more—built on quality, safety, and on‑time delivery.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* Card helper */}
      {/* Use this wrapper for each category */}
      {[
        {
          title: 'Industrial Areas',
          icon: (
            <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 21h18v-2H3v2Zm2-4h14V8l-4 2V6l-4 2V4L5 6v11Z" />
            </svg>
          ),
          items: [
            'Indoocool Ranipet',
            'Nidec India Precision Tools Ltd., Ranipet',
            'Amper Electric Scooters, Ranipet',
            'TCS',
            'Nifo South India Manufacture',
          ],
        },
        {
          title: 'Government Sectors',
          icon: (
            <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2 2 7v2h20V7L12 2Zm-9 9h18v9H3v-9Zm4 2v5h2v-5H7Zm4 0v5h2v-5h-2Zm4 0v5h2v-5h-2Z" />
            </svg>
          ),
          items: [
            'Collector Office',
            'RTO Office',
            'EB Office',
            'DRO Office',
            'Forest Office',
            'NH Office',
            'Corporation',
            'Female Jail',
          ],
        },
        {
          title: 'Educational Institutions',
          icon: (
            <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="m12 3 10 6-10 6L2 9l10-6Zm0 7.7 6.5-3.9V14c0 3.3-2.9 6-6.5 6S5.5 17.3 5.5 14V6.8L12 10.7Z" />
            </svg>
          ),
          items: [
            'Don Bosco Groups',
            'Sami Vikenda Serkadu',
            'Thiruvalur University',
            'Holycross Matric School',
            'St. Mark School',
            'NTTF',
            'Oxford',
          ],
        },
        {
          title: 'Hospitals',
          icon: (
            <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 3h10v4h4v14H3V7h4V3Zm2 2v2h6V5H9Zm2 6v3H8v2h3v3h2v-3h3v-2h-3v-3h-2Z" />
            </svg>
          ),
          items: ['Akshaya', 'Saradha', 'Annai Pet Shops', 'Rajan & Co'],
        },
        {
          title: 'Auditors Office',
          icon: (
            <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 3h16v14H5.5L4 18.5V3Zm3 4h10v2H7V7Zm0 4h10v2H7v-2Z" />
            </svg>
          ),
          items: ['R.K. Associates', 'Mani & Co', 'Raja Varman'],
        },
        {
          title: 'Photo Studios',
          icon: (
            <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4 7h3l2-2h6l2 2h3v12H4V7Zm8 3a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 10Z" />
            </svg>
          ),
          items: ['Saran Studio', 'Devi Studio'],
        },
        {
          title: 'Small Scale Industries',
          icon: (
            <svg className="size-5 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M3 21h18v-2H3v2ZM5 5h6v8H5V5Zm8 3h6v5h-6V8Z" />
            </svg>
          ),
          items: ['C-Tech Engineering', 'B&B', 'Sai Subratham'],
        },
      ].map((cat) => (
        <div
          key={cat.title}
          className="group relative rounded-xl border border-border/60 bg-white/70 dark:bg-white/5 backdrop-blur hover:bg-white/80 dark:hover:bg-white/10 transition-colors duration-300 shadow-sm hover:shadow-md"
        >
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 [background:radial-gradient(400px_100px_at_20%_0%,theme(colors.primary/8),transparent)]" />
          <div className="relative p-5 sm:p-6">
            <div className="flex items-center gap-2.5">
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                {cat.icon}
              </span>
              <h3 className="text-lg font-semibold text-text-primary antialiased">
                {cat.title}
              </h3>
              <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 ring-1 ring-emerald-500/20">
                Verified
              </span>
            </div>

            <hr className="mt-4 border-border/60" />

            <ul className="mt-4 space-y-2 text-sm text-text-secondary">
              {cat.items.map((item,idx) => (
                <li key={idx} className="flex items-start gap-2">
                  {idx+1}.<span className="antialiased leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-5 flex items-center gap-2">
              <span className="text-xs text-text-secondary">Category</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="text-xs text-text-secondary group-hover:text-text-primary transition-colors">
                Updated quarterly
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Footer locations */}
    <div className="mt-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-white/40 dark:bg-white/5 px-3 py-1 text-xs text-text-secondary backdrop-blur">
          <span className="size-1.5 rounded-full bg-primary" />
          Presence across regions
        </div>
        <p className="mt-3 text-base text-text-secondary antialiased">
          Clients across <strong className="font-semibold">Vellore</strong>, <strong className="font-semibold">Thirupathur</strong>, <strong className="font-semibold">Vaniyambadi</strong>, <strong className="font-semibold">Sri Perumbudur</strong>, <strong className="font-semibold">Gudiyatham</strong>, <strong className="font-semibold">Ranipet</strong> and beyond.
        </p>
      </div>
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