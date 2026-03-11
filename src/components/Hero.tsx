"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { CheckCircle2, PlayCircle } from 'lucide-react';

const Hero = () => {
  const benefits = [
    "Controle de receitas e despesas",
    "Metas de economia",
    "Projeção financeira",
    "Ferramentas para investimentos",
    "Planejamento financeiro anual"
  ];

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-black">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Controle total do <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">seu dinheiro.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-lg">
              O Bolso Furado é um aplicativo completo para organizar suas finanças, controlar gastos e acompanhar o crescimento do seu dinheiro.
            </p>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="text-purple-500 w-5 h-5" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 h-14 text-lg">
                Começar 30 dias grátis
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 rounded-full px-8 h-14 text-lg gap-2">
                <PlayCircle className="w-5 h-5" />
                Ver demonstração
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 mx-auto w-[280px] lg:w-[320px] aspect-[9/19] bg-zinc-900 rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-800 rounded-b-2xl z-20" />
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800" 
                alt="App Mockup" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-500/30 blur-3xl rounded-full animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;