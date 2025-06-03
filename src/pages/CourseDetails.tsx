
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Clock, 
  Users, 
  Calendar, 
  BookOpen, 
  PlayCircle, 
  FileText, 
  Award,
  Star,
  ChevronLeft,
  Check
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

const CourseDetails = () => {
  const { id } = useParams();
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Mock course data (in real app, fetch by ID)
  const course = {
    id: 1,
    title: "Organic Farming Fundamentals",
    description: "Learn the complete basics of organic farming including soil management, natural pest control, and sustainable agriculture practices.",
    instructor: "Dr. Rajesh Kumar",
    duration: "6 weeks",
    level: "Beginner",
    price: "Free",
    rating: 4.8,
    students: 1250,
    lessons: 24,
    certificate: true,
    image: "/placeholder.svg",
    nextBatch: "June 20, 2025",
    language: "Hindi & English",
    features: [
      "24 video lessons",
      "Downloadable resources",
      "Community support",
      "Certificate of completion",
      "Lifetime access"
    ],
    curriculum: [
      {
        week: 1,
        title: "Introduction to Organic Farming",
        lessons: ["What is Organic Farming", "Benefits and Principles", "Getting Started"],
        duration: "2 hours"
      },
      {
        week: 2,
        title: "Soil Health Management",
        lessons: ["Soil Testing", "Composting", "Natural Fertilizers"],
        duration: "3 hours"
      },
      {
        week: 3,
        title: "Organic Pest Control",
        lessons: ["Natural Pesticides", "Beneficial Insects", "IPM Strategies"],
        duration: "2.5 hours"
      },
      {
        week: 4,
        title: "Crop Planning & Rotation",
        lessons: ["Seasonal Planning", "Companion Planting", "Rotation Benefits"],
        duration: "2 hours"
      }
    ]
  };

  const handleEnrollment = () => {
    setIsEnrolled(true);
    toast.success('Successfully enrolled in the course!');
    
    // Show notification using global notification system
    if ((window as any).showNotification) {
      (window as any).showNotification({
        type: 'success',
        title: 'Course Enrollment Successful!',
        message: `You've been enrolled in "${course.title}". Check your profile to start learning.`,
        duration: 6000
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <Link to="/news/training" className="hover:text-green-600 flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            Back to Courses
          </Link>
          <span>/</span>
          <span className="text-gray-900">{course.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={course.image} 
                alt={course.title}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Badge>{course.level}</Badge>
                <Badge variant="outline">{course.language}</Badge>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
              <p className="text-gray-600 text-lg leading-relaxed">{course.description}</p>
            </div>

            {/* Course Stats */}
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="font-semibold">{course.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <Users className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="font-semibold">{course.students}</div>
                <div className="text-sm text-gray-600">Students</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <BookOpen className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="font-semibold">{course.lessons}</div>
                <div className="text-sm text-gray-600">Lessons</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <Award className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                <div className="font-semibold">Certificate</div>
                <div className="text-sm text-gray-600">Included</div>
              </div>
            </div>

            {/* Curriculum */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Course Curriculum</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {course.curriculum.map((week, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">Week {week.week}: {week.title}</h3>
                        <span className="text-sm text-gray-600">{week.duration}</span>
                      </div>
                      <ul className="space-y-1">
                        {week.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-center gap-2 text-sm text-gray-600">
                            <PlayCircle className="h-4 w-4" />
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
                <ul className="space-y-2">
                  {course.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">{course.price}</div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {course.rating} ({course.students} students)
                    </span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Instructor:</span>
                    <span className="font-medium">{course.instructor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Next Batch:</span>
                    <span className="font-medium">{course.nextBatch}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{course.level}</span>
                  </div>
                </div>

                {isEnrolled ? (
                  <div className="text-center">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                      <Check className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold text-green-800">You're Enrolled!</div>
                      <div className="text-sm text-green-600">Course starts on {course.nextBatch}</div>
                    </div>
                    <Link to="/profile">
                      <Button className="w-full bg-green-600 hover:bg-green-700">
                        Go to My Courses
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <Button 
                    onClick={handleEnrollment}
                    className="w-full bg-green-600 hover:bg-green-700 mb-4"
                  >
                    Enroll Now
                  </Button>
                )}

                <div className="text-center">
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Add to Calendar
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CourseDetails;
