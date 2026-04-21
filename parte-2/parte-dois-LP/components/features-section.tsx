"use client"

import { Monitor, FolderKanban, Route, BookOpen, Award, Users } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Plataforma de ensino",
    description: "Você terá acesso a uma plataforma personalizada e fácil de usar, com acesso completo a todos os conteúdos.",
  },
  {
    icon: FolderKanban,
    title: "Projetos exclusivos",
    description: "Aprenda o passo a passo para construir todos os projetos e aplicar seus conhecimentos na vida real.",
  },
  {
    icon: Route,
    title: "Cursos organizados por trilhas e formações",
    description: "Seu estudo é formatado em sequências de cursos contendo todo o pré-requisito para você alcançar seus objetivos.",
  },
  {
    icon: BookOpen,
    title: "E-books Autorais",
    description: "Conteúdos autorais sobre programação, IA e dados, desenvolvidos para apoiar seu aprendizado prático em tecnologia.",
  },
  {
    icon: Award,
    title: "Certificado de conclusão",
    description: "Cada curso e trilha da plataforma lhe garante um certificado de conclusão.",
  },
  {
    icon: Users,
    title: "Comunidade de alunos",
    description: "O lugar ideal para você fazer networking, conhecer outros alunos e até receber oportunidades de trabalho.",
  },
]

export default function FeaturesSection() {
  return (
    <section className="px-6 py-20 lg:px-12 border-t border-gray-800" id="cursos">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Tudo que você{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              precisa
            </span>{" "}
            para evoluir
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Você tem acesso a uma base completa de cursos com as mais variadas aplicações.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-gray-950/50 border border-gray-800 p-8 rounded-2xl hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-500/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-emerald-400" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
