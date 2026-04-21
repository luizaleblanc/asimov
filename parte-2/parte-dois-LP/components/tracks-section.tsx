"use client"

import { Clock, ArrowRight, Bot, BarChart3, Database, Code2, Eye, Zap, Globe, FileSpreadsheet } from "lucide-react"

const tracks = [
  {
    icon: Bot,
    title: "Formação Engenheiros de IA",
    description: "Do zero a seus primeiros agentes IA usando apenas Python.",
    hours: "49h",
    color: "from-purple-500 to-pink-500",
    featured: true,
  },
  {
    icon: Code2,
    title: "Trilha Aprendendo Python",
    description: "Aprenda Python do zero e domine a linguagem com profundidade.",
    hours: "22h",
    color: "from-emerald-500 to-cyan-500",
  },
  {
    icon: BarChart3,
    title: "Formação Analista de Dados",
    description: "Analise dados profissionalmente usando Python.",
    hours: "24h",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: Database,
    title: "Trilha Data Science e ML",
    description: "Domine a ciência de dados usando Python e Machine Learning.",
    hours: "29h",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Zap,
    title: "Trilha Automações com n8n",
    description: "Aprenda n8n e leve suas tarefas ao próximo nível com automações.",
    hours: "5h",
    color: "from-yellow-500 to-orange-500",
  },
  {
    icon: BarChart3,
    title: "Trilha Dashboards Interativos",
    description: "Crie dashboards interativos e dinâmicos com Python.",
    hours: "39h",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Globe,
    title: "Trilha Python para Web",
    description: "Aprenda na prática a criar, versionar e publicar sistemas reais.",
    hours: "20h",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Eye,
    title: "Trilha Visão Computacional",
    description: "Aprenda a criar sistemas inteligentes com imagens e vídeos.",
    hours: "22h",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: FileSpreadsheet,
    title: "Trilha Python Office",
    description: "Aprenda a criar automações com Python do zero.",
    hours: "47h",
    color: "from-gray-500 to-gray-400",
  },
]

export default function TracksSection() {
  return (
    <section className="px-6 py-20 lg:px-12 border-t border-gray-800" id="trilhas">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            Estudo objetivo baseado em trilhas
          </span>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-balance">
            Escolha sua habilidade e
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              foque no essencial
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Os cursos são organizados por Trilhas de conhecimento. Escolha seu objetivo e siga um caminho direto até ele.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {tracks.map((track, index) => (
            <div
              key={index}
              className={`group relative bg-gray-950 border border-gray-800 p-6 rounded-2xl hover:border-gray-700 transition-all duration-500 cursor-pointer ${
                track.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${track.color} bg-opacity-20 flex items-center justify-center`}>
                    <track.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex items-center gap-1 text-gray-500 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{track.hours}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                  {track.title}
                </h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {track.description}
                </p>
                
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Ver trilha</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
