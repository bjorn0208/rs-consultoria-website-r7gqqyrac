import { ArrowRight, Scale } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-100/40 via-background to-background dark:from-yellow-900/20 dark:via-background dark:to-background"></div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-6">
              <Scale className="h-4 w-4" />
              <span className="text-sm font-medium">Portfólio Profissional</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-2 leading-[1.1]">
              RS <span className="text-primary">CONSULTORIA</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-foreground/80 mb-6 uppercase tracking-wider">
              Empresarial e Financeira
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Atuação estratégica na gestão de demandas jurídicas e administrativas, com foco em
              soluções eficientes e resultados concretos.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2" asChild>
                <a href="#contato">
                  Entre em contato comigo
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                <a href="#sobre">Conheça minha trajetória</a>
              </Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg lg:max-w-none animate-fade-in-up delay-200">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-yellow-400 rounded-2xl blur opacity-30"></div>
              <img
                src="https://img.usecurling.com/p/800/1000?q=confident%20black%20woman%20suit&color=black&dpr=2"
                alt="Rafaela Santos do Amaral"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4] border border-border"
              />

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-xl shadow-xl border border-border hidden md:flex items-center gap-4 animate-float">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Scale className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-bold text-foreground">Soluções Eficientes</p>
                  <p className="text-sm text-muted-foreground">Foco em resultados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
