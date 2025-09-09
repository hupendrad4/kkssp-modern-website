'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import Card from '@/components/ui/Card'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { Users, Award, Heart, Star, Crown, Shield } from 'lucide-react'

export default function ValuableContributions() {
  const formerLeaders = [
    {
      name: 'कै. आप्पासो दौलतराव राजाराम शिंदे',
      position: 'संस्थापक अध्यक्ष',
      period: '१९७१-१९८०',
      contribution: 'संस्थेची स्थापना आणि प्रारंभिक दिशा',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop',
      icon: Crown,
      color: 'from-gold-500 to-yellow-600'
    },
    {
      name: 'श्री. रामचंद्र पाटील',
      position: 'माजी अध्यक्ष',
      period: '१९८०-१९९०',
      contribution: 'सदस्यत्व विस्तार आणि कर्ज योजनांचा विकास',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop',
      icon: Users,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      name: 'श्री. सुनील देशमुख',
      position: 'माजी सचिव',
      period: '१९९०-२००५',
      contribution: 'आधुनिकीकरण आणि तंत्रज्ञानाचा वापर',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop',
      icon: Star,
      color: 'from-green-500 to-emerald-600'
    },
    {
      name: 'श्री. विजय कुलकर्णी',
      position: 'माजी कोषाध्यक्ष',
      period: '२००५-२०१५',
      contribution: 'आर्थिक व्यवस्थापन आणि पारदर्शकता',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=150&auto=format&fit=crop',
      icon: Shield,
      color: 'from-purple-500 to-violet-600'
    }
  ]

  const contributions = [
    {
      title: 'दूरदृष्टी आणि नेतृत्व',
      description: 'संस्थेच्या दीर्घकालीन विकासासाठी योग्य दिशा प्रदान केली',
      icon: Award,
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'सामाजिक सेवा',
      description: 'शासकीय कर्मचारी वर्गाच्या कल्याणासाठी निःस्वार्थ सेवा',
      icon: Heart,
      color: 'from-red-500 to-pink-600'
    },
    {
      title: 'आर्थिक स्थिरता',
      description: 'संस्थेची आर्थिक मजबूती आणि विश्वासार्हता निर्माण केली',
      icon: Shield,
      color: 'from-green-500 to-teal-600'
    },
    {
      title: 'नवाचार',
      description: 'नवीन योजना आणि सेवांचा परिचय करून संस्थेला पुढे नेले',
      icon: Star,
      color: 'from-blue-500 to-cyan-600'
    }
  ]

  const values = [
    'सहकार आणि एकता',
    'पारदर्शकता',
    'सामाजिक जबाबदारी',
    'नैतिक मूल्ये',
    'सेवाभावना',
    'प्रगतिशीलता'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2070&auto=format&fit=crop"
        title="अमुल्य योगदान"
        subtitle="माजी संचालक मंडळाचे अमूल्य योगदान संस्थेच्या प्रगतीत महत्त्वाचे आहे - त्यांच्या मार्गदर्शनामुळे संस्था यशस्वीपणे पुढे जात आहे"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">माजी नेतृत्वाचा सन्मान</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              त्यांच्या दूरदृष्टी, नेतृत्व, आणि अथक परिश्रमांमुळे संस्था सतत प्रगतीपथावर आहे. 
              त्यांच्या योगदानाने आमच्या पतसंस्थेला विश्वासार्हता आणि सामर्थ्य प्राप्त झाले आहे.
            </p>
          </motion.div>

          {/* Former Leaders */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {formerLeaders.map((leader, index) => {
              const IconComponent = leader.icon
              return (
                <motion.div
                  key={leader.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden">
                    {/* Header with gradient */}
                    <div className={`bg-gradient-to-r ${leader.color} p-6 -mx-6 -mt-6 mb-6`}>
                      <div className="flex items-center space-x-4 text-white">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white/30">
                            <Image
                              src={leader.image}
                              alt={leader.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-gray-700" />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold">{leader.name}</h3>
                          <p className="text-sm opacity-90">{leader.position}</p>
                          <p className="text-xs opacity-75">{leader.period}</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">मुख्य योगदान:</h4>
                        <p className="text-gray-600">{leader.contribution}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Key Contributions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">मुख्य योगदान क्षेत्रे</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contributions.map((contribution, index) => {
                const IconComponent = contribution.icon
                return (
                  <motion.div
                    key={contribution.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <div className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${contribution.color} rounded-full flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{contribution.title}</h4>
                    <p className="text-gray-600 text-sm">{contribution.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Values and Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">त्यांनी रोपलेली मूल्ये</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                    <span className="font-medium text-gray-700">{value}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Legacy Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500">
              <div className="flex items-start space-x-4">
                <Award className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-amber-800 mb-3">त्यांचे अमूल्य वारसा</h4>
                  <p className="text-gray-700 leading-relaxed">
                    माजी संचालक मंडळाच्या अमूल्य योगदानामुळे आज आमची संस्था धुळे जिल्ह्यातील शासकीय कर्मचारी वर्गासाठी 
                    एक आदर्श बनली आहे. त्यांच्या दूरदृष्टी आणि कठोर परिश्रमांचे फळ म्हणून आज हजारो कुटुंबांना 
                    आर्थिक सुरक्षा आणि स्वावलंबनाचा लाभ मिळत आहे. त्यांच्या स्मृतीला आदरांजली!
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Tribute */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">कृतज्ञता व्यक्त करतो</h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              &quot;सहकाराच्या माध्यमातून समाजसेवा&quot; - हे त्यांचे ध्येय आजही आमचे मार्गदर्शन करते
            </p>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto border border-white/20">
              <p className="text-lg italic">
                &quot;एकत्रित प्रयत्न आणि सहकारचं बळ वापरूनच समस्या सोडवता येतील&quot;
              </p>
              <p className="text-sm mt-4 opacity-75">- संस्थापक आदर्श</p>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
