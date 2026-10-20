export default function CTA() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const el = document.querySelector('#contato')
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <section className="cta-section">
      <div className="container">
        <h2>Não Deixe os Juros Abusivos Tomarem Seu Patrimônio</h2>
        <p>
          Milhares de brasileiros pagam até 3x mais do que deveriam. Faça uma análise gratuita agora
          e descubra quanto você pode economizar.
        </p>
        <a href="#contato" className="btn btn-outline" onClick={scrollTo}>
          Falar com Especialista Agora
        </a>
      </div>
    </section>
  )
}
