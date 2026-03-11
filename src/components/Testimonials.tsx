"use client";

import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      text: "Depois que comecei a usar consegui economizar muito mais.",
      author: "Mariana Silva",
      role: "Usuária há 6 meses"
    },
    {
      text: "O melhor app para controle financeiro que já testei.",
      author: "Ricardo Santos",
      role: "Investidor"
    },
    {
      text: "Agora tenho total controle do meu dinheiro e sei para onde ele vai.",
      author: "Ana Paula",
      role: "Autônoma"
    }
  ];

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">O que nossos usuários dizem</h2>
          <p className="text-gray-400">Junte-se a milhares de pessoas que já transformaram suas finanças.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-white text-lg mb-6 italic">"{review.text}"</p>
              <div>
                <p className="text-white font-bold">{review.author}</p>
                <p className="text-gray-500 text-sm">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;