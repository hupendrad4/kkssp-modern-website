'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import Card from '@/components/ui/Card'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { Calendar, Users, Building, Award, Target, TrendingUp } from 'lucide-react'

export default function OrganizationHistory() {
  const milestones = [
    {
      year: '१९७१',
      title: 'संस्थेची स्थापना',
      description: '१२ एप्रिल १९७१ रोजी कृषि खाते सेवक सहकारी पतसंस्था मर्यादित, धुळे ची स्थापना झाली',
      icon: Building,
      color: 'from-blue-500 to-blue-600'
    },
    {
      year: '१९७५',
      title: 'पहिले कर्ज वितरण',
      description: 'सभासदांना हमीभावावर कर्ज देण्यास सुरुवात केली',
      icon: Award,
      color: 'from-green-500 to-green-600'
    },
    {
      year: '१९८०',
      title: 'सदस्यत्व वाढ',
      description: 'शासकीय कर्मचारी वर्गामध्ये मोठ्या प्रमाणावर सदस्यत्व वाढ',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      year: '२०००',
      title: 'आधुनिकीकरण',
      description: 'संस्थेच्या सेवांचे आधुनिकीकरण आणि विस्तार',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const achievements = [
    { number: 53, suffix: ' वर्षे', label: 'सेवा अनुभव' },
    { number: 2500, suffix: '+', label: 'सदस्य' },
    { number: 50, suffix: ' कोटी+', label: 'कर्ज वितरण' },
    { number: 98, suffix: '%', label: 'यशस्वी परतफेड' }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop"
        title="संस्थेचा इतिहास"
        subtitle="१९७१ पासून शासकीय कर्मचारी वर्गाच्या सेवेत - सहकाराच्या माध्यमातून आर्थिक सशक्तीकरणाची गाथा"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">आमची गाथा</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              धुळे जिल्ह्यातील काही तरुण शासकीय कर्मचाऱ्यांनी एकत्र येऊन एक योजना आखली. त्यांना हे जाणवत होतं की, 
              एकत्रित प्रयत्न आणि सहकारचं बळ वापरूनच या समस्या सोडवता येतील.
            </p>
          </motion.div>

          {/* Foundation Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-8 h-8 text-primary-600" />
                  <h3 className="text-2xl font-bold text-gray-800">स्थापना दिनांक</h3>
                </div>
                <div className="space-y-4">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary-800 mb-2">१२ एप्रिल १९७१</h4>
                    <p className="text-gray-700">
                      संस्थापक अध्यक्ष कै. आप्पासो, दौलतराव राजाराम शिंदे यांनी संस्थेची स्थापना केली आणि 
                      सहकाराच्या माध्यमातून समाजसेवेचं ध्येय पूर्ण केलं.
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>संस्थेचे नाव:</strong> कृषि खाते सेवक सहकारी पतसंस्था मर्यादित, धुळे</p>
                    <p><strong>रजिस्ट्रेशन नं:</strong> डीएलए/बीटके/११९</p>
                    <p><strong>पत्ता:</strong> प्लॉट नं-२८, आदर्श कॉलनी, देवपुर, धुळे</p>
                  </div>
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
                  alt="Historical Building"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-2">संस्थेचे मुख्यालय</h4>
                  <p className="text-sm opacity-90">आदर्श कॉलनी, देवपुर, धुळे</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">महत्वाचे टप्पे</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {milestones.map((milestone, index) => {
                const IconComponent = milestone.icon
                return (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${milestone.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-gray-800 mb-2">{milestone.year}</h4>
                      <h5 className="text-lg font-semibold text-gray-700 mb-3">{milestone.title}</h5>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Detailed History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">संस्थेचा विकास प्रवास</h3>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  पतसंस्थेचं मुख्य उद्दिष्ट होतं, सभासदांना बचतीच्या सवयी लावणं आणि स्वावलंबनाचा सराव करण्यासाठी प्रोत्साहित करणं. 
                  पतसंस्थेच्या स्थापनेपासूनच, शासकीय कर्मचारी वर्गाला त्यांच्या उत्पन्नातील काही भाग बचतीसाठी ठेवण्यास प्रोत्साहित केलं गेलं.
                </p>
                <p className="mb-4">
                  यामुळे कर्मचारी वर्गामध्ये काटकसरीची सवय रुजली आणि त्यांचं आर्थिक भविष्य सुरक्षित झालं. सभासदांकडून भागभांडवल 
                  आणि सभासदत्व शुल्क स्वीकारून संस्थेने भांडवल उभारलं.
                </p>
                <p>
                  आज, &apos;कृषि खाते सेवक सहकारी पतसंस्था मर्यादित, धुळे&apos; ही पतसंस्था धुळे जिल्ह्यातील शासकीय कर्मचारी वर्गासाठी 
                  एक आदर्श बनली आहे. पतसंस्थेच्या प्रयत्नांमुळे कर्मचारी वर्गाचं जीवनमान उंचावले गेले आहे आणि सहकाराच्या 
                  माध्यमातून शाश्वत विकास साधला गेला आहे.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Achievements */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">आमची उपलब्धी</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              अर्धशतकाहून अधिक काळातील निरंतर सेवा आणि प्रगतीची गाथा
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
                >
                  <div className="text-3xl font-bold mb-2">
                    <AnimatedCounter from={0} to={achievement.number} suffix={achievement.suffix} />
                  </div>
                  <div className="text-sm opacity-90">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
