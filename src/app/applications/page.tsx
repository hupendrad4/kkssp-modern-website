'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { FileText, Download, Users, Banknote, CreditCard, UserPlus, Phone, Mail, CheckCircle, Clock, ArrowRight, Lightbulb, MapPin } from 'lucide-react'

export default function Applications() {
  const applicationForms = [
    {
      title: 'सदस्यत्व अर्ज',
      description: 'नवीन सदस्यत्वासाठी अर्ज फॉर्म',
      icon: UserPlus,
      category: 'सदस्यत्व',
      requirements: ['आधार कार्ड', 'पॅन कार्ड', 'पासपोर्ट फोटो', 'पगार प्रमाणपत्र'],
      processingTime: '७ दिवस',
      fees: '₹५००',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'जामीनावर कर्ज अर्ज',
      description: 'रु. १६ लाख पर्यंत कर्जासाठी अर्ज',
      icon: Banknote,
      category: 'कर्ज',
      requirements: ['सदस्यत्व प्रमाणपत्र', 'पगार प्रमाणपत्र', 'जामीनदार कागदपत्रे', 'बँक स्टेटमेंट'],
      processingTime: '१५ दिवस',
      fees: '₹१,०००',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'प्रासंगिक कर्ज अर्ज',
      description: 'तातडीच्या गरजेसाठी कर्ज अर्ज',
      icon: CreditCard,
      category: 'कर्ज',
      requirements: ['सदस्यत्व प्रमाणपत्र', 'आधार कार्ड', 'जामीनदार', 'कारण पत्र'],
      processingTime: '२४ तास',
      fees: '₹५००',
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'शेअर खरेदी अर्ज',
      description: 'अतिरिक्त शेअर्स खरेदीसाठी अर्ज',
      icon: FileText,
      category: 'गुंतवणूक',
      requirements: ['सदस्यत्व प्रमाणपत्र', 'बँक चेक/DD', 'आधार कार्ड'],
      processingTime: '३ दिवस',
      fees: 'कोणतेही नाही',
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'नामांतर अर्ज',
      description: 'सदस्यत्व नामांतरासाठी अर्ज',
      icon: Users,
      category: 'सेवा',
      requirements: ['मूळ सदस्यत्व प्रमाणपत्र', 'नवीन सदस्याची कागदपत्रे', 'नामांतर शुल्क'],
      processingTime: '१० दिवस',
      fees: '₹२००',
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'प्रमाणपत्र अर्ज',
      description: 'विविध प्रमाणपत्रांसाठी अर्ज',
      icon: FileText,
      category: 'सेवा',
      requirements: ['सदस्यत्व प्रमाणपत्र', 'आधार कार्ड', 'अर्ज फॉर्म'],
      processingTime: '५ दिवस',
      fees: '₹१००',
      color: 'from-indigo-500 to-blue-600'
    }
  ]

  const applicationProcess = [
    {
      step: '१',
      title: 'फॉर्म डाउनलोड करा',
      description: 'आवश्यक अर्ज फॉर्म डाउनलोड करा किंवा कार्यालयातून मिळवा',
      icon: Download
    },
    {
      step: '२',
      title: 'फॉर्म भरा',
      description: 'सर्व आवश्यक माहिती योग्यरित्या भरा',
      icon: FileText
    },
    {
      step: '३',
      title: 'कागदपत्रे जोडा',
      description: 'आवश्यक कागदपत्रांच्या प्रती जोडा',
      icon: CheckCircle
    },
    {
      step: '४',
      title: 'सादर करा',
      description: 'पूर्ण अर्ज कार्यालयात सादर करा',
      icon: ArrowRight
    }
  ]

  const onlineServices = [
    {
      title: 'ऑनलाइन अर्ज',
      description: 'घरबसल्या अर्ज करा',
      icon: '💻',
      available: true
    },
    {
      title: 'स्टेटस ट्रॅकिंग',
      description: 'अर्जाची स्थिती तपासा',
      icon: '📱',
      available: true
    },
    {
      title: 'डिजिटल पेमेंट',
      description: 'ऑनलाइन शुल्क भरणा',
      icon: '💳',
      available: true
    },
    {
      title: 'डॉक्युमेंट अपलोड',
      description: 'कागदपत्रे अपलोड करा',
      icon: '📄',
      available: false
    }
  ]

  const helpfulTips = [
    'सर्व कागदपत्रे स्पष्ट आणि वाचनीय असावीत',
    'फॉर्मातील सर्व माहिती योग्य असल्याची खात्री करा',
    'आवश्यक शुल्क DD किंवा चेकद्वारे भरा',
    'अर्ज सादर करताना रसीद नक्की घ्या',
    'प्रक्रिया वेळेत धैर्य ठेवा',
    'संशयास्पद बाबींसाठी कार्यालयाशी संपर्क साधा'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
        title="अर्ज फॉर्म्स"
        subtitle="सर्व सेवांसाठी आवश्यक अर्ज फॉर्म्स एकाच ठिकाणी - सोप्या प्रक्रियेत तुमच्या गरजा पूर्ण करा"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">सर्व सेवा एकाच ठिकाणी</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              आमच्या संस्थेच्या विविध सेवांसाठी आवश्यक अर्ज फॉर्म्स आणि त्यांची संपूर्ण माहिती. 
              सोप्या प्रक्रियेत तुमच्या सर्व गरजा पूर्ण करा.
            </p>
          </motion.div>

          {/* Application Forms Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">उपलब्ध अर्ज फॉर्म्स</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {applicationForms.map((form, index) => {
                const IconComponent = form.icon
                return (
                  <motion.div
                    key={form.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${form.color} p-4 -mx-6 -mt-6 mb-6 rounded-t-lg`}>
                        <div className="flex items-center space-x-3 text-white">
                          <IconComponent className="w-8 h-8" />
                          <div>
                            <h4 className="text-lg font-bold">{form.title}</h4>
                            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{form.category}</span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <p className="text-gray-600">{form.description}</p>
                        
                        {/* Details */}
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="font-semibold text-gray-800">प्रक्रिया वेळ:</span>
                            <div className="flex items-center space-x-1 mt-1">
                              <Clock className="w-4 h-4 text-blue-500" />
                              <span className="text-gray-600">{form.processingTime}</span>
                            </div>
                          </div>
                          <div>
                            <span className="font-semibold text-gray-800">शुल्क:</span>
                            <div className="text-green-600 font-medium mt-1">{form.fees}</div>
                          </div>
                        </div>

                        {/* Requirements */}
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">आवश्यक कागदपत्रे:</h5>
                          <div className="space-y-1">
                            {form.requirements.slice(0, 3).map((req, reqIndex) => (
                              <div key={req} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                                <span className="text-gray-600 text-xs">{req}</span>
                              </div>
                            ))}
                            {form.requirements.length > 3 && (
                              <div className="text-gray-500 text-xs">+{form.requirements.length - 3} अधिक</div>
                            )}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex space-x-2 pt-4">
                          <Button size="sm" className="flex-1 flex items-center justify-center space-x-1">
                            <Download className="w-4 h-4" />
                            <span>डाउनलोड</span>
                          </Button>
                          <Button variant="outline" size="sm" className="flex items-center justify-center">
                            <FileText className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Application Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">अर्जाची प्रक्रिया</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {applicationProcess.map((process, index) => {
                const IconComponent = process.icon
                return (
                  <motion.div
                    key={process.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center relative"
                  >
                    <div className="relative mb-4">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {process.step}
                      </div>
                      {index < applicationProcess.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <div className="mb-3">
                      <IconComponent className="w-8 h-8 mx-auto text-gray-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h4>
                    <p className="text-gray-600 text-sm">{process.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Online Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">ऑनलाइन सेवा</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {onlineServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className={`text-center p-6 ${service.available ? 'hover:shadow-xl' : 'opacity-60'} transition-all duration-300`}>
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      service.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {service.available ? 'उपलब्ध' : 'लवकरच'}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Helpful Tips */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">उपयुक्त सूचना</h3>
                <div className="space-y-3">
                  {helpfulTips.map((tip, index) => (
                    <motion.div
                      key={tip}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{tip}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
                  alt="Application Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">सोप्या प्रक्रियेत</h4>
                  <p className="text-sm opacity-90">तुमच्या सर्व गरजा पूर्ण करा</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact for Help */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">मदतीसाठी संपर्क करा</h3>
              <p className="text-gray-600 mb-6">
                अर्ज भरताना काही अडचण आली तर आमच्याशी संपर्क साधा. आम्ही तुमची मदत करण्यास तयार आहोत.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>फोन करा</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span>ईमेल पाठवा</span>
                </Button>
              </div>
              
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 text-blue-800">
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">फोन:</span>
                  </div>
                  <p className="text-blue-600 mt-1">+91 98765 43210</p>
                  <p className="text-blue-500 text-sm">सकाळी ९ ते संध्याकाळी ६</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <div className="flex items-center space-x-2 text-blue-800">
                    <Mail className="w-5 h-5" />
                    <span className="font-semibold">ईमेल:</span>
                  </div>
                  <p className="text-blue-600 mt-1">info@kksspdhule.in</p>
                  <p className="text-blue-500 text-sm">२४ तासांत प्रतिसाद</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Service Stats */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">सेवेची आकडेवारी</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              दरवर्षी हजारो अर्ज प्रक्रिया करून आम्ही सदस्यांची सेवा करतो
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">५,०००+</div>
                <div className="text-sm opacity-90">वार्षिक अर्ज</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">९८%</div>
                <div className="text-sm opacity-90">मंजुरी दर</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">७ दिवस</div>
                <div className="text-sm opacity-90">सरासरी प्रक्रिया वेळ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">२४/७</div>
                <div className="text-sm opacity-90">ऑनलाइन सेवा</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
