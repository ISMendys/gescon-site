
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'FREE',
    price: 'Grátis',
    description: 'Perfeito para começar',
    features: ['Até 50 unidades', 'App mobile', 'Controle de acesso básico'],
  },
  {
    name: 'PRO',
    price: 'R$ 149,90',
    popular: true,
    description: 'Mais escolhido',
    features: [
      'Unidades ilimitadas',
      'Boletos automáticos',
      'Gestão financeira completa',
    ],
  },
  {
    name: 'PREMIUM',
    price: 'R$ 399,90',
    description: 'Para administradoras',
    features: ['Multi-condomínio', 'White label', 'API completa'],
  },
];

export function PricingPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planos para Todos os Tamanhos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Do freemium ao enterprise. Comece grátis e escale quando precisar.
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
            >
              <Card
                className={`h-full flex flex-col ${
                  plan.popular
                    ? 'border-[#e94560] border-2 shadow-lg scale-105'
                    : 'border-gray-200'
                } transition-all`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-[#e94560] to-[#ff5571] text-white text-center py-2 text-sm font-semibold">
                    Mais Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {plan.price}
                    {plan.price !== 'Grátis' && (
                      <span className="text-lg text-gray-500">+</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="text-center mt-12"
        >
          <Link href="/planos">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 group"
            >
              Ver Todos os Planos e Comparar
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
