import { useState } from 'react';

const FAQSection = () => {
    const faqs = [
      {
        question: "What's the best product for someone just starting out?",
        answer: "The 'Visibility With Courage' Playbook is a great place to start. It gives you the foundational mindset and practical steps to build your personal brand from scratch."
      },
      {
        question: "Are the tools beginner-friendly?",
        answer: "100%. No fluff. Just clear, guided support. Each toolkit is designed with step-by-step frameworks that meet you where you are."
      },
      {
        question: "Do I need a website or audience already?",
        answer: "Nope. These tools help you build your foundation – no matter where you're starting. Perfect for complete beginners or those needing to refine their existing brand."
      },
      {
        question: "How soon will I get access after purchasing?",
        answer: "Immediately! All toolkits are digital downloads available right after checkout. You'll receive an email with access to all files (PDFs, templates, and worksheets)."
      },
      {
        question: "What's your refund policy?",
        answer: "We offer a 30-day satisfaction guarantee. If the tools don't deliver value, email us for a full refund—no questions asked."
      },
      {
        question: "Can I upgrade to the bundle later if I buy one toolkit first?",
        answer: "Absolutely! Just email us at hello@elizabethnasaka.com and we'll apply your original purchase toward the bundle price."
      }
    ];
  
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <section id="faq" className="py-20 bg-[#FFF0F3] bg-opacity-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#001F3F] mb-4">
              Your Questions, <span className="text-[#D4AF37]">Answered</span>
            </h2>
            <p className="text-lg text-[#001F3F] max-w-2xl mx-auto">
              Everything you need to know about the Courage to Grow™ toolkits.
            </p>
          </div>
  
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-[#001F3F]/10 last:border-0"
              >
                <button
                  className="flex justify-between items-center w-full py-6 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg md:text-xl font-medium text-[#001F3F] pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-[#D4AF37] transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-40 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-[#001F3F] text-opacity-90">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
  
          {/* Still have questions? */}
          <div className="mt-16 text-center">
            <p className="text-lg text-[#001F3F] mb-6">
              Still have questions? We're happy to help.
            </p>
            <a
              href="mailto:hello@elizabethnasaka.com"
              className="inline-flex items-center border-2 border-[#001F3F] hover:bg-[#001F3F] hover:text-white text-[#001F3F] px-6 py-3 rounded-full text-lg font-medium transition-colors duration-300"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  };
  
  export default FAQSection;