import React from 'react';
import { Heart, Sparkles, Brain, ChevronRight, Instagram, Linkedin, Facebook, Mail, CheckCircle2 } from 'lucide-react';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import TestimonialCard from './components/TestimonialCard';
import HowItWorks from './components/HowItWorks';
import Newsletter from './components/Newsletter';

function App() {
  const products = [
    {
      title: "Bracelet Anti-Nausée",
      description: "Soulagez naturellement les nausées grâce à l'acupression",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800",
      icon: Heart
    },
    {
      title: "Bague Anti-Stress",
      description: "Retrouvez calme et sérénité au quotidien",
      image: "https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=800",
      icon: Sparkles
    },
    {
      title: "Collier Anti-Maux de Tête",
      description: "Apaisez vos maux de tête naturellement",
      image: "https://images.unsplash.com/photo-1635767798638-3665960e9533?auto=format&fit=crop&q=80&w=800",
      icon: Brain
    }
  ];

  const testimonials = [
    {
      name: "Marie L.",
      role: "Jeune Maman",
      content: "Le bracelet anti-nausée Aura a transformé ma grossesse. Je peux enfin profiter de cette période sereinement.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=800"
    },
    {
      name: "Thomas B.",
      role: "Cadre Commercial",
      content: "La bague anti-stress Aura m'accompagne dans toutes mes réunions importantes. Un véritable allié au quotidien.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-cover bg-center" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&q=80&w=2000")'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-serif mb-6">Améliorez votre bien-être naturellement avec Aura</h1>
            <p className="text-xl mb-8">Découvrez notre collection de bijoux thérapeutiques, alliant élégance et bien-être pour une vie plus harmonieuse.</p>
            <button className="bg-[#8B5E3C] hover:bg-[#6F4B30] text-white px-8 py-3 rounded-full flex items-center">
              Découvrir nos produits
              <ChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-16">Nos Produits Phares</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <section className="py-20 bg-[#8B5E3C]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center text-white mb-16">Ce que nos clients disent</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Scientific Proof Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-serif text-center mb-16">L'Efficacité Prouvée</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#faf7f2] p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#8B5E3C] mr-3" />
                <h3 className="text-xl font-serif">Études Cliniques</h3>
              </div>
              <p className="text-gray-600">Des études scientifiques démontrent l'efficacité de l'acupression sur les points spécifiques ciblés par nos bijoux.</p>
            </div>
            <div className="bg-[#faf7f2] p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#8B5E3C] mr-3" />
                <h3 className="text-xl font-serif">Matériaux Naturels</h3>
              </div>
              <p className="text-gray-600">Nos bijoux sont fabriqués avec des matériaux naturels sélectionnés pour leurs propriétés thérapeutiques.</p>
            </div>
            <div className="bg-[#faf7f2] p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-[#8B5E3C] mr-3" />
                <h3 className="text-xl font-serif">Résultats Visibles</h3>
              </div>
              <p className="text-gray-600">Plus de 90% de nos clients rapportent une amélioration significative de leur bien-être.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-xl mb-4">À Propos d'Aura</h3>
              <p className="text-gray-300">Des bijoux thérapeutiques alliant élégance et bien-être pour une vie plus harmonieuse.</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Liens Rapides</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Nos Produits</a></li>
                <li><a href="#" className="hover:text-white">Comment ça marche</a></li>
                <li><a href="#" className="hover:text-white">À Propos</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>contact@aura-bijoux.fr</li>
                <li>+33 1 23 45 67 89</li>
                <li>Paris, France</li>
              </ul>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-4">Suivez-nous</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#8B5E3C]"><Instagram /></a>
                <a href="#" className="hover:text-[#8B5E3C]"><Linkedin /></a>
                <a href="#" className="hover:text-[#8B5E3C]"><Facebook /></a>
                <a href="#" className="hover:text-[#8B5E3C]"><Mail /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Aura. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;