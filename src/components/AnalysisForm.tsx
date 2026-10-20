import { useMemo, useState } from 'react'

type Step = 1 | 2 | 3

type BankOption =
  | ''
  | 'Banco do Brasil'
  | 'Bradesco'
  | 'Caixa Econômica Federal'
  | 'Itaú'
  | 'Santander'
  | 'Safra'
  | 'BV Financeira'
  | 'Pan'
  | 'Porto Bank'
  | 'Outro'

const BANKS: BankOption[] = [
  '',
  'Banco do Brasil',
  'Bradesco',
  'Caixa Econômica Federal',
  'Itaú',
  'Santander',
  'Safra',
  'BV Financeira',
  'Pan',
  'Porto Bank',
  'Outro',
]

const TOTAL_STEPS = 3

// Converte "1.234,56" -> 1234.56
function parseBRL(value: string): number {
  if (!value) return 0
  const cleaned = value.replace(/\D/g, '')
  return Number(cleaned) / 100
}

// Converte 1234.56 -> "1.234,56"
function formatBRL(value: number): string {
  return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

// Máscara de input monetário em tempo real
function maskBRL(raw: string): string {
  const digits = raw.replace(/\D/g, '').padStart(3, '0')
  const intPart = digits.slice(0, -2).replace(/^0+/, '') || '0'
  const decPart = digits.slice(-2)
  const withDots = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${withDots},${decPart}`
}

export default function AnalysisForm() {
  const [step, setStep] = useState<Step>(1)
  const [parcelaRaw, setParcelaRaw] = useState('')
  const [financiadoRaw, setFinanciadoRaw] = useState('')
  const [banco, setBanco] = useState<BankOption>('')
  const [prazoMeses, setPrazoMeses] = useState<string>('48')
  const [submitted, setSubmitted] = useState(false)

  const parcela = parseBRL(parcelaRaw)
  const financiado = parseBRL(financiadoRaw)
  const prazo = Number(prazoMeses) || 0

  // Estimativa simplificada: supõe juros abusivos ~2,5% a.m. vs taxa justa ~1,4% a.m.
  // Economia ≈ diferença acumulada sobre o saldo. Cálculo ilustrativo, não jurídico.
  const estimate = useMemo(() => {
    if (parcela <= 0 || financiado <= 0 || prazo <= 0) return null
    const pagoTotal = parcela * prazo
    const jurosPagos = Math.max(pagoTotal - financiado, 0)
    const economiaEstimada = jurosPagos * 0.42 // ~42% dos juros podem ser contestados
    const parcelaReduzida = parcela - economiaEstimada / prazo
    return {
      pagoTotal,
      jurosPagos,
      economiaEstimada,
      parcelaReduzida: Math.max(parcelaReduzida, 0),
      percentualReducao: parcela > 0 ? (economiaEstimada / prazo / parcela) * 100 : 0,
    }
  }, [parcela, financiado, prazo])

  const progress = Math.round((step / TOTAL_STEPS) * 100)

  const canAdvance1 = parcela > 0
  const canAdvance2 = financiado > 0 && prazo > 0
  const canSubmit = banco !== ''

  const handleMoney = (
    raw: string,
    setter: (v: string) => void,
  ) => {
    setter(maskBRL(raw))
  }

  const reset = () => {
    setStep(1)
    setParcelaRaw('')
    setFinanciadoRaw('')
    setBanco('')
    setPrazoMeses('48')
    setSubmitted(false)
  }

  return (
    <section className="analysis-section" id="analise">
      <div className="container analysis-container">
        <div className="section-header">
          <span className="eyebrow">Simulação gratuita</span>
          <h2>Descubra se você pagou juros abusivos</h2>
          <p>
            Responda 3 perguntas rápidas. Nossa equipe analisa seu contrato e estima quanto
            você pode recuperar — sem compromisso.
          </p>
        </div>

        <div className="analysis-card">
          {!submitted ? (
            <>
              <div className="analysis-progress">
                <div className="analysis-progress-track">
                  <div className="analysis-progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <div className="analysis-progress-label">
                  Etapa {step} de {TOTAL_STEPS}
                </div>
              </div>

              {step === 1 && (
                <div className="analysis-step">
                  <h3>Qual o valor da sua parcela atual?</h3>
                  <p className="analysis-hint">
                    Informe o valor que você paga hoje, por mês, no financiamento do veículo.
                  </p>
                  <label htmlFor="af-parcela" className="analysis-label">
                    Valor da parcela
                  </label>
                  <div className="money-input">
                    <span className="money-prefix">R$</span>
                    <input
                      id="af-parcela"
                      inputMode="numeric"
                      value={parcelaRaw}
                      onChange={(e) => handleMoney(e.target.value, setParcelaRaw)}
                      placeholder="0,00"
                    />
                  </div>
                  <div className="analysis-nav">
                    <span />
                    <button
                      type="button"
                      className="btn-next"
                      disabled={!canAdvance1}
                      onClick={() => setStep(2)}
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="analysis-step">
                  <h3>Quanto foi financiado e em quantas parcelas?</h3>
                  <p className="analysis-hint">
                    Esses dados estão no seu contrato ou no boleto. Usamos para calcular os
                    juros totais pagos.
                  </p>

                  <label htmlFor="af-financiado" className="analysis-label">
                    Valor total financiado
                  </label>
                  <div className="money-input">
                    <span className="money-prefix">R$</span>
                    <input
                      id="af-financiado"
                      inputMode="numeric"
                      value={financiadoRaw}
                      onChange={(e) => handleMoney(e.target.value, setFinanciadoRaw)}
                      placeholder="0,00"
                    />
                  </div>

                  <label htmlFor="af-prazo" className="analysis-label">
                    Prazo do financiamento
                  </label>
                  <select
                    id="af-prazo"
                    value={prazoMeses}
                    onChange={(e) => setPrazoMeses(e.target.value)}
                  >
                    <option value="12">12 meses</option>
                    <option value="24">24 meses</option>
                    <option value="36">36 meses</option>
                    <option value="48">48 meses</option>
                    <option value="60">60 meses</option>
                    <option value="72">72 meses</option>
                  </select>

                  <div className="analysis-nav">
                    <button type="button" className="btn-back" onClick={() => setStep(1)}>
                      Voltar
                    </button>
                    <button
                      type="button"
                      className="btn-next"
                      disabled={!canAdvance2}
                      onClick={() => setStep(3)}
                    >
                      Continuar
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="analysis-step">
                  <h3>Em qual banco foi feito o financiamento?</h3>
                  <p className="analysis-hint">
                    Cada instituição tem um histórico diferente de cláusulas abusivas. Isso
                    ajuda nossa equipe a direcionar a análise.
                  </p>

                  <label htmlFor="af-banco" className="analysis-label">
                    Banco / Financeira
                  </label>
                  <select
                    id="af-banco"
                    value={banco}
                    onChange={(e) => setBanco(e.target.value as BankOption)}
                  >
                    <option value="" disabled>
                      Selecione uma opção
                    </option>
                    {BANKS.filter(Boolean).map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>

                  <div className="analysis-nav">
                    <button type="button" className="btn-back" onClick={() => setStep(2)}>
                      Voltar
                    </button>
                    <button
                      type="button"
                      className="btn-next"
                      disabled={!canSubmit}
                      onClick={() => setSubmitted(true)}
                    >
                      Ver minha estimativa
                    </button>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="analysis-result">
              <div className="result-badge">
                <i className="fas fa-check" aria-hidden />
              </div>
              <h3>Sua estimativa preliminar</h3>
              <p className="result-sub">
                Com base nos dados informados, há indícios de cobrança acima da média do
                mercado.
              </p>

              <div className="result-grid">
                <div className="result-item">
                  <span className="result-label">Economia estimada</span>
                  <strong className="result-value highlight">
                    R$ {estimate ? formatBRL(estimate.economiaEstimada) : '—'}
                  </strong>
                </div>
                <div className="result-item">
                  <span className="result-label">Parcela pode cair para</span>
                  <strong className="result-value">
                    R$ {estimate ? formatBRL(estimate.parcelaReduzida) : '—'}
                  </strong>
                </div>
                <div className="result-item">
                  <span className="result-label">Redução aproximada</span>
                  <strong className="result-value">
                    {estimate ? estimate.percentualReducao.toFixed(1) : '0'}%
                  </strong>
                </div>
                <div className="result-item">
                  <span className="result-label">Instituição</span>
                  <strong className="result-value small">{banco || '—'}</strong>
                </div>
              </div>

              <div className="result-disclaimer">
                <i className="fas fa-info-circle" aria-hidden />
                <p>
                  Valores ilustrativos. A revisão definitiva depende da análise jurídica do
                  seu contrato e das taxas praticadas à época.
                </p>
              </div>

              <div className="result-actions">
                <a href="#contato" className="btn-next">
                  Falar com especialista
                </a>
                <button type="button" className="btn-back" onClick={reset}>
                  Refazer simulação
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}