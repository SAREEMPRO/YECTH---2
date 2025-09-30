import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const ProductComparison = ({ compareProducts, onRemoveFromCompare, onClearComparison, isVisible }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  if (!isVisible || compareProducts?.length === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-2xl z-40 transform transition-transform duration-300">
      <div className="max-w-7xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Icon name="GitCompare" size={20} className="text-primary mr-2" />
            <h3 className="font-semibold text-text-primary">
              Compare Products ({compareProducts?.length}/3)
            </h3>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onClearComparison}
              iconName="X"
              iconPosition="left"
            >
              Clear All
            </Button>
            {compareProducts?.length >= 2 && (
              <Button
                variant="default"
                size="sm"
                iconName="Eye"
                iconPosition="left"
              >
                View Comparison
              </Button>
            )}
          </div>
        </div>

        {/* Product Cards */}
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {compareProducts?.map((product) => (
            <div key={product?.id} className="flex-shrink-0 w-64 bg-muted rounded-lg p-3 relative">
              {/* Remove Button */}
              <button
                onClick={() => onRemoveFromCompare(product?.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-error text-error-foreground rounded-full flex items-center justify-center hover:bg-error/80 smooth-transition"
              >
                <Icon name="X" size={12} />
              </button>

              {/* Product Image */}
              <div className="w-full h-24 bg-background rounded-lg mb-3 overflow-hidden">
                <Image
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div>
                <h4 className="font-medium text-text-primary text-sm mb-1 line-clamp-2">
                  {product?.name}
                </h4>
                <p className="text-xs text-text-secondary mb-2">{product?.brand}</p>
                
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary text-sm">
                    {formatPrice(product?.currentPrice)}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    product?.availability === 'In Stock' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                  }`}>
                    {product?.availability}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Add More Placeholder */}
          {compareProducts?.length < 3 && (
            <div className="flex-shrink-0 w-64 border-2 border-dashed border-border rounded-lg p-3 flex flex-col items-center justify-center text-center">
              <Icon name="Plus" size={24} className="text-text-secondary mb-2" />
              <p className="text-sm text-text-secondary">
                Add {3 - compareProducts?.length} more product{3 - compareProducts?.length > 1 ? 's' : ''} to compare
              </p>
              <p className="text-xs text-text-secondary mt-1">
                Click the compare button on any product
              </p>
            </div>
          )}
        </div>

        {/* Comparison Tips */}
        {compareProducts?.length >= 2 && (
          <div className="mt-4 p-3 bg-primary/5 rounded-lg">
            <div className="flex items-start">
              <Icon name="Lightbulb" size={16} className="text-primary mr-2 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-primary mb-1">Ready to Compare!</p>
                <p className="text-xs text-text-secondary">
                  View detailed side-by-side comparison of specifications, pricing, and features to make the best choice for your needs.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductComparison;