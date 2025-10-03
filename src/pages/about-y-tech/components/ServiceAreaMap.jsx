import React, { useState } from "react";
import Icon from "../../../components/AppIcon";

const ServiceAreaMap = () => {
  const [selectedArea, setSelectedArea] = useState(null);

  const serviceAreas = [
  {
    id: 1,
    name: "M/S. ANANTHAR SYSTEMS",
    district: "Vellore District",
    responseTime: "30 minutes",
    coverage: "Complete",
    coordinates: { lat: 12.936, lng: 79.333 },
    services: [
      "Emergency Support",
      "Hardware Repair",
      "Networking",
    ],
    clientCount: "30+",
    description:
      "Branch office at Ranipet with dedicated technicians and 24/7 support.",
  },
  {
    id: 2,
    name: "Y-Tech Computer",
    district: "Vellore District",
    responseTime: "30 minutes",
    coverage: "Complete",
    coordinates: { lat: 12.9165, lng: 79.1325 },
    services: [
      "Emergency Support",
      "AMC Services",
      "Hardware Repair",
      "Networking",
    ],
    clientCount: "50+",
    description:
      "Our headquarters location with full-service workshop and immediate response capability.",
  },
];

  const handleAreaClick = (area) => {
    setSelectedArea(selectedArea?.id === area?.id ? null : area);
  };

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Service Coverage Area
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Comprehensive IT support across six districts in Tamil Nadu with
            guaranteed response times and local expertise in each region.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Interactive Map */}
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-card">
            <div className="p-6 border-b border-border">
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                Service Area Coverage Map
              </h3>
              <p className="text-text-secondary">
                Click on any location to view detailed service information
              </p>
            </div>

            <div className="h-96 relative">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Y-Tech Service Areas Map"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.36226824936!2d79.13629497585694!3d12.948655215379336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad47bb08620f6f%3A0x35e1d9464c24c611!2z8J2QmCDwnZCT8J2QhPCdkILwnZCHIPCdkILwnZCO8J2QjPCdkI_wnZCU8J2Qk_CdkITwnZCRICYg8J2QkvCdkITwnZCR8J2QlfCdkIjwnZCC8J2QhPCdkJI!5e0!3m2!1sen!2sin!4v1759139296248!5m2!1sen!2sin"
                className="border-0"
              />

              {/* Overlay with service areas */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>
          </div>

          {/* Service Areas List */}
          <div className="space-y-4">
            {serviceAreas?.map((area) => (
              <div
                key={area?.id}
                className={`bg-card border border-border rounded-xl p-6 shadow-card cursor-pointer smooth-transition ${
                  selectedArea?.id === area?.id
                    ? "border-primary bg-primary/5 transform scale-[1.02]"
                    : "hover:border-primary/50 card-hover"
                }`}
                onClick={() => handleAreaClick(area)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {area?.name}
                      </h3>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          area?.coverage === "Complete"
                            ? "bg-success/20 text-success"
                            : "bg-warning/20 text-warning"
                        }`}
                      >
                        {area?.coverage}
                      </div>
                    </div>

                    <p className="text-sm text-text-secondary mb-3">
                      {area?.district}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-3">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={14} className="text-primary" />
                        <span className="text-sm text-text-secondary">
                          {area?.responseTime}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Users" size={14} className="text-success" />
                        <span className="text-sm text-text-secondary">
                          {area?.clientCount} clients
                        </span>
                      </div>
                    </div>

                    {selectedArea?.id === area?.id && (
                      <div className="mt-4 pt-4 border-t border-border space-y-3">
                        <p className="text-sm text-text-secondary">
                          {area?.description}
                        </p>

                        <div>
                          <h4 className="text-sm font-medium text-text-primary mb-2">
                            Available Services:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {area?.services?.map((service, index) => (
                              <span
                                key={index}
                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                              >
                                {service}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex space-x-3 pt-2">
                          <button
                            onClick={(e) => {
                              e?.stopPropagation();
                              window.open("tel:+919092619444", "_self");
                            }}
                            className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-secondary smooth-transition"
                          >
                            <Icon name="Phone" size={14} />
                            <span>Call Now</span>
                          </button>
                          <button
                            onClick={(e) => {
                              e?.stopPropagation();
                            }}
                            className="flex items-center space-x-2 px-3 py-2 bg-surface border border-border text-text-primary rounded-lg text-sm font-medium hover:bg-muted smooth-transition"
                          >
                            <Icon name="MapPin" size={14} />
                            <span>Get Directions</span>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="ml-4">
                    <Icon
                      name={
                        selectedArea?.id === area?.id
                          ? "ChevronUp"
                          : "ChevronDown"
                      }
                      size={20}
                      className="text-text-secondary"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Response Time Guarantee */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Our Response Time Guarantee
            </h3>
            <p className="text-text-secondary mb-6">
              We commit to reaching your location within the specified time
              frame for each service area. Emergency support is available 24/7
              across all locations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open("tel:+919092619444", "_self")}
                className="btn-emergency pulse-emergency px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Icon name="Phone" size={18} />
                <span>Emergency: +91 90926 19444</span>
              </button>
              <button className="bg-surface border border-border text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-muted smooth-transition flex items-center justify-center space-x-2">
                <Icon name="Calendar" size={18} />
                <span>Schedule Service</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreaMap;
