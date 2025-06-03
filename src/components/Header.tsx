
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sprout, Menu, X, User, LogOut } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Demo: set to true to show profile
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Store', path: '/store' },
    { name: 'News', path: '/news/blogs' },
    { name: 'Training', path: '/news/training' },
    { name: 'Contact', path: '/contact' }
  ];

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
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-700 hover:text-green-600 transition-colors ${
                  location.pathname === item.path ? 'text-green-600 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
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
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-gray-700 hover:text-green-600 transition-colors ${
                    location.pathname === item.path ? 'text-green-600 font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
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
