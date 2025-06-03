
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Camera, 
  Video, 
  Download,
  Eye,
  Filter,
  Grid,
  List
} from 'lucide-react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const categories = [
    { id: 'all', name: 'All', count: 48 },
    { id: 'farming', name: 'Farming Activities', count: 18 },
    { id: 'training', name: 'Training Programs', count: 12 },
    { id: 'events', name: 'Events & Meetings', count: 8 },
    { id: 'products', name: 'Products & Harvest', count: 10 }
  ];

  const galleryItems = [
    {
      id: 1,
      type: 'image',
      title: 'Organic Rice Harvest 2024',
      category: 'farming',
      date: '2024-01-15',
      location: 'Manbhum Village',
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop',
      description: 'Successful organic rice harvest by our member farmers',
      views: 245,
      tags: ['rice', 'organic', 'harvest']
    },
    {
      id: 2,
      type: 'image',
      title: 'Modern Farming Training',
      category: 'training',
      date: '2024-01-10',
      location: 'MFPCL Training Center',
      image: 'https://images.unsplash.com/photo-1593113616828-6f22bce6b360?w=600&h=400&fit=crop',
      description: 'Training session on modern farming techniques',
      views: 189,
      tags: ['training', 'technology', 'education']
    },
    {
      id: 3,
      type: 'image',
      title: 'Community Meeting',
      category: 'events',
      date: '2024-01-08',
      location: 'Community Hall',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=400&fit=crop',
      description: 'Monthly community meeting with all stakeholders',
      views: 156,
      tags: ['meeting', 'community', 'discussion']
    },
    {
      id: 4,
      type: 'image',
      title: 'Fresh Vegetable Collection',
      category: 'products',
      date: '2024-01-05',
      location: 'Collection Center',
      image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=600&h=400&fit=crop',
      description: 'Daily fresh vegetable collection from member farms',
      views: 203,
      tags: ['vegetables', 'fresh', 'collection']
    },
    {
      id: 5,
      type: 'video',
      title: 'Sustainable Farming Practices',
      category: 'farming',
      date: '2024-01-03',
      location: 'Demo Farm',
      image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop',
      description: 'Video demonstration of sustainable farming methods',
      views: 324,
      tags: ['sustainable', 'demo', 'video']
    },
    {
      id: 6,
      type: 'image',
      title: 'Certification Ceremony',
      category: 'events',
      date: '2023-12-28',
      location: 'MFPCL Office',
      image: 'https://images.unsplash.com/photo-1560472354-c58348ba1b92?w=600&h=400&fit=crop',
      description: 'Organic certification achievement celebration',
      views: 178,
      tags: ['certification', 'achievement', 'celebration']
    },
    {
      id: 7,
      type: 'image',
      title: 'Seed Distribution Program',
      category: 'farming',
      date: '2023-12-25',
      location: 'Distribution Center',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop',
      description: 'Quality seed distribution to member farmers',
      views: 267,
      tags: ['seeds', 'distribution', 'quality']
    },
    {
      id: 8,
      type: 'image',
      title: 'Women Farmers Training',
      category: 'training',
      date: '2023-12-20',
      location: 'Training Hall',
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop',
      description: 'Special training program for women farmers',
      views: 198,
      tags: ['women', 'empowerment', 'training']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-green-100 mb-8">
              Explore our journey through images and videos showcasing our farming community, 
              training programs, and agricultural achievements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Camera className="h-4 w-4 mr-2" />
                48 Photos
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Video className="h-4 w-4 mr-2" />
                8 Videos
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Users className="h-4 w-4 mr-2" />
                Community Stories
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className={selectedCategory === category.id ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? "bg-green-600 hover:bg-green-700" : ""}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? "bg-green-600 hover:bg-green-700" : ""}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                        <Button size="sm" variant="secondary">
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Button>
                        <Button size="sm" variant="secondary">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    {item.type === 'video' && (
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary">
                          <Video className="h-3 w-3 mr-1" />
                          Video
                        </Badge>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    <div className="space-y-2 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {item.location}
                      </div>
                      <div className="flex items-center">
                        <Eye className="h-3 w-3 mr-1" />
                        {item.views} views
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {item.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3">
                        <div className="relative">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-32 md:h-24 object-cover rounded-lg"
                          />
                          {item.type === 'video' && (
                            <div className="absolute top-2 right-2">
                              <Badge variant="secondary" className="text-xs">
                                <Video className="h-3 w-3 mr-1" />
                                Video
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(item.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {item.location}
                          </div>
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            {item.views} views
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">48+</div>
              <div className="text-green-100">Photos Captured</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8+</div>
              <div className="text-green-100">Training Videos</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-green-100">Events Documented</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-green-100">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
