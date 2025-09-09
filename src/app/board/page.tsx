import Header from '@/components/layout/Header'
import BoardMembers from '@/components/sections/BoardMembers'
import Footer from '@/components/sections/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'संचालक मंडळ | KKSSP Dhule',
  description: 'कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे - संचालक मंडळाची माहिती',
}

export default function BoardPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <BoardMembers />
      </div>
      <Footer />
    </main>
  )
}
