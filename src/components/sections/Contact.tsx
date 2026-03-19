import { useState } from 'react'
import { Mail, MapPin, Phone, Instagram, Send } from 'lucide-react'
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
        description: 'Entrarei em contato o mais breve possível.',
      })
      ;(e.target as HTMLFormElement).reset()
    }, 1500)
  }

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-border">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2 bg-slate-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-[#b38f07]/30 blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">Vamos conversar?</h3>
                <p className="text-slate-300 mb-12">
                  Entre em contato para agendar uma consulta e descobrir como posso ajudar com suas
                  demandas jurídicas ou empresariais.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full shrink-0">
                      <Phone className="h-6 w-6 text-[#b38f07]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">WhatsApp / Telefone</h4>
                      <p className="text-slate-300 mt-1">+55 21 99584-2062</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-full shrink-0">
                      <Mail className="h-6 w-6 text-[#b38f07]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">E-mail</h4>
                      <p className="text-slate-300 mt-1">rscontatob@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/10 rounded-full shrink-0">
                      <Instagram className="h-6 w-6 text-[#b38f07]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Instagram</h4>
                      <p className="text-slate-300 mt-1">@rafaellas_ofic</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-white/10 rounded-full shrink-0">
                      <MapPin className="h-6 w-6 text-[#b38f07]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Endereço</h4>
                      <p className="text-slate-300 leading-relaxed mt-1">
                        Rua Silva Cardoso, 08
                        <br />
                        Lote 4, Quadra Cinco - RJ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3 p-10">
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Fale com a Especialista</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input id="nome" placeholder="Seu nome" required className="bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assunto">Assunto</Label>
                    <Input id="assunto" placeholder="Ex: Consultoria" className="bg-slate-50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      className="bg-slate-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone / WhatsApp</Label>
                    <Input
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      required
                      className="bg-slate-50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Como posso ajudar?</Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva brevemente sua necessidade..."
                    className="min-h-[150px] bg-slate-50 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full md:w-auto gap-2 bg-[#b38f07] hover:bg-[#8f7206] text-white"
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
