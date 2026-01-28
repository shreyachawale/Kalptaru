import { Target, Eye, Gem, Users2, Trophy, Clock } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/5623046/pexels-photo-5623046.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: '#372D67', opacity: 0.75 }}></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide" style={{ color: '#FFFFFF' }}>
            About Us
          </h1>
          <p className="mt-4 text-lg font-light" style={{ color: '#FFFFFF', opacity: 0.9 }}>
            Shaping the future of jewellery education since 2000
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6" style={{ color: '#372D67' }}>
                Excellence in
                <br />
                <span className="font-normal" style={{ color: '#AC9A84' }}>
                  Jewellery Education
                </span>
              </h2>
              <p className="text-base font-light leading-relaxed mb-6" style={{ color: '#372D67', opacity: 0.7 }}>
                Kalptaru Academy was founded with a singular vision: to create a world-class institution that would set new standards in jewellery and gemology education. Over the years, we have grown into a respected name in the industry, known for our commitment to excellence and innovation.
              </p>
              <p className="text-base font-light leading-relaxed" style={{ color: '#372D67', opacity: 0.7 }}>
                Our comprehensive programs combine traditional craftsmanship with modern technology, ensuring our students are well-equipped to succeed in the dynamic world of jewellery. With state-of-the-art facilities and a faculty of industry experts, we provide an unparalleled learning experience.
              </p>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Students in classroom"
                className="w-full h-[500px] object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Target className="w-12 h-12" style={{ color: '#AC9A84' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-4 tracking-wide" style={{ color: '#372D67' }}>
                    Our Mission
                  </h3>
                  <p className="text-base font-light leading-relaxed" style={{ color: '#372D67', opacity: 0.7 }}>
                    To empower individuals with comprehensive knowledge and practical skills in gemology and jewellery, fostering creativity and professionalism that meets global industry standards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <Eye className="w-12 h-12" style={{ color: '#AC9A84' }} />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-4 tracking-wide" style={{ color: '#372D67' }}>
                    Our Vision
                  </h3>
                  <p className="text-base font-light leading-relaxed" style={{ color: '#372D67', opacity: 0.7 }}>
                    To be the leading jewellery education academy globally recognized for excellence, innovation, and the success of our graduates in shaping the future of the jewellery industry.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Jewellery close-up"
                className="w-full h-full object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4" style={{ color: '#372D67' }}>
              Why We Stand Apart
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Gem,
                title: 'Industry Expertise',
                description: 'Our faculty comprises seasoned professionals with decades of real-world experience in gemology, jewellery design, and diamond grading.',
              },
              {
                icon: Users2,
                title: 'Personalized Learning',
                description: 'Small batch sizes ensure individual attention and hands-on guidance from instructors throughout your learning journey.',
              },
              {
                icon: Trophy,
                title: 'Global Recognition',
                description: 'Our certifications are internationally recognized and valued by leading jewellery houses and gemological laboratories worldwide.',
              },
              {
                icon: Clock,
                title: 'Flexible Schedules',
                description: 'Weekend batches, evening classes, and comprehensive e-learning options accommodate working professionals and students alike.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6" style={{ backgroundColor: '#AC9A84', opacity: 0.1 }}>
                  <feature.icon className="w-10 h-10" style={{ color: '#372D67' }} />
                </div>
                <h3 className="text-xl font-light mb-4 tracking-wide" style={{ color: '#372D67' }}>
                  {feature.title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: '#372D67', opacity: 0.7 }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#F9F8F6' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-4" style={{ color: '#372D67' }}>
              Our Facilities
            </h2>
            <p className="text-lg font-light" style={{ color: '#372D67', opacity: 0.7 }}>
              World-class infrastructure for comprehensive learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/5623121/pexels-photo-5623121.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Advanced Laboratory',
                description: 'Equipped with the latest gemological instruments and testing equipment',
              },
              {
                image: 'https://images.pexels.com/photos/8190804/pexels-photo-8190804.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Design Studio',
                description: 'Modern CAD workstations and traditional design tools',
              },
              {
                image: 'https://images.pexels.com/photos/6177651/pexels-photo-6177651.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Smart Classrooms',
                description: 'Interactive learning spaces with audio-visual aids',
              },
              {
                image: 'https://images.pexels.com/photos/5623046/pexels-photo-5623046.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Resource Library',
                description: 'Extensive collection of books, journals, and digital resources',
              },
            ].map((facility, index) => (
              <div key={index} className="bg-white overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-xl font-light mb-3 tracking-wide" style={{ color: '#372D67' }}>
                    {facility.title}
                  </h3>
                  <p className="text-sm font-light leading-relaxed" style={{ color: '#372D67', opacity: 0.7 }}>
                    {facility.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#372D67' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '24+', label: 'Years of Excellence' },
              { number: '5000+', label: 'Graduates' },
              { number: '50+', label: 'Expert Faculty' },
              { number: '15+', label: 'Course Programs' },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-light mb-2" style={{ color: '#AC9A84' }}>
                  {stat.number}
                </div>
                <div className="text-sm font-light tracking-wide" style={{ color: '#FFFFFF', opacity: 0.8 }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6" style={{ color: '#372D67' }}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg font-light leading-relaxed mb-10" style={{ color: '#372D67', opacity: 0.7 }}>
            Discover how Kalptaru Academy can help you achieve your goals in the jewellery industry
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#courses"
              className="px-8 py-4 text-sm font-light tracking-wider transition-all"
              style={{
                backgroundColor: '#372D67',
                color: '#FFFFFF',
              }}
            >
              VIEW COURSES
            </a>
            <a
              href="#enquiry-form"
              className="px-8 py-4 text-sm font-light tracking-wider border transition-all"
              style={{
                borderColor: '#372D67',
                color: '#372D67',
              }}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
