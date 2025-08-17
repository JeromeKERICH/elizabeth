const FunSide = () => {
    return (
      <section className="py-10 bg-gray-50 bg-opacity-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-sm border border-[#D4AF37]/20">
            <svg className="w-12 h-12 text-[#D4AF37] mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-light text-[#001F3F] mb-6">
              <span className="font-bold">The Human Side</span> of Elizabeth
            </h3>
            <p className="text-lg text-[#001F3F] mb-8 leading-relaxed">
              "When I'm not mentoring founders or speaking on stages, you'll find me traveling to hidden gems, journaling morning pages with my favorite coffee, or hunting for the perfect plant to add to my urban jungle."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-[#001F3F] bg-opacity-5 text-white px-4 py-2 rounded-full text-sm">Coffee Connoisseur</span>
              <span className="bg-[#001F3F] bg-opacity-5 text-white px-4 py-2 rounded-full text-sm">Plant Mom</span>
              <span className="bg-[#001F3F] bg-opacity-5 text-white px-4 py-2 rounded-full text-sm">Travel Enthusiast</span>
              <span className="bg-[#001F3F] bg-opacity-5 text-white px-4 py-2 rounded-full text-sm">Journaling</span>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FunSide;