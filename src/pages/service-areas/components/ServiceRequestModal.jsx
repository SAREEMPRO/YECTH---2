import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ServiceRequestModal = ({ area, isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: '',
    urgency: '',
    description: '',
    preferredTime: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    { value: 'computer-repair', label: 'Computer/Laptop Repair' },
    { value: 'network-setup', label: 'Network Setup & Configuration' },
    { value: 'data-recovery', label: 'Data Recovery Services' },
    { value: 'amc-service', label: 'AMC Service Visit' },
    { value: 'software-installation', label: 'Software Installation' },
    { value: 'hardware-upgrade', label: 'Hardware Upgrade' },
    { value: 'virus-removal', label: 'Virus/Malware Removal' },
    { value: 'other', label: 'Other Services' }
  ];

  const urgencyLevels = [
    { value: 'emergency', label: 'Emergency (Within 2 hours)' },
    { value: 'urgent', label: 'Urgent (Same day)' },
    { value: 'normal', label: 'Normal (Next business day)' },
    { value: 'scheduled', label: 'Scheduled (Flexible timing)' }
  ];

  const timeSlots = [
    { value: 'morning', label: 'Morning (9:00 AM - 12:00 PM)' },
    { value: 'afternoon', label: 'Afternoon (12:00 PM - 4:00 PM)' },
    { value: 'evening', label: 'Evening (4:00 PM - 7:00 PM)' },
    { value: 'flexible', label: 'Flexible (Any time)' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors?.[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData?.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData?.phone?.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/?.test(formData?.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }

    if (!formData?.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/?.test(formData?.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData?.serviceType) {
      newErrors.serviceType = 'Please select a service type';
    }

    if (!formData?.urgency) {
      newErrors.urgency = 'Please select urgency level';
    }

    if (!formData?.description?.trim()) {
      newErrors.description = 'Please describe your service requirement';
    }

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const requestData = {
        ...formData,
        area: area?.name,
        timestamp: new Date()?.toISOString(),
        requestId: `REQ-${Date.now()}`
      };
      
      onSubmit(requestData);
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        serviceType: '',
        urgency: '',
        description: '',
        preferredTime: ''
      });
      
    } catch (error) {
      console.error('Error submitting request:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen || !area) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card rounded-xl border border-border max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-text-primary">Request Service</h2>
              <p className="text-text-secondary">Service Area: {area?.name}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              label="Full Name"
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={formData?.name}
              onChange={handleInputChange}
              error={errors?.name}
              required
            />
            <Input
              label="Phone Number"
              name="phone"
              type="tel"
              placeholder="Enter 10-digit phone number"
              value={formData?.phone}
              onChange={handleInputChange}
              error={errors?.phone}
              required
            />
          </div>

          <Input
            label="Email Address"
            name="email"
            type="email"
            placeholder="Enter your email address"
            value={formData?.email}
            onChange={handleInputChange}
            error={errors?.email}
            required
          />

          <Select
            label="Service Type"
            placeholder="Select the type of service needed"
            options={serviceTypes}
            value={formData?.serviceType}
            onChange={(value) => handleSelectChange('serviceType', value)}
            error={errors?.serviceType}
            required
          />

          <Select
            label="Urgency Level"
            placeholder="How urgent is your service request?"
            options={urgencyLevels}
            value={formData?.urgency}
            onChange={(value) => handleSelectChange('urgency', value)}
            error={errors?.urgency}
            required
          />

          <Select
            label="Preferred Time Slot"
            placeholder="When would you prefer the service?"
            options={timeSlots}
            value={formData?.preferredTime}
            onChange={(value) => handleSelectChange('preferredTime', value)}
          />

          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Service Description *
            </label>
            <textarea
              name="description"
              rows={4}
              placeholder="Please describe your service requirement in detail..."
              value={formData?.description}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
            {errors?.description && (
              <p className="text-sm text-destructive mt-1">{errors?.description}</p>
            )}
          </div>

          {/* Service Area Info */}
          <div className="bg-muted/50 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Icon name="Info" size={16} className="text-primary" />
              <span className="text-sm font-medium text-text-primary">Service Information</span>
            </div>
            <div className="space-y-1 text-sm text-text-secondary">
              <p>• Expected Response Time: {area?.responseTime}</p>
              <p>• Travel Time from Office: {area?.travelTime}</p>
              <p>• Local Contact: {area?.localContact}</p>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              loading={isSubmitting}
              iconName="Send"
              iconPosition="left"
              className="flex-1"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestModal;