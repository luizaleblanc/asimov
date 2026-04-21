"use client"

import { useEffect, useState, useRef } from "react"
import { Users, Clock, BookOpen, Briefcase } from "lucide-react"

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count.toLocaleString("pt-BR")}{suffix}</span>
}

const stats = [
  {
    icon: Users,
    value: 18000,
    suffix: "+",
    label: "alunos",
    description: "Junte-se a uma comunidade com milhares de estudantes.",
  },
  {
    icon: Clock,
    value: 275,
    suffix: "h",
    label: "de aulas",
    description: "Tudo que você precisa para se aprofundar na linguagem.",
  },
  {
    icon: BookOpen,
    value: 61,
    suffix: "",
    label: "cursos",
    description: "Acesso imediato a todos nossos conteúdos e cursos.",
  },
  {
    icon: Briefcase,
    value: 79,
    suffix: "",
    label: "projetos",
    description: "Aprenda na prática e coloque projetos reais no seu portfólio.",
  },
]

export default function StatsSection() {
  return (
    <section className="px-6 py-20 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            O que você encontra{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              na plataforma
            </span>
            ?
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gray-950 border border-gray-800 p-6 lg:p-8 rounded-2xl hover:border-emerald-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-6 h-6 text-emerald-400" />
                </div>
                
                <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                
                <div className="text-emerald-400 font-semibold mb-2">{stat.label}</div>
                
                <p className="text-gray-500 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
