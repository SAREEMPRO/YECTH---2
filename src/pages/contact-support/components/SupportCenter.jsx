import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Icon from '../../../components/AppIcon';

const SupportCenter = () => {
  const [activeTab, setActiveTab] = useState('faq');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);


  const faqCategories = [
    {
      category: 'General Services',
      questions: [
        {
          question: 'What are your service response times?',
          answer: `Our response times vary by service type:\n• Emergency Support: Within 2 hours (24/7)\n• Regular Service Requests: Within 4 hours\n• AMC Inquiries: Within 24 hours\n• General Inquiries: Within 48 hours\n\nFor AMC customers, we provide priority support with faster response times.`
        },
        {
          question: 'Do you provide on-site support?',
          answer: `Yes, we provide comprehensive on-site support across all our service areas including Vellore, Thirupathur, Vaniyambadi, Sri Perambudur, Gudiyatham, and Ranipet.\n\nOn-site services include:\n• Hardware diagnostics and repair\n• Software installation and configuration\n• Network setup and troubleshooting\n• Data recovery and backup\n• System maintenance and optimization`
        },
        {
          question: 'What is included in your AMC packages?',
          answer: `Our Annual Maintenance Contracts include:\n• Regular preventive maintenance\n• Priority support with faster response times\n• Free on-site visits within 25km radius\n• Hardware diagnostics and minor repairs\n• Software updates and security patches\n• 24/7 phone support\n• Quarterly system health reports\n• Discounted rates on parts and major repairs`
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          question: 'My computer is running very slowly. What should I do?',
          answer: `Try these troubleshooting steps:\n1. Restart your computer\n2. Check for Windows updates\n3. Run disk cleanup to free up space\n4. Check for malware using Windows Defender\n5. Close unnecessary programs running in background\n\nIf the problem persists, contact us for professional diagnosis. Slow performance can indicate hardware issues, malware, or system optimization needs.`
        },
        {
          question: 'How do I backup my important data?',
          answer: `We recommend multiple backup strategies:\n\n**Cloud Backup:**\n• Google Drive, OneDrive, or Dropbox for documents\n• Automatic sync for important folders\n\n**External Backup:**\n• External hard drive or USB drive\n• Regular manual or scheduled backups\n\n**Professional Backup:**\n• Our managed backup services\n• Automated daily backups with monitoring\n\nContact us to set up a comprehensive backup solution for your business.`
        },
        {
          question: 'What should I do if my laptop won\'t turn on?',
          answer: `Follow these steps:\n1. Check power adapter connection\n2. Try a different power outlet\n3. Remove battery and hold power button for 30 seconds\n4. Reinsert battery and try turning on\n5. Check for any visible damage to power adapter\n\nIf these steps don't work, it could be:\n• Faulty power adapter or battery\n• Motherboard issues\n• Hardware component failure\n\nBring your laptop to our service center for professional diagnosis.`
        }
      ]
    },
    {
      category: 'Billing & Pricing',
      questions: [
        {
          question: 'How do you charge for services?',
          answer: `Our pricing structure:\n\n**Diagnostic Fee:** ₹200 (waived if you proceed with repair)\n**Labor Charges:** ₹500-2000 depending on complexity\n**Parts:** At market rates with transparent pricing\n**On-site Visits:** ₹300 within city limits (free for AMC customers)\n\n**AMC Packages:**\n• Basic: ₹3000/year for individual users\n• Business: ₹8000/year for small businesses\n• Enterprise: Custom pricing for large organizations\n\nAll prices include GST. We provide detailed quotes before starting any work.`
        },
        {
          question: 'Do you offer warranties on repairs?',
          answer: `Yes, we provide comprehensive warranties:\n\n**Service Warranty:**\n• 30 days on all repair work\n• 90 days on major component replacements\n• 1 year on new parts installed\n\n**Parts Warranty:**\n• Manufacturer warranty on all genuine parts\n• Extended warranty options available\n• Replacement guarantee for defective parts\n\n**AMC Warranty:**\n• All maintenance work covered\n• Priority replacement for covered components\n• Extended warranty on AMC-related repairs`
        }
      ]
    }
  ];

  const guides = [
    {
      title: 'Computer Maintenance Best Practices',
      description: 'Keep your computer running smoothly with regular maintenance',
      downloadUrl: '#',
      type: 'PDF Guide',
      size: '2.5 MB'
    },
    {
      title: 'Data Backup Strategies for Small Business',
      description: 'Comprehensive guide to protecting your business data',
      downloadUrl: '#',
      type: 'PDF Guide',
      size: '3.2 MB'
    },
    {
      title: 'Network Security Checklist',
      description: 'Essential security measures for your business network',
      downloadUrl: '#',
      type: 'PDF Checklist',
      size: '1.8 MB'
    },
    {
      title: 'Windows 11 Migration Guide',
      description: 'Step-by-step guide for upgrading to Windows 11',
      downloadUrl: '#',
      type: 'PDF Guide',
      size: '4.1 MB'
    }
  ];

  const downloads = [
    {
      name: 'Y-Tech Remote Support Tool',
      description: 'Allow our technicians to remotely assist with your computer',
      version: 'v2.1.0',
      size: '15.2 MB',
      downloadUrl: '#'
    },
    {
      name: 'System Diagnostic Tool',
      description: 'Generate detailed system reports for troubleshooting',
      version: 'v1.5.3',
      size: '8.7 MB',
      downloadUrl: '#'
    },
    {
      name: 'Driver Update Utility',
      description: 'Automatically update all your system drivers',
      version: 'v3.2.1',
      size: '12.4 MB',
      downloadUrl: '#'
    }
  ];

  const filteredFaqs = faqCategories?.map(category => ({
    ...category,
    questions: category?.questions?.filter(faq =>
      faq?.question?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
      faq?.answer?.toLowerCase()?.includes(searchQuery?.toLowerCase())
    )
  }))?.filter(category => category?.questions?.length > 0);

  const toggleFaq = (categoryIndex, questionIndex) => {
    const faqId = `${categoryIndex}-${questionIndex}`;
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="bg-surface rounded-xl shadow-card">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="LifeBuoy" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Support Center</h3>
            <p className="text-sm text-text-secondary">Find answers and get help</p>
          </div>
        </div>


      </div>
      {/* Content */}
      <div className="p-6">
        {/* FAQ Tab */}
        {activeTab === 'faq' && (
          <div className="space-y-6">
            {/* Search */}
            <Input
              type="search"
              placeholder="Search frequently asked questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e?.target?.value)}
              className="mb-6"
            />

            {/* FAQ Categories */}
            {filteredFaqs?.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-4">
                <h4 className="text-lg font-semibold text-text-primary border-b border-border pb-2">
                  {category?.category}
                </h4>
                <div className="space-y-3">
                  {category?.questions?.map((faq, questionIndex) => {
                    const faqId = `${categoryIndex}-${questionIndex}`;
                    const isExpanded = expandedFaq === faqId;
                    
                    return (
                      <div key={questionIndex} className="border border-border rounded-lg">
                        <button
                          onClick={() => toggleFaq(categoryIndex, questionIndex)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-muted smooth-transition"
                        >
                          <span className="font-medium text-text-primary">{faq?.question}</span>
                          <Icon 
                            name={isExpanded ? "ChevronUp" : "ChevronDown"} 
                            size={20} 
                            className="text-text-secondary" 
                          />
                        </button>
                        {isExpanded && (
                          <div className="p-4 pt-0 border-t border-border">
                            <div className="text-text-secondary whitespace-pre-line">
                              {faq?.answer}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}

            {filteredFaqs?.length === 0 && searchQuery && (
              <div className="text-center py-8">
                <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                <p className="text-text-secondary">No results found for "{searchQuery}"</p>
                <Button
                  variant="outline"
                  onClick={() => setSearchQuery('')}
                  className="mt-4"
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        )}

        {/* Guides Tab */}
        {activeTab === 'guides' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides?.map((guide, index) => (
              <div key={index} className="border border-border rounded-lg p-4 hover:shadow-md smooth-transition">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={20} className="text-success" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary mb-1">{guide?.title}</h4>
                    <p className="text-sm text-text-secondary mb-2">{guide?.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <span>{guide?.type}</span>
                        <span>{guide?.size}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        iconName="Download"
                        iconPosition="left"
                        onClick={() => window.open(guide?.downloadUrl, '_blank')}
                      >
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Downloads Tab */}
        {activeTab === 'downloads' && (
          <div className="space-y-4">
            {downloads?.map((download, index) => (
              <div key={index} className="border border-border rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Icon name="Download" size={20} className="text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-text-primary">{download?.name}</h4>
                      <p className="text-sm text-text-secondary mb-1">{download?.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-text-secondary">
                        <span>Version {download?.version}</span>
                        <span>{download?.size}</span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="default"
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => window.open(download?.downloadUrl, '_blank')}
                  >
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Support Tickets Tab */}
        {activeTab === 'tickets' && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Ticket" size={32} className="text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-text-primary mb-2">Support Ticket System</h4>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Track your service requests and communicate with our support team through our dedicated ticket system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="default"
                iconName="Plus"
                iconPosition="left"
              >
                Create New Ticket
              </Button>
              <Button
                variant="outline"
                iconName="Search"
                iconPosition="left"
              >
                Track Existing Ticket
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SupportCenter;