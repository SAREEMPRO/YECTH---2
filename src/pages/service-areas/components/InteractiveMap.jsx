import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InteractiveMap = ({ areas, selectedArea, onAreaSelect }) => {
  const [mapView, setMapView] = useState('coverage'); // coverage, satellite

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-text-primary">Service Coverage Map</h3>
          <div className="flex space-x-2">
            <Button
              variant={mapView === 'coverage' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('coverage')}
            >
              Coverage
            </Button>
            <Button
              variant={mapView === 'satellite' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setMapView('satellite')}
            >
              Satellite
            </Button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-success rounded-full"></div>
            <span>Same Day Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-warning rounded-full"></div>
            <span>Next Day Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-primary rounded-full"></div>
            <span>Y-Tech Office</span>
          </div>
        </div>
      </div>
      <div className="relative h-96 bg-muted">
        {/* Google Maps Iframe */}
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title="Y-Tech Service Areas Map"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.36226824936!2d79.13629497585694!3d12.948655215379336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47bb08620f6f%3A0x35e1d9464c24c611!2z8J2QmCDwnZCT8J2QhPCdkILwnZCHIPCdkILwnZCO8J2QjPCdkI_wnZCU8J2Qk_CdkITwnZCRICYg8J2QkvCdkITwnZCR8J2QlfCdkIjwnZCC8J2QhPCdkJI!5e0!3m2!1sen!2sin!4v1759139296248!5m2!1sen!2sin"
          className="border-0"
        />
        
        {/* Overlay with area markers */}
        <div className="absolute inset-0 pointer-events-none">
          {areas?.map((area, index) => (
            <div
              key={area?.id}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer ${
                selectedArea?.id === area?.id ? 'z-20' : 'z-10'
              }`}
              style={{
                left: `${20 + (index * 15)}%`,
                top: `${30 + (index * 10)}%`
              }}
              onClick={() => onAreaSelect(area)}
            >
              <div className={`w-4 h-4 rounded-full border-2 border-white shadow-lg ${
                area?.responseTime === 'Same Day' ? 'bg-success' : 
                area?.responseTime === 'Next Day' ? 'bg-warning' : 'bg-text-secondary'
              } ${selectedArea?.id === area?.id ? 'scale-150' : 'hover:scale-125'} smooth-transition`}>
              </div>
              {selectedArea?.id === area?.id && (
                <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-card border border-border rounded-lg p-3 shadow-lg min-w-48">
                  <h4 className="font-medium text-text-primary mb-1">{area?.name}</h4>
                  <p className="text-xs text-text-secondary mb-2">{area?.district}</p>
                  <div className="flex items-center space-x-2 text-xs">
                    <Icon name="Clock" size={12} className="text-text-secondary" />
                    <span className="text-text-secondary">{area?.travelTime}</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-muted/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="MapPin" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Y-Tech Computer</span>
          </div>
          <div className="text-sm text-text-secondary">
            Vellore, Tamil Nadu - 632001
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;