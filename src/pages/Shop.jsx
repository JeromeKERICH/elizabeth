import { useEffect } from "react";

const ProductsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);

    }, [])
    return (
      <div className="bg-white min-h-screen">
        {/* Hero */}
        <section className="bg-gradient-to-b from-[#001F3F] to-[#003366] py-20 text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-[#D4AF37]">Courage to Grow</span>™ Toolkits
            </h1>
            <p className="text-xl text-[#D4AF37] mb-8 max-w-3xl mx-auto">
              No-fluff resources to build visibility, fix leaks, and master your money without overwhelm.
            </p>
          </div>
        </section>
  
        {/* Products Grid */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10">
            {/* Product 1 */}
            <div className="border border-[#001F3F]/10 hover:border-[#D4AF37]/30 transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
              <div className="bg-[#001F3F] p-6">
                <h3 className="text-2xl font-bold text-white">Visibility With Courage™</h3>
                <p className="text-[#D4AF37] italic mt-2">Be Seen. Be Heard. Be Paid.</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                  A no-fluff personal brand toolkit for founders ready to get visible with confidence and clarity.
                </p>
                
                <div className="space-y-4 mb-8">
                  <h4 className="font-bold text-[#001F3F] flex items-center">
                    <span className="w-4 h-4 bg-[#D4AF37] mr-2"></span> What's Inside:
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Visibility roadmap (social, pitch, and PR)
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Confidence booster exercises
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Personal brand worksheet & content prompts
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      "30 Days of Showing Up" challenge
                    </li>
                  </ul>
                </div>
  
                <div className="bg-white p-4 rounded-lg mb-6">
                  <h4 className="font-bold text-[#001F3F] mb-2">Why it works:</h4>
                  <p className="text-sm">
                    Helps founders finally overcome the fear of being seen and build authority online and offline without faking it.
                  </p>
                </div>
  
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-[#001F3F]">$27</span>
                  <button className="bg-[#001F3F] hover:bg-[#D4AF37] text-white px-6 py-2 rounded-full transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
  
            {/* Product 2 */}
            <div className="border border-[#001F3F]/10 hover:border-[#059669]/30 transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
              <div className="bg-[#D4AF37] p-6">
                <h3 className="text-2xl font-bold text-white">Quick Win Business Audit™</h3>
                <p className="text-[#001F3F]  italic mt-2">Fix What's Leaking. Scale What's Working.</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                    A streamlined toolkit to identify and fix leaks in your business, so you can scale with confidence.
                </p>
                <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-[#001F3F] flex items-center">
                        <span className="w-4 h-4 bg-[#D4AF37]  mr-2"></span> What's Inside:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Business health checklist
                        </li>
                        <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Revenue leak analysis template
                        </li>
                        <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Quick win action plan
                        </li>
                        <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Bonus: 30-minute video walkthrough
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-[#001F3F] mb-2">Why it works:</h4>
                    <p className="text-sm">
                        Helps founders quickly identify and fix inefficiencies so that they can focus on what drives growth.
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#001F3F]">$49</span>
                    <button className="bg-[#D4AF37]  hover:bg-[#D4AF37] text-white px-6 py-2 rounded-full transition-colors">
                        Add to Cart
                    </button>
                </div>
              </div>
            </div>
  
            {/* Product 3 */}
            <div className="border border-[#001F3F]/10 hover:border-[#D4AF37]/30 transition-all duration-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl">
              <div className="bg-[#001F3F] p-6">
                <h3 className="text-2xl font-bold text-white">The Bare-Bones Money Map™</h3>
                <p className="text-[#D4AF37] italic mt-2">Know Your Numbers. Keep Your Peace.</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6">
                    A simple toolkit to help founders get a grip on their cash flow and budgeting, without the overwhelm.
                </p>
                <div className="space-y-4 mb-8">
                    <h4 className="font-bold text-[#001F3F] flex items-center">
                        <span className="w-4 h-4 bg-[#D4AF37] mr-2"></span> What's Inside:
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Simple cash flow tracker
                        </li>
                        <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Budgeting basics guide
                        </li>
                        <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Profit-first principles
                        </li>
                        <li className="flex items-start">
                        <svg className="w-5 h-5 text-[#D4AF37] mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Bonus: 1-hour money mindset workshop video
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-4 rounded-lg mb-6">
                    <h4 className="font-bold text-[#001F3F] mb-2">Why it works:</h4>
                    <p className="text-sm">
                        Gives founders the financial clarity they need to make confident decisions without overwhelm.
                    </p>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-[#001F3F]">$39</span>
                    <button className="bg-[#001F3F] hover:bg-[#001F3F] text-white px-6 py-2 rounded-full transition-colors">
                        Add to Cart
                    </button>
                </div>

              </div>
            </div>
          </div>
        </section>
  
        {/* Bundle CTA */}
        <section className="bg-[#001F3F] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Get <span className="text-[#D4AF37]">The Complete Toolkit Vault</span>
            </h2>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-[#D4AF37]/30 mb-8">
              <p className="text-4xl font-bold text-white mb-2">$59</p>
              <p className="text-[#D4AF37] mb-6">Save 30% vs buying separately</p>
              <ul className="space-y-2 text-white text-left max-w-md mx-auto">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  All 3 toolkits + bonus planning template
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  3 Video walkthroughs (one per toolkit)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-[#D4AF37] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Instant digital access
                </li>
              </ul>
            </div>
            <button className="bg-gradient-to-r from-[#D4AF37] to-[#059669] hover:from-[#059669] hover:to-[#D4AF37] text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg transition-all">
              Get The Complete Bundle
            </button>
            <p className="text-white/80 mt-4 italic">Perfect for side-hustlers, coaches, and early-stage founders</p>
          </div>
        </section>
  
        {/* Testimonials */}
        <section className="py-16 px-4 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#001F3F] mb-12">
            What Founders Are Saying
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "The Visibility With Courage toolkit transformed how I show up online. I finally feel confident sharing my voice!"
              </p>
              <p className="font-bold text-[#001F3F]">— Sarah K.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                "The Quick Win Business Audit helped me identify leaks I didn't even know existed. My revenue is up 40%!"
              </p>
              <p className="font-bold text-[#001F3F]">— Mike T.</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default ProductsPage;