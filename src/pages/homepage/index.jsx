import React, { useState, useEffect } from "react";
import Header from "../../components/ui/Header";
import HeroCarou from "./components/HeroCarou";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import TrustIndicators from "./components/TrustIndicators";
import TestimonialCarousel from "./components/TestimonialCarousel";
import QuickActionCTA from "./components/QuickActionCTA";
import Logo from "../../../Logo.png";
import { Helmet } from "react-helmet";
import { FaEye } from "react-icons/fa";
import { motion } from "framer-motion";
// Import your Firebase service
import { visitorCountService } from "../../../Firebase";

const Homepage = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Firebase visitor counter
  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        // Check if user already visited in this session
        const hasVisited = sessionStorage.getItem('ytech_visited');
        
        if (!hasVisited) {
          // Increment count in Firebase
          const newCount = await visitorCountService.incrementVisitorCount();
          if (newCount !== null) {
            setVisitorCount(newCount);
          } else {
            // Fallback: get current count without incrementing
            const currentCount = await visitorCountService.getVisitorCount();
            setVisitorCount(currentCount);
          }
          
          // Mark as visited in this session
          sessionStorage.setItem('ytech_visited', 'true');
        } else {
          // User already visited in this session, just get the current count
          const currentCount = await visitorCountService.getVisitorCount();
          setVisitorCount(currentCount);
        }
        
      } catch (error) {
        console.error("Error updating visitor count:", error);
        // Fallback to localStorage if Firebase fails
        fallbackVisitorCount();
      } finally {
        setIsLoading(false);
      }
    };

    // Fallback function using localStorage
    const fallbackVisitorCount = () => {
      try {
        const storedCount = localStorage.getItem('ytech_website_visitors');
        
        if (storedCount) {
          const newCount = parseInt(storedCount) + 1;
          localStorage.setItem('ytech_website_visitors', newCount.toString());
          setVisitorCount(newCount);
        } else {
          localStorage.setItem('ytech_website_visitors', '1');
          setVisitorCount(1);
        }
      } catch (error) {
        setVisitorCount(1);
      }
    };

    updateVisitorCount();
  }, []);

  // Format number with Indian numbering system
  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Y-Tech Computer</title>
        <meta
          name="description"
          content="Explore Y-Tech's complete range of IT products - Computers, Laptops, Printers, CCTV, Biometric systems, Network cables and all IT accessories in Vellore."
        />
        <meta
          name="keywords"
          content="computer sales vellore, laptop repair, printer sales, cctv installation, biometric system, network cables, it accessories"
        />
      </Helmet>
      <Header />
      
      <main className="pt-4">
