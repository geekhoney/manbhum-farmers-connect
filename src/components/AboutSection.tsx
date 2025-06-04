
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Lightbulb, Handshake } from 'lucide-react';
import { useBasicInfo } from '@/hooks/useData';

const AboutSection = () => {
  const { basicInfo, loading } = useBasicInfo();

   if (loading || !basicInfo) {
    return (
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
        <div className="container mx-auto px-6 relative">
          <div className="text-center">
            <div className="text-lg">Loading...</div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                About {basicInfo.businessName}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                A Farmers Producer Company (FPC) is an organization formed by farmers to improve their bargaining power in the market and enhance their income. MFPCL empowers farmers, especially small and marginal ones, through collective farming and business activities.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg mt-1">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Democratic Management</h3>
                  <p className="text-gray-600">Ownership and management controlled by farmer members with elected board of directors.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg mt-1">
                  <Target className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Clear Objectives</h3>
                  <p className="text-gray-600">Promoting efficient agriculture, enhancing bargaining power, and ensuring fair prices.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg mt-1">
                  <Lightbulb className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation & Technology</h3>
                  <p className="text-gray-600">Access to modern farming techniques, technology, and best practices.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-2 rounded-lg mt-1">
                  <Handshake className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Market Linkages</h3>
                  <p className="text-gray-600">Direct market connections eliminating intermediaries for fair value distribution.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Our Mission</h3>
                <p className="text-green-700">
                  To transform traditional farming methods, improve the economic condition of farmers, and contribute to the overall development of rural areas through sustainable and inclusive agricultural development.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Vision</h3>
                <p className="text-blue-700">
                  To create a prosperous farming community where every farmer has access to fair markets, modern technology, and sustainable practices that ensure food security and economic prosperity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-orange-800 mb-4">Government Support</h3>
                <p className="text-orange-700">
                  We receive government support including financial assistance, tax benefits, and technical guidance to better serve our farmer members and achieve our collective goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
