import { CONTATO, MAILTO_URL, MAPA_URL, TEL_URL, WHATSAPP_URL } from '../data/contato'

type Props = {
  onOpenPolicy: () => void
}

export default function Footer({ onOpenPolicy }: Props) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) window.scrollTo({ top: (el as HTMLElement).offsetTop - 80, behavior: 'smooth' })
  }

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo" style={{ marginBottom: 20 }}>
              <img src="/logo.jpeg" alt="Monarca Intermediações" />
              <span>MONARCA</span>
            </div>
            <p>
              Especialistas em revisão de contratos financeiros e defesa do consumidor. Lutamos por
              justiça nas relações de crédito.
            </p>
          </div>

          <div className="footer-col">
            <h4>Links Rápidos</h4>
            <ul>
              <li>
                <a href="#inicio" onClick={(e) => scrollTo(e, '#inicio')}>
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" onClick={(e) => scrollTo(e, '#sobre')}>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" onClick={(e) => scrollTo(e, '#servicos')}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#contato" onClick={(e) => scrollTo(e, '#contato')}>
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Ação Revisional</a></li>
              <li><a href="#servicos">Busca e Apreensão</a></li>
              <li><a href="#servicos">Quitação Antecipada</a></li>
              <li><a href="#servicos">Consultoria Financeira</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contato</h4>
            <ul className="footer-contact">
              <li>
                <i className="fas fa-map-marker-alt" aria-hidden />
                <a href={MAPA_URL} target="_blank" rel="noopener noreferrer">
                  {CONTATO.endereco.logradouro} - {CONTATO.endereco.complemento}
                  <br />
                  {CONTATO.endereco.bairro} - {CONTATO.endereco.cidade}/{CONTATO.endereco.uf}
                </a>
              </li>
              <li>
                <i className="fab fa-whatsapp" aria-hidden />
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  {CONTATO.telefone.exibicao}
                </a>
              </li>
              <li>
                <i className="fas fa-user-tie" aria-hidden />
                <a href={TEL_URL}>
                  {CONTATO.responsavel.nome} — {CONTATO.responsavel.cargo}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope" aria-hidden />
                <a href={MAILTO_URL}>{CONTATO.email}</a>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <a
                  href="#politica-cancelamento"
                  onClick={(e) => {
                    e.preventDefault()
                    onOpenPolicy()
                  }}
                >
                  Política de Cancelamento
                </a>
              </li>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Termos de Uso</a></li>
              <li><a href="#">Código de Ética</a></li>
            </ul>
          </div>
        </div>

        <div className="copyright">
          © 2026 Monarca Intermediações. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
        </div>
      </div>
    </footer>
  )
}
