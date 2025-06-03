
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
  Mail,
  Star,
  Calendar,
  ShoppingBag,
  Truck,
  MapPin
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ChatBot from '@/components/ChatBot';

const Index = () => {
  const recentProducts = [
    {
      id: 1,
      name: "Organic Tomatoes",
      price: "₹80/kg",
      image: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=300&h=200&fit=crop",
      rating: 4.8,
      category: "Vegetables"
    },
    {
      id: 2,
      name: "Premium Basmati Rice",
      price: "₹120/kg",
      image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop",
      rating: 4.9,
      category: "Grains"
    },
    {
      id: 3,
      name: "Organic Fertilizer",
      price: "₹450/bag",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=200&fit=crop",
      rating: 4.7,
      category: "Fertilizer"
    },
    {
      id: 4,
      name: "Plant Growth Booster",
      price: "₹280/bottle",
      image: "https://images.unsplash.com/photo-1597662804574-209be426abd4?w=300&h=200&fit=crop",
      rating: 4.6,
      category: "Medicine"
    }
  ];

  const recentBlogs = [
    {
      title: "10 Tips for Organic Farming Success",
      excerpt: "Discover the essential practices that can transform your farm into a thriving organic ecosystem.",
      date: "2024-01-15",
      category: "Farming Tips",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=200&fit=crop"
    },
    {
      title: "Market Trends in Sustainable Agriculture",
      excerpt: "Explore the latest market opportunities and trends in sustainable farming practices.",
      date: "2024-01-12",
      category: "Market Analysis",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=200&fit=crop"
    },
    {
      title: "Success Story: From Traditional to Organic",
      excerpt: "Learn how Ram Kumar increased his income by 40% through organic farming methods.",
      date: "2024-01-10",
      category: "Success Story",
      image: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400&h=200&fit=crop"
    }
  ];

  const upcomingEvents = [
    {
      title: "Organic Certification Workshop",
      date: "2024-02-15",
      time: "10:00 AM",
      location: "MFPCL Training Center",
      type: "Workshop"
    },
    {
      title: "Sustainable Farming Expo 2024",
      date: "2024-02-25",
      time: "9:00 AM",
      location: "District Agriculture Office",
      type: "Expo"
    },
    {
      title: "Digital Marketing for Farmers",
      date: "2024-03-05",
      time: "2:00 PM",
      location: "Online Webinar",
      type: "Webinar"
    }
  ];

  const courses = [
    {
      title: "Organic Farming Fundamentals",
      duration: "4 weeks",
      level: "Beginner",
      price: "₹2,500",
      enrolled: 234,
      rating: 4.8
    },
    {
      title: "Advanced Crop Management",
      duration: "6 weeks",
      level: "Advanced",
      price: "₹4,000",
      enrolled: 156,
      rating: 4.9
    },
    {
      title: "Post-Harvest Technology",
      duration: "3 weeks",
      level: "Intermediate",
      price: "₹3,200",
      enrolled: 189,
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      <HeroSection />
      <StatsSection />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Featured Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our premium quality products directly from local farmers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {recentProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 right-2 bg-green-600">{product.category}</Badge>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-green-600 font-bold text-lg">{product.price}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                  </div>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <AboutSection />

      {/* Latest Blogs Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with farming tips, success stories, and industry insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {recentBlogs.map((blog, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-2 left-2 bg-blue-600">{blog.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{blog.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{blog.date}</span>
                    <Button size="sm" variant="outline">Read More</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              View All Blogs <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      <ServicesSection />

      {/* Courses & Events Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Courses */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-green-800 mb-4">Popular Courses</h2>
                <p className="text-gray-600">Enhance your farming skills with our expert-led courses</p>
              </div>
              
              <div className="space-y-4 mb-6">
                {courses.map((course, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{course.title}</h3>
                        <Badge variant="secondary">{course.level}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-3">
                        <div>Duration: {course.duration}</div>
                        <div>Price: {course.price}</div>
                        <div>Enrolled: {course.enrolled}</div>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                          {course.rating}
                        </div>
                      </div>
                      <Button size="sm" className="w-full">Enroll Now</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View All Courses
              </Button>
            </div>
            
            {/* Events */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-green-800 mb-4">Upcoming Events</h2>
                <p className="text-gray-600">Join our community events and workshops</p>
              </div>
              
              <div className="space-y-4 mb-6">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold">{event.title}</h3>
                        <Badge className="bg-purple-600">{event.type}</Badge>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600 mb-3">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          {event.date} at {event.time}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {event.location}
                        </div>
                      </div>
                      <Button size="sm" variant="outline" className="w-full">Register</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Button variant="outline" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View All Events
              </Button>
            </div>
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
      <ChatBot />
    </div>
  );
};

export default Index;
