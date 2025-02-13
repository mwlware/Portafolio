import React, { useState } from 'react'
import { skills } from '../constants/index.js'

const Proyectos = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Mis Habilidades
        </h2>
        
        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative w-24 h-24 cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl transition-all duration-300 ease-in-out group-hover:rotate-6" />
              <div className="relative bg-white rounded-xl p-4 flex justify-center items-center w-full h-full transition-all duration-300 ease-in-out group-hover:-rotate-6">
                <img
                  src={skill.imageUrl || "/placeholder.svg"}
                  alt={skill.name}
                  className="w-3/4 h-3/4 object-contain transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
                  <span className="text-white text-sm font-semibold">{skill.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos