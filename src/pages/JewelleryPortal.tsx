export default function JewelleryPortal(): JSX.Element {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div className="mb-8 md:mb-12">
            <span className="inline-block px-6 py-2 mb-6 text-sm tracking-[0.3em] uppercase bg-[#372D67] text-white font-light">
              Coming Soon
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#372D67] mb-6 leading-tight">
              Jewellery Portal
            </h1>

            <p className="text-xl md:text-2xl text-[#AC9A84] font-light tracking-wide mb-12">
              B2C Platform for Members
            </p>
          </div>

          <div className="max-w-3xl space-y-8 mb-12">
            <p className="text-lg md:text-xl text-[#372D67] leading-relaxed font-light">
              Kalptaru provides a dedicated jewellery portal to support
              business-to-consumer needs.
            </p>

            <div className="border-t border-b border-[#AC9A84]/30 py-8 my-8">
              <p className="text-base md:text-lg text-[#372D67] font-light mb-2">
                Trademark registered under
              </p>
              <p className="text-2xl md:text-3xl font-serif text-[#AC9A84]">
                Jewelindiamart.com
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              {/* Card 1 */}
              <div className="p-6 bg-[#372D67]/5 rounded-sm">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#372D67] rounded-sm">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <p className="text-[#372D67] leading-relaxed font-light">
                  India's first jewellery marketplace with end to end security
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-[#372D67]/5 rounded-sm">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#AC9A84] rounded-sm">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <p className="text-[#372D67] leading-relaxed font-light">
                  Exclusive B2C jewellery platform for Kalptaru members
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-6 bg-[#372D67]/5 rounded-sm">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#AC9A84] rounded-sm">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <p className="text-[#372D67] leading-relaxed font-light">
                  Facilitates jewellery buying, selling, and business growth
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-6 bg-[#372D67]/5 rounded-sm">
                <div className="w-12 h-12 mb-4 flex items-center justify-center bg-[#372D67] rounded-sm">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
                <p className="text-[#372D67] leading-relaxed font-light">
                  Supports digital expansion for jewellery professionals and
                  retailers
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <button className="px-10 py-4 bg-[#372D67] text-white text-sm tracking-[0.2em] uppercase hover:bg-[#AC9A84] transition-colors duration-300 font-light">
              Notify Me
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#AC9A84]/30 py-8 text-center">
        <p className="text-[#AC9A84] text-sm tracking-wider font-light">
          © {new Date().getFullYear()} Kalptaru. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
