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
import { PieChart, TrendingUp, Percent, Calendar, Users, Award, Download, ArrowRight, DollarSign, CheckCircle, Calculator } from 'lucide-react'

export default function SharesDividends() {
  const dividendHistory = [
    { year: '२०२३-२४', rate: '१२%', amount: '₹१,२०,००,०००', status: 'वितरित', members: 2500 },
    { year: '२०२२-२३', rate: '१०%', amount: '₹९०,००,०००', status: 'वितरित', members: 2300 },
    { year: '२०२१-२२', rate: '८%', amount: '₹७२,००,०००', status: 'वितरित', members: 2100 },
    { year: '२०२०-२१', rate: '६%', amount: '₹५४,००,०००', status: 'वितरित', members: 1900 },
    { year: '२०१९-२०', rate: '७%', amount: '₹५६,००,०००', status: 'वितरित', members: 1800 }
  ]

  const shareTypes = [
    {
      title: 'सामान्य शेअर',
      description: 'प्रत्येक सदस्याला किमान १० शेअर्स',
      value: '₹१००',
      features: ['मतदानाचा अधिकार', 'वर्गणीचा हक्क', 'सदस्यत्व अधिकार'],
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'अतिरिक्त शेअर',
      description: 'अधिकतम १०० शेअर्स प्रति सदस्य',
      value: '₹१००',
      features: ['अधिक वर्गणी', 'प्राधान्य अधिकार', 'विशेष सुविधा'],
      color: 'from-green-500 to-emerald-600'
    }
  ]

  const dividendBenefits = [
    'नियमित वार्षिक उत्पन्न',
    'मुद्रास्फीतीपेक्षा जास्त परतावा',
    'कर सवलतीचे फायदे',
    'पुनर्गुंतवणुकीचे पर्याय',
    'आर्थिक स्थिरता',
    'दीर्घकालीन संपत्ती निर्माण'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2070&auto=format&fit=crop"
        title="शेअर्स व वर्गणी"
        subtitle="आमच्या सदस्यांना नियमित वर्गणी वितरण - तुमच्या गुंतवणुकीचा उत्तम परतावा आणि आर्थिक वाढ"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-6">सदस्यांच्या कल्याणार्थ वर्गणी</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              आमची संस्था सदस्यांच्या आर्थिक कल्याणासाठी नियमित वर्गणी वितरित करते. 
              तुमच्या शेअर्सवरील परतावा हा आमच्या यशाचा प्रतिबिंब आहे.
            </p>
          </motion.div>

          {/* Current Year Dividend Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-green-600 mr-2" />
                  <span className="bg-green-600 text-white px-4 py-2 rounded-full font-medium">२०२३-२४</span>
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-4">१२% वार्षिक वर्गणी</h3>
                <p className="text-xl text-gray-600 mb-6">रेकॉर्ड ब्रेकिंग वर्गणी दर</p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">₹१,२०,००,०००</div>
                    <div className="text-gray-600">एकूण वर्गणी वितरण</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">२,५००+</div>
                    <div className="text-gray-600">लाभार्थी सदस्य</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">₹४,८००</div>
                    <div className="text-gray-600">सरासरी वर्गणी प्रति सदस्य</div>
                  </div>
                </div>

                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  <Download className="w-5 h-5 mr-2" />
                  वर्गणी प्रमाणपत्र डाउनलोड करा
                </Button>
              </div>
            </Card>
          </motion.div>

          {/* Share Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">शेअर्सचे प्रकार</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {shareTypes.map((share, index) => (
                <motion.div
                  key={share.title}
                  initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <div className={`bg-gradient-to-r ${share.color} p-4 -mx-6 -mt-6 mb-6 rounded-t-lg`}>
                      <h4 className="text-2xl font-bold text-white">{share.title}</h4>
                      <p className="text-white/90">{share.description}</p>
                    </div>
                    
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-800 mb-2">{share.value}</div>
                      <div className="text-gray-600">प्रति शेअर</div>
                    </div>

                    <div className="space-y-3">
                      {share.features.map((feature, featureIndex) => (
                        <div key={feature} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Dividend History */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">वर्गणीचा इतिहास</h3>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">वर्ष</th>
                    <th className="px-6 py-4 text-center">वर्गणी दर</th>
                    <th className="px-6 py-4 text-center">एकूण रक्कम</th>
                    <th className="px-6 py-4 text-center">सदस्य संख्या</th>
                    <th className="px-6 py-4 text-center">स्थिती</th>
                  </tr>
                </thead>
                <tbody>
                  {dividendHistory.map((dividend, index) => (
                    <motion.tr
                      key={dividend.year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800">{dividend.year}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                          {dividend.rate}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center font-semibold text-gray-800">{dividend.amount}</td>
                      <td className="px-6 py-4 text-center text-gray-600">{dividend.members}</td>
                      <td className="px-6 py-4 text-center">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {dividend.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">वर्गणीचे फायदे</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {dividendBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary-50 to-secondary-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">अधिक शेअर्स खरेदी करा</h3>
              <p className="text-gray-600 mb-6">
                अधिक शेअर्स खरेदी करून तुमची वर्गणी वाढवा आणि आर्थिक भविष्य सुरक्षित करा
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  <PieChart className="w-5 h-5 mr-2" />
                  शेअर्स खरेदी करा
                </Button>
                <Button variant="outline" size="lg">
                  <Calculator className="w-5 h-5 mr-2" />
                  वर्गणी कॅल्क्युलेटर
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

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
            <h3 className="text-4xl font-bold mb-6">आर्थिक वाढीची गाथा</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              सदस्यांच्या विश्वासामुळे आम्ही सातत्याने वर्गणी वाढवत आहोत
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={12} suffix="%" />
                </div>
                <div className="text-sm opacity-90">सर्वोच्च वर्गणी दर</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={5} suffix=" कोटी+" />
                </div>
                <div className="text-sm opacity-90">एकूण वर्गणी वितरण</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={25} suffix=" लाख" />
                </div>
                <div className="text-sm opacity-90">एकूण शेअर्स</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={100} suffix="%" />
                </div>
                <div className="text-sm opacity-90">सदस्य समाधान</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
