"use client";

import React from 'react';
import { 
  LayoutDashboard, 
  Target, 
  LineChart, 
  Calculator, 
  Wallet, 
  Clock, 
  FileText, 
  Hammer 
} from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    { title: "Controle financeiro completo", icon: <LayoutDashboard className="w-5 h-5" /> },
    { title: "Metas de economia", icon: <Target className="w-5 h-5" /> },
    { title: "Projeção financeira", icon: <LineChart className="w-5 h-5" /> },
    { title: "Calculadora de juros compostos", icon: <Calculator className="w-5 h-5" /> },
    { title: "Calculadora de salário líquido", icon: <Wallet className="w-5 h-5" /> },
    { title: "Calculadora de horas extras", icon: <Clock className="w-5 h-5" /> },
    { title: "Calculadora de rescisão", icon: <FileText className="w-5 h-5" /> },
    { title: "Controle de reformas e obras", icon: <Hammer className="w-5 h-5" /> }
  ];

  return (
    <section id="funcionalidades" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Funcionalidades Poderosas</h2>
          <p className="text-gray-400">Tudo o que você precisa em um único lugar.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-xl hover:bg-zinc-800/50 transition-all cursor-default group"
            >
              <div className="p-2 bg-purple-600/10 text-purple-500 rounded-lg group-hover:bg-purple-600 group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <span className="text-gray-300 font-medium">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;