'use client';

import { PricingCard } from '@/components/sections/PricingCard';
import { PLANS, PRICING_FAQ } from '@/constants/plans';
import { FadeIn } from '@/components/ui/fade-in';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function PlanosPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Escolha o Plano Ideal para Seu Condomínio
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Do freemium ao enterprise, temos o plano perfeito para você.
              Comece grátis e faça upgrade quando precisar.
            </p>
          </FadeIn>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <FadeIn delay={50}>
              <PricingCard
                name={PLANS.free.name}
                price={PLANS.free.price}
                description={PLANS.free.description}
                features={PLANS.free.features}
                cta={PLANS.free.cta}
                popular={PLANS.free.popular}
                index={0}
              />
            </FadeIn>

            <FadeIn delay={100}>
              <PricingCard
                name={PLANS.pro.name}
                badge={PLANS.pro.badge}
                priceRange={PLANS.pro.priceRange}
                priceTiers={PLANS.pro.priceTiers}
                description={PLANS.pro.description}
                features={PLANS.pro.features}
                cta={PLANS.pro.cta}
                popular={PLANS.pro.popular}
                index={1}
              />
            </FadeIn>

            <FadeIn delay={150}>
              <PricingCard
                name={PLANS.premium.name}
                badge={PLANS.premium.badge}
                price={PLANS.premium.price}
                description={PLANS.premium.description}
                features={PLANS.premium.features}
                cta={PLANS.premium.cta}
                popular={PLANS.premium.popular}
                index={2}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={50}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Compare os Planos
              </h2>
              <p className="text-xl text-gray-600">
                Veja em detalhes o que cada plano oferece
              </p>
            </div>
          </FadeIn>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left p-4 font-semibold text-gray-900">
                    Funcionalidade
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-900">
                    FREE
                  </th>
                  <th className="text-center p-4 font-semibold bg-[#e94560]/5 text-[#e94560]">
                    PRO
                  </th>
                  <th className="text-center p-4 font-semibold text-gray-900">
                    PREMIUM
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: 'Unidades Habitacionais',
                    free: 'Até 50',
                    pro: 'Ilimitadas',
                    premium: 'Ilimitadas',
                  },
                  {
                    feature: 'Usuários Admin',
                    free: '1',
                    pro: '5',
                    premium: 'Ilimitados',
                  },
                  {
                    feature: 'Gestão Financeira',
                    free: false,
                    pro: true,
                    premium: true,
                  },
                  {
                    feature: 'Boletos Automáticos (Asaas)',
                    free: true,
                    pro: true,
                    premium: true,
                  },
                  {
                    feature: 'Multas no Boleto',
                    free: false,
                    pro: true,
                    premium: true,
                  },
                  {
                    feature: 'Gestão de Funcionários',
                    free: false,
                    pro: true,
                    premium: true,
                  },
                  {
                    feature: 'Balancetes',
                    free: false,
                    pro: true,
                    premium: true,
                  },
                  {
                    feature: 'Assembleias Digitais',
                    free: false,
                    pro: true,
                    premium: true,
                  },
                  {
                    feature: 'Espaços Comuns',
                    free: 'Até 3',
                    pro: 'Ilimitados',
                    premium: 'Ilimitados',
                  },
                  {
                    feature: 'Câmeras',
                    free: false,
                    pro: 'Até 8',
                    premium: 'Ilimitadas',
                  },
                  {
                    feature: 'Reconhecimento de Placas (LPR)',
                    free: false,
                    pro: true,
                    premium: true,
                  },
                  {
                    feature: 'Multi-condomínio',
                    free: false,
                    pro: false,
                    premium: true,
                  },
                  {
                    feature: 'White Label',
                    free: false,
                    pro: false,
                    premium: true,
                  },
                  {
                    feature: 'API/Webhooks',
                    free: false,
                    pro: false,
                    premium: true,
                  },
                  {
                    feature: 'Suporte',
                    free: 'Email 48h',
                    pro: 'Prioritário 12h',
                    premium: '24/7 Dedicado',
                  },
                ].map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-4 text-gray-900 font-medium">
                      {row.feature}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.free === 'boolean' ? (
                        row.free ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.free}</span>
                      )}
                    </td>
                    <td className="p-4 text-center bg-[#e94560]/5">
                      {typeof row.pro === 'boolean' ? (
                        row.pro ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-900 font-semibold">
                          {row.pro}
                        </span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      {typeof row.premium === 'boolean' ? (
                        row.premium ? (
                          <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                        ) : (
                          <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{row.premium}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Nota sobre custos Asaas:</strong> O Asaas cobra R$ 2,00
              por boleto recebido (R$ 1,00 nos primeiros 3 meses). Este custo é
              do condomínio. A precificação escalonada do Plano PRO garante
              margem de lucro mesmo com condomínios maiores.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <FadeIn delay={50}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Perguntas Frequentes
              </h2>
              <p className="text-xl text-gray-600">
                Tudo que você precisa saber sobre nossos planos
              </p>
            </div>
          </FadeIn>

          <Accordion type="single" collapsible className="space-y-4">
            {PRICING_FAQ.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#e94560]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
