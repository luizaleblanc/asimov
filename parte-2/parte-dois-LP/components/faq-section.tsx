"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Não sei se os cursos são para mim!",
    answer: "Nossos cursos são feitos para todos os níveis. Se você nunca programou, começamos do zero. Se já tem experiência, temos trilhas avançadas para você se especializar em áreas como IA, Data Science e automações.",
  },
  {
    question: "Nunca programei em Python. Tem algum pré-requisito?",
    answer: "Não! Nossa Trilha Aprendendo Python começa do zero absoluto. Você só precisa de um computador e vontade de aprender. Guiamos você desde a instalação até projetos complexos.",
  },
  {
    question: "Terei acesso total à plataforma?",
    answer: "Sim! Ao assinar, você tem acesso imediato a todos os cursos, trilhas, formações, projetos e e-books da plataforma. Sem restrições.",
  },
  {
    question: "Como vejo a grade curricular e a carga horária de cada curso ou trilha?",
    answer: "Cada trilha e curso tem sua página própria com a grade curricular completa, carga horária, projetos inclusos e o que você vai aprender. Basta clicar na trilha desejada.",
  },
  {
    question: "Qual o tempo de acesso à plataforma?",
    answer: "Na assinatura anual, você tem 1 ano de acesso. No plano vitalício, o acesso é para sempre, incluindo todas as atualizações futuras.",
  },
  {
    question: "A renovação da Assinatura é automática?",
    answer: "Não. A renovação não é automática. Você decide se quer renovar quando o período terminar.",
  },
  {
    question: "Como funciona a garantia de 7 dias e reembolso?",
    answer: "Você tem 7 dias para testar a plataforma. Se não gostar, devolvemos 100% do seu dinheiro, sem perguntas.",
  },
  {
    question: "Como posso pagar minha assinatura?",
    answer: "Aceitamos cartão de crédito (parcelado em até 12x), boleto bancário e PIX.",
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="px-6 py-20 lg:px-12 border-t border-gray-800">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Dúvidas{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              frequentes
            </span>
          </h2>
          <p className="text-gray-400">
            Se a sua dúvida não foi respondida aqui, entre em contato conosco!
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-xl overflow-hidden bg-gray-950/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-900/50 transition-colors"
              >
                <span className="font-medium text-white pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-5 pb-5 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
