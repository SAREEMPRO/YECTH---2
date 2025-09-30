import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-r from-brand-orange to-brand-orange-dark text-brand-orange-foreground">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between py-2 sm:py-3">
          <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
            <div className="flex items-center space-x-1 sm:space-x-2 min-w-0 flex-1">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-brand-orange-foreground/20 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">
                <Icon name="AlertTriangle" size={14} className="text-brand-orange-foreground sm:w-4 sm:h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-xs sm:text-sm leading-tight truncate">
                  24/7 Emergency IT Support Available
                </p>
                <p className="text-[10px] xs:text-xs opacity-90 leading-tight truncate">
                  2-Hour Response Guarantee • Call Now for Immediate Assistance
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0 ml-2">
            <Button
              variant="default"
              size="xs"
              className="bg-brand-orange-foreground text-brand-orange hover:bg-brand-orange-foreground/90 font-semibold text-xs px-2 sm:px-3 sm:text-sm"
              iconName="Phone"
              iconPosition="left"
              onClick={() => window.open('tel:+919092619444', '_self')}
            >
              <span className="hidden xs:inline">Call Now</span>
              <span className="xs:hidden">Call</span>
            </Button>
            
            <Button
              variant="ghost"
              size="xs"
              className="text-brand-orange-foreground hover:bg-brand-orange-foreground/10 p-1 sm:p-2"
              onClick={() => window.open('https://wa.me/919092619444?text=Emergency IT Support Required', '_blank')}
            >
              <Icon name="MessageCircle" size={14} className="sm:w-4 sm:h-4" />
            </Button>

            <Button
              variant="ghost"
              size="xs"
              className="text-brand-orange-foreground hover:bg-brand-orange-foreground/10 p-1 sm:p-2"
              onClick={() => setIsVisible(false)}
            >
              <Icon name="X" size={14} className="sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;