
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { User, Settings, BookOpen, Calendar, ShoppingBag, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Raj',
    lastName: 'Kumar',
    email: 'raj.kumar@example.com',
    phone: '+91 9876543210',
    farmerType: 'Small Farmer',
    landSize: '3',
    location: 'Purulia, West Bengal'
  });

  const enrolledCourses = [
    {
      id: 1,
      title: "Organic Farming Fundamentals",
      progress: 75,
      status: "In Progress",
      completedLessons: 12,
      totalLessons: 16
    },
    {
      id: 2,
      title: "Digital Marketing for Farmers",
      progress: 100,
      status: "Completed",
      completedLessons: 8,
      totalLessons: 8
    }
  ];

  const registeredEvents = [
    {
      id: 1,
      title: "Sustainable Farming Workshop",
      date: "2024-06-15",
      status: "Upcoming",
      location: "MFPCL Training Center"
    },
    {
      id: 2,
      title: "Organic Certification Training",
      date: "2024-05-28",
      status: "Completed",
      location: "Online"
    }
  ];

  const orderHistory = [
    {
      id: 1,
      items: "Organic Tomatoes, Vermicompost",
      total: 620,
      date: "2024-05-20",
      status: "Delivered"
    },
    {
      id: 2,
      items: "Organic Rice, Neem Oil",
      total: 2850,
      date: "2024-05-15",
      status: "Delivered"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="bg-green-100 p-4 rounded-full mr-4">
              <User className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                {profileData.firstName} {profileData.lastName}
              </h1>
              <p className="text-gray-600">{profileData.farmerType} • {profileData.location}</p>
            </div>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="courses" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Courses
              </TabsTrigger>
              <TabsTrigger value="events" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Events
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <ShoppingBag className="h-4 w-4" />
                Orders
              </TabsTrigger>
              <TabsTrigger value="achievements" className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                Achievements
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="h-5 w-5" />
                    Profile Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({...profileData, firstName: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({...profileData, lastName: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="landSize">Land Size (acres)</Label>
                        <Input
                          id="landSize"
                          value={profileData.landSize}
                          onChange={(e) => setProfileData({...profileData, landSize: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={profileData.location}
                          onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        />
                      </div>
                    </div>

                    <Button className="bg-green-600 hover:bg-green-700">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="courses">
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <Card key={course.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-semibold">{course.title}</h3>
                          <p className="text-gray-600">
                            {course.completedLessons}/{course.totalLessons} lessons completed
                          </p>
                        </div>
                        <Badge variant={course.status === 'Completed' ? 'default' : 'secondary'}>
                          {course.status}
                        </Badge>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-green-600 h-2 rounded-full" 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <Button variant="outline" size="sm">
                        {course.status === 'Completed' ? 'View Certificate' : 'Continue Course'}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="space-y-4">
                {registeredEvents.map((event) => (
                  <Card key={event.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold">{event.title}</h3>
                          <p className="text-gray-600">{event.location}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(event.date).toLocaleDateString()}
                          </p>
                        </div>
                        <Badge variant={event.status === 'Completed' ? 'default' : 'secondary'}>
                          {event.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="orders">
              <div className="space-y-4">
                {orderHistory.map((order) => (
                  <Card key={order.id}>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">Order #{order.id}</h3>
                          <p className="text-gray-600">{order.items}</p>
                          <p className="text-sm text-gray-500">
                            {new Date(order.date).toLocaleDateString()}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">₹{order.total}</p>
                          <Badge variant="outline">{order.status}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="achievements">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                    <h3 className="font-semibold">Organic Farming Certificate</h3>
                    <p className="text-sm text-gray-600">Completed advanced organic farming course</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold">MFPCL Member</h3>
                    <p className="text-sm text-gray-600">Active member since 2023</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="font-semibold">Digital Marketing Graduate</h3>
                    <p className="text-sm text-gray-600">Successfully completed digital marketing course</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Profile;
