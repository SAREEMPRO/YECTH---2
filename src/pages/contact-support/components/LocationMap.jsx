import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const LocationMap = () => {
  const [selectedLocation, setSelectedLocation] = useState('main');

  const locations = [
    {
      id: 'main',
      name: '6, 2nd Cross Main St, Suthanthira Ponvizha Nagar',
      address: 'Gandhi Nagar, Vellore, Tamil Nadu 632006',
      phone: '+91 90926 19444',
      coordinates: '12.9165,79.1325',
      landmarks: ['Near Vellore Fort', 'Opposite SBI Bank', '500m from Bus Stand'],
      services: ['All Services', 'Walk-in Support', 'Parts Inventory']
    },
  ];

  const currentLocation = locations?.find(loc => loc?.id === selectedLocation);

  const getDirections = (coordinates) => {
    window.open(`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3622682493406!2d79.13629497585694!3d12.948655215379336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47bb08620f6f%3A0x35e1d9464c24c611!2z8J2QmCDwnZCT8J2QhPCdkILwnZCHIPCdkILwnZCO8J2QjPCdkI_wnZCU8J2Qk_CdkITwnZCRICYg8J2QkvCdkITwnZCR8J2QlfCdkIjwnZCC8J2QhPCdkJI!5e0!3m2!1sen!2sin!4v1759139097906!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`, '_blank');
  };

  const callLocation = (phone) => {
    window.open(`tel:${phone}`, '_self');
  };

  return (
    <div className="bg-surface rounded-xl shadow-card overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10  rounded-lg flex items-center justify-center">
            <Icon name="MapPin" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Our Locations</h3>
            <p className="text-sm text-text-secondary">Find us across Tamil Nadu</p>
          </div>
        </div>

    
      </div>
      {/* Map Container */}
      <div className="relative">
        <div className="h-64 md:h-80 w-full">
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title={currentLocation?.name}
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3622682493406!2d79.13629497585694!3d12.948655215379336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47bb08620f6f%3A0x35e1d9464c24c611!2z8J2QmCDwnZCT8J2QhPCdkILwnZCHIPCdkILwnZCO8J2QjPCdkI_wnZCU8J2Qk_CdkITwnZCRICYg8J2QkvCdkITwnZCR8J2QlfCdkIjwnZCC8J2QhPCdkJI!5e0!3m2!1sen!2sin!4v1759139097906!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade`}
            className="border-0"
          />
        </div>

        {/* Map Overlay Info */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-surface/95 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-text-primary mb-1">{currentLocation?.name}</h4>
                <p className="text-sm text-text-secondary mb-2">{currentLocation?.address}</p>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={14} className="text-primary" />
                  <span className="text-sm text-primary font-medium">{currentLocation?.phone}</span>
                </div>
              </div>
              <div className="flex space-x-2 ml-4">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => getDirections(currentLocation?.coordinates)}
                  className="bg-surface/90"
                >
                  <Icon name="Navigation" size={16} />
                </Button>
                <Button
                  variant="default"
                  size="icon"
                  onClick={() => callLocation(currentLocation?.phone)}
                >
                  <Icon name="Phone" size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Location Details */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Landmarks */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
              <Icon name="MapPin" size={16} className="text-primary" />
              <span>Nearby Landmarks</span>
            </h4>
            <ul className="space-y-2">
              {currentLocation?.landmarks?.map((landmark, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  <span>{landmark}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-text-primary mb-3 flex items-center space-x-2">
              <Icon name="Settings" size={16} className="text-primary" />
              <span>Available Services</span>
            </h4>
            <ul className="space-y-2">
              {currentLocation?.services?.map((service, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="CheckCircle" size={14} className="text-success" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-border">
          <Button
            variant="default"
            iconName="Navigation"
            iconPosition="left"
            onClick={() => getDirections(currentLocation?.coordinates)}
            className="flex-1"
          >
            Get Directions
          </Button>
          <Button
            variant="outline"
            iconName="Phone"
            iconPosition="left"
            onClick={() => callLocation(currentLocation?.phone)}
            className="flex-1"
          >
            Call Location
          </Button>
          <Button
            variant="outline"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open(`https://wa.me/${currentLocation?.phone?.replace(/[^0-9]/g, '')}`, '_blank')}
            className="flex-1"
          >
            WhatsApp
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-6 p-4 bg-muted rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} className="text-primary mt-0.5" />
            <div className="text-sm text-text-secondary">
              <p className="mb-2">
                <strong className="text-text-primary">Parking:</strong> Free parking available at all locations
              </p>
              <p className="mb-2">
                <strong className="text-text-primary">Accessibility:</strong> Wheelchair accessible entrances
              </p>
              <p>
                <strong className="text-text-primary">Public Transport:</strong> Well connected by bus and auto-rickshaw
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;