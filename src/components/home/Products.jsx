import { Link } from 'react-router-dom';

const ProductsSection = () => {
    return (
      <section id="shop" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-[#D4AF37] font-medium tracking-widest text-sm uppercase mb-4 block">
              Digital Toolkits
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-[#001F3F] mb-4">
              Strategic Resources for <span className="font-bold">Fearless Growth</span>
            </h2>
            <p className="text-[#001F3F]/80 max-w-2xl mx-auto text-lg">
              Precision tools to elevate your mindset, offers, and visibility—without the fluff.
            </p>
          </div>
  
          {/* Product Grid - Sleek Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Product 1 - Minimal Card */}
            <div className="group relative overflow-hidden bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#EAECF0]">
              
              <h3 className="text-2xl font-medium text-[#001F3F] mb-3 pr-8">Visibility Playbook</h3>
              <p className="text-[#059669] text-xl font-medium mb-6">$27</p>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent my-6"></div>
              
              <ul className="space-y-3 mb-8 text-[#001F3F]/90">
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2.5 mr-3"></div>
                  <span>Social confidence exercises</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2.5 mr-3"></div>
                  <span>Magnetic Message framework</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2.5 mr-3"></div>
                  <span>7-day visibility roadmap</span>
                </li>
                <li className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2.5 mr-3"></div>
                    <span>Bonus: Content calendar template</span>
                </li>
                <li className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2.5 mr-3"></div>
                    <span>Bonus: Implementation guide</span>
                </li>
              </ul>
              
              <a href="#" className="
                absolute bottom-0 left-0 right-0 
                py-4 text-center bg-[#001F3F] text-white 
                font-medium transition-all duration-300
                translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                flex items-center justify-center gap-2
              ">
                <span>Get Playbook</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                  <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              
              <Link to="#" className="
                w-full py-3.5 px-6 border border-[#D4AF37] text-[#D4AF37] 
                rounded-lg font-medium flex items-center justify-center gap-2
                group-hover:opacity-0 transition-all duration-300
              ">
                <span>View Details</span>
              </Link>
            </div>
  
            {/* Product 2 - Minimal Card */}
            <div className="group relative overflow-hidden bg-[#F9FAFB] rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-[#EAECF0]">
          
              <h3 className="text-2xl font-medium text-[#001F3F] mb-3 pr-8">Business Audit</h3>
              <p className="text-[#059669] text-xl font-medium mb-6">$49</p>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-[#059669]/30 to-transparent my-6"></div>
              
              <ul className="space-y-3 mb-8 text-[#001F3F]/90">
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#059669] mt-2.5 mr-3"></div>
                  <span>Business health checklist</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#059669] mt-2.5 mr-3"></div>
                  <span>Offer clarity map</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#059669] mt-2.5 mr-3"></div>
                  <span>Client attraction audit</span>
                </li>
                <li className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-[#059669] mt-2.5 mr-3"></div>
                    <span>Actionable growth insights</span>
                </li>
                <li className="flex items-start">
                    <div className="w-1 h-1 rounded-full bg-[#059669] mt-2.5 mr-3"></div>
                    <span>Bonus: Implementation guide</span>    
                </li>
              </ul>
              
              <a href="#" className="
                absolute bottom-0 left-0 right-0 
                py-4 text-center bg-[#001F3F] text-white 
                font-medium transition-all duration-300
                translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                flex items-center justify-center gap-2
              ">
                <span>Start Audit</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                  <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
              
              <a href="#" className="
                w-full py-3.5 px-6 border border-[#059669] text-[#059669] 
                rounded-lg font-medium flex items-center justify-center gap-2
                group-hover:opacity-0 transition-all duration-300
              ">
                <span>View Details</span>
              </a>
            </div>
  
            {/* Bundle - Featured Card */}
            <div className="group relative overflow-hidden bg-gradient-to-br from-[#001F3F] to-[#001F3F]/90 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              
              <h3 className="text-2xl font-medium text-white mb-3 pr-8">Complete Bundle</h3>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-white text-xl font-medium">$75</p>
                <p className="text-[#D4AF37] text-sm line-through">$95</p>
                <span className="bg-[#059669]/20 text-[#059669] text-xs px-2 py-0.5 rounded-full">Save 20%</span>
              </div>
              <p className="text-white/70 text-sm mb-6">All three toolkits + bonus resources</p>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
              
              <ul className="space-y-3 mb-8 text-white/90">
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-white mt-2.5 mr-3"></div>
                  <span>Everything in Visibility Playbook</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-white mt-2.5 mr-3"></div>
                  <span>Full Business Audit Toolkit</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-white mt-2.5 mr-3"></div>
                  <span>Bare-Bones Money Map™</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1 h-1 rounded-full bg-[#D4AF37] mt-2.5 mr-3"></div>
                  <span className="text-[#D4AF37] font-medium">+ Bonus: Implementation Guide</span>
                </li>
              </ul>
              
              <a href="#" className="
                w-full py-3.5 px-6 bg-gradient-to-r from-[#D4AF37] to-[#D4AF37]/90 
                text-white rounded-lg font-medium flex items-center justify-center gap-2
                hover:shadow-lg transition-all duration-300
              ">
                <span>Get Full Bundle</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5.5 3L10.5 8L5.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
  
          {/* Trust Indicator */}
          <div className="text-center text-[#001F3F]/60 text-sm">
            <p>Trusted by 50+ founders worldwide • Instant digital access</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductsSection;