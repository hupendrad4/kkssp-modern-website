import Header from '@/components/layout/Header'
import About from '@/components/sections/About'
import Footer from '@/components/sections/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'आमच्या विषयी | KKSSP Dhule',
  description: 'कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे - आमचा इतिहास, ध्येय आणि उद्दिष्टे',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <About />
      </div>
      <Footer />
    </main>
  )
}
