'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
// Import new icons
import { CheckCircle2, Building2, Mail, Phone, User, Hash, Lock, Loader2, Eye, EyeOff, MapPin, FileText } from 'lucide-react';
import { onboardingService } from '@/services/onboardingService';
import { toast } from 'sonner';
import axios from 'axios';

export default function TrialPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isCepLoading, setIsCepLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    password: '',
    password_confirmation: '',
    condominium_name: '',
    num_units: '',
    cnpj: '', // Add CNPJ
    start_trial: false,
    endereco_cep: '',
    endereco_logradouro: '',
    endereco_numero: '',
    endereco_bairro: '',
    endereco_cidade: '',
    endereco_estado: '',
    endereco_complemento: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCepSearch = async () => {
    const cep = formData.endereco_cep.replace(/\D/g, '');
    if (cep.length !== 8) {
      toast.error('CEP inválido. Deve conter 8 dígitos.');
      return;
    }
    setIsCepLoading(true);
    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data.erro) {
        toast.error('CEP não encontrado.');
      } else {
        setFormData(prev => ({
          ...prev,
          endereco_logradouro: data.logradouro,
          endereco_bairro: data.bairro,
          endereco_cidade: data.localidade,
          endereco_estado: data.uf,
        }));
        toast.success('Endereço preenchido automaticamente!');
      }
    } catch (error) {
      toast.error('Erro ao buscar CEP. Tente novamente.');
    } finally {
      setIsCepLoading(false);
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Validações
      const requiredFields = [
        'full_name', 'email', 'phone', 'password', 'password_confirmation',
        'condominium_name', 'num_units', 'endereco_cep', 'endereco_logradouro',
        'endereco_numero', 'endereco_bairro', 'endereco_cidade', 'endereco_estado'
      ];

      for (const field of requiredFields) {
        if (!formData[field as keyof typeof formData]) {
          toast.error('Preencha todos os campos obrigatórios.');
          setIsLoading(false);
          return;
        }
      }
      
      if (formData.password !== formData.password_confirmation) {
        toast.error('As senhas não coincidem.');
        setIsLoading(false);
        return;
      }

      if (formData.password.length < 8) {
        toast.error('A senha deve ter no mínimo 8 caracteres');
        setIsLoading(false);
        return;
      }

      const numUnits = parseInt(formData.num_units);
      if (isNaN(numUnits) || numUnits <= 0) {
        toast.error('Número de unidades inválido');
        setIsLoading(false);
        return;
      }

      // Verificar se email já existe
      const isEmailAvailable = await onboardingService.checkEmailAvailability(formData.email);
      if (!isEmailAvailable) {
        toast.error('Este email já está cadastrado');
        setIsLoading(false);
        return;
      }

      // Registrar
      const response = await onboardingService.registerWithTrial({
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        condominium_name: formData.condominium_name,
        num_units: numUnits,
        cnpj: formData.cnpj,
        start_trial: formData.start_trial,
        endereco_cep: formData.endereco_cep,
        endereco_logradouro: formData.endereco_logradouro,
        endereco_numero: formData.endereco_numero,
        endereco_bairro: formData.endereco_bairro,
        endereco_cidade: formData.endereco_cidade,
        endereco_estado: formData.endereco_estado,
        endereco_complemento: formData.endereco_complemento,
      });

      // Sucesso
      toast.success('Conta criada com sucesso!');

      // Redirecionar para página de email enviado
      setTimeout(() => {
        router.push(`/email-sent?email=${encodeURIComponent(formData.email)}`);
      }, 1500);

    } catch (error: any) {
      console.error('Erro ao criar conta:', error);
      const errorMessage = error.response?.data?.detail || 'Erro ao criar conta. Tente novamente.';
      toast.error(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comece Grátis Hoje
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Crie sua conta e tenha acesso completo ao GESCON.<br />
              <span className="text-[#e94560] font-semibold">Grátis para sempre</span> até 50 unidades.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Formulário */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle>Cadastre seu Condomínio</CardTitle>
                <CardDescription>
                  Preencha os dados abaixo e comece em 5 minutos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Dados Pessoais */}
                  <h3 className="text-lg font-semibold text-gray-800 pt-2 border-t">Seus Dados</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Nome Completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        name="full_name"
                        placeholder="Seu nome completo"
                        className="pl-10"
                        value={formData.full_name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email Profissional *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="email"
                          name="email"
                          placeholder="seu@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Telefone *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="(11) 99999-9999"
                          className="pl-10"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Senha *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          name="password"
                          placeholder="Mínimo 8 caracteres"
                          className="pl-10 pr-10"
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                          minLength={8}
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2">
                          {showPassword ? <EyeOff className="h-4 w-4 text-gray-500" /> : <Eye className="h-4 w-4 text-gray-500" />}
                        </button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Confirmar Senha *
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type={showPassword ? 'text' : 'password'}
                          name="password_confirmation"
                          placeholder="Repita a senha"
                          className="pl-10 pr-10"
                          value={formData.password_confirmation}
                          onChange={handleInputChange}
                          required
                          minLength={8}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Dados do Condomínio */}
                  <h3 className="text-lg font-semibold text-gray-800 pt-4 border-t">Dados do Condomínio</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nome do Condomínio *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="text"
                          name="condominium_name"
                          placeholder="Ex: Condomínio Vila das Flores"
                          className="pl-10"
                          value={formData.condominium_name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Número de Unidades *
                      </label>
                      <div className="relative">
                        <Hash className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          type="number"
                          name="num_units"
                          placeholder="Ex: 80"
                          className="pl-10"
                          value={formData.num_units}
                          onChange={handleInputChange}
                          required
                          min="1"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      CNPJ (Opcional)
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        name="cnpj"
                        placeholder="00.000.000/0000-00"
                        className="pl-10"
                        value={formData.cnpj}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Endereço */}
                  <h3 className="text-lg font-semibold text-gray-800 pt-4 border-t">Endereço</h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      CEP *
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        type="text"
                        name="endereco_cep"
                        placeholder="Digite o CEP"
                        className="pl-10 pr-24"
                        value={formData.endereco_cep}
                        onChange={handleInputChange}
                        required
                        maxLength={9}
                      />
                      <Button type="button" onClick={handleCepSearch} disabled={isCepLoading || isLoading} className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3">
                        {isCepLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Buscar'}
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2 md:col-span-2">
                      <label className="text-sm font-medium text-gray-700">Logradouro *</label>
                      <Input name="endereco_logradouro" placeholder="Rua, Avenida..." value={formData.endereco_logradouro} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Número *</label>
                      <Input name="endereco_numero" placeholder="Ex: 123" value={formData.endereco_numero} onChange={handleInputChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Complemento</label>
                      <Input name="endereco_complemento" placeholder="Bloco, Apto..." value={formData.endereco_complemento} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Bairro *</label>
                      <Input name="endereco_bairro" placeholder="Bairro" value={formData.endereco_bairro} onChange={handleInputChange} required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Cidade *</label>
                      <Input name="endereco_cidade" placeholder="Cidade" value={formData.endereco_cidade} onChange={handleInputChange} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Estado *</label>
                      <Input name="endereco_estado" placeholder="UF" value={formData.endereco_estado} onChange={handleInputChange} required maxLength={2} />
                    </div>
                  </div>


                  {/* Checkbox Trial */}
                  <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-[#e94560]/10 to-[#ff5571]/10 rounded-lg border border-[#e94560]/20">
                    <input
                      type="checkbox"
                      id="start_trial"
                      checked={formData.start_trial}
                      onChange={(e) => setFormData((prev) => ({ ...prev, start_trial: e.target.checked }))}
                      className="mt-1"
                    />
                    <label htmlFor="start_trial" className="text-sm cursor-pointer">
                      <strong className="text-[#e94560]">Quero experimentar o Plano PRO grátis por 30 dias!</strong>
                      <p className="text-gray-600 text-xs mt-1">
                        Acesso completo à gestão financeira, boletos automáticos e muito mais. Sem cartão de crédito.
                      </p>
                    </label>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-[#e94560] to-[#ff5571] hover:from-[#ff5571] hover:to-[#e94560] h-12 text-base"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Criando conta...
                        </>
                      ) : (
                        'Criar Conta Grátis'
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-gray-500 text-center">
                    Ao criar sua conta, você concorda com nossos{' '}
                    <a href="/termos" className="text-[#e94560] hover:underline">
                      Termos de Uso
                    </a>{' '}
                    e{' '}
                    <a href="/privacidade" className="text-[#e94560] hover:underline">
                      Política de Privacidade
                    </a>
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Benefícios */}
            <div className="space-y-6">
              <Card className="border-[#e94560] border-2">
                <CardHeader>
                  <CardTitle className="text-[#e94560]">O que você ganha:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Acesso completo a todas as funcionalidades básicas',
                      'App mobile para moradores (iOS e Android)',
                      'Sistema de controle de visitantes com QR Code',
                      'Gestão de encomendas e reservas',
                      'Até 50 unidades habitacionais',
                      'Suporte por email',
                      'Sem cartão de crédito necessário',
                      'Sem compromisso - cancele quando quiser',
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-[#e94560] shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
                <CardHeader>
                  <CardTitle>Precisa de mais recursos?</CardTitle>
                  <CardDescription className="text-gray-300">
                    Upgrade para o Plano PRO a qualquer momento
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {[
                      'Gestão Financeira Completa',
                      'Boletos automáticos via Asaas',
                      'Unidades ilimitadas',
                      'Suporte prioritário',
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-[#e94560]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="w-full bg-white text-gray-900 hover:bg-gray-100"
                    asChild
                  >
                    <a href="/planos">Ver Planos</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ rápido */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Perguntas Frequentes
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  É realmente grátis?
                </h3>
                <p className="text-sm text-gray-600">
                  Sim! O plano FREE é gratuito para sempre para condomínios com até 50 unidades.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Preciso de cartão?
                </h3>
                <p className="text-sm text-gray-600">
                  Não! Você não precisa cadastrar cartão de crédito para usar o plano gratuito.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Quanto tempo para ativar?
                </h3>
                <p className="text-sm text-gray-600">
                  Seu sistema fica pronto em menos de 5 minutos após o cadastro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
