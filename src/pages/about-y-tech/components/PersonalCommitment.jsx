import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PersonalCommitment = () => {
  const commitments = [
    {
      icon: "Clock",
      title: "Response Guarantee",
      description: "I personally ensure that every emergency call receives attention within 2 hours, regardless of the time or day."
    },
    {
      icon: "Shield",
      title: "Quality Assurance Promise",
      description: "Every service performed by Y Tech comes with my personal guarantee of quality and customer satisfaction."
    },
    {
      icon: "Heart",
      title: "Personal Relationship Building",
      description: "I believe in building lasting relationships with clients, not just completing transactions."
    },
    {
      icon: "Phone",
      title: "Direct Access Commitment",
      description: "My personal number is always available for urgent matters and important client communications."
    }
  ];

  const contactMethods = [
    {
      type: "Emergency Line",
      value: "+91 90926 19444",
      icon: "Phone",
      description: "24/7 Emergency Support",
      action: () => window.open('tel:+919092619444', '_self')
    },
    {
      type: "WhatsApp",
      value: "+91 90926 19444",
      icon: "MessageCircle",
      description: "Quick Messages & Updates",
      action: () => window.open('https://wa.me/919092619444', '_blank')
    },
    {
      type: "Email",
      value: "perumal@ytechcomputer.com",
      icon: "Mail",
      description: "Detailed Inquiries",
      action: () => window.open('mailto:perumal@ytechcomputer.com', '_self')
    },
    {
      type: "Office",
      value: "Y Tech Computer, Vellore",
      icon: "MapPin",
      description: "Visit Our Workshop",
      action: () => {}
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Message */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-text-primary">
                My Personal Commitment to You
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                "After 20 years in this business, I've learned that technology is only as good as the 
                trust and relationships behind it. Every client who chooses Y Tech receives my personal 
                commitment to excellence."
              </p>
            </div>

            <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
              <blockquote className="text-text-primary italic text-lg leading-relaxed">
                "When you call Y Tech, you're not just getting a service provider – you're getting a 
                technology partner who genuinely cares about your success. I stand behind every service 
                we provide with my personal guarantee."
              </blockquote>
              <div className="flex items-center space-x-3 mt-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">P</span>
                </div>
                <div>
                  <div className="font-semibold text-text-primary">Mr. Perumal</div>
                  <div className="text-sm text-text-secondary">Founder &amp; CTO, Y Tech Computer</div>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Photo */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mr. Perumal at his desk, personally handling client communications"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-surface/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-white">
                      Available for Direct Contact
                    </span>
                  </div>
                  <p className="text-xs text-white mt-1">
                    Personally handling client relationships since 2005
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Commitments */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              My Personal Guarantees
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These aren't just business policies – they're personal promises I make to every client.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {commitments?.map((commitment, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 shadow-card card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={commitment?.icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-text-primary mb-2">
                      {commitment?.title}
                    </h4>
                    <p className="text-text-secondary leading-relaxed">
                      {commitment?.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Contact Information */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Reach Me Directly
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              For urgent matters, important decisions, or when you need that personal touch – 
              here's how to reach me directly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {contactMethods?.map((method, index) => (
              <div
                key={index}
                className="bg-surface border border-border rounded-xl p-6 text-center shadow-card hover:shadow-lg smooth-transition cursor-pointer"
                onClick={method?.action}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={method?.icon} size={20} className="text-primary" />
                </div>
                <h4 className="font-semibold text-text-primary mb-2">
                  {method?.type}
                </h4>
                <p className="text-sm text-primary font-medium mb-2">
                  {method?.value}
                </p>
                <p className="text-xs text-text-secondary">
                  {method?.description}
                </p>
              </div>
            ))}
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              iconName="Phone"
              iconPosition="left"
              className="btn-emergency pulse-emergency"
              onClick={() => window.open('tel:+919092619444', '_self')}
            >
              Call Mr. Perumal Now
            </Button>
            <Button
              variant="outline"
              iconName="MessageCircle"
              iconPosition="left"
              onClick={() => window.open('https://wa.me/919092619444', '_blank')}
            >
              WhatsApp Message
            </Button>
      
          </div>

          {/* Trust Statement */}
          <div className="mt-8 text-center">
            <div className="bg-surface/50 rounded-lg p-4 border border-border/50">
              <p className="text-sm text-text-secondary">
                <Icon name="Shield" size={16} className="inline text-success mr-2" />
                Your trust is my most valuable asset. Every interaction is handled with complete confidentiality and professionalism.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalCommitment;