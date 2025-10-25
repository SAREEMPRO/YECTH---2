import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
// import img from '../../../assets/3.png'
const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-surface to-accent/5 pb-16 overflow-hidden mt-[-50px] sm:mt-[49px]
">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Award" size={16} />
                <span>Trusted Since 2005</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-text-primary leading-tight">
                Your Technology
                <span className="text-primary block">Partner Since 2005</span>
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                Complete IT solutions for businesses across Tamil Nadu. From emergency repairs to comprehensive AMC services, we keep your technology running smoothly with our response guarantee.
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 py-4">
           
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Users" size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">50+ Clients</p>
                  <p className="text-sm text-text-secondary">Across Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name="Shield" size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Authorized Center</p>
                  <p className="text-sm text-text-secondary">Certified Technicians</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="btn-emergency pulse-emergency"
                onClick={() => window.open('tel:+919092619444', '_self')}
              >
                Emergency Support
              </Button>
              
              <Link to="/services-overview">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ArrowRight"
                  iconPosition="right"
                  className="w-full sm:w-auto"
                >
                  View All Services
                </Button>
              </Link>
            </div>

   <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 pt-4 border-t border-border">
  {/* Phone */}
  <div className="flex items-center space-x-2">
    <Icon name="Phone" size={16} className="text-text-secondary" />
    <span className="text-sm text-text-secondary">+91 90926 19444</span>
  </div>

  {/* Email */}
  <div className="flex items-center space-x-2">
    <Icon name="Mail" size={16} className="text-text-secondary" />
    <span className="text-sm text-text-secondary">support@ytechcomputer.com</span>
  </div>
</div>


          </div>

          {/* Image Section */}
          <div className="relative">
            <div className="relative bg-surface rounded-2xl shadow-2xl overflow-hidden">
              <Image
                src="https://lh3.googleusercontent.com/p/AF1QipNpzNZSyvOJCBkQzypKX61whuCOXcx9UhPRQdY3=s707-k-no"
                alt="Mr. Perumal and Y-Tech team providing computer repair services"
                className="w-full h-96 object-cover"
              />
              
              {/* Overlay Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} className="text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Mr. Perumal</h3>
                    <p className="text-sm text-text-secondary">Proprietor D.E.E., BBA</p>
                    <div className="flex items-center space-x-1 mt-1">
                      <Icon name="Star" size={12} className="text-warning fill-current" />
                      <Icon name="Star" size={12} className="text-warning fill-current" />
                      <Icon name="Star" size={12} className="text-warning fill-current" />
                      <Icon name="Star" size={12} className="text-warning fill-current" />
                      <Icon name="Star" size={12} className="text-warning fill-current" />
                      <span className="text-xs text-text-secondary ml-1">15+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Zap" size={32} className="text-accent-foreground" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Settings" size={24} className="text-primary-foreground" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;