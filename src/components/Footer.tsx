import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200" style={{ backgroundColor: '#372D67' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-light tracking-wider mb-6" style={{ color: '#AC9A84' }}>
              KALPTARU ACADEMY
            </h3>
            <p className="text-sm font-light leading-relaxed" style={{ color: '#FFFFFF', opacity: 0.8 }}>
              Leading the way in jewellery education with comprehensive courses and expert guidance.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider mb-6" style={{ color: '#AC9A84' }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-sm font-light transition-opacity hover:opacity-70"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#courses"
                  className="text-sm font-light transition-opacity hover:opacity-70"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#gem-testing-lab"
                  className="text-sm font-light transition-opacity hover:opacity-70"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                >
                  Gem Testing Lab
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="text-sm font-light transition-opacity hover:opacity-70"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider mb-6" style={{ color: '#AC9A84' }}>
              EDUCATION
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#e-learning"
                  className="text-sm font-light transition-opacity hover:opacity-70"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                >
                  E-Learning
                </a>
              </li>
              <li>
                <a
                  href="#course-schedules"
                  className="text-sm font-light transition-opacity hover:opacity-70"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                >
                  Course Schedules
                </a>
              </li>
              <li>
                <a
                  href="#enrollment-form"
                  className="text-sm font-light transition-opacity hover:opacity-70"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                >
                  Enroll Now
                </a>
              </li>
              <li>
                <a
                  href="#download-brochure"
                  className="text-sm font-light transition-opacity hover:opacity-70"
                  style={{ color: '#FFFFFF', opacity: 0.8 }}
                >
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium tracking-wider mb-6" style={{ color: '#AC9A84' }}>
              CONTACT
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 mt-1" style={{ color: '#AC9A84' }} />
                <span className="text-sm font-light" style={{ color: '#FFFFFF', opacity: 0.8 }}>
                  123 Jewellery District, Mumbai, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4" style={{ color: '#AC9A84' }} />
                <span className="text-sm font-light" style={{ color: '#FFFFFF', opacity: 0.8 }}>
                  +91 123 456 7890
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4" style={{ color: '#AC9A84' }} />
                <span className="text-sm font-light" style={{ color: '#FFFFFF', opacity: 0.8 }}>
                  info@kalptaruacademy.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t" style={{ borderColor: '#AC9A84', opacity: 0.2 }}>
          <p className="text-center text-sm font-light" style={{ color: '#FFFFFF', opacity: 0.6 }}>
            © 2024 Kalptaru Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
