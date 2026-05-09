'use client'

import Image from 'next/image'

export default function HeroStatic() {
  return (
    <section id="hero-static" className="bg-canvas-cream overflow-hidden">
      <div className="ype-container py-12 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left — Content (55%) */}
          <div className="flex-1 max-w-xl lg:max-w-none lg:w-[55%]">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-ype-green-pale border border-ype-green-light rounded-pill px-3 py-1.5 mb-6">
              <span className="w-2 h-2 bg-ype-green rounded-full animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-ype-green">
                Frescos Todos os Dias
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-[rgba(30,30,30,0.92)] mb-5" style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: '1.05', letterSpacing: '-0.02em', fontWeight: 300 }}>
              Qualidade e Frescor<br />
              <span className="text-ype-green">na sua Mesa</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[18px] text-[rgba(30,30,30,0.60)] leading-[1.7] mb-8 max-w-md">
              Produtos selecionados, açougue, padaria artesanal e muito mais. Tudo perto de você, com o carinho que sua família merece.
            </p>

            {/* CTA Row */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#ofertas" className="btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                </svg>
                Ver Ofertas da Semana
              </a>
              <a href="#departamentos" className="btn-ghost">
                Explorar Departamentos
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-hairline-soft">
              {[
                { icon: '🌿', label: 'Produtos Frescos Diários' },
                { icon: '🏆', label: '+15 Anos de Tradição' },
                { icon: '📍', label: 'Aqui no Seu Bairro' },
                { icon: '❤️', label: 'Atendimento Familiar' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-[18px]">{item.icon}</span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.07em] text-steel">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Image (45%) */}
          <div className="w-full lg:w-[45%] relative">
            {/* Main image */}
            <div className="relative rounded-card overflow-hidden shadow-float aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
                alt="Família fazendo compras no supermercado Ypê"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              {/* Green tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-ype-green-dark/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-card shadow-float p-4 flex items-center gap-3 border border-hairline-soft">
              <div className="w-10 h-10 bg-ype-green-pale rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-ype-green" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5z" />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-semibold text-ype-green-dark">Avaliação dos Clientes</p>
                <p className="text-[18px] font-bold text-[rgba(30,30,30,0.90)] leading-none">4.9 ⭐</p>
              </div>
            </div>

            {/* Floating deals badge */}
            <div className="absolute -top-4 -right-4 bg-fresh-orange text-white rounded-card shadow-float p-3 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.08em]">Novas Ofertas</p>
              <p className="text-[22px] font-bold leading-none">Hoje!</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
