
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Quote,
  CheckCircle
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useServices, useEvents } from '@/hooks/useData';
import { useToast } from '@/hooks/use-toast';

const Services = () => {
  const { services, loading } = useServices();
  const { events } = useEvents();
  const { toast } = useToast();

  const handleRegister = (title: string) => {
    toast({
      title: "Registration Successful!",
      description: `You have successfully registered for "${title}". Check your email for confirmation details.`,
      duration: 5000,
    });
  };

  const detailedServices = [
    {
      icon: ShoppingCart,
      title: "Collective Marketing",
      description: "We help farmers aggregate their produce and collectively sell them in the market for better prices and access to larger markets.",
      features: [
        "Market price negotiation for better rates",
        "Bulk selling opportunities to reduce individual costs",
        "Direct market access eliminating middlemen",
        "Price transparency and market intelligence",
        "Quality standards maintenance for premium pricing"
      ],
      benefits: "Increase income by 25-40% through collective bargaining",
      color: "bg-green-100 text-green-600",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Package,
      title: "Input Supply",
      description: "Procure agricultural inputs like seeds, fertilizers, and pesticides in bulk at reasonable prices for our members.",
      features: [
        "Quality seeds supply with assured germination rates",
        "Organic and chemical fertilizers at competitive prices",
        "Bulk purchasing discounts of up to 30%",
        "Timely delivery during critical farming seasons",
        "Credit facilities for input purchases"
      ],
      benefits: "Save up to 30% on input costs through bulk procurement",
      color: "bg-blue-100 text-blue-600",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: TrendingUp,
      title: "Value Addition",
      description: "Engage in processing, packaging, and branding activities to add value to agricultural products and increase farmer income.",
      features: [
        "Product processing facilities for raw materials",
        "Custom packaging solutions for market appeal",
        "Brand development and marketing support",
        "Quality enhancement through modern techniques",
        "Export-quality certification assistance"
      ],
      benefits: "Increase product value by 50-100% through processing",
      color: "bg-purple-100 text-purple-600",
      image: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: CreditCard,
      title: "Access to Credit",
      description: "Facilitate access to credit and financial services, collaborating with banks to provide loans and insurance tailored for farmers.",
      features: [
        "Low-interest loans for farming activities",
        "Crop insurance coverage against natural disasters",
        "Financial planning and advisory services",
        "Banking partnerships for easy loan processing",
        "Flexible repayment schedules based on harvest cycles"
      ],
      benefits: "Secure financial future with tailored credit solutions",
      color: "bg-orange-100 text-orange-600",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: BookOpen,
      title: "Training & Capacity Building",
      description: "Conduct training programs on modern farming techniques, market trends, and quality standards to enhance farmer skills.",
      features: [
        "Expert trainers with field experience",
        "Practical sessions and hands-on training",
        "Certification programs for skill validation",
        "Ongoing support and mentorship",
        "Digital literacy and technology adoption"
      ],
      benefits: "Improve productivity by 50% through skill enhancement",
      color: "bg-red-100 text-red-600",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Building,
      title: "Infrastructure Development",
      description: "Invest in storage facilities, cold chains, and processing units to improve post-harvest management and reduce wastage.",
      features: [
        "Modern storage facilities with climate control",
        "Cold chain infrastructure for perishables",
        "Processing units for value addition",
        "Transportation and logistics support",
        "Technology integration for efficiency"
      ],
      benefits: "Reduce post-harvest losses by 80%",
      color: "bg-indigo-100 text-indigo-600",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Assist farmers in obtaining quality certifications and adhering to standards for domestic and international markets.",
      features: [
        "Organic certification guidance and support",
        "Quality testing and laboratory services",
        "Compliance with international standards",
        "Traceability systems implementation",
        "Continuous quality monitoring"
      ],
      benefits: "Access premium markets with certified products",
      color: "bg-pink-100 text-pink-600",
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: BarChart3,
      title: "Market Information",
      description: "Provide timely information on market demand, prices, and trends to help farmers make informed decisions.",
      features: [
        "Real-time market price updates",
        "Demand forecasting and trend analysis",
        "Crop planning recommendations",
        "Weather and climate information",
        "Market linkage opportunities"
      ],
      benefits: "Make informed decisions with accurate market data",
      color: "bg-teal-100 text-teal-600",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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

  const upcomingEvents = events?.slice(0, 3) || [];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Header />
        <div className="flex items-center justify-center h-64">
          <div className="text-lg">Loading services...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Services
          </h1>
          <p className="text-green-100 text-lg max-w-3xl mx-auto">
            Comprehensive support for farmers through innovative solutions, training, and market access
          </p>
          <p className="text-lg text-green-200 mt-4">
            Masters Farmers Producer Company Limited (MFPCL)
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Farm-to-Market Solutions
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end support to our farmer members through comprehensive services designed to improve their income and farming practices
            </p>
          </div>
          
          <div className="space-y-16">
            {detailedServices.map((service, index) => {
              const IconComponent = service.icon;
              const isReverse = index % 2 === 1;
              
              return (
                <div key={index} className={`flex flex-col ${isReverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
                  <div className="lg:w-1/2">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div className="lg:w-1/2 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                        <p className="text-green-600 font-semibold">{service.benefits}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-lg">{service.description}</p>
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-4">
                      <Link to="/contact">
                        <Button className="bg-green-600 hover:bg-green-700">
                          <Phone className="h-4 w-4 mr-2" />
                          Contact Us
                        </Button>
                      </Link>
                      <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
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
                        <span>{new Date(event.date).toLocaleDateString()}</span>
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
                    <Button 
                      variant="outline" 
                      className="w-full mt-4 border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                      onClick={() => handleRegister(event.title)}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default Services;
