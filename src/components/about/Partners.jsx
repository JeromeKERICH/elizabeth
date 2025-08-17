import { useRef, useEffect } from 'react';

const LogoSlider = () => {
  const logos = [
    { name: "Toto Village", img: "assets/flog.png" },
    { name: "Triche Nest", img: "assets/part1.png" },
    { name: "Virtuous Women Foundation", img: "assets/v.jpg" },
    { name: "African Economic Summit", img: "assets/aflogo.jpg" },
    { name: "German X", img: "assets/1.png" },
    { name: "CM Advocates", img: "assets/cm.jpg" },
    { name: "Lilian Ngala Network", img: "assets/l3.jpg" },
    
  ];

  // Duplicate logos for seamless looping
  const duplicatedLogos = [...logos, ...logos];
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrame;
    let speed = 1; // pixels per frame
    let position = 0;

    const animate = () => {
      position -= speed;
      if (position <= -slider.scrollWidth / 2) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section className="py-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#001F3F] mb-4">
            As Seen On <span className="text-[#D4AF37]">the Global Stage</span>
          </h2>
          <p className="text-xl text-[#001F3F] mb-8 max-w-3xl mx-auto">
            Trusted by leading organizations, investors, and entrepreneurial networks worldwide.
          </p>
          <div className="w-20 h-1 bg-[#D4AF37] mx-auto"></div>
        </div>

        {/* Logo Slider */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div 
            ref={sliderRef}
            className="flex w-max space-x-8 py-2 px-10"
            style={{ willChange: 'transform' }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div 
                key={`${logo.name}-${index}`} 
                className="flex-shrink-0 flex items-center px-4"
              >
                <img 
                  src={logo.img} 
                  alt={logo.name} 
                  className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-5 text-center">
          <p className="text-lg text-[#001F3F] mb-6">
            Want me to speak at your event or contribute to your platform?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center border-2 border-[#001F3F] hover:bg-[#001F3F] hover:text-white text-[#001F3F] px-8 py-3 rounded-full font-medium transition-colors duration-300"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogoSlider;