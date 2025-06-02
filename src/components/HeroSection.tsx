
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, TrendingUp, Shield } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Empowering Farmers Through
                <span className="text-green-200 block">Collective Growth</span>
              </h1>
              <p className="text-lg md:text-xl text-green-100 max-w-lg">
                Join Manbhum Farmers Producer Company Limited (MFPCL) and transform your farming journey with collective marketing, better prices, and sustainable practices.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
                Become a Member
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm text-green-200">Active Members</div>
              </div>
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">25%</div>
                <div className="text-sm text-green-200">Income Increase</div>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-green-200" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm text-green-200">Quality Assured</div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">Why Choose MFPCL?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 p-1 rounded-full mt-1">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Collective Marketing</h4>
                      <p className="text-sm text-green-100">Better prices through group selling</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 p-1 rounded-full mt-1">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Input Supply</h4>
                      <p className="text-sm text-green-100">Quality inputs at reasonable prices</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-green-500 p-1 rounded-full mt-1">
                      <ArrowRight className="h-3 w-3" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Training & Support</h4>
                      <p className="text-sm text-green-100">Modern farming techniques and guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
