import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AMCTierCard = ({ tier, onSelectPlan }) => {
  const {
    id,
    name,
    price,
    duration,
    visits,
    features,
    isRecommended,
    savings,
    responseTime
  } = tier;

  return (
    <div className={`relative bg-card rounded-xl border p-6 card-hover ${isRecommended ? 'border-primary ring-2 ring-primary/20' : 'border-border'}`}>
      {isRecommended && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
            Recommended
          </span>
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-text-primary mb-2">{name}</h3>
        <div className="mb-2">
          <span className="text-3xl font-bold text-primary">₹{price}</span>
          <span className="text-text-secondary">/{duration}</span>
        </div>
        {savings && (
          <div className="inline-flex items-center bg-success/10 text-success px-2 py-1 rounded-full text-sm">
            <Icon name="TrendingDown" size={14} className="mr-1" />
            Save ₹{savings}
          </div>
        )}
      </div>
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <span className="text-text-secondary">Service Visits</span>
          <span className="font-semibold text-text-primary">{visits}</span>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
          <span className="text-text-secondary">Response Time</span>
          <span className="font-semibold text-text-primary">{responseTime}</span>
        </div>
      </div>
      <div className="space-y-3 mb-6">
        {features?.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
            <span className="text-sm text-text-secondary">{feature}</span>
          </div>
        ))}
      </div>
      <Button
        variant={isRecommended ? "default" : "outline"}
        fullWidth
        iconName="ArrowRight"
        iconPosition="right"
        onClick={() => onSelectPlan(id)}
        className={isRecommended ? "btn-emergency" : ""}
      >
        Choose {name}
      </Button>
    </div>
  );
};

export default AMCTierCard;