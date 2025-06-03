import React from 'react';
import { Sprout, Phone, Mail, MapPin, Facebook, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Footer = () => {
  return <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-green-600 p-2 rounded-lg">
                <Sprout className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">MFPCL</h3>
                <p className="text-sm text-green-200">Manbhum Farmers Producer Company Limited</p>
              </div>
            </div>
            <p className="text-green-200 text-sm">
              Empowering farmers through collective growth, sustainable practices, and fair market access. Building a prosperous farming community together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-green-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-green-200 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/news/training" className="text-green-200 hover:text-white transition-colors">Training Programs</a></li>
              <li><a href="/news/events" className="text-green-200 hover:text-white transition-colors">Events & Webinars</a></li>
              <li><a href="/certificates" className="text-green-200 hover:text-white transition-colors">Certificates</a></li>
              <li><a href="/news/blogs" className="text-green-200 hover:text-white transition-colors">News & Blog</a></li>
              <li><a href="/store" className="text-green-200 hover:text-white transition-colors">Store</a></li>
              <li><a href="/gallery" className="text-green-200 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 text-green-400 mt-1" />
                <div>
                  <p className="text-green-200">+91 12345 67890</p>
                  <p className="text-green-200">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-green-400 mt-1" />
                <p className="text-green-200">info@mfpcl.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <p className="text-green-200">Manbhum District, West Bengal, India</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-3">
              <div className="flex space-x-3">
                <Button size="sm" variant="outline" className="border-green-600 text-green-500 hover:bg-green-600 hover:text-white">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-green-600 text-green-500 hover:bg-green-600 hover:text-white">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-green-600 text-green-500 hover:bg-green-600 hover:text-white">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2 text-sm">
                <Button variant="outline" size="sm" className="w-full border-green-600 hover:bg-green-600 text-green-500 hover:text-white">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Join WhatsApp Community
                </Button>
                <p className="text-green-200 text-xs">
                  Join our WhatsApp group for instant updates and community support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-green-200 text-sm">
              © 2025 Manbhum Farmers Producer Company Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-green-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-green-200 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;