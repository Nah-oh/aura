import React from 'react';
import { Sparkles, Brain, Heart } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#faf7f2]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-serif text-center mb-16">Comment ça marche ?</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-serif mb-4">L'Acupression : Une Science Millénaire</h3>
            <p className="text-gray-600 mb-6">
              L'acupression est une technique thérapeutique ancestrale basée sur la stimulation de points précis du corps. 
              Nos bijoux sont conçus pour cibler ces points spécifiques, permettant de soulager naturellement différents maux.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-[#8B5E3C] mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Point Nei Guan (P6)</h4>
                  <p className="text-gray-600">Situé sur l'avant-bras, ce point est reconnu pour soulager les nausées et le mal des transports.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Sparkles className="w-6 h-6 text-[#8B5E3C] mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Point Shen Men</h4>
                  <p className="text-gray-600">Localisé sur l'oreille, ce point aide à réduire l'anxiété et améliore la qualité du sommeil.</p>
                </div>
              </div>
              <div className="flex items-start">
                <Brain className="w-6 h-6 text-[#8B5E3C] mt-1 mr-3" />
                <div>
                  <h4 className="font-semibold mb-1">Point He Gu (LI4)</h4>
                  <p className="text-gray-600">Situé sur la main, ce point est efficace pour soulager les maux de tête et les migraines.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800"
              alt="Acupression points"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-lg shadow-lg max-w-xs">
              <p className="text-gray-600 italic">
                "Des études cliniques montrent une réduction de 70% des symptômes grâce à la stimulation régulière des points d'acupression."
              </p>
              <p className="text-sm text-[#8B5E3C] mt-4">- Journal of Alternative Medicine, 2023</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-serif text-center mb-8">Le Processus en 3 Étapes</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5E3C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">1</span>
              </div>
              <h4 className="font-semibold mb-2">Identification</h4>
              <p className="text-gray-600">Choisissez le bijou adapté à vos besoins spécifiques.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5E3C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">2</span>
              </div>
              <h4 className="font-semibold mb-2">Application</h4>
              <p className="text-gray-600">Portez votre bijou thérapeutique au quotidien.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B5E3C] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">3</span>
              </div>
              <h4 className="font-semibold mb-2">Résultats</h4>
              <p className="text-gray-600">Profitez des bienfaits naturels de l'acupression.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;