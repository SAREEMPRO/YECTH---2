import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const EmergencySupport = ({ onEmergencyCall, onScheduleCallback }) => {
  const emergencyFeatures = [
    {
      icon: 'Clock',
      title: '24/7 Availability',
      description: 'Round-the-clock support for critical IT emergencies'
    },
    {
      icon: 'Zap',
      title: 'Response',
      description: 'Guaranteed on-site response'
    },
    {
      icon: 'Phone',
      title: 'Direct Hotline',
      description: 'Dedicated emergency number with priority routing'
    },
    {
      icon: 'Users',
      title: 'Expert Team',
      description: 'Certified technicians with 15+ years experience'
    }
  ];

  const commonEmergencies = [
    'Server Down/Network Outage',
    'Data Loss/Corruption',
    'Security Breach/Virus Attack',
    'Hardware Failure',
    'Email System Down',
    'Point of Sale System Issues'
  ];

  return (
    <div className="bg-gradient-to-br from-brand-orange/10 to-brand-orange-dark/10 rounded-2xl p-8 mb-12 border border-brand-orange/20">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <Icon name="AlertTriangle" size={16} />
          <span>Emergency IT Support</span>
        </div>
        <h2 className="text-2xl font-bold text-text-primary mb-3">
          Critical IT Issues? We're Here 24/7
        </h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          When your business-critical systems fail, every minute counts. Our emergency response team is ready to get you back online fast.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Emergency Features */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">Emergency Response Features</h3>
          <div className="space-y-4">
            {emergencyFeatures?.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-brand-orange/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={feature?.icon} size={18} className="text-brand-orange" />
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary text-sm">{feature?.title}</h4>
                  <p className="text-text-secondary text-sm">{feature?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Emergencies */}
        <div>
          <h3 className="text-lg font-semibold text-text-primary mb-4">We Handle These Emergencies</h3>
          <div className="space-y-2">
            {commonEmergencies?.map((emergency, index) => (
              <div key={index} className="flex items-center space-x-2 text-sm">
                <Icon name="AlertCircle" size={14} className="text-brand-orange flex-shrink-0" />
                <span className="text-text-secondary">{emergency}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-card rounded-lg border border-border">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Clock" size={16} className="text-success" />
              <span className="font-semibold text-success text-sm">Average Response Time</span>
            </div>
            <div className="text-2xl font-bold text-primary">47 minutes</div>
            <div className="text-xs text-text-secondary">Based on last 100 emergency calls</div>
          </div>
        </div>
      </div>
      {/* Emergency Contact Actions */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-text-primary mb-1">Need Emergency Support?</h3>
            <p className="text-text-secondary text-sm">Call now or schedule a callback within 5 minutes</p>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
            <Button
              variant="default"
              className="btn-emergency pulse-emergency"
              iconName="Phone"
              iconPosition="left"
              onClick={onEmergencyCall}
            >
              Call Now: +91 90926 19444
            </Button>
            <Button
              variant="outline"
              iconName="Calendar"
              iconPosition="left"
              onClick={onScheduleCallback}
            >
              Schedule Callback
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencySupport;