'use client'

export default function LoyaltySection() {
  return (
    <section className="py-14 bg-white relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%232E7D32' fill-opacity='1'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="ype-container relative">
        <div className="bg-gradient-to-br from-ype-green-dark to-ype-green-mid rounded-[24px] overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">

            {/* Left Content */}
            <div className="flex-1 p-8 lg:p-12">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-pill px-3 py-1.5 mb-6">
                <svg className="w-4 h-4 text-ype-green-light" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                </svg>
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-white">
                  Programa de Fidelidade
                </span>
              </div>

              <h2 className="text-white font-bold text-[32px] leading-[1.2] tracking-[-0.01em] mb-4">
                Clube Ypê:<br />
                <span className="text-ype-green-light">Economize Mais a Cada Compra</span>
              </h2>

              <p className="text-white/75 text-[16px] leading-[1.65] mb-8 max-w-md">
                Acumule pontos em todas as suas compras e troque por descontos exclusivos. Membros do Clube Ypê têm acesso antecipado às melhores ofertas.
              </p>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { value: '5%', label: 'de cashback em hortifrúti' },
                  { value: '2x', label: 'pontos nos finais de semana' },
                  { value: '0$', label: 'taxa de adesão — é grátis!' },
                ].map((b) => (
                  <div key={b.label} className="bg-white/10 rounded-xl p-4 text-center">
                    <p className="text-[28px] font-bold text-ype-green-light leading-none mb-1">{b.value}</p>
                    <p className="text-[12px] text-white/65 leading-snug">{b.label}</p>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3">
                <button
                  id="join-club-btn"
                  className="btn-white-on-dark"
                >
                  Quero me Cadastrar
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
                <button
                  id="learn-club-btn"
                  className="btn-outlined-on-dark"
                >
                  Saiba Mais
                </button>
              </div>
            </div>

            {/* Right — App/Card Visual */}
            <div className="lg:w-80 xl:w-96 p-8 lg:p-12 flex flex-col items-center gap-6">
              {/* Loyalty Card Visual */}
              <div className="w-full max-w-[280px] bg-gradient-to-br from-white/20 to-white/5 rounded-2xl p-5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.1em] text-ype-green-light">Clube Ypê</p>
                    <p className="text-[18px] font-bold text-white">Membro Gold</p>
                  </div>
                  <div className="w-10 h-10 bg-ype-green rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-[11px] text-white/55 uppercase tracking-[0.08em] mb-1">Pontos Acumulados</p>
                  <p className="text-[32px] font-bold text-white leading-none">2.450 <span className="text-[14px] font-normal text-ype-green-light">pts</span></p>
                </div>

                <div className="bg-white/10 rounded-lg h-2 mb-2">
                  <div className="bg-ype-green h-2 rounded-lg" style={{ width: '68%' }} />
                </div>
                <p className="text-[11px] text-white/55">1.100 pontos para o próximo nível</p>

                <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-white/55">Nº do cartão</p>
                    <p className="text-[13px] font-mono text-white/80">•••• •••• 4812</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-ype-green/40 border-2 border-ype-green" />
                </div>
              </div>

              {/* Download prompt */}
              <div className="text-center">
                <p className="text-[13px] text-white/60 mb-3">Baixe nosso aplicativo e gerencie seus pontos</p>
                <div className="flex gap-2 justify-center">
                  <a
                    id="app-store-btn"
                    href="#"
                    className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-xl px-3 py-2 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div>
                      <p className="text-[8px] text-white/60 leading-none">Baixar na</p>
                      <p className="text-[11px] font-semibold text-white leading-none">App Store</p>
                    </div>
                  </a>
                  <a
                    id="play-store-btn"
                    href="#"
                    className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 rounded-xl px-3 py-2 transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3.18 23.76c.3.17.67.19 1.02.03l13.61-7.85-2.88-2.88-11.75 10.7zm17.83-10.56L17.87 11.4l-3.22 3.22L17.87 18l3.15-1.82c.9-.52.9-1.84-.01-2.98zM2.29.3C2.1.52 2 .83 2 1.22v21.56c0 .4.1.7.29.92l.05.04 12.07-12.07v-.27L2.34.25.29.3zm12.34 10.75L14.63 11 2.29.3l12.34 10.75z" />
                    </svg>
                    <div>
                      <p className="text-[8px] text-white/60 leading-none">Disponível no</p>
                      <p className="text-[11px] font-semibold text-white leading-none">Google Play</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
