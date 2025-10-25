'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/ui/fade-in';
import {
  MORADOR_FEATURES,
  SINDICO_FEATURES,
  PORTEIRO_FEATURES,
  INTEGRATIONS,
} from '@/constants/features';
import { Users, Crown, Shield, Plug } from 'lucide-react';

export default function FuncionalidadesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#e94560] text-white px-4 py-2">
              Completo
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Todas as Funcionalidades em Um Só Lugar
            </h1>
            <p className="text-xl text-gray-300">
              Do morador ao síndico, do porteiro às integrações. Tudo que você
              precisa para modernizar seu condomínio.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Para Moradores */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Para Moradores
                </h2>
                <p className="text-gray-600">
                  Acesso fácil e rápido pelo app mobile
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MORADOR_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Para Síndicos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Crown className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Para Síndicos
                </h2>
                <p className="text-gray-600">
                  Gestão completa e profissional
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SINDICO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Para Porteiros */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Para Porteiros
                </h2>
                <p className="text-gray-600">
                  Controle total da portaria
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTEIRO_FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Integrações */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={100}>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <Plug className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Integrações
                </h2>
                <p className="text-gray-600">
                  Conecte com suas ferramentas favoritas
                </p>
              </div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
            {INTEGRATIONS.map((integration) => {
              const Icon = integration.icon;
              return (
                <div key={integration.title}>
                  <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <Badge className="bg-green-500 text-white">
                          {integration.badge}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {integration.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {integration.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#e94560] to-[#ff5571] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn delay={50}>
            <h2 className="text-4xl font-bold mb-6">
              Pronto para Experimentar Todas Essas Funcionalidades?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Comece grátis hoje mesmo. Sem cartão de crédito.
            </p>
            <a
              href="/trial"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-[#e94560] rounded-lg hover:bg-gray-100 transition-colors shadow-xl"
            >
              Começar Agora
            </a>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
