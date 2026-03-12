"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const Terms = () => {
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
              Termos de Uso
            </h1>
            
            <div className="space-y-8 text-gray-400 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar o Bolso Furado, você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Descrição do Serviço</h2>
                <p>
                  O Bolso Furado é uma plataforma de gestão financeira pessoal que oferece ferramentas para controle de gastos, metas de economia e projeções financeiras. O serviço é fornecido "como está" e pode ser atualizado periodicamente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Cadastro e Segurança</h2>
                <p>
                  Para utilizar certas funcionalidades, você precisará criar uma conta. Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas as atividades que ocorrem em sua conta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. Privacidade e Dados</h2>
                <p>
                  Sua privacidade é importante para nós. O uso do serviço também é regido por nossa Política de Privacidade, que descreve como coletamos, usamos e protegemos suas informações financeiras e pessoais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Assinaturas e Pagamentos</h2>
                <p>
                  Oferecemos planos gratuitos e pagos. Ao assinar um plano pago, você concorda com os valores e ciclos de faturamento apresentados no momento da contratação. Cancelamentos podem ser feitos a qualquer momento através das configurações da conta.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. Limitação de Responsabilidade</h2>
                <p>
                  O Bolso Furado é uma ferramenta de auxílio e não substitui o aconselhamento financeiro profissional. Não nos responsabilizamos por decisões financeiras tomadas com base nas informações fornecidas pela plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Alterações nos Termos</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. Alterações significativas serão comunicadas aos usuários através do e-mail cadastrado ou avisos na plataforma.
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

export default Terms;