"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowRight, Play, CheckCircle2, Sparkles } from "lucide-react"

export default function CourseHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const fullText = "print('Hello, Python!')"
  
  const rotatingWords = [
    "projetos reais",
    "automações",
    "dashboards",
    "agentes",
    "análise de dados",
  ]

  useEffect(() => {
    setIsVisible(true)
    
    let index = 0
    const typeInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typeInterval)
      }
    }, 80)

    return () => clearInterval(typeInterval)
  }, [])

  useEffect(() => {
    const currentWord = rotatingWords[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex(prev => prev + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1)
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, currentWordIndex])

  const bullets = [
    "+40 horas de conteúdo direto ao ponto",
    "Projetos com Python + IA desde o módulo 1",
    "Suporte da comunidade com +20.000 alunos",
    "Certificado reconhecido pelo mercado",
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 lg:px-12 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), 
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-emerald-400 font-medium">
                Potencializado por IA
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-center leading-tight mb-6 text-balance">
            <span className="font-mono tracking-tight">
              Aprenda{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                  Python
                </span>
                <span className="absolute -inset-1 bg-emerald-400/20 blur-xl rounded-lg -z-10" />
              </span>{" "}
              do zero
            </span>
            <br />
            <span className="block mt-2">
              e construa{" "}
              <span className="relative inline-block min-w-[280px] md:min-w-[380px] text-left">
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent font-black">
                  {rotatingWords[currentWordIndex].slice(0, charIndex)}
                </span>
                <span className="inline-block w-1 h-[0.9em] bg-yellow-400 ml-1 animate-pulse align-middle" />
              </span>
            </span>
            <span className="block mt-2">
              com{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent font-black tracking-wide">
                  IA
                </span>
                <span className="absolute -inset-2 bg-purple-500/20 blur-xl rounded-lg -z-10 animate-pulse" />
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mx-auto mb-12 text-pretty">
            O curso mais prático do Brasil para quem quer entrar em tecnologia
            sem enrolação
          </p>

          {/* Terminal preview */}
          <div className="max-w-md mx-auto mb-12">
            <div className="bg-gray-950 border border-gray-800 rounded-lg overflow-hidden shadow-2xl shadow-emerald-500/5">
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-500 ml-2">python</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">{">>>"}</span>
                  <span className="text-emerald-400">{typedText}</span>
                  <span className="w-2 h-5 bg-emerald-400 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {bullets.map((bullet, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm md:text-base">{bullet}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-emerald-500 rounded-lg blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
              <div className="relative flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-semibold rounded-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-emerald-500/25">
                <span>Quero começar agora</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <button className="group flex items-center justify-center gap-2 px-8 py-4 border border-gray-700 hover:border-gray-500 text-white font-medium rounded-lg transition-all duration-300 w-full sm:w-auto hover:bg-gray-900/50">
              <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              <span>Ver o que vou aprender</span>
            </button>
          </div>

          {/* Social proof */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-black flex items-center justify-center text-xs font-medium text-gray-400"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <span className="text-gray-400">+20.000 alunos</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-700" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="text-gray-400 ml-1">4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
