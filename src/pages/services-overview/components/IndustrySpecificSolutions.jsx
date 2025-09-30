import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const IndustrySpecificSolutions = ({ onLearnMore }) => {
  const industries = [
    {
      id: 'education',
      name: 'Education Sector',
      icon: 'GraduationCap',
      description: 'Comprehensive IT solutions for schools, colleges, and educational institutions',
      services: [
        'Computer Lab Setup & Maintenance',
        'Network Infrastructure for Campuses',
        'Educational Software Installation',
        'Student Data Management Systems',
        'Interactive Whiteboard Solutions'
      ],
      pricing: '₹15,000/month',
      clientCount: '50+ Schools',
      caseStudy: 'Vellore Public School - 200% improvement in IT efficiency'
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Medical',
      icon: 'Heart',
      description: 'Specialized IT support for hospitals, clinics, and medical practices',
      services: [
        'Medical Equipment Networking',
        'Patient Management Systems',
        'Data Security & HIPAA Compliance',
        'Telemedicine Setup',
        'Medical Device Integration'
      ],
      pricing: '₹25,000/month',
      clientCount: '25+ Clinics',
      caseStudy: 'City Hospital - Zero downtime for 18 months'
    },
    {
      id: 'business',
      name: 'Small Business',
      icon: 'Building2',
      description: 'Tailored IT solutions for small and medium businesses',
      services: [
        'Office Network Setup',
        'Business Email Solutions',
        'Point of Sale Systems',
        'Inventory Management',
        'Remote Work Infrastructure'
      ],
      pricing: '₹8,000/month',
      clientCount: '200+ Businesses',
      caseStudy: 'Local Retail Chain - 40% cost reduction in IT expenses'
    }
  ];

  return (
    <div className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Industry-Specific Solutions
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Specialized IT packages designed for specific industries with tailored features and pricing.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {industries?.map((industry) => (
          <div key={industry?.id} className="bg-card rounded-xl border border-border p-6 card-hover">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name={industry?.icon} size={24} className="text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary">{industry?.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-text-secondary">
                  <span>{industry?.clientCount}</span>
                  <span>•</span>
                  <span className="font-semibold text-primary">{industry?.pricing}</span>
                </div>
              </div>
            </div>

            <p className="text-text-secondary text-sm mb-4 leading-relaxed">
              {industry?.description}
            </p>

            <div className="space-y-2 mb-6">
              {industry?.services?.map((service, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <Icon name="Check" size={14} className="text-success flex-shrink-0" />
                  <span className="text-text-secondary">{service}</span>
                </div>
              ))}
            </div>

            <div className="bg-muted rounded-lg p-3 mb-4">
              <div className="flex items-start space-x-2">
                <Icon name="Star" size={14} className="text-warning mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-xs font-medium text-text-primary">Success Story</p>
                  <p className="text-xs text-text-secondary">{industry?.caseStudy}</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              fullWidth
              iconName="ArrowRight"
              iconPosition="right"
              onClick={() => onLearnMore(industry?.id)}
            >
              View {industry?.name} Package
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustrySpecificSolutions;