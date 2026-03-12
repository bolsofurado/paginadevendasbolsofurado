"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Política de Privacidade
            </h1>
            
            <div className="space-y-8 text-gray-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Coleta de Informações</h2>
                <p>
                  Coletamos informações que você nos fornece diretamente ao criar uma conta, como nome e e-mail, além dos dados financeiros que você opta por inserir na plataforma para fins de gestão.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Uso dos Dados</h2>
                <p>
                  Seus dados são utilizados exclusivamente para fornecer as funcionalidades do Bolso Furado, personalizar sua experiência, processar pagamentos e enviar comunicações importantes sobre o serviço.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Segurança da Informação</h2>
                <p>
                  Implementamos medidas de segurança rigorosas, incluindo criptografia de ponta a ponta e protocolos de acesso seguro, para proteger seus dados contra acesso não autorizado ou divulgação.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Compartilhamento com Terceiros</h2>
                <p>
                  Não vendemos seus dados pessoais. Podemos compartilhar informações com provedores de serviços essenciais (como processadores de pagamento), sempre sob estritos acordos de confidencialidade.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Seus Direitos</h2>
                <p>
                  Você tem o direito de acessar, corrigir ou excluir seus dados a qualquer momento através das configurações da sua conta ou entrando em contato com nosso suporte.
                </p>
              </section>

              <section className="pt-8 border-t border-white/10">
                <p className="text-sm">
                  Última atualização: {new Date().toLocaleDateString('pt-BR')}
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;