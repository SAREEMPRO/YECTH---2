import React from "react";
import Header from "../../components/ui/Header";
import EmergencyBanner from "./components/EmergencyBanner";
import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import TrustIndicators from "./components/TrustIndicators";
import TestimonialCarousel from "./components/TestimonialCarousel";
import QuickActionCTA from "./components/QuickActionCTA";
import Logo from "../../../Logo.png";
import { Helmet } from "react-helmet";

const Homepage = () => {
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
      <EmergencyBanner />
   <main className="pt-4">
  <HeroSection />
  <ServicesGrid />
  <TrustIndicators />

  {/* ⬇️ Stylish Clients Section */}
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
      {/* Reusable Card */}
      {[
        {
          title: "🏭 Industrial Clients",
          count: 5,
          clients: [
            "Indoocool Ranipet",
            "Nidec India Precision Tools Ltd.",
            "Amper Electric Scooters",
            "TCS",
            "Nifo South India Manufacture",
          ],
        },
        {
          title: "🏢 Government Sectors",
          count: 8,
          clients: [
            "Collector Office",
            "RTO Office",
            "EB Office",
            "DRO Office",
            "Forest Office",
            "NH Office",
            "Corporation",
            "Female Jail",
          ],
        },
        {
          title: "🎓 Educational Institutions",
          count: 7,
          clients: [
            "Don Bosco Groups",
            "Sami Vikenda Serkadu",
            "Thiruvalur University",
            "Holycross Matric School",
            "St. Mark School",
            "NTTF",
            "Oxford",
          ],
        },
        {
          title: "🏥 Hospitals",
          count: 4,
          clients: ["Akshaya", "Saradha", "Annai Pet Shops", "Rajan & Co"],
        },
        {
          title: "📊 Auditor Offices",
          count: 3,
          clients: ["R.K. Associates", "Mani & Co", "Raja Varman"],
        },
        {
          title: "⚙️ Small Scale Industries",
          count: 3,
          clients: ["C-Tech Engineering", "B&B", "Sai Subratham"],
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
          Vellore, Thirupathur, Vaniyambadi, Sri Perumbudur, Gudiyatham, Ranipet
        </span>{" "}
        and more.
      </p>
    </div>
  </div>
</section>



  <TestimonialCarousel />
  <QuickActionCTA />
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
  );
};

export default Homepage;
