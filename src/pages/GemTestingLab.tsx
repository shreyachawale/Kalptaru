import {
  Award,
  Shield,
  Diamond,
  FileCheck,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";

interface FeatureItem {
  icon: LucideIcon;
  text: string;
}

interface StatItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

const features: FeatureItem[] = [
  { icon: Award, text: "Gemstone testing and certification services" },
  { icon: Diamond, text: "Certification of CVD diamonds" },
  { icon: Shield, text: "Certification support for hallmarked jewellery goods" },
  {
    icon: FileCheck,
    text: "Reliable documentation for trade, retail, and consumer confidence",
  },
];

const stats: StatItem[] = [
  { icon: Diamond, label: "Certified Gems", value: "15K+" },
  { icon: Shield, label: "Lab Standards", value: "ISO" },
  { icon: FileCheck, label: "Reports Issued", value: "20K+" },
  { icon: Award, label: "Trust Score", value: "5.0" },
];

export default function GemTestingLab(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              {/* <div className="inline-block">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#372D67]/5 border border-[#372D67]/10">
                  <Diamond className="w-4 h-4 text-[#372D67]" />
                  <span className="text-sm font-medium text-[#372D67] tracking-wide">
                    CERTIFICATION SERVICES
                  </span>
                </div>
              </div> */}

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#372D67] leading-tight tracking-tight">
                Gem Testing Lab & <br/> Jewellery Certification
                {/* <span className="font-normal">Jewellery Certification</span> */}
              </h1>

              <p className="text-lg sm:text-xl text-[#372D67]/70 font-light leading-relaxed max-w-xl">
                Our in-house gem testing laboratory ensures accuracy, trust, and
                compliance.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4 pt-4">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-10 h-10 rounded-lg bg-[#AC9A84]/10 flex items-center justify-center group-hover:bg-[#AC9A84]/20 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-[#AC9A84]" />
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-[#372D67]/80 font-light leading-relaxed pt-1.5">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button className="group inline-flex items-center gap-3 px-8 py-4 bg-[#372D67] text-white rounded-full font-medium text-base tracking-wide hover:bg-[#372D67]/90 transition-all duration-300 hover:gap-4 shadow-lg hover:shadow-xl">
                Learn more
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Card */}
          <div className="relative lg:pl-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-[#372D67]/5 via-[#AC9A84]/5 to-transparent rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-[#372D67] to-[#372D67]/80 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                      <Award className="w-8 h-8 text-[#AC9A84]" />
                    </div>
                    <div>
                      <div className="text-4xl font-light text-white">100%</div>
                      <div className="text-sm text-white/70 font-light tracking-wide">
                        Accuracy Rate
                      </div>
                    </div>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;

                      return (
                        <div key={index} className="space-y-2">
                          <Icon className="w-6 h-6 text-[#AC9A84]" />
                          <div className="text-2xl font-light text-white">
                            {stat.value}
                          </div>
                          <div className="text-xs text-white/60 font-light tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
