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
import { Banknote, Percent, Clock, CheckCircle, Users, Shield, FileText, Calculator, ArrowRight, Phone, Zap, Heart } from 'lucide-react'

export default function OccasionalLoan() {
  const loanFeatures = [
    {
      title: 'तातडीची रक्कम',
      description: 'रु. ५०,०००/- पर्यंत तातडीने कर्ज',
      icon: Zap,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'कमी व्याजदर',
      description: 'फक्त ६% वार्षिक व्याजदर',
      icon: Percent,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'जलद मंजुरी',
      description: '२४ तासांत कर्ज मंजुरी',
      icon: Clock,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'सोयीस्कर परतफेड',
      description: '२४ हफ्त्यांमध्ये परतफेड',
      icon: Shield,
      color: 'from-purple-500 to-violet-600'
    }
  ]

  const emergencyUses = [
    { title: 'वैद्यकीय आणीबाणी', description: 'अचानक आलेल्या आजारपणासाठी', icon: '🏥', urgency: 'अत्यावश्यक' },
    { title: 'शैक्षणिक फी', description: 'मुलांच्या शिक्षणासाठी तातडीची रक्कम', icon: '📚', urgency: 'महत्त्वाचे' },
    { title: 'घरगुती दुरुस्ती', description: 'घरातील तातडीच्या दुरुस्तीसाठी', icon: '🏠', urgency: 'आवश्यक' },
    { title: 'पारिवारिक समारंभ', description: 'लग्न, मुंडन इत्यादी समारंभांसाठी', icon: '🎉', urgency: 'सामाजिक' },
    { title: 'कृषी आवश्यकता', description: 'पिकाच्या हंगामातील तातडीची गरज', icon: '🌾', urgency: 'व्यावसायिक' },
    { title: 'वाहन दुरुस्ती', description: 'वाहनाच्या अचानक बिघडलेल्या दुरुस्तीसाठी', icon: '🚗', urgency: 'तातडीचे' }
  ]

  const loanProcess = [
    {
      step: '१',
      title: 'तातडीचा अर्ज',
      description: 'फोन किंवा ऑनलाइन तातडीचा अर्ज करा',
      icon: Phone,
      time: '५ मिनिटे'
    },
    {
      step: '२',
      title: 'त्वरित तपासणी',
      description: 'आमचे तज्ञ तुमचा अर्ज त्वरित तपासतील',
      icon: Users,
      time: '२ तास'
    },
    {
      step: '३',
      title: 'जलद मंजुरी',
      description: 'योग्यता तपासून २४ तासांत मंजुरी',
      icon: CheckCircle,
      time: '२४ तास'
    },
    {
      step: '४',
      title: 'रक्कम हस्तांतरण',
      description: 'मंजुरीनंतर लगेच रक्कम खात्यात',
      icon: Banknote,
      time: 'तत्काळ'
    }
  ]

  const eligibilityCriteria = [
    'संस्थेचे सभासद असणे आवश्यक',
    'किमान ६ महिन्यांचे सभासदत्व',
    'नियमित पगार प्रमाणपत्र',
    'आधीचे कर्ज चुकते केलेले असावे',
    'जामीनदार उपलब्ध असावा',
    'वैध आधार कार्ड आणि पॅन कार्ड'
  ]

  const repaymentOptions = [
    {
      title: 'साप्ताहिक हप्ता',
      description: 'दर आठवड्याला सोयीस्कर हप्ता',
      amount: '२,२००/-',
      period: '२४ आठवडे',
      icon: '📅'
    },
    {
      title: 'पाक्षिक हप्ता',
      description: 'दर पंधरा दिवसांनी हप्ता',
      amount: '४,४००/-',
      period: '१२ पाक्षिक',
      icon: '🗓️'
    },
    {
      title: 'मासिक हप्ता',
      description: 'दर महिन्याला एकच हप्ता',
      amount: '८,८००/-',
      period: '६ महिने',
      icon: '📆'
    }
  ]

  const benefits = [
    'कमी व्याजदर - फक्त ६% वार्षिक',
    'जलद मंजुरी - २४ तासांत',
    'कमी कागदपत्रे आवश्यक',
    'लवचिक परतफेड पर्याय',
    'कोणतेही छुपे शुल्क नाही',
    'तातडीच्या परिस्थितीत प्राधान्य',
    'ऑनलाइन अर्ज सुविधा',
    'व्यक्तिगत सल्ला उपलब्ध'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?q=80&w=2070&auto=format&fit=crop"
        title="प्रासंगिक कर्ज"
        subtitle="तातडीच्या आर्थिक गरजांसाठी रु. ५०,०००/- पर्यंत कर्ज - फक्त ६% व्याजदरावर आणि २४ तासांच्या जलद मंजुरीसह"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Emergency Loan Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">तातडीच्या गरजांसाठी तत्काळ कर्ज</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              जीवनातील अचानक आलेल्या आर्थिक गरजांसाठी आमची प्रासंगिक कर्ज योजना तुमच्या सेवेत आहे. 
              जलद मंजुरी, कमी व्याजदर आणि सोयीस्कर अटींसह तुमची समस्या सोडवा.
            </p>
          </motion.div>

          {/* Key Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {loanFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full text-center hover:shadow-2xl transition-all duration-300">
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Loan Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center">
                    <Banknote className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">कर्जाची रक्कम</h3>
                  <p className="text-3xl font-bold text-red-600">₹५०,०००</p>
                  <p className="text-gray-600 text-sm mt-1">अधिकतम मर्यादा</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                    <Percent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">व्याजदर</h3>
                  <p className="text-3xl font-bold text-green-600">६% वार्षिक</p>
                  <p className="text-gray-600 text-sm mt-1">स्पर्धात्मक दर</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center">
                    <Clock className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">परतफेड कालावधी</h3>
                  <p className="text-3xl font-bold text-blue-600">२४ आठवडे</p>
                  <p className="text-gray-600 text-sm mt-1">लवचिक पर्याय</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Emergency Uses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">प्रासंगिक कर्जाचा वापर</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emergencyUses.map((use, index) => (
                <motion.div
                  key={use.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{use.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-800">{use.title}</h4>
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            use.urgency === 'अत्यावश्यक' ? 'bg-red-100 text-red-800' :
                            use.urgency === 'महत्त्वाचे' ? 'bg-orange-100 text-orange-800' :
                            use.urgency === 'तातडीचे' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {use.urgency}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm">{use.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Loan Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">तातडीची कर्ज प्रक्रिया</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {loanProcess.map((process, index) => {
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
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {process.step}
                      </div>
                      {index < loanProcess.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-red-300 to-pink-300 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <div className="mb-3">
                      <IconComponent className="w-8 h-8 mx-auto text-gray-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{process.description}</p>
                    <div className="inline-block bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                      {process.time}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Eligibility & Repayment Options */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">पात्रता निकष</h3>
                <div className="space-y-3">
                  {eligibilityCriteria.map((criteria, index) => (
                    <motion.div
                      key={criteria}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{criteria}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <p className="text-blue-800 text-sm">
                    <strong>सूचना:</strong> तातडीच्या परिस्थितीत काही निकष शिथिल केले जाऊ शकतात.
                  </p>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">परतफेड पर्याय</h3>
                <div className="space-y-4">
                  {repaymentOptions.map((option, index) => (
                    <motion.div
                      key={option.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{option.icon}</span>
                          <h4 className="font-semibold text-gray-800">{option.title}</h4>
                        </div>
                        <span className="text-lg font-bold text-primary-600">{option.amount}</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{option.description}</p>
                      <p className="text-gray-500 text-xs">{option.period}</p>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">मुख्य फायदे</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-3 rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Emergency Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
              <div className="flex items-center justify-center mb-4">
                <Heart className="w-8 h-8 text-red-600 mr-2" />
                <h3 className="text-2xl font-bold text-gray-800">तातडीची गरज आहे?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                आपत्कालीन परिस्थितीत आम्ही तुमच्या सेवेत आहोत. आमच्याशी लगेच संपर्क साधा.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>तातडीने कॉल करा</span>
                </Button>
                <Button variant="outline" size="lg" className="border-red-600 text-red-600 hover:bg-red-50 flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>ऑनलाइन अर्ज करा</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-red-200">
                <p className="text-red-800 font-semibold text-center">
                  आपत्कालीन हेल्पलाइन: <a href="tel:+919876543210" className="underline">+91 98765 43210</a>
                </p>
                <p className="text-red-600 text-sm text-center mt-1">२४ तास उपलब्ध</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Success Stories */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2070&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">तातडीच्या मदतीची आकडेवारी</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              आपत्कालीन परिस्थितीत आम्ही हजारो कुटुंबांना मदत केली आहे
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={800} suffix="+" />
                </div>
                <div className="text-sm opacity-90">प्रासंगिक कर्ज मंजूर</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={2} suffix=" कोटी+" />
                </div>
                <div className="text-sm opacity-90">तातडीची मदत</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={18} suffix=" तास" />
                </div>
                <div className="text-sm opacity-90">सरासरी मंजुरी वेळ</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={100} suffix="%" />
                </div>
                <div className="text-sm opacity-90">ग्राहक समाधान</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
