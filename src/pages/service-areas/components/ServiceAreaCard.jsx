import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceAreaCard = ({ area, onViewDetails, onRequestService }) => {
  const getResponseTimeColor = (time) => {
    if (time === 'Same Day') return 'text-success';
    if (time === 'Next Day') return 'text-warning';
    return 'text-text-secondary';
  };

  const getResponseTimeBg = (time) => {
    if (time === 'Same Day') return 'bg-success/10';
    if (time === 'Next Day') return 'bg-warning/10';
    return 'bg-muted';
  };

  return (
    <div className="bg-card rounded-xl border border-border p-6 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{area?.name}</h3>
            <p className="text-sm text-text-secondary">{area?.district}</p>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-medium ${getResponseTimeBg(area?.responseTime)} ${getResponseTimeColor(area?.responseTime)}`}>
          {area?.responseTime}
        </div>
      </div>
      <div className="space-y-3 mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Clock" size={16} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">Travel Time: {area?.travelTime}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Users" size={16} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">{area?.clientsServed}+ Clients Served</span>
        </div>
        <div className="flex items-center space-x-2">
          <Icon name="Building" size={16} className="text-text-secondary" />
          <span className="text-sm text-text-secondary">{area?.businessPartnerships} Business Partners</span>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-medium text-text-primary mb-2">Key Services Available:</h4>
        <div className="flex flex-wrap gap-2">
          {area?.keyServices?.slice(0, 3)?.map((service, index) => (
            <span key={index} className="px-2 py-1 bg-muted rounded text-xs text-text-secondary">
              {service}
            </span>
          ))}
          {area?.keyServices?.length > 3 && (
            <span className="px-2 py-1 bg-muted rounded text-xs text-text-secondary">
              +{area?.keyServices?.length - 3} more
            </span>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onViewDetails(area)}
          iconName="Eye"
          iconPosition="left"
          className="flex-1"
        >
          View Details
        </Button>
        <Button
          variant="default"
          size="sm"
          onClick={() => onRequestService(area)}
          iconName="Phone"
          iconPosition="left"
          className="flex-1"
        >
          Request Service
        </Button>
      </div>
    </div>
  );
};

export default ServiceAreaCard;