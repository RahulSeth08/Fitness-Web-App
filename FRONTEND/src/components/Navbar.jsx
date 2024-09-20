import { useState } from 'react';
import { Menu, X } from 'lucide-react';
// import Image from 'next/image';
import logo from '../assets/logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-red-900 to-black text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <img src={logo} alt="Fitness Logo" width={60} height={60} className="rounded-full" />
          </div>
          <div className="hidden md:block flex-grow">
            <div className="flex justify-center space-x-8">
              {['Home', 'Classes', 'Trainers', 'Nutrition', 'Contact'].map((item) => (
                <a key={item} href="#" className="text-gray-300 hover:bg-red-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out">
              Join Now
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Classes', 'Trainers', 'Nutrition', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-gray-300 hover:bg-red-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {item}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-red-700">
            <button className="w-full text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-base font-medium transition duration-150 ease-in-out">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
