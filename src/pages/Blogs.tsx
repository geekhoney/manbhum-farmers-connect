
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Sustainable Farming Practices for Better Yields",
      excerpt: "Learn about organic farming techniques that can increase your crop yield while maintaining soil health and environmental sustainability.",
      author: "Dr. Rajesh Kumar",
      date: "2024-05-28",
      category: "Sustainable Farming",
      readTime: "5 min read",
      views: 245,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      title: "Market Trends in Agricultural Commodities 2024",
      excerpt: "Comprehensive analysis of current market trends and price forecasts for major agricultural commodities in the upcoming season.",
      author: "Priya Sharma",
      date: "2024-05-25",
      category: "Market Analysis",
      readTime: "8 min read",
      views: 189,
      image: "/placeholder.svg"
    },
    {
      id: 3,
      title: "Success Story: Collective Farming in Rural Bengal",
      excerpt: "How MFPCL members achieved 40% increase in income through collective farming and direct market linkages.",
      author: "MFPCL Team",
      date: "2024-05-22",
      category: "Success Story",
      readTime: "6 min read",
      views: 312,
      image: "/placeholder.svg"
    },
    {
      id: 4,
      title: "Digital Agriculture: Technology for Modern Farmers",
      excerpt: "Exploring how digital tools and precision agriculture can revolutionize farming practices for small and marginal farmers.",
      author: "Tech Team",
      date: "2024-05-20",
      category: "Technology",
      readTime: "7 min read",
      views: 167,
      image: "/placeholder.svg"
    },
    {
      id: 5,
      title: "Organic Certification Process Made Simple",
      excerpt: "Step-by-step guide to obtaining organic certification for your farm produce and accessing premium markets.",
      author: "Certification Team",
      date: "2024-05-18",
      category: "Certification",
      readTime: "4 min read",
      views: 203,
      image: "/placeholder.svg"
    },
    {
      id: 6,
      title: "Climate-Smart Agriculture Techniques",
      excerpt: "Adapting farming practices to climate change challenges while maintaining productivity and sustainability.",
      author: "Dr. Anita Singh",
      date: "2024-05-15",
      category: "Climate Smart",
      readTime: "9 min read",
      views: 278,
      image: "/placeholder.svg"
    }
  ];

  const categories = ["All", "Sustainable Farming", "Market Analysis", "Success Story", "Technology", "Certification", "Climate Smart"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">MFPCL Blogs</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Stay informed with the latest insights on sustainable farming, market trends, and success stories from our farming community
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-green-600 hover:bg-green-700" : "border-green-600 text-green-600 hover:bg-green-600 hover:text-white"}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-green-100 rounded-t-lg"></div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Eye className="h-4 w-4 mr-1" />
                      {post.views}
                    </div>
                  </div>
                  <CardTitle className="text-lg hover:text-green-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Link to={`/news/blogs/${post.id}`}>
                      <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blogs;
