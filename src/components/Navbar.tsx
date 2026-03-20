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
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Blog', href: '#blog' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-black/95 backdrop-blur-md py-4 border-b border-white/10 shadow-lg'
          : 'bg-transparent py-5 md:py-6',
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo text fallback */}
          <a
            href="#inicio"
            className="text-xl md:text-2xl font-bold tracking-wider text-white flex items-center gap-1 group"
          >
            <span className="text-[#b38f07] group-hover:text-white transition-colors duration-300">
              RS
            </span>
            <span className="group-hover:text-[#b38f07] transition-colors duration-300">
              Consultoria
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs md:text-sm uppercase tracking-[0.2em] text-gray-300 hover:text-[#b38f07] transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="ml-2 px-6 py-2.5 text-xs md:text-sm uppercase tracking-widest bg-[#b38f07] text-white font-semibold hover:bg-[#8f7205] transition-all duration-300 rounded-sm"
            >
              Contato
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 hover:text-[#b38f07] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-xl border-b border-white/10 animate-fade-in-down shadow-2xl">
          <nav className="flex flex-col py-6 px-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="py-4 text-center text-base uppercase tracking-widest text-gray-200 hover:text-[#b38f07] border-b border-white/5 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="mt-8 mx-auto w-full max-w-xs px-8 py-4 text-sm uppercase tracking-widest bg-[#b38f07] text-white font-semibold text-center rounded-sm hover:bg-[#8f7205] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Falar pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
