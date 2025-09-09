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
import { Banknote, Percent, Clock, CheckCircle, Users, Shield, FileText, Calculator, ArrowRight, Phone } from 'lucide-react'

export default function GuaranteeLoan() {
  const loanFeatures = [
    {
      title: 'उच्च कर्ज मर्यादा',
      description: 'रु. १६,००,०००/- पर्यंत कर्ज मिळवा',
      icon: Banknote,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'स्पर्धात्मक व्याजदर',
      description: 'फक्त ८% वार्षिक व्याजदर',
      icon: Percent,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'लवचिक परतफेड',
      description: '८४ हफ्त्यांमध्ये सोयीस्कर परतफेड',
      icon: Clock,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'विश्वसनीय प्रक्रिया',
      description: 'पारदर्शक आणि सोयीस्कर कर्ज प्रक्रिया',
      icon: Shield,
      color: 'from-orange-500 to-red-600'
    }
  ]

  const usageAreas = [
    { title: 'घर खरेदी', description: 'स्वप्नातील घर खरेदी करण्यासाठी', icon: '🏠' },
    { title: 'शिक्षण', description: 'उच्च शिक्षणासाठी आर्थिक मदत', icon: '📚' },
    { title: 'वैद्यकीय खर्च', description: 'आरोग्य संबंधी तातडीच्या खर्चासाठी', icon: '🏥' },
    { title: 'व्यापार विस्तार', description: 'व्यापार वाढवण्यासाठी भांडवल', icon: '💼' },
    { title: 'लग्न समारंभ', description: 'पारिवारिक समारंभांसाठी', icon: '💒' },
    { title: 'वाहन खरेदी', description: 'कार किंवा दुचाकी खरेदीसाठी', icon: '🚗' }
  ]

  const applicationProcess = [
    {
      step: '१',
      title: 'अर्ज भरा',
      description: 'संपूर्ण अर्ज फॉर्म भरा आणि आवश्यक कागदपत्रे जोडा',
      icon: FileText
    },
    {
      step: '२',
      title: 'दस्तऐवज सादर करा',
      description: 'आयडी प्रूफ, पगार प्रमाणपत्र आणि इतर आवश्यक कागदपत्रे',
      icon: CheckCircle
    },
    {
      step: '३',
      title: 'तपासणी प्रक्रिया',
      description: 'आमचे तज्ञ तुमचा अर्ज आणि कागदपत्रांची तपासणी करतील',
      icon: Users
    },
    {
      step: '४',
      title: 'कर्ज मंजुरी',
      description: 'मंजुरीनंतर रक्कम तुमच्या खात्यात जमा केली जाईल',
      icon: Banknote
    }
  ]

  const requiredDocuments = [
    'आधार कार्ड',
    'पॅन कार्ड',
    'पगार प्रमाणपत्र',
    'बँक स्टेटमेंट (शेवटचे ६ महिने)',
    'पासपोर्ट साइज फोटो',
    'निवास प्रमाणपत्र',
    'जामीनदाराची कागदपत्रे'
  ]

  const benefits = [
    'कमी व्याजदर - फक्त ८% वार्षिक',
    'जलद मंजुरी प्रक्रिया',
    'कमी कागदपत्रे',
    'लवचिक परतफेड पर्याय',
    'प्री-पेमेंट सुविधा',
    'पारदर्शक अटी व शर्ती',
    '२४/७ ग्राहक सेवा',
    'ऑनलाइन अकाउंट व्यवस्थापन'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
        title="जामीनावर कर्ज"
        subtitle="तुमच्या सर्व आर्थिक गरजांसाठी रु. १६ लाख पर्यंत कर्ज - फक्त ८% व्याजदरावर आणि ८४ हफ्त्यांच्या सोयीस्कर परतफेडीसह"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Loan Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">कर्जाची संपूर्ण माहिती</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              आमची जामीनावर कर्ज योजना तुमच्या विविध आर्थिक गरजांसाठी डिझाइन केली गेली आहे. 
              स्पर्धात्मक व्याजदर आणि सोयीस्कर अटींसह तुमचे स्वप्न साकार करा.
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

          {/* Loan Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">कर्जाचे तपशील</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Banknote className="w-6 h-6 text-green-600" />
                      <span className="font-semibold text-gray-800">कर्जाची रक्कम</span>
                    </div>
                    <span className="text-2xl font-bold text-green-600">₹१६,००,०००</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Percent className="w-6 h-6 text-blue-600" />
                      <span className="font-semibold text-gray-800">व्याजदर</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">८% वार्षिक</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-purple-600" />
                      <span className="font-semibold text-gray-800">परतफेड कालावधी</span>
                    </div>
                    <span className="text-2xl font-bold text-purple-600">८४ हफ्ते</span>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border-l-4 border-amber-500">
                  <p className="text-gray-700">
                    <strong>विशेष सूचना:</strong> ही कर्ज सुविधा सभासदांच्या आर्थिक स्थैर्यासाठी आणि 
                    त्यांच्या विविध गरजांची पूर्तता करण्यासाठी एक महत्त्वपूर्ण साधन आहे.
                  </p>
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
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop"
                  alt="Loan Application Process"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">सोप्या प्रक्रियेत कर्ज मिळवा</h4>
                  <p className="text-sm opacity-90">जलद मंजुरी आणि कमी कागदपत्रे</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Usage Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">कर्जाचा वापर</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {usageAreas.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="text-center p-6 hover:shadow-lg transition-all duration-300">
                    <div className="text-4xl mb-3">{area.icon}</div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{area.title}</h4>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </Card>
                </motion.div>
              ))}
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

          {/* Required Documents & Benefits */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">आवश्यक कागदपत्रे</h3>
                <div className="space-y-3">
                  {requiredDocuments.map((document, index) => (
                    <motion.div
                      key={document}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{document}</span>
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
            >
              <Card>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">मुख्य फायदे</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">आज ही अर्ज करा!</h3>
              <p className="text-gray-600 mb-6">
                तुमच्या आर्थिक गरजा पूर्ण करण्यासाठी आमच्या जामीनावर कर्ज योजनाचा लाभ घ्या
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>ऑनलाइन अर्ज करा</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>आमच्याशी संपर्क साधा</span>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Success Stories */}
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
                  <AnimatedCounter from={0} to={1500} suffix="+" />
                </div>
                <div className="text-sm opacity-90">जामीनावर कर्ज मंजूर</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={25} suffix=" कोटी+" />
                </div>
                <div className="text-sm opacity-90">कर्ज वितरण</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={99} suffix="%" />
                </div>
                <div className="text-sm opacity-90">परतफेड दर</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={7} suffix=" दिवस" />
                </div>
                <div className="text-sm opacity-90">सरासरी मंजुरी वेळ</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
