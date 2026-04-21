"use client"

import { Clock, Bot, Utensils, Dumbbell, BarChart3, CreditCard, Home, Truck, Mail } from "lucide-react"

const projects = [
  {
    icon: Bot,
    title: "Agente Analisador de Currículos com IA",
    author: "Samuel Sublate",
    hours: "14h",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Utensils,
    title: "AI Nutricionista – IA no Telegram",
    author: "Samuel Sublate",
    hours: "10h",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Dumbbell,
    title: "Personal Trainer com Inteligência Artificial",
    author: "Rodrigo Tadewald",
    hours: "5h",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: BarChart3,
    title: "GasPrices – Dashboard de Análise da gasolina",
    author: "Rodrigo Tadewald",
    hours: "3h",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: CreditCard,
    title: "Análise de crédito com Machine Learning",
    author: "Rodrigo Tadewald",
    hours: "1h",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: Home,
    title: "Dashboard de análise imobiliária",
    author: "Rodrigo Tadewald",
    hours: "3h",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Truck,
    title: "Otimização de rotas para logística",
    author: "Adriano Soares",
    hours: "3h",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Mail,
    title: "Gerando Relatório Automático Via E-mail",
    author: "Rodrigo Vanzelotti",
    hours: "3h",
    color: "from-indigo-500 to-purple-500",
  },
]

export default function ProjectsSection() {
  return (
    <section className="px-6 py-20 lg:px-12 border-t border-gray-800" id="projetos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            +60 projetos exclusivos
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Projetos construídos{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              passo a passo
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Aprenda construindo projetos reais para colocar em seu portfólio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-950 border border-gray-800 p-5 rounded-xl hover:border-gray-700 transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-xl`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-600 text-xs">
                    <Clock className="w-3 h-3" />
                    <span>{project.hours}</span>
                  </div>
                </div>
                
                <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-xs">
                  {project.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="group inline-flex items-center gap-2 px-6 py-3 border border-gray-700 hover:border-emerald-500/50 text-white font-medium rounded-lg transition-all duration-300 hover:bg-emerald-500/5">
            <span>Conheça nossa base completa</span>
            <span className="text-emerald-400 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  )
}
