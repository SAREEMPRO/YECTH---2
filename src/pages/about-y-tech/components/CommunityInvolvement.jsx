import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CommunityInvolvement = () => {
  const communityInitiatives = [
    {
      id: 1,
      title: "Educational Institution Partnerships",
      description: "Providing discounted IT services and free technology workshops to local schools and colleges across our service areas.",
      image: "https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "15+ Schools Supported",
      details: [
        "Free computer lab setup and maintenance",
        "Technology literacy workshops for students",
        "Teacher training on basic IT troubleshooting",
        "Discounted hardware procurement assistance"
      ],
      category: "Education"
    },
    {
      id: 2,
      title: "Local Business Technology Support",
      description: "Supporting small businesses in our community with affordable IT solutions and emergency assistance during critical situations.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "200+ Local Businesses",
      details: [
        "Emergency IT support during natural disasters",
        "Flexible payment plans for small businesses",
        "Free initial consultations and system audits",
        "Community business networking events"
      ],
      category: "Business Support"
    },
    {
      id: 3,
      title: "Digital Literacy Programs",
      description: "Conducting free workshops and training sessions to help community members become more comfortable with technology.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "500+ People Trained",
      details: [
        "Basic computer skills workshops",
        "Internet safety and cybersecurity awareness",
        "Digital payment and online banking guidance",
        "Senior citizen technology assistance programs"
      ],
      category: "Digital Literacy"
    },
    {
      id: 4,
      title: "Government Office IT Support",
      description: "Partnering with local government offices to ensure smooth operation of public services through reliable IT infrastructure.",
      image: "https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600",
      impact: "8 Government Offices",
      details: [
        "Regular maintenance of public service computers",
        "Network infrastructure upgrades",
        "Data backup and security implementations",
        "Staff training on new systems and software"
      ],
      category: "Public Service"
    }
  ];

  // const achievements = [
  //   {
  //     icon: "Award",
  //     title: "Community Service Award",
  //     year: "2023",
  //     description: "Recognized by Vellore District Collector for outstanding contribution to digital literacy"
  //   },
  //   {
  //     icon: "Users",
  //     title: "Business Association Member",
  //     year: "2020",
  //     description: "Active member of Vellore Small Business Association, promoting local entrepreneurship"
  //   },
  //   {
  //     icon: "GraduationCap",
  //     title: "Education Partner",
  //     year: "2019",
  //     description: "Official IT partner for VIT University\'s community outreach programs"
  //   },
  //   {
  //     icon: "Heart",
  //     title: "Volunteer Recognition",
  //     year: "2022",
  //     description: "Honored for volunteer IT support during COVID-19 pandemic relief efforts"
  //   }
  // ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Community Involvement
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Beyond business success, we're committed to giving back to the communities that have 
            supported us throughout our journey. Technology should benefit everyone.
          </p>
        </div>

        {/* Community Initiatives */}
        <div className="space-y-12 mb-16">
          {communityInitiatives?.map((initiative, index) => (
            <div
              key={initiative?.id}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={initiative?.image}
                    alt={initiative?.title}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                      {initiative?.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <span className="text-sm font-semibold text-text-primary">
                      {initiative?.impact}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-card border border-border rounded-xl p-8 shadow-card">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {initiative?.title}
                  </h3>
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {initiative?.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <h4 className="text-lg font-semibold text-text-primary">
                      Key Initiatives:
                    </h4>
                    <div className="space-y-2">
                      {initiative?.details?.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start space-x-3">
                          <Icon name="Check" size={16} className="text-success flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-text-secondary">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-secondary smooth-transition">
                      <Icon name="Phone" size={16} />
                      <span>Get Involved</span>
                    </button>
                    <button className="flex items-center space-x-2 px-4 py-2 bg-surface border border-border text-text-primary rounded-lg font-medium hover:bg-muted smooth-transition">
                      <Icon name="Info" size={16} />
                      <span>Learn More</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements & Recognition */}
    
        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Join Our Community Mission
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Whether you're a business looking to give back, an educational institution needing IT support, 
              or an individual wanting to improve your digital skills, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('tel:+919092619444', '_self')}
                className="btn-emergency pulse-emergency px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
              >
                <Icon name="Phone" size={18} />
                <span>Call Mr. Perumal: +91 90926 19444</span>
              </button>
              {/* <button className="bg-surface border border-border text-text-primary px-6 py-3 rounded-lg font-semibold hover:bg-muted smooth-transition flex items-center justify-center space-x-2">
                <Icon name="Mail" size={18} />
                <span>Email Us</span>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityInvolvement;