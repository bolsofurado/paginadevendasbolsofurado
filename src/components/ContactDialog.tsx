"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showSuccess } from '@/utils/toast';

interface ContactDialogProps {
  trigger: React.ReactNode;
}

const ContactDialog = ({ trigger }: ContactDialogProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] bg-zinc-950 border-zinc-800 text-white p-0 overflow-hidden">
        <div className="grid md:grid-cols-5 h-full">
          {/* Info Side */}
          <div className="md:col-span-2 bg-purple-600 p-8 flex flex-col justify-between">
            <div>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white mb-4">Suporte</DialogTitle>
              </DialogHeader>
              <p className="text-purple-100 text-sm leading-relaxed mb-8">
                Estamos aqui para ajudar você a conquistar sua liberdade financeira.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/80" />
                  <div className="text-xs">
                    <p className="text-white/60">E-mail</p>
                    <p className="font-medium">epicsistemas10@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/80" />
                  <div className="text-xs">
                    <p className="text-white/60">WhatsApp</p>
                    <p className="font-medium">65 99643-1404</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex items-center gap-3">
                <MessageSquare className="w-5 h-5 text-white/80" />
                <p className="text-[10px] text-white/60 uppercase tracking-wider font-bold">
                  Seg. a Sex. 08h às 18h
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3 p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-400">Nome</label>
                <Input 
                  placeholder="Seu nome" 
                  className="bg-zinc-900 border-zinc-800 text-white h-10 rounded-lg focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-400">E-mail</label>
                <Input 
                  type="email"
                  placeholder="seu@email.com" 
                  className="bg-zinc-900 border-zinc-800 text-white h-10 rounded-lg focus:ring-purple-500"
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-medium text-gray-400">Mensagem</label>
                <Textarea 
                  placeholder="Como podemos ajudar?" 
                  className="bg-zinc-900 border-zinc-800 text-white min-h-[100px] rounded-lg focus:ring-purple-500 resize-none"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white h-12 rounded-lg font-bold gap-2 mt-4">
                <Send className="w-4 h-4" />
                Enviar
              </Button>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;