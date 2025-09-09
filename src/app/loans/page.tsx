import Header from '@/components/layout/Header'
import LoanSchemes from '@/components/sections/LoanSchemes'
import Footer from '@/components/sections/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'कर्ज योजना | KKSSP Dhule',
  description: 'कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे - विविध कर्ज योजनांची माहिती',
}

export default function LoansPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32">
        <LoanSchemes />
      </div>
      <Footer />
    </main>
  )
}
