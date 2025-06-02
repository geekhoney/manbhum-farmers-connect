
import React from 'react';
import { TrendingUp, Users, Sprout, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Active Members",
      description: "Farmers working together"
    },
    {
      icon: TrendingUp,
      number: "25%",
      label: "Income Increase",
      description: "Average improvement"
    },
    {
      icon: Sprout,
      number: "1000+",
      label: "Acres Covered",
      description: "Under collective farming"
    },
    {
      icon: Award,
      number: "15+",
      label: "Certifications",
      description: "Quality standards achieved"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-green-100">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                  <IconComponent className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-green-600 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
