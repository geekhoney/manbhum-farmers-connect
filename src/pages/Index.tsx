
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, Calendar, Users, ShoppingCart, BookOpen } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  // Recent products data
  const recentProducts = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: 120,
      originalPrice: 150,
      image: '/placeholder.svg',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Fresh Spinach',
      price: 80,
      originalPrice: 100,
      image: '/placeholder.svg',
      rating: 4.2
    },
    {
      id: 3,
      name: 'Organic Rice',
      price: 2500,
      originalPrice: 3000,
      image: '/placeholder.svg',
      rating: 4.8
    },
    {
      id: 4,
      name: 'Vermicompost',
      price: 500,
      originalPrice: 600,
      image: '/placeholder.svg',
      rating: 4.6
    }
  ];

  // Latest blogs data
  const latestBlogs = [
    {
      id: 1,
      title: "Sustainable Farming Practices for Better Yields",
      excerpt: "Learn about organic farming techniques that can increase your crop yield while maintaining soil health.",
      author: "Dr. Rajesh Kumar",
      date: "2024-05-28",
      readTime: "5 min read",
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: "Market Trends in Agricultural Commodities 2024",
      excerpt: "Comprehensive analysis of current market trends and price forecasts for major agricultural commodities.",
      author: "Priya Sharma",
      date: "2024-05-25",
      readTime: "8 min read",
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: "Success Story: Collective Farming in Rural Bengal",
      excerpt: "How MFPCL members achieved 40% increase in income through collective farming and direct market linkages.",
      author: "MFPCL Team",
      date: "2024-05-22",
      readTime: "6 min read",
      image: '/placeholder.svg'
    }
  ];

  // Popular courses data
  const popularCourses = [
    {
      id: 1,
      title: "Organic Farming Fundamentals",
      duration: "4 weeks",
      price: 2500,
      students: 156,
      rating: 4.8,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: "Digital Marketing for Farm Produce",
      duration: "3 weeks",
      price: 3200,
      students: 89,
      rating: 4.6,
      image: '/placeholder.svg'
    },
    {
      id: 3,
      title: "Post-Harvest Technology",
      duration: "2 weeks",
      price: 2000,
      students: 124,
      rating: 4.7,
      image: '/placeholder.svg'
    }
  ];

  // Upcoming events data
  const upcomingEvents = [
    {
      id: 1,
      title: "Sustainable Farming Workshop",
      date: "2024-06-15",
      location: "MFPCL Training Center",
      price: "Free for Members",
      registered: 32,
      capacity: 50
    },
    {
      id: 2,
      title: "Digital Marketing Webinar",
      date: "2024-06-20",
      location: "Online",
      price: "₹200",
      registered: 67,
      capacity: 100
    },
    {
      id: 3,
      title: "Collective Farming Success Meet",
      date: "2024-06-25",
      location: "Community Hall, Bankura",
      price: "Free for Members",
      registered: 156,
      capacity: 200
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />

      {/* Recent Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-green-800">Fresh Products</h2>
              <p className="text-gray-600 mt-2">Quality organic produce from our member farmers</p>
            </div>
            <Link to="/store">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View All Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-green-100 rounded-t-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-green-600">₹{product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
                      )}
                    </div>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-green-800">Latest Insights</h2>
              <p className="text-gray-600 mt-2">Stay updated with farming tips and industry news</p>
            </div>
            <Link to="/news/blogs">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View All Blogs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {latestBlogs.map((blog) => (
              <Card key={blog.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-green-100 rounded-t-lg overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{blog.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <span>{blog.author}</span>
                    <span>{blog.readTime}</span>
                  </div>
                  <Link to={`/news/blogs/${blog.id}`}>
                    <Button variant="outline" size="sm" className="w-full border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                      Read More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-green-800">Popular Courses</h2>
              <p className="text-gray-600 mt-2">Enhance your farming skills with expert-led training</p>
            </div>
            <Link to="/news/training">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View All Courses <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {popularCourses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-blue-100 rounded-t-lg overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <span className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-1" />
                      {course.duration}
                    </span>
                    <span className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students} students
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{course.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-green-600 text-lg">₹{course.price.toLocaleString()}</span>
                    <Link to={`/news/training/${course.id}`}>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Enroll Now
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-green-800">Upcoming Events</h2>
              <p className="text-gray-600 mt-2">Join our community events and workshops</p>
            </div>
            <Link to="/news/events">
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                View All Events <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-green-100 text-green-800">Event</Badge>
                    <span className="text-sm text-gray-500">
                      {event.registered}/{event.capacity} registered
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-green-600" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      {event.location}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-600">{event.price}</span>
                    <Link to={`/news/events/${event.id}`}>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Register
                      </Button>
                    </Link>
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

export default Index;
