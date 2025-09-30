import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const BusinessPackages = ({ packages, onSelectPackage, onCustomizePackage }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  const getPackageIcon = (type) => {
    switch (type) {
      case 'startup': return 'Zap';
      case 'small-business': return 'Building';
      case 'enterprise': return 'Building2';
      case 'education': return 'GraduationCap';
      default: return 'Package';
    }
  };

  const getPackageColor = (type) => {
    switch (type) {
      case 'startup': return 'from-success to-success/80';
      case 'small-business': return 'from-primary to-secondary';
      case 'enterprise': return 'from-secondary to-primary';
      case 'education': return 'from-brand-orange to-brand-orange-dark';
      default: return 'from-primary to-secondary';
    }
  };

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-text-primary mb-4">Business Solution Packages</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Pre-configured technology solutions designed for different business sizes and industries. 
          Each package includes hardware, software, installation, and ongoing support.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {packages?.map((pkg) => (
          <div key={pkg?.id} className="bg-card rounded-xl border border-border overflow-hidden card-hover">
            {/* Package Header */}
            <div className={`bg-gradient-to-r ${getPackageColor(pkg?.type)} p-6 text-white`}>
              <div className="flex items-center justify-between mb-4">
                <Icon name={getPackageIcon(pkg?.type)} size={32} />
                {pkg?.isPopular && (
                  <span className="bg-white/20 text-xs font-bold px-2 py-1 rounded-full">
                    POPULAR
                  </span>
                )}
              </div>
              <h3 className="text-xl font-bold mb-2">{pkg?.name}</h3>
              <p className="text-sm opacity-90">{pkg?.description}</p>
            </div>

            {/* Package Content */}
            <div className="p-6">
              {/* Ideal For */}
              <div className="mb-4">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-2">
                  Ideal For
                </p>
                <p className="text-sm text-text-primary">{pkg?.idealFor}</p>
              </div>

              {/* Key Components */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">
                  What's Included
                </p>
                <div className="space-y-2">
                  {pkg?.components?.slice(0, 4)?.map((component, index) => (
                    <div key={index} className="flex items-start text-sm">
                      <Icon name="Check" size={14} className="text-success mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-text-secondary">{component}</span>
                    </div>
                  ))}
                  {pkg?.components?.length > 4 && (
                    <p className="text-xs text-primary font-medium">
                      +{pkg?.components?.length - 4} more components
                    </p>
                  )}
                </div>
              </div>

              {/* Sample Products */}
              <div className="mb-6">
                <p className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">
                  Sample Configuration
                </p>
                <div className="space-y-2">
                  {pkg?.sampleProducts?.map((product, index) => (
                    <div key={index} className="flex items-center text-xs">
                      <div className="w-8 h-8 bg-muted rounded overflow-hidden mr-2 flex-shrink-0">
                        <Image
                          src={product?.image}
                          alt={product?.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-text-secondary truncate">{product?.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-text-secondary">Starting from</span>
                  {pkg?.savings && (
                    <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                      Save {pkg?.savings}%
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-text-primary">
                    {formatPrice(pkg?.startingPrice)}
                  </span>
                  {pkg?.originalPrice && (
                    <span className="text-sm text-text-secondary line-through">
                      {formatPrice(pkg?.originalPrice)}
                    </span>
                  )}
                </div>
                <p className="text-xs text-text-secondary mt-1">
                  {pkg?.paymentTerms}
                </p>
              </div>

              {/* Support & Warranty */}
              <div className="mb-6 p-3 bg-muted/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Icon name="Shield" size={14} className="text-primary mr-2" />
                  <span className="text-xs font-semibold text-text-primary">
                    {pkg?.warranty} Warranty
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon name="Headphones" size={14} className="text-primary mr-2" />
                  <span className="text-xs text-text-secondary">
                    {pkg?.support} Support
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button
                  variant="default"
                  onClick={() => onSelectPackage(pkg)}
                  className="w-full"
                  iconName="ShoppingCart"
                  iconPosition="left"
                >
                  Select Package
                </Button>
                <Button
                  variant="outline"
                  onClick={() => onCustomizePackage(pkg)}
                  className="w-full"
                  iconName="Settings"
                  iconPosition="left"
                >
                  Customize
                </Button>
              </div>

              {/* Additional Info */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center text-text-secondary">
                    <Icon name="Truck" size={12} className="mr-1" />
                    <span>Free delivery</span>
                  </div>
                  <div className="flex items-center text-text-secondary">
                    <Icon name="Wrench" size={12} className="mr-1" />
                    <span>Setup included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Custom Package CTA */}
      <div className="mt-8 text-center">
        <div className="bg-gradient-to-r from-primary/10 to-brand-orange/10 rounded-xl p-8 border border-primary/20">
          <Icon name="Lightbulb" size={48} className="text-primary mx-auto mb-4" />
          <h3 className="text-xl font-bold text-text-primary mb-2">Need a Custom Solution?</h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Every business is unique. Our experts can design a custom technology package 
            tailored specifically to your requirements, budget, and growth plans.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('tel:+919092619444', '_self')}
            >
              Speak with Expert
            </Button>
            <Button
              variant="outline"
              iconName="Calculator"
              iconPosition="left"
            >
              Custom Quote Tool
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessPackages;