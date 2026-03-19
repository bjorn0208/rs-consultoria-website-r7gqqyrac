import { LineChart, PiggyBank, Users, Cog, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Services() {
  const services = [
    {
      title: 'Planejamento Estratégico',
      description:
        'Definição clara de metas, análise de mercado e criação de um roteiro acionável para o crescimento sustentável da sua empresa.',
      icon: <LineChart className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Consultoria Financeira',
      description:
        'Reestruturação financeira, gestão de fluxo de caixa, redução de custos e análise de viabilidade para novos investimentos.',
      icon: <PiggyBank className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Gestão de Pessoas',
      description:
        'Desenvolvimento de lideranças, estruturação de planos de carreira e criação de uma cultura organizacional de alta performance.',
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Otimização de Processos',
      description:
        'Mapeamento e melhoria de processos internos para garantir máxima eficiência operacional e redução de desperdícios.',
      icon: <Cog className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="servicos" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium">
            Nossos Serviços
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Soluções completas para sua empresa
          </h2>
          <p className="text-lg text-muted-foreground">
            Abordagens personalizadas e focadas em resultados para resolver os principais desafios
            do seu modelo de negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background hover:border-primary/50"
            >
              <CardHeader>
                <div className="mb-4 bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground mb-6">
                  {service.description}
                </CardDescription>
                <a
                  href="#contato"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Saiba mais <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
