
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  Filter, 
  Star, 
  ShoppingCart, 
  Sprout, 
  Wheat, 
  Apple, 
  Pill,
  ArrowRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Store = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', icon: ShoppingCart },
    { id: 'vegetables', name: 'Vegetables', icon: Apple },
    { id: 'grains', name: 'Grains & Cereals', icon: Wheat },
    { id: 'fertilizer', name: 'Organic Fertilizer', icon: Sprout },
    { id: 'medicine', name: 'Farm Medicine', icon: Pill }
  ];

  const products = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      category: 'vegetables',
      price: 120,
      originalPrice: 150,
      rating: 4.5,
      reviews: 23,
      image: '/placeholder.svg',
      inStock: true,
      description: 'Fresh organic tomatoes grown without pesticides'
    },
    {
      id: 2,
      name: 'Fresh Spinach',
      category: 'vegetables',
      price: 80,
      originalPrice: 100,
      rating: 4.2,
      reviews: 15,
      image: '/placeholder.svg',
      inStock: true,
      description: 'Nutrient-rich organic spinach leaves'
    },
    {
      id: 3,
      name: 'Organic Rice',
      category: 'grains',
      price: 2500,
      originalPrice: 3000,
      rating: 4.8,
      reviews: 45,
      image: '/placeholder.svg',
      inStock: true,
      description: 'Premium quality organic basmati rice'
    },
    {
      id: 4,
      name: 'Vermicompost',
      category: 'fertilizer',
      price: 500,
      originalPrice: 600,
      rating: 4.6,
      reviews: 32,
      image: '/placeholder.svg',
      inStock: true,
      description: 'Nutrient-rich organic vermicompost fertilizer'
    },
    {
      id: 5,
      name: 'Neem Oil',
      category: 'medicine',
      price: 350,
      originalPrice: 400,
      rating: 4.4,
      reviews: 28,
      image: '/placeholder.svg',
      inStock: true,
      description: 'Natural neem oil for pest control'
    },
    {
      id: 6,
      name: 'Organic Wheat',
      category: 'grains',
      price: 1800,
      originalPrice: 2200,
      rating: 4.7,
      reviews: 38,
      image: '/placeholder.svg',
      inStock: false,
      description: 'High-quality organic wheat flour'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleProductClick = (productId: number) => {
    window.location.href = `/store/product/${productId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            MFPCL Store
          </h1>
          <p className="text-green-100 text-lg max-w-2xl mx-auto">
            Fresh organic produce, quality grains, and sustainable farming solutions
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Categories */}
          <div className="lg:w-1/4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <IconComponent className="h-4 w-4 mr-2" />
                      {category.name}
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                      {!product.inStock && (
                        <Badge className="absolute top-2 right-2 bg-red-500">
                          Out of Stock
                        </Badge>
                      )}
                      {product.originalPrice > product.price && (
                        <Badge className="absolute top-2 left-2 bg-green-500">
                          {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-lg text-green-600">
                          ₹{product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-sm text-gray-500 line-through">
                            ₹{product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button 
                        size="sm" 
                        disabled={!product.inStock}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        {product.inStock ? 'Add to Cart' : 'Sold Out'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-500 mb-4">
                  <ShoppingCart className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-lg font-semibold">No products found</h3>
                  <p>Try adjusting your search or category filter</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Store;
