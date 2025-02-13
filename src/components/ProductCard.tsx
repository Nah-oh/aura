import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, image, icon: Icon }) => {
  return (
    <div className="bg-[#faf7f2] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
          <Icon className="w-6 h-6 text-[#8B5E3C]" />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-serif mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-[#8B5E3C] font-medium hover:text-[#6F4B30] flex items-center">
          En savoir plus
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;