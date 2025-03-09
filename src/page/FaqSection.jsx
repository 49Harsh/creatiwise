import React, { useState } from 'react';

const FaqSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const faqs = [
    {
      question: "What is your design process?",
      answer: "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design."
    },
    {
      question: "What tools and software do you use for UX design?",
      answer: "I primarily use Figma for UI/UX design work, along with Adobe Creative Suite for graphics and visual elements. For prototyping, I use Figma's prototyping features and occasionally Framer for more complex interactions. I also use Miro for user journey mapping and collaborative ideation."
    },
    {
      question: "How do you measure the success of your UX designs?",
      answer: "I measure success through a combination of quantitative and qualitative metrics. This includes user engagement data, conversion rates, and task success rates. I also conduct user interviews and satisfaction surveys to gather direct feedback. The most important measure is whether the design solves the user's problem effectively and creates a positive experience."
    }
  ];

  const toggleFaq = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  return (
    <div className="w-full bg-black text-white py-12 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-screen-xl mx-auto">
        {/* FAQ header with star */}
        <div className="flex items-center mb-10 sm:mb-12">
          <span className="text-white mr-3">✧</span>
          <h2 className="text-3xl sm:text-4xl font-normal tracking-wide">Frequently asked questions</h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-8 sm:space-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              <button 
                className="w-full text-left mb-3 focus:outline-none"
                onClick={() => toggleFaq(index)}
                aria-expanded={expandedIndex === index}
              >
                <h3 className="text-xl sm:text-2xl font-normal">{faq.question}</h3>
              </button>
              
              <div 
                className={`text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl ${
                  expandedIndex === index ? 'block' : 'hidden'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;