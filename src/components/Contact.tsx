"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from '@/utils/toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <section id="contato" className="py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Suporte e Contato</h2>
          <p className="text-gray-400">Estamos aqui para ajudar você a conquistar sua liberdade financeira.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Fale Conosco</h3>
              <p className="text-gray-400 mb-8">
                Tem alguma dúvida sobre o Bolso Furado ou precisa de suporte técnico? 
                Nossa equipe está pronta para atender você.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600/10 flex items-center justify-center rounded-xl text-purple-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">E-mail</p>
                  <p className="text-white font-medium">epicsistemas10@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600/10 flex items-center justify-center rounded-xl text-purple-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp / Telefone</p>
                  <p className="text-white font-medium">65 99643-1404</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                <div className="w-12 h-12 bg-purple-600/10 flex items-center justify-center rounded-xl text-purple-500">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Suporte</p>
                  <p className="text-white font-medium">Atendimento de Seg. a Sex. das 08h às 18h</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Nome Completo</label>
                <Input 
                  placeholder="Seu nome" 
                  className="bg-black border-zinc-800 text-white h-12 rounded-xl focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">E-mail</label>
                <Input 
                  type="email"
                  placeholder="seu@email.com" 
                  className="bg-black border-zinc-800 text-white h-12 rounded-xl focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Mensagem</label>
                <Textarea 
                  placeholder="Como podemos ajudar?" 
                  className="bg-black border-zinc-800 text-white min-h-[150px] rounded-xl focus:ring-purple-500"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white h-14 rounded-xl font-bold text-lg gap-2">
                <Send className="w-5 h-5" />
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;