import { useEffect, useRef } from 'react'
import { CONTATO, MAILTO_URL, WHATSAPP_URL } from '../data/contato'

type Props = {
  open: boolean
  onClose: () => void
}

export default function CancellationPolicy({ open, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)

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
          <article>
            <h3>1. Objetivo</h3>
            <p>
              A presente Política de Cancelamento tem como objetivo estabelecer as condições e os
              procedimentos para solicitação de cancelamento dos serviços de assessoria jurídica
              relacionados à revisão de juros abusivos em contratos de financiamento, empréstimos e
              outras operações financeiras.
            </p>
          </article>

          <article>
            <h3>2. Direito de arrependimento</h3>
            <p>
              Nas contratações realizadas fora do estabelecimento comercial, inclusive por telefone
              ou pela internet, quando aplicável, será respeitado o prazo legal de arrependimento de
              7 (sete) dias, contado da assinatura do contrato ou do recebimento do serviço,
              conforme previsto no artigo 49 do Código de Defesa do Consumidor.
            </p>
            <p>
              Quando exercido esse direito, serão observadas as consequências legais pertinentes,
              inclusive quanto à restituição dos valores pagos.
            </p>
          </article>

          <article>
            <h3>3. Cancelamento após o prazo de arrependimento</h3>
            <p>
              Após o prazo legal de arrependimento, o pedido de cancelamento será analisado conforme
              as condições estabelecidas no contrato de prestação de serviços e a legislação
              aplicável.
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
              Eventuais valores pagos antecipadamente serão apurados conforme o contrato de
              prestação de serviços e a legislação aplicável.
            </p>
          </article>

          <article>
            <h3>4. Cancelamento após o início dos serviços</h3>
            <p>
              Caso os trabalhos já tenham sido iniciados, o cancelamento não implicará,
              automaticamente, a devolução integral ou a retenção integral dos valores pagos.
            </p>
            <p>
              A apuração será realizada de acordo com os serviços efetivamente executados, as
              condições contratuais válidas e os direitos assegurados ao consumidor.
            </p>
            <p>
              Nenhuma cobrança de multa, taxa administrativa ou retenção será aplicada sem
              fundamento contratual válido e compatibilidade com a legislação vigente.
            </p>
          </article>

          <article>
            <h3>5. Prazo de análise do pedido</h3>
            <p>
              A Monarca Intermediações buscará analisar e responder às solicitações de cancelamento
              em até 5 (cinco) dias úteis, contados do recebimento das informações necessárias.
            </p>
            <p>
              Esse prazo é administrativo e não restringe prazos legais, especialmente aqueles
              relativos ao direito de arrependimento ou a outras obrigações previstas em lei.
            </p>
          </article>

          <article>
            <h3>6. Disposições gerais</h3>
            <p>
              A presente política deverá ser interpretada em conjunto com o contrato de prestação de
              serviços e não poderá afastar direitos assegurados pela legislação brasileira.
            </p>
            <p>
              Em caso de divergência entre esta política e uma norma legal obrigatória, prevalecerá
              a disposição legal aplicável.
            </p>
            <p>
              Eventuais dúvidas poderão ser esclarecidas pelos canais oficiais de atendimento da
              Monarca Intermediações.
            </p>
          </article>

          <div className="policy-contact">
            <h3>Canais oficiais para solicitar o cancelamento</h3>
            <ul>
              <li>
                <i className="fab fa-whatsapp" aria-hidden />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {CONTATO.telefone.exibicao}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope" aria-hidden />
                <a href={MAILTO_URL}>{CONTATO.email}</a>
              </li>
            </ul>
          </div>
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
