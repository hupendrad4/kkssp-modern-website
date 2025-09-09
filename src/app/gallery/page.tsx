'use client'

import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function GalleryPage() {
  const galleryImages = [
    {
      src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
      alt: 'KKSSP Office Building',
      title: 'आमचे कार्यालय'
    },
    {
      src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
      alt: 'Meeting Hall',
      title: 'सभागृह'
    },
    {
      src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
      alt: 'Annual General Meeting',
      title: 'वार्षिक सर्वसाधारण सभा'
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop',
      alt: 'Board Meeting',
      title: 'संचालक मंडळ बैठक'
    },
    {
      src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop',
      alt: 'Loan Distribution Ceremony',
      title: 'कर्ज वितरण समारंभ'
    },
    {
      src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
      alt: 'Community Event',
      title: 'सामुदायिक कार्यक्रम'
    },
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      alt: 'Office Interior',
      title: 'कार्यालयीन वातावरण'
    },
    {
      src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop',
      alt: 'Financial Growth',
      title: 'आर्थिक प्रगती'
    },
    {
      src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop',
      alt: 'Cooperative Building',
      title: 'सहकारी संस्था'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">फोटो गॅलरी</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              आमच्या संस्थेच्या विविध कार्यक्रमांची आणि उपक्रमांची झलक
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-w-16 aspect-h-12 bg-gray-200">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
