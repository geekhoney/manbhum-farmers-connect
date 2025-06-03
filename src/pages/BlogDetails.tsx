
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft, Share2, Heart, Eye } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const BlogDetails = () => {
  const { id } = useParams();

  // Mock blog data (in real app, fetch by ID)
  const blog = {
    id: parseInt(id || '1'),
    title: "Sustainable Farming Practices for Better Yields",
    content: `
      <h2>Introduction to Sustainable Farming</h2>
      <p>Sustainable farming is an approach to agriculture that focuses on producing food while protecting the environment, public health, human communities, and animal welfare. This type of agriculture enables us to produce healthy food without compromising future generations' ability to do the same.</p>

      <h2>Key Principles of Sustainable Farming</h2>
      <p>The foundation of sustainable farming lies in several core principles:</p>
      <ul>
        <li><strong>Soil Health:</strong> Maintaining and improving soil fertility through natural methods</li>
        <li><strong>Water Conservation:</strong> Efficient water use and protection of water resources</li>
        <li><strong>Biodiversity:</strong> Promoting diverse ecosystems on and around farms</li>
        <li><strong>Natural Pest Management:</strong> Using biological controls instead of harmful chemicals</li>
      </ul>

      <h2>Organic Farming Techniques</h2>
      <p>Organic farming is a cornerstone of sustainable agriculture. Here are some key techniques:</p>
      
      <h3>Crop Rotation</h3>
      <p>Rotating crops helps maintain soil nutrients and break pest cycles. Different crops have varying nutrient needs and pest vulnerabilities, so rotation naturally balances the ecosystem.</p>

      <h3>Composting</h3>
      <p>Creating nutrient-rich compost from organic waste provides natural fertilizer that improves soil structure and fertility without chemical additives.</p>

      <h3>Cover Crops</h3>
      <p>Planting cover crops during off-seasons prevents soil erosion, adds organic matter, and can fix nitrogen naturally.</p>

      <h2>Benefits of Sustainable Farming</h2>
      <p>Sustainable farming practices offer numerous benefits:</p>
      <ul>
        <li>Improved soil health and fertility</li>
        <li>Reduced environmental impact</li>
        <li>Better crop yields over time</li>
        <li>Lower input costs</li>
        <li>Healthier produce</li>
        <li>Enhanced biodiversity</li>
      </ul>

      <h2>Implementation at MFPCL</h2>
      <p>At MFPCL, we've helped over 500 farmers transition to sustainable farming practices. Our members have seen an average yield increase of 25% while reducing input costs by 30%. We provide comprehensive training, ongoing support, and market linkages for organic produce.</p>

      <h2>Getting Started</h2>
      <p>If you're interested in transitioning to sustainable farming, start with small steps:</p>
      <ol>
        <li>Assess your current practices</li>
        <li>Join our training programs</li>
        <li>Start with one sustainable technique</li>
        <li>Monitor and measure results</li>
        <li>Gradually expand sustainable practices</li>
      </ol>

      <p>Remember, sustainable farming is a journey, not a destination. Every small step towards sustainability makes a difference for our environment and future generations.</p>
    `,
    author: "Dr. Rajesh Kumar",
    date: "2024-05-28",
    category: "Sustainable Farming",
    readTime: "8 min read",
    views: 245,
    image: "/placeholder.svg",
    tags: ["Sustainable Farming", "Organic", "Crop Rotation", "Soil Health"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Header />
      
      {/* Back Button */}
      <div className="container mx-auto px-6 py-6">
        <Link to="/news/blogs" className="inline-flex items-center text-green-600 hover:text-green-700 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blogs
        </Link>
      </div>

      {/* Blog Header */}
      <section className="container mx-auto px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-4 bg-green-100 text-green-800">{blog.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{blog.title}</h1>
          
          <div className="flex items-center justify-between mb-6 text-gray-600">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {blog.author}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(blog.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {blog.views} views
              </div>
              <span>{blog.readTime}</span>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Like
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </div>

          <img 
            src={blog.image} 
            alt={blog.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
          />
        </div>
      </section>

      {/* Blog Content */}
      <section className="container mx-auto px-6 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          </div>

          {/* Tags */}
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-lg font-semibold mb-4">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <Badge key={tag} variant="outline">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-green-50 border-green-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                Ready to Start Your Sustainable Farming Journey?
              </h3>
              <p className="text-green-700 mb-6">
                Join MFPCL and get access to expert training, resources, and a community of like-minded farmers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Join MFPCL Today
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-600">
                  Browse Training Courses
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogDetails;
