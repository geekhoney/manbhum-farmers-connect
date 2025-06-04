
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sprout, Menu, X, User, LogOut, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Demo: set to true to show profile
  const location = useLocation();

  const handleLogout = () => {
    setIsLoggedIn(false);
    // Add logout logic here
  };

  return (
    <header className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-green-600 p-2 rounded-lg">
              <Sprout className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">MFPCL</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className={`text-gray-700 hover:text-green-600 transition-colors ${
                location.pathname === '/' ? 'text-green-600 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-gray-700 hover:text-green-600 transition-colors ${
                location.pathname === '/about' ? 'text-green-600 font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-gray-700 hover:text-green-600 transition-colors ${
                location.pathname === '/services' ? 'text-green-600 font-semibold' : ''
              }`}
            >
              Services
            </Link>

            {/* Content Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                Content <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border">
                <DropdownMenuItem asChild>
                  <Link to="/news/blogs" className="w-full">Blogs</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/gallery" className="w-full">Gallery</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/certificates" className="w-full">Certificates</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Training Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-green-600 transition-colors">
                Training <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border">
                <DropdownMenuItem asChild>
                  <Link to="/news/training" className="w-full">Courses</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/news/events" className="w-full">Events</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/store"
              className={`text-gray-700 hover:text-green-600 transition-colors ${
                location.pathname === '/store' ? 'text-green-600 font-semibold' : ''
              }`}
            >
              Store
            </Link>
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-green-600 transition-colors ${
                location.pathname === '/contact' ? 'text-green-600 font-semibold' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Auth Section */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/profile">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Profile
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" size="sm">Login</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">Sign Up</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 mt-4">
              <Link
                to="/"
                className={`text-gray-700 hover:text-green-600 transition-colors ${
                  location.pathname === '/' ? 'text-green-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-gray-700 hover:text-green-600 transition-colors ${
                  location.pathname === '/about' ? 'text-green-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`text-gray-700 hover:text-green-600 transition-colors ${
                  location.pathname === '/services' ? 'text-green-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              {/* Mobile Content Submenu */}
              <div className="pl-4 space-y-2">
                <p className="text-gray-500 text-sm font-medium">Content</p>
                <Link
                  to="/news/blogs"
                  className="text-gray-700 hover:text-green-600 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blogs
                </Link>
                <Link
                  to="/gallery"
                  className="text-gray-700 hover:text-green-600 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </Link>
                <Link
                  to="/certificates"
                  className="text-gray-700 hover:text-green-600 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Certificates
                </Link>
              </div>

              {/* Mobile Training Submenu */}
              <div className="pl-4 space-y-2">
                <p className="text-gray-500 text-sm font-medium">Training</p>
                <Link
                  to="/news/training"
                  className="text-gray-700 hover:text-green-600 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Courses
                </Link>
                <Link
                  to="/news/events"
                  className="text-gray-700 hover:text-green-600 transition-colors block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Events
                </Link>
              </div>

              <Link
                to="/store"
                className={`text-gray-700 hover:text-green-600 transition-colors ${
                  location.pathname === '/store' ? 'text-green-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </Link>
              <Link
                to="/contact"
                className={`text-gray-700 hover:text-green-600 transition-colors ${
                  location.pathname === '/contact' ? 'text-green-600 font-semibold' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              {/* Mobile Auth */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                {isLoggedIn ? (
                  <>
                    <Link to="/profile" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <User className="h-4 w-4 mr-2" />
                        Profile
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm" onClick={handleLogout} className="w-full justify-start">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full">Login</Button>
                    </Link>
                    <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                      <Button size="sm" className="w-full bg-green-600 hover:bg-green-700">Sign Up</Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
