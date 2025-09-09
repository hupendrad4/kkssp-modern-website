import Header from '@/components/layout/Header'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/sections/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'संपर्क | KKSSP Dhule',
  description: 'कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे - संपर्क माहिती आणि पत्ता',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
