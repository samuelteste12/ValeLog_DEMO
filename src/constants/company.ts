/** Dados institucionais oficiais — Cooperativa de Transportes do Vale do Taquari / Vale Log */

export const COMPANY = {
  legalName: 'Cooperativa de Transportes do Vale do Taquari LTDA',
  brandName: 'Vale Log',
  addressLine1: 'Rodovia RS 130, KM 76, Nº 1952',
  addressLine2: 'Bairro Barra do Forqueta, Arroio do Meio/RS',
  /** Exibição humana */
  addressFull:
    'Rodovia RS 130, KM 76, Nº 1952 — Bairro Barra do Forqueta, Arroio do Meio/RS',
  phoneDisplay: '(51) 3716-8100',
  /** wa.me exige dígitos sem símbolos (55 + DDD + número) */
  whatsappDigits: '555137168100',
  email: 'contato@coopervalelog.com.br',
  website: 'https://coopervalelog.com.br',
  websiteHost: 'coopervalelog.com.br',
} as const;

export const WHATSAPP_PREFILL_MESSAGE =
  'Olá, vim pelo site da Vale Log e gostaria de solicitar mais informações sobre transporte.';

export function getWhatsAppHref(text: string = WHATSAPP_PREFILL_MESSAGE): string {
  return `https://wa.me/${COMPANY.whatsappDigits}?text=${encodeURIComponent(text)}`;
}

/** Indicadores fornecidos para a demo — manter alinhados aos textos institucionais */
export const INSTITUTIONAL_METRICS = {
  trucks: '200',
  trucksLabel: 'caminhões graneleiros',
  monthlyCapacity: '61.000',
  monthlyCapacityLabel: 'toneladas/mês de capacidade',
  cargoTypes: 'Cereais, fertilizantes e sementes',
} as const;
