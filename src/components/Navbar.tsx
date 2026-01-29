import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const educationRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (educationRef.current && !educationRef.current.contains(event.target as Node)) {
        setEducationOpen(false);
      }
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const educationLinks = [
    {
      name: 'Courses',
      subLinks: [
        { name: 'Post Graduate Degree', href: '#post-graduate-degree' },
        { name: 'Diploma Course', href: '#diploma-course' },
        { name: 'Degree Courses', href: '#degree-courses' },
        { name: 'Certificate Courses', href: '#certificate-courses' },
      ],
    },
    { name: 'Course Schedules', href: '#course-schedules' },
    { name: 'E-Learning', href: '#e-learning' },
    { name: 'Tuition Fees', href: '#tuition-fees' },
    { name: 'Enrollment Form', href: '#enrollment-form' },
    { name: 'Upload Resume', href: '#upload-resume' },
    { name: 'Download Brochure', href: '#download-brochure' },
  ];

  const servicesLinks = [
    { name: 'Consultancy', href: '#consultancy' },
    { name: 'Publishing & Media', href: '#publishing-media' },
    { name: 'Gem Testing Lab', href: '#gem-testing-lab' },
    { name: 'Jewellery Portal', href: '#jewellery-portal' },
    { name: 'Enquiry Form', href: '#enquiry-form' },
    { name: 'CSR', href: '#csr' },
    { name: 'Blog', href: '#blog' },
  ];

  return (
    <nav className="fixed w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#landing" className="flex items-center">
            <span className="text-2xl font-light tracking-wider" style={{ color: '#372D67' }}>
              KALPTARU ACADEMY
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a
              href="#landing"
              className={`text-sm tracking-wide transition-colors ${
                currentPage === 'landing' ? 'font-medium' : 'font-light'
              }`}
              style={{ color: currentPage === 'landing' ? '#372D67' : '#372D67' }}
            >
              HOME
            </a>

            <a
              href="#about"
              className={`text-sm tracking-wide transition-colors ${
                currentPage === 'about' ? 'font-medium' : 'font-light'
              }`}
              style={{ color: currentPage === 'about' ? '#372D67' : '#372D67' }}
            >
              ABOUT
            </a>

            <div className="relative" ref={educationRef}>
              <button
                onClick={() => {
                  setEducationOpen(!educationOpen);
                  setServicesOpen(false);
                }}
                className="flex items-center space-x-1 text-sm font-light tracking-wide transition-colors"
                style={{ color: '#372D67' }}
              >
                <span>EDUCATION</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${educationOpen ? 'rotate-180' : ''}`} />
              </button>

              {educationOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-100 z-50">
                  {educationLinks.map((link) =>
                    link.subLinks ? (
                      <div key={link.name} className="group relative">
                        <div className="block px-6 py-3 text-sm font-light tracking-wide transition-colors hover:bg-gray-50 cursor-default flex items-center justify-between" style={{ color: '#372D67' }}>
                          <span>{link.name}</span>
                          <ChevronDown className="w-4 h-4 ml-2" />
                        </div>
                        <div className="absolute left-full top-0 mt-0 ml-1 w-56 bg-white shadow-lg border border-gray-100 z-50 hidden group-hover:block">
                          {link.subLinks.map((sub) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setEducationOpen(false)}
                              className="block px-6 py-3 text-sm font-light tracking-wide transition-colors hover:bg-gray-50"
                              style={{ color: '#372D67' }}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setEducationOpen(false)}
                        className="block px-6 py-3 text-sm font-light tracking-wide transition-colors hover:bg-gray-50"
                        style={{ color: '#372D67' }}
                      >
                        {link.name}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>

            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => {
                  setServicesOpen(!servicesOpen);
                  setEducationOpen(false);
                }}
                className="flex items-center space-x-1 text-sm font-light tracking-wide transition-colors"
                style={{ color: '#372D67' }}
              >
                <span>SERVICES</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border border-gray-100">
                  {servicesLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setServicesOpen(false)}
                      className="block px-6 py-3 text-sm font-light tracking-wide transition-colors hover:bg-gray-50"
                      style={{ color: '#372D67' }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#login"
              className="px-6 py-2 text-sm font-light tracking-wide border transition-all"
              style={{
                color: '#372D67',
                borderColor: '#372D67'
              }}
            >
              LOGIN
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: '#372D67' }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#landing"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-light tracking-wide"
              style={{ color: '#372D67' }}
            >
              HOME
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-light tracking-wide"
              style={{ color: '#372D67' }}
            >
              ABOUT
            </a>

            <div>
              <button
                onClick={() => setEducationOpen(!educationOpen)}
                className="flex items-center justify-between w-full text-sm font-light tracking-wide"
                style={{ color: '#372D67' }}
              >
                <span>EDUCATION</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${educationOpen ? 'rotate-180' : ''}`} />
              </button>
              {educationOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {educationLinks.map((link) =>
                    link.subLinks ? (
                      <div key={link.name}>
                        <div className="block text-sm font-light tracking-wide cursor-default flex items-center justify-between" style={{ color: '#AC9A84' }}>
                          <span>{link.name}</span>
                          <ChevronDown className="w-4 h-4 ml-2" />
                        </div>
                        <div className="ml-4 mt-1 space-y-1">
                          {link.subLinks.map((sub) => (
                            <a
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block text-sm font-light tracking-wide"
                              style={{ color: '#AC9A84' }}
                            >
                              {sub.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm font-light tracking-wide"
                        style={{ color: '#AC9A84' }}
                      >
                        {link.name}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between w-full text-sm font-light tracking-wide"
                style={{ color: '#372D67' }}
              >
                <span>SERVICES</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {servicesLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-sm font-light tracking-wide"
                      style={{ color: '#AC9A84' }}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#login"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-light tracking-wide"
              style={{ color: '#372D67' }}
            >
              LOGIN
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
