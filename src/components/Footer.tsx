import { Briefcase, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white">RS Consultoria</span>
            </Link>
            <p className="text-sm text-slate-400 max-w-xs">
              Transformando desafios complexos em estratégias claras e resultados excepcionais para
              o seu negócio.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <a href="#inicio" className="text-sm hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-sm hover:text-white transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-sm hover:text-white transition-colors">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#contato" className="text-sm hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li className="text-sm text-slate-400">Consultoria Financeira</li>
              <li className="text-sm text-slate-400">Planejamento Estratégico</li>
              <li className="text-sm text-slate-400">Gestão de Pessoas</li>
              <li className="text-sm text-slate-400">Otimização de Processos</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP, 01310-100
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>contato@rsconsultoria.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} RS Consultoria. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
