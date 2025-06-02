
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Sustainable Farming Workshop",
      description: "Learn advanced techniques in organic farming and sustainable agricultural practices from expert trainers.",
      date: "2024-06-15",
      time: "10:00 AM - 4:00 PM",
      location: "MFPCL Training Center, Purulia",
      type: "Workshop",
      capacity: 50,
      registered: 32,
      price: "Free for Members",
      status: "Open"
    },
    {
      id: 2,
      title: "Digital Marketing for Farm Produce",
      description: "Master the art of selling your agricultural products online and reaching wider markets through digital platforms.",
      date: "2024-06-20",
      time: "2:00 PM - 6:00 PM",
      location: "Online Webinar",
      type: "Webinar",
      capacity: 100,
      registered: 67,
      price: "₹200",
      status: "Open"
    },
    {
      id: 3,
      title: "Collective Farming Success Meet",
      description: "Annual gathering of MFPCL members to share success stories and plan for the upcoming agricultural season.",
      date: "2024-06-25",
      time: "9:00 AM - 5:00 PM",
      location: "Community Hall, Bankura",
      type: "Conference",
      capacity: 200,
      registered: 156,
      price: "Free for Members",
      status: "Filling Fast"
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: "Crop Insurance Awareness Program",
      description: "Educational session about various crop insurance schemes and how to apply for them.",
      date: "2024-05-10",
      location: "District Collector Office, Purulia",
      type: "Seminar",
      attendees: 85
    },
    {
      id: 5,
      title: "Organic Certification Training",
      description: "Comprehensive training on organic farming standards and certification process.",
      date: "2024-04-28",
      location: "MFPCL Training Center",
      type: "Training",
      attendees: 42
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Workshops</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join our community events, workshops, and training sessions to enhance your farming knowledge and network with fellow farmers
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge 
                      variant="secondary" 
                      className={
                        event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Webinar' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }
                    >
                      {event.type}
                    </Badge>
                    <Badge 
                      variant={event.status === 'Open' ? 'default' : 'destructive'}
                      className={event.status === 'Open' ? 'bg-green-600' : ''}
                    >
                      {event.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-green-600" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-green-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-green-600" />
                      {event.registered}/{event.capacity} registered
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-green-600">{event.price}</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Past Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event) => (
              <Card key={event.id} className="opacity-75">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{event.type}</Badge>
                    <span className="text-sm text-gray-500">{event.attendees} attendees</span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-green-600" />
                      {new Date(event.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-green-600" />
                      {event.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Miss Our Next Event!</h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get notified about upcoming workshops, seminars, and training programs
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-green-50">
            Subscribe to Newsletter
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
