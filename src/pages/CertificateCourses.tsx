import { ArrowRight } from 'lucide-react';

interface Course {
  title: string;
  duration?: string;
  subtitle?: string;
  extraText?: string;
  showButton?: boolean;
}

const CertificateCourses: React.FC = () => {
  const courses: Course[] = [
    // ORIGINAL COURSES
    { title: 'Jewellery Photography', duration: '36 Classes X 3 – 110 Hours', showButton: true },
    { title: 'Jewellery Hallmarking', duration: '36 Classes X 3 – 110 Hours', showButton: true },
    {
      title: 'Jewellery Online Marketing',
      subtitle: '(social media & more)',
      duration: '36 Classes X 3 – 110 Hours',
      showButton: true,
    },
    { title: 'How to Retail Increase Sales?', duration: '36 Classes X 3 – 110 Hours', showButton: true },
    {
      title: 'Jewellery Accounting',
      subtitle: '(GST Operations – Retail)',
      duration: '36 Classes X 3 – 110 Hours',
      showButton: true,
    },

    // COURSE HIGHLIGHT CARD (SAME STYLE)
    {
      title: 'Course Highlights',
      extraText:
        'Learn jewellery specific photography skills, make sure that you are hands-on with the product imagery and photoshoot techniques and create meaningful campaigns.',
    },

    // CAREER CARDS (ALL SAME STYLE)
    { title: 'Professional Jewellery Photographer' },
    { title: 'E-commerce Jewellery Photographer' },
    { title: 'Advertising & Campaign Photographer' },
    { title: 'Brand & Lookbook Photographer' },
    { title: 'Gemstone & Macro Photographer' },
    { title: 'Social Media Content Creator' },
    { title: 'Freelance Jewellery Photographer' },
    { title: 'In-house Brand Photographer' },
    { title: 'Visual Merchandising & Styling Professional' },
    { title: 'Photography Studio Owner / Entrepreneur' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-[#372D67] mb-4 sm:mb-6 tracking-wide">
            Certificate Courses
          </h1>
          <p className="font-light text-base sm:text-lg lg:text-xl text-[#372D67]/80 max-w-4xl mx-auto leading-relaxed px-4">
            Our certificate courses are designed to teach anyone a specialized technique that they wish to learn in an already existing industry and have a better understanding of their current machinery and processes. This course is suitable for those interested in manufacturing.
          </p>
        </div>

        {/* ELIGIBILITY */}
        <div className="mb-12 sm:mb-16">
          <p className="font-light text-base sm:text-lg text-[#372D67] text-center">
            <span className="font-normal">Eligibility:</span> 10th pass and above
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#AC9A84]/30 hover:border-[#AC9A84] transition-all duration-300 p-6 sm:p-8 lg:p-10 rounded-sm hover:shadow-lg"
            >
              <div className="mb-4">
                {/* EXACT SAME TITLE STYLE */}
                <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-light text-[#372D67] mb-2">
                  {course.title}
                  {course.subtitle && (
                    <span className="block text-lg sm:text-xl lg:text-2xl">
                      {course.subtitle}
                    </span>
                  )}
                </h3>

                {/* EXACT SAME DURATION STYLE */}
                {course.duration && (
                  <p className="font-light text-sm sm:text-base text-[#AC9A84] mt-4">
                    Duration: {course.duration}
                  </p>
                )}

                {/* SAME PARAGRAPH STYLE AS HEADER TEXT */}
                {course.extraText && (
                  <p className="font-light text-sm sm:text-base text-[#372D67]/80 leading-relaxed mt-4">
                    {course.extraText}
                  </p>
                )}
              </div>

              {course.showButton && (
                <button className="mt-4 sm:mt-6 inline-flex items-center text-sm sm:text-base font-light text-[#AC9A84] hover:text-[#372D67] transition-colors duration-300 group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-16 sm:mt-20 lg:mt-24 text-center">
          <div className="inline-block px-8 sm:px-12 py-4 sm:py-6 border border-[#372D67] hover:bg-[#372D67] hover:text-white transition-all duration-300 cursor-pointer rounded-sm">
            <span className="font-light text-base sm:text-lg tracking-wider">
              VIEW ALL PROGRAMS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCourses;
