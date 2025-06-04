
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  CreditCard, 
  BookOpen, 
  Building, 
  Award, 
  BarChart3,
  ArrowRight 
} from 'lucide-react';
import { useServices } from '@/hooks/useData';

const ServicesSection = () => {
  const { services, loading } = useServices();

  const serviceIcons = {
    ShoppingCart,
    Package,
    TrendingUp,
    CreditCard,
    BookOpen,
    Building,
    Award,
    BarChart3
  };

  const serviceColors = [
    "bg-green-100 text-green-600",
    "bg-blue-100 text-blue-600",
    "bg-purple-100 text-purple-600",
    "bg-orange-100 text-orange-600",
    "bg-red-100 text-red-600",
    "bg-indigo-100 text-indigo-600",
    "bg-pink-100 text-pink-600",
    "bg-teal-100 text-teal-600"
  ];

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="text-lg">Loading services...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-2">
            We provide comprehensive support to our farmer members through various services designed to improve their income and farming practices
          </p>
          <p className="text-green-600 font-semibold">
            Masters Farmers Producer Company Limited (MFPCL)
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.slice(0, 4).map((service, index) => {
            const IconComponent = serviceIcons[service.icon as keyof typeof serviceIcons] || ShoppingCart;
            return (
              <Card 
                key={service.id} 
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-sm"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 rounded-xl ${serviceColors[index]} flex items-center justify-center mx-auto mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <span className="text-green-600 font-semibold text-sm">
                      {service.benefits}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
