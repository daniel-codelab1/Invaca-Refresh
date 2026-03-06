import { Metadata } from 'next'
import { ContactClient } from './ContactClient'

export const metadata: Metadata = {
  title: 'Contacto | INVACA',
  description: 'Ponte en contacto con INVACA Investment Company. Estamos aquí para responder tus consultas.',
}

export default function ContactPage() {
  return <ContactClient />
}
