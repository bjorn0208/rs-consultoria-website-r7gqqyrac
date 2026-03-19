import { CheckCircle2 } from 'lucide-react'

export default function About() {
  const highlights = [
    'Visão humanizada da justiça',
    'Organização estratégica de fluxos',
    'Foco em soluções eficientes e seguras',
    'Atuação ética e transparente',
  ]

  return (
    <section id="sobre" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 order-2 lg:order-1 relative">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-3"></div>
              <img
                src="https://img.usecurling.com/p/600/800?q=woman%20lawyer%20office&color=gray&dpr=2"
                alt="Advogada no escritório"
                className="relative rounded-2xl object-cover w-full h-[500px] shadow-xl"
              />
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-4 text-sm font-medium">
              Quem Sou Eu
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
              Rafaela Santos do Amaral
            </h2>
            <h3 className="text-xl text-primary font-medium mb-8">
              Consultora e Advogada Especialista
            </h3>

            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p>
                Bacharel em Direito pela Universidade Estácio de Sá, com pós-graduação em Direito
                Previdenciário e especializações em Direito Civil, Processo Civil e do Consumidor.
                Possui experiência prática em Direito Civil e Processual, atuando com peças
                jurídicas, prazos e gestão de demandas.
              </p>
              <p>
                Já atuou em cartório, Tribunal de Justiça e como conciliadora, além de colaboração
                com a Defensoria Pública do Estado do Rio de Janeiro, desenvolvendo uma visão
                humanizada da justiça. Destaca-se na controladoria jurídica, com organização
                estratégica de fluxos e uso de sistemas como Astrea e Auxilium.
              </p>
              <p>
                Possui expertise na área bancária e financeira, atuando com análise de crédito,
                recuperação de crédito (CPF e CNPJ) e reestruturação financeira. Também trabalha com
                registro de marcas no INPI e atua no Direito Previdenciário com concessão de
                benefícios.
              </p>
              <p className="font-medium text-foreground">
                Tem perfil técnico, estratégico e orientado a resultados, com atuação ética e foco
                em soluções eficientes e seguras.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
