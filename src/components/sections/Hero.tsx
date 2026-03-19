import { ArrowRight, BarChart2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-background to-background dark:from-blue-900/20 dark:via-background dark:to-background"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
              <BarChart2 className="h-4 w-4" />
              <span className="text-sm font-medium">Consultoria Especializada</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Resultados <span className="text-primary">Sólidos</span> para o Seu Negócio
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Transformamos desafios complexos em estratégias claras. A RS Consultoria oferece as
              melhores soluções financeiras e de gestão para alavancar a sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto gap-2" asChild>
                <a href="#contato">
                  Fale com um Especialista
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="#servicos">Conheça Nossos Serviços</a>
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none opacity-0 animate-fade-in-up delay-200">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-2xl blur opacity-30"></div>
              <img
                src="https://img.usecurling.com/p/800/600?q=modern%20office%20meeting&color=blue&dpr=2"
                alt="Equipe de consultoria em reunião"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3] border border-border"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-xl border border-border hidden md:flex items-center gap-4 animate-float">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-foreground">+500</p>
                  <p className="text-sm text-muted-foreground">Projetos Entregues</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
