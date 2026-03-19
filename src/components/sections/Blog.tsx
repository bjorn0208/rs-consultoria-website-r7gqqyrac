import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, CalendarDays } from 'lucide-react'

export function Blog() {
  const posts = [
    {
      title: 'Novas regras do INSS para 2026: O que muda na sua aposentadoria?',
      excerpt:
        'Entenda as principais alterações na legislação previdenciária e como elas impactam o planejamento do seu futuro de forma segura.',
      date: '15 de Março, 2026',
      image: 'https://img.usecurling.com/p/600/400?q=law&color=yellow',
      category: 'Previdenciário',
    },
    {
      title: 'A importância do registro de marcas no cenário digital',
      excerpt:
        'Proteja o maior ativo da sua empresa. Saiba por que o registro no INPI é fundamental para a segurança e exclusividade do seu negócio.',
      date: '02 de Março, 2026',
      image: 'https://img.usecurling.com/p/600/400?q=trademark&color=yellow',
      category: 'INPI',
    },
    {
      title: 'Recuperação de crédito: Estratégias eficientes para empresas',
      excerpt:
        'Como a assessoria jurídica especializada pode ajudar na recuperação de ativos e na saúde financeira do seu negócio em 2026.',
      date: '18 de Fevereiro, 2026',
      image: 'https://img.usecurling.com/p/600/400?q=finance&color=yellow',
      category: 'Consultoria',
    },
  ]

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-[#b38f07]/10 text-[#b38f07] mb-4 text-sm font-medium">
            Artigos e Notícias
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Acompanhe o Blog</h2>
          <p className="text-lg text-slate-600">
            Fique por dentro das últimas atualizações do mundo jurídico e dicas para proteger os
            seus direitos em 2026.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-border/50 bg-slate-50 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#b38f07] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center text-sm text-slate-500 mb-3 font-medium">
                  <CalendarDays className="w-4 h-4 mr-2 text-[#b38f07]" />
                  {post.date}
                </div>
                <CardTitle className="text-xl leading-tight group-hover:text-[#b38f07] transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <CardDescription className="text-base text-slate-600 mb-6 line-clamp-3">
                  {post.excerpt}
                </CardDescription>
                <a
                  href="#blog"
                  className="inline-flex items-center text-sm font-semibold text-[#b38f07] hover:text-[#8f7206] transition-colors mt-auto"
                >
                  Ler artigo completo <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
