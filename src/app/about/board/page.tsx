import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import BoardMembers from '@/components/sections/BoardMembers'

export const metadata: Metadata = {
  title: 'संचालक मंडळ | KKSSP धुळे',
  description: 'कृषी खाते सेवक सहकारी पतसंस्था मर्यादित, धुळे यांचे संचालक मंडळ',
}

export default function BoardPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <BoardMembers />
      </main>
      <Footer />
    </>
  )
}
