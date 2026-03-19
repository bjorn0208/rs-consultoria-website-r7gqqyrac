import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import heroImage from '@/assets/chatgpt-image-19-de-mar.de-2026-04_42_20-8d2e1.png'

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
              Estratégia e Segurança para suas{' '}
              <span className="text-[#b38f07]">Demandas Jurídicas</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Advocacia especializada, consultoria e gestão estratégica com foco em resultados
              eficientes e atendimento humanizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contato">
                <Button className="bg-[#b38f07] hover:bg-[#8f7206] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all w-full sm:w-auto group">
                  Fale com a Especialista
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 relative w-full max-w-md lg:max-w-lg mx-auto">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border-4 border-white">
              <div className="absolute inset-0 bg-[#b38f07]/10 mix-blend-multiply z-10"></div>
              <img
                src={heroImage}
                alt="Rafaela Santos do Amaral - Advogada"
                className="object-cover w-full h-full object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10"></div>
            </div>
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-[#b38f07]/10 rounded-3xl -z-10 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
