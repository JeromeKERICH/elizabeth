import { motion } from "framer-motion";
import { useRef } from "react";

const Hero = () => {
  const constraintsRef = useRef(null);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <section 
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{
        backgroundImage: "linear-gradient(to right, rgba(0, 31, 63, 0.9), rgba(0, 31, 63, 0.7)), url('/path-to-your-bg-image.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden" ref={constraintsRef}>
        <motion.div
          className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-[#D4AF37] opacity-20"
          drag
          dragConstraints={constraintsRef}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-[#059669] opacity-15"
          drag
          dragConstraints={constraintsRef}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-5 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-16 lg:mb-0"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6 text-start"
              variants={item}
            >
              Build a Business Rooted in <span className="text-[#D4AF37]">Courage</span>, Purpose, and Profit.
            </motion.h1>
            
            <motion.p 
              className="text-l md:text-xl text-white opacity-90 mb-10 max-w-2xl mx-auto lg:mx-0 text-start"
              variants={item}
            >
              Whether you're just starting out or scaling your voice, My tools, mindset coaching, and business strategy sessions are here to help you rise with clarity and conviction.
            </motion.p>
            
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start" variants={item}>
              <a 
                href="#free-kit" 
                className="bg-[#D4AF37] hover:bg-[#c9a22f] text-[#001F3F] font-bold py-4 px-8 rounded-full text-sm transition-all transform hover:scale-105 shadow-lg"
              >
                Grab Your Free Business Clarity Kit
              </a>
              <a 
                href="#toolkit" 
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-8 rounded-full text-sm transition-all transform hover:scale-105"
              >
                Explore the Toolkit Series
              </a>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-[#D4AF37] opacity-30 blur-lg"></div>
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/assets/liza.jpg" 
                  alt="Elizabeth Nasaka" 
                  className="w-full h-auto max-h-[500px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;