<HeroCarou />
        <HeroSection />
        <ServicesGrid />
        <TrustIndicators />

        {/* Visitor Count Section */}
        <section className="relative py-16 bg-gradient-to-b from-blue-50 via-blue-50 to-blue-100 overflow-hidden">
          <div className="max-w-md mx-auto px-4 lg:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white shadow-xl rounded-3xl p-6 sm:p-8 md:p-10 text-center border border-blue-200 backdrop-blur-sm relative"
            >
              {/* Subtle background glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-blue-400/20 via-sky-200/20 to-transparent blur-3xl pointer-events-none" />

              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl font-semibold text-blue-800 mb-4 flex items-center justify-center space-x-2"
              >
                <FaEye className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <span>Number of Views</span>
              </motion.h3>

              {/* Animated Counter */}
              <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 tracking-tight drop-shadow-sm mb-6 flex justify-center">
                {isLoading ? (
                  <div className="flex space-x-2 animate-pulse">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-2 h-2 sm:w-3 sm:h-3 bg-blue-300 rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      ></div>
                    ))}
                  </div>
                ) : (
                  <motion.span
                    key={visitorCount}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    {formatNumber(visitorCount)}
                  </motion.span>
                )}
              </div>

              {/* Divider */}
              <div className="w-16 h-[2px] bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mb-4"></div>

              {/* Thank You Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-blue-700/70 text-xs sm:text-sm"
              >
                Appreciate your visit! Every view inspires this project to grow.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="relative py-16 sm:py-20 bg-surface">
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
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
                Our Trusted Clients
              </h2>
              <p className="mt-3 text-text-secondary max-w-2xl mx-auto text-sm sm:text-base">
                Serving industries, institutions, and organizations across Tamil Nadu with a strong reputation for reliability and 24/7 emergency support.
              </p>
            </div>

            {/* Grid */}
            <div className="mt-8 sm:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7 lg:gap-8">
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
                  title: "📊 Auditor's Offices",
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
                  className="group rounded-xl sm:rounded-2xl border border-gray-200 bg-white/90 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 focus-within:ring-2 focus-within:ring-brand-orange/30"
                >
                  <div className="rounded-t-xl sm:rounded-t-2xl bg-gradient-to-r from-blue-50 to-sky-100 p-4 sm:p-5 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base md:text-lg font-semibold text-brand-primary">
                        {card.title}
                      </h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700">
                        {card.count}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <ul className="text-xs sm:text-sm text-text-secondary space-y-2 sm:space-y-3 list-decimal list-inside marker:text-brand-orange">
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
            <div className="mt-8 sm:mt-12 text-center">
              <p className="text-xs sm:text-sm md:text-base text-text-secondary">
                Clients spread across{" "}
                <span className="font-medium text-text-primary">
                  Vellore, Thirupathur, Vaniyambadi, Sriperumbudur, Gudiyatham, Ranipet
                </span>{" "}
                and surrounding regions.
              </p>
            </div>
          </div>
        </section>

        <TestimonialCarousel />
        <QuickActionCTA />
      </main>

      {/* Footer */}
      <footer className="bg-text-primary text-primary-foreground py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Company Info */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center">
                <img
                  src={Logo}
                  alt="Y-Tech Computer"
                  className="w-24 sm:w-32 md:w-36 h-auto"
                />
                <div className="ml-2 sm:ml-4">
                  <h3 className="text-lg sm:text-xl font-bold">Y-Tech</h3>
                  <p className="text-xs sm:text-sm opacity-80">Computer</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm opacity-90 leading-relaxed">
                Your trusted technology partner since 2005, providing
                comprehensive IT solutions across Tamil Nadu with 2-hour
                emergency response guarantee.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-base sm:text-lg">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
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
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-base sm:text-lg">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li className="opacity-80">Computer & Laptop Repair</li>
                <li className="opacity-80">Networking Solutions</li>
                <li className="opacity-80">AMC Services</li>
                <li className="opacity-80">Data Recovery</li>
                <li className="opacity-80">Emergency Support</li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4">
              <h4 className="font-semibold text-base sm:text-lg">Contact Info</h4>
              <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <div className="flex items-start space-x-2">
                  <span className="opacity-60 mt-0.5">📍</span>
                  <span className="opacity-90">Vellore, Tamil Nadu, India</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="opacity-60">📞</span>
                  <a
                    href="tel:+919092619444"
                    className="opacity-90 hover:opacity-100 break-all"
                  >
                    +91 90926 19444
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="opacity-60">✉️</span>
                  <a
                    href="mailto:support@ytechcomputer.com"
                    className="opacity-90 hover:opacity-100 break-all"
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
          <div className="border-t border-primary-foreground/20 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs sm:text-sm opacity-80 text-center sm:text-left mb-4 sm:mb-0">
              © {new Date().getFullYear()} Y-Tech Computer. All rights reserved.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-xs sm:text-sm opacity-80">Emergency Hotline:</span>
              <a
                href="tel:+919894291164"
                className="bg-brand-orange text-brand-orange-foreground px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-brand-orange-dark transition-colors whitespace-nowrap"
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

export default Homepage;