'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { FadeIn } from '@/components/ui/fade-in';
import {
  Smartphone,
  Monitor,
  Globe,
  Download,
  CheckCircle2,
  Zap,
  Shield,
  Bell,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function AppsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-[#e94560] text-white px-4 py-2">
              Multiplataforma
            </Badge>
            <h1 className="text-5xl font-bold mb-6">
              Três Aplicativos. Uma Gestão Completa.
            </h1>
            <p className="text-xl text-gray-300">
              Desktop para portaria, Mobile para moradores e Web para gestão.
              Tudo sincronizado em tempo real.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mobile App */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn delay={100}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Smartphone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    App Mobile
                  </h2>
                  <p className="text-gray-600">Para Moradores</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                App nativo para iOS e Android. Moradores conectados 24/7 com
                notificações em tempo real, reservas, visitantes e muito mais.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Notificações Push em tempo real',
                  'Reserva de áreas comuns',
                  'Pré-cadastro de visitantes com QR Code',
                  'Consulta de encomendas',
                  'Gestão de veículos',
                  'Transparência financeira',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-black hover:bg-gray-800">
                  <Download className="w-5 h-5 mr-2" />
                  App Store
                </Button>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Download className="w-5 h-5 mr-2" />
                  Google Play
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={200} className="relative">
              <Image
                src="/mobile-apresentation.png"
                alt="Gescon mobile app"
                width={3600}
                height={7200}
                className="mx-auto"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Desktop App */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn delay={100} className="order-2 lg:order-1">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-8">
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <Monitor className="w-16 h-16 text-purple-500" />
                    <div className="grid grid-cols-3 gap-2">
                      <div className="h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded" />
                      <div className="h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded col-span-2" />
                    </div>
                    <div className="h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded" />
                  </div>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={200} className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <Monitor className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    App Desktop
                  </h2>
                  <p className="text-gray-600">Para Portaria</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Aplicação Electron otimizada para Windows, macOS e Linux.
                Controle total da portaria com câmeras, acesso e encomendas.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Visualização de até 8 câmeras simultâneas',
                  'Botão de pânico sempre visível',
                  'Controle de entrada e saída',
                  'Registro de encomendas',
                  'Gestão de visitantes',
                  'Funciona offline com sincronização',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500">
                  <Download className="w-5 h-5 mr-2" />
                  Download Windows
                </Button>
                <Button variant="outline">Outras Plataformas</Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Web App */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeIn delay={100}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">
                    Plataforma Web
                  </h2>
                  <p className="text-gray-600">Para Gestão</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 mb-6">
                Dashboard completo acessível de qualquer navegador. Gestão
                financeira, assembleias digitais, relatórios e muito mais.
              </p>

              <div className="space-y-3 mb-8">
                {[
                  'Dashboard com métricas em tempo real',
                  'Gestão financeira completa',
                  'Boletos automáticos via Asaas',
                  'Assembleias e votações digitais',
                  'Relatórios avançados',
                  'Comunicados e enquetes',
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/trial">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-emerald-500 hover:to-green-500"
                >
                  Acessar Plataforma
                </Button>
              </Link>
            </FadeIn>

            <FadeIn delay={200}>
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-8">
                <div className="bg-white rounded-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-yellow-400" />
                      <div className="w-3 h-3 rounded-full bg-green-400" />
                    </div>
                    <Globe className="w-16 h-16 text-green-500" />
                    <div className="h-4 bg-gray-200 rounded w-2/3" />
                    <div className="grid grid-cols-3 gap-3">
                      <div className="h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded" />
                      <div className="h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded" />
                      <div className="h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded" />
                    </div>
                    <div className="h-24 bg-gradient-to-br from-green-100 to-emerald-100 rounded" />
                  </div>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={100} className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo Integrado e Sincronizado
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Dados atualizados em tempo real em todos os aplicativos
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Tempo Real',
                description:
                  'WebSocket garante sincronização instantânea entre todos os apps',
                gradient: 'from-yellow-500 to-orange-500',
              },
              {
                icon: Shield,
                title: 'Segurança',
                description:
                  'Autenticação JWT, criptografia e controle de acesso rigoroso',
                gradient: 'from-blue-500 to-cyan-500',
              },
              {
                icon: Bell,
                title: 'Notificações',
                description:
                  'Push notifications, email e SMS para todas as ações importantes',
                gradient: 'from-purple-500 to-pink-500',
              },
            ].map((feature) => (
              <div key={feature.title}>
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-4`}
                    >
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn delay={50}>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Requisitos de Sistema
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Para o aplicativo Desktop de portaria
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Requisitos Mínimos */}
            <FadeIn delay={100}>
              <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Requisitos Mínimos
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Para tarefas essenciais
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Sistema Operacional
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Windows 10 (64-bit), macOS 10.15 (Catalina) ou superior,
                      ou Linux moderno (ex: Ubuntu 20.04)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Processador (CPU)
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Intel Core i3 de 8ª Geração ou AMD Ryzen 3 (pelo menos 2
                      núcleos / 4 threads)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Memória RAM
                    </h4>
                    <p className="text-gray-700 text-sm">8 GB</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Placa de Vídeo (GPU)
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Integrada, com suporte a DirectX 12 ou OpenGL 4.5
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Armazenamento
                    </h4>
                    <p className="text-gray-700 text-sm">
                      250 GB de espaço em disco, SSD (Solid State Drive)
                      fortemente recomendado
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-sm text-gray-700">
                    <strong>Justificativa:</strong> 8 GB de RAM é o padrão para
                    uso confortável. O processador garante que os picos de uso
                    não travem o sistema.
                  </p>
                </div>
              </CardContent>
            </Card>
            </FadeIn>

            {/* Requisitos Recomendados */}
            <FadeIn delay={150}>
              <Card className="border-0 shadow-xl bg-gradient-to-br from-[#e94560]/5 to-[#ff5571]/5">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#e94560] to-[#ff5571] flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Requisitos Recomendados
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Para uso intenso, multitarefa e LPR
                    </p>
                  </div>
                </div>

                <div className="mb-4 p-3 bg-[#e94560]/10 rounded-lg border border-[#e94560]/30">
                  <p className="text-sm text-gray-700">
                    <strong>💡 LPR (Reconhecimento de Placas):</strong> Requer
                    GPU dedicada para processamento eficiente de imagens em
                    tempo real.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Sistema Operacional
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Windows 11 (64-bit), macOS 12 (Monterey) ou superior, ou
                      Linux moderno (ex: Ubuntu 22.04)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Processador (CPU)
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Intel Core i5 de 10ª Geração ou AMD Ryzen 5 (pelo menos 4
                      núcleos / 8 threads)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Memória RAM
                    </h4>
                    <p className="text-gray-700 text-sm">16 GB</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Placa de Vídeo (GPU)
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Dedicada com pelo menos 2 GB de VRAM (ex: NVIDIA GeForce
                      MX450, GTX 1650 ou superior)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Armazenamento
                    </h4>
                    <p className="text-gray-700 text-sm">
                      500 GB de espaço em disco, SSD NVMe
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-[#e94560]/10 rounded-lg border border-[#e94560]/30">
                  <p className="text-sm text-gray-700">
                    <strong>Justificativa:</strong> 16 GB de RAM oferecem margem
                    para multitarefa. O processador robusto e GPU dedicada
                    garantem interface sempre rápida e responsiva.
                  </p>
                </div>
              </CardContent>
            </Card>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
