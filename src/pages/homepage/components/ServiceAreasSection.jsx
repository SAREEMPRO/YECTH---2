import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceAreasSection = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [nearestArea, setNearestArea] = useState(null);

  const serviceAreas = [
    {
      id: 1,
      name: "Vellore",
      district: "Vellore District",
      coordinates: { lat: 12.9165, lng: 79.1325 },
      clientCount: 150,
      responseTime: "30 minutes",
      specialties: ["IT Parks", "Educational Institutions", "Healthcare"],
      featured: true
    },
    {
      id: 2,
      name: "Thirupathur",
      district: "Tirupattur District",
      coordinates: { lat: 12.4996, lng: 78.5732 },
      clientCount: 85,
      responseTime: "45 minutes",
      specialties: ["Manufacturing", "Small Business", "Retail"]
    },
    {
      id: 3,
      name: "Vaniyambadi",
      district: "Tirupattur District",
      coordinates: { lat: 12.6819, lng: 78.6201 },
      clientCount: 65,
      responseTime: "40 minutes",
      specialties: ["Leather Industry", "Trading", "SMEs"]
    },
    {
      id: 4,
      name: "Sri Perambudur",
      district: "Kanchipuram District",
      coordinates: { lat: 12.9047, lng: 79.9435 },
      clientCount: 95,
      responseTime: "60 minutes",
      specialties: ["Automotive", "Manufacturing", "Industrial"]
    },
    {
      id: 5,
      name: "Gudiyatham",
      district: "Vellore District",
      coordinates: { lat: 12.9429, lng: 78.8735 },
      clientCount: 45,
      responseTime: "35 minutes",
      specialties: ["Agriculture Tech", "Local Business", "Education"]
    },
    {
      id: 6,
      name: "Ranipet",
      district: "Ranipet District",
      coordinates: { lat: 12.9249, lng: 79.3308 },
      clientCount: 70,
      responseTime: "25 minutes",
      specialties: ["Chemical Industry", "Pharmaceuticals", "Corporate"]
    }
  ];

  const testimonials = [
    {
      id: 1,
      area: "Vellore",
      company: "VIT University",
      person: "Dr. Rajesh Kumar",
      role: "IT Administrator",
      content: "Y-Tech has been maintaining our computer labs for 3 years. Their quick response and expertise keep our systems running smoothly during critical academic periods.",
      rating: 5,
      service: "AMC Services"
    },
    {
      id: 2,
      area: "Thirupathur",
      company: "Leather Craft Industries",
      person: "Ms. Priya Sharma",
      role: "Operations Manager",
      content: "When our entire network went down during peak season, Y-Tech restored everything within 2 hours. Excellent emergency support that saved our business day.",
      rating: 5,
      service: "Emergency Support"
    },
    {
      id: 3,
      area: "Sri Perambudur",
      company: "Auto Components Ltd",
      person: "Mr. Suresh Babu",
      role: "Plant Manager",
      content: "Professional networking setup for our new facility. Y-Tech delivered enterprise-grade solutions at competitive prices with ongoing support.",
      rating: 5,
      service: "Networking Solutions"
    }
  ];

  useEffect(() => {
    // Simulate location detection
    if (navigator.geolocation) {
      navigator.geolocation?.getCurrentPosition(
        (position) => {
          const userCoords = {
            lat: position?.coords?.latitude,
            lng: position?.coords?.longitude
          };
          setUserLocation(userCoords);
          
          // Find nearest service area (simplified calculation)
          const nearest = serviceAreas?.reduce((prev, current) => {
            const prevDistance = Math.abs(prev?.coordinates?.lat - userCoords?.lat) + 
                               Math.abs(prev?.coordinates?.lng - userCoords?.lng);
            const currentDistance = Math.abs(current?.coordinates?.lat - userCoords?.lat) + 
                                  Math.abs(current?.coordinates?.lng - userCoords?.lng);
            return prevDistance < currentDistance ? prev : current;
          });
          setNearestArea(nearest);
        },
        () => {
          // Default to Vellore if location access denied
          setNearestArea(serviceAreas?.[0]);
        }
      );
    } else {
      setNearestArea(serviceAreas?.[0]);
    }
  }, []);

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MapPin" size={16} />
            <span>Service Coverage</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Serving Businesses Across Tamil Nadu
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Local expertise with regional coverage. We understand the unique technology needs of businesses in each area we serve.
          </p>
        </div>

        {/* Location Detection Banner */}
        {nearestArea && (
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 mb-12 border border-primary/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Navigation" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary">
                    We serve your area: {nearestArea?.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    Response time: {nearestArea?.responseTime} • {nearestArea?.clientCount}+ local clients
                  </p>
                </div>
              </div>
              <Button
                variant="default"
                iconName="Phone"
                iconPosition="left"
                onClick={() => window.open('tel:+919092619444', '_self')}
              >
                Get Local Support
              </Button>
            </div>
          </div>
        )}

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceAreas?.map((area) => (
            <div
              key={area?.id}
              className={`bg-surface rounded-xl p-6 border shadow-card hover:shadow-xl transition-all duration-300 ${
                area?.featured ? 'border-primary ring-2 ring-primary/20' : 'border-border hover:border-primary/30'
              }`}
            >
              {area?.featured && (
                <div className="inline-flex items-center space-x-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  <Icon name="Star" size={12} />
                  <span>Main Hub</span>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-text-primary">{area?.name}</h3>
                  <p className="text-sm text-text-secondary">{area?.district}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-text-secondary">Response Time</p>
                    <p className="font-semibold text-accent">{area?.responseTime}</p>
                  </div>
                  <div>
                    <p className="text-text-secondary">Active Clients</p>
                    <p className="font-semibold text-primary">{area?.clientCount}+</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-text-secondary mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {area?.specialties?.map((specialty, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-md"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                <Link to="/service-areas" className="block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Local Testimonials */}
        <div className="bg-muted/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-2">
              Trusted by Local Businesses
            </h3>
            <p className="text-text-secondary">
              Real feedback from companies in our service areas
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials?.map((testimonial) => (
              <div key={testimonial?.id} className="bg-surface rounded-xl p-6 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={14} className="text-warning fill-current" />
                    ))}
                  </div>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {testimonial?.area}
                  </span>
                </div>

                <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                  "{testimonial?.content}"
                </p>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-text-primary text-sm">
                        {testimonial?.person}
                      </p>
                      <p className="text-xs text-text-secondary">
                        {testimonial?.role}, {testimonial?.company}
                      </p>
                    </div>
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-md">
                      {testimonial?.service}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link to="/service-areas">
            <Button
              variant="default"
              size="lg"
              iconName="Map"
              iconPosition="left"
            >
              Explore All Service Areas
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreasSection;