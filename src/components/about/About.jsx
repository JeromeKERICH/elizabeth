const AboutSection = () => {
    return (
      <section id="about" className="py-5 bg-[#FFF0F3] bg-opacity-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <div className="relative">
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-xl">
                {/* Replace with actual image */}
                <img
                  src="/assets/l2.jpg"
                  alt="Elizabeth"
                  className="w-full h-auto max-h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="w-full h-full bg-gradient-to-br from-[#D4AF37] to-[#059669] opacity-20"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-md border border-[#D4AF37] border-opacity-30">
                <p className="text-[#001F3F] text-lg font-bold">50+</p>
                <p className="text-[#059669] text-sm">Businesses Transformed</p>
              </div>
            </div>
  
            {/* Right Column - Content */}
            <div>
              <h2 className="text-3xl font-bold text-[#001F3F] mb-6">
                <span className="text-[#D4AF37]"> <br /> The Voice</span> Behind
                <span className="text-[#059669]">"The Courage to Grow™"</span>
              </h2>
              
              <div className="space-y-6 text-[#001F3F]">
                <p className="text-lg leading-relaxed">
                  From <span className="font-semibold text-[#D4AF37]">burnout to breakthrough</span>, I turned my messy middle into a movement. Today, I help ambitious founders clarify their message, align their offers, and show up with courage in both life and business.
                </p>
                
                <p className="text-lg leading-relaxed">
                  My unique blend of <span className="font-semibold">mindset work</span>, <span className="font-semibold">visibility coaching</span>, and <span className="font-semibold">practical digital tools</span> has helped over 50+ businesses activate clarity and own their purpose like never before.
                </p>
                
                {/* Testimonial */}
                <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#059669]">
                  <svg className="w-8 h-8 text-[#D4AF37] mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="italic text-[#001F3F] mb-2">
                    "Elizabeth helped me stop hiding and finally start making consistent income doing what I love."
                  </p>
                  <p className="font-semibold text-[#059669]">— A Real Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutSection;