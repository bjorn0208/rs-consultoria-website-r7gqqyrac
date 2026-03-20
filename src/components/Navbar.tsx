import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

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
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border shadow-sm'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-[#b38f07] p-2 rounded-lg group-hover:bg-[#8f7206] transition-colors">
            <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-foreground">
            RS <span className="text-[#b38f07]">Consultoria</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-[#b38f07] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-[#b38f07] hover:bg-[#8f7206] text-white" asChild>
            <a href="#contato">Entre em contato</a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[350px]">
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-[#b38f07] transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="bg-[#b38f07] hover:bg-[#8f7206] text-white mt-4 w-full h-12 text-base"
                asChild
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="#contato">Entre em contato comigo</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
