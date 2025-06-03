
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Users, ArrowLeft, Share2, User, BookOpen, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CourseDetails = () => {
  const { id } = useParams();

  // Mock course data (in real app, fetch by ID)
  const course = {
    id: parseInt(id || '1'),
    title: "Organic Farming Fundamentals",
    description: "Comprehensive 4-week course covering all aspects of organic farming from soil preparation to harvest and marketing.",
    duration: "4 weeks",
    price: 2500,
    students: 156,
    rating: 4.8,
    instructor: "Dr. Priya Sharma",
    instructorBio: "PhD in Sustainable Agriculture, 20+ years experience",
    image: "/placeholder.svg",
    modules: [
      {
        title: "Week 1: Introduction to Organic Farming",
        lessons: [
          "Understanding Organic Principles",
          "Organic vs Conventional Farming",
          "Certification Requirements",
          "Market Opportunities"
        ]
      },
      {
        title: "Week 2: Soil Health and Preparation",
        lessons: [
          "Soil Testing and Analysis",
          "Composting Techniques",
          "Organic Matter Enhancement",
          "Soil pH Management"
        ]
      },
      {
        title: "Week 3: Crop Management",
        lessons: [
          "Organic Seed Selection",
          "Natural Pest Control",
          "Disease Prevention",
          "Crop Rotation Planning"
        ]
      },
      {
        title: "Week 4: Harvest and Marketing",
        lessons: [
          "Harvesting Best Practices",
          "Post-Harvest Handling",
          "Organic Marketing Strategies",
          "Building Customer Relationships"
        ]
      }
    ],
    benefits: [
      "Comprehensive understanding of organic farming",
      "Practical hands-on experience",
      "Expert guidance and mentorship",
      "Certificate upon completion",
      "Access to organic market networks",
      "Lifetime access to course materials"
    ],
    requirements: [
      "Basic farming knowledge preferred",
      "Access to a small plot for practice",
      "Commitment to attend all sessions",
      "Willingness to learn and implement"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link to="/news/training" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Courses
        </Link>
      </div>

      {/* Course Header */}
      <section className="container mx-auto px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">Course</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{course.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{course.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-green-600" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-3 text-green-600" />
                  <span>{course.students} students</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <BookOpen className="h-5 w-5 mr-3 text-green-600" />
                  <span>16 lessons</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-3 text-green-600" />
                  <span>Certificate included</span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <User className="h-5 w-5 mr-3 text-green-600" />
                <div>
                  <span className="font-medium">{course.instructor}</span>
                  <p className="text-sm text-gray-500">{course.instructorBio}</p>
                </div>
              </div>
            </div>

            <Card className="lg:sticky lg:top-6">
              <CardHeader>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-3xl font-bold text-green-600 mb-4">
                  ₹{course.price.toLocaleString()}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                  Enroll Now
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Course
                </Button>
                <div className="text-center text-sm text-gray-600">
                  30-day money-back guarantee
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Course Modules */}
              <Card>
                <CardHeader>
                  <CardTitle>Course Curriculum</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {course.modules.map((module, index) => (
                      <div key={index} className="border-l-4 border-green-600 pl-4">
                        <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
                        <ul className="space-y-1">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li key={lessonIndex} className="text-gray-600 flex items-center">
                              <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                              {lesson}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* What You'll Learn */}
              <Card>
                <CardHeader>
                  <CardTitle>What You'll Learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {course.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.requirements.map((requirement, index) => (
                      <li key={index} className="text-gray-600 flex items-start">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3 mt-2"></div>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Instructor */}
              <Card>
                <CardHeader>
                  <CardTitle>Your Instructor</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="font-semibold">{course.instructor}</h3>
                    <p className="text-sm text-gray-600 mb-4">{course.instructorBio}</p>
                    <div className="text-sm text-gray-500">
                      Teaching {course.students}+ students
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CourseDetails;
