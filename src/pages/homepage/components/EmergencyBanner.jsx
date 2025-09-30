import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-brand-orange-foreground">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-orange-foreground/20 rounded-full flex items-center justify-center animate-pulse">
                <Icon name="AlertTriangle" size={18} className="text-brand-orange-foreground" />
              </div>
              <div>
                <p className="font-semibold text-sm">24/7 Emergency IT Support Available</p>
                <p className="text-xs opacity-90">2-Hour Response Guarantee • Call Now for Immediate Assistance</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              variant="default"
              size="sm"
              className="bg-brand-orange-foreground text-brand-orange hover:bg-brand-orange-foreground/90 font-semibold"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+919092619444', '_self')}
            >
              Call Now
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="text-brand-orange-foreground hover:bg-brand-orange-foreground/10"
              onClick={() => window.open('https://wa.me/919092619444?text=Emergency IT Support Required', '_blank')}
            >
              <Icon name="MessageCircle" size={16} />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-brand-orange-foreground hover:bg-brand-orange-foreground/10"
              onClick={() => setIsVisible(false)}
            >
              <Icon name="X" size={16} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;