import { FC } from "react";
import {
  Gem,
  Store,
  Factory,
  Lightbulb,
  TrendingUp,
  LucideIcon,
} from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const Consultancy: FC = () => {
  const services: Service[] = [
    {
      icon: Gem,
      title: "Brand Development & Positioning",
      description:
        "Strategic guidance to establish and elevate your jewellery brand identity in a competitive marketplace.",
    },
    {
      icon: Store,
      title: "Franchise & Chain Store Setup",
      description:
        "Comprehensive consultancy for expanding your retail presence through franchising and multi-location operations.",
    },
    {
      icon: Factory,
      title: "End-to-End Factory Setup",
      description:
        "Complete solutions from infrastructure planning and equipment selection to achieving finished product excellence.",
    },
    {
      icon: Lightbulb,
      title: "Product Development Optimization",
      description:
        "Enhance your designs with expert guidance on quality, finishing techniques, and market-ready excellence.",
    },
    {
      icon: TrendingUp,
      title: "Manufacturing Workflow Improvement",
      description:
        "Streamline operations and reduce costs through proven efficiency strategies and process optimization.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8"
            style={{ color: "#372D67" }}
          >
            Consultancy Services
          </h1>
          <p
            className="text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: "#372D67", opacity: 0.75 }}
          >
            Our consultancy division provides complete guidance for jewellery
            businesses at every stage of growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative p-8 sm:p-10 rounded-lg transition-all duration-300 hover:shadow-2xl"
                style={{
                  backgroundColor: index % 2 === 0 ? "#F9F8F6" : "transparent",
                  border:
                    index % 2 === 0 ? "none" : "1px solid #E5DFD5",
                }}
              >
                <div
                  className="absolute top-0 left-0 w-1 h-0 group-hover:h-full transition-all duration-500 rounded-l-lg"
                  style={{ backgroundColor: "#AC9A84" }}
                />

                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div
                    className="flex-shrink-0 p-3 rounded-full transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#372D67" }}
                  >
                    <Icon
                      className="w-6 h-6 sm:w-7 sm:h-7"
                      style={{ color: "#AC9A84" }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3
                      className="text-xl sm:text-2xl font-serif mb-3 sm:mb-4"
                      style={{ color: "#372D67" }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-base sm:text-lg leading-relaxed"
                      style={{ color: "#372D67", opacity: 0.7 }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 sm:mt-20 lg:mt-24 p-8 sm:p-12 lg:p-16 rounded-lg text-center"
          style={{ backgroundColor: "#372D67" }}
        >
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-serif mb-4 sm:mb-6"
            style={{ color: "#AC9A84" }}
          >
            Transform Your Jewellery Business
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl mb-8 max-w-3xl mx-auto"
            style={{ color: "#FFFFFF", opacity: 0.9 }}
          >
            Partner with our experienced consultants to unlock your business's
            full potential. From concept to execution, we provide the expertise
            you need to succeed.
          </p>
          <button
            className="px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              backgroundColor: "#AC9A84",
              color: "#372D67",
            }}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultancy;
