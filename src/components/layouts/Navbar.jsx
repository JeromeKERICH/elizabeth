import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-opacity-90" style={{ fontFamily: 'Cambria, serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Sleek Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/" 
              className="flex items-center group"
              onClick={closeMobileMenu}
            >
              <span className="text-[#001F3F] text-2xl font-bold tracking-tight">
                <span className="group-hover:text-[#D4AF37] transition-colors">E</span>
                <span className="text-[#D4AF37] group-hover:text-[#001F3F] transition-colors">N</span>
              </span>
              <span className="ml-2 text-[#001F3F] text-sm font-light italic hidden sm:inline-block border-l border-[#D4AF37] pl-2">
                Your Growth Partner
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#001F3F] hover:text-[#D4AF37] focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link
              to="/"
              className="text-[#001F3F] hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-[#001F3F] hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              About
            </Link>
            <Link
              to="/coaching"
              className="text-[#001F3F] hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              Coaching
            </Link>
            <Link
              to="/shop"
              className="text-[#001F3F] hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              Shop
            </Link>
            <Link
              to="/contact"
              className="text-[#001F3F] hover:text-[#D4AF37] px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-[#D4AF37]"
            >
              Contact
            </Link>
            <Link
              to="/shop"
              className="ml-4 bg-gradient-to-r from-[#D4AF37] to-[#059669] hover:from-[#059669] hover:to-[#D4AF37] text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#FFF0F3] bg-opacity-95`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-3 rounded-md text-base font-medium text-[#001F3F] hover:text-[#D4AF37] hover:bg-white bg-opacity-50 transition-colors"
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-3 py-3 rounded-md text-base font-medium text-[#001F3F] hover:text-[#D4AF37] hover:bg-white bg-opacity-50 transition-colors"
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/coaching"
            className="block px-3 py-3 rounded-md text-base font-medium text-[#001F3F] hover:text-[#D4AF37] hover:bg-white bg-opacity-50 transition-colors"
            onClick={closeMobileMenu}
          >
            Coaching
          </Link>
          <Link
            to="/shop"
            className="block px-3 py-3 rounded-md text-base font-medium text-[#001F3F] hover:text-[#D4AF37] hover:bg-white bg-opacity-50 transition-colors"
            onClick={closeMobileMenu}
          >
            Shop
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-3 rounded-md text-base font-medium text-[#001F3F] hover:text-[#D4AF37] hover:bg-white bg-opacity-50 transition-colors"
            onClick={closeMobileMenu}
          >
            Contact
          </Link>
          <Link
            to="/shop"
            className="block mx-3 px-3 py-3 rounded-md text-base font-medium text-center text-white bg-gradient-to-r from-[#D4AF37] to-[#059669] hover:from-[#059669] hover:to-[#D4AF37] transition-all duration-300 shadow-md"
            onClick={closeMobileMenu}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;