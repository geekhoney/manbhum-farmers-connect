
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users, Target, Eye, Award, TrendingUp, Sprout, Heart, Globe } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We prioritize the collective success and well-being of our farming community."
    },
    {
      icon: Sprout,
      title: "Sustainable Practices",
      description: "Promoting eco-friendly farming methods that preserve our environment for future generations."
    },
    {
      icon: TrendingUp,
      title: "Economic Growth",
      description: "Creating opportunities for farmers to increase their income and improve their livelihoods."
    },
    {
      icon: Globe,
      title: "Innovation",
      description: "Embracing modern technology and techniques to enhance agricultural productivity."
    }
  ];

  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "Chairman & CEO",
      experience: "15+ years in agriculture",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Sharma",
      position: "Head of Operations",
      experience: "12+ years in cooperative management",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Dr. Suresh Patel",
      position: "Agricultural Advisor",
      experience: "20+ years in agricultural research",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Meera Das",
      position: "Marketing Director",
      experience: "10+ years in agricultural marketing",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2018", event: "MFPCL Founded", description: "Started with 50 farmer members" },
    { year: "2019", event: "First Certification", description: "Achieved organic farming certification" },
    { year: "2020", event: "Digital Platform", description: "Launched online marketplace" },
    { year: "2021", event: "500+ Members", description: "Reached 500 active farmer members" },
    { year: "2022", event: "Export Initiative", description: "Started international exports" },
    { year: "2023", event: "Technology Hub", description: "Established training and tech center" },
    { year: "2024", event: "1000+ Farmers", description: "Growing community of 1000+ farmers" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About MFPCL</h1>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Manbhum Farmers Producer Company Limited is a farmer-owned organization dedicated to 
              empowering agricultural communities through collective action, sustainable practices, 
              and innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">Founded 2018</Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">1000+ Farmers</Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">15+ Certifications</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To empower farmers through collective bargaining, quality inputs, 
                  fair prices, and sustainable agricultural practices that ensure 
                  long-term prosperity for our farming community.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To become the leading farmer producer company in West Bengal, 
                  setting benchmarks in sustainable agriculture, farmer welfare, 
                  and community development.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-green-800">Our Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transforming lives through increased income, reduced costs, 
                  improved crop quality, and enhanced market access for over 
                  1000 farmer families.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to farmer welfare</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-gray-600">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our growth story</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-center space-x-8">
                  <div className="flex-shrink-0">
                    <div className="bg-green-600 text-white font-bold text-lg px-4 py-2 rounded-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Be part of a growing network of farmers who are transforming agriculture together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-gray-100">
              Become a Member
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
