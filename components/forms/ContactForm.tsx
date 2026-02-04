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
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-body-sm font-body font-medium text-slate mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              {...register('name')}
              className="w-full px-4 py-3 border border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
            />
            {errors.name && (
              <p className="mt-1 text-body-xs text-accent font-body">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-body-sm font-body font-medium text-slate mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email')}
              className="w-full px-4 py-3 border border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
            />
            {errors.email && (
              <p className="mt-1 text-body-xs text-accent font-body">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="phone" className="block text-body-sm font-body font-medium text-slate mb-2">
            Teléfono (opcional)
          </label>
          <input
            type="tel"
            id="phone"
            {...register('phone')}
            className="w-full px-4 py-3 border border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="subject" className="block text-body-sm font-body font-medium text-slate mb-2">
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            {...register('subject')}
            className="w-full px-4 py-3 border border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body"
          />
          {errors.subject && (
            <p className="mt-1 text-body-xs text-accent font-body">{errors.subject.message}</p>
          )}
        </div>

        <div className="mb-8">
          <label htmlFor="message" className="block text-body-sm font-body font-medium text-slate mb-2">
            Mensaje
          </label>
          <textarea
            id="message"
            rows={6}
            {...register('message')}
            className="w-full px-4 py-3 border border-slate/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent font-body resize-none"
          />
          {errors.message && (
            <p className="mt-1 text-body-xs text-accent font-body">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-8 py-4 bg-accent text-white rounded-xl font-display font-semibold text-body hover:bg-accent-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Enviar Mensaje
        </button>
      </div>
    </form>
  )
}
