'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { User, Lock, Eye, EyeOff, LogIn } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import Jumbotron from '@/components/ui/Jumbotron'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

export default function MemberLoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    memberId: '',
    password: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle login logic here
    console.log('Login attempt:', formData)
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Jumbotron Section */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
        title="सदस्य लॉगिन"
        subtitle="आपल्या कर्जाची स्थिती आणि खाते माहिती तपासा"
        height="md"
        overlay="gradient"
      />

      {/* Login Form Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-white/80 backdrop-blur-md border border-white/20 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">सदस्य प्रवेश</h2>
                  <p className="text-gray-600">आपली माहिती प्रविष्ट करा</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="memberId" className="block text-sm font-medium text-gray-700 mb-2">
                      सदस्य क्रमांक
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="memberId"
                        value={formData.memberId}
                        onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="आपला सदस्य क्रमांक प्रविष्ट करा"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      पासवर्ड
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        id="password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="आपला पासवर्ड प्रविष्ट करा"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                      </button>
                    </div>
                  </div>

                  <Button type="submit" className="w-full group">
                    <LogIn className="mr-2 w-5 h-5" />
                    लॉगिन करा
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Link href="/forgot-password" className="text-primary-600 hover:text-primary-700 text-sm">
                    पासवर्ड विसरलात?
                  </Link>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-600 mb-4">नवीन सदस्य आहात?</p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      संपर्क करा
                    </Button>
                  </Link>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
