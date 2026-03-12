"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AppCarousel from '@/components/AppCarousel';
import ProblemSolution from '@/components/ProblemSolution';
import FeaturesGrid from '@/components/FeaturesGrid';
import VideoDemo from '@/components/VideoDemo';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";

const Index = () => {
  const handleFinalCTA = () => {
    window.location.href = "https://checkout.bolsofurado.com.br/cadastro";
  };

  return (
    <div className="min-h-screen bg-black text-white selection:bg-purple-500/30">
      <Navbar />
      
      <main>
        <Hero />
        <AppCarousel />
        <ProblemSolution />
        <FeaturesGrid />
        <VideoDemo />
        <Testimonials />
        <Pricing />

        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-b from-zinc-950 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-600/5 pointer-events-none" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">
              Pare de perder dinheiro todo mês.
            </h2>
            <Button 
              onClick={handleFinalCTA}
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-12 h-16 text-xl font-bold shadow-2xl shadow-purple-600/20"
            >
              Começar 30 dias grátis
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;