'use client'

export default function Topbar() {
  return (
    <div className="bg-ype-green-dark text-white/65 h-10 flex items-center">
      <div className="ype-container flex items-center justify-between">
        {/* Left — Institutional Links */}
        <nav className="flex items-center gap-4">
          <a
            href="#"
            className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/65 hover:text-white transition-colors duration-180 hidden sm:block"
          >
            Trabalhe Conosco
          </a>
          <span className="text-white/20 hidden sm:block">·</span>
          <a
            href="#"
            className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/65 hover:text-white transition-colors duration-180 hidden md:block"
          >
            Fale Conosco
          </a>
          <span className="text-white/20 hidden md:block">·</span>
          <a
            href="#"
            className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/65 hover:text-white transition-colors duration-180 hidden lg:block"
          >
            Sustentabilidade
          </a>
          <a
            href="#"
            className="text-[11px] font-bold uppercase tracking-[0.08em] text-white/65 hover:text-white transition-colors duration-180 block sm:hidden"
          >
            Contato
          </a>
        </nav>

        {/* Right — Phone + Hours */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            {/* Phone Icon */}
            <svg className="w-3.5 h-3.5 text-ype-green" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <a
              href="tel:+5500000000000"
              className="text-[11px] font-bold text-ype-green hover:text-ype-green-light transition-colors duration-180"
            >
              (00) 0000-0000
            </a>
          </div>
          <span className="text-white/20 hidden sm:block">·</span>
          <span className="text-[11px] font-bold uppercase tracking-[0.06em] text-white/65 hidden sm:block">
            Seg–Sáb 7h–22h · Dom 7h–20h
          </span>
        </div>
      </div>
    </div>
  )
}
