'use client'

const brands = [
  { name: 'Nestlé', logo: 'https://logo.clearbit.com/nestle.com' },
  { name: 'Unilever', logo: 'https://logo.clearbit.com/unilever.com' },
  { name: 'Coca-Cola', logo: 'https://logo.clearbit.com/coca-cola.com' },
  { name: 'Ambev', logo: 'https://logo.clearbit.com/ambev.com.br' },
  { name: 'Heinz', logo: 'https://logo.clearbit.com/heinz.com' },
  { name: 'Sadia', logo: 'https://logo.clearbit.com/sadia.com.br' },
  { name: 'Perdigão', logo: 'https://logo.clearbit.com/perdigao.com.br' },
  { name: 'Omo', logo: 'https://logo.clearbit.com/unilever.com' },
]

const fallbackBrands = [
  'Nestlé', 'Unilever', 'Coca-Cola', 'Heinz', 'Sadia', 'Perdigão', 'BRF', 'Kibon'
]

export default function BrandsSection() {
  return (
    <section className="py-14 bg-canvas-cream">
      <div className="ype-container">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-2">Parceiros de Qualidade</p>
          <h2 className="section-title mb-3">Marcas que Você Conhece e Confia</h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Trabalhamos com as maiores marcas do Brasil para garantir qualidade em cada produto.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
          {fallbackBrands.map((brand, i) => (
            <div
              key={brand}
              id={`brand-${i}`}
              className="card-brand flex items-center justify-center p-4 h-20 bg-white logo-brand cursor-pointer"
              title={brand}
            >
              {/* Fallback text logo */}
              <span className="text-[11px] font-bold text-[rgba(30,30,30,0.40)] text-center leading-snug uppercase tracking-[0.06em]">
                {brand}
              </span>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <div className="h-px flex-1 max-w-[80px] bg-hairline" />
          <p className="text-[13px] text-[rgba(30,30,30,0.45)] text-center">
            Mais de <strong className="text-ype-green-dark">50 marcas</strong> disponíveis em nossa loja
          </p>
          <div className="h-px flex-1 max-w-[80px] bg-hairline" />
        </div>
      </div>
    </section>
  )
}
