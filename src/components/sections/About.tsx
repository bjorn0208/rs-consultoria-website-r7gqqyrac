import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const benefits = [
    'Experiência comprovada em diversos setores',
    'Metodologias ágeis e personalizadas',
    'Foco em resultados mensuráveis',
    'Equipe multidisciplinar altamente qualificada',
  ]

  return (
    <section id="sobre" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://img.usecurling.com/p/400/500?q=business%20strategy&dpr=2"
                alt="Consultor analisando dados"
                className="rounded-2xl object-cover w-full h-[300px] md:h-[400px] shadow-lg mt-8"
              />
              <img
                src="https://img.usecurling.com/p/400/500?q=teamwork&color=blue&dpr=2"
                alt="Equipe trabalhando"
                className="rounded-2xl object-cover w-full h-[300px] md:h-[400px] shadow-lg"
              />
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium">
              Quem Somos
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Sua parceira estratégica de negócios
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              A RS Consultoria nasceu com o propósito de transformar empresas através de gestão
              eficiente, planejamento estratégico e inteligência financeira.
            </p>
            <p className="text-muted-foreground mb-8">
              Trabalhamos lado a lado com nossos clientes para identificar gargalos, otimizar
              processos e construir um caminho sustentável para o crescimento a longo prazo,
              independentemente do tamanho do seu negócio.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
