import { Metadata } from 'next'
import { ContactForm } from '@/components/forms/ContactForm'

export const metadata: Metadata = {
  title: 'Contacto | INVACA',
  description: 'Ponte en contacto con INVACA Investment Company. Estamos aquí para responder tus consultas.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-h1 md:text-[3rem] font-display font-bold mb-6 tracking-tight">
            Contacto
          </h1>
          <p className="text-body-lg text-primary-100 max-w-2xl font-body">
            Estamos aquí para ayudarte. Contáctanos y te responderemos a la brevedad posible.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
