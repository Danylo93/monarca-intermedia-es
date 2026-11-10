import { WHATSAPP_URL } from '../data/contato'

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden />
    </a>
  )
}
