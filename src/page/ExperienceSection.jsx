import React from 'react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Lead Product Designer",
      company: "Fortknox",
      period: "Mar 2022 - Oct 2023"
    },
    {
      title: "Intern Designer",
      company: "OmniSafe",
      period: "Mar 2022 - Oct 2023"
    },
    {
      title: "UI Designer",
      company: "Doradesign",
      period: "Mar 2022 - Oct 2023"
    },
    {
      title: "Frontend Developer",
      company: "OpacityAuthor",
      period: "Mar 2022 - Oct 2023"
    }
  ];

  return (
    <div className="w-full h-full bg-black text-white p-12">
      {/* Experience heading with star */}
      <div className="flex items-center mb-16">
        <span className="text-white mr-3">✧</span>
        <h2 className="text-4xl font-normal tracking-wide">Experience</h2>
      </div>

      {/* Experience entries */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="border-b border-gray-800 pb-6">
            <div className="flex justify-between items-start">
              <h3 className="text-2xl font-normal">{exp.title}</h3>
              <div className="text-right">
                <p className="text-xl mb-1">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;