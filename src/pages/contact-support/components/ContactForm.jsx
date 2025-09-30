import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import Select from "../../../components/ui/Select";
import { Checkbox } from "../../../components/ui/Checkbox";
import Icon from "../../../components/AppIcon";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
    urgency: "",
    equipmentType: "",
    preferredContact: "",
    agreeToTerms: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState([]);

  const inquiryTypes = [
    { value: "general", label: "General Inquiry" },
    { value: "service", label: "Service Request" },
    { value: "amc", label: "AMC Information" },
    { value: "quote", label: "Product Quote" },
    { value: "emergency", label: "Emergency Support" },
  ];

  const urgencyLevels = [
    { value: "low", label: "Low - Within 48 hours" },
    { value: "medium", label: "Medium - Within 24 hours" },
    { value: "high", label: "High - Within 4 hours" },
    { value: "critical", label: "Critical - Within 2 hours" },
  ];

  const equipmentTypes = [
    { value: "desktop", label: "Desktop Computer" },
    { value: "laptop", label: "Laptop" },
    { value: "server", label: "Server" },
    { value: "network", label: "Network Equipment" },
    { value: "printer", label: "Printer/Scanner" },
    { value: "other", label: "Other Equipment" },
  ];



  const contactMethods = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone Call" },
    { value: "whatsapp", label: "WhatsApp" },
    { value: "visit", label: "Office Visit" },
  ];

  // Helper function to get label from value - MOVED BEFORE ANY USAGE
  const getLabel = (value, options) => {
    if (!value || !options) return "";
    const option = options.find(opt => opt.value === value);
    return option ? option.label : value;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors([]);

    try {
      // Prepare data for Formspree
      const formDataToSubmit = new FormData();
      
      // Add all form fields to FormData
      Object.keys(formData).forEach(key => {
        if (key === 'agreeToTerms') {
          formDataToSubmit.append(key, formData[key] ? 'Yes' : 'No');
        } else {
          formDataToSubmit.append(key, formData[key] || '');
        }
      });

      // Add human-readable values for select fields
      formDataToSubmit.append('inquiryTypeLabel', getLabel(formData.inquiryType, inquiryTypes));
      if (formData.urgency) {
        formDataToSubmit.append('urgencyLabel', getLabel(formData.urgency, urgencyLevels));
      }
      if (formData.equipmentType) {
        formDataToSubmit.append('equipmentTypeLabel', getLabel(formData.equipmentType, equipmentTypes));
      }
     
      if (formData.preferredContact) {
        formDataToSubmit.append('preferredContactLabel', getLabel(formData.preferredContact, contactMethods));
      }

      // Submit to Formspree using fetch API
      const response = await fetch("https://formspree.io/f/xqayaowo", {
        method: "POST",
        body: formDataToSubmit,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitSuccess(true);
        // Reset form after success
        setFormData({
          inquiryType: "",
          name: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
          urgency: "",
          equipmentType: "",
          preferredContact: "",
          agreeToTerms: false,
        });
      } else {
        const errorData = await response.json();
        setErrors([errorData.error || 'Failed to submit form. Please try again.']);
      }
    } catch (error) {
      setErrors(['Network error. Please check your connection and try again.']);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResponseTime = () => {
    switch (formData?.inquiryType) {
      case "emergency":
        return "Within 2 hours";
      case "service":
        return "Within 4 hours";
      case "amc":
        return "Within 24 hours";
      case "quote":
        return "Within 24 hours";
      default:
        return "Within 48 hours";
    }
  };

  if (submitSuccess) {
    return (
      <div className="bg-surface rounded-xl shadow-card p-8 text-center min-w-0 xl:min-w-[1300px]">
        <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
          {/* Replaced problematic icon with a simple check */}
          <svg 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="text-success"
          >
            <path 
              d="M20 6L9 17l-5-5" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">
          Request Submitted Successfully!
        </h3>
        <p className="text-text-secondary mb-4">
          Thank you for contacting Y-Tech. We'll respond to your{" "}
          {getLabel(formData.inquiryType, inquiryTypes)} inquiry within{" "}
          {getResponseTime()?.toLowerCase()}.
        </p>
        <p className="text-sm text-text-secondary">
          Reference ID: YT-{Date.now()?.toString()?.slice(-6)}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl shadow-card p-6 lg:p-8 min-w-0 xl:min-w-[1300px]">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          {/* Replaced problematic icon with a simple message icon */}
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            className="text-primary"
          >
            <path 
              d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-text-primary">
            Contact Form
          </h3>
          <p className="text-sm text-text-secondary">
            Get in touch with our team
          </p>
        </div>
      </div>
      
      {/* Error Display */}
      {errors.length > 0 && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
          <div className="flex items-center space-x-2 mb-2">
            {/* Replaced problematic icon with a simple alert icon */}
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              className="text-destructive"
            >
              <path 
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <line x1="12" y1="9" x2="12" y2="13" strokeWidth="2" strokeLinecap="round" />
              <line x1="12" y1="17" x2="12" y2="17" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-medium text-destructive">
              Please fix the following errors:
            </span>
          </div>
          <ul className="text-sm text-destructive list-disc list-inside space-y-1">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inquiry Type */}
        <Select
          label="Type of Inquiry"
          description="Select the category that best describes your request"
          required
          options={inquiryTypes}
          value={formData?.inquiryType}
          onChange={(value) => handleInputChange("inquiryType", value)}
          placeholder="Choose inquiry type"
        />

        {/* Response Time Indicator */}
        {formData?.inquiryType && (
          <div className="bg-muted rounded-lg p-4">
            <div className="flex items-center space-x-2">
              {/* Replaced problematic icon with a simple clock icon */}
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                className="text-primary"
              >
                <circle cx="12" cy="12" r="10" strokeWidth="2" />
                <polyline points="12 6 12 12 16 14" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <span className="text-sm font-medium text-text-primary">
                Expected Response Time: {getResponseTime()}
              </span>
            </div>
          </div>
        )}

        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            type="text"
            name="name"
            required
            value={formData?.name}
            onChange={(e) => handleInputChange("name", e?.target?.value)}
            placeholder="Enter your full name"
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            required
            value={formData?.email}
            onChange={(e) => handleInputChange("email", e?.target?.value)}
            placeholder="your.email@example.com"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            required
            value={formData?.phone}
            onChange={(e) => handleInputChange("phone", e?.target?.value)}
            placeholder="+91 98765 43210"
          />

          <Input
            label="Company/Organization"
            type="text"
            name="company"
            value={formData?.company}
            onChange={(e) => handleInputChange("company", e?.target?.value)}
            placeholder="Your company name (optional)"
          />
        </div>

        {/* Conditional Fields Based on Inquiry Type */}
        {formData?.inquiryType === "service" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select
              label="Equipment Type"
              required
              options={equipmentTypes}
              value={formData?.equipmentType}
              onChange={(value) => handleInputChange("equipmentType", value)}
              placeholder="Select equipment type"
            />

            <Select
              label="Urgency Level"
              required
              options={urgencyLevels}
              value={formData?.urgency}
              onChange={(value) => handleInputChange("urgency", value)}
              placeholder="Select urgency"
            />
          </div>
        )}

    

        {(formData?.inquiryType === "emergency" ||
          formData?.inquiryType === "service") && (
          <Select
            label="Urgency Level"
            required
            options={urgencyLevels}
            value={formData?.urgency}
            onChange={(value) => handleInputChange("urgency", value)}
            placeholder="Select urgency level"
          />
        )}

        {/* Subject and Message */}
        <Input
          label="Subject"
          type="text"
          name="subject"
          required
          value={formData?.subject}
          onChange={(e) => handleInputChange("subject", e?.target?.value)}
          placeholder="Brief description of your request"
        />

        <div>
          <label className="block text-sm font-medium text-text-primary mb-2">
            Message <span className="text-destructive">*</span>
          </label>
          <textarea
            name="message"
            required
            value={formData?.message}
            onChange={(e) => handleInputChange("message", e?.target?.value)}
            placeholder="Provide detailed information about your request..."
            rows={5}
            className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-vertical"
          />
        </div>

        {/* Preferred Contact Method */}
        <Select
          label="Preferred Contact Method"
          description="How would you like us to respond?"
          options={contactMethods}
          value={formData?.preferredContact}
          onChange={(value) => handleInputChange("preferredContact", value)}
          placeholder="Choose contact method"
        />

        {/* Terms Agreement */}
        <Checkbox
          label="I agree to the terms and conditions and privacy policy"
          required
          checked={formData?.agreeToTerms}
          onChange={(e) =>
            handleInputChange("agreeToTerms", e?.target?.checked)
          }
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          loading={isSubmitting}
          disabled={!formData?.agreeToTerms || isSubmitting}
          iconName="Send"
          iconPosition="right"
          fullWidth
          className="mt-6"
        >
          {isSubmitting ? "Submitting Request..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;