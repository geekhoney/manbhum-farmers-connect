import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  CreditCard, 
  BookOpen, 
  Building, 
  Award, 
  BarChart3,
  Star,
  Calendar,
  Clock,
  Users,
  ArrowRight,
  MapPin,
  Phone,
  Quote
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "Collective Marketing",
      description: "We help farmers aggregate their produce and collectively sell them in the market for better prices and access to larger markets.",
      features: ["Market price negotiation", "Bulk selling opportunities", "Direct market access", "Price transparency"],
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Package,
      title: "Input Supply",
      description: "Procure agricultural inputs like seeds, fertilizers, and pesticides in bulk at reasonable prices for our members.",
      features: ["Quality seeds supply", "Organic fertilizers", "Bulk purchasing discounts", "Timely delivery"],
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Value Addition",
      description: "Engage in processing, packaging, and branding activities to add value to agricultural products and increase farmer income.",
      features: ["Product processing", "Custom packaging", "Brand development", "Quality enhancement"],
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: CreditCard,
      title: "Access to Credit",
      description: "Facilitate access to credit and financial services, collaborating with banks to provide loans and insurance tailored for farmers.",
      features: ["Low-interest loans", "Crop insurance", "Financial planning", "Banking partnerships"],
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Village Rampur",
      image: "/placeholder.svg",
      rating: 5,
      text: "MFPCL has transformed my farming business. Through their collective marketing, I get 30% better prices for my vegetables."
    },
    {
      name: "Sunita Devi",
      location: "Village Bharatpur",
      image: "/placeholder.svg",
      rating: 5,
      text: "The training programs helped me learn organic farming. Now my produce fetches premium prices in the market."
    },
    {
      name: "Mukesh Singh",
      location: "Village Shivpur",
      image: "/placeholder.svg",
      rating: 4,
      text: "Access to quality inputs at reasonable prices has improved my crop yield significantly. Very satisfied with their services."
    }
  ];

  const courses = [
    {
      title: "Organic Farming Techniques",
      duration: "3 days",
      price: "Free",
      participants: 45,
      nextDate: "15 Jan 2025",
      level: "Beginner"
    },
    {
      title: "Modern Irrigation Methods",
      duration: "2 days",
      price: "₹500",
      participants: 30,
      nextDate: "22 Jan 2025",
      level: "Intermediate"
    },
    {
      title: "Crop Management & Protection",
      duration: "4 days",
      price: "₹800",
      participants: 25,
      nextDate: "28 Jan 2025",
      level: "Advanced"
    }
  ];

  const upcomingEvents = [
    {
      title: "Farmers Market Exhibition",
      date: "12 Jan 2025",
      time: "9:00 AM",
      location: "District Headquarters",
      type: "Exhibition"
    },
    {
      title: "Sustainable Agriculture Workshop",
      date: "18 Jan 2025",
      time: "10:00 AM",
      location: "MFPCL Training Center",
      type: "Workshop"
    },
    {
      title: "Annual Farmers Meet",
      date: "25 Jan 2025",
      time: "11:00 AM",
      location: "Community Hall",
      type: "Conference"
    }
  ];

  const relatedBlogs = [
    {
      title: "Benefits of Organic Fertilizers",
      excerpt: "Learn how organic fertilizers can improve soil health and increase crop yield naturally.",
      date: "5 Jan 2025",
      category: "Farming Tips",
      readTime: "5 min read"
    },
    {
      title: "Water Conservation Techniques",
      excerpt: "Discover modern irrigation methods that can save water while maintaining crop productivity.",
      date: "3 Jan 2025",
      category: "Sustainability",
      readTime: "7 min read"
    },
    {
      title: "Market Trends for 2025",
      excerpt: "Stay updated with the latest market trends and price forecasts for agricultural products.",
      date: "1 Jan 2025",
      category: "Market Analysis",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-green-100 text-lg max-w-3xl mx-auto">
            Comprehensive support for farmers through innovative solutions, training, and market access
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="collective-marketing" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="collective-marketing">Marketing</TabsTrigger>
              <TabsTrigger value="input-supply">Input Supply</TabsTrigger>
              <TabsTrigger value="value-addition">Value Addition</TabsTrigger>
              <TabsTrigger value="credit-access">Credit Access</TabsTrigger>
            </TabsList>
            
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const tabValue = service.title.toLowerCase().replace(/ /g, '-');
              return (
                <TabsContent key={index} value={tabValue} className="mt-8">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center`}>
                          <IconComponent className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <p className="text-gray-600 mt-2">{service.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3">Key Features:</h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="bg-green-50 p-6 rounded-lg">
                          <h4 className="font-semibold mb-3">Get Started</h4>
                          <p className="text-gray-600 mb-4">
                            Contact our team to learn more about this service and how it can benefit your farming operations.
                          </p>
                          <Link to="/contact">
                            <Button className="bg-green-600 hover:bg-green-700">
                              <Phone className="h-4 w-4 mr-2" />
                              Contact Us
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Members Say
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Real stories from farmers who have benefited from our services
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-green-600 mb-2" />
                  <p className="text-gray-700 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Widget */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available Courses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your farming skills with our expert-led training programs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{course.level}</Badge>
                    <span className="font-bold text-green-600">{course.price}</span>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{course.participants} enrolled</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Next batch: {course.nextDate}</span>
                    </div>
                  </div>
                  <Link to="/register">
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      Enroll Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Upcoming Events
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join us at these upcoming events and networking opportunities
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow bg-white">
                <CardContent className="p-6">
                  <Badge className="mb-3 bg-green-100 text-green-800">{event.type}</Badge>
                  <h3 className="font-semibold text-lg mb-3">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <Link to="/register">
                    <Button variant="outline" className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                      Register Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blogs */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Related Articles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay informed with our latest insights and farming tips
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {relatedBlogs.map((blog, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge variant="outline">{blog.category}</Badge>
                    <span className="text-xs text-gray-500">{blog.readTime}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{blog.date}</span>
                    <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                      Read More <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
