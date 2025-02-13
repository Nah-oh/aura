import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-[#2C1810] py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-serif text-white mb-4">Restez informé</h2>
          <p className="text-gray-300 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières actualités et offres exclusives.
          </p>
          <form className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#8B5E3C]"
            />
            <button
              type="submit"
              className="bg-[#8B5E3C] text-white px-8 py-3 rounded-full hover:bg-[#6F4B30] transition-colors duration-300"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;