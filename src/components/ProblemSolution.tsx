"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, TrendingUp, Target, Calendar, Zap } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    "Gastos sem controle",
    "Falta de planejamento",
    "Dinheiro desaparece no mês",
    "Falta de visão financeira"
  ];

  const solutions = [
    {
      title: "Controle financeiro completo",
      description: "Gerencie cada centavo com facilidade e precisão.",
      icon: <Zap className="w-6 h-6 text-purple-500" />
    },
    {
      title: "Metas de economia",
      description: "Crie objetivos claros e alcance sua liberdade financeira.",
      icon: <Target className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Projeção do dinheiro no futuro",
      description: "Visualize seu patrimônio crescendo ao longo dos anos.",
      icon: <TrendingUp className="w-6 h-6 text-pink-500" />
    },
    {
      title: "Ferramentas inteligentes",
      description: "Calculadoras e insights automáticos para você.",
      icon: <Calendar className="w-6 h-6 text-emerald-500" />
    }
  ];

  return (
    <>
      <section className="py-24 bg-black border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              A maioria das pessoas não sabe para onde o dinheiro está indo.
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-red-500/5 border border-red-500/10 rounded-xl">
                  <XCircle className="text-red-500 w-5 h-5 shrink-0" />
                  <span className="text-gray-300">{problem}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solucao" className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">O Bolso Furado resolve isso.</h2>
            <p className="text-gray-400">Transformamos sua relação com o dinheiro através de tecnologia.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-purple-500/50 transition-colors"
              >
                <div className="mb-6 p-3 bg-zinc-800 w-fit rounded-xl">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProblemSolution;