const FrameworkSection = () => {
    return (
      <section id="framework" className="py-5 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Minimalist Header */}
          <div className="text-center mb-10">
            <span className="inline-block text-[#D4AF37] font-medium mb-3 tracking-widest text-sm uppercase">
              The System
            </span>
            <h2 className="text-3xl md:text-5xl font-light text-[#001F3F] mb-4">
              <span className="font-bold">Courage to Grow</span>™
            </h2>
            <div className="w-20 h-0.5 bg-[#D4AF37] mx-auto mt-6"></div>
          </div>
  
          {/* Elevated 3-Column Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Pillar 1 */}
            <div className="group relative bg-white p-8 rounded-none border-t-4 border-[#D4AF37] hover:shadow-sm transition-all duration-500 h-full">
              <div className="absolute -top-8 left-8 w-16 h-16 bg-[#001F3F] text-white flex items-center justify-center text-2xl font-bold group-hover:bg-[#D4AF37] transition-colors">
                01
              </div>
              <h3 className="text-2xl font-light text-[#001F3F] mt-8 mb-5">
                <span className="font-bold">Mindset</span> First
              </h3>
              <p className="text-[#001F3F] text-opacity-80 leading-relaxed">
                Build unshakable confidence to speak, sell, and stand in your story.
              </p>
              <div className="mt-6 pt-6 border-t border-[#001F3F] border-opacity-10">
                <span className="text-[#D4AF37] text-sm font-medium">Core Module</span>
              </div>
            </div>
  
            {/* Pillar 2 */}
            <div className="group relative bg-white p-8 rounded-none border-t-4 border-[#059669] hover:shadow-sm transition-all duration-500 h-full">
              <div className="absolute -top-8 left-8 w-16 h-16 bg-[#001F3F] text-white flex items-center justify-center text-2xl font-bold group-hover:bg-[#059669] transition-colors">
                02
              </div>
              <h3 className="text-2xl font-light text-[#001F3F] mt-8 mb-5">
                <span className="font-bold">Aligned</span> Offers
              </h3>
              <p className="text-[#001F3F] text-opacity-80 leading-relaxed">
                Create magnetic, high-value offers that convert effortlessly.
              </p>
              <div className="mt-6 pt-6 border-t border-[#001F3F] border-opacity-10">
                <span className="text-[#059669] text-sm font-medium">Revenue Engine</span>
              </div>
            </div>
  
            {/* Pillar 3 */}
            <div className="group relative bg-white p-8 rounded-none border-t-4 border-[#001F3F] hover:shadow-sm transition-all duration-500 h-full">
              <div className="absolute -top-8 left-8 w-16 h-16 bg-[#001F3F] text-white flex items-center justify-center text-2xl font-bold group-hover:bg-[#001F3F] transition-colors">
                03
              </div>
              <h3 className="text-2xl font-light text-[#001F3F] mt-8 mb-5">
                <span className="font-bold">Visible</span> with Courage
              </h3>
              <p className="text-[#001F3F] text-opacity-80 leading-relaxed">
                Market with authenticity—no gimmicks, just your real voice.
              </p>
              <div className="mt-6 pt-6 border-t border-[#001F3F] border-opacity-10">
                <span className="text-[#001F3F] text-sm font-medium">Visibility Blueprint</span>
              </div>
            </div>
          </div>
  
          {/* CTA */}
          <div className="text-center">
            <a
              href="#download"
              className="inline-flex items-center space-x-2 bg-transparent border-2 border-[#001F3F] text-[#001F3F] hover:bg-[#001F3F] hover:text-white px-8 py-3 rounded-none text-sm font-medium tracking-wider transition-all duration-300 group"
            >
              <span>Get the Starter Guide</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default FrameworkSection;