export default function Hero() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section className="hero" id="inicio">
      <div className="container">
        <div className="hero-content">
          <h1>Pare de Pagar Juros Abusivos no Seu Financiamento Veicular</h1>
          <p>
            Mais de 90% dos contratos de financiamento possuem taxas acima da média do Banco
            Central. A Monarca Intermediações analisa seu contrato gratuitamente e luta pela redução
            das suas parcelas.
          </p>

          <div className="hero-badges">
            <div className="badge">
              <i className="fas fa-check-circle" aria-hidden /> Análise Gratuita
            </div>
            <div className="badge">
              <i className="fas fa-shield-alt" aria-hidden /> 100% Legal
            </div>
            <div className="badge">
              <i className="fas fa-clock" aria-hidden /> Resultado Rápido
            </div>
          </div>

          <a href="#contato" className="btn" onClick={(e) => scrollTo(e, '#contato')}>
            Quero Analisar Meu Contrato
          </a>
        </div>
      </div>
    </section>
  )
}
