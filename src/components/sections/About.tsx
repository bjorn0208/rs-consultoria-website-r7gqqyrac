import aboutImage from '@/assets/chatgpt-image-19-de-mar.de-2026-04_09_03-d7415.png'

export function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full max-w-md lg:max-w-lg mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[#b38f07]/10 mix-blend-multiply z-10"></div>
              <img
                src={aboutImage}
                alt="Rafaela Santos em atuação"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            </div>
          </div>
          <div className="flex-1">
            <div className="inline-block px-4 py-2 bg-[#b38f07]/10 rounded-full mb-4">
              <span className="text-[#b38f07] font-semibold tracking-wider uppercase text-sm">
                Quem Sou Eu
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2 text-slate-900">
              Rafaela Santos do Amaral
            </h2>
            <h3 className="text-xl md:text-2xl font-medium mb-8 text-[#b38f07]">
              Advogada Especialista
            </h3>

            <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
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
              <p className="font-medium text-slate-900 border-l-4 border-[#b38f07] pl-4">
                Tem perfil técnico, estratégico e orientado a resultados, com atuação ética e foco
                em soluções eficientes e seguras.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
