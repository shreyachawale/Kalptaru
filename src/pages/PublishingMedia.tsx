import {
  BookOpen,
  Image,
  Share2,
  Eye,
  TrendingUp,
  FileText,
  type LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: BookOpen,
    title: "Digital Jewellery Catalogues",
    description: "For online and offline marketing",
  },
  {
    icon: FileText,
    title: "Physical Catalogues",
    description: "Premium coffee table books",
  },
  {
    icon: Share2,
    title: "Digital Branding",
    description: "Promotions across social media platforms",
  },
  {
    icon: Eye,
    title: "Visual Storytelling",
    description: "Enhance brand identity and customer engagement",
  },
  {
    icon: TrendingUp,
    title: "Ads & Performance Marketing",
    description: "Data-driven campaigns for growth",
  },
  {
    icon: Image,
    title: "PR & Press Releases",
    description: "Strategic media outreach",
  },
];

export default function PublishingMedia(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-32">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-[#372D67] mb-8 leading-tight tracking-tight">
            Publishing & Media Services for Jewellery Brands
          </h1>
          <p className="text-lg md:text-xl text-gray-800 leading-relaxed font-light">
            We offer professional publishing and media services to help jewellery
            brands enhance their market presence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group p-8 border border-[#AC9A84]/20 hover:border-[#372D67]/40 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6">
                  <Icon
                    className="w-10 h-10 text-[#372D67] group-hover:text-[#AC9A84] transition-colors duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl md:text-2xl font-serif text-[#372D67] mb-3 leading-snug">
                  {service.title}
                </h3>

                <p className="text-gray-800 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 md:mt-32 text-center">
          <button className="px-10 py-4 bg-[#372D67] text-white hover:bg-[#AC9A84] transition-colors duration-300 text-lg font-light tracking-wide">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
