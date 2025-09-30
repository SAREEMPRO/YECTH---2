import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

const testimonials = [
  {
    id: 1,
    person: "Madhan Kumar",
    role: "Customer",
    location: "Vellore",
    rating: 5,
    content: `It was a good experience visiting this shop to buy a computer and found the price is cheaper than the most places across. Good service with affordable charges and prompt response to customers.`,
    service: "Computer Sales & Service",
    reviewCount: "3 reviews",
    photoCount: "1 photo",
    date: "3 months ago",
    metrics: {
      price: "Cheaper than most",
      service: "Affordable charges",
      response: "Prompt response"
    }
  },
  {
    id: 2,
    person: "Srimathi Selvam",
    role: "Customer",
    location: "Vellore",
    rating: 5,
    content: `On time service and quickly response on my laptop and solve problems. Very satisfied with their technical support and problem-solving approach.`,
    service: "Laptop Repair",
    reviewCount: "2 reviews",
    photoCount: "4 photos",
    date: "3 months ago",
    metrics: {
      timing: "On time service",
      response: "Quick response",
      resolution: "Problem solved"
    }
  },
  {
    id: 3,
    person: "B. Gnanasekaran",
    role: "Customer",
    location: "Vellore",
    rating: 5,
    content: `Computer sales and services very good. Efficient and professional service. Highly recommended for all computer needs.`,
    service: "Computer Sales & Service",
    reviewCount: "3 reviews",
    photoCount: "No photos",
    date: "3 months ago",
    metrics: {
      quality: "Very good",
      efficiency: "Efficient service",
      recommendation: "Highly recommended"
    }
  },
  {
    id: 4,
    person: "Uma Maheswari",
    role: "Customer",
    location: "Vellore",
    rating: 5,
    content: `I was completely impressed with their service. Professional approach and excellent customer care. Will definitely come back for future needs.`,
    service: "General Service",
    reviewCount: "1 review",
    photoCount: "No photos",
    date: "3 months ago",
    metrics: {
      impression: "Completely impressed",
      professionalism: "Professional approach",
      loyalty: "Return customer"
    }
  },
  {
    id: 5,
    person: "Tamilselvan",
    role: "Customer",
    location: "Vellore",
    rating: 5,
    content: `Excellent Service and Excellent product. Quality workmanship and reliable service. One of the best computer service centers in Vellore.`,
    service: "Computer Products & Service",
    reviewCount: "11 reviews",
    photoCount: "5 photos",
    date: "3 months ago",
    metrics: {
      service: "Excellent service",
      product: "Excellent product",
      reliability: "Reliable service"
    }
  },
  {
    id: 6,
    person: "Raghul Kamal",
    role: "Customer",
    location: "Vellore",
    rating: 5,
    content: `Very good service and support. Quick resolution of issues and friendly staff. Affordable pricing with quality service.`,
    service: "General IT Support",
    reviewCount: "1 review",
    photoCount: "1 photo",
    date: "3 months ago",
    metrics: {
      service: "Very good",
      speed: "Quick resolution",
      pricing: "Affordable"
    }
  },
  {
    id: 7,
    person: "Vijaya Lakshmi",
    role: "Customer",
    location: "Vellore",
    rating: 5,
    content: `Best Service and Response. Always available when needed and provide immediate solutions. Trustworthy and dependable service provider.`,
    service: "IT Support",
    reviewCount: "1 review",
    photoCount: "No photos",
    date: "3 months ago",
    metrics: {
      service: "Best service",
      response: "Quick response",
      reliability: "Trustworthy"
    }
  },
  {
    id: 8,
    person: "AR Tejah",
    role: "Local Guide",
    location: "Vellore",
    rating: 4,
    content: `Please share contact details phone number need urgent delivery. Good products but need better communication channels for urgent requirements.`,
    service: "Product Delivery",
    reviewCount: "16 reviews",
    photoCount: "6 photos",
    date: "a year ago",
    metrics: {
      products: "Good products",
      communication: "Need better contact",
      urgency: "Urgent delivery needed"
    }
  },
  {
    id: 9,
    person: "Nexuss Infotech Solutions",
    role: "Business Customer",
    location: "Vellore",
    rating: 5,
    content: `Very Good place for Purchasing IT Products. Reliable supplier for our business needs. Competitive pricing and quality products.`,
    service: "IT Products Supply",
    reviewCount: "8 reviews",
    photoCount: "No photos",
    date: "3 years ago",
    metrics: {
      reliability: "Reliable supplier",
      pricing: "Competitive pricing",
      quality: "Quality products"
    }
  }
];

