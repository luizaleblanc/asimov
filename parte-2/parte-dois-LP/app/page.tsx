"use client"

import { useEffect, useState } from "react"
import CourseHero from "@/components/course-hero"
import StatsSection from "@/components/stats-section"
import TracksSection from "@/components/tracks-section"
import FeaturesSection from "@/components/features-section"
import ProjectsSection from "@/components/projects-section"
import InstructorsSection from "@/components/instructors-section"
import PricingSection from "@/components/pricing-section"
import FaqSection from "@/components/faq-section"
import Footer from "@/components/footer"

export default function CourseLanding() {
  const [matrixChars, setMatrixChars] = useState<string[]>([])

  useEffect(() => {
    const chars = "PYTHON01010101ABCDEF█▓▒░▄▀■□▪▫".split("")
    const newMatrixChars = Array.from({ length: 100 }, () => chars[Math.floor(Math.random() * chars.length)])
    setMatrixChars(newMatrixChars)

    const interval = setInterval(() => {
      setMatrixChars((prev) => prev.map(() => chars[Math.floor(Math.random() * chars.length)]))
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-mono overflow-hidden relative">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-950/95 backdrop-blur-sm p-4 relative z-10 sticky top-0">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg" />
            </div>

            <div className="hidden lg:flex items-center gap-6 ml-8">
              <a
                href="#formacoes"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                <span>Formações</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="#trilhas"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                <span>Trilhas</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="#cursos"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                <span>Cursos</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="#projetos"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                <span>Projetos</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
              <a
                href="#gratuitos"
                className="text-gray-400 hover:text-white transition-colors cursor-pointer relative group"
              >
                <span>Conteúdos gratuitos</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></div>
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="hidden sm:block text-gray-400 hover:text-white transition-colors text-sm">
              Entrar
            </a>

            <a
              href="#planos"
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-emerald-500 rounded-lg blur-sm opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative bg-emerald-500 hover:bg-emerald-400 text-black font-semibold px-6 py-2 text-sm rounded-lg transition-all duration-300">
                Matricule-se
              </div>
            </a>

            <button className="lg:hidden text-gray-400 hover:text-white transition-colors">
              <div className="w-6 h-6 flex flex-col justify-center gap-1">
                <div className="w-full h-0.5 bg-current transition-all duration-300"></div>
                <div className="w-full h-0.5 bg-current transition-all duration-300"></div>
                <div className="w-full h-0.5 bg-current transition-all duration-300"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Matrix background effect */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-25 gap-1 h-full">
          {matrixChars.map((char, i) => (
            <div key={i} className="text-emerald-500 text-xs animate-pulse">
              {char}
            </div>
          ))}
        </div>
      </div>

      {/* Course Hero Section */}
      <CourseHero />

      {/* Stats Section */}
      <StatsSection />

      {/* Tracks Section */}
      <TracksSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Instructors Section */}
      <InstructorsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}
