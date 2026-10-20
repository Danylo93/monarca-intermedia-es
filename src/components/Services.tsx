export default function Services() {
  return (
    <section className="services" id="servicos">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>Soluções completas para quem busca alívio financeiro e justiça contratual.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-file-contract" aria-hidden />
            </div>
            <h3>Ação Revisional</h3>
            <p>
              Revisão judicial ou extrajudicial do contrato de financiamento para eliminar juros
              abusivos e taxas ilegais.
            </p>
            <ul>
              <li>
                <i className="fas fa-check" aria-hidden /> Redução de Juros
              </li>
              <li>
                <i className="fas fa-check" aria-hidden /> Eliminação de Taxas Indevidas
              </li>
              <li>
                <i className="fas fa-check" aria-hidden /> Recálculo do Saldo Devedor
              </li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-car-crash" aria-hidden />
            </div>
            <h3>Defesa Busca e Apreensão</h3>
            <p>
              Proteção imediata contra a perda do veículo quando há atraso nas parcelas devido a
              dificuldades financeiras.
            </p>
            <ul>
              <li>
                <i className="fas fa-check" aria-hidden /> Suspensão Liminar
              </li>
              <li>
                <i className="fas fa-check" aria-hidden /> Negociação Amigável
              </li>
              <li>
                <i className="fas fa-check" aria-hidden /> Manutenção da Posse
              </li>
            </ul>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-calculator" aria-hidden />
            </div>
            <h3>Quitação Antecipada</h3>
            <p>
              Cálculo preciso do valor justo para quitar seu veículo à vista, eliminando juros futuros
              compostos.
            </p>
            <ul>
              <li>
                <i className="fas fa-check" aria-hidden /> Desconto de Até 60%
              </li>
              <li>
                <i className="fas fa-check" aria-hidden /> Liberação Imediata do Documento
              </li>
              <li>
                <i className="fas fa-check" aria-hidden /> Economia Garantida
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
