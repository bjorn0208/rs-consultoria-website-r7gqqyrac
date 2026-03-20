import { Button } from '@/components/ui/button'
import { MessageSquare } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100svh] min-h-[600px] flex items-center justify-start overflow-hidden bg-slate-950"
    >
      {/* Full-width Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat w-full h-full scale-105 animate-in fade-in duration-1000"
        style={{
          backgroundImage: `url('https://img.usecurling.com/p/1920/1080?q=law%20books%20scales%20justice&color=blue')`,
        }}
      />

      {/* Dark Overlay for Readability - Gradient from left to right */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30" />

      {/* Hero Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-in-up mt-16 md:mt-0">
          {/* Badge */}
          <div className="inline-block border border-[#b38f07]/30 bg-black/40 backdrop-blur-sm px-4 py-1.5 mb-6 rounded-sm">
            <span className="text-gray-200 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              RS Consultoria
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight drop-shadow-lg">
            Soluções Jurídicas
            <br />
            Personalizadas
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed drop-shadow-md">
            Exercendo a excelência jurídica para proteger seus interesses
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#b38f07] hover:bg-[#8f7205] text-white font-medium px-8 py-6 text-base rounded-md transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(179,143,7,0.3)] gap-3 w-full sm:w-auto"
              asChild
            >
              <a href="#contato">
                <MessageSquare className="w-5 h-5" />
                Fale conosco
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
