import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="p-1 rounded-full group-hover:bg-flamingo-50 transition-colors">
                <img 
                  src="/logo.png" 
                  alt="Little Flamingos Logo" 
                  className="h-10 w-10 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://api.dicebear.com/7.x/shapes/svg?seed=LittleFlamingos&backgroundColor=f472b6';
                  }}
                />
              </div>
              <span className="font-heading font-bold text-2xl text-sand-900">
                Little Flamingos
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-full text-sm font-semibold transition-colors ${
                  isActive(link.path)
                    ? 'bg-flamingo-50 text-flamingo-600'
                    : 'text-sand-800 hover:bg-sand-100 hover:text-flamingo-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-4 bg-flamingo-500 hover:bg-flamingo-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sand-800 hover:text-flamingo-500 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-sand-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-base font-semibold ${
                  isActive(link.path)
                    ? 'bg-flamingo-50 text-flamingo-600'
                    : 'text-sand-800 hover:bg-sand-50 hover:text-flamingo-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-flamingo-500 hover:bg-flamingo-600 text-white px-6 py-3 rounded-full font-bold shadow-md"
              >
                Book a Tour
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
