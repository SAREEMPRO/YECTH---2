import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const stats = [
    {
      id: 1,
      number: "15+",
      label: "Years Experience",
      description: "Serving Tamil Nadu since 2005",
      icon: "Calendar",
      color: "primary"
    },
    {
      id: 2,
      number: "50+",
      label: "Happy Clients",
      description: "Businesses trust our services",
      icon: "Users",
      color: "accent"
    },
{
  id: 3,
  number: "40+",
  label: "Projects Completed",
  description: "Delivering excellence across Tamil Nadu",
  icon: "Clock",
  color: "success"
}
,
    {
      id: 4,
      number: "24/7",
      label: "Support Available",
      description: "Round-the-clock assistance",
      icon: "Shield",
      color: "warning"
    }
  ];


  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-surface to-accent/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="TrendingUp" size={16} />
            <span>Trust & Excellence</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Why Businesses Choose Y Tech
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Two decades of proven expertise, certified professionals, and unwavering commitment to customer satisfaction across Tamil Nadu.
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats?.map((stat) => (
            <div
              key={stat?.id}
              className="bg-surface rounded-xl p-6 text-center shadow-card hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                stat?.color === 'primary' ? 'bg-primary/10' :
                stat?.color === 'accent' ? 'bg-accent/10' :
                stat?.color === 'success'? 'bg-success/10' : 'bg-warning/10'
              }`}>
                <Icon 
                  name={stat?.icon} 
                  size={28} 
                  className={
                    stat?.color === 'primary' ? 'text-primary' :
                    stat?.color === 'accent' ? 'text-accent' :
                    stat?.color === 'success'? 'text-success' : 'text-warning'
                  } 
                />
              </div>
              
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-text-primary">{stat?.number}</h3>
                <p className="font-semibold text-text-primary">{stat?.label}</p>
                <p className="text-sm text-text-secondary">{stat?.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
       

        {/* Bottom Trust Elements */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Lock" size={24} className="text-primary" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Secure & Confidential</h4>
            <p className="text-sm text-text-secondary">
              Your data privacy and business confidentiality are our top priorities
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Handshake" size={24} className="text-accent" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Local Partnership</h4>
            <p className="text-sm text-text-secondary">
              Deep roots in Tamil Nadu with personal relationships and community trust
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Zap" size={24} className="text-success" />
            </div>
            <h4 className="font-semibold text-text-primary mb-2">Rapid Response</h4>
            <p className="text-sm text-text-secondary">
              Quick turnaround times that keep your business operations running smoothly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;