"use client"

const footerLinks = {
  plataforma: [
    { label: "Lista de cursos", href: "#cursos" },
    { label: "Blog", href: "#" },
    { label: "Tutoriais", href: "#" },
    { label: "Newsletter", href: "#" },
  ],
  sobre: [
    { label: "Sobre nós", href: "#" },
    { label: "Manifesto", href: "#" },
    { label: "Trabalhe Conosco", href: "#" },
    { label: "Para empresas", href: "#" },
  ],
  legal: [
    { label: "Política de privacidade", href: "#" },
    { label: "Termos de uso", href: "#" },
    { label: "Contrate nossos alunos", href: "#" },
  ],
  suporte: [
    { label: "Contato", href: "#" },
    { label: "FAQ", href: "#" },
  ],
}

export default function Footer() {
  return (
    <footer className="px-6 py-16 lg:px-12 border-t border-gray-800 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl mb-4" />
            <p className="text-gray-500 text-sm">
              A maior escola de programação em Python do Brasil.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">A plataforma</h4>
            <ul className="space-y-3">
              {footerLinks.plataforma.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Sobre</h4>
            <ul className="space-y-3">
              {footerLinks.sobre.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Suporte</h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2024. Todos os direitos reservados. CNPJ: 41.075.192/0001-82
          </p>
        </div>
      </div>
    </footer>
  )
}
