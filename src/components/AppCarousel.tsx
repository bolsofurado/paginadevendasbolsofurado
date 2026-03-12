"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const AppCarousel = () => {
  const slides = [
    {
      title: "Dashboard Financeiro",
      description: "Visão geral completa de todas as suas contas e cartões em um só lugar.",
      image: "/src/assets/dashboard-mockup.jpg",
      position: "object-center"
    },
    {
      title: "Metas de Economia",
      description: "Defina objetivos e acompanhe seu progresso para realizar seus sonhos.",
      image: "/src/assets/despesas-mockup.jpg",
      position: "object-top"
    },
    {
      title: "Receitas vs Despesas",
      description: "Gráficos e listas detalhadas para entender exatamente para onde seu dinheiro vai.",
      image: "/src/assets/despesas-mockup.jpg",
      position: "object-center"
    },
    {
      title: "Projeção Financeira",
      description: "Saiba quanto você terá no futuro com base nos seus hábitos atuais.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=800",
      position: "object-center"
    },
    {
      title: "Controle de Investimentos",
      description: "Acompanhe a rentabilidade da sua carteira de forma simplificada.",
      image: "https://images.unsplash.com/photo-1611974714024-4607a5a45a40?auto=format&fit=crop&q=80&w=800",
      position: "object-center"
    }
  ];

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Conheça o Aplicativo</h2>
          <p className="text-gray-400">Tudo o que você precisa para uma vida financeira saudável.</p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Card className="bg-zinc-900 border-zinc-800 overflow-hidden group">
                    <CardContent className="p-0">
                      <div className="aspect-[4/5] overflow-hidden">
                        <img 
                          src={slide.image} 
                          alt={slide.title} 
                          className={`w-full h-full object-cover ${slide.position} transition-transform duration-500 group-hover:scale-110`}
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">{slide.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{slide.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className="bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800" />
            <CarouselNext className="bg-zinc-900 border-zinc-800 text-white hover:bg-zinc-800" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default AppCarousel;