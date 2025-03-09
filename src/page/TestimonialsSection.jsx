import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Floyd Miles",
      company: "eBay",
      avatar: "/card.png",
      quote: "Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers. Synergy's resume builder is fantastic. It helped me create a professional resume that stood out to employers."
    },
    {
      id: 2,
      name: "Jane Smith",
      company: "Google",
      avatar: "/cards.png",
      quote: "The portfolio templates are incredibly well-designed. I was able to showcase my work in a way that attracted new clients immediately."
    },
    {
      id: 3,
      name: "Mark Johnson",
      company: "Adobe",
      avatar: "/cardst.png",
      quote: "As a designer, I'm very particular about presentation. This tool exceeded my expectations and helped me land my dream job."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <div className="w-full bg-black text-white py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      {/* Container to control width */}
      <div className="max-w-screen-xl mx-auto">
        {/* Testimonials header with star */}
        <div className="flex items-center mb-10 sm:mb-16">
          <span className="text-white mr-3">✧</span>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-wide">What they say</h2>
        </div>

        {/* Testimonial content */}
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24">
          {/* Avatar and name */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <div className="flex items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden mr-4 border border-gray-700">
                <img 
                  src={current.avatar} 
                  alt={current.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-normal">{current.name}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{current.company}</p>
              </div>
            </div>
          </div>

          {/* Quote and navigation */}
          <div className="flex flex-col justify-between flex-grow w-full">
            <blockquote className="text-xl sm:text-2xl font-normal mb-8 w-full relative">
              <span className="text-3xl sm:text-4xl text-gray-500 absolute -left-4 sm:-left-8">"</span>
              <div className="pl-4 sm:pl-6">
                {current.quote}
              </div>
            </blockquote>

            {/* Navigation buttons */}
            <div className="flex gap-2 self-start md:self-end">
              <button 
                onClick={prevTestimonial}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <span className="text-base sm:text-lg">&lt;</span>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <span className="text-base sm:text-lg">&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;