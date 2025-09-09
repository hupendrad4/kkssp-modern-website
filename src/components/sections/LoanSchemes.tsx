'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import Button from '@/components/ui/Button'
import { Banknote, Percent, Clock, CheckCircle, Users, TrendingUp, Leaf, Home, Car, CreditCard, ArrowRight } from 'lucide-react'

const loanSchemes = [
  {
    title: 'वैयक्तिक कर्ज',
    description: 'तुमच्या वैयक्तिक गरजांसाठी सोप्या अटींवर कर्ज',
    features: [
      'कमी व्याजदर',
      'जलद मंजुरी',
      'कमी कागदपत्रे',
      'लवचिक परतफेड'
    ],
    icon: CreditCard,
    maxAmount: '₹5,00,000',
    interestRate: '12%',
    tenure: '5 वर्षे',
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'कृषी कर्ज',
    description: 'शेतकऱ्यांसाठी विशेष कृषी कर्ज योजना',
    features: [
      'कृषी उपकरणे खरेदी',
      'बियाणे आणि खते',
      'सिंचन सुविधा',
      'पीक विमा समावेश'
    ],
    icon: Leaf,
    maxAmount: '₹10,00,000',
    interestRate: '9%',
    tenure: '7 वर्षे',
    color: 'from-green-500 to-green-600'
  },
  {
    title: 'गृह कर्ज',
    description: 'स्वप्नातील घर बांधण्यासाठी किंवा खरेदीसाठी',
    features: [
      'कमी डाउन पेमेंट',
      'लांब मुदतीची परतफेड',
      'प्री-पेमेंट सुविधा',
      'टॅक्स बेनिफिट'
    ],
    icon: Home,
    maxAmount: '₹25,00,000',
    interestRate: '10.5%',
    tenure: '20 वर्षे',
    color: 'from-purple-500 to-purple-600'
  },
  {
    title: 'वाहन कर्ज',
    description: 'कार, ट्रॅक्टर किंवा इतर वाहनांसाठी कर्ज',
    features: [
      'जलद प्रक्रिया',
      'स्पर्धात्मक दर',
      'न्यूनतम कागदपत्रे',
      'लवकर मंजुरी'
    ],
    icon: Car,
    maxAmount: '₹15,00,000',
    interestRate: '11%',
    tenure: '7 वर्षे',
    color: 'from-orange-500 to-orange-600'
  }
]

const loanProcess = [
  {
    step: '1',
    title: 'अर्ज भरा',
    description: 'ऑनलाइन किंवा शाखेत जाऊन अर्ज भरा'
  },
  {
    step: '2',
    title: 'कागदपत्रे सादर करा',
    description: 'आवश्यक कागदपत्रे आणि दस्तऐवज सादर करा'
  },
  {
    step: '3',
    title: 'तपासणी',
    description: 'आमचे तज्ञ तुमचा अर्ज तपासतील'
  },
  {
    step: '4',
    title: 'मंजुरी',
    description: 'कर्ज मंजूर झाल्यानंतर रक्कम तुमच्या खात्यात जमा'
  }
]

export default function LoanSchemes() {
  return (
    <>
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
        title="कर्ज योजना"
        subtitle="तुमच्या स्वप्नांना पूर्ण करण्यासाठी योग्य कर्ज योजना - कृषी, व्यापार आणि वैयक्तिक गरजांसाठी सोयीस्कर अटी"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">आमच्या कर्ज योजना</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              तुमच्या प्रत्येक आर्थिक गरजेसाठी योग्य कर्ज योजना निवडा
            </p>
            
            {/* Loan Process Image */}
            <div className="relative h-64 max-w-4xl mx-auto mt-8 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop"
                alt="Loan Application Process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="text-lg font-semibold">सोप्या प्रक्रियेत कर्ज मिळवा</h4>
                <p className="text-sm opacity-90">जलद मंजुरी आणि कमी कागदपत्रे</p>
              </div>
            </div>
          </motion.div>

          {/* Loan Schemes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                  {loanSchemes.map((scheme, index) => {
                    const IconComponent = scheme.icon
                    return (
                      <motion.div
                        key={scheme.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="group"
                      >
                        <Card className="h-full hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                          {/* Icon Header */}
                          <div className={`bg-gradient-to-r ${scheme.color} p-4 -mx-6 -mt-6 mb-6`}>
                            <div className="flex items-center justify-between text-white">
                              <IconComponent className="w-8 h-8" />
                              <div className="text-right">
                                <div className="text-sm opacity-90">कमाल</div>
                                <div className="font-bold">{scheme.maxAmount}</div>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="space-y-4">
                            <div>
                              <h3 className="text-xl font-bold text-gray-800 mb-2">{scheme.title}</h3>
                              <p className="text-gray-600 text-sm">{scheme.description}</p>
                            </div>

                            {/* Features */}
                            <div className="space-y-2">
                              {scheme.features.map((feature, featureIndex) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.4, delay: (index * 0.2) + (featureIndex * 0.1) }}
                                  viewport={{ once: true }}
                                  className="flex items-center space-x-2"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                  <span className="text-gray-600 text-sm">{feature}</span>
                                </motion.div>
                              ))}
                            </div>

                            {/* Loan Details */}
                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                              <div className="text-center">
                                <Percent className="w-4 h-4 mx-auto mb-1 text-blue-600" />
                                <div className="text-xs text-gray-500">व्याजदर</div>
                                <div className="font-semibold text-sm">{scheme.interestRate}</div>
                              </div>
                              <div className="text-center">
                                <Clock className="w-4 h-4 mx-auto mb-1 text-purple-600" />
                                <div className="text-xs text-gray-500">मुदत</div>
                                <div className="font-semibold text-sm">{scheme.tenure}</div>
                              </div>
                            </div>

                            {/* Apply Button */}
                            <Button className={`w-full bg-gradient-to-r ${scheme.color} text-white hover:scale-105 transition-transform`}>
                              अर्ज करा <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                          </div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>

          {/* Loan Process */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">कर्जाची प्रक्रिया</h3>
              <p className="text-lg text-gray-600">सोप्या ४ पायऱ्यांमध्ये तुमचे कर्ज मिळवा</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {loanProcess.map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="text-center relative"
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {process.step}
                    </div>
                    {index < loanProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform -translate-y-1/2"></div>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h4>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Loan Statistics */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">आमची यशगाथा</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              हजारो कुटुंबांच्या स्वप्नांना साकार करण्यात आम्ही यशस्वी झालो आहोत
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={2500} suffix="+" />
                </div>
                <div className="text-sm opacity-90">कर्ज मंजूर</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={50} suffix=" कोटी+" />
                </div>
                <div className="text-sm opacity-90">कर्ज वितरण</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={98} suffix="%" />
                </div>
                <div className="text-sm opacity-90">परतफेड दर</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={24} suffix=" तास" />
                </div>
                <div className="text-sm opacity-90">जलद मंजुरी</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
    </>
  )
}
