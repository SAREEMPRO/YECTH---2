import React, { useState } from "react";
import Header from "../components/ui/Header";
import { Helmet } from "react-helmet";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaClock, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope,
  FaCheck,
  FaUserTie,
  FaTimes
} from "react-icons/fa";
import Logo from "../../Logo.png";
import { useForm, ValidationError } from '@formspree/react';

// Application Form Component
function ApplicationForm({ jobTitle, onClose }) {
  const [state, handleSubmit] = useForm("xqaywpoa");
  
  if (state.succeeded) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 xs:p-3 sm:p-4 z-50">
        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl max-w-xs xs:max-w-sm sm:max-w-md w-full p-4 xs:p-5 sm:p-6 text-center">
          <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
            <FaCheck className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 text-green-600" />
          </div>
          <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-text-primary mb-3 xs:mb-4">Application Submitted!</h2>
          <p className="text-text-secondary text-xs xs:text-sm sm:text-base mb-4 xs:mb-5 sm:mb-6">
            Thank you for applying for the {jobTitle} position. We've received your application and will contact you soon.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-brand-orange text-white py-2 xs:py-3 px-4 xs:px-6 rounded-lg hover:bg-brand-orange-dark transition-colors font-semibold text-sm xs:text-base"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 xs:p-3 sm:p-4 z-50">
      <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl max-w-xs xs:max-w-sm sm:max-w-md w-full max-h-[85vh] xs:max-h-[90vh] overflow-y-auto">
        <div className="p-4 xs:p-5 sm:p-6">
          <div className="flex justify-between items-center mb-4 xs:mb-5 sm:mb-6">
            <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-text-primary">Apply for {jobTitle}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-lg xs:text-xl"
            >
              <FaTimes className="w-5 h-5 xs:w-6 xs:h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 xs:space-y-4">
            <input type="hidden" name="job_title" value={jobTitle} />
            
            <div>
              <label htmlFor="fullName" className="block text-xs xs:text-sm font-medium text-text-primary mb-1">
                Full Name *
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                className="w-full px-2 xs:px-3 py-1 xs:py-2 text-xs xs:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Enter your full name"
              />
              <ValidationError 
                prefix="Full Name" 
                field="fullName"
                errors={state.errors}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs xs:text-sm font-medium text-text-primary mb-1">
                Email Address *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-2 xs:px-3 py-1 xs:py-2 text-xs xs:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Enter your email"
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-xs xs:text-sm font-medium text-text-primary mb-1">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="w-full px-2 xs:px-3 py-1 xs:py-2 text-xs xs:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Enter your phone number"
              />
              <ValidationError 
                prefix="Phone" 
                field="phone"
                errors={state.errors}
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-xs xs:text-sm font-medium text-text-primary mb-1">
                Years of Experience
              </label>
              <select
                id="experience"
                name="experience"
                className="w-full px-2 xs:px-3 py-1 xs:py-2 text-xs xs:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              >
                <option value="">Select experience</option>
                <option value="fresher">Fresher</option>
                <option value="0-1">0-1 years</option>
                <option value="1-2">1-2 years</option>
                <option value="2-3">2-3 years</option>
                <option value="3+">3+ years</option>
              </select>
            </div>

            <div>
              <label htmlFor="qualification" className="block text-xs xs:text-sm font-medium text-text-primary mb-1">
                Highest Qualification *
              </label>
              <input
                id="qualification"
                name="qualification"
                type="text"
                required
                className="w-full px-2 xs:px-3 py-1 xs:py-2 text-xs xs:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Enter your qualification"
              />
              <ValidationError 
                prefix="Qualification" 
                field="qualification"
                errors={state.errors}
              />
            </div>
      <div>
              <label htmlFor="resume" className="block text-sm font-medium text-text-primary mb-1">
                Resume Link (Google Drive/Dropbox) *
              </label>
              <input
                id="resume"
                name="resume"
                type="url"
                
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Paste your resume link"
              />
              <ValidationError 
                prefix="Resume" 
                field="resume"
                errors={state.errors}
              />
            </div>
            <div>
              <label htmlFor="coverLetter" className="block text-xs xs:text-sm font-medium text-text-primary mb-1">
                Cover Letter
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="3"
                className="w-full px-2 xs:px-3 py-1 xs:py-2 text-xs xs:text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                placeholder="Tell us why you're interested in this position..."
              />
              <ValidationError 
                prefix="Cover Letter" 
                field="coverLetter"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-brand-orange text-white py-2 xs:py-3 px-4 xs:px-6 rounded-lg hover:bg-brand-orange-dark transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-xs xs:text-sm sm:text-base"
            >
              {state.submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const CareersPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJobForApplication, setSelectedJobForApplication] = useState(null);

  const jobOpenings = [
    {
      id: 1,
      title: "Hardware/Software Engineer",
      type: "Full-time/Part-time",
      experience: "Fresh / 2 years experience",
      location: "Vellore, Tamil Nadu",
      description: "We are looking for a skilled Hardware/Software Engineer to join our IT solutions team. The ideal candidate will handle computer hardware repairs, software installations, and provide technical support to our clients.",
      responsibilities: [
        "Diagnose and repair computer hardware issues",
        "Install and configure operating systems and software",
        "Provide technical support to clients",
        "Maintain and troubleshoot computer systems",
        "Document technical procedures and solutions"
      ],
      qualifications: [
        "Diploma in Electrical and Electronics Engineering",
        "Diploma in Electronics and Communication Engineering",
        "B.E. – Computer Science",
        "B.C.A / B.S.C – Computer Science"
      ],
      requirements: [
        "Knowledge of computer hardware components",
        "Understanding of operating systems (Windows, Linux)",
        "Basic networking knowledge",
        "Good problem-solving skills",
        "Excellent communication skills"
      ]
    },
    {
      id: 2,
      title: "Networking Technician",
      type: "Full-time/Part-time",
      experience: "Fresh / 2 years experience",
      location: "Vellore, Tamil Nadu",
      description: "We are seeking a Networking Technician to install, maintain, and support our growing network infrastructure. You will be part of a team that is responsible for designing and implementing network solutions.",
      responsibilities: [
        "Install and configure network equipment",
        "Troubleshoot network connectivity issues",
        "Maintain network security systems",
        "Setup CCTV and biometric systems",
        "Perform network maintenance and system upgrades"
      ],
      qualifications: [
        "Diploma in Electrical and Electronics Engineering",
        "Diploma in Electronics and Communication Engineering",
        "B.E. – Computer Science",
        "B.C.A / B.S.C – Computer Science"
      ],
      requirements: [
        "Knowledge of networking protocols",
        "Experience with CCTV installation",
        "Understanding of network security",
        "Ability to work with network cables and connectors",
        "Physical ability to handle installation work"
      ]
    },
    {
      id: 3,
      title: "Accountant",
      type: "Full-time",
      experience: "Fresh / 2 years experience",
      location: "Vellore, Tamil Nadu",
      description: "We need a detail-oriented Accountant to manage our financial records, including accounts payable and receivable, and ensure compliance with financial regulations.",
      responsibilities: [
        "Manage accounts payable and receivable",
        "Process invoices and payments",
        "Prepare financial statements",
        "Handle tax computations and returns",
        "Maintain financial records"
      ],
      qualifications: [
        "B.B.A / B.Com – Accountant",
        "Tally certification preferred",
        "Basic computer knowledge"
      ],
      requirements: [
        "Knowledge of accounting principles",
        "Proficiency in Tally software",
        "Attention to detail",
        "Good with numbers and calculations",
        "Time management skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: "📚",
      title: "Training & Development",
      description: "Regular training sessions to enhance your skills"
    },
    {
      icon: "⚡",
      title: "Latest Technology",
      description: "Work with cutting-edge IT equipment and tools"
    },
    {
      icon: "👥",
      title: "Team Environment",
      description: "Supportive and collaborative work culture"
    }
  ];

  const handleApplyNow = (job) => {
    setSelectedJobForApplication(job);
    setShowApplicationForm(true);
    setSelectedJob(null); // Close job detail modal if open
  };

  const handleCloseApplicationForm = () => {
    setShowApplicationForm(false);
    setSelectedJobForApplication(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Careers - Y-Tech Computer</title>
        <meta
          name="description"
          content="Join Y-Tech Computer team. Career opportunities for Hardware/Software Engineers, Networking Technicians, and Accountants in Vellore."
        />
        <meta
          name="keywords"
          content="careers vellore, it jobs, hardware engineer, networking technician, computer jobs, y-tech careers"
        />
      </Helmet>
      <Header />

      <main className="pt-16 xs:pt-18 sm:pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 xs:py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 text-center">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold mb-3 xs:mb-4">Join Our Team</h1>
            <p className="text-lg xs:text-xl sm:text-2xl mb-6 xs:mb-8 opacity-90">
              Build Your Career in IT with <span className="font-bold">Y-Tech Computer</span>
            </p>
            <p className="text-sm xs:text-base sm:text-lg max-w-3xl mx-auto opacity-80 px-2">
              We're looking for passionate individuals to join our growing team. 
              Start your journey with one of Vellore's leading IT solution providers.
            </p>
          </div>
        </section>

        {/* Current Openings */}
        <section className="py-10 xs:py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
            <div className="text-center mb-8 xs:mb-10 sm:mb-12">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 xs:mb-4">
                Current Job Openings
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-2">
                Explore exciting career opportunities with Y-Tech Computer. 
                Both fresh graduates and experienced professionals are welcome to apply.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="p-4 xs:p-5 sm:p-6">
                    <div className="flex items-start justify-between mb-3 xs:mb-4">
                      <h3 className="text-base xs:text-lg sm:text-xl font-bold text-text-primary pr-2">{job.title}</h3>
                      <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                        {job.type}
                      </span>
                    </div>

                    <div className="space-y-2 xs:space-y-3 mb-3 xs:mb-4">
                      <div className="flex items-center text-xs xs:text-sm text-text-secondary">
                        <FaBriefcase className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2 flex-shrink-0" />
                        <span className="break-words">{job.experience}</span>
                      </div>
                      <div className="flex items-center text-xs xs:text-sm text-text-secondary">
                        <FaMapMarkerAlt className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2 flex-shrink-0" />
                        <span className="break-words">{job.location}</span>
                      </div>
                      <div className="flex items-center text-xs xs:text-sm text-text-secondary">
                        <FaClock className="w-3 h-3 xs:w-4 xs:h-4 mr-1 xs:mr-2 flex-shrink-0" />
                        <span className="break-words">{job.type}</span>
                      </div>
                    </div>

                    <p className="text-xs xs:text-sm text-text-secondary mb-3 xs:mb-4 line-clamp-3">
                      {job.description}
                    </p>

                    <div className="flex flex-col xs:flex-row gap-2">
                      <button
                        onClick={() => setSelectedJob(job)}
                        className="flex-1 bg-gray-200 text-gray-700 py-2 px-3 xs:px-4 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-xs xs:text-sm"
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => handleApplyNow(job)}
                        className="flex-1 bg-brand-orange text-white py-2 px-3 xs:px-4 rounded-lg hover:bg-brand-orange-dark transition-colors font-semibold text-xs xs:text-sm"
                      >
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-10 xs:py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6">
            <div className="text-center mb-8 xs:mb-10 sm:mb-12">
              <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 xs:mb-4">
                Why Work With Us?
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-text-secondary max-w-2xl mx-auto px-2">
                At Y-Tech Computer, we value our employees and provide a supportive 
                environment for professional growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-sm border border-gray-100 text-center"
                >
                  <div className="text-2xl xs:text-3xl sm:text-3xl mb-3 xs:mb-4">{benefit.icon}</div>
                  <h3 className="text-base xs:text-lg sm:text-xl font-semibold text-text-primary mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary text-xs xs:text-sm">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Apply */}
        <section className="py-10 xs:py-12 sm:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 text-center">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary mb-3 xs:mb-4">
              How to Apply
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 xs:gap-6 sm:gap-8 mt-8 xs:mt-10 sm:mt-12">
              <div className="text-center">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
                  <FaEnvelope className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2">Online Application</h3>
                <p className="text-text-secondary text-xs xs:text-sm">
                  Fill out our online application form
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
                  <FaPhone className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-green-600" />
                </div>
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2">Call Us</h3>
                <p className="text-text-secondary text-xs xs:text-sm">
                  Contact us at +91 90926 19444 for inquiries
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 xs:mb-4">
                  <FaUserTie className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <h3 className="text-sm xs:text-base sm:text-lg font-semibold mb-1 xs:mb-2">Walk-in Interview</h3>
                <p className="text-text-secondary text-xs xs:text-sm">
                  Visit our office in Vellore for direct interview
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-10 xs:py-12 sm:py-16 bg-brand-orange text-white">
          <div className="max-w-4xl mx-auto px-3 xs:px-4 sm:px-6 text-center">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold mb-3 xs:mb-4">Ready to Join Us?</h2>
            <p className="text-lg xs:text-xl mb-6 xs:mb-8 opacity-90">
              Take the first step towards an exciting career in IT
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 xs:gap-6">
              <div className="flex items-center text-sm xs:text-base">
                <FaPhone className="w-4 h-4 xs:w-5 xs:h-5 mr-1 xs:mr-2" />
                <span>+91 90926 19444</span>
              </div>
              <div className="flex items-center text-sm xs:text-base">
                <FaEnvelope className="w-4 h-4 xs:w-5 xs:h-5 mr-1 xs:mr-2" />
                <span>support@ytechcomputer.com</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 xs:p-3 sm:p-4 z-50">
          <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl max-w-xs xs:max-w-sm sm:max-w-2xl lg:max-w-4xl w-full max-h-[85vh] xs:max-h-[90vh] overflow-y-auto">
            <div className="p-4 xs:p-5 sm:p-6">
              <div className="flex justify-between items-start mb-4 xs:mb-5 sm:mb-6">
                <div className="pr-2">
                  <h2 className="text-lg xs:text-xl sm:text-2xl font-bold text-text-primary">{selectedJob.title}</h2>
                  <div className="flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-2 sm:gap-4 mt-1 xs:mt-2 text-text-secondary text-xs xs:text-sm">
                    <div className="flex items-center">
                      <FaBriefcase className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                      {selectedJob.experience}
                    </div>
                    <div className="flex items-center">
                      <FaMapMarkerAlt className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                      {selectedJob.location}
                    </div>
                    <div className="flex items-center">
                      <FaClock className="w-3 h-3 xs:w-4 xs:h-4 mr-1" />
                      {selectedJob.type}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-500 hover:text-gray-700 text-lg xs:text-xl flex-shrink-0 ml-2"
                >
                  <FaTimes className="w-5 h-5 xs:w-6 xs:h-6" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
                <div>
                  <div className="mb-4 xs:mb-5 sm:mb-6">
                    <h3 className="text-base xs:text-lg sm:text-lg font-semibold mb-2 xs:mb-3">Job Description</h3>
                    <p className="text-text-secondary text-xs xs:text-sm">{selectedJob.description}</p>
                  </div>

                  <div className="mb-4 xs:mb-5 sm:mb-6">
                    <h3 className="text-base xs:text-lg sm:text-lg font-semibold mb-2 xs:mb-3">Key Responsibilities</h3>
                    <ul className="text-text-secondary text-xs xs:text-sm space-y-1 xs:space-y-2">
                      {selectedJob.responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-brand-orange mr-1 xs:mr-2 mt-0.5 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="mb-4 xs:mb-5 sm:mb-6">
                    <h3 className="text-base xs:text-lg sm:text-lg font-semibold mb-2 xs:mb-3">Qualifications</h3>
                    <ul className="text-text-secondary text-xs xs:text-sm space-y-1 xs:space-y-2">
                      {selectedJob.qualifications.map((qual, index) => (
                        <li key={index} className="flex items-start">
                          <FaGraduationCap className="w-3 h-3 xs:w-4 xs:h-4 text-brand-orange mr-1 xs:mr-2 mt-0.5 flex-shrink-0" />
                          <span>{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 xs:mb-5 sm:mb-6">
                    <h3 className="text-base xs:text-lg sm:text-lg font-semibold mb-2 xs:mb-3">Requirements</h3>
                    <ul className="text-text-secondary text-xs xs:text-sm space-y-1 xs:space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <FaCheck className="w-3 h-3 xs:w-4 xs:h-4 text-green-500 mr-1 xs:mr-2 mt-0.5 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-3 xs:p-4">
                    <h4 className="font-semibold text-sm xs:text-base mb-2">Job Details</h4>
                    <div className="space-y-1 xs:space-y-2 text-xs xs:text-sm">
                      <div className="flex justify-between">
                        <span>Experience:</span>
                        <span className="font-medium text-right">{selectedJob.experience}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Job Type:</span>
                        <span className="font-medium">{selectedJob.type}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="font-medium text-right">{selectedJob.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4 mt-6 xs:mt-8">
                <button
                  onClick={() => handleApplyNow(selectedJob)}
                  className="flex-1 bg-brand-orange text-white py-2 xs:py-3 px-4 xs:px-6 rounded-lg hover:bg-brand-orange-dark transition-colors font-semibold text-xs xs:text-sm"
                >
                  Apply Now
                </button>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 bg-gray-200 text-gray-700 py-2 xs:py-3 px-4 xs:px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold text-xs xs:text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Application Form Popup */}
      {showApplicationForm && selectedJobForApplication && (
        <ApplicationForm 
          jobTitle={selectedJobForApplication.title} 
          onClose={handleCloseApplicationForm}
        />
      )}

         {/* Footer */}
         <footer className="bg-text-primary text-primary-foreground py-12">
           <div className="max-w-7xl mx-auto px-4 lg:px-6">
             <div className="grid md:grid-cols-4 gap-8">
               {/* Company Info */}
               <div className="space-y-4">
                 <div className="">
                   <img
                     src={Logo}
                     alt=""
                    style={{
                    width: "14rem",
                    height: "5rem",
                    marginLeft: "0.1rem",
                  }}
                   />
                 
                 </div>
                 <p className="text-sm opacity-90 leading-relaxed">
                   Your trusted technology partner since 2005, providing
                   comprehensive IT solutions across Tamil Nadu with 2-hour
                   emergency response guarantee.
                 </p>
               </div>
   
               {/* Quick Links */}
               <div className="space-y-4">
                 <h4 className="font-semibold text-lg">Quick Links</h4>
                 <ul className="space-y-2 text-sm">
                   <li>
                     <a
                       href="/about-y-tech"
                       className="opacity-80 hover:opacity-100 transition-opacity"
                     >
                       About Y-Tech
                     </a>
                   </li>
                   <li>
                     <a
                       href="/services-overview"
                       className="opacity-80 hover:opacity-100 transition-opacity"
                     >
                       Our Services
                     </a>
                   </li>
                   <li>
                     <a
                       href="/service-areas"
                       className="opacity-80 hover:opacity-100 transition-opacity"
                     >
                       Service Areas
                     </a>
                   </li>
                   <li>
                     <a
                       href="/products-showcase"
                       className="opacity-80 hover:opacity-100 transition-opacity"
                     >
                       Products
                     </a>
                   </li>
                   <li>
                     <a
                       href="/contact-support"
                       className="opacity-80 hover:opacity-100 transition-opacity"
                     >
                       Contact Us
                     </a>
                   </li>
                 </ul>
               </div>
   
               {/* Services */}
               <div className="space-y-4">
                 <h4 className="font-semibold text-lg">Services</h4>
                 <ul className="space-y-2 text-sm">
                   <li className="opacity-80">Computer & Laptop Repair</li>
                   <li className="opacity-80">Networking Solutions</li>
                   <li className="opacity-80">AMC Services</li>
                   <li className="opacity-80">Data Recovery</li>
                   <li className="opacity-80">Emergency Support</li>
                 </ul>
               </div>
   
               {/* Contact Info */}
               <div className="space-y-4">
                 <h4 className="font-semibold text-lg">Contact Info</h4>
                 <div className="space-y-3 text-sm">
                   <div className="flex items-start space-x-2">
                     <span className="opacity-60">📍</span>
                     <span className="opacity-90">Vellore, Tamil Nadu, India</span>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="opacity-60">📞</span>
                     <a
                       href="tel:+919092619444"
                       className="opacity-90 hover:opacity-100"
                     >
                       +91 90926 19444
                     </a>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="opacity-60">✉️</span>
                     <a
                       href="mailto:support@ytechcomputer.com"
                       className="opacity-90 hover:opacity-100"
                     >
                       support@ytechcomputer.com
                     </a>
                   </div>
                   <div className="flex items-center space-x-2">
                     <span className="opacity-60">🕒</span>
                     <span className="opacity-90">24/7 Emergency Support</span>
                   </div>
                 </div>
               </div>
             </div>
   
             {/* Bottom Bar */}
             <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
               <p className="text-sm opacity-80">
                 © {new Date().getFullYear()} Y-Tech Computer. All rights reserved.
               </p>
               <div className="flex items-center space-x-4 mt-4 md:mt-0">
                 <span className="text-sm opacity-80">Emergency Hotline:</span>
                 <a
                   href="tel:+919092619444"
                   className="bg-brand-orange text-brand-orange-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-orange-dark transition-colors"
                 >
                   +91 98942 91164
                 </a>
               </div>
             </div>
           </div>
         </footer>
    </div>
  );
};

export default CareersPage;