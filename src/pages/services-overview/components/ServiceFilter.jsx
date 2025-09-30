import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceFilter = ({ 
  activeFilter, 
  onFilterChange, 
  activeSort, 
  onSortChange,
  searchQuery,
  onSearchChange 
}) => {
  const filterOptions = [
    { id: 'all', label: 'All Services', icon: 'Grid3X3' },
    { id: 'repair', label: 'Repair & Fix', icon: 'Wrench' },
    { id: 'networking', label: 'Networking', icon: 'Wifi' },
    { id: 'maintenance', label: 'Maintenance', icon: 'Settings' },
    { id: 'emergency', label: 'Emergency', icon: 'Zap' }
  ];

  const sortOptions = [
    { id: 'popular', label: 'Most Popular', icon: 'TrendingUp' },
    { id: 'price-low', label: 'Price: Low to High', icon: 'ArrowUp' },
    { id: 'price-high', label: 'Price: High to Low', icon: 'ArrowDown' },
    { id: 'response-time', label: 'Fastest Response', icon: 'Clock' }
  ];

  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e?.target?.value)}
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {filterOptions?.map((option) => (
            <Button
              key={option?.id}
              variant={activeFilter === option?.id ? "default" : "outline"}
              size="sm"
              iconName={option?.icon}
              iconPosition="left"
              onClick={() => onFilterChange(option?.id)}
              className="text-xs"
            >
              {option?.label}
            </Button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-secondary whitespace-nowrap">Sort by:</span>
          <select
            value={activeSort}
            onChange={(e) => onSortChange(e?.target?.value)}
            className="border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {sortOptions?.map((option) => (
              <option key={option?.id} value={option?.id}>
                {option?.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default ServiceFilter;