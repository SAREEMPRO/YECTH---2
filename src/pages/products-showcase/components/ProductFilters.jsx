import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const ProductFilters = ({ 
  filters, 
  onFilterChange, 
  onClearFilters, 
  isFilterOpen, 
  onToggleFilter,
  productCounts 
}) => {
  const categoryOptions = [
    { value: 'all', label: `All Categories (${productCounts?.total})` },
    { value: 'desktop', label: `Business Desktops (${productCounts?.desktop})` },
    { value: 'laptop', label: `Personal Laptops (${productCounts?.laptop})` },
    { value: 'networking', label: `Networking Hardware (${productCounts?.networking})` },
    { value: 'printer', label: `Printers & Scanners (${productCounts?.printer})` },
    { value: 'accessories', label: `Accessories (${productCounts?.accessories})` }
  ];

  const brandOptions = [
    { value: 'all', label: 'All Brands' },
    { value: 'hp', label: 'HP' },
    { value: 'dell', label: 'Dell' },
    { value: 'lenovo', label: 'Lenovo' },
    { value: 'asus', label: 'ASUS' },
    { value: 'acer', label: 'Acer' },
    { value: 'cisco', label: 'Cisco' },
    { value: 'tp-link', label: 'TP-Link' },
    { value: 'canon', label: 'Canon' },
    { value: 'epson', label: 'Epson' }
  ];

  const sortOptions = [
    { value: 'relevance', label: 'Most Relevant' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const priceRanges = [
    { id: 'under-25k', label: 'Under ₹25,000', min: 0, max: 25000 },
    { id: '25k-50k', label: '₹25,000 - ₹50,000', min: 25000, max: 50000 },
    { id: '50k-100k', label: '₹50,000 - ₹1,00,000', min: 50000, max: 100000 },
    { id: '100k-200k', label: '₹1,00,000 - ₹2,00,000', min: 100000, max: 200000 },
    { id: 'above-200k', label: 'Above ₹2,00,000', min: 200000, max: Infinity }
  ];

  const availabilityOptions = [
    { id: 'in-stock', label: 'In Stock' },
    { id: 'limited-stock', label: 'Limited Stock' },
    { id: 'pre-order', label: 'Pre-Order Available' }
  ];

  const featureOptions = [
    { id: 'best-seller', label: 'Best Sellers' },
    { id: 'new-arrival', label: 'New Arrivals' },
    { id: 'on-sale', label: 'On Sale' },
    { id: 'bulk-pricing', label: 'Bulk Pricing Available' },
    { id: 'installation', label: 'Installation Service' },
    { id: 'warranty-extended', label: 'Extended Warranty' }
  ];

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden mb-4">
        <Button
          variant="outline"
          onClick={onToggleFilter}
          iconName={isFilterOpen ? "X" : "Filter"}
          iconPosition="left"
          className="w-full"
        >
          {isFilterOpen ? 'Close Filters' : 'Show Filters'}
        </Button>
      </div>
      {/* Filter Panel */}
      <div className={`bg-card rounded-xl border border-border p-6 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
        {/* Filter Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-text-primary flex items-center">
            <Icon name="Filter" size={20} className="mr-2" />
            Filters
          </h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
            iconName="RotateCcw"
            iconPosition="left"
          >
            Clear All
          </Button>
        </div>

        <div className="space-y-6">
          {/* Sort By */}
          <div>
            <Select
              label="Sort By"
              options={sortOptions}
              value={filters?.sortBy}
              onChange={(value) => onFilterChange('sortBy', value)}
            />
          </div>

          {/* Category Filter */}
          <div>
            <Select
              label="Category"
              options={categoryOptions}
              value={filters?.category}
              onChange={(value) => onFilterChange('category', value)}
            />
          </div>

          {/* Brand Filter */}
          <div>
            <Select
              label="Brand"
              options={brandOptions}
              value={filters?.brand}
              onChange={(value) => onFilterChange('brand', value)}
              searchable
            />
          </div>

          {/* Price Range */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-3">Price Range</h4>
            <div className="space-y-2">
              {priceRanges?.map((range) => (
                <Checkbox
                  key={range?.id}
                  label={range?.label}
                  checked={filters?.priceRanges?.includes(range?.id)}
                  onChange={(e) => {
                    const newRanges = e?.target?.checked
                      ? [...filters?.priceRanges, range?.id]
                      : filters?.priceRanges?.filter(id => id !== range?.id);
                    onFilterChange('priceRanges', newRanges);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-3">Availability</h4>
            <div className="space-y-2">
              {availabilityOptions?.map((option) => (
                <Checkbox
                  key={option?.id}
                  label={option?.label}
                  checked={filters?.availability?.includes(option?.id)}
                  onChange={(e) => {
                    const newAvailability = e?.target?.checked
                      ? [...filters?.availability, option?.id]
                      : filters?.availability?.filter(id => id !== option?.id);
                    onFilterChange('availability', newAvailability);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-medium text-text-primary mb-3">Features</h4>
            <div className="space-y-2">
              {featureOptions?.map((feature) => (
                <Checkbox
                  key={feature?.id}
                  label={feature?.label}
                  checked={filters?.features?.includes(feature?.id)}
                  onChange={(e) => {
                    const newFeatures = e?.target?.checked
                      ? [...filters?.features, feature?.id]
                      : filters?.features?.filter(id => id !== feature?.id);
                    onFilterChange('features', newFeatures);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Business Solutions */}
          <div className="border-t border-border pt-6">
            <h4 className="text-sm font-medium text-text-primary mb-3 flex items-center">
              <Icon name="Building" size={16} className="mr-2" />
              Business Solutions
            </h4>
            <div className="space-y-2">
              <Checkbox
                label="Small Business Packages"
                checked={filters?.businessSolutions?.includes('small-business')}
                onChange={(e) => {
                  const newSolutions = e?.target?.checked
                    ? [...filters?.businessSolutions, 'small-business']
                    : filters?.businessSolutions?.filter(id => id !== 'small-business');
                  onFilterChange('businessSolutions', newSolutions);
                }}
              />
              <Checkbox
                label="Enterprise Solutions"
                checked={filters?.businessSolutions?.includes('enterprise')}
                onChange={(e) => {
                  const newSolutions = e?.target?.checked
                    ? [...filters?.businessSolutions, 'enterprise']
                    : filters?.businessSolutions?.filter(id => id !== 'enterprise');
                  onFilterChange('businessSolutions', newSolutions);
                }}
              />
              <Checkbox
                label="Educational Packages"
                checked={filters?.businessSolutions?.includes('education')}
                onChange={(e) => {
                  const newSolutions = e?.target?.checked
                    ? [...filters?.businessSolutions, 'education']
                    : filters?.businessSolutions?.filter(id => id !== 'education');
                  onFilterChange('businessSolutions', newSolutions);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductFilters;