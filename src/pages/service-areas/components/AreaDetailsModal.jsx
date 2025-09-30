import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AreaDetailsModal = ({ area, isOpen, onClose, onRequestService }) => {
  if (!isOpen || !area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card rounded-xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Icon name="MapPin" size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-text-primary">{area?.name}</h2>
                <p className="text-text-secondary">{area?.district}, Tamil Nadu</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Service Overview */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Service Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-primary">Response Time</span>
                </div>
                <p className="text-lg font-semibold text-success">{area?.responseTime}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Car" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-primary">Travel Time</span>
                </div>
                <p className="text-lg font-semibold text-text-primary">{area?.travelTime}</p>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Users" size={16} className="text-primary" />
                  <span className="text-sm font-medium text-text-primary">Clients Served</span>
                </div>
                <p className="text-lg font-semibold text-text-primary">{area?.clientsServed}+</p>
              </div>
            </div>
          </div>

          {/* Available Services */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Available Services</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {area?.keyServices?.map((service, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 bg-muted/50 rounded-lg">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span className="text-sm text-text-primary">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Local Partnerships */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Local Business Partnerships</h3>
            <div className="space-y-3">
              {area?.partnerships?.map((partnership, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="Building" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-text-primary">{partnership?.name}</h4>
                    <p className="text-sm text-text-secondary">{partnership?.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Client Testimonials</h3>
            <div className="space-y-4">
              {area?.testimonials?.map((testimonial, index) => (
                <div key={index} className="bg-muted/50 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-text-primary mb-2">"{testimonial?.content}"</p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-text-primary">{testimonial?.name}</p>
                          <p className="text-xs text-text-secondary">{testimonial?.company}</p>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(5)]?.map((_, i) => (
                            <Icon key={i} name="Star" size={12} className="text-warning fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-text-primary mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Local Contact</p>
                    <p className="text-sm text-text-secondary">{area?.localContact}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="MessageCircle" size={16} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">WhatsApp</p>
                    <p className="text-sm text-text-secondary">{area?.whatsapp}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={16} className="text-primary" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Service Hours</p>
                    <p className="text-sm text-text-secondary">Mon-Sat: 9:00 AM - 7:00 PM</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="AlertCircle" size={16} className="text-brand-orange" />
                  <div>
                    <p className="text-sm font-medium text-text-primary">Emergency</p>
                    <p className="text-sm text-text-secondary">24/7 Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 border-t border-border">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Close
            </Button>
            <Button
              variant="default"
              onClick={() => onRequestService(area)}
              iconName="Phone"
              iconPosition="left"
              className="flex-1"
            >
              Request Service
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaDetailsModal;