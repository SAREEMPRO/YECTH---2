import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const CallbackScheduler = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredDate: '',
    preferredTime: '',
    callbackReason: '',
    urgency: '',
    notes: '',
    agreeToCallback: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const timeSlots = [
    { value: '09:00', label: '9:00 AM - 10:00 AM' },
    { value: '10:00', label: '10:00 AM - 11:00 AM' },
    { value: '11:00', label: '11:00 AM - 12:00 PM' },
    { value: '12:00', label: '12:00 PM - 1:00 PM' },
    { value: '14:00', label: '2:00 PM - 3:00 PM' },
    { value: '15:00', label: '3:00 PM - 4:00 PM' },
    { value: '16:00', label: '4:00 PM - 5:00 PM' },
    { value: '17:00', label: '5:00 PM - 6:00 PM' },
    { value: '18:00', label: '6:00 PM - 7:00 PM' }
  ];

  const callbackReasons = [
    { value: 'service_inquiry', label: 'Service Inquiry' },
    { value: 'technical_support', label: 'Technical Support' },
    { value: 'amc_discussion', label: 'AMC Package Discussion' },
    { value: 'quote_request', label: 'Quote Request' },
    { value: 'complaint_resolution', label: 'Complaint Resolution' },
    { value: 'consultation', label: 'IT Consultation' },
    { value: 'other', label: 'Other' }
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low - Within 2-3 days' },
    { value: 'medium', label: 'Medium - Within 1 day' },
    { value: 'high', label: 'High - Within 4 hours' },
    { value: 'urgent', label: 'Urgent - Within 1 hour' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          name: '',
          phone: '',
          email: '',
          preferredDate: '',
          preferredTime: '',
          callbackReason: '',
          urgency: '',
          notes: '',
          agreeToCallback: false
        });
      }, 4000);
    }, 2000);
  };

  const getMinDate = () => {
    const today = new Date();
    return today?.toISOString()?.split('T')?.[0];
  };

  const getMaxDate = () => {
    const today = new Date();
    const maxDate = new Date(today.getTime() + (30 * 24 * 60 * 60 * 1000)); // 30 days from now
    return maxDate?.toISOString()?.split('T')?.[0];
  };

  if (submitSuccess) {
    return (
      <div className="bg-surface rounded-xl shadow-card p-8 text-center">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="Calendar" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">Callback Scheduled Successfully!</h3>
        <p className="text-text-secondary mb-4">
          We'll call you on {new Date(formData.preferredDate)?.toLocaleDateString('en-IN')} between {formData?.preferredTime} - {parseInt(formData?.preferredTime?.split(':')?.[0]) + 1}:00.
        </p>
        <div className="bg-muted rounded-lg p-4 mb-4">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <Icon name="Phone" size={16} className="text-primary" />
            <span className="text-sm font-medium text-text-primary">Callback Details</span>
          </div>
          <div className="text-sm text-text-secondary space-y-1">
            <p><strong>Reference:</strong> CB-{Date.now()?.toString()?.slice(-6)}</p>
            <p><strong>Phone:</strong> {formData?.phone}</p>
            <p><strong>Reason:</strong> {callbackReasons?.find(r => r?.value === formData?.callbackReason)?.label}</p>
          </div>
        </div>
        <p className="text-xs text-text-secondary">
          You'll receive a confirmation SMS shortly. If you need to reschedule, please call us at +91 90926 19444.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl shadow-card p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
          <Icon name="Calendar" size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">Schedule a Callback</h3>
          <p className="text-sm text-text-secondary">We'll call you at your preferred time</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            required
            value={formData?.name}
            onChange={(e) => handleInputChange('name', e?.target?.value)}
            placeholder="Enter your full name"
          />
          
          <Input
            label="Phone Number"
            type="tel"
            required
            value={formData?.phone}
            onChange={(e) => handleInputChange('phone', e?.target?.value)}
            placeholder="+91 90926 19444"
            description="We'll call you on this number"
          />
        </div>

        <Input
          label="Email Address"
          type="email"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          placeholder="your.email@example.com"
          description="Optional - for confirmation email"
        />

        {/* Callback Scheduling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Preferred Date"
            type="date"
            required
            value={formData?.preferredDate}
            onChange={(e) => handleInputChange('preferredDate', e?.target?.value)}
            min={getMinDate()}
            max={getMaxDate()}
          />
          
          <Select
            label="Preferred Time Slot"
            description="Select your convenient time"
            required
            options={timeSlots}
            value={formData?.preferredTime}
            onChange={(value) => handleInputChange('preferredTime', value)}
            placeholder="Choose time slot"
          />
        </div>

        {/* Callback Details */}
        <Select
          label="Reason for Callback"
          description="Help us prepare for your call"
          required
          options={callbackReasons}
          value={formData?.callbackReason}
          onChange={(value) => handleInputChange('callbackReason', value)}
          placeholder="Select callback reason"
        />

        <Select
          label="Urgency Level"
          description="How soon do you need this callback?"
          required
          options={urgencyLevels}
          value={formData?.urgency}
          onChange={(value) => handleInputChange('urgency', value)}
          placeholder="Select urgency level"
        />

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Additional Notes
          </label>
          <textarea
            value={formData?.notes}
            onChange={(e) => handleInputChange('notes', e?.target?.value)}
            placeholder="Any specific details you'd like us to know before the call..."
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
          />
          <p className="text-xs text-text-secondary mt-1">
            Optional - helps us prepare better for your call
          </p>
        </div>

        {/* Callback Information */}
        <div className="bg-muted rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={16} className="text-primary mt-0.5" />
            <div className="text-sm text-text-secondary">
              <p className="mb-2">
                <strong className="text-text-primary">Callback Policy:</strong>
              </p>
              <ul className="space-y-1 text-xs">
                <li>• We'll call you within the selected time slot</li>
                <li>• If you miss the call, we'll try again after 30 minutes</li>
                <li>• You can reschedule up to 2 hours before the scheduled time</li>
                <li>• Emergency callbacks available 24/7 for critical issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agreement */}
        <Checkbox
          label="I agree to receive a callback at the scheduled time and understand the callback policy"
          required
          checked={formData?.agreeToCallback}
          onChange={(e) => handleInputChange('agreeToCallback', e?.target?.checked)}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          loading={isSubmitting}
          disabled={!formData?.agreeToCallback}
          iconName="Calendar"
          iconPosition="right"
          fullWidth
          className="mt-6"
        >
          {isSubmitting ? 'Scheduling Callback...' : 'Schedule Callback'}
        </Button>
      </form>
      {/* Quick Actions */}
      <div className="mt-8 pt-6 border-t border-border">
        <p className="text-sm text-text-secondary mb-4 text-center">
          Need immediate assistance? Contact us directly:
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="outline"
            iconName="Phone"
            iconPosition="left"
            onClick={() => window.open('tel:+919092619444', '_self')}
            fullWidth
          >
            Call Now: +91 90926 19444
          </Button>
          <Button
            variant="outline"
            iconName="MessageCircle"
            iconPosition="left"
            onClick={() => window.open('https://wa.me/919092619444', '_blank')}
            fullWidth
          >
            WhatsApp Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallbackScheduler;