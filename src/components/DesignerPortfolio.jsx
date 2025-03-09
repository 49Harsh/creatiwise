import React from 'react';

const DesignerPortfolio = () => {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center p-8">
      {/* Main heading section */}
      <div className="flex flex-col items-center justify-center mb-20">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wider text-center leading-tight">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <span>I AM A</span>
            <span className="relative mx-2">
              <span className="rounded-md"><img src='/Rectangle.png' loading='lazy' className='h-[0.78em]'/></span>
            </span>
            <span>FREELANCE</span>
          </div>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center">
            <span>DESIGNER</span>
            <span className="relative mx-2 inline-flex items-center justify-center">
              <span className="rounded-md"><img src='/Rectangle 1.png' loading='lazy' className='h-[0.78em]' /></span>
            </span>
            <span>FROM</span>
          </div>
          <div>SAN FRANCISCO</div>
        </h1>
      </div>

      {/* Bottom section with logos and intro text */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-20 justify-center w-full">
        {/* Logos */}
        <div className="flex space-x-12 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-sm font-light">doradesign</span>
          </div>

          <div className="flex items-center">
            <span className="text-sm font-light">
              <span className="inline-block mr-1">|||</span> wave
            </span>
          </div>

          <div>
            <span className="text-sm font-light uppercase tracking-wider">Siωila</span>
          </div>
        </div>

        {/* Intro text */}
        <div className="max-w-md lg:max-w-lg">
          <p className="text-sm font-light leading-relaxed">
            Welcome to my portfolio. Here, artistry meets functionality.
            Dive into a curated showcase of distinctive branding and
            web designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DesignerPortfolio;