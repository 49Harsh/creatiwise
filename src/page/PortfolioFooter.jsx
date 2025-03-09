import React from 'react';

const PortfolioFooter = () => {
  const imgss = [
    {wbeflow: "/WEBFLOW.png"},
    {star: "/Frame.png"},
    {figma: "/FIGMA.png"},
    {star: "/Frame.png"},
    {designer: "/DESIGNER.png"},
    {star: "/Frame.png"},
    {dev: "DEVELOPER.png"}
  ];

  return (
    <div className="w-full bg-black text-white py-12 overflow-hidden">
      {/* Scrolling keywords with stars */}
      <div className="relative w-full mb-8">
        <div className="flex justify-between items-center px-4 md:px-8 gap-8 md:gap-12">
          {imgss.map((item, index) => {
            const key = Object.keys(item)[0];
            const value = Object.values(item)[0];
            return (
              <div key={index} className="flex-1">
                <img src={value} alt={key} className="w-full h-16 md:h-20 object-contain" />
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Call to action section */}
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-widest mb-6">LET'S TALK!</h2>
        <a
          href="mailto:rehanurohan@gmail.com"
          className="inline-flex items-center text-sm hover:underline"
        >
          49harshyadav@gmail.com
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
      
      {/* Footer bottom with copyright and social links */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 px-4">
        <div>© Harsh Yadav - 2025</div>
        
        <div className="flex space-x-6 mt-4 sm:mt-0">
          <a href="#" className="hover:text-white transition-colors">Dribbble</a>
          <a href="#" className="hover:text-white transition-colors">Behance</a>
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFooter;