'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Mail, Loader2, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

function VerifyEmailContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailParam = searchParams.get('email') || '';

  const [email, setEmail] = useState(emailParam);
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [canResend, setCanResend] = useState(true);

  // API_URL já contém /api/v1, então NÃO duplicar!
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

  // Timer para expiração (15 minutos)
  useEffect(() => {
    if (timeLeft === null) return;

    if (timeLeft <= 0) {
      setTimeLeft(null);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  // Formatar tempo restante
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error('Digite seu email');
      return;
    }

    if (code.length !== 6) {
      toast.error('O código deve ter 6 dígitos');
      return;
    }

    setIsLoading(true);

    try {
      await axios.post(`${API_URL}/email-verification/verify`, {
        email,
        code,
      });

      toast.success('Email verificado com sucesso!');

      // Redirecionar para login após 1.5s
      setTimeout(() => {
        const loginUrl = process.env.NEXT_PUBLIC_WEB_URL || 'http://localhost:3000';
        window.location.href = `${loginUrl}/login?email=${encodeURIComponent(email)}&verified=true`;
      }, 1500);

    } catch (error: any) {
      console.error('Erro ao verificar email:', error);
      const errorMessage = error.response?.data?.detail || 'Código inválido ou expirado. Tente novamente.';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResend = async () => {
    if (!email) {
      toast.error('Digite seu email');
      return;
    }

    setIsResending(true);
    setCanResend(false);

    try {
      await axios.post(`${API_URL}/email-verification/resend`, {
        email,
      });

      toast.success('Novo código enviado! Verifique seu email.');
      setTimeLeft(900); // 15 minutos
      setCode(''); // Limpar código antigo

      // Habilitar reenvio após 60 segundos
      setTimeout(() => {
        setCanResend(true);
      }, 60000);

    } catch (error: any) {
      console.error('Erro ao reenviar código:', error);
      const errorMessage = error.response?.data?.detail || 'Erro ao reenviar código. Tente novamente.';
      toast.error(errorMessage);
      setCanResend(true);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-[#e94560]/10 flex items-center justify-center">
              <Mail className="h-8 w-8 text-[#e94560]" />
            </div>
            <CardTitle className="text-2xl">Verifique seu Email</CardTitle>
            <CardDescription>
              Enviamos um código de 6 dígitos para seu email
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleVerify} className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  required
                  disabled={!!emailParam}
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">
                  Código de Verificação
                </label>
                <Input
                  type="text"
                  value={code}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 6) {
                      setCode(value);
                    }
                  }}
                  placeholder="000000"
                  className="text-center text-2xl tracking-widest font-mono"
                  maxLength={6}
                  required
                />
              </div>

              {timeLeft !== null && timeLeft > 0 && (
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Código expira em: <strong>{formatTime(timeLeft)}</strong></span>
                </div>
              )}

              {timeLeft !== null && timeLeft <= 0 && (
                <div className="flex items-center justify-center gap-2 text-sm text-orange-600 bg-orange-50 p-3 rounded-lg">
                  <AlertCircle className="h-4 w-4" />
                  <span>Código expirado. Solicite um novo código.</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={isLoading || code.length !== 6}
                className="w-full bg-gradient-to-r from-[#e94560] to-[#ff5571] hover:from-[#ff5571] hover:to-[#e94560] h-12"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verificando...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Verificar Email
                  </>
                )}
              </Button>

              <div className="text-center space-y-2">
                <p className="text-sm text-gray-600">
                  Não recebeu o código?
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleResend}
                  disabled={isResending || !canResend}
                  className="w-full"
                >
                  {isResending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Reenviando...
                    </>
                  ) : (
                    'Reenviar Código'
                  )}
                </Button>
                {!canResend && !isResending && (
                  <p className="text-xs text-gray-500">
                    Aguarde 60 segundos para reenviar
                  </p>
                )}
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-gray-500 text-center">
                  Verifique também sua caixa de spam ou lixo eletrônico
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <a
            href="/trial"
            className="text-sm text-[#e94560] hover:underline"
          >
            ← Voltar para cadastro
          </a>
        </div>
      </div>
    </div>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#e94560]" />
      </div>
    }>
      <VerifyEmailContent />
    </Suspense>
  );
}
