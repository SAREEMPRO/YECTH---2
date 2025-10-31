import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

// Import components
import ProductCard from './components/ProductCard';
import ProductFilters from './components/ProductFilters';
import FeaturedProducts from './components/FeaturedProducts';
import ProductComparison from './components/ProductComparison';
import QuickQuoteModal from './components/QuickQuoteModal';
import BusinessPackages from './components/BusinessPackages';
import Logo from "../../../Logo.png"

const ProductsShowcase = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [compareProducts, setCompareProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState('products'); // 'products', 'packages'
  const [filters, setFilters] = useState({
    category: 'all',
    brand: 'all',
    sortBy: 'relevance',
    priceRanges: [],
    availability: [],
    features: [],
    businessSolutions: []
  });

  // Mock data for featured products based on your categories
  const featuredProducts = [
    {
      id: 'featured-1',
      name: 'Dell OptiPlex Business Desktop',
      category: 'Computer & Accessories',
      brand: 'Dell',
      image: 'https://i.dell.com/sites/csimages/App-Merchandizing_Images/all/optiplex-13-5-franchise-noodd-km216-ms116-1920x1440-screenfill-2.png',
      rating: 4.8,
      reviews: 127,
      keyFeatures: [
        'Intel Core i5 Processor',
        '8GB RAM, 512GB SSD',
        'Windows 11 Pro',
        '3 Years Onsite Warranty'
      ],
      whyFeatured: 'Most popular choice for small businesses with reliable performance',
      businessPackage: true
    },
    {
      id: 'featured-2',
      name: 'HP Pavilion Gaming Laptop',
      category: 'Laptop',
      brand: 'HP',
      image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=300&fit=crop',
      rating: 4.7,
      reviews: 89,
      keyFeatures: [
        'Intel Core i7, 16GB RAM',
        'NVIDIA GTX 1650 4GB',
        '15.6" FHD Display',
        '1TB SSD Storage'
      ],
      whyFeatured: 'Perfect balance of performance and portability for professionals',
      businessPackage: false
    },
    {
      id: 'featured-3',
      name: 'Canon PIXMA All-in-One Printer',
      category: 'Printers',
      brand: 'Canon',
      image: 'https://printer.kalimstores.com/wp-content/uploads/G3080_WH_AS_FR_cl_logo_EN-scaled.jpg',
      rating: 4.6,
      reviews: 56,
      keyFeatures: [
        'Print, Scan, Copy',
        'Wi-Fi Connectivity',
        'Auto Duplex Printing',
        '1 Year Warranty'
      ],
      whyFeatured: 'Reliable all-in-one printer for home and office use',
      businessPackage: true
    },
    {
      id: 'featured-4',
      name: 'ZKTeco Biometric System',
      category: 'Biometric',
      brand: 'ZKTeco',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/2/HW/LN/VY/25895802/biometric-time-attendance-device-500x500.jpg',
      rating: 4.5,
      reviews: 34,
      keyFeatures: [
        'Fingerprint & Card Access',
        '1000 User Capacity',
        'LCD Display',
        'Attendance Software'
      ],
      whyFeatured: 'Advanced biometric system for accurate attendance management',
      businessPackage: true
    },
    {
      id: 'featured-5',
      name: 'Hikvision CCTV Package',
      category: 'CCTV',
      brand: 'Hikvision',
      image: 'https://www.matisonsecurity.com.au/wp-content/uploads/2020/01/hikvision-4-camera-darkfighter-7604NVR.jpg',
      rating: 4.9,
      reviews: 78,
      keyFeatures: [
        '4 Camera 4MP System',
        'Night Vision 30m',
        'Mobile App Access',
        '1TB DVR Storage'
      ],
      whyFeatured: 'Complete security solution with high-resolution cameras',
      businessPackage: true
    },
    {
      id: 'featured-6',
      name: 'Microsoft Office 365 Business',
      category: 'Software Installation',
      brand: 'Microsoft',
      image: 'https://ibiztechnology.in/wp-content/uploads/2024/09/microsoft-office-365-partner.png',
      rating: 4.8,
      reviews: 45,
      keyFeatures: [
        'Word, Excel, PowerPoint',
        '1TB OneDrive Storage',
        'Business Email',
        '24/7 Support'
      ],
      whyFeatured: 'Essential productivity suite for modern businesses',
      businessPackage: true
    },

  ];

  // Product categories based on your list
  const productCategories = [
    {
      id: 1,
      name: 'Computer & Accessories',
      icon: 'Monitor',
      description: 'Desktops, Monitors, Keyboards, Mouse and more',
      count: '150+ Products'
    },
    {
      id: 2,
      name: 'Laptop',
      icon: 'Laptop',
      description: 'Business, Gaming, Personal laptops all brands',
      count: '80+ Models'
    },
    {
      id: 3,
      name: 'Printers',
      icon: 'Printer',
      description: 'Inkjet, Laser, All-in-One printers',
      count: '25+ Models'
    },
    {
      id: 4,
      name: 'Biometric',
      icon: 'Fingerprint',
      description: 'Attendance systems, Access control',
      count: '15+ Systems'
    },
    {
      id: 5,
      name: 'CCTV',
      icon: 'Video',
      description: 'Security cameras, DVR systems',
      count: '30+ Packages'
    },
    {
      id: 6,
      name: 'Software Installation',
      icon: 'Download',
      description: 'OS, Antivirus, Productivity tools',
      count: '50+ Software'
    },
    {
      id: 7,
      name: 'Network Cables',
      icon: 'Wifi',
      description: 'Ethernet cables, Connectors',
      count: '40+ Types'
    },
    {
      id: 8,
      name: 'IT Accessories',
      icon: 'Cable',
      description: 'All computer accessories and peripherals',
      count: '200+ Items'
    }
  ];

  const handleClearFilters = () => {
    setFilters({
      category: 'all',
      brand: 'all',
      sortBy: 'relevance',
      priceRanges: [],
      availability: [],
      features: [],
      businessSolutions: []
    });
    setSearchQuery('');
  };

  const handleRemoveFromCompare = (productId) => {
    setCompareProducts(prev => prev?.filter(p => p?.id !== productId));
  };

  const handleClearComparison = () => {
    setCompareProducts([]);
  };

  const handleQuickQuote = (product) => {
    setSelectedProduct(product);
    setIsQuoteModalOpen(true);
  };

  const handleSubmitQuote = (quoteData) => {
    console.log('Quote submitted:', quoteData);
    alert('Quote request submitted successfully! We will contact you within 2 hours.');
  };

  const handleViewDetails = (product) => {
    console.log('View product details:', product);
  };

  const handleSelectPackage = (pkg) => {
    console.log('Package selected:', pkg);
    alert(`${pkg?.name} package selected! Our team will contact you to discuss customization options.`);
  };

  const handleCustomizePackage = (pkg) => {
    console.log('Customize package:', pkg);
    alert(`Customizing ${pkg?.name} package. Our experts will help you tailor this solution to your specific needs.`);
  };

  return (
    <>
      <Helmet>
        <title>Products - Y-Tech Computer & Services | Complete IT Solutions Vellore</title>
        <meta name="description" content="Explore Y-Tech's complete range of IT products - Computers, Laptops, Printers, CCTV, Biometric systems, Network cables and all IT accessories in Vellore." />
        <meta name="keywords" content="computer sales vellore, laptop repair, printer sales, cctv installation, biometric system, network cables, it accessories" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-primary/10 via-background to-brand-orange/5 py-16">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
              <div className="text-center mb-12">
                <h1 className="text-4xl lg:text-5xl font-bold text-text-primary mb-6">
                  Complete IT Products & Solutions
                </h1>
                <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                  Your one-stop destination for all IT needs - Computers, Laptops, Printers, CCTV, Biometric systems, 
                  Network cables and all IT accessories in Vellore.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">50+</div>
                    <div className="text-sm text-text-secondary">Products</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-text-secondary">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Same Day</div>
                    <div className="text-sm text-text-secondary">Service</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">Free</div>
                    <div className="text-sm text-text-secondary">Installation</div>
                  </div>
                </div>
              </div>

              {/* View Toggle */}
           

         
            </div>
          </section>

          {/* Product Categories Grid */}
          <section className="py-16 bg-surface">
            <div className="max-w-7xl mx-auto px-4 lg:px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-text-primary mb-4">Product Categories</h2>
                <p className="text-lg text-text-secondary">Explore our complete range of IT products and solutions</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {productCategories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-card border border-border rounded-xl p-6 text-center card-hover group cursor-pointer"
                    onClick={() => {
                      setFilters(prev => ({ ...prev, category: category.name }));
                      setCurrentView('products');
                    }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon name={category.icon} size={24} className="text-primary" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">{category.name}</h3>
                    <p className="text-sm text-text-secondary mb-2">{category.description}</p>
                    <span className="text-xs text-primary font-medium">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Content Based on View */}
          {currentView === 'packages' ? (
            <section className="py-16">
              <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <BusinessPackages
                  onSelectPackage={handleSelectPackage}
                  onCustomizePackage={handleCustomizePackage}
                />
              </div>
            </section>
          ) : (
            <>
              {/* Featured Products */}
              <section className="py-16 bg-muted/30">
                <div className="max-w-7xl mx-auto px-4 lg:px-6">
                  <FeaturedProducts
                    featuredProducts={featuredProducts}
                    onViewProduct={handleViewDetails}
                    onQuickQuote={handleQuickQuote}
                  />
                </div>
              </section>
            </>
          )}

          {/* Contact Section */}
          <section className="py-16 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 lg:px-6 text-center">
              <h2 className="text-3xl font-bold mb-4">Need IT Products in Vellore?</h2>
              <p className="text-xl opacity-90 mb-8">
                Visit our store in Gandhi Nagar or call us for expert guidance on choosing the right products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="secondary"
                  size="lg"
                  iconName="Phone"
                  iconPosition="left"
                  onClick={() => window.open('tel:+919092619444', '_self')}
                >
                  Call: +91 90926 19444
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  iconName="MapPin"
                  iconPosition="left"
                  className="border-white text-white hover:bg-white hover:text-primary"
                  onClick={() => window.open('https://maps.google.com/?q=Y-Tech+Computer+Services+Vellore', '_blank')}
                >
                  Visit Store
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  iconName="MessageCircle"
                  iconPosition="left"
                  className="text-white hover:bg-white/10"
                  onClick={() => window.open('https://wa.me/919092619444', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </div>
          </section>
        </main>

        {/* Product Comparison Bar */}
        <ProductComparison
          compareProducts={compareProducts}
          onRemoveFromCompare={handleRemoveFromCompare}
          onClearComparison={handleClearComparison}
          isVisible={compareProducts?.length > 0}
        />

        {/* Quick Quote Modal */}
        <QuickQuoteModal
          product={selectedProduct}
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          onSubmitQuote={handleSubmitQuote}
        />

   <footer className="bg-text-primary text-primary-foreground py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="space-y-4">
                <div className="">
                  {/* ⬇️ Increase logo box from 2.5 rem (10) to 4 rem (16) */}
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
                      href="mailto:support@ytech.com"
                      className="opacity-90 hover:opacity-100"
                    >
                      support@ytech.com
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
                © {new Date()?.getFullYear()} Y-Tech Computer. All rights
                reserved.
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
    </>
  );
};

export default ProductsShowcase;