/** Fonte única de verdade dos dados de contato da Monarca Intermediações. */

export const CONTATO = {
  empresa: 'Monarca Intermediações',

  responsavel: {
    nome: 'Ingrid Oliveira',
    cargo: 'CEO',
  },

  telefone: {
    exibicao: '(11) 96214-6942',
    /** Formato E.164 para links tel: */
    link: '+5511962146942',
    /** Somente dígitos com DDI, para o wa.me */
    whatsapp: '5511962146942',
  },

  email: 'assessoriamonarca@gmail.com',

  endereco: {
    logradouro: 'Av. Antônio Estevão de Carvalho, 2707',
    complemento: 'Sala 1',
    bairro: 'Cidade Patriarca',
    cidade: 'São Paulo',
    uf: 'SP',
  },

  horario: 'Seg a Sex: 08h às 18h',
} as const

export const ENDERECO_COMPLETO =
  `${CONTATO.endereco.logradouro} - ${CONTATO.endereco.complemento} - ` +
  `${CONTATO.endereco.bairro} - ${CONTATO.endereco.cidade}/${CONTATO.endereco.uf}`

export const WHATSAPP_URL = `https://wa.me/${CONTATO.telefone.whatsapp}`

export const MAPA_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  ENDERECO_COMPLETO,
)}`

export const MAILTO_URL = `mailto:${CONTATO.email}`

export const TEL_URL = `tel:${CONTATO.telefone.link}`
