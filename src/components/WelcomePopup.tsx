
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { X, Calendar, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const WelcomePopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const popupContent = [
    {
      type: 'event',
      title: 'Upcoming Workshop',
      subtitle: 'Sustainable Farming Techniques',
      description: 'Join our expert-led workshop on modern sustainable farming methods.',
      date: 'January 15, 2025',
      cta: 'Register Now',
      link: '/news/events/1',
      image: '/placeholder.svg'
    },
    {
      type: 'product',
      title: 'Featured Product',
      subtitle: 'Organic Tomatoes - Fresh Harvest',
      description: 'Premium quality organic tomatoes at special launch price.',
      price: '₹120',
      originalPrice: '₹150',
      cta: 'Shop Now',
      link: '/store/product/1',
      image: '/placeholder.svg'
    }
  ];

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('welcomePopupSeen');
    if (!hasSeenPopup) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  useEffect(() => {
    if (isVisible && popupContent.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % popupContent.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('welcomePopupSeen', 'true');
  };

  const handleDontShowAgain = () => {
    handleClose();
    localStorage.setItem('welcomePopupSeen', 'permanent');
  };

  if (!isVisible) return null;

  const currentContent = popupContent[currentSlide];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full bg-white shadow-2xl animate-scale-in">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="absolute top-2 right-2 h-8 w-8 p-0"
          >
            <X className="h-4 w-4" />
          </Button>
          <div className="flex items-center gap-2 mb-2">
            {currentContent.type === 'event' ? (
              <Calendar className="h-5 w-5 text-blue-600" />
            ) : (
              <ShoppingBag className="h-5 w-5 text-purple-600" />
            )}
            <Badge variant="outline">
              {currentContent.type === 'event' ? 'Upcoming Event' : 'Featured Product'}
            </Badge>
          </div>
          <CardTitle className="text-xl">{currentContent.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <img 
            src={currentContent.image} 
            alt={currentContent.subtitle}
            className="w-full h-32 object-cover rounded-lg"
          />
          
          <div>
            <h3 className="font-semibold text-lg text-green-600 mb-2">
              {currentContent.subtitle}
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              {currentContent.description}
            </p>
            
            {currentContent.type === 'event' ? (
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{currentContent.date}</span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-green-600">{currentContent.price}</span>
                <span className="text-sm text-gray-500 line-through">{currentContent.originalPrice}</span>
                <Badge className="bg-green-100 text-green-800">20% OFF</Badge>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Link to={currentContent.link} className="flex-1">
              <Button className="w-full bg-green-600 hover:bg-green-700">
                {currentContent.cta}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>

          {/* Slide indicators */}
          {popupContent.length > 1 && (
            <div className="flex justify-center gap-2">
              {popupContent.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-green-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}

          <div className="text-center">
            <Button variant="ghost" size="sm" onClick={handleDontShowAgain}>
              Don't show again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePopup;
