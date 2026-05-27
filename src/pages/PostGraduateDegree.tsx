import { ArrowRight } from 'lucide-react';
import CoursePurchaseButton from '../components/CoursePurchaseButton';

interface Module {
  title: string;
  points: string[];
}

const PostGraduateDegree: React.FC = () => {
  const modules: Module[] = [
    {
      title: 'Introduction',
      points: [
        'An overview of the jewellery industry',
        'Understanding the role of jewellery management',
        'Introduction to key concepts and terminologies'
      ]
    },
    {
      title: 'Jewellery History',
      points: [
        'Exploring the rich history of jewellery',
        'Understanding cultural influences on jewellery design',
        'Evolution of jewellery styles over time'
      ]
    },
    {
      title: 'Jewellery Hallmarking & Testing',
      points: [
        'Understanding the process of hallmarking',
        'Quality testing of jewellery',
        'Legal regulations and standards'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#372D67] mb-8 leading-tight">
            Post Graduate Diploma In<br />Jewellery Management
          </h1>

          <p className="text-[#4A6FA5] text-base md:text-lg max-w-5xl mx-auto mb-12 leading-relaxed">
            Our PGJDM degree course offers you a better and advanced understanding of the levels of complex processes in the industry and how the market functions. This course is for those who want to add to their existing level of knowledge both theoretical and practical. This course is suitable for those looking to enhance their career positioning in the hierarchy of the jewellery management industry and is equivalent to an MBA.
          </p>

          <div className="space-y-3 text-[#372D67] text-base md:text-lg">
            <p>
              <span className="font-semibold">Eligibility:</span>{' '}
              <span className="text-[#4A6FA5]">Graduate from any jewellery/design or management</span>
            </p>
            <p>
              <span className="font-semibold">Duration:</span>{' '}
              <span className="text-[#4A6FA5]">3 Yrs (Mon - Thu) 10am - 4:30pm</span>
            </p>
          </div>

          <CoursePurchaseButton courseId="post-graduate-jewellery-management" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module: Module, index: number) => (
            <div
              key={index}
              className="border border-gray-200 p-8 hover:border-[#4A6FA5] transition-colors duration-300"
            >
              <h3 className="text-2xl font-serif text-[#372D67] mb-6">
                {module.title}
              </h3>
              <ul className="space-y-4">
                {module.points.map((point: string, idx: number) => (
                  <li key={idx} className="text-[#4A6FA5] leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center gap-2 bg-[#372D67] text-white px-10 py-4 hover:bg-opacity-90 transition-all duration-300 text-lg">
            VIEW FULL PROGRAM
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostGraduateDegree;
