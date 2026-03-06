'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle2 } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Aquí iría la lógica para enviar el formulario
    console.log('Form data:', data)
    setIsSubmitted(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
        <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="h-10 w-10 text-accent" />
        </div>
        <h2 className="text-h3 font-display font-semibold text-dark mb-4">
          ¡Mensaje enviado!
        </h2>
        <p className="text-body text-slate font-body">
          Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="bg-white rounded-lg shadow-xl border border-slate-100 p-8 md:p-12 hover:shadow-2xl transition-shadow duration-500 relative overflow-hidden group">
        
        {/* Subtle decorative top border for visual balance with the left panel */}
        <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-accent to-accent-600 opacity-50" />

        <h3 className="text-2xl font-display font-medium text-dark mb-8">Envíanos un mensaje</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="group/input">
            <label htmlFor="name" className="block text-xs font-bold tracking-wider uppercase text-slate-500 mb-2 transition-colors group-hover/input:text-accent">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300 font-body placeholder-slate-300"
              placeholder="Ej. Juan Pérez"
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-500 font-body">{errors.name.message}</p>
            )}
          </div>

          <div className="group/input">
            <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-slate-500 mb-2 transition-colors group-hover/input:text-accent">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300 font-body placeholder-slate-300"
              placeholder="correo@ejemplo.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-500 font-body">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6 group/input">
          <label htmlFor="phone" className="block text-xs font-bold tracking-wider uppercase text-slate-500 mb-2 transition-colors group-hover/input:text-accent">
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300 font-body placeholder-slate-300"
            placeholder="+58 (000) 000-0000"
          />
        </div>

        <div className="mb-6 group/input">
          <label htmlFor="subject" className="block text-xs font-bold tracking-wider uppercase text-slate-500 mb-2 transition-colors group-hover/input:text-accent">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300 font-body placeholder-slate-300"
            placeholder="¿En qué podemos ayudarle?"
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-red-500 font-body">{errors.subject.message}</p>
          )}
        </div>

        <div className="mb-8 group/input">
          <label htmlFor="message" className="block text-xs font-bold tracking-wider uppercase text-slate-500 mb-2 transition-colors group-hover/input:text-accent">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message')}
            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-md focus:outline-none focus:ring-2 focus:ring-accent focus:bg-white transition-all duration-300 font-body resize-none placeholder-slate-300"
            placeholder="Escriba su mensaje aquí..."
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-500 font-body">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-dark text-white rounded-md font-display font-medium text-lg hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 relative overflow-hidden group/btn"
        >
          <span className="relative z-10">Enviar Mensaje</span>
          <div className="absolute inset-0 bg-accent scale-x-0 group-hover/btn:scale-x-100 origin-left transition-transform duration-500 ease-out z-0" />
        </button>
      </div>
    </form>
  )
}
