import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-text-primary leading-tight">
                Meet Mr. Perumal
                <span className="block text-primary">Your Technology Partner Since 2004</span>
              </h1>
              <p className="text-lg text-text-secondary leading-relaxed">
                From a small computer repair shop to Tamil Nadu's trusted IT solutions provider, 
                Y-Tech has been transforming businesses through reliable technology support for nearly two decades.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                iconName="Phone" 
                iconPosition="left"
                className="btn-emergency pulse-emergency"
                onClick={() => window.open('tel:+919092619444', '_self')}
              >
                Call Mr. Perumal Directly
              </Button>
          
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-text-secondary">Businesses Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2 Hours</div>
                <div className="text-sm text-text-secondary">Response Time</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mr. Perumal in his workshop with computer equipment"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-surface border border-border rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-success-foreground rounded-full animate-pulse"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">Available Now</div>
                  <div className="text-xs text-text-secondary">24/7 Emergency Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;