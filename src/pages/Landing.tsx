import { ArrowRight, Award, BookOpen, Users, Globe } from 'lucide-react';

export default function Landing() {
  return (
    <div>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: '#372D67', opacity: 0.7 }}></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-5xl md:text-7xl font-light tracking-wide mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Master the Art of
            <br />
            <span className="font-normal" style={{ color: '#AC9A84' }}>
              Jewellery Excellence
            </span>
          </h1>
          <p
            className="text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto"
            style={{ color: '#FFFFFF', opacity: 0.9 }}
          >
            Leading institution for comprehensive jewellery education, gemology, and professional development
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#courses"
              className="px-8 py-4 text-sm font-light tracking-wider transition-all"
              style={{
                backgroundColor: '#AC9A84',
                color: '#FFFFFF',
              }}
            >
              EXPLORE COURSES
            </a>
            <a
              href="#about"
              className="px-8 py-4 text-sm font-light tracking-wider border transition-all"
              style={{
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
              }}
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Get a Demo',
                description: 'Award-winning programs recognized globally',
              },
              {
                icon: Users,
                title: 'Overview of the Courses',
                description: 'Learn from industry-leading professionals',
              },
              {
                icon: BookOpen,
                title: 'Seminars',
                description: 'From basics to advanced specialization',
              },
              {
                icon: Globe,
                title: 'Webinars',
                description: 'Internationally accredited certifications',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6" style={{ backgroundColor: '#372D67'}}>
                  <feature.icon className="w-8 h-8" strokeWidth={1} style={{ color: '#FFFFFF', opacity: 0.8 }} />
                </div>
                <h3 className="text-lg font-medium mb-3 tracking-wide" style={{ color: '#372D67' }}>
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
            <h2 className="text-3xl md:text-6xl font-light tracking-wide mb-4" style={{ color: '#372D67' }}>
              Our Courses
            </h2>
            <p className="text-lg font-light" style={{ color: '#372D67', opacity: 0.8 }}>
              Discover our most sought-after courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                image: 'https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Certificate',
                description: 'Master the science of gem identification and grading',
              },
              {
                image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Diploma',
                description: 'Learn design principles and CAD technology',
              },
              {
                image: 'https://images.pexels.com/photos/6177652/pexels-photo-6177652.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'Graduate',
                description: 'Professional certification in diamond assessment',
              },
              {
                image: 'https://images.pexels.com/photos/6177652/pexels-photo-6177652.jpeg?auto=compress&cs=tinysrgb&w=800',
                title: 'PGDM',
                description: 'Professional certification in diamond assessment',
              },
            ].map((program, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="overflow-hidden mb-6">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-light tracking-wide mb-3" style={{ color: '#372D67' }}>
                  {program.title}
                </h3>
                <p className="text-sm font-light leading-relaxed mb-4" style={{ color: '#372D67', opacity: 0.7 }}>
                  {program.description}
                </p>
                <a
                  href="#courses"
                  className="inline-flex items-center space-x-2 text-sm font-light tracking-wide transition-opacity hover:opacity-70"
                  style={{ color: '#AC9A84' }}
                >
                  <span>LEARN MORE</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6" style={{ color: '#372D67' }}>
                Why Choose
                <br />
                <span className="font-normal" style={{ color: '#AC9A84' }}>
                  Kalptaru Academy
                </span>
              </h2>
              <p className="text-base font-light leading-relaxed mb-8" style={{ color: '#372D67', opacity: 0.7 }}>
                With over two decades of excellence in jewellery education, we have established ourselves as the premier institution for aspiring gemologists, jewellery designers, and industry professionals.
              </p>
              <ul className="space-y-4">
                {[
                  'State-of-the-art gem testing laboratory',
                  'Industry-recognized certification programs',
                  'Hands-on practical training sessions',
                  'Career placement assistance',
                  'Flexible learning options including e-learning',
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-1.5 h-1.5 rounded-full mt-2" style={{ backgroundColor: '#AC9A84' }}></div>
                    <span className="text-sm font-light" style={{ color: '#372D67', opacity: 0.8 }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href="#enrollment-form"
                className="inline-block mt-8 px-8 py-4 text-sm font-light tracking-wider transition-all"
                style={{
                  backgroundColor: '#372D67',
                  color: '#FFFFFF',
                }}
              >
                ENROLL NOW
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/7689734/pexels-photo-7689734.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Student learning"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/5623046/pexels-photo-5623046.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Gem examination"
                className="w-full h-64 object-cover mt-8"
              />
              <img
                src="https://images.pexels.com/photos/5623121/pexels-photo-5623121.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Jewellery crafting"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.pexels.com/photos/6177651/pexels-photo-6177651.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Classroom"
                className="w-full h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: '#372D67' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light tracking-wide mb-6" style={{ color: '#FFFFFF' }}>
            Begin Your Journey Today
          </h2>
          <p className="text-lg font-light leading-relaxed mb-10" style={{ color: '#FFFFFF', opacity: 0.8 }}>
            Join thousands of successful graduates who have transformed their passion for jewellery into rewarding careers
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#download-brochure"
              className="px-8 py-4 text-sm font-light tracking-wider transition-all"
              style={{
                backgroundColor: '#AC9A84',
                color: '#FFFFFF',
              }}
            >
              DOWNLOAD BROCHURE
            </a>
            <a
              href="#enquiry-form"
              className="px-8 py-4 text-sm font-light tracking-wider border transition-all"
              style={{
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
              }}
            >
              ENQUIRE NOW
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
