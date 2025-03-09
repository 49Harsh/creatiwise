import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/card.png",
      date: "Nov 9, 2023",
      title: "How UX works in web",
      tags: ["UI", "UX"],
    },
    {
      id: 2,
      image: "/cards.png",
      date: "Aug 18, 2023",
      title: "Case study - Analysis Application.",
      tags: ["DESIGN", "PRINT"],
    },
    {
      id: 3,
      image: "/cardst.png",
      date: "Feb 16, 2023",
      title: "3 ways to develop your skill",
      tags: ["FIGMA", "WEB"],
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white p-12">
      {/* Blog header with star and view all */}
      <div className="flex justify-between items-center mb-10">
        <div className="flex items-center">
          <span className="text-white mr-3">✧</span>
          <h2 className="text-4xl font-normal tracking-wide">Blog</h2>
        </div>
        <a href="#" className="text-sm underline">view all</a>
      </div>

      {/* Blog posts */}
      <div className="space-y-10">
        {blogPosts.map((post) => (
          <div key={post.id} className="flex flex-col md:flex-row gap-6">
            {/* Blog image */}
            <div className="w-full md:w-60 h-40 rounded-md overflow-hidden bg-gray-800 flex-shrink-0">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Blog content */}
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <p className="text-sm text-gray-400 mb-1">{post.date}</p>
                <h3 className="text-2xl font-normal mb-3">{post.title}</h3>
                <div className="flex gap-2">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full border border-gray-700 inline-block"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Read button */}
              <div className="mt-4 md:self-end">
                <button className="px-4 py-2 bg-white text-black rounded-full text-sm">
                  Read
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;