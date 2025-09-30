import React from 'react';
import Icon from '../../../components/AppIcon';

const CoreValues = () => {
  const values = [
    {
      icon: "Lightbulb",
      title: "Technology Made Simple",
      description: "We believe technology should empower, not intimidate. Our approach removes complexity and makes IT solutions accessible to everyone.",
      example: "Explaining technical issues in plain language and providing step-by-step guidance to our clients."
    },
    {
      icon: "Shield",
      title: "Unwavering Reliability",
      description: "Since 2004, we've built our reputation on consistent, dependable service that businesses can count on day after day.",
      example: "Maintaining 99.5% uptime for our AMC clients and never missing our 2-hour response commitment."
    },
    {
      icon: "Heart",
      title: "Community First",
      description: "We're not just a service provider – we're part of the local business community, invested in our neighbors' success.",
      example: "Supporting local educational institutions with discounted IT services and free technology workshops."
    },
    {
      icon: "Clock",
      title: "Rapid Response",
      description: "When technology fails, every minute counts. Our emergency support ensures minimal downtime for your business operations.",
      example: "24/7 availability with guaranteed 2-hour response time across all six service areas."
    },
    {
      icon: "Users",
      title: "Personal Partnership",
      description: "We build lasting relationships, not just transactions. Every client receives personalized attention and tailored solutions.",
      example: "Mr. Perumal personally oversees major client relationships and complex technical implementations."
    },
    {
      icon: "TrendingUp",
      title: "Continuous Innovation",
      description: "Staying ahead of technology trends to provide cutting-edge solutions that keep our clients competitive.",
      example: "Early adoption of cloud solutions and remote support capabilities during the digital transformation."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            These principles guide every decision we make and every service we provide. 
            They're not just words on a wall – they're the foundation of how we do business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 shadow-card card-hover group"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground smooth-transition">
                  <Icon name={value?.icon} size={20} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {value?.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {value?.description}
                  </p>
                  <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary">
                    <p className="text-sm text-text-secondary italic">
                      <strong>In Practice:</strong> {value?.example}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Experience Our Values in Action
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Don't just take our word for it. Let us demonstrate our commitment to these values 
              through exceptional service for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('tel:+919092619444', '_self')}
                className="btn-emergency pulse-emergency px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Icon name="Phone" size={18} />
                <span>Call Now: +91 90926 19444</span>
              </button>
              <button className="bg-surface border border-border text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-muted smooth-transition flex items-center justify-center space-x-2">
                <Icon name="MessageCircle" size={18} />
                <span>Request Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;