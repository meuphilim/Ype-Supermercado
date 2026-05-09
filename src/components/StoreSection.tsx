'use client'

const schedules = [
  { day: 'Segunda a Sexta', hours: '07h às 22h' },
  { day: 'Sábado', hours: '07h às 22h' },
  { day: 'Domingo e Feriados', hours: '07h às 20h' },
]

export default function StoreSection() {
  return (
    <section id="loja" className="py-14 bg-white">
      <div className="ype-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-eyebrow mb-2">Venha nos Visitar</p>
            <h2 className="section-title">Nossa Loja</h2>
          </div>
          <a
            id="open-maps-btn"
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark self-start sm:self-auto shrink-0"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
            </svg>
            Abrir no Maps
          </a>
        </div>

        {/* Store Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="bg-white rounded-card border-2 border-ype-green shadow-card-store overflow-hidden"
          >
            {/* Card Header */}
            <div className="bg-ype-green-pale px-6 py-5 border-b border-ype-green-light flex items-center gap-3">
              <div className="w-10 h-10 bg-ype-green rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[20px] font-bold text-ype-green-dark leading-snug">Ypê Supermercado</h3>
                <p className="text-[13px] text-ype-brown-light font-medium">Loja Principal</p>
              </div>
              {/* Open badge */}
              <div className="ml-auto flex items-center gap-1.5 bg-success-soft text-success text-[12px] font-bold rounded-pill px-3 py-1">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                Aberto Agora
              </div>
            </div>

            {/* Map Embed */}
            <div className="h-[240px] bg-concrete-light relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1!2d-46.6!3d-23.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDMzJzAwLjAiUyA0NsKwMzYnMDAuMCJX!5e0!3m2!1spt!2sbr!4v0!5m2!1spt!2sbr"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Ypê Supermercado"
              />
            </div>

            {/* Bottom accent bar */}
            <div className="h-[4px] bg-gradient-to-r from-ype-green to-ype-green-light" />

            {/* Body */}
            <div className="p-6">
              {/* Address */}
              <div className="flex items-start gap-3 mb-5">
                <svg className="w-5 h-5 text-ype-green mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z" />
                </svg>
                <p className="text-[15px] text-[rgba(30,30,30,0.75)] leading-snug">
                  Rua Exemplo, 1234 — Bairro Centro<br />
                  Cidade — Estado, CEP 00000-000
                </p>
              </div>

              {/* Schedules */}
              <div className="space-y-2 mb-6">
                {schedules.map((s) => (
                  <div key={s.day} className="flex items-center justify-between py-2 border-b border-hairline-soft last:border-0">
                    <span className="text-[13px] text-[rgba(30,30,30,0.60)]">{s.day}</span>
                    <span className="text-[13px] font-semibold text-[rgba(30,30,30,0.85)]">{s.hours}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex gap-3">
                <a
                  id="call-store-btn"
                  href="tel:+5500000000000"
                  className="btn-ghost flex-1 justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                  </svg>
                  Ligar
                </a>
                <a
                  id="directions-btn"
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark flex-1 justify-center"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                  </svg>
                  Como Chegar
                </a>
              </div>
            </div>
          </div>

          {/* Right — Info cards */}
          <div className="flex flex-col gap-4">
            {/* Why visit */}
            <div className="bg-ype-green-pale rounded-card p-6 border border-ype-green-light">
              <h4 className="text-[18px] font-bold text-ype-green-dark mb-4">Por que visitar o Ypê?</h4>
              <div className="space-y-3">
                {[
                  { icon: '🅿️', text: 'Estacionamento gratuito para clientes' },
                  { icon: '♿', text: 'Acessibilidade completa — rampas e elevador' },
                  { icon: '💳', text: 'Aceitamos todos os cartões e Pix' },
                  { icon: '🛒', text: 'Carrinhos e cestinhas disponíveis' },
                  { icon: '🌡️', text: 'Ambiente climatizado e confortável' },
                  { icon: '👶', text: 'Fraldário e espaço kids' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-[18px]">{item.icon}</span>
                    <span className="text-[14px] text-[rgba(30,30,30,0.75)]">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-card p-6 border border-hairline-soft shadow-lift">
              <h4 className="text-[16px] font-bold text-[rgba(30,30,30,0.90)] mb-4">Fale Conosco</h4>
              <div className="space-y-3">
                <a href="tel:+5500000000000" className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-9 h-9 bg-ype-green-pale rounded-full flex items-center justify-center group-hover:bg-ype-green transition-colors">
                    <svg className="w-4 h-4 text-ype-green group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-steel uppercase tracking-[0.06em]">Telefone</p>
                    <p className="text-[15px] font-semibold text-[rgba(30,30,30,0.90)]">(00) 0000-0000</p>
                  </div>
                </a>

                <a href="https://wa.me/5500000000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-9 h-9 bg-[#E8F5E9] rounded-full flex items-center justify-center group-hover:bg-[#25D366] transition-colors">
                    <svg className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-steel uppercase tracking-[0.06em]">WhatsApp</p>
                    <p className="text-[15px] font-semibold text-[rgba(30,30,30,0.90)]">(00) 00000-0000</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
