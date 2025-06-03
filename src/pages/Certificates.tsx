
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Download, 
  Eye, 
  Calendar, 
  Shield, 
  CheckCircle, 
  Star,
  FileText,
  Globe,
  Leaf
} from 'lucide-react';

const Certificates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Certificates', count: 15 },
    { id: 'organic', name: 'Organic Certifications', count: 6 },
    { id: 'quality', name: 'Quality Standards', count: 4 },
    { id: 'awards', name: 'Awards & Recognition', count: 3 },
    { id: 'compliance', name: 'Compliance Certificates', count: 2 }
  ];

  const certificates = [
    {
      id: 1,
      title: "Organic Farming Certification",
      category: "organic",
      issuer: "National Organic Standards Board",
      issueDate: "2024-01-15",
      validUntil: "2026-01-15",
      status: "Active",
      description: "Certified for organic farming practices according to national standards",
      image: "https://images.unsplash.com/photo-1586882829491-b81178aa622e?w=400&h=300&fit=crop",
      benefits: ["Chemical-free farming", "Premium pricing", "Export eligibility"],
      verificationCode: "ORG-MFPCL-2024-001"
    },
    {
      id: 2,
      title: "ISO 9001:2015 Quality Management",
      category: "quality",
      issuer: "International Organization for Standardization",
      issueDate: "2023-11-20",
      validUntil: "2026-11-20",
      status: "Active",
      description: "Quality management system certification for agricultural operations",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      benefits: ["Quality assurance", "Process improvement", "Customer satisfaction"],
      verificationCode: "ISO-MFPCL-2023-QMS"
    },
    {
      id: 3,
      title: "Best Farmer Producer Company Award",
      category: "awards",
      issuer: "Ministry of Agriculture, Government of India",
      issueDate: "2023-12-10",
      validUntil: "Lifetime",
      status: "Achieved",
      description: "Recognition for outstanding contribution to farmer welfare and agricultural development",
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=400&h=300&fit=crop",
      benefits: ["Government recognition", "Priority support", "Credibility boost"],
      verificationCode: "GOI-AWARD-2023-FPC"
    },
    {
      id: 4,
      title: "Food Safety Management System",
      category: "quality",
      issuer: "Food Safety and Standards Authority of India",
      issueDate: "2023-09-15",
      validUntil: "2025-09-15",
      status: "Active",
      description: "Certification for maintaining food safety standards in processing and storage",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      benefits: ["Food safety compliance", "Market access", "Consumer trust"],
      verificationCode: "FSSAI-MFPCL-2023-FSMS"
    },
    {
      id: 5,
      title: "Sustainable Agriculture Certification",
      category: "organic",
      issuer: "Sustainable Agriculture Network",
      issueDate: "2023-08-20",
      validUntil: "2025-08-20",
      status: "Active",
      description: "Recognition for implementing sustainable farming practices and environmental conservation",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop",
      benefits: ["Environmental protection", "Sustainability recognition", "Premium markets"],
      verificationCode: "SAN-MFPCL-2023-SUST"
    },
    {
      id: 6,
      title: "Export License for Agricultural Products",
      category: "compliance",
      issuer: "Directorate General of Foreign Trade",
      issueDate: "2023-07-10",
      validUntil: "2025-07-10",
      status: "Active",
      description: "Authorization to export agricultural products to international markets",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      benefits: ["International trade", "Higher revenue", "Global market access"],
      verificationCode: "DGFT-MFPCL-2023-EXP"
    }
  ];

  const filteredCertificates = selectedCategory === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Achieved': return 'bg-blue-100 text-blue-800';
      case 'Expired': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const certificationProcess = [
    {
      step: 1,
      title: "Application Submission",
      description: "Submit detailed application with required documents"
    },
    {
      step: 2,
      title: "Documentation Review",
      description: "Thorough review of farming practices and procedures"
    },
    {
      step: 3,
      title: "On-site Inspection",
      description: "Physical verification of farming operations and facilities"
    },
    {
      step: 4,
      title: "Compliance Assessment",
      description: "Evaluation against certification standards and requirements"
    },
    {
      step: 5,
      title: "Certificate Issuance",
      description: "Award of certificate upon successful completion"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Our Certifications</h1>
            <p className="text-xl text-green-100 mb-8">
              We are proud to maintain the highest standards in agricultural practices, 
              quality management, and sustainable farming through our comprehensive certifications.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                15+ Certificates
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Verified Standards
              </Badge>
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                Award Winner
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-green-600 hover:bg-green-700" : ""}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((cert) => (
              <Card key={cert.id} className="hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(cert.status)}>
                      <CheckCircle className="h-3 w-3 mr-1" />
                      {cert.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-green-800 mb-2">{cert.title}</CardTitle>
                  <p className="text-sm text-gray-600">{cert.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-4">
                    <div className="text-sm">
                      <strong className="text-gray-700">Issued by:</strong>
                      <p className="text-gray-600">{cert.issuer}</p>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <div>
                        <strong className="text-gray-700">Issue Date:</strong>
                        <p className="text-gray-600">{new Date(cert.issueDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <strong className="text-gray-700">Valid Until:</strong>
                        <p className="text-gray-600">
                          {cert.validUntil === 'Lifetime' ? 'Lifetime' : new Date(cert.validUntil).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <strong className="text-gray-700">Verification Code:</strong>
                      <p className="text-green-600 font-mono text-xs">{cert.verificationCode}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <strong className="text-gray-700 text-sm">Key Benefits:</strong>
                    <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
                      {cert.benefits.map((benefit, index) => (
                        <li key={index}>{benefit}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Certification Process</h2>
            <p className="text-xl text-gray-600">How we achieve and maintain our certifications</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {certificationProcess.map((process, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="bg-green-600 text-white font-bold text-lg w-12 h-12 rounded-full flex items-center justify-center">
                      {process.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{process.title}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Certifications Matter</h2>
            <p className="text-xl text-gray-600">The value our certifications bring to farmers and consumers</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Guaranteed quality standards for all our products and services"
              },
              {
                icon: Globe,
                title: "Market Access",
                description: "Access to premium domestic and international markets"
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Commitment to environmentally sustainable farming practices"
              },
              {
                icon: Star,
                title: "Premium Pricing",
                description: "Higher prices for certified organic and quality products"
              }
            ].map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Verify Our Certificates</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            All our certificates can be independently verified through the issuing authorities. 
            Contact us for verification codes and detailed documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              <FileText className="h-4 w-4 mr-2" />
              Request Verification
            </Button>
            <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              Download Certificate Pack
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Certificates;
