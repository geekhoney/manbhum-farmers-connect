
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Clock, Users, ArrowLeft, Share2, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const EventDetails = () => {
  const { id } = useParams();

  // Mock event data (in real app, fetch by ID)
  const event = {
    id: parseInt(id || '1'),
    title: "Sustainable Farming Workshop",
    description: "Learn advanced techniques in organic farming and sustainable agricultural practices from expert trainers. This comprehensive workshop covers soil health, crop rotation, natural pest management, and market linkages for organic produce.",
    fullDescription: `
      <h2>Workshop Overview</h2>
      <p>This intensive one-day workshop is designed for farmers who want to transition to sustainable and organic farming practices. Led by experienced agricultural experts and successful organic farmers, this session will provide practical knowledge and hands-on experience.</p>

      <h2>What You'll Learn</h2>
      <ul>
        <li>Soil health assessment and improvement techniques</li>
        <li>Organic fertilizer preparation and application</li>
        <li>Natural pest and disease management</li>
        <li>Crop rotation planning for maximum yield</li>
        <li>Water conservation and efficient irrigation</li>
        <li>Organic certification process and requirements</li>
        <li>Market opportunities for organic produce</li>
      </ul>

      <h2>Schedule</h2>
      <div>
        <h3>10:00 AM - 11:30 AM: Introduction to Sustainable Farming</h3>
        <p>Understanding the principles and benefits of sustainable agriculture</p>
        
        <h3>11:45 AM - 12:30 PM: Soil Health Management</h3>
        <p>Hands-on soil testing and organic matter enhancement</p>
        
        <h3>1:30 PM - 2:45 PM: Natural Pest Management</h3>
        <p>Identifying beneficial insects and natural pest control methods</p>
        
        <h3>3:00 PM - 4:00 PM: Market Linkages and Certification</h3>
        <p>How to access premium markets for organic produce</p>
      </div>

      <h2>Who Should Attend</h2>
      <ul>
        <li>Small and marginal farmers</li>
        <li>Farmers interested in organic certification</li>
        <li>Agricultural students and professionals</li>
        <li>Anyone interested in sustainable agriculture</li>
      </ul>

      <h2>What's Included</h2>
      <ul>
        <li>Training materials and handouts</li>
        <li>Lunch and refreshments</li>
        <li>Soil testing kit</li>
        <li>Certificate of completion</li>
        <li>Follow-up support for 3 months</li>
      </ul>
    `,
    date: "2024-06-15",
    time: "10:00 AM - 4:00 PM",
    location: "MFPCL Training Center, Purulia",
    type: "Workshop",
    capacity: 50,
    registered: 32,
    price: "Free for Members",
    status: "Open",
    image: "/placeholder.svg",
    speaker: "Dr. Rajesh Kumar",
    speakerBio: "Agricultural Expert with 15+ years experience in organic farming"
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link to="/news/events" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Events
        </Link>
      </div>

      {/* Event Header */}
      <section className="container mx-auto px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <Badge className={
              event.type === 'Workshop' ? 'bg-blue-100 text-blue-800' :
              event.type === 'Webinar' ? 'bg-purple-100 text-purple-800' :
              'bg-green-100 text-green-800'
            }>
              {event.type}
            </Badge>
            <Badge variant={event.status === 'Open' ? 'default' : 'destructive'} className={event.status === 'Open' ? 'bg-green-600' : ''}>
              {event.status}
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{event.title}</h1>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-5 w-5 mr-3 text-green-600" />
                <span className="font-medium">{new Date(event.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-3 text-green-600" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-3 text-green-600" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-3 text-green-600" />
                <span>{event.registered}/{event.capacity} registered</span>
              </div>
              <div className="flex items-center text-gray-600">
                <User className="h-5 w-5 mr-3 text-green-600" />
                <div>
                  <span className="font-medium">{event.speaker}</span>
                  <p className="text-sm text-gray-500">{event.speakerBio}</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-2xl font-bold text-green-600">{event.price}</div>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 flex-1">
                  Register Now
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                {event.capacity - event.registered} spots remaining
              </p>
            </div>
          </div>

          <img 
            src={event.image} 
            alt={event.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>
      </section>

      {/* Event Content */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: event.fullDescription }} />
          </div>

          {/* Registration Card */}
          <Card className="mt-12 bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Ready to Join This Workshop?
              </h3>
              <p className="text-green-700 mb-6">
                Limited seats available. Register now to secure your spot and advance your farming knowledge.
              </p>
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Register for {event.price}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EventDetails;
