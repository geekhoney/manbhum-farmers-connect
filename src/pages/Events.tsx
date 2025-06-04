import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useEvents } from '@/hooks/useData';
import { useToast } from '@/hooks/use-toast';
const Events = () => {
  const {
    events,
    loading
  } = useEvents();
  const {
    toast
  } = useToast();
  const handleRegister = (eventTitle: string) => {
    toast({
      title: "Registration Successful!",
      description: `You have successfully registered for "${eventTitle}". Check your email for confirmation details.`,
      duration: 5000
    });
  };
  if (loading) {
    return <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading events...</div>
        </div>
        <Footer />
      </div>;
  }
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());
  return <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }} className="absolute inset-0 bg-green-700"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Workshops</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Join our community events, workshops, and training sessions to enhance your farming knowledge and network with fellow farmers
          </p>
          <p className="text-lg text-green-200 mt-4">
            Masters Farmers Producer Company Limited (MFPCL)
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Upcoming Events</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {upcomingEvents.map(event => <Card key={event.id} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-600">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className={event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' : event.type === 'Webinar' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'}>
                      {event.type}
                    </Badge>
                    <Badge variant={event.status === 'Open' ? 'default' : 'destructive'} className={event.status === 'Open' ? 'bg-green-600' : ''}>
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
                    <Button size="sm" className="bg-green-600 hover:bg-green-700" onClick={() => handleRegister(event.title)}>
                      Register Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Past Events */}
      {pastEvents.length > 0 && <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">Past Events</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map(event => <Card key={event.id} className="opacity-75">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline">{event.type}</Badge>
                      <span className="text-sm text-gray-500">Completed</span>
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
                </Card>)}
            </div>
          </div>
        </section>}

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.3
      }}></div>
        <div className="container mx-auto px-6 text-center relative z-10">
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
    </div>;
};
export default Events;