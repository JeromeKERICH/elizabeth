const FinalCTA = () => {
    return (
      <section className="py-5 bg-[#001F3F] relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSJub25lIiBzdHJva2U9IiNENEFGMzciIHN0cm9rZS13aWR0aD0iMSI+CiAgPHBhdGggZD0iTTAgMEg0MFY0MEgweiIvPgogIDxwYXRoIGQ9Ik0xMCAxMEgzMFYzMEgxMHoiLz4KPC9zdmc+Cg==')]"></div>
        </div>
  
        <div className="max-w-5xl mx-auto px-5 text-center relative z-10">
          {/* Headline with gradient text */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#FFF] to-[#D4AF37]">
            It's Your Time to Build With Courage.
          </h2>
          
          {/* Subheadline */}
          <p className="text-xl text-white text-opacity-90 max-w-2xl mx-auto mb-12 leading-relaxed">
            Let's drop the noise, ditch the doubt, and create something real.<br />
            <span className="text-[#D4AF37] font-medium">Join 500+ women</span> who've already taken the first step.
          </p>
  
          {/* Dual CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#shop"
              className="bg-white text-[#001F3F] hover:bg-[#D4AF37] hover:text-[#001F3F] px-8 py-4 rounded-full text-lg font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              Shop Toolkits
            </a>
            <a
              href="#download"
              className="bg-transparent border-2 border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#001F3F] px-8 py-4 rounded-full text-lg font-bold tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
            >
              Download Free Starter Kit
            </a>
          </div>
  
          {/* Trust indicator */}
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-4 items-center text-white text-opacity-70 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No fluff, just proven frameworks
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Instant digital access
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              30-day satisfaction guarantee
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FinalCTA;