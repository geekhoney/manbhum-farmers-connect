
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { Menu, Sprout, Phone, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Store', href: '/store' },
    { name: 'Certificates', href: '/certificates' },
    { name: 'Contact', href: '/contact' }
  ];

  const newsSubMenu = [
    { name: 'Blogs', href: '/news/blogs' },
    { name: 'Events', href: '/news/events' },
    { name: 'Training', href: '/news/training' }
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
            
            {/* News Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-green-600 font-medium bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    News
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-2">
                      {newsSubMenu.map((item) => (
                        <NavigationMenuLink key={item.name} asChild>
                          <a
                            href={item.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                          >
                            {item.name}
                          </a>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
                
                {/* News submenu for mobile */}
                <div className="border-b border-gray-100">
                  <div className="text-gray-700 font-medium py-2">News</div>
                  {newsSubMenu.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 hover:text-green-600 py-1 pl-4 text-sm"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                
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
