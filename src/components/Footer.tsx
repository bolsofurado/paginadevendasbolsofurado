"use client";

import React from 'react';
import { Instagram, Twitter, Linkedin, Facebook, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <img src="/src/assets/logo.png" alt="Bolso Furado" className="h-16 w-auto mb-6" />
            <p className="text-gray-400 max-w-sm mb-6">
              Ajudando milhares de pessoas a conquistarem sua liberdade financeira através de tecnologia e educação.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-purple-500" />
                <span>epicsistemas10@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-purple-500" />
                <span>65 99643-1404</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#contato" className="hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-zinc-900 rounded-lg text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-lg text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-lg text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-zinc-900 rounded-lg text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Bolso Furado. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;