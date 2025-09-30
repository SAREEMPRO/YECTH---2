import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProductCard = ({ product, onQuickQuote, onViewDetails, onCompare, isComparing }) => {
  const getAvailabilityColor = (status) => {
    switch (status) {
      case 'In Stock': return 'text-success bg-success/10';
      case 'Limited Stock': return 'text-warning bg-warning/10';
      case 'Out of Stock': return 'text-error bg-error/10';
      case 'Pre-Order': return 'text-primary bg-primary/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  return (
    <div className="bg-card rounded-xl border border-border card-hover overflow-hidden">
      {/* Product Image */}
      <div className="relative overflow-hidden h-48 bg-muted">
        <Image
          src={product?.image}
          alt={product?.name}
          className="w-full h-full object-cover"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product?.isBestSeller && (
            <span className="bg-brand-orange text-brand-orange-foreground text-xs font-semibold px-2 py-1 rounded-full">
              Best Seller
            </span>
          )}
          {product?.isNew && (
            <span className="bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded-full">
              New Arrival
            </span>
          )}
          {product?.discount && (
            <span className="bg-success text-success-foreground text-xs font-semibold px-2 py-1 rounded-full">
              {product?.discount}% OFF
            </span>
          )}
        </div>

        {/* Compare Checkbox */}
        <div className="absolute top-3 right-3">
          <button
            onClick={() => onCompare(product?.id)}
            className={`w-8 h-8 rounded-full border-2 flex items-center justify-center smooth-transition ${
              isComparing 
                ? 'bg-primary border-primary text-primary-foreground' 
                : 'bg-card border-border hover:border-primary'
            }`}
          >
            {isComparing && <Icon name="Check" size={16} />}
          </button>
        </div>
      </div>
      {/* Product Info */}
      <div className="p-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
            {product?.category}
          </span>
          <span className="text-xs text-text-secondary">{product?.brand}</span>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-text-primary mb-2 line-clamp-2 min-h-[3rem]">
          {product?.name}
        </h3>

        {/* Key Specifications */}
        <div className="space-y-1 mb-3">
          {product?.keySpecs?.slice(0, 3)?.map((spec, index) => (
            <div key={index} className="flex items-center text-xs text-text-secondary">
              <Icon name="Check" size={12} className="text-success mr-2 flex-shrink-0" />
              <span className="truncate">{spec}</span>
            </div>
          ))}
        </div>

        {/* Availability */}
        <div className="flex items-center mb-3">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${getAvailabilityColor(product?.availability)}`}>
            {product?.availability}
          </span>
          {product?.deliveryDays && (
            <span className="text-xs text-text-secondary ml-2">
              • Delivery: {product?.deliveryDays} days
            </span>
          )}
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-text-primary">
              {formatPrice(product?.currentPrice)}
            </span>
            {product?.originalPrice && product?.originalPrice > product?.currentPrice && (
              <span className="text-sm text-text-secondary line-through">
                {formatPrice(product?.originalPrice)}
              </span>
            )}
          </div>
          {product?.bulkPrice && (
            <p className="text-xs text-primary mt-1">
              Bulk pricing from {formatPrice(product?.bulkPrice)} (10+ units)
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(product)}
            className="flex-1"
            iconName="Eye"
            iconPosition="left"
          >
            Details
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onQuickQuote(product)}
            className="flex-1"
            iconName="MessageCircle"
            iconPosition="left"
            disabled={product?.availability === 'Out of Stock'}
          >
            Quote
          </Button>
        </div>

        {/* Installation Service */}
        {product?.installationAvailable && (
          <div className="mt-3 p-2 bg-accent/10 rounded-lg">
            <div className="flex items-center text-xs text-accent">
              <Icon name="Wrench" size={12} className="mr-1" />
              <span>Installation & Setup Available</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;