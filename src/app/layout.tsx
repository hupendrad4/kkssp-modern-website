import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे | KKSSP Dhule',
  description: 'सरकारी कर्मचाऱ्यांद्वारे व्यवस्थापित केलेली पतसंस्था, आर्थिक सहाय्याची गरज असलेल्या व्यक्तींना मदत करण्यासाठी कर्जाच्या अनेक पर्यायांची ऑफर देते.',
  keywords: 'कृषि खाते सेवक, सहकारी पतसंस्था, धुळे, कर्ज योजना, महाराष्ट्र',
  authors: [{ name: 'KKSSP Dhule' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="mr" className="scroll-smooth">
      <body className={`${inter.className} font-marathi antialiased pt-32 md:pt-24`}>
        {children}
      </body>
    </html>
  )
}
