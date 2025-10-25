'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle2, ArrowRight, Loader2 } from 'lucide-react';

function EmailSentContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || '';

  useEffect(() => {
    // Se não tiver email, redirecionar para home
    if (!email) {
      router.push('/');
    }
  }, [email, router]);

  if (!email) {
    return null;
  }

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-lg w-full">
        <Card className="shadow-lg text-center">
          <CardHeader>
            <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <CardTitle className="text-3xl text-gray-900">
              Conta Criada com Sucesso!
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Falta apenas um passo para começar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Mail className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-left">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Verifique seu email
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    Enviamos um código de verificação para:
                  </p>
                  <p className="text-sm font-mono font-semibold text-[#e94560] bg-white px-3 py-2 rounded border">
                    {email}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-700">
                Próximos passos:
              </h4>
              <ol className="text-left space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#e94560] shrink-0">1.</span>
                  <span>Abra seu email e procure por uma mensagem do GESCON</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#e94560] shrink-0">2.</span>
                  <span>Copie o código de 6 dígitos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#e94560] shrink-0">3.</span>
                  <span>Cole o código na próxima página</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-[#e94560] shrink-0">4.</span>
                  <span>Pronto! Você já poderá fazer login</span>
                </li>
              </ol>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-[#e94560] to-[#ff5571] hover:from-[#ff5571] hover:to-[#e94560] h-12 text-base"
              onClick={() => router.push(`/verify-email?email=${encodeURIComponent(email)}`)}
            >
              Verificar Email Agora
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <div className="pt-4 border-t">
              <p className="text-xs text-gray-500">
                Não recebeu o email? Verifique sua caixa de spam ou lixo eletrônico.
                <br />
                Você também pode solicitar um novo código na próxima tela.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <a
            href="/trial"
            className="text-sm text-gray-600 hover:text-[#e94560]"
          >
            Voltar para cadastro
          </a>
        </div>
      </div>
    </div>
  );
}

export default function EmailSentPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#e94560]" />
      </div>
    }>
      <EmailSentContent />
    </Suspense>
  );
}
