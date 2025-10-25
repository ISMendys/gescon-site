import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

export interface TrialOnboardingData {
  full_name: string;
  email: string;
  phone: string;
  password: string;
  condominium_name: string;
  num_units: number;
  cnpj?: string;
  start_trial: boolean;
  endereco_cep: string;
  endereco_logradouro: string;
  endereco_numero: string;
  endereco_bairro: string;
  endereco_cidade: string;
  endereco_estado: string;
  endereco_complemento?: string;
}

export interface TrialOnboardingResponse {
  message: string;
  user_id: number;
  condominium_id: number;
  subscription_plan: string;
  is_trial: boolean;
  trial_ends_at: string | null;
}

export const onboardingService = {
  /**
   * Registra um novo condomínio com trial
   */
  async registerWithTrial(data: TrialOnboardingData): Promise<TrialOnboardingResponse> {
    const response = await axios.post<TrialOnboardingResponse>(
      `${API_URL}/onboarding/trial`,
      data
    );
    return response.data;
  },

  /**
   *  Verifica se um email já está cadastrado
   */
  async checkEmailAvailability(email: string): Promise<boolean> {
    const response = await axios.get<{ available: boolean }>(
      `${API_URL}/onboarding/check-email/${encodeURIComponent(email)}`
    );
    return response.data.available;
  },
};
