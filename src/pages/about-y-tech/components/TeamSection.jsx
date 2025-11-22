import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Mr. Perumal",
      role: "Founder & Chief Technology Officer",
      specialization: "IT Strategy & Business Solutions",
      experience: "15+ Years",
      certifications: ["HP Authorized Technician", "Dell Certified Professional", "Lenovo Service Partner"],
      image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Leading Y Tech\'s vision of making technology accessible to every business in Tamil Nadu.",
      contact: "+91 90926 19444"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Senior Hardware Technician",
      specialization: "Laptop & Desktop Repair",
      experience: "12+ Years",
      certifications: ["CompTIA A+", "Hardware Specialist", "Motherboard Repair Expert"],
      image: "https://images.pexels.com/photos/5483064/pexels-photo-5483064.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Expert in complex hardware diagnostics and component-level repairs for all major brands.",
      contact: "+91 98765 43211"
    },
    {
      id: 3,
      name: "Suresh Babu",
      role: "Network Solutions Specialist",
      specialization: "Networking & Server Management",
      experience: "10+ Years",
      certifications: ["CCNA", "Network+ Certified", "Windows Server Specialist"],
      image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Designs and maintains robust network infrastructure for businesses across our service areas.",
      contact: "+91 98765 43212"
    },
    {
      id: 4,
      name: "Priya Devi",
      role: "Customer Relations Manager",
      specialization: "Client Support & AMC Coordination",
      experience: "8+ Years",
      certifications: ["ITIL Foundation", "Customer Service Excellence", "Project Management"],
      image: "https://images.pexels.com/photos/5483078/pexels-photo-5483078.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Ensures seamless communication and service delivery for all our AMC clients.",
      contact: "+91 98765 43213"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our certified professionals bring decades of combined experience in IT solutions, 
            hardware repair, and customer service to every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers?.map((member) => (
            <div
              key={member?.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow-card card-hover group"
            >
              {/* Profile Image */}
              <div className="relative overflow-hidden h-64">
                <Image
                  src={member?.image}
                  alt={`${member?.name} - ${member?.role}`}
                  className="w-full h-full object-cover group-hover:scale-105 smooth-transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 smooth-transition"></div>
                
                {/* Contact Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 smooth-transition">
                  <button
                    onClick={() => window.open(`tel:${member?.contact}`, '_self')}
                    className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-secondary smooth-transition"
                  >
                    <Icon name="Phone" size={16} />
                    <span>Call Direct</span>
                  </button>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-text-primary mb-1">
                    {member?.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-2">
                    {member?.role}
                  </p>
                  <p className="text-sm text-text-secondary">
                    {member?.description}
                  </p>
                </div>

                {/* Specialization */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Wrench" size={14} className="text-accent" />
                    <span className="text-sm font-medium text-text-primary">Specialization</span>
                  </div>
                  <p className="text-sm text-text-secondary">{member?.specialization}</p>
                </div>

                {/* Experience */}
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Calendar" size={14} className="text-success" />
                    <span className="text-sm font-medium text-text-primary">Experience</span>
                  </div>
                  <p className="text-sm text-text-secondary">{member?.experience}</p>
                </div>

                {/* Certifications */}
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Icon name="Award" size={14} className="text-warning" />
                    <span className="text-sm font-medium text-text-primary">Certifications</span>
                  </div>
                  <div className="space-y-1">
                    {member?.certifications?.map((cert, index) => (
                      <div
                        key={index}
                        className="text-xs bg-muted text-text-secondary px-2 py-1 rounded-md inline-block mr-1 mb-1"
                      >
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8 border border-primary/20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-text-secondary">Combined Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-text-secondary">Professional Certifications</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2000+</div>
              <div className="text-sm text-text-secondary">Clients Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-text-secondary">Support Availability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;