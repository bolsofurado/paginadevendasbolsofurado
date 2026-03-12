import { serve } from "https://deno.land/std@0.190.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { plan_type } = await req.json()
    const MERCADOPAGO_ACCESS_TOKEN = Deno.env.get('MERCADOPAGO_ACCESS_TOKEN')

    if (!MERCADOPAGO_ACCESS_TOKEN) {
      console.error("[create-checkout] MERCADOPAGO_ACCESS_TOKEN não configurado")
      return new Response(
        JSON.stringify({ error: 'Configuração do servidor incompleta' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Configuração do item baseada no plano
    const planDetails = {
      mensal: { 
        title: "Plano Mensal - Bolso Furado", 
        price: 19.90,
        installments: 1 
      },
      anual: { 
        title: "Plano Anual - Bolso Furado", 
        price: 199.00,
        installments: 12 
      }
    }[plan_type as 'mensal' | 'anual'] || { title: "Assinatura Bolso Furado", price: 19.90, installments: 1 }

    console.log(`[create-checkout] Criando preferência para plano: ${plan_type} (R$ ${planDetails.price})`)

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MERCADOPAGO_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            title: planDetails.title,
            unit_price: planDetails.price,
            quantity: 1,
            currency_id: 'BRL'
          }
        ],
        payment_methods: {
          excluded_payment_types: [
            { id: "ticket" } // Exclui boleto se preferir focar em PIX e Cartão
          ],
          installments: planDetails.installments,
        },
        back_urls: {
          success: "https://checkout.bolsofurado.com.br/cadastro",
          failure: "https://bolsofurado.com.br/#planos",
          pending: "https://bolsofurado.com.br/#planos"
        },
        auto_return: "approved",
      }),
    })

    const data = await response.json()

    if (data.init_point) {
      return new Response(
        JSON.stringify({ url: data.init_point }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    } else {
      throw new Error(data.message || 'Erro ao criar preferência no Mercado Pago')
    }

  } catch (error: any) {
    console.error("[create-checkout] Erro:", error.message)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})