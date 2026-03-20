import { Button } from '@/components/ui/button'
import heroImage from '@/assets/design-sem-nome-1-910f5.png'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full bg-black pt-28 pb-16 md:pt-36 md:pb-24 flex items-center justify-center min-h-[100svh] overflow-hidden"
    >
      {/* Subtle background glow to highlight the logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] h-[70%] max-w-3xl bg-[#b38f07]/10 blur-[100px] md:blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center relative z-10 w-full h-full justify-center gap-10 md:gap-14">
        {/* Main Logo / Image */}
        <div className="w-full max-w-5xl mx-auto animate-fade-in-up flex justify-center">
          <img
            src={heroImage}
            alt="RS Consultoria Empresarial e Financeira"
            className="w-full h-auto object-contain max-h-[50vh] md:max-h-[65vh] drop-shadow-2xl scale-100 transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>

        {/* Content / CTA */}
        <div className="text-center animate-fade-in flex flex-col items-center space-y-8 mt-4">
          <p className="text-gray-300 max-w-3xl mx-auto text-base md:text-xl font-light leading-relaxed px-2">
            Consultoria estratégica especializada para estruturar, proteger e alavancar os
            resultados da sua empresa com excelência e segurança.
          </p>
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <Button
              size="lg"
              className="bg-[#b38f07] hover:bg-[#8f7205] text-white font-semibold px-8 py-6 text-sm md:text-base rounded-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-1 shadow-[0_4px_20px_rgba(179,143,7,0.3)]"
              asChild
            >
              <a href="#contato">Agendar Atendimento</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade for seamless transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  )
}
