'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const proofPoints = [
  'Grátis até 50 unidades',
  'Sem cartão de crédito',
  'Ativo em 5 minutos',
];

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(233,69,96,0.1),transparent_50%)] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#e94560]/10 text-[#e94560] text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e94560] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e94560]"></span>
              </span>
              Novo: Integração com Asaas Pagamentos
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Gestão Condominial{' '}
              <span className="bg-gradient-to-r from-[#e94560] to-[#ff5571] bg-clip-text text-transparent">
                Completa
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Simples. Moderna. Eficiente. O sistema completo para administrar
              seu condomínio com <strong>boletos automáticos</strong>, controle
              de acesso, gestão financeira e muito mais.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/trial">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 bg-gradient-to-r from-[#e94560] to-[#ff5571] hover:from-[#ff5571] hover:to-[#e94560] shadow-lg hover:shadow-xl transition-all"
                >
                  Começar Grátis
                </Button>
              </Link>
              <Link href="#demo">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base px-8 py-6 border-2 border-gray-300 hover:border-[#e94560] hover:text-[#e94560]"
                >
                  Ver Demonstração
                </Button>
              </Link>
            </div>

            {/* Proof Points */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {proofPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Placeholder for screenshot/mockup */}
            <div className="relative bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] rounded-2xl shadow-2xl p-8 overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#e94560] rounded-full blur-3xl opacity-20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff5571] rounded-full blur-3xl opacity-20" />

              {/* Mock dashboard preview */}
              <div className="relative bg-white rounded-lg p-6 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse" />
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="h-20 bg-gradient-to-br from-[#e94560]/20 to-[#ff5571]/20 rounded-lg" />
                    <div className="h-20 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg" />
                  </div>
                  <div className="h-32 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg mt-4" />
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="text-2xl font-bold text-[#e94560]">500+</div>
              <div className="text-xs text-gray-600">Condomínios</div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="text-2xl font-bold text-green-500">99.9%</div>
              <div className="text-xs text-gray-600">Uptime</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
