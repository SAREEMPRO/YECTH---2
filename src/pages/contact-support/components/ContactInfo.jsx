import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const ContactInfo = () => {
  const contactMethods = [
    {
      type: 'Emergency Support',
      icon: 'Phone',
      title: '24/7 Emergency Hotline',
      value: '+91 90926 19444',
      description: 'Critical IT issues - response guarantee',
      action: () => window.open('tel:+919092619444', '_self'),
      bgColor: 'bg-brand-orange/10',
      iconColor: 'text-brand-orange',
      urgent: true
    },
    {
      type: 'Main Office',
      icon: 'MapPin',
      title: 'Y-Tech Computer Solutions',
      value: '123 Gandhi Road, Vellore - 632001',
      description: 'Tamil Nadu, India',
      action: () => window.open('https://maps.google.com/?q=12.9165,79.1325', '_blank'),
      bgColor: 'bg-primary/10',
      iconColor: 'text-primary'
    },
    {
      type: 'Sales & General',
      icon: 'Phone',
      title: 'Sales Department',
      value: '+91 98765 43211',
      description: 'Product inquiries and quotes',
      action: () => window.open('tel:+919876543211', '_self'),
      bgColor: 'bg-success/10',
      iconColor: 'text-success'
    },
    {
      type: 'Technical Support',
      icon: 'Headphones',
      title: 'Technical Support',
      value: '+91 98765 43212',
      description: 'Service requests and troubleshooting',
      action: () => window.open('tel:+919876543212', '_self'),
      bgColor: 'bg-accent/10',
      iconColor: 'text-accent'
    },
    {
      type: 'Email',
      icon: 'Mail',
      title: 'Email Support',
      value: 'support@ytechcomputer.com',
      description: 'General inquiries and documentation',
      action: () => window.open('mailto:support@ytechcomputer.com', '_self'),
      bgColor: 'bg-secondary/10',
      iconColor: 'text-secondary'
    },
    {
      type: 'WhatsApp',
      icon: 'MessageCircle',
      title: 'WhatsApp Business',
      value: '+91 90926 19444',
      description: 'Quick support and file sharing',
      action: () => window.open('https://wa.me/919092619444', '_blank'),
      bgColor: 'bg-success/10',
      iconColor: 'text-success'
    }
  ];

  const businessHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 5:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 2:00 PM (Emergency Only)' }
  ];

  const serviceAreas = [
    'Vellore', 'Thirupathur', 'Vaniyambadi', 
    'Sri Perambudur', 'Gudiyatham', 'Ranipet'
  ];

  return (
    <div className="space-y-6">
      {/* Emergency Contact Highlight */}
      <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center pulse-emergency">
            <Icon name="AlertTriangle" size={24} className="text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-brand-orange mb-2">Emergency IT Support</h3>
            <p className="text-text-secondary mb-4">
              Critical system failures, data recovery, security breaches - we're here 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="default"
                className="btn-emergency"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+919092619444', '_self')}
              >
                Call Now: +91 90926 19444
              </Button>
              <Button
                variant="outline"
                iconName="MessageCircle"
                iconPosition="left"
                onClick={() => window.open('https://wa.me/919092619444', '_blank')}
                className="border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white"
              >
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Methods Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contactMethods?.filter(method => method?.type !== 'Emergency Support')?.map((method, index) => (
          <div
            key={index}
            className="bg-surface rounded-xl shadow-card p-6 hover:shadow-lg smooth-transition cursor-pointer"
            onClick={method?.action}
          >
            <div className="flex items-start space-x-4">
              <div className={`w-10 h-10 ${method?.bgColor} rounded-lg flex items-center justify-center`}>
                <Icon name={method?.icon} size={20} className={method?.iconColor} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-text-primary mb-1">{method?.title}</h4>
                <p className="text-primary font-medium mb-1">{method?.value}</p>
                <p className="text-sm text-text-secondary">{method?.description}</p>
              </div>
              <Icon name="ExternalLink" size={16} className="text-text-secondary" />
            </div>
          </div>
        ))}
      </div>
      {/* Business Hours */}
      <div className="bg-surface rounded-xl shadow-card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Clock" size={20} className="text-primary" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">Business Hours</h3>
        </div>
        <div className="space-y-3">
          {businessHours?.map((schedule, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
              <span className="text-text-primary font-medium">{schedule?.day}</span>
              <span className="text-text-secondary">{schedule?.hours}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-muted rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Info" size={16} className="text-primary" />
            <span className="text-sm text-text-primary">
              Emergency support available 24/7 with 2-hour response guarantee
            </span>
          </div>
        </div>
      </div>
      {/* Service Areas */}
      <div className="bg-surface rounded-xl shadow-card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} className="text-success" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">Service Areas</h3>
        </div>
        <p className="text-text-secondary mb-4">We provide on-site support across these locations:</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {serviceAreas?.map((area, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 bg-muted rounded-lg">
              <Icon name="MapPin" size={14} className="text-success" />
              <span className="text-sm text-text-primary">{area}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-success/10 rounded-lg">
          <div className="flex items-center space-x-2">
            <Icon name="Truck" size={16} className="text-success" />
            <span className="text-sm text-text-primary">
              Free on-site visits for AMC customers within 25km radius
            </span>
          </div>
        </div>
      </div>
      {/* Social Media */}
      <div className="bg-surface rounded-xl shadow-card p-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
            <Icon name="Share2" size={20} className="text-accent" />
          </div>
          <h3 className="text-lg font-semibold text-text-primary">Follow Us</h3>
        </div>
        <p className="text-text-secondary mb-4">Stay updated with our latest services and tech tips</p>
        <div className="flex space-x-3">
          <Button
            variant="outline"
            size="sm"
            iconName="Facebook"
            iconPosition="left"
            onClick={() => window.open('https://facebook.com/ytechcomputer', '_blank')}
          >
            Facebook
          </Button>
          <Button
            variant="outline"
            size="sm"
            iconName="Linkedin"
            iconPosition="left"
            onClick={() => window.open('https://linkedin.com/company/ytech-computer', '_blank')}
          >
            LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;