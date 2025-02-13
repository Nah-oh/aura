import React from 'react';

interface BlogPreviewProps {
  title: string;
  excerpt: string;
  image: string;
}

const BlogPreview: React.FC<BlogPreviewProps> = ({ title, excerpt, image }) => {
  return (
    <div className="bg-[#faf7f2] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-serif mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <button className="text-[#8B5E3C] font-medium hover:text-[#6F4B30] flex items-center">
          Lire la suite
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default BlogPreview;