import React from 'react';

const ExpertiseSection = () => {
  return (
    <div className="bg-black w-full py-16 px-8 text-white">
      {/* Header */}
      <div className="mb-12 flex items-center">
        <span className="text-white mr-3 text-2xl">✧</span>
        <h2 className="text-4xl font-bold">Expertise</h2>
      </div>
      
      {/* Grid layout for expertise areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-medium mb-4 flex items-center">
            <span className="mr-2">•</span>
            Branding
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I create efficient, adaptable, and engaging websites. No predefined 
            patterns. No sluggish, complex code. Webflow forms the foundation of my 
            web development approach. I employ it to provide safe, top-notch 
            bespoke websites.
          </p>
        </div>
        
        {/* UI Design */}
        <div>
          <h3 className="text-xl font-medium mb-4 flex items-center">
            <span className="mr-2">•</span>
            UI Design
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I create efficient, adaptable, and engaging websites. No predefined 
            patterns. No sluggish, complex code. Webflow forms the foundation of my 
            web development approach. I employ it to provide safe, top-notch 
            bespoke websites.
          </p>
        </div>
        
        {/* UX Design */}
        <div>
          <h3 className="text-xl font-medium mb-4 flex items-center">
            <span className="mr-2">•</span>
            UX Design
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I comprehend and resolve digital product issues using a user-focused 
            methodology. Investigation, compassion, and visual conveyance are a 
            few techniques I apply to captivate and involve your users while fulfilling 
            your business requirements
          </p>
        </div>
        
        {/* Development */}
        <div>
          <h3 className="text-xl font-medium mb-4 flex items-center">
            <span className="mr-2">•</span>
            Development
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I create user-friendly, adaptive, engaging websites. No cookie-cutters. No 
            cumbersome, complex coding. Webflow forms the foundation of my web 
            development approach, I employ it to produce safe, top-notch 
            personalized websites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;