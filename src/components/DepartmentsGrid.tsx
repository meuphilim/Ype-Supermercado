'use client'

import Image from 'next/image'

const departments = [
  {
    id: 1,
    name: 'Hortifrúti',
    description: 'Frutas, verduras e legumes frescos, direto do produtor local.',
    icon: (
      <svg className="w-12 h-12 text-ype-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 0c0 4.97-4.03 9-9 9m9-9c4.97 0 9 4.03 9 9" />
      </svg>
    ),
    color: '#E8F5E9',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=70',
  },
  {
    id: 2,
    name: 'Açougue',
    description: 'Carnes nobres, cortes especiais e aves frescas todos os dias.',
    icon: (
      <svg className="w-12 h-12 text-ype-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48z" />
      </svg>
    ),
    color: '#FFF3E0',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&q=70',
  },
  {
    id: 3,
    name: 'Padaria',
    description: 'Pães, bolos e confeitaria artesanal. Feitos diariamente na nossa padaria.',
    icon: (
      <svg className="w-12 h-12 text-ype-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5" />
      </svg>
    ),
    color: '#FFF8E1',
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=400&q=70',
  },
  {
    id: 4,
    name: 'Frios & Laticínios',
    description: 'Queijos, frios, iogurtes e laticínios das melhores marcas.',
    icon: (
      <svg className="w-12 h-12 text-ype-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3z" />
      </svg>
    ),
    color: '#E3F2FD',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&q=70',
  },
  {
    id: 5,
    name: 'Bebidas',
    description: 'Refrigerantes, sucos, cervejas, vinhos e muito mais.',
    icon: (
      <svg className="w-12 h-12 text-ype-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-6.75-12.896c.251.023.501.05.75.082M19.8 15l-1.575 1.575M19.8 15a2.25 2.25 0 0 1-.659 1.591L16.5 19.2" />
      </svg>
    ),
    color: '#FCE4EC',
    image: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=400&q=70',
  },
  {
    id: 6,
    name: 'Mercearia',
    description: 'Arroz, feijão, massas, azeites, temperos e produtos de longa validade.',
    icon: (
      <svg className="w-12 h-12 text-ype-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
    color: '#F3E5F5',
    image: 'https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?w=400&q=70',
  },
  {
    id: 7,
    name: 'Limpeza & Higiene',
    description: 'Produtos de limpeza, higiene pessoal e cuidados com o lar.',
    icon: (
      <svg className="w-12 h-12 text-ype-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
      </svg>
    ),
    color: '#E0F7FA',
    image: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?w=400&q=70',
  },
  {
    id: 8,
    name: 'Pet Shop',
    description: 'Ração, petiscos e acessórios para o seu melhor amigo.',
    icon: (
      <svg className="w-12 h-12 text-ype-green" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
      </svg>
    ),
    color: '#FFF3E0',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&q=70',
  },
]

export default function DepartmentsGrid() {
  return (
    <section id="departamentos" className="py-14 bg-canvas-cream">
      <div className="ype-container">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-eyebrow mb-2">O que você encontra no Ypê</p>
          <h2 className="section-title mb-3">Nossos Departamentos</h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Tudo que sua família precisa, organizado para facilitar as suas compras.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {departments.map((dept) => (
            <a
              key={dept.id}
              href="#"
              id={`dept-${dept.id}`}
              className="card-dept group"
            >
              {/* Image Area */}
              <div className="relative h-36 overflow-hidden" style={{ backgroundColor: dept.color }}>
                <Image
                  src={dept.image}
                  alt={dept.name}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                {/* Icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors duration-300">
                  <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lift">
                    {dept.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-[17px] font-semibold text-[rgba(30,30,30,0.90)] mb-1">{dept.name}</h3>
                <p className="text-[13px] text-[rgba(30,30,30,0.55)] leading-[1.5] line-clamp-2">{dept.description}</p>
                <span className="inline-flex items-center gap-1 text-[13px] font-semibold text-ype-green mt-3">
                  Ver produtos
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-8">
          <a href="#" className="btn-ghost">
            Ver todos os departamentos
          </a>
        </div>
      </div>
    </section>
  )
}
