"use client"

import Image from "next/image"

const instructors = [
  {
    name: "Juliano Faccioni",
    role: "Doutor em Biologia Celular e Molecular",
    description: "Doutor em Biologia Celular e Molecular pela UFRGS. Ensina Python, análise de dados e pensamento analítico desde 2018.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1pO3qdsGGAvwOM0xfK5QPp3Vz4uRNY.png",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Samuel Sublate",
    role: "Especialista em Automações",
    description: "Programador desde 2019, especializado em automações. Atuou em diferentes segmentos do mercado e hoje é fundador de uma empresa focada em automações contábeis.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-EPA5yNStAkQRsgURIp8clw6YP8nOd1.png",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Rodrigo Tadewald",
    role: "Sócio Fundador",
    description: "Engenheiro Químico formado pela UFRGS, aprendeu Python em 2014 para analisar dados no mercado financeiro. Se especializou em Machine Learning e Computação em nuvem.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UrM1MHi225Il70kZzklccZhl87ImnB.png",
    gradient: "from-emerald-500 to-green-500",
  },
]

export default function InstructorsSection() {
  return (
    <section className="px-6 py-20 lg:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            Conheça os{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              especialistas
            </span>
          </h2>
          <p className="text-gray-400 text-lg">
            que vão guiar seu aprendizado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="group relative bg-gray-950 border border-gray-800 p-8 rounded-2xl hover:border-gray-700 transition-all duration-500 text-center"
            >
              <div className="w-24 h-24 rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform overflow-hidden">
                <Image 
                  src={instructor.image} 
                  alt={instructor.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">
                {instructor.name}
              </h3>
              
              <p className="text-emerald-400 text-sm font-medium mb-4">
                {instructor.role}
              </p>
              
              <p className="text-gray-500 text-sm leading-relaxed">
                {instructor.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
