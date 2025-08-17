import { useEffect } from "react";

const ContactSection = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    },[])
    return (
      <section id="contact" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading Section - Top */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-[#001F3F] mb-4">
              Let's Build Your <span className="text-[#D4AF37]">Next Chapter</span> Together
            </h2>
            <p className="text-xl text-[#001F3F] max-w-2xl mx-auto">
              Whether you're seeking clarity on your business strategy, preparing for investors, or ready to grow your leadership with courage, I'd love to connect.
            </p>
          </div>
  
          {/* Content Below Heading */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Contact Options */}
            <div className="space-y-10">
              {/* Booking Option */}
              <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                <div className="bg-[#001F3F] text-white p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">Book a Coaching Call</h3>
                  <p className="text-[#001F3F] mb-3">Schedule a 1:1 session to discuss your goals</p>
                  <a
                    href="https://calendly.com/elizabeth"
                    className="inline-flex items-center text-[#059669] hover:text-[#001F3F] font-medium"
                  >
                    View Available Times →
                  </a>
                </div>
              </div>
  
              {/* Email Option */}
              <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                <div className="bg-[#001F3F] text-white p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-2">Email Me</h3>
                  <p className="text-[#001F3F] mb-3">For detailed inquiries and questions</p>
                  <a
                    href="mailto:hello@elizabethbrand.com"
                    className="text-[#059669] hover:text-[#001F3F] font-medium"
                  >
                    hello@elizabethbrand.com
                  </a>
                </div>
              </div>
  
              {/* Social Option */}
              <div className="flex items-start bg-gray-50 p-6 rounded-xl">
                <div className="bg-[#001F3F] text-white p-3 rounded-lg mr-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#001F3F] mb-3">Connect on Social</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-[#001F3F] hover:text-[#0077b5]">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                    
                    <a href="#" className="text-[#001F3F] hover:text-[#4267B2]">
                      <span className="sr-only">Facebook</span>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                      </svg>
                    </a>
                  </div>
                </div>

                
              </div>

              <div>
              <div className="bg-gray-50 text-white p-3 rounded-lg mr-4 flex-shrink-0">
                <div>
                    <h3 className="text-xl font-bold text-[#001F3F] mb-2 mt-6">Follow My Journey</h3>
                    <p className="text-[#001F3F] mb-3">Stay updated with my latest insights and content</p>
                    <a href="#" className="text-[#001F3F] hover:text-[#D4AF37] font-medium">
                        Subscribe to My Newsletter →
                    </a>
                </div>
            </div>
                  
            </div>
              
            </div>
  
            {/* Right Column - Contact Form */}
            <div className="bg-[#001F3F] p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-[#001F3F] border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-[#001F3F] border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-1">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 bg-[#001F3F] border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                  >
                    <option value="">Select a topic</option>
                    <option value="Business Strategy">Business Strategy</option>
                    <option value="Storytelling">Storytelling</option>
                    <option value="Leadership">Leadership</option>
                    <option value="Investment Readiness">Investment Readiness</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-4 py-3 bg-[#001F3F] border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent"
                    placeholder="How can I help you?"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] hover:bg-[#F0C14B] text-[#001F3F] py-3 px-6 rounded-lg font-bold transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
              <p className="mt-4 text-sm text-white/70 flex items-center">
                <svg className="w-4 h-4 mr-2 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Your information is safe with me. I'll personally respond within 48 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactSection;