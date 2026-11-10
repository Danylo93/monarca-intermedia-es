import { useEffect, useRef, useState, type ReactNode } from 'react'
import { CONTATO, MAILTO_URL, WHATSAPP_URL } from '../data/contato'

type Props = {
  open: boolean
  onClose: () => void
}

type Secao = {
  id: string
  titulo: string
  corpo: ReactNode
}

const SECOES: Secao[] = [
  {
    id: 'objetivo',
    titulo: '1. Objetivo',
    corpo: (
      <p>
        A presente Política de Cancelamento tem como objetivo estabelecer as condições e os
        procedimentos para solicitação de cancelamento dos serviços de assessoria jurídica
        relacionados à revisão de juros abusivos em contratos de financiamento, empréstimos e outras
        operações financeiras.
      </p>
    ),
  },
  {
    id: 'arrependimento',
    titulo: '2. Direito de arrependimento',
    corpo: (
      <>
        <p>
          Nas contratações realizadas fora do estabelecimento comercial, inclusive por telefone ou
          pela internet, quando aplicável, será respeitado o prazo legal de arrependimento de 7
          (sete) dias, contado da assinatura do contrato ou do recebimento do serviço, conforme
          previsto no artigo 49 do Código de Defesa do Consumidor.
        </p>
        <p>
          Quando exercido esse direito, serão observadas as consequências legais pertinentes,
          inclusive quanto à restituição dos valores pagos.
        </p>
      </>
    ),
  },
  {
    id: 'apos-prazo',
    titulo: '3. Cancelamento após o prazo de arrependimento',
    corpo: (
      <>
        <p>
          Após o prazo legal de arrependimento, o pedido de cancelamento será analisado conforme as
          condições estabelecidas no contrato de prestação de serviços e a legislação aplicável.
        </p>
        <p>Poderão ser considerados, conforme o caso:</p>
        <ul>
          <li>Os serviços efetivamente prestados até a data do cancelamento;</li>
          <li>As etapas já concluídas do procedimento de análise contratual;</li>
          <li>A elaboração de pareceres, relatórios, cálculos ou documentos;</li>
          <li>A existência de medidas administrativas ou judiciais já iniciadas;</li>
          <li>
            Os valores eventualmente devidos, desde que previstos contratualmente e legalmente
            exigíveis.
          </li>
        </ul>
        <p>
          Eventuais valores pagos antecipadamente serão apurados conforme o contrato de prestação de
          serviços e a legislação aplicável.
        </p>
      </>
    ),
  },
  {
    id: 'apos-inicio',
    titulo: '4. Cancelamento após o início dos serviços',
    corpo: (
      <>
        <p>
          Caso os trabalhos já tenham sido iniciados, o cancelamento não implicará,
          automaticamente, a devolução integral ou a retenção integral dos valores pagos.
        </p>
        <p>
          A apuração será realizada de acordo com os serviços efetivamente executados, as condições
          contratuais válidas e os direitos assegurados ao consumidor.
        </p>
        <p>
          Nenhuma cobrança de multa, taxa administrativa ou retenção será aplicada sem fundamento
          contratual válido e compatibilidade com a legislação vigente.
        </p>
      </>
    ),
  },
  {
    id: 'prazo-analise',
    titulo: '5. Prazo de análise do pedido',
    corpo: (
      <>
        <p>
          A Monarca Intermediações buscará analisar e responder às solicitações de cancelamento em
          até 5 (cinco) dias úteis, contados do recebimento das informações necessárias.
        </p>
        <p>
          Esse prazo é administrativo e não restringe prazos legais, especialmente aqueles relativos
          ao direito de arrependimento ou a outras obrigações previstas em lei.
        </p>
      </>
    ),
  },
  {
    id: 'disposicoes',
    titulo: '6. Disposições gerais',
    corpo: (
      <>
        <p>
          A presente política deverá ser interpretada em conjunto com o contrato de prestação de
          serviços e não poderá afastar direitos assegurados pela legislação brasileira.
        </p>
        <p>
          Em caso de divergência entre esta política e uma norma legal obrigatória, prevalecerá a
          disposição legal aplicável.
        </p>
        <p>
          Eventuais dúvidas poderão ser esclarecidas pelos canais oficiais de atendimento da Monarca
          Intermediações.
        </p>
      </>
    ),
  },
]

export default function CancellationPolicy({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [aberta, setAberta] = useState<string | null>(null)

  // Fecha com ESC e trava o scroll do fundo enquanto o modal estiver aberto.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    dialogRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  // Volta ao estado recolhido sempre que o modal é fechado.
  useEffect(() => {
    if (!open) setAberta(null)
  }, [open])

  if (!open) return null

  return (
    <div
      className="policy-overlay"
      onClick={onClose}
      role="presentation"
      id="politica-cancelamento"
    >
      <div
        className="policy-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="policy-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="policy-header">
          <div>
            <span className="policy-eyebrow">Monarca Intermediações</span>
            <h2 id="policy-title">Política de Cancelamento</h2>
          </div>
          <button type="button" className="policy-close" onClick={onClose} aria-label="Fechar">
            <i className="fas fa-times" aria-hidden />
          </button>
        </div>

        <div className="policy-body">
          <p className="policy-intro">
            Condições para solicitar o cancelamento dos nossos serviços. Toque em um item para ler o
            texto completo.
          </p>

          <div className="policy-accordion">
            {SECOES.map((secao) => {
              const expandida = aberta === secao.id
              return (
                <div className="policy-item" key={secao.id}>
                  <button
                    type="button"
                    className="policy-trigger"
                    aria-expanded={expandida}
                    aria-controls={`policy-panel-${secao.id}`}
                    id={`policy-trigger-${secao.id}`}
                    onClick={() => setAberta(expandida ? null : secao.id)}
                  >
                    <span>{secao.titulo}</span>
                    <i className="fas fa-chevron-down" aria-hidden />
                  </button>

                  {expandida && (
                    <div
                      className="policy-panel"
                      id={`policy-panel-${secao.id}`}
                      role="region"
                      aria-labelledby={`policy-trigger-${secao.id}`}
                    >
                      {secao.corpo}
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <p className="policy-channels">
            <span>Para solicitar o cancelamento, fale com a gente:</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp" aria-hidden /> {CONTATO.telefone.exibicao}
            </a>
            <a href={MAILTO_URL}>
              <i className="fas fa-envelope" aria-hidden /> {CONTATO.email}
            </a>
          </p>
        </div>

        <div className="policy-footer">
          <button type="button" className="btn" onClick={onClose}>
            Entendi
          </button>
        </div>
      </div>
    </div>
  )
}
