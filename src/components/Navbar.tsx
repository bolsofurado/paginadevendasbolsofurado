"use client";

import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img src="/src/assets/logo.png" alt="Bolso Furado" className="h-14 w-auto" />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <a href="#funcionalidades" className="hover:text-white transition-colors">Funcionalidades</a>
          <a href="#solucao" className="hover:text-white transition-colors">Solução</a>
          <a href="#planos" className="hover:text-white transition-colors">Planos</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-white hover:bg-white/10 hidden sm:inline-flex">
            Entrar
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6">
            Começar Grátis
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;