const businessInfo = {
  name: "Y Tech Computer & Services",
  address: "6, 2nd Cross Main St, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006, India",
  overallRating: 4.8,
  totalReviews: 19,
  services: [
    "Computer Sales",
    "Laptop Repair", 
    "IT Products",
    "Technical Support",
    "Product Delivery"
  ],
  highlights: [
    "Affordable Pricing",
    "Quick Response",
    "Quality Service",
    "Expert Technicians",
    "Customer Satisfaction"
  ]
};

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials?.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials?.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-warning/10 text-warning px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MessageSquare" size={16} />
            <span>Client Success Stories</span>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Real Results from Real Businesses
          </h2>
          
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover how Y-Tech has helped businesses across Tamil Nadu overcome IT challenges and achieve their technology goals.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <div className="bg-surface rounded-2xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Content Side */}
              <div className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Company Info */}
                  <div className="flex items-center space-x-4">
                  
                    <div>
                      <h3 className="text-xl font-bold text-text-primary">
                        {currentTestimonial?.company}
                      </h3>
                      <div className="flex items-center space-x-2 text-sm text-text-secondary">
                        <Icon name="MapPin" size={14} />
                        <span>{currentTestimonial?.location}</span>
                        <span>•</span>
                        <span className="bg-primary/10 text-primary px-2 py-1 rounded-md">
                          {currentTestimonial?.service}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-warning fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-text-secondary">
                      {currentTestimonial?.rating}.0 out of 5
                    </span>
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-text-primary leading-relaxed text-lg">
                    "{currentTestimonial?.content}"
                  </blockquote>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                    {Object.entries(currentTestimonial?.metrics)?.map(([key, value], index) => (
                      <div key={index} className="text-center">
                        <p className="text-sm text-text-secondary capitalize">
                          {key?.replace(/([A-Z])/g, ' $1')?.trim()}
                        </p>
                        <p className="font-bold text-primary">{value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <p className="font-semibold text-text-primary">
                        {currentTestimonial?.person}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {currentTestimonial?.role}
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevSlide}
                        className="w-10 h-10"
                      >
                        <Icon name="ChevronLeft" size={20} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextSlide}
                        className="w-10 h-10"
                      >
                        <Icon name="ChevronRight" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Side */}
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 lg:p-12 flex items-center justify-center">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto bg-surface rounded-full shadow-xl flex items-center justify-center">
                    <Icon name="Quote" size={48} className="text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-text-primary">
                      Success Story #{currentIndex + 1}
                    </h4>
                    <p className="text-text-secondary">
                      {currentTestimonial?.service} Excellence
                    </p>
                  </div>

                  {/* Service Highlight */}
                  <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-4 border border-border">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                        <Icon name="CheckCircle" size={20} className="text-success" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-text-primary text-sm">
                          Project Completed Successfully
                        </p>
                        <p className="text-xs text-text-secondary">
                          Client satisfaction guaranteed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-primary w-8' :'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-4 space-x-2">
            <Icon 
              name={isAutoPlaying ? "Play" : "Pause"} 
              size={14} 
              className="text-text-secondary" 
            />
            <span className="text-xs text-text-secondary">
              {isAutoPlaying ? "Auto-playing" : "Paused"}
            </span>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-text-secondary">Client Retention Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-1">4.8</div>
            <div className="text-sm text-text-secondary">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-1">50+</div>
            <div className="text-sm text-text-secondary">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-warning mb-1">24/7</div>
            <div className="text-sm text-text-secondary">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;