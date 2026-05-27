import { ArrowRight } from 'lucide-react';
import CoursePurchaseButton from '../components/CoursePurchaseButton';

const DiplomaCourse: React.FC = () => {
  const courseModules: string[] = [
    'Handmade Jewellery Production',
    'Jewellery Casting',
    'Handmade and Machinery Jewellery Production',
    'Coin/Bar Manufacturing Process',
    'Refinery'
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16 md:mb-24">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 md:mb-12 text-[#372D67] leading-tight">
            Diploma In Jewellery<br />Manufacturing
          </h1>

          <p className="text-base md:text-lg leading-relaxed text-[#372D67]/70 max-w-4xl mx-auto mb-12 md:mb-16 font-light">
            Our diploma course is offered to artisans or entrepreneurs who want to learn manufacturing
            of jewellery products, machinery, and overall production. This course is best suited for those
            who want knowledge of gold, silver, platinum, software that is used for designing as well as
            hallmarking processes with special attention to gold and diamonds as well. This course will
            kickstart your basics to learning about the jewellery creation process.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 text-[#372D67] mb-16 md:mb-20">
            <div className="text-center">
              <span className="text-sm md:text-base font-normal text-[#AC9A84]">Eligibility</span>
              <p className="text-base md:text-lg mt-1 font-light">10th pass and above</p>
            </div>

            <div className="hidden sm:block w-px h-12 bg-[#AC9A84]/30"></div>

            <div className="text-center">
              <span className="text-sm md:text-base font-normal text-[#AC9A84]">Duration</span>
              <p className="text-base md:text-lg mt-1 font-light">6 Months (Fri - Sun)</p>
              <p className="text-sm md:text-base mt-1 font-light text-[#372D67]/60">
                10:00 AM - 1:00 PM
              </p>
            </div>
          </div>

          <CoursePurchaseButton courseId="diploma-jewellery-manufacturing" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-16 md:mb-20">
          {courseModules.map((module: string, index: number) => (
            <div
              key={index}
              className="group border border-[#372D67]/10 hover:border-[#AC9A84]/50 transition-all duration-300 p-8 md:p-10 rounded-sm"
            >
              <h3 className="text-xl md:text-2xl font-light text-[#372D67] leading-snug">
                {module}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-[#372D67] text-white px-8 md:px-12 py-4 md:py-5 text-sm md:text-base font-light tracking-wide hover:bg-[#AC9A84] transition-colors duration-300">
            VIEW ALL PROGRAMS
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiplomaCourse;
