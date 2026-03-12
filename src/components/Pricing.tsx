"use client";

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { showError } from '@/utils/toast';

const Pricing = () => {
  const [loading, setLoading] = useState<string | null>(null);

  const handleCheckout = async (plan: string) => {
    setLoading(plan);
    try {
      // Invocando a Edge Function para criar a preferência de pagamento
      // Assumindo que você tenha uma função chamada 'create-checkout'
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { plan_type: plan }
      });

      if (error) throw error;

      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("URL de checkout não encontrada");
      }
    } catch (error: any) {
      console.error("Erro ao iniciar checkout:", error);
      showError("Não foi possível iniciar o checkout. Tente novamente.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <section id="planos" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Planos Simples e Transparentes</h2>
          <p className="text-gray-400">Escolha o plano que melhor se adapta às suas necessidades.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Monthly Plan */}
          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Plano Mensal</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">R$ 29</span>
              <span className="text-gray-500">/mês</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {["Controle completo", "Todas as calculadoras", "Suporte prioritário"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <Check className="text-purple-500 w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              onClick={() => handleCheckout('mensal')}
              disabled={loading !== null}
              variant="outline" 
              className="w-full border-purple-500/30 text-purple-500 hover:bg-purple-500/10 h-12 rounded-xl font-bold"
            >
              {loading === 'mensal' ? <Loader2 className="w-4 h-4 animate-spin" /> : "Assinar agora"}
            </Button>
          </div>

          {/* Annual Plan */}
          <div className="p-8 bg-purple-600 border border-purple-500 rounded-3xl flex flex-col relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white text-purple-600 text-xs font-bold px-3 py-1 rounded-full">
              MAIS POPULAR
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Plano Anual</h3>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-bold text-white">R$ 290</span>
              <span className="text-purple-100">/ano</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
              {["Tudo do plano mensal", "2 meses grátis", "Acesso antecipado a novidades", "Consultoria financeira básica"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <Check className="text-white w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
            <Button 
              onClick={() => handleCheckout('anual')}
              disabled={loading !== null}
              className="w-full bg-white text-purple-600 hover:bg-gray-100 h-12 rounded-xl font-bold"
            >
              {loading === 'anual' ? <Loader2 className="w-4 h-4 animate-spin" /> : "Assinar agora"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;