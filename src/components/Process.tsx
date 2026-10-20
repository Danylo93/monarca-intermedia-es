const STEPS = [
  {
    title: 'Análise Gratuita',
    desc: 'Envie seu contrato ou boleto. Nossos especialistas calculam se há juros abusivos sem nenhum custo.',
  },
  {
    title: 'Proposta de Ação',
    desc: 'Se identificarmos irregularidades, apresentamos o potencial de economia e os próximos passos.',
  },
  {
    title: 'Negociação/Ação',
    desc: 'Iniciamos a negociação administrativa ou ação judicial para reduzir seu saldo devedor.',
  },
  {
    title: 'Economia Real',
    desc: 'Você passa a pagar parcelas justas ou quita seu veículo com desconto significativo.',
  },
]

export default function Process() {
  return (
    <section className="process" id="como-funciona">
      <div className="container">
        <div className="section-header">
          <h2>Como Funciona</h2>
          <p>Um processo simples e transparente para recuperar sua tranquilidade financeira.</p>
        </div>

        <div className="process-steps">
          {STEPS.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-number">{i + 1}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}