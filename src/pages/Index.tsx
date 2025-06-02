
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sprout, 
  Users, 
  TrendingUp, 
  Shield, 
  BookOpen, 
  Factory,
  Handshake,
  Award,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle,
  Phone,
  Mail
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      
      {/* News & Updates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Latest News & Updates
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed about our latest initiatives, training programs, and success stories
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-green-100 text-green-800">Training</Badge>
                <CardTitle className="text-lg">Sustainable Farming Workshop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our upcoming workshop on sustainable farming practices and organic certification.
                </p>
                <Button variant="outline" size="sm">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-blue-100 text-blue-800">Success Story</Badge>
                <CardTitle className="text-lg">Record Harvest Season</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our members achieved 25% higher yields this season through collective farming practices.
                </p>
                <Button variant="outline" size="sm">
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit bg-purple-100 text-purple-800">Partnership</Badge>
                <CardTitle className="text-lg">New Market Linkages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We've established direct partnerships with major retail chains for better prices.
                </p>
                <Button variant="outline" size="sm">
                  View Details <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connect with fellow farmers, share knowledge, and stay updated with our latest initiatives
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <Facebook className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Facebook Page</h3>
                <p className="text-sm text-gray-600 mb-4">Follow for daily updates</p>
                <Button size="sm" variant="outline">Follow Us</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <Instagram className="h-12 w-12 text-pink-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-gray-600 mb-4">Visual stories & tips</p>
                <Button size="sm" variant="outline">Follow Us</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <Youtube className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">YouTube</h3>
                <p className="text-sm text-gray-600 mb-4">Training videos & webinars</p>
                <Button size="sm" variant="outline">Subscribe</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-6">
                <MessageCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-4">Join our community</p>
                <Button size="sm" variant="outline">Join Group</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who have improved their income and farming practices with MFPCL
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Phone className="mr-2 h-5 w-5" />
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
