import Topbar from '@/components/Topbar'
import Navbar from '@/components/Navbar'
import HeroCarousel from '@/components/HeroCarousel'
import HeroStatic from '@/components/HeroStatic'
import OffersSection from '@/components/OffersSection'
import DepartmentsGrid from '@/components/DepartmentsGrid'
import FeatureBand from '@/components/FeatureBand'
import LoyaltySection from '@/components/LoyaltySection'
import BrandsSection from '@/components/BrandsSection'
import StoreSection from '@/components/StoreSection'
import WhatsAppFAB from '@/components/WhatsAppFAB'
import Footer from '@/components/Footer'

/**
 * ATENÇÃO AO CLIENTE / DESENVOLVEDOR:
 * =====================================================
 * Esta página apresenta DOIS componentes de Hero:
 *
 * 1. <HeroCarousel /> — Carrossel automático com 3 slides de ofertas.
 *    Ideal para destacar promoções semanais com imagens de impacto.
 *
 * 2. <HeroStatic /> — Hero estático editorial com split 55/45.
 *    Ideal para posicionamento de marca mais permanente e elegante.
 *
 * Para escolher apenas um, comente ou remova o outro abaixo.
 * Ambos são intercambiáveis — mantêm o mesmo ritmo visual da página.
 * =====================================================
 */

export default function HomePage() {
  return (
    <main>
      {/* ─── Navegação ─── */}
      <Topbar />
      <Navbar />

      {/* ─── OPÇÃO 1: Hero Carrossel Automático ─── */}
      {/* Descomente apenas um dos dois heroes. */}
      <HeroCarousel />

      {/* ─────────────────────────────────────── */}
      {/* SEPARADOR VISUAL — remova ao escolher só um hero */}
      <div className="bg-canvas-cream py-6">
        <div className="ype-container">
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-hairline" />
            <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-ype-green bg-ype-green-pale px-4 py-1.5 rounded-pill border border-ype-green-light">
              ↑ Carrossel · ou · Hero Estático ↓
            </span>
            <div className="h-px flex-1 bg-hairline" />
          </div>
          <p className="text-center text-[12px] text-[rgba(30,30,30,0.45)] mt-2">
            Este separador é apenas para demonstração. Em produção, escolha somente um componente de hero.
          </p>
        </div>
      </div>
      {/* ─────────────────────────────────────── */}

      {/* ─── OPÇÃO 2: Hero Estático Editorial ─── */}
      <HeroStatic />

      {/* ─── Conteúdo da Homepage ─── */}
      <OffersSection />
      <DepartmentsGrid />
      <FeatureBand />
      <LoyaltySection />
      <BrandsSection />
      <StoreSection />

      {/* ─── FAB Flutuante ─── */}
      <WhatsAppFAB />

      {/* ─── Footer ─── */}
      <Footer />
    </main>
  )
}
