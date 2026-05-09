'use client'

import Image from 'next/image'

export default function FeatureBand() {
  return (
    <section className="bg-ype-green-dark overflow-hidden">
      <div className="ype-container">
        <div className="flex flex-col lg:flex-row items-stretch min-h-[480px]">

          {/* Left — Content (55%) */}
          <div className="flex-1 lg:w-[55%] py-16 lg:py-20 flex flex-col justify-center pr-0 lg:pr-12">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-6 self-start">
              <span className="w-8 h-[2px] bg-ype-green" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-ype-green">
                Nosso Compromisso
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-white leading-[1.08] tracking-[-0.02em] mb-5" style={{ fontSize: 'clamp(32px, 4vw, 44px)', fontWeight: 300 }}>
              Frescos Todos os Dias,<br />
              <span className="text-ype-green-light">Escolhidos com Cuidado</span>
            </h2>

            {/* Description */}
            <p className="text-white/75 text-[17px] leading-[1.7] mb-8 max-w-lg">
              Nossos produtos chegam frescos diariamente. Trabalhamos com fornecedores locais para garantir que você sempre encontre o melhor — do campo direto à sua mesa.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { icon: '🌱', title: 'Origem Local', sub: 'Parceria com produtores da região' },
                { icon: '❄️', title: 'Cadeia Fria', sub: 'Temperatura controlada do início ao fim' },
                { icon: '🔍', title: 'Inspeção Diária', sub: 'Qualidade verificada todo dia' },
                { icon: '♻️', title: 'Sustentável', sub: 'Menos desperdício, mais respeito' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="text-[22px] mt-0.5">{item.icon}</span>
                  <div>
                    <p className="text-[14px] font-semibold text-white leading-snug">{item.title}</p>
                    <p className="text-[12px] text-white/55 leading-snug mt-0.5">{item.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#departamentos" className="btn-white-on-dark">
                Explorar Departamentos
              </a>
              <a href="#loja" className="btn-outlined-on-dark">
                Conhecer a Loja
              </a>
            </div>
          </div>

          {/* Right — Image (45%) */}
          <div className="w-full lg:w-[45%] relative min-h-[320px] lg:min-h-auto">
            {/* Gradient scrim (left side only on desktop) */}
            <div className="absolute inset-y-0 left-0 w-24 z-10 hidden lg:block"
              style={{ background: 'linear-gradient(to right, #2E7D32, transparent)' }}
            />
            <Image
              src="https://images.unsplash.com/photo-1516685018646-549198525c1b?w=800&q=80"
              alt="Produtos frescos no supermercado Ypê - Hortifrúti, frutas e verduras"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Bottom overlay on mobile */}
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ype-green-dark to-transparent lg:hidden" />
          </div>

        </div>
      </div>
    </section>
  )
}
