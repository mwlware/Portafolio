import React, { useState, useEffect } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'light' ? false : true
  })
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  const scrollToContact = (e) => {
    e.preventDefault()
    const contactSection = document.getElementById('contacto')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const scrollToInicio = (e) => {
    e.preventDefault()
    const inicioSection = document.getElementById('inicio')
    if (inicioSection) {
      inicioSection.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} shadow-lg transition-colors duration-300 fixed w-full z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={scrollToInicio}
              className={`font-bold text-2xl tracking-wider ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'} transition-colors duration-200`}
            >
              MI PORTAFOLIO
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavItem 
              text="Sobre mí" 
              to="/#inicio" 
              isDarkMode={isDarkMode}
              onClick={scrollToInicio}
            />
            <NavItem 
              text="Contáctame" 
              to="/#contacto" 
              isDarkMode={isDarkMode} 
              onClick={scrollToContact}
            />
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`ml-2 inline-flex items-center justify-center p-2 rounded-md ${isDarkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200`}
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? 'Cerrar menú principal' : 'Abrir menú principal'}
              </span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavItem 
              text="Sobre mí" 
              to="/#inicio" 
              isDarkMode={isDarkMode}
              onClick={scrollToInicio}
            />
            <MobileNavItem 
              text="Contáctame" 
              to="/#contacto" 
              isDarkMode={isDarkMode} 
              onClick={scrollToContact}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

const NavItem = ({ text, to, isDarkMode, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`px-3 py-2 rounded-md text-sm font-medium ${
      isDarkMode
        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
    } transition-all duration-200 ease-in-out transform hover:scale-105`}
  >
    {text}
  </Link>
)

const MobileNavItem = ({ text, to, isDarkMode, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium ${
      isDarkMode
        ? 'text-gray-300 hover:text-white hover:bg-gray-700'
        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
    } transition-all duration-200 ease-in-out`}
  >
    {text}
  </Link>
)

const ThemeToggle = ({ isDarkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    className={`p-2 rounded-full ${
      isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'
    } hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
      isDarkMode ? 'focus:ring-yellow-400' : 'focus:ring-gray-500'
    } transition-all duration-300 ease-in-out transform hover:scale-110`}
  >
    <div className="relative w-6 h-6">
      <Sun
        className={`absolute inset-0 ${
          isDarkMode ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'
        } transition-all duration-300 ease-in-out transform`}
        size={24}
      />
      <Moon
        className={`absolute inset-0 ${
          isDarkMode ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'
        } transition-all duration-300 ease-in-out transform`}
        size={24}
      />
    </div>
  </button>
)

export default NavBar