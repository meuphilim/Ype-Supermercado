'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const navLinks = [
  { label: 'Início', href: '#' },
  { label: 'Ofertas', href: '#ofertas' },
  { label: 'Departamentos', href: '#departamentos' },
  { label: 'Nossa Loja', href: '#loja' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Início')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled
          ? 'shadow-navbar h-16'
          : 'border-b border-hairline-soft h-[88px]'
          }`}
      >
        <div className="ype-container h-full flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center h-full" aria-label="Ypê Supermercado - Página Inicial">
            <div className={`relative transition-all duration-300 ${scrolled ? 'h-12 w-48' : 'h-full w-80'}`}>
              <Image
                src="/logo.png"
                alt="Ypê Supermercado"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`px-3 py-2 text-[16px] font-semibold rounded-lg transition-all duration-180 relative group ${activeLink === link.label
                  ? 'text-ype-green'
                  : 'text-[rgba(30,30,30,0.80)] hover:text-ype-green-dark'
                  }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-ype-green transition-all duration-180 ${activeLink === link.label ? 'opacity-100' : 'opacity-0 group-hover:opacity-40'
                  }`} />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <div className="relative flex items-center">
              {searchOpen && (
                <input
                  type="search"
                  placeholder="Buscar produtos..."
                  autoFocus
                  className="absolute right-10 w-64 h-10 bg-canvas-cream border border-hairline rounded-pill px-4 text-[14px] focus:outline-none focus:border-ype-green transition-all duration-220"
                  onBlur={() => setSearchOpen(false)}
                />
              )}
              <button
                id="search-toggle"
                onClick={() => setSearchOpen(!searchOpen)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-canvas-cream transition-colors duration-180 cursor-pointer"
                aria-label="Buscar produtos"
              >
                <svg className="w-5 h-5 text-steel" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                </svg>
              </button>
            </div>

            {/* Offers CTA — Desktop */}
            <a href="#ofertas" className="btn-primary hidden lg:inline-flex text-[14px] px-4 py-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
              </svg>
              Ver Ofertas
            </a>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-full hover:bg-canvas-cream transition-colors duration-180 cursor-pointer"
              onClick={() => setMobileOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={mobileOpen}
            >
              <span className="w-5 h-[1.5px] bg-ype-green-dark rounded-full" />
              <span className="w-5 h-[1.5px] bg-ype-green-dark rounded-full" />
              <span className="w-4 h-[1.5px] bg-ype-green-dark rounded-full self-start ml-0.5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] flex" role="dialog" aria-modal="true" aria-label="Menu de navegação">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-ype-green-dark/30 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />

          {/* Drawer */}
          <div className="relative ml-auto w-[300px] h-full bg-white shadow-[0_24px_48px_rgba(0,0,0,0.24)] flex flex-col animate-fade-in">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-hairline-soft">
              <div className="flex items-center gap-2">
                <div className="relative w-9 h-9">
                  <Image src="/logo.jpg" alt="Ypê" fill className="object-contain" />
                </div>
                <span className="text-[16px] font-bold text-ype-green-dark">Ypê Supermercado</span>
              </div>
              <button
                id="mobile-menu-close"
                onClick={() => setMobileOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-canvas-cream transition-colors cursor-pointer"
                aria-label="Fechar menu"
              >
                <svg className="w-5 h-5 text-steel" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Search */}
            <div className="px-5 pt-4">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-steel" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z" />
                </svg>
                <input
                  type="search"
                  placeholder="Buscar produtos..."
                  className="w-full pl-9 pr-4 py-2.5 bg-canvas-cream border border-hairline rounded-pill text-[14px] focus:outline-none focus:border-ype-green"
                />
              </div>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto px-3 pt-3 pb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-3 py-3.5 rounded-xl text-[16px] font-medium text-[rgba(30,30,30,0.85)] hover:bg-ype-green-pale hover:text-ype-green-dark transition-colors duration-180"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Footer Mini */}
            <div className="px-5 py-4 bg-ype-green-pale border-t border-ype-green-light">
              <p className="text-[12px] font-semibold text-ype-green-dark">Seg–Sáb 7h–22h · Dom 7h–20h</p>
              <a href="tel:+5500000000000" className="text-[14px] font-bold text-ype-green mt-0.5 block">(00) 0000-0000</a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
