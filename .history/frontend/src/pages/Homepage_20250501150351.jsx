// src/pages/Homepage.jsx
import React from "react";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import HeroBanner from "../components/HeroBanner";
import Newsletter from "../components/Newsletter";
import ServicesSection from "../components/ServicesSection";

function Homepage() {
  return (
    <div className="min-h-screen">
      <HeroBanner />
      <ServicesSection />
      <CategorySection />
      <FeaturedProducts />
      <Newsletter />
    </div>
  );
}

export default Homepage;