'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    badge: 'Oferta da Semana',
    headline: 'Hortifrúti\nSempre Frescos',
    sub: 'Direto do produtor para a sua mesa. Frutas, legumes e verduras selecionados todos os dias.',
    cta: 'Ver Ofertas',
    ctaHref: '#ofertas',
    ctaSecondary: 'Ver Departamentos',
    ctaSecondaryHref: '#departamentos',
    bgColor: '#1B5E20',
    accentColor: '#4DB848',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80',
    imageAlt: 'Frutas e verduras frescas',
  },
  {
    id: 2,
    badge: 'Qualidade Garantida',
    headline: 'Açougue com\nCarne Selecionada',
    sub: 'Cortes especiais, carnes nobres e aves frescas. Qualidade que você vê e saboreia.',
    cta: 'Conhecer Açougue',
    ctaHref: '#departamentos',
    ctaSecondary: 'Falar com Açougueiro',
    ctaSecondaryHref: '#contato',
    bgColor: '#3E2723',
    accentColor: '#F57C00',
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=800&q=80',
    imageAlt: 'Carnes frescas no açougue',
  },
  {
    id: 3,
    badge: 'Todo Dia Fresquinho',
    headline: 'Padaria Artesanal\nFeita com Amor',
    sub: 'Pães, bolos e confeitaria produzidos diariamente na nossa padaria. O aroma que desperta seu dia.',
    cta: 'Ver Padaria',
    ctaHref: '#departamentos',
    ctaSecondary: 'Encomendas',
    ctaSecondaryHref: '#contato',
    bgColor: '#4E342E',
    accentColor: '#F57C00',
    image: 'https://images.unsplash.com/photo-1568254183919-78a4f43a2877?w=800&q=80',
    imageAlt: 'Pães artesanais na padaria',
  },
]

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrent(index)
    setTimeout(() => setIsAnimating(false), 600)
  }

  const next = () => goTo((current + 1) % slides.length)
  const prev = () => goTo((current - 1 + slides.length) % slides.length)

  // Auto-advance
  useEffect(() => {
    intervalRef.current = setInterval(next, 5500)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [current])

  const slide = slides[current]

  return (
    <section
      id="hero-carousel"
      className="relative overflow-hidden"
      style={{ backgroundColor: slide.bgColor, transition: 'background-color 0.6s ease' }}
      aria-label="Carousel de Ofertas"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent z-10" />

      {/* Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={slide.image}
          alt={slide.imageAlt}
          fill
          className="object-cover transition-opacity duration-600"
          priority={slide.id === 1}
          sizes="100vw"
        />
      </div>

      {/* Content */}
      <div className="ype-container relative z-20 py-16 lg:py-24 min-h-[520px] lg:min-h-[580px] flex items-center">
        <div className="max-w-xl" key={slide.id}>
          {/* Eyebrow Badge */}
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill text-[11px] font-bold uppercase tracking-[0.1em] mb-4 animate-fade-in"
            style={{ backgroundColor: slide.accentColor, color: '#fff' }}
          >
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
            </svg>
            {slide.badge}
          </span>

          {/* Headline */}
          <h1
            className="font-serif text-white leading-[1.05] tracking-[-0.02em] mb-4 animate-fade-in"
            style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 300 }}
          >
            {slide.headline.split('\n').map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-[18px] leading-[1.65] mb-8 max-w-md animate-fade-in">
            {slide.sub}
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap gap-3 animate-fade-in">
            <a
              href={slide.ctaHref}
              className="inline-flex items-center gap-2 bg-ype-green text-white font-semibold text-[16px] px-6 py-3 rounded-pill transition-all duration-180 hover:bg-ype-green-dark active:scale-[0.97] shadow-[0_2px_12px_rgba(77,184,72,0.40)]"
            >
              {slide.cta}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href={slide.ctaSecondaryHref}
              className="inline-flex items-center gap-2 bg-transparent text-white font-semibold text-[16px] border-[1.5px] border-white/70 px-6 py-3 rounded-pill transition-all duration-180 hover:bg-white/10 active:scale-[0.97]"
            >
              {slide.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        id="carousel-prev"
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-180 cursor-pointer"
        aria-label="Slide anterior"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        id="carousel-next"
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 flex items-center justify-center bg-white/15 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all duration-180 cursor-pointer"
        aria-label="Próximo slide"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            id={`carousel-dot-${i}`}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 cursor-pointer ${
              i === current
                ? 'w-6 h-2 bg-ype-green'
                : 'w-2 h-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/20 z-30">
        <div
          className="h-full bg-ype-green transition-none"
          style={{
            width: `${((current + 1) / slides.length) * 100}%`,
            transition: 'width 5.5s linear',
          }}
        />
      </div>
    </section>
  )
}
