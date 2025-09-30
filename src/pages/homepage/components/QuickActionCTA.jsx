import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { useNavigate } from 'react-router-dom';

const QuickActionCTA = () => {
  const [quickQuoteForm, setQuickQuoteForm] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const navigate = useNavigate();

  const services = [
    "Computer/Laptop Repair",
    "Networking Solutions", 
    "AMC Services",
    "New System Sales",
    "Data Recovery",
    "Emergency Support"
  ];

  const handleQuoteSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Quote request submitted! We will contact you within 2 hours.');
      setQuickQuoteForm({ name: '', phone: '', service: '', message: '' });
      setShowQuoteForm(false);
      setIsSubmitting(false);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setQuickQuoteForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleGotoContact = () => {
    navigate('/contact-support');
  }

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary-foreground rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-foreground rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary-foreground/20 px-4 py-2 rounded-full text-sm font-medium">
                <Icon name="Zap" size={16} />
                <span>Quick Actions</span>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold leading-tight">
                Get IT Support When You Need It Most
              </h2>
              
              <p className="text-xl opacity-90 leading-relaxed">
                Don't let technology issues slow down your business. Get immediate help or request a custom quote for your IT needs.
              </p>
            </div>

            {/* Action Buttons Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Emergency Support */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-full flex items-center justify-center animate-pulse">
                    <Icon name="Phone" size={24} className="text-brand-orange-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Emergency Support</h3>
                    <p className="text-sm opacity-80">2-hour response guarantee</p>
                  </div>
                </div>
                
                <Button
                  variant="default"
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-brand-orange-foreground border-0"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.open('tel:+919092619444', '_self')}
                >
                  Call Emergency: +91 90926 19444
                </Button>
                
                <div className="flex items-center justify-center space-x-4 mt-3 pt-3 border-t border-primary-foreground/20">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={() => window.open('https://wa.me/919092619444?text=Emergency IT Support Required', '_blank')}
                  >
                    <Icon name="MessageCircle" size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>

              {/* Quick Quote */}
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Calculator" size={24} className="text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Get Quick Quote</h3>
                    <p className="text-sm opacity-80">Free estimate in 30 minutes</p>
                  </div>
                </div>
                
                <Button
                  variant="outline"
                  className="w-full border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  iconName="FileText"
                  iconPosition="left"
                  onClick={() => handleGotoContact()}
                >
                  Request Quote
                </Button>
                
                <div className="flex items-center justify-center space-x-4 mt-3 pt-3 border-t border-primary-foreground/20">
                  <Link to="/services-overview">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Icon name="Grid3X3" size={16} className="mr-2" />
                      View Services
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Actions */}
            <div className="flex flex-wrap gap-3">
              <Link to="/contact-support">
                <Button
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  iconName="MessageSquare"
                  iconPosition="left"
                >
                  Contact Support
                </Button>
              </Link>
              
              <Link to="/service-areas">
                <Button
                  variant="outline"
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  iconName="MapPin"
                  iconPosition="left"
                >
                  Check Coverage
                </Button>
              </Link>
              
              <Button
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                iconName="Calendar"
                iconPosition="left"
                onClick={() =>handleGotoContact()}
              >
                Schedule Visit
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4 border-t border-primary-foreground/20">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span className="text-sm">2-Hour Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span className="text-sm">Insured Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span className="text-sm">15+ Years</span>
              </div>
            </div>
          </div>

          {/* Quote Form Side */}
          <div className="relative">
            {showQuoteForm ? (
              <div className="bg-surface rounded-2xl p-8 shadow-2xl border border-border">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-text-primary">Quick Quote Request</h3>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowQuoteForm(false)}
                    className="text-text-secondary hover:text-text-primary"
                  >
                    <Icon name="X" size={20} />
                  </Button>
                </div>

                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <Input
                    label="Full Name"
                    type="text"
                    name="name"
                    value={quickQuoteForm?.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    name="phone"
                    value={quickQuoteForm?.phone}
                    onChange={handleInputChange}
                    placeholder="+91 90926 19444"
                    required
                  />

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-primary">
                      Service Required
                    </label>
                    <select
                      name="service"
                      value={quickQuoteForm?.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services?.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-text-primary">
                      Brief Description
                    </label>
                    <textarea
                      name="message"
                      value={quickQuoteForm?.message}
                      onChange={handleInputChange}
                      placeholder="Describe your IT needs or issues..."
                      rows={3}
                      className="w-full px-3 py-2 border border-border rounded-lg bg-input text-text-primary focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full"
                    loading={isSubmitting}
                    iconName="Send"
                    iconPosition="right"
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
                  </Button>

                  <p className="text-xs text-text-secondary text-center">
                    We'll contact you within 30 minutes during business hours
                  </p>
                </form>
              </div>
            ) : (
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/20">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 mx-auto bg-primary-foreground/20 rounded-full flex items-center justify-center">
                    <Icon name="Headphones" size={40} />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">24/7 Support Ready</h3>
                    <p className="opacity-90">
                      Our expert technicians are standing by to help resolve your IT challenges quickly and efficiently.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-accent" />
                      <span>Free initial consultation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-accent" />
                      <span>Transparent pricing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} className="text-accent" />
                      <span>Satisfaction guaranteed</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    iconName="ArrowRight"
                    iconPosition="right"
                    onClick={() => handleGotoContact()}
                  >
                    Start Quote Request
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickActionCTA;