const MissionSection = () => {
    return (
      <section className="py-5 bg-gradient-to-b from-[#001F3F] to-[#003366]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Mission Statement */}
          <div className="mb-5">
            <div className="flex justify-center mb-6">
              <div className="bg-[#D4AF37] p-3 rounded-full">
                <svg className="w-8 h-8 text-[#001F3F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Mission Statement
            </h2>
            <div className="relative max-w-3xl mx-auto">
              <svg className="absolute -top-6 -left-6 w-12 h-12 text-[#D4AF37]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-l md:text-2xl text-white italic leading-relaxed">
                "To equip entrepreneurs and leaders across Africa and beyond with the strategies, clarity, and courage to grow purpose-driven businesses that scale sustainably, attract investment, and create lasting social impact."
              </blockquote>
              <svg className="absolute -bottom-6 -right-6 w-12 h-12 text-[#D4AF37]/20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>
  
          </div>
      </section>
    );
  };
  
  export default MissionSection;