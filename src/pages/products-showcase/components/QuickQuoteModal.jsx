import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Image from '../../../components/AppImage';

const QuickQuoteModal = ({ product, isOpen, onClose, onSubmitQuote }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '1',
    businessType: '',
    requirements: '',
    needInstallation: false,
    needAMC: false,
    needTraining: false,
    urgency: 'standard'
  });

  const [errors, setErrors] = useState({});

  const businessTypeOptions = [
    { value: '', label: 'Select Business Type' },
    { value: 'small-business', label: 'Small Business (1-10 employees)' },
    { value: 'medium-business', label: 'Medium Business (11-50 employees)' },
    { value: 'enterprise', label: 'Enterprise (50+ employees)' },
    { value: 'education', label: 'Educational Institution' },
    { value: 'government', label: 'Government Office' },
    { value: 'individual', label: 'Individual/Personal Use' }
  ];

  const urgencyOptions = [
    { value: 'standard', label: 'Standard (5-7 days)' },
    { value: 'urgent', label: 'Urgent (2-3 days)' },
    { value: 'immediate', label: 'Immediate (Same day)' }
  ];

  const quantityOptions = Array.from({ length: 20 }, (_, i) => ({
    value: (i + 1)?.toString(),
    label: i + 1 === 1 ? '1 unit' : `${i + 1} units`
  }));

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    })?.format(price);
  };

  const calculateEstimatedPrice = () => {
    if (!product) return 0;
    const quantity = parseInt(formData?.quantity);
    let basePrice = product?.currentPrice * quantity;
    
    // Apply bulk discount
    if (quantity >= 10 && product?.bulkPrice) {
      basePrice = product?.bulkPrice * quantity;
    } else if (quantity >= 5) {
      basePrice = basePrice * 0.95; // 5% discount for 5+ units
    }

    // Add services
    if (formData?.needInstallation) basePrice += 2000 * quantity;
    if (formData?.needAMC) basePrice += 5000 * quantity;
    if (formData?.needTraining) basePrice += 3000;

    return basePrice;
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.name?.trim()) newErrors.name = 'Name is required';
    if (!formData?.email?.trim()) newErrors.email = 'Email is required';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.businessType) newErrors.businessType = 'Business type is required';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    if (validateForm()) {
      const quoteData = {
        ...formData,
        product: product,
        estimatedPrice: calculateEstimatedPrice(),
        timestamp: new Date()?.toISOString()
      };
      onSubmitQuote(quoteData);
      onClose();
    }
  };

  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-bold text-text-primary">Quick Quote Request</h2>
            <p className="text-sm text-text-secondary mt-1">Get personalized pricing for your needs</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Product Summary */}
        <div className="p-6 border-b border-border bg-muted/30">
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-background rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={product?.image}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-text-primary mb-1">{product?.name}</h3>
              <p className="text-sm text-text-secondary mb-2">{product?.brand} • {product?.category}</p>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-bold text-primary">
                  {formatPrice(product?.currentPrice)}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  product?.availability === 'In Stock' ?'bg-success/10 text-success' :'bg-warning/10 text-warning'
                }`}>
                  {product?.availability}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Contact Information */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="User" size={18} className="mr-2" />
              Contact Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="Enter your full name"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                error={errors?.name}
                required
              />
              <Input
                label="Email Address"
                type="email"
                placeholder="your.email@company.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                error={errors?.email}
                required
              />
              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91 90926 19444"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                error={errors?.phone}
                required
              />
              <Input
                label="Company Name"
                type="text"
                placeholder="Your company name (optional)"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
              />
            </div>
          </div>

          {/* Requirements */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Settings" size={18} className="mr-2" />
              Requirements
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <Select
                label="Business Type"
                options={businessTypeOptions}
                value={formData?.businessType}
                onChange={(value) => handleInputChange('businessType', value)}
                error={errors?.businessType}
                required
              />
              <Select
                label="Quantity"
                options={quantityOptions}
                value={formData?.quantity}
                onChange={(value) => handleInputChange('quantity', value)}
              />
              <Select
                label="Delivery Timeline"
                options={urgencyOptions}
                value={formData?.urgency}
                onChange={(value) => handleInputChange('urgency', value)}
              />
            </div>
            
            <Input
              label="Specific Requirements"
              type="text"
              placeholder="Any specific requirements or customizations needed?"
              value={formData?.requirements}
              onChange={(e) => handleInputChange('requirements', e?.target?.value)}
              description="Optional: Let us know about any specific needs or configurations"
            />
          </div>

          {/* Additional Services */}
          <div>
            <h4 className="font-semibold text-text-primary mb-4 flex items-center">
              <Icon name="Plus" size={18} className="mr-2" />
              Additional Services
            </h4>
            <div className="space-y-3">
              <Checkbox
                label="Installation & Setup Service (+₹2,000 per unit)"
                description="Professional installation and configuration at your location"
                checked={formData?.needInstallation}
                onChange={(e) => handleInputChange('needInstallation', e?.target?.checked)}
              />
              <Checkbox
                label="Annual Maintenance Contract (+₹5,000 per unit)"
                description="12-month comprehensive maintenance and support"
                checked={formData?.needAMC}
                onChange={(e) => handleInputChange('needAMC', e?.target?.checked)}
              />
              <Checkbox
                label="User Training Session (+₹3,000 one-time)"
                description="On-site training for your team on product usage"
                checked={formData?.needTraining}
                onChange={(e) => handleInputChange('needTraining', e?.target?.checked)}
              />
            </div>
          </div>

          {/* Price Estimate */}
          <div className="bg-primary/5 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-text-primary">Estimated Total:</span>
              <span className="text-xl font-bold text-primary">
                {formatPrice(calculateEstimatedPrice())}
              </span>
            </div>
            <p className="text-xs text-text-secondary">
              * Final pricing may vary based on current promotions and bulk discounts. 
              This is an estimate for planning purposes.
            </p>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              className="flex-1"
              iconName="Send"
              iconPosition="left"
            >
              Request Quote
            </Button>
          </div>

          {/* Contact Info */}
          <div className="text-center pt-4 border-t border-border">
            <p className="text-sm text-text-secondary mb-2">
              Need immediate assistance? Call us directly:
            </p>
            <div className="flex items-center justify-center space-x-4">
              <a
                href="tel:+919092619444"
                className="flex items-center text-primary hover:text-secondary smooth-transition"
              >
                <Icon name="Phone" size={16} className="mr-1" />
                <span className="font-medium">+91 90926 19444</span>
              </a>
              <a
                href="https://wa.me/919092619444"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-success hover:text-success/80 smooth-transition"
              >
                <Icon name="MessageCircle" size={16} className="mr-1" />
                <span className="font-medium">WhatsApp</span>
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuickQuoteModal;