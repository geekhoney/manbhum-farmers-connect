
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  CreditCard, 
  BookOpen, 
  Building, 
  Award, 
  BarChart3 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Collective Marketing",
      description: "We help farmers aggregate their produce and collectively sell them in the market for better prices and access to larger markets.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Package,
      title: "Input Supply",
      description: "Procure agricultural inputs like seeds, fertilizers, and pesticides in bulk at reasonable prices for our members.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Value Addition",
      description: "Engage in processing, packaging, and branding activities to add value to agricultural products and increase farmer income.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: CreditCard,
      title: "Access to Credit",
      description: "Facilitate access to credit and financial services, collaborating with banks to provide loans and insurance tailored for farmers.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: BookOpen,
      title: "Training & Capacity Building",
      description: "Conduct training programs on modern farming techniques, market trends, and quality standards to enhance farmer skills.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Invest in storage facilities, cold chains, and processing units to improve post-harvest management and reduce wastage.",
      color: "bg-indigo-100 text-indigo-600"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Assist farmers in obtaining quality certifications and adhering to standards for domestic and international markets.",
      color: "bg-pink-100 text-pink-600"
    },
    {
      icon: BarChart3,
      title: "Market Information",
      description: "Provide timely information on market demand, prices, and trends to help farmers make informed decisions.",
      color: "bg-teal-100 text-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We provide comprehensive support to our farmer members through various services designed to improve their income and farming practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
