import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Icon from "../AppIcon";
import Logo from "../../../Logo.png";
import Button from "./Button";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Home", path: "/homepage", icon: "Home" },
    { name: "About Y-Tech", path: "/about-y-tech", icon: "Users" },
    { name: "Services", path: "/services-overview", icon: "Settings" },
    // { name: "Service Areas", path: "/service-areas", icon: "MapPin" },
    { name: "Products", path: "/products-showcase", icon: "Package" },
    { name: "Terms", path: "/terms", icon: "FileCheck" },
    { name: "Careers", path: "/careers", icon: "Briefcase" },
  ];

  const secondaryItems = [
    { name: "Contact & Support", path: "/contact-support", icon: "Phone" },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-surface border-b border-border"
      style={{ userSelect: "none" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 lg:px-6">
          <div className="flex items-center space-x-3">
            <Link to="/homepage" className="flex items-center group">
              <img
                src={Logo}
                alt="Y-Tech Logo"
                className="
        w-[15rem] h-[6rem] -ml-[4.1rem]   /* default: mobile */
        lg:h-[7rem] lg:-ml-[6.1rem]       /* desktop override */
      "
              />

              <div className="hidden sm:block lg:ml-[-1.5rem]">
                <h1
                  className="text-xl font-bold text-primary"
                  style={{ fontSize: "25px" }}
                >
                  Y-Tech
                </h1>
                <p
                  className="text-xs text-text-secondary -mt-1 font-bold"
                  style={{ fontSize: "15px" }}
                >
                  Computer
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium smooth-transition flex items-center space-x-2 ${
                  isActivePath(item?.path)
                    ? "bg-primary text-primary-foreground rounded-lg"
                    : "text-text-primary hover:bg-muted hover:text-primary rounded-lg"
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            

            {/* Contact Support - Desktop */}
            <div className="hidden lg:block">
              <Link to="/contact-support">
                <Button
                  variant="outline"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className={
                    isActivePath("/contact-support")
                      ? "bg-primary text-primary-foreground border-primary"
                      : ""
                  }
                >
                  Contact
                </Button>
              </Link>
            </div>
          </nav>

          {/* Emergency Contact & Mobile Menu */}
          <div className="flex items-center space-x-3">
  

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="micro-confirm"
              >
                <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={20} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface border-t border-border shadow-lg">
            <nav className="px-4 py-4 space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium smooth-transition ${
                    isActivePath(item?.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-text-primary hover:bg-muted hover:text-primary"
                  }`}
                >
                  <Icon name={item?.icon} size={18} />
                  <span>{item?.name}</span>
                </Link>
              ))}

              {/* Secondary Items */}
              <div className="pt-2 border-t border-border mt-4">
                {secondaryItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={closeMobileMenu}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium smooth-transition ${
                      isActivePath(item?.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-text-primary hover:bg-muted hover:text-primary"
                    }`}
                  >
                    <Icon name={item?.icon} size={18} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Emergency Contact Info */}
              <div className="pt-4 border-t border-border mt-4">
                <div className="bg-brand-orange/10 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon
                      name="Clock"
                      size={16}
                      className="text-brand-orange"
                    />
                    <span className="text-sm font-semibold text-brand-orange">
                      24/7 Emergency Support
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon
                      name="Phone"
                      size={16}
                      className="text-text-secondary"
                    />
                    <a
                      href="tel:+919092619444"
                      className="text-sm text-text-primary font-medium hover:text-primary"
                    >
                      +91 90926 19444
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
