"use client"

import { Check, Sparkles } from "lucide-react"

const plans = [
  {
    name: "Assinatura Anual",
    badge: "Mais popular",
    price: "179,00",
    period: "12x R$",
    fullPrice: "R$ 1.793,55 à vista com desconto",
    features: [
      "Todos os Cursos, Formações e Trilhas",
      "Acesso por 1 ano",
      "Todos os projetos da plataforma",
      "Todos nossos e-books autorais",
      "Certificados exclusivos",
      "Suporte com professores",
      "Acesso à Comunidade",
    ],
    featured: true,
  },
  {
    name: "Acesso Vitalício",
    badge: null,
    price: "629,89",
    period: "12x R$",
    fullPrice: "R$ 6.277,40 à vista com desconto",
    features: [
      "Todos os Cursos, Formações e Trilhas",
      "Acesso total para sempre",
      "Todos os projetos da plataforma",
      "Todos nossos e-books autorais",
      "Certificados exclusivos",
      "Suporte com professores",
      "Comunidade de Alunos",
    ],
    featured: false,
  },
]

export default function PricingSection() {
  return (
    <section className="px-6 py-20 lg:px-12 border-t border-gray-800" id="planos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Escolha o melhor{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              plano
            </span>{" "}
            para você
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-gray-950 border rounded-2xl p-8 transition-all duration-500 ${
                plan.featured
                  ? "border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                  : "border-gray-800 hover:border-gray-700"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="inline-flex items-center gap-1 px-4 py-1.5 bg-emerald-500 text-black text-sm font-semibold rounded-full">
                    <Sparkles className="w-4 h-4" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white mb-4">{plan.name}</h3>
                
                <div className="flex items-baseline justify-center gap-1 mb-2">
                  <span className="text-gray-500 text-lg">{plan.period}</span>
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                </div>
                
                <p className="text-gray-500 text-sm">
                  ou {plan.fullPrice}
                </p>
              </div>

              <button
                className={`w-full py-4 rounded-lg font-semibold mb-8 transition-all duration-300 ${
                  plan.featured
                    ? "bg-emerald-500 hover:bg-emerald-400 text-black"
                    : "bg-gray-800 hover:bg-gray-700 text-white"
                }`}
              >
                Inscreva-se
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.featured ? "text-emerald-400" : "text-gray-500"}`} />
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
