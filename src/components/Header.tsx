
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Sprout, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'News/Blog', href: '#' },
    { name: 'Store', href: '#' },
    { name: 'Training', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Certificates', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-green-100 sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Clickable */}
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="bg-green-600 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-green-800">MFPCL</h1>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
              <Phone className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="sm" className="text-gray-700 hover:text-green-600">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-100"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white">
                  <Phone className="h-4 w-4 mr-2" />
                  Contact Us
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
