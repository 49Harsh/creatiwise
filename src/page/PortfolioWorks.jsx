import React from 'react';
import './index.css';

const PortfolioWorks = () => {
  // Sample data for three cards
  const worksData = [
    {
      id: 1,
      title: "Analysis Application",
      description: "With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.",
      image: "/card.png",
      tags: ["FIGMA", "UX"]
    },
    {
      id: 2,
      title: "Marketing Dashboard",
      description: "A comprehensive solution designed to visualize campaign performance with real-time data insights.",
      image: "/cards.png",
      tags: ["REACT", "DASHBOARD"]
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description: "Streamlined user experience with focus on conversion optimization and seamless checkout process.",
      image: "/cardst.png",
      tags: ["UI", "FIGMA"]
    }
  ];

  return (
    <div className="bg-black  text-white min-h-screen p-8">
      {/* Header section with star icon and "view all" */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <span className="text-2xl mr-2">★</span>
          <h1 className="text-3xl font-bold">Works</h1>
        </div>
        <a href="#" className="underline text-sm">view all</a>
      </div>

      {/* Cards column */}
      <div className="flex flex-col z-20 space-y-6">
        {worksData.map((work) => (
          <div 
            key={work.id} 
            className="rounded-3xl bg-gray-100/35 blur-[0.1px] backdrop-blur-3xl overflow-hidden flex flex-col md:flex-row"
          >
            {/* Image section - laptop with orange E logo */}
            <div className="md:w-1/2 p-6 relative">
              <img 
                src={work.image} 
                alt="Laptop display"
                className="w-full h-full object-cover"
              />
              
            </div>
            
            {/* Content section - dark background */}
            <div className="md:w-1/2 p-10 h-full flex  flex-col justify-between ">
              <div>
                <h2 className="text-4xl font-bold mb-4">{work.title}</h2>
                <p className="text-gray-400 mb-6">{work.description}</p>
                
                {/* Tags - now dark circular buttons */}
                <div className="flex flex-wrap gap-2">
                  {work.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-6 py-2 border border-gray-100 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* View Case Study button - white rounded button */}
              <div className="mt-8  lg:mt-52 ">
                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                  View Case Study
                </button>
              </div>

              {/* Orange E logo */}
              <div className='relative'>
                <div className='absolute  w-66 h-66 -left-24 -translate-y-2/4 bg-orange-400/20 z-10 blur-3xl rounded-full'>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioWorks;