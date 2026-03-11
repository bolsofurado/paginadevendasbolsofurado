"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';

const VideoDemo = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Veja como o Bolso Furado funciona.</h2>
          
          <div className="relative aspect-video bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" 
              alt="Video Thumbnail" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                <Play className="text-white w-8 h-8 fill-current" />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-10 h-14 text-lg">
              Testar gratuitamente
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;