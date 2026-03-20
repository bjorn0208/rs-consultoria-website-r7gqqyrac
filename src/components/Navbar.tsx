import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Por que nos escolher?', href: '#sobre' },
    { name: 'Como podemos te ajudar?', href: '#especialidades' },
    { name: 'O escritório', href: '#escritorio' },
    { name: 'Nossa estratégia', href: '#estrategia' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Onde atuamos?', href: '#atuacao' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md py-4 border-b border-white/5 shadow-lg'
          : 'bg-transparent py-5 md:py-6',
      )}
    >
      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="flex items-center justify-between">
          {/* Logo (Top-Left) */}
          <a
            href="#inicio"
            className="text-xl md:text-2xl font-bold tracking-wider text-white flex items-center gap-1 group shrink-0"
          >
            <span className="text-[#b38f07] group-hover:text-white transition-colors duration-300">
              RS
            </span>
            <span className="group-hover:text-[#b38f07] transition-colors duration-300">
              Consultoria
            </span>
          </a>

          {/* Desktop Nav (Top-Right) */}
          <nav className="hidden lg:flex items-center justify-end gap-5 xl:gap-7 w-full pl-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] xl:text-sm whitespace-nowrap text-gray-300 hover:text-[#b38f07] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:text-[#b38f07] transition-colors ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-slate-950/98 backdrop-blur-xl border-b border-white/10 animate-fade-in-down shadow-2xl">
          <nav className="flex flex-col py-6 px-4 max-h-[80vh] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 text-center text-sm md:text-base font-medium text-gray-200 hover:text-[#b38f07] border-b border-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
