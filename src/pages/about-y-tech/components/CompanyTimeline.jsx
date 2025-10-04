import React from 'react';
import Icon from '../../../components/AppIcon';

const CompanyTimeline = () => {
  const timelineEvents = [
    {
      year: "2005",
      title: "Y-Tech Computer Established",
      description: "Mr. Perumal started with a small computer repair shop in Vellore, focusing on hardware repairs and basic IT support for local businesses.",
      icon: "Building",
      color: "bg-primary"
    },
    {
      year: "2008",
      title: "Service Area Expansion",
      description: "Extended services to Thirupathur and Vaniyambadi, establishing Y-Tech as a regional IT support provider with mobile service capabilities.",
      icon: "MapPin",
      color: "bg-secondary"
    },
    {
      year: "2012",
      title: "Authorized Service Center",
      description: "Became authorized service center for HP, Dell, and Lenovo. Introduced comprehensive AMC services for small and medium businesses.",
      icon: "Award",
      color: "bg-success"
    },
    {
      year: "2016",
      title: "Network Solutions Launch",
      description: "Expanded into networking solutions, server management, and enterprise IT infrastructure for educational institutions and government offices.",
      icon: "Network",
      color: "bg-brand-orange"
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to remote work needs, launched cloud solutions, and established 24/7 emergency support during the pandemic.",
      icon: "Cloud",
      color: "bg-accent"
    },
    {
      year: "2024",
      title: "Complete Digital Hub",
      description: "Today, Y-Tech maintaining response time and 200+ satisfied clients.",
      icon: "Zap",
      color: "bg-primary"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Journey Through Time
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Two decades of continuous growth, innovation, and unwavering commitment to 
            making technology simple and accessible for businesses across Tamil Nadu.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 lg:transform lg:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {timelineEvents?.map((event, index) => (
              <div
                key={event?.year}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col lg:items-center`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 w-8 h-8 rounded-full bg-surface border-4 border-primary flex items-center justify-center z-10">
                  <div className={`w-3 h-3 rounded-full ${event?.color}`}></div>
                </div>

                {/* Content Card */}
                <div className={`ml-12 lg:ml-0 lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-card card-hover">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 rounded-lg ${event?.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon name={event?.icon} size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl font-bold text-primary">{event?.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary mb-2">
                          {event?.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed">
                          {event?.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTimeline;