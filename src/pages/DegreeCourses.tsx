import { ArrowRight } from 'lucide-react';

interface Course {
  title: string;
}

const DegreeCourses: React.FC = () => {
  const courses: Course[] = [
    { title: 'Gemology' },
    { title: 'Manual Jewellery Design' },
    { title: 'Computer Jewellery Designing with CAD Designing to CAM Development' },
    { title: 'Accounting Operations (Manufacturing to Retail)' },
    { title: 'Manufacturing Management' },
    { title: 'Marketing Operations' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#372D67] mb-6 sm:mb-8 tracking-tight">
            Degree Course In Jewellery
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed mb-8 sm:mb-10 px-4">
            Our degree courses are for those who find the jewellery industry to be their calling, especially if it's been in the generational line of work. We offer this course to those young minds who want to develop their area of expertise and produce high-quality goods right from the raw materials to the finished goods. This course is for those who want to learn all about jewellery and see themselves as part of the industry going forward.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-[#372D67] font-medium">
            <div className="text-center sm:text-left">
              <span className="text-sm sm:text-base">Eligibility: </span>
              <span className="text-sm sm:text-base">Below Graduation</span>
            </div>

            <div className="hidden sm:block w-px h-6 bg-[#AC9A84]"></div>

            <div className="text-center sm:text-left">
              <span className="text-sm sm:text-base">Duration: </span>
              <span className="text-sm sm:text-base">1 Year (Mon - Thu)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group border border-gray-200 hover:border-[#AC9A84] transition-all duration-300 p-8 sm:p-10 lg:p-12 bg-white hover:shadow-lg cursor-pointer"
            >
              <h3 className="text-xl sm:text-2xl font-serif text-[#372D67] leading-tight group-hover:text-[#AC9A84] transition-colors duration-300">
                {course.title}
              </h3>

              <div className="mt-6 sm:mt-8 flex items-center text-[#AC9A84] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm sm:text-base font-medium">Learn More</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <button className="bg-[#372D67] text-white px-8 sm:px-12 py-3 sm:py-4 text-sm sm:text-base font-medium tracking-wide hover:bg-[#AC9A84] transition-all duration-300 uppercase">
            View All Programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default DegreeCourses;
