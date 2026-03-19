import { useState } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Nossa equipe entrará em contato em breve.',
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <section id="contato" className="py-24 bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-background rounded-3xl shadow-xl overflow-hidden border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 bg-primary text-primary-foreground p-10 flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">Vamos conversar?</h3>
                <p className="text-primary-foreground/80 mb-12">
                  Preencha o formulário e descubra como podemos ajudar sua empresa a alcançar o
                  próximo nível.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Endereço</h4>
                      <p className="text-primary-foreground/80 leading-relaxed mt-1">
                        Av. Paulista, 1000 - Bela Vista
                        <br />
                        São Paulo - SP, 01310-100
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-full shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Telefone</h4>
                      <p className="text-primary-foreground/80 mt-1">(11) 99999-9999</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-full shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">E-mail</h4>
                      <p className="text-primary-foreground/80 mt-1">
                        contato@rsconsultoria.com.br
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-10">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Envie uma mensagem</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Seu nome" required className="bg-muted/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" placeholder="Nome da sua empresa" className="bg-muted/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail Corporativo</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com.br"
                      required
                      className="bg-muted/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      required
                      className="bg-muted/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Como podemos ajudar?</Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva brevemente sua necessidade..."
                    className="min-h-[150px] bg-muted/50 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                  {!isSubmitting && <Send className="h-4 w-4" />}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
