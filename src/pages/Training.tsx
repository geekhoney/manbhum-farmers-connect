import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Clock, Users, Star, Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Training = () => {
  const courses = [
    {
      id: 1,
      title: "Fundamentals of Sustainable Farming",
      description: "Learn the basics of sustainable agriculture, soil health management, and eco-friendly farming practices.",
      instructor: "Dr. Rajesh Kumar",
      duration: "4 weeks",
      level: "Beginner",
      price: "Free",
      rating: 4.8,
      students: 245,
      lessons: 12,
      category: "Sustainable Farming",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Digital Marketing for Agricultural Products",
      description: "Master online marketing strategies to sell your farm produce directly to consumers and retailers.",
      instructor: "Priya Sharma",
      duration: "3 weeks",
      level: "Intermediate",
      price: "₹999",
      rating: 4.6,
      students: 189,
      lessons: 15,
      category: "Marketing",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Organic Certification Process",
      description: "Complete guide to obtaining organic certification for your farm and accessing premium markets.",
      instructor: "Certification Team",
      duration: "2 weeks",
      level: "Beginner",
      price: "₹499",
      rating: 4.9,
      students: 156,
      lessons: 8,
      category: "Certification",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Financial Management for Farmers",
      description: "Learn budgeting, loan management, insurance, and financial planning specifically for agricultural businesses.",
      instructor: "CA Amit Singh",
      duration: "5 weeks",
      level: "Intermediate",
      price: "₹1499",
      rating: 4.7,
      students: 98,
      lessons: 20,
      category: "Finance",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Climate-Smart Agriculture",
      description: "Adapt your farming practices to climate change challenges while maintaining productivity.",
      instructor: "Dr. Anita Singh",
      duration: "6 weeks",
      level: "Advanced",
      price: "₹1999",
      rating: 4.8,
      students: 67,
      lessons: 18,
      category: "Climate Smart",
      thumbnail: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Precision Agriculture with Technology",
      description: "Use modern technology, sensors, and data analytics to optimize your farming operations.",
      instructor: "Tech Team",
      duration: "4 weeks",
      level: "Advanced",
      price: "₹2499",
      rating: 4.5,
      students: 45,
      lessons: 16,
      category: "Technology",
      thumbnail: "/placeholder.svg"
    }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: "Monsoon Preparation for Farmers",
      date: "2024-06-15",
      time: "3:00 PM IST",
      speaker: "Dr. Weather Expert",
      participants: 120
    },
    {
      id: 2,
      title: "Market Price Trends Analysis",
      date: "2024-06-18",
      time: "2:00 PM IST",
      speaker: "Market Analyst",
      participants: 85
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Training & Courses</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Enhance your farming skills with our comprehensive online courses and expert-led training programs
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {["All Courses", "Sustainable Farming", "Marketing", "Certification", "Finance", "Climate Smart", "Technology"].map((category) => (
              <Button
                key={category}
                variant={category === "All Courses" ? "default" : "outline"}
                size="sm"
                className={category === "All Courses" ? "bg-green-600 hover:bg-green-700" : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Online Courses */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Online Courses</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-green-100 rounded-t-lg flex items-center justify-center">
                  <Play className="h-12 w-12 text-green-600" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {course.category}
                    </Badge>
                    <Badge variant="outline">{course.level}</Badge>
                  </div>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  
                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Instructor:</span>
                      <span className="font-medium">{course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Lessons:</span>
                      <span>{course.lessons}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({course.students})</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-600">{course.price}</span>
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

      {/* Upcoming Webinars */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Upcoming Webinars</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {upcomingWebinars.map((webinar) => (
              <Card key={webinar.id} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <CardTitle className="text-lg">{webinar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      {new Date(webinar.date).toLocaleDateString()} at {webinar.time}
                    </div>
                    <div className="flex items-center text-sm">
                      <BookOpen className="h-4 w-4 mr-2 text-blue-600" />
                      Speaker: {webinar.speaker}
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="h-4 w-4 mr-2 text-blue-600" />
                      {webinar.participants} registered
                    </div>
                  </div>
                  
                  <Link to="/register">
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 w-full">
                      Register for Free
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Free Resources</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Download className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Farming Guides</h3>
                <p className="text-sm text-gray-600 mb-4">Download comprehensive farming guides and best practices</p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Play className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Video Tutorials</h3>
                <p className="text-sm text-gray-600 mb-4">Watch free video tutorials on various farming techniques</p>
                <Button variant="outline" size="sm">Watch Videos</Button>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <BookOpen className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">E-Books</h3>
                <p className="text-sm text-gray-600 mb-4">Access our collection of agricultural e-books and research papers</p>
                <Button variant="outline" size="sm">Browse Library</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Training;
