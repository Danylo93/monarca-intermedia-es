import { useState } from 'react'
import { CONTATO, MAILTO_URL, MAPA_URL, WHATSAPP_URL } from '../data/contato'

export default function Contact() {
  const [form, setForm] = useState({ nome: '', telefone: '', servico: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setForm({ nome: '', telefone: '', servico: '', mensagem: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section className="contact" id="contato">
      <div className="container">
        <div className="section-header">
          <h2>Fale Conosco</h2>
          <p>Preencha o formulário abaixo para receber uma análise gratuita do seu contrato.</p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Canais de Atendimento</h3>
            <p style={{ marginBottom: 30 }}>
              Nossa equipe está pronta para tirar suas dúvidas e iniciar a análise do seu caso
              imediatamente.
            </p>

            <div className="info-item">
              <i className="fab fa-whatsapp" aria-hidden />
              <div>
                <strong>WhatsApp</strong>
                <p>
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    {CONTATO.telefone.exibicao}
                  </a>
                </p>
                <p className="info-meta">
                  {CONTATO.responsavel.nome} — {CONTATO.responsavel.cargo}
                </p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope" aria-hidden />
              <div>
                <strong>E-mail</strong>
                <p>
                  <a href={MAILTO_URL}>{CONTATO.email}</a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-map-marker-alt" aria-hidden />
              <div>
                <strong>Endereço</strong>
                <p>
                  <a href={MAPA_URL} target="_blank" rel="noopener noreferrer">
                    {CONTATO.endereco.logradouro} - {CONTATO.endereco.complemento}
                    <br />
                    {CONTATO.endereco.bairro} - {CONTATO.endereco.cidade}/{CONTATO.endereco.uf}
                  </a>
                </p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-clock" aria-hidden />
              <div>
                <strong>Horário</strong>
                <p>{CONTATO.horario}</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            {sent && (
              <div
                style={{
                  background: '#dcfce7',
                  color: '#166534',
                  padding: '12px 16px',
                  borderRadius: 6,
                  marginBottom: 20,
                  fontWeight: 600,
                }}
                role="status"
                aria-live="polite"
              >
                Obrigado! Sua solicitação foi enviada. Entraremos em contato em breve.
              </div>
            )}

            <div className="form-group">
              <label htmlFor="nome">Nome Completo</label>
              <input
                id="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Digite seu nome"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">WhatsApp / Telefone</label>
              <input
                id="telefone"
                type="tel"
                value={form.telefone}
                onChange={handleChange}
                placeholder="(00) 00000-0000"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="servico">Tipo de Serviço</label>
              <select id="servico" value={form.servico} onChange={handleChange}>
                <option value="">Selecione...</option>
                <option value="revisional">Revisão de Juros (Financiamento)</option>
                <option value="busca">Defesa Busca e Apreensão</option>
                <option value="quitacao">Quitação Antecipada</option>
                <option value="outro">Outro Assunto</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Detalhes do Caso (Opcional)</label>
              <textarea
                id="mensagem"
                rows={4}
                value={form.mensagem}
                onChange={handleChange}
                placeholder="Ex: Valor da parcela, banco financiador, tempo de contrato..."
              />
            </div>

            <button type="submit" className="btn" style={{ width: '100%' }}>
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
