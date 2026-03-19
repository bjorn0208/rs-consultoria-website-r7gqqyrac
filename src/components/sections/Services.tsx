import { Briefcase, Landmark, ShieldCheck, HeartHandshake, Scale, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Services() {
  const services = [
    {
      title: 'Consultoria e Gestão',
      description:
        'Consultoria e Gestão Empresarial, Financeira e Previdenciária para organizar estrategicamente seus fluxos e garantir segurança.',
      icon: <Briefcase className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Recuperação de Crédito',
      description:
        'Expertise na área bancária e financeira, atuando com análise de crédito, recuperação de crédito (CPF e CNPJ) e reestruturação financeira.',
      icon: <Landmark className="h-10 w-10 text-primary" />,
    },
    {
      title: 'INPI',
      description:
        'Registro de marcas, patentes e propriedade intelectual, garantindo a proteção e exclusividade do seu negócio no mercado.',
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Direito Previdenciário',
      description:
        'Previdenciário completo: BPC/LOAS, Auxílio-Doença, Aposentadoria e Acerto de CNIS. Concessão de benefícios com agilidade.',
      icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    },
    {
      title: 'Assessoria Jurídica',
      description:
        'Assessoria completa para garantir benefícios do INSS. Atuação especializada para garantir que seus direitos previdenciários sejam respeitados e concedidos com agilidade e segurança.',
      icon: <Scale className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="especialidades" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium">
            Especialidades
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Serviços Oferecidos
          </h2>
          <p className="text-lg text-muted-foreground">
            Atuação especializada para proteger seus direitos, organizar seu negócio e garantir
            resultados seguros e eficientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background hover:border-primary/50 flex flex-col h-full"
            >
              <CardHeader>
                <div className="mb-4 bg-primary/5 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <CardDescription className="text-base text-muted-foreground mb-6">
                  {service.description}
                </CardDescription>
                <a
                  href="#contato"
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
                >
                  Fale com a Especialista <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
