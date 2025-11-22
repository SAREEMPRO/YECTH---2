import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedProducts = ({ featuredProducts, onViewProduct, onQuickQuote }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-text-primary mb-2">Featured Products</h2>
          <p className="text-text-secondary">Best-selling solutions for businesses and individuals</p>
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <Icon name="Star" size={20} className="text-brand-orange" />
          <span className="text-sm font-medium text-text-secondary">Handpicked by Y Tech experts</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts?.map((product) => (
          <div key={product?.id} className="bg-gradient-to-br from-primary/5 to-brand-orange/5 rounded-xl border border-primary/20 overflow-hidden card-hover">
            {/* Product Image */}
            <div className="relative overflow-hidden h-48 bg-muted">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
              
              {/* Featured Badge */}
              <div className="absolute top-3 left-3">
                <div className="bg-gradient-to-r from-brand-orange to-brand-orange-dark text-brand-orange-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Icon name="Star" size={12} className="mr-1" />
                  FEATURED
                </div>
              </div>

              {/* Discount Badge */}
              {product?.discount && (
                <div className="absolute top-3 right-3">
                  <div className="bg-success text-success-foreground text-sm font-bold px-2 py-1 rounded-full">
                    {product?.discount}% OFF
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-6">
              {/* Category & Rating */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {product?.category}
                </span>
                <div className="flex items-center">
                  <Icon name="Star" size={14} className="text-brand-orange mr-1" />
                  <span className="text-sm font-medium text-text-primary">{product?.rating}</span>
                  <span className="text-xs text-text-secondary ml-1">({product?.reviews})</span>
                </div>
              </div>

              {/* Product Name */}
              <h3 className="font-bold text-text-primary mb-3 text-lg leading-tight">
                {product?.name}
              </h3>

              {/* Key Features */}
              <div className="space-y-2 mb-4">
                {product?.keyFeatures?.slice(0, 3)?.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-text-secondary">
                    <Icon name="CheckCircle" size={14} className="text-success mr-2 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

       

              {/* Why Featured */}
              <div className="bg-primary/5 rounded-lg p-3 mb-4">
                <div className="flex items-start">
                  <Icon name="Award" size={16} className="text-primary mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-medium text-primary mb-1">Why This Product?</p>
                    <p className="text-xs text-text-secondary">{product?.whyFeatured}</p>
                  </div>
                </div>
              </div>


              {/* Business Package Info */}
              {product?.businessPackage && (
                <div className="mt-3 p-2 bg-brand-orange/10 rounded-lg">
                  <div className="flex items-center text-xs text-brand-orange">
                    <Icon name="Building" size={12} className="mr-1" />
                    <span>Business package available • Bulk pricing • AMC included</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;