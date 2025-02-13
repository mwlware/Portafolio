"use client"

import { useState, useEffect } from "react"
import { Send } from "lucide-react"
import emailjs from "@emailjs/browser"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState("")

    useEffect(() => {
        if (submitMessage) {
            const timer = setTimeout(() => {
                setSubmitMessage("")
            }, 5000)
            return () => clearTimeout(timer)
        }
    }, [submitMessage])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
        // Limpiar error cuando el usuario empieza a escribir
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: ""
            }))
        }
    }

    const validateForm = () => {
        const errors = {}
        if (!formData.name?.trim()) {
            errors.name = "El nombre es requerido"
        } else if (formData.name.trim().length < 3) {
            errors.name = "El nombre debe tener al menos 3 caracteres"
        }

        if (!formData.email?.trim()) {
            errors.email = "El email es requerido"
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "El email no es válido"
        }

        if (!formData.message?.trim()) {
            errors.message = "El mensaje es requerido"
        } else if (formData.message.trim().length < 10) {
            errors.message = "El mensaje debe tener al menos 10 caracteres"
        }

        return errors
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isSubmitting) return

        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors)
            return
        }

        setIsSubmitting(true)
        setErrors({})

        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message
        }

        try {
            await emailjs.send(
                "service_0a9qz03",
                "template_1tmieva",
                templateParams,
                "gJjUFw7WFkek6K-mf"
            )
            setSubmitMessage("¡Mensaje enviado con éxito!")
            setFormData({ name: "", email: "", message: "" })
        } catch (error) {
            console.error("Error:", error)
            setSubmitMessage("Hubo un error al enviar el mensaje. Inténtalo de nuevo.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className="">
            <div className="bg-gradient-to-b from-gray-800 to-gray-800 rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-bold text-center text-white mb-6">Contáctame</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Tu nombre"
                        />
                        {errors.name && <p className="text-sm text-red-400">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="tu@email.com"
                        />
                        {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent min-h-[120px]"
                            placeholder="Tu mensaje..."
                        />
                        {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ease-in-out flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                        <Send className="ml-2 h-4 w-4" />
                    </button>
                    {submitMessage && (
                        <p className={`text-sm text-center ${submitMessage.includes("éxito") ? "text-green-400" : "text-red-400"}`}>
                            {submitMessage}
                        </p>
                    )}
                </form>
            </div>
        </div>
    )
}