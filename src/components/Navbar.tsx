import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <a href="/" className="flex items-center">
          <img
  src="./aura-logo.png"
  alt="Aura Logo"
  style={{ height: '100px', width: 'auto' }} // Ajustez la hauteur et la largeur selon vos besoins
/>

          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">Accueil</a>
            <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">Produits</a>
            <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">Comment ça marche</a>
            <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">À Propos</a>
            <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">Contact</a>
            <button className="bg-[#8B5E3C] text-white px-6 py-2 rounded-full hover:bg-[#6F4B30]">
              Boutique
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">Accueil</a>
              <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">Produits</a>
              <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">Comment ça marche</a>
              <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">À Propos</a>
              <a href="#" className="text-gray-600 hover:text-[#8B5E3C]">Contact</a>
              <button className="bg-[#8B5E3C] text-white px-6 py-2 rounded-full hover:bg-[#6F4B30] w-full">
                Boutique
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;