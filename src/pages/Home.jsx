import React, { useState } from 'react'
import { Github, Linkedin, Phone, Download } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { education, experiences, skills } from '../constants';
import miFoto from '../assets/foto.jpg';
import HV from '../assets/HV.pdf';
import ContactForm from '../components/ContactForm';

const Home = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null) 
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Sección de presentación */}
      <div className="w-full min-h-screen flex items-center" id="inicio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="flex-1 space-y-6 md:pr-8">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Hola, soy Brandon
            </h1>
            <h2 className="text-3xl md:text-5xl font-semibold text-blue-400">
              Niño Quiroga
            </h2>
            
            <p className="text-xl text-gray-300 text-justify">
            Soy programador web en la Gobernación de Boyacá y analista de datos con experiencia en Power BI. Actualmente, curso el séptimo semestre de Ingeniería de Sistemas.  
            Tengo conocimientos en desarrollo web con React.js y Node.js, así como en bases de datos SQL. Me apasiona crear soluciones innovadoras y optimizar procesos a través de la tecnología.
            </p>
            
            {/* Iconos de redes sociales */}
            <div className="flex space-x-6 mt-8">
              <a href="https://github.com/mwlware" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Github size={32} />
              </a>
              <a href="https://www.linkedin.com/in/brandon-esteven-ni%C3%B1o-quiroga-669a52173/" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Linkedin size={32} />
              </a>
              <a href="https://wa.me/573234695834" className="text-gray-300 hover:text-white transition-colors duration-300">
                <Phone size={32} />
              </a>
              <a href={HV} className="text-gray-300 hover:text-white transition-colors duration-300">
                <Download size={32} />
              </a>
            </div>
          </div>


          {/* Espacio para la imagen */}
          <div className="flex-1 mt-10 md:mt-0 w-full max-w-sm mx-auto md:max-w-md">
              <div className="aspect-square relative rounded-full overflow-hidden border-4 border-blue-400">
                  <img
                  src={miFoto}
                  alt="Brandon Niño Quiroga"
                  className="w-full h-full object-cover"
                />    
              </div>
          </div>
        </div>
      </div>

      {/* Sección acerca de mi */}
      <div className="w-full py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Mi Experiencia laboral
          </h2>
          <VerticalTimeline lineColor={'#3e3e3e'}>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={index}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.iconBg}
                      alt={experience.company_name}
                      className='w-[90%] h-[9   0%] object-contain'
                    />
                  </div>
                }
                iconStyle={{ background: '#1f2937' }}
                contentStyle={{
                  background: '#374151',
                  boxShadow: 'none',
                  border: '1px solid #4b5563',
                  textAlign: 'left',
                  padding: '1.5rem',
                }}
                contentArrowStyle={{ borderRight: '7px solid #4b5563' }}
              >
                <h3 className='text-white text-xl font-bold mb-1'>
                  {experience.title}
                </h3>
                <p className='text-gray-300 font-medium text-base mb-2'>
                  {experience.company_name}
                </p>
                <ul className='mt-4 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li key={`experience-point-${index}`} className='text-gray-400 text-sm'>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>


          {/* Educacion */}
          <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Mi experiencia  educativa
          </h2>
          <VerticalTimeline lineColor={'#3e3e3e'}>
      {education.map((edu, index) => (
        <VerticalTimelineElement
          key={index}
          date={edu.date}
          icon={
            <div className='flex justify-center items-center w-full h-full'>
              <img
                src={edu.iconBg}
                alt={edu.company_name}
                className='w-[90%] h-[90%] object-contain'
              />
            </div>
          }
          iconStyle={{ background: '#1f2937' }}
          contentStyle={{
            background: '#374151',
            boxShadow: 'none',
            border: '1px solid #4b5563',
            textAlign: 'left',
            padding: '1.5rem',
          }}
          contentArrowStyle={{ borderRight: '7px solid #4b5563' }}
        >
          <h3 className='text-white text-xl font-bold mb-1'>{edu.title}</h3>
          <p className='text-gray-300 font-medium text-base mb-2'>{edu.company_name}</p>
          <ul className='mt-4 space-y-2'>
            {edu.points.map((point, idx) => (
              <li key={`education-detail-${idx}`} className='text-gray-400 text-sm'>
                {point}
              </li>
            ))}
          </ul>
        </VerticalTimelineElement>
      ))}
          </VerticalTimeline>
          

          
        </div>
      </div>

      {/* stack tecnologias */}
      <div className="w-full py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Mis Stack de Tecnologías
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
                  className="w-90% h-90% object-contain transition-all duration-300 ease-in-out group-hover:scale-110"
                />
              </div>
              {hoveredSkill === skill.name && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl">
                  <span className="text-purple-400 text-sm font-bold">{skill.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className="w-full py-20 bg-gray-900" id="contacto">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </div>
    </div>
    
  );
};

export default Home;

