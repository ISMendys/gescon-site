'use client';

import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d44] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#e94560] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#ff5571] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Modernizar Seu Condomínio?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Junte-se a centenas de condomínios que já transformaram sua gestão
              com o GESCON. Comece grátis hoje mesmo.
            </p>

            {/* Benefits */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center mb-10">
              {[
                'Sem cartão de crédito',
                'Ativo em 5 minutos',
                'Suporte dedicado',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  className="flex items-center gap-2 text-gray-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/trial">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-base px-8 py-6 bg-gradient-to-r from-[#e94560] to-[#ff5571] hover:from-[#ff5571] hover:to-[#e94560] shadow-lg hover:shadow-xl"
                >
                  Começar Grátis Agora
                </Button>
              </Link>
              <Link href="/contato">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-base px-8 py-6 border-2 border-white bg-transparent text-white hover:bg-white hover:text-gray-900 transition-colors"
                >
                  Falar com Especialista
                </Button>
              </Link>
            </div>

            {/* Trust badge */}
            <p className="text-sm text-gray-400 mt-8">
              Mais de 500 condomínios confiam no GESCON • 99.9% de uptime •
              Suporte em português
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
