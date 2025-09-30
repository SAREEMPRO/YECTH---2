import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ service, onLearnMore, onBookNow }) => {
  const {
    id,
    title,
    description,
    icon,
    features,
    pricing,
    turnaroundTime,
    guarantee,
    isPopular,
    urgencyLevel
  } = service;

  const getUrgencyColor = (level) => {
    switch (level) {
      case 'emergency':
        return 'text-brand-orange bg-brand-orange/10';
      case 'urgent':
        return 'text-warning bg-warning/10';
      case 'standard':
        return 'text-success bg-success/10';
      default:
        return 'text-text-secondary bg-muted';
    }
  };

  const navigate = useNavigate();

  const handleContact = () => {
    navigate('/contact-support');
    
  }

  return (
    <div className={`relative bg-card rounded-xl border border-border p-6 card-hover ${isPopular ? 'ring-2 ring-primary' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Most Popular
          </span>
        </div>
      )}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name={icon} size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(urgencyLevel)}`}>
              {urgencyLevel === 'emergency' && <Icon name="Zap" size={12} className="mr-1" />}
              {urgencyLevel?.charAt(0)?.toUpperCase() + urgencyLevel?.slice(1)}
            </span>
          </div>
        </div>
      </div>
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">
        {description}
      </p>
      <div className="space-y-3 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Starting from:</span>
          <span className="font-semibold text-primary">{pricing}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Turnaround:</span>
          <span className="font-medium text-text-primary">{turnaroundTime}</span>
        </div>

        {guarantee && (
          <div className="flex items-center space-x-2 text-sm">
            <Icon name="Shield" size={14} className="text-success" />
            <span className="text-success font-medium">{guarantee}</span>
          </div>
        )}
      </div>
      <div className="space-y-2 mb-6">
        {features?.slice(0, 3)?.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2 text-sm">
            <Icon name="Check" size={14} className="text-success" />
            <span className="text-text-secondary">{feature}</span>
          </div>
        ))}
        {features?.length > 3 && (
          <div className="text-xs text-text-secondary">
            +{features?.length - 3} more features
          </div>
        )}
      </div>
      <div className="flex space-x-2">
 
        <Button
          variant="default"
          className="flex-1"
          iconName="Calendar"
          iconPosition="left"
          onClick={() => handleContact()}
        >
          Book Now
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;