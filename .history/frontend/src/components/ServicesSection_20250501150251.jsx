import React from "react";
import {
    FaExchangeAlt,
    FaHeadset,
    FaShieldAlt,
    FaShippingFast,
} from "react-icons/fa";

function ServiceCard({ icon: Icon, title, description }) {
  return (
    <div className="flex items-center gap-4 p-4">
      <Icon className="text-3xl text-gray-700" />
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: FaShippingFast,
      title: "Free Shipping",
      description: "On orders over $100",
    },
    {
      icon: FaExchangeAlt,
      title: "Easy Returns",
      description: "30 days return policy",
    },
    {
      icon: FaHeadset,
      title: "24/7 Support",
      description: "Customer service",
    },
    {
      icon: FaShieldAlt,
      title: "Secure Payment",
      description: "100% secure checkout",
    },
  ];

  return (
    <section className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;