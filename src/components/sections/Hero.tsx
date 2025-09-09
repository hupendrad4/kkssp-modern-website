'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Users, TrendingUp, Shield, Wheat, Banknote, Heart } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import Jumbotron from '@/components/ui/Jumbotron'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import ParallaxSection from '@/components/ui/ParallaxSection'

export default function Hero() {
  return (
    <>
      {/* Main Jumbotron */}
      <Jumbotron
        backgroundImage="/images/landing/optimized/LandingPage.jpg"
        title="कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे"
        subtitle="शेतकऱ्यांच्या आर्थिक सशक्तीकरणासाठी आणि ग्रामीण विकासासाठी समर्पित"
        height="xl"
        overlay="gradient"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link href="/loans">
            <Button size="lg" className="group bg-primary-600 hover:bg-primary-700">
              कर्जासाठी अर्ज करा
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </Link>
          <Link href="/member-login">
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-800">
              सदस्य लॉगिन
            </Button>
          </Link>
        </div>
      </Jumbotron>

      {/* Stats Section with Parallax */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center text-white"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Wheat className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={50} suffix="+" />
              </div>
              <div className="text-sm opacity-90">वर्षांचा अनुभव</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={2500} suffix="+" />
              </div>
              <div className="text-sm opacity-90">सक्रिय सदस्य</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Banknote className="w-12 h-12 mx-auto mb-4 text-green-400" />
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={25} prefix="₹" suffix=" कोटी" />
              </div>
              <div className="text-sm opacity-90">कर्ज वितरण</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-400" />
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={98} suffix="%" />
              </div>
              <div className="text-sm opacity-90">परतफेड दर</div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">आमच्या सेवा</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              शेतकरी आणि ग्रामीण समुदायासाठी संपूर्ण आर्थिक सेवा
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wheat,
                title: 'कृषि कर्ज',
                description: 'शेतीसाठी आवश्यक असलेले सर्व प्रकारचे कर्ज',
                features: ['बियाणे खरेदी', 'खत आणि कीटकनाशके', 'शेती उपकरणे', 'जमीन सुधारणा'],
                color: 'from-green-500 to-green-600'
              },
              {
                icon: Users,
                title: 'व्यक्तिगत कर्ज',
                description: 'वैयक्तिक गरजांसाठी सोप्या अटींवर कर्ज',
                features: ['शिक्षण कर्ज', 'वैद्यकीय कर्ज', 'गृह सुधारणा', 'विवाह खर्च'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: TrendingUp,
                title: 'व्यवसाय कर्ज',
                description: 'लघु व्यवसाय आणि स्वयंरोजगारासाठी',
                features: ['दुकान स्थापना', 'यंत्रसामग्री', 'कार्यभांडवल', 'व्यापार विस्तार'],
                color: 'from-purple-500 to-purple-600'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                    <service.icon className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-sm opacity-90">{service.description}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <div className="w-2 h-2 bg-primary-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/loans" className="inline-block mt-6">
                      <Button className="w-full group">
                        अधिक माहिती
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
