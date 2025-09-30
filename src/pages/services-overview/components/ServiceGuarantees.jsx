import React from 'react';
import Icon from '../../../components/AppIcon';

const ServiceGuarantees = () => {
  const guarantees = [
    {
      icon: 'Clock',
      title: '2-Hour Emergency Response',
      description: 'Critical IT issues resolved within 2 hours or your money back',
      highlight: 'Emergency Support'
    },
    {
      icon: 'Shield',
      title: '30-Day Warranty',
      description: 'All repairs come with comprehensive 30-day warranty coverage',
      highlight: 'Quality Assurance'
    },
    {
      icon: 'ThumbsUp',
      title: '100% Satisfaction Guarantee',
      description: 'Not satisfied? We will make it right or provide full refund',
      highlight: 'Customer First'
    },
    {
      icon: 'Users',
      title: '19+ Years Experience',
      description: 'Trusted by 5000+ businesses across Tamil Nadu since 2004',
      highlight: 'Proven Track Record'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Our Service Guarantees
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          We stand behind our work with industry-leading guarantees and commitments to ensure your complete satisfaction.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {guarantees?.map((guarantee, index) => (
          <div key={index} className="bg-card rounded-xl p-6 text-center card-hover border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name={guarantee?.icon} size={28} className="text-primary" />
            </div>
            
            <div className="mb-3">
              <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-2">
                {guarantee?.highlight}
              </span>
              <h3 className="font-semibold text-text-primary text-sm">
                {guarantee?.title}
              </h3>
            </div>
            
            <p className="text-xs text-text-secondary leading-relaxed">
              {guarantee?.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceGuarantees;