export default function About() {
  return (
    <section className="about" id="sobre">
      <div className="container">
        <div className="section-header">
          <h2>Por Que Escolher a Monarca?</h2>
          <p>
            Somos especialistas em direito financeiro e defesa do consumidor, focados exclusivamente
            em proteger você de cobranças indevidas.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <i className="fas fa-gavel" aria-hidden />
            <h3>Base Legal Sólida</h3>
            <p>
              Nossas ações são fundamentadas no Código de Defesa do Consumidor e jurisprudência
              consolidada dos tribunais superiores.
            </p>
          </div>
          <div className="about-card">
            <i className="fas fa-hand-holding-usd" aria-hidden />
            <h3>Sem Custos Iniciais</h3>
            <p>
              Trabalhamos com êxito. Você só paga após conseguirmos a redução efetiva das suas
              parcelas ou quitação antecipada.
            </p>
          </div>
          <div className="about-card">
            <i className="fas fa-user-tie" aria-hidden />
            <h3>Atendimento Personalizado</h3>
            <p>
              Cada caso é único. Nossa equipe jurídica analisa detalhadamente seu contrato para
              encontrar as melhores oportunidades.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
