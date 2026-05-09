'use client'

import Image from 'next/image'

const offers = [
  {
    id: 1,
    name: 'Maçã Fuji',
    unit: 'kg',
    from: 8.99,
    price: 5.99,
    badge: 'Oferta',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=400&q=80',
    dept: 'Hortifrúti',
    discount: '33%',
  },
  {
    id: 2,
    name: 'Frango Inteiro',
    unit: 'kg',
    from: 14.90,
    price: 9.99,
    badge: 'Oferta',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=400&q=80',
    dept: 'Açougue',
    discount: '32%',
  },
  {
    id: 3,
    name: 'Leite Integral',
    unit: 'litro',
    from: 7.49,
    price: 5.49,
    badge: 'Especial',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80',
    dept: 'Laticínios',
    discount: '26%',
  },
  {
    id: 4,
    name: 'Pão Francês',
    unit: '100g',
    from: null,
    price: 0.89,
    badge: 'Novo',
    badgeType: 'new',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
    dept: 'Padaria',
    discount: null,
  },
  {
    id: 5,
    name: 'Banana Nanica',
    unit: 'kg',
    from: 5.99,
    price: 3.99,
    badge: 'Oferta',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&q=80',
    dept: 'Hortifrúti',
    discount: '33%',
  },
  {
    id: 6,
    name: 'Queijo Mussarela',
    unit: 'kg',
    from: 59.90,
    price: 44.99,
    badge: 'Oferta',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=80',
    dept: 'Frios',
    discount: '24%',
  },
  {
    id: 7,
    name: 'Coca-Cola',
    unit: '2L',
    from: 12.99,
    price: 9.49,
    badge: 'Oferta',
    image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=400&q=80',
    dept: 'Bebidas',
    discount: '26%',
  },
  {
    id: 8,
    name: 'Tomate Italiano',
    unit: 'kg',
    from: 6.99,
    price: 4.49,
    badge: 'Oferta',
    image: 'https://images.unsplash.com/photo-1471194402529-8e0f5a675de6?w=400&q=80',
    dept: 'Hortifrúti',
    discount: '35%',
  },
]

function ProductCard({ offer }: { offer: typeof offers[0] }) {
  return (
    <div className="card-product group">
      {/* Image */}
      <div className="relative h-44 bg-concrete-light overflow-hidden">
        <Image
          src={offer.image}
          alt={offer.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.05]"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {/* Badge */}
        <div className="absolute top-2 left-2">
          {offer.badgeType === 'new' ? (
            <span className="badge-new">{offer.badge}</span>
          ) : (
            <span className="badge-offer">{offer.badge}</span>
          )}
        </div>
        {/* Discount */}
        {offer.discount && (
          <div className="absolute top-2 right-2 bg-ype-green-dark text-white text-[11px] font-bold rounded-[6px] px-1.5 py-0.5">
            -{offer.discount}
          </div>
        )}
        {/* Dept chip */}
        <div className="absolute bottom-2 left-2">
          <span className="inline-flex items-center bg-black/40 backdrop-blur-sm text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {offer.dept}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="text-[15px] font-semibold text-[rgba(30,30,30,0.90)] mb-1 leading-snug">{offer.name}</h3>

        <div className="flex items-end justify-between">
          <div>
            {offer.from && (
              <p className="price-from">R$ {offer.from.toFixed(2)}</p>
            )}
            <p className="price-main">
              R$ {offer.price.toFixed(2)}
              <span className="text-[12px] font-normal text-steel ml-1">/{offer.unit}</span>
            </p>
          </div>

          <button
            id={`add-offer-${offer.id}`}
            className="w-9 h-9 bg-ype-green-pale hover:bg-ype-green rounded-full flex items-center justify-center transition-all duration-180 group/btn cursor-pointer"
            aria-label={`Adicionar ${offer.name}`}
          >
            <svg className="w-4 h-4 text-ype-green group-hover/btn:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default function OffersSection() {
  return (
    <section id="ofertas" className="py-14 bg-white">
      <div className="ype-container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="section-eyebrow mb-1">Válido esta semana</p>
            <h2 className="section-title">Ofertas da Semana</h2>
          </div>
          <a href="#" className="btn-ghost self-start sm:self-auto shrink-0">
            Ver todas as ofertas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </a>
        </div>

        {/* Offer Category Chips */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-6 scrollbar-hide">
          {['Todos', 'Hortifrúti', 'Açougue', 'Padaria', 'Frios', 'Bebidas', 'Laticínios'].map((cat, i) => (
            <button
              key={cat}
              id={`offer-filter-${cat.toLowerCase().replace(/[^a-z]/g, '')}`}
              className={`shrink-0 ${i === 0 ? 'btn-chip-active' : 'btn-chip'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {offers.map((offer) => (
            <ProductCard key={offer.id} offer={offer} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <a href="#" className="btn-secondary">
            Carregar mais ofertas
          </a>
        </div>
      </div>
    </section>
  )
}
