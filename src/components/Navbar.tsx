import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
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
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg group-hover:bg-primary/90 transition-colors">
            <Briefcase className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            RS <span className="text-primary">Consultoria</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button asChild>
            <a href="#contato">Fale Conosco</a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-6 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <Button asChild className="mt-4 w-full">
                <a href="#contato">Fale Conosco</a>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
