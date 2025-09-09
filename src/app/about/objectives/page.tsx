'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import Card from '@/components/ui/Card'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import { Target, Users, TrendingUp, Shield, Heart, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react'

export default function OrganizationObjectives() {
  const primaryObjectives = [
    {
      title: 'सभासदांना बचतीच्या सवयी लावणे',
      description: 'शासकीय कर्मचारी वर्गाला त्यांच्या उत्पन्नातील काही भाग बचतीसाठी ठेवण्यास प्रोत्साहित करणे',
      icon: Target,
      color: 'from-blue-500 to-blue-600',
      benefits: ['आर्थिक नियोजन', 'भविष्य सुरक्षा', 'काटकसरीची सवय']
    },
    {
      title: 'स्वावलंबनाचा सराव',
      description: 'सदस्यांना आर्थिक स्वावलंबी बनण्यासाठी प्रोत्साहित करणे आणि मार्गदर्शन करणे',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      benefits: ['आत्मनिर्भरता', 'आर्थिक स्थिरता', 'व्यक्तिमत्व विकास']
    },
    {
      title: 'हमीभावावर कर्ज सुविधा',
      description: 'सभासदांच्या आवश्यक उपक्रमांसाठी योग्य अटींवर कर्ज उपलब्ध करून देणे',
      icon: Shield,
      color: 'from-purple-500 to-purple-600',
      benefits: ['सोयीस्कर कर्ज', 'कमी व्याजदर', 'जलद मंजुरी']
    },
    {
      title: 'सामाजिक कल्याण',
      description: 'कर्मचारी वर्गाच्या मुलांसाठी शैक्षणिक सुविधा, आरोग्य सेवा आणि सामाजिक उन्नती',
      icon: Heart,
      color: 'from-red-500 to-red-600',
      benefits: ['शिक्षण सहाय्य', 'आरोग्य सेवा', 'सामाजिक सुरक्षा']
    }
  ]

  const strategicGoals = [
    {
      title: 'भांडवल उभारणी',
      description: 'सभासदांकडून भागभांडवल आणि सभासदत्व शुल्क स्वीकारून संस्थेचे भांडवल वाढवणे',
      icon: TrendingUp
    },
    {
      title: 'सहकारी भागीदारी',
      description: 'इतर पतसंस्थांसोबत भागीदारी तयार करून सहयोग वाढवणे',
      icon: Users
    },
    {
      title: 'तंत्रज्ञान उपलब्धता',
      description: 'आवश्यक तंत्रज्ञान आणि आधुनिक सुविधा उपलब्ध करून देणे',
      icon: Lightbulb
    },
    {
      title: 'मालमत्ता विकास',
      description: 'संस्थेच्या वापरासाठी मालमत्ता किंवा इमारती घेणे',
      icon: Shield
    }
  ]

  const achievements = [
    { title: 'आर्थिक सशक्तीकरण', value: '२५००+ कुटुंबे', description: 'आर्थिक सुरक्षा प्राप्त' },
    { title: 'कर्ज वितरण', value: '५० कोटी+', description: 'एकूण कर्ज वितरण' },
    { title: 'सदस्यत्व', value: '९८%', description: 'सदस्य समाधान दर' },
    { title: 'सेवा वर्षे', value: '५३+', description: 'निरंतर सेवा' }
  ]

  const futureVision = [
    'डिजिटल बँकिंग सेवांचा विस्तार',
    'अधिक कर्ज योजनांचा परिचय',
    'ऑनलाइन सदस्य सेवा',
    'आधुनिक तंत्रज्ञानाचा वापर',
    'पर्यावरण अनुकूल उपक्रम',
    'युवा पिढीसाठी विशेष योजना'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        title="संस्थेची उद्दिष्ठे"
        subtitle="सहकाराच्या माध्यमातून शासकीय कर्मचारी वर्गाचे आर्थिक सशक्तीकरण आणि सामाजिक कल्याण - आमची प्रेरणादायी उद्दिष्ठे"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">आमचे ध्येय</h2>
            <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-l-4 border-primary-500 max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed">
                &quot;सहकाराच्या माध्यमातून शासकीय कर्मचारी वर्गाचे आर्थिक सशक्तीकरण करणे, 
                त्यांच्या जीवनमानात सुधारणा घडवून आणणे आणि स्वावलंबनाचा मार्ग दाखवणे&quot;
              </p>
            </Card>
          </motion.div>

          {/* Primary Objectives */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">मुख्य उद्दिष्ठे</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {primaryObjectives.map((objective, index) => {
                const IconComponent = objective.icon
                return (
                  <motion.div
                    key={objective.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full hover:shadow-2xl transition-all duration-300">
                      {/* Header */}
                      <div className={`bg-gradient-to-r ${objective.color} p-4 -mx-6 -mt-6 mb-6 rounded-t-lg`}>
                        <div className="flex items-center space-x-3 text-white">
                          <IconComponent className="w-8 h-8" />
                          <h4 className="text-lg font-bold">{objective.title}</h4>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <p className="text-gray-600">{objective.description}</p>
                        
                        {/* Benefits */}
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-2">मुख्य फायदे:</h5>
                          <div className="space-y-2">
                            {objective.benefits.map((benefit, benefitIndex) => (
                              <div key={benefit} className="flex items-center space-x-2">
                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Strategic Goals */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">रणनीतिक उद्दिष्ठे</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {strategicGoals.map((goal, index) => {
                const IconComponent = goal.icon
                return (
                  <motion.div
                    key={goal.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <Card className="h-full p-6">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{goal.title}</h4>
                      <p className="text-gray-600 text-sm">{goal.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">उद्दिष्ठे साध्य करण्यातील यश</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">{achievement.value}</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Future Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-indigo-50 to-purple-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">भविष्यातील दृष्टिकोन</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {futureVision.map((vision, index) => (
                  <motion.div
                    key={vision}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <ArrowRight className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                    <span className="font-medium text-gray-700">{vision}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 italic">
                  &quot;आमची उद्दिष्ठे केवळ आर्थिक नसून सामाजिक बदलाची आहेत&quot;
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Vision */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">आमचे संकल्प</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              प्रत्येक सदस्याचे आर्थिक कल्याण आणि सामाजिक उन्नती - हेच आमचे खरे उद्दिष्ठ
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-4xl mx-auto border border-white/20">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Target className="w-12 h-12 mx-auto mb-3" />
                  <h4 className="text-lg font-bold mb-2">स्पष्ट उद्दिष्ठे</h4>
                  <p className="text-sm opacity-90">प्रत्येक कृतीमागे स्पष्ट हेतू</p>
                </div>
                <div>
                  <Users className="w-12 h-12 mx-auto mb-3" />
                  <h4 className="text-lg font-bold mb-2">सामूहिक प्रयत्न</h4>
                  <p className="text-sm opacity-90">सर्वांच्या सहकार्याने प्रगती</p>
                </div>
                <div>
                  <Heart className="w-12 h-12 mx-auto mb-3" />
                  <h4 className="text-lg font-bold mb-2">सेवाभावना</h4>
                  <p className="text-sm opacity-90">निःस्वार्थ सामाजिक सेवा</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
