import { useEffect } from "react";

const CoachingServices = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
    const services = [
      {
        title: "Business Strategy & Scale-Up Coaching",
        for: "Founders and SMEs ready to grow regionally or globally",
        focus: "Growth roadmaps, sustainability integration, international positioning",
        format: "1:1 sessions + personalized strategy plan",
        price: "From $500 – $1,000",
        image: "assets/bus1.jpg"
      },
      {
        title: "Storytelling for Influence Coaching",
        for: "Professionals, founders, and thought leaders who want to build trust and visibility",
        focus: "Crafting powerful stories, building influence on platforms like LinkedIn, brand storytelling for growth",
        format: "Workshops + practical assignments",
        price: "$397 – $500",
        image: "assets/story.jpg"
      },
      {
        title: "Mentorship Circle – Purpose-Driven Profit™",
        for: "Women entrepreneurs seeking growth without burnout",
        focus: "Sustainable scaling, authentic marketing, profit with purpose",
        format: "8–12 week group mentorship (live sessions, accountability pods, pitch prep)",
        price: "$197 – $597",
        image: "assets/train.jpg"
      },
      {
        title: "Leadership & Personal Growth Mentorship",
        for: "Emerging and seasoned leaders navigating challenges in leadership roles",
        focus: "Emotional intelligence, decision-making, resilience, authentic leadership",
        format: "1:1 coaching + leadership toolkit",
        price: "$197 – $400",
        image: "assets/adv.jpg"
      },
      {
        title: "Investment Readiness Coaching",
        for: "Startups and SMEs preparing for investor meetings or accelerators",
        focus: "Investor pitch coaching, deck audits, mock panels, partnership strategy",
        format: "1:1 coaching, templates, and feedback sessions",
        price: "$250 – $800",
        image: "assets/inv.png"
      }
    ];
  
    return (
      <section className="py-5 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#001F3F] mb-4">
              Coaching Packages
            </h2>
            <p className="text-xl text-[#001F3F] max-w-3xl mx-auto">
              Tailored support for every stage of your entrepreneurial journey
            </p>
          </div>
  
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 border border-[#001F3F]/10"
              >
                {/* Service Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001F3F] to-transparent opacity-70"></div>
                </div>
                
                {/* Service Content */}
                <div className="p-6 relative z-10 bg-white">
                  <h3 className="text-xl md:text-2xl font-bold text-[#001F3F] mb-3 group-hover:text-[#D4AF37] transition-colors">
                    {service.title}
                  </h3>
                  
                  <div className="space-y-4 text-[#001F3F]">
                    <div>
                      <h4 className="text-sm font-semibold text-[#D4AF37] mb-1">WHO IT'S FOR</h4>
                      <p>{service.for}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#D4AF37] mb-1">FOCUS AREAS</h4>
                      <p>{service.focus}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-[#D4AF37] mb-1">FORMAT</h4>
                      <p>{service.format}</p>
                    </div>
                    
                    <div className="pt-4 mt-4 border-t border-[#001F3F]/10">
                      <h4 className="text-sm font-semibold text-[#D4AF37] mb-1">INVESTMENT</h4>
                      <p className="text-lg font-bold">{service.price}</p>
                    </div>
                  </div>
                  
                  <button className="mt-6 w-full bg-[#001F3F] hover:bg-[#D4AF37] text-white py-3 rounded-lg font-medium transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
  
          {/* CTA */}
          <div className="mt-20 text-center">
            <p className="text-xl text-[#001F3F] mb-8">
              Ready to transform your business with personalized guidance?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-gradient-to-r from-[#D4AF37] to-[#059669] hover:from-[#059669] hover:to-[#D4AF37] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Discovery Call
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default CoachingServices;