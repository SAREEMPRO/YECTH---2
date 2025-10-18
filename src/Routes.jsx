import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
// import ServiceAreas from './pages/service-areas';
import ContactSupport from './pages/contact-support';
import ProductsShowcase from './pages/products-showcase';
import ServicesOverview from './pages/services-overview';
import AboutYTech from './pages/about-y-tech';
import Homepage from './pages/homepage';
import Terms from './pages/Terms';
import CareersPage from "pages/career";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/service-areas" element={<ServiceAreas />} /> */}
        <Route path="/contact-support" element={<ContactSupport />} />
        <Route path="/products-showcase" element={<ProductsShowcase />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/about-y-tech" element={<AboutYTech />} />
        <Route path="/homepage" element={<Homepage />} />
                <Route path="/terms" element={<Terms />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
