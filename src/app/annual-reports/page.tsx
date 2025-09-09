'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { FileText, Download, Calendar, Users, TrendingUp, Eye, ArrowRight, Phone, Mail, MapPin, Banknote, PieChart, BarChart3 } from 'lucide-react'

export default function AnnualReports() {
  const annualReports = [
    {
      year: '२०२३-२४',
      title: 'वार्षिक अहवाल २०२३-२४',
      description: 'संस्थेच्या आर्थिक वर्ष २०२३-२४ चा संपूर्ण अहवाल',
      fileSize: '२.५ MB',
      pages: '४८ पृष्ठे',
      highlights: ['२५% वाढ', 'नवीन सदस्य ५००+', 'कर्ज वितरण ८ कोटी'],
      status: 'उपलब्ध',
      featured: true
    },
    {
      year: '२०२२-२३',
      title: 'वार्षिक अहवाल २०२२-२३',
      description: 'संस्थेच्या आर्थिक वर्ष २०२२-२३ चा संपूर्ण अहवाल',
      fileSize: '२.२ MB',
      pages: '४५ पृष्ठे',
      highlights: ['२०% वाढ', 'नवीन सदस्य ४००+', 'कर्ज वितरण ६.५ कोटी'],
      status: 'उपलब्ध'
    },
    {
      year: '२०२१-२२',
      title: 'वार्षिक अहवाल २०२१-२२',
      description: 'संस्थेच्या आर्थिक वर्ष २०२१-२२ चा संपूर्ण अहवाल',
      fileSize: '२.० MB',
      pages: '४२ पृष्ठे',
      highlights: ['१८% वाढ', 'नवीन सदस्य ३५०+', 'कर्ज वितरण ५.२ कोटी'],
      status: 'उपलब्ध'
    },
    {
      year: '२०२०-२१',
      title: 'वार्षिक अहवाल २०२०-२१',
      description: 'संस्थेच्या आर्थिक वर्ष २०२०-२१ चा संपूर्ण अहवाल',
      fileSize: '१.८ MB',
      pages: '४० पृष्ठे',
      highlights: ['१५% वाढ', 'नवीन सदस्य ३००+', 'कर्ज वितरण ४.५ कोटी'],
      status: 'उपलब्ध'
    },
    {
      year: '२०१९-२०',
      title: 'वार्षिक अहवाल २०१९-२०',
      description: 'संस्थेच्या आर्थिक वर्ष २०१९-२० चा संपूर्ण अहवाल',
      fileSize: '१.७ MB',
      pages: '३८ पृष्ठे',
      highlights: ['१२% वाढ', 'नवीन सदस्य २५०+', 'कर्ज वितरण ३.८ कोटी'],
      status: 'उपलब्ध'
    }
  ]

  const reportSections = [
    {
      title: 'आर्थिक विवरण',
      description: 'संस्थेची आर्थिक स्थिती आणि नफा-तोटा',
      icon: Banknote,
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'सदस्यत्व आकडेवारी',
      description: 'सदस्यांची संख्या आणि वाढीचे दर',
      icon: Users,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'कर्ज वितरण',
      description: 'विविध कर्ज योजनांचे तपशील',
      icon: TrendingUp,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'गुंतवणूक पोर्टफोलिओ',
      description: 'संस्थेच्या गुंतवणुकीचे विश्लेषण',
      icon: PieChart,
      color: 'from-orange-500 to-red-600'
    }
  ]

  const keyMetrics = [
    { title: 'एकूण सदस्य', value: '२५००+', growth: '+१५%', icon: Users },
    { title: 'एकूण भांडवल', value: '१२ कोटी', growth: '+२२%', icon: Banknote },
    { title: 'कर्ज वितरण', value: '८ कोटी', growth: '+२५%', icon: TrendingUp },
    { title: 'नफा मार्जिन', value: '१८%', growth: '+३%', icon: BarChart3 }
  ]

  const quickLinks = [
    { title: 'वार्षिक सर्वसाधरण सभा', href: '/annual-reports/agm', icon: Users },
    { title: 'शेअर्स व वर्गणी', href: '/annual-reports/shares-dividends', icon: PieChart },
    { title: 'आर्थिक विवरण', href: '/annual-reports/financial-statements', icon: BarChart3 },
    { title: 'ऑडिट अहवाल', href: '/annual-reports/audit-reports', icon: FileText }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
        title="वार्षिक अहवाल"
        subtitle="आमच्या संस्थेच्या पारदर्शक आर्थिक कामकाजाचे संपूर्ण अहवाल - प्रगती, यश आणि भविष्याच्या योजनांचे विस्तृत विवरण"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">पारदर्शक आर्थिक अहवाल</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              आमच्या संस्थेच्या प्रत्येक वर्षाच्या कामकाजाचे संपूर्ण आणि पारदर्शक अहवाल. 
              आर्थिक प्रगती, सदस्यांच्या कल्याणाच्या उपक्रम आणि भविष्याच्या योजनांची संपूर्ण माहिती.
            </p>
          </motion.div>

          {/* Key Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">मुख्य आकडेवारी (२०२३-२४)</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyMetrics.map((metric, index) => {
                const IconComponent = metric.icon
                return (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{metric.title}</h4>
                      <div className="text-3xl font-bold text-primary-600 mb-2">{metric.value}</div>
                      <div className="flex items-center justify-center space-x-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-green-600 font-medium text-sm">{metric.growth}</span>
                      </div>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Featured Annual Report */}
          {annualReports.filter(report => report.featured).map((report, index) => (
            <motion.div
              key={report.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <Card className="bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">नवीनतम</span>
                      <span className="text-primary-600 font-semibold">{report.year}</span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">{report.title}</h3>
                    <p className="text-gray-600 mb-6">{report.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <FileText className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600">{report.pages}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Download className="w-5 h-5 text-gray-500" />
                        <span className="text-gray-600">{report.fileSize}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3">मुख्य ठळक मुद्दे:</h4>
                      <div className="flex flex-wrap gap-2">
                        {report.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlight}
                            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="flex items-center space-x-2">
                        <Download className="w-5 h-5" />
                        <span>डाउनलोड करा</span>
                      </Button>
                      <Button variant="outline" size="lg" className="flex items-center space-x-2">
                        <Eye className="w-5 h-5" />
                        <span>ऑनलाइन पहा</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="h-96 rounded-xl overflow-hidden shadow-xl">
                      <Image
                        src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2070&auto=format&fit=crop"
                        alt="Annual Report Cover"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h4 className="text-xl font-bold mb-2">संपूर्ण अहवाल</h4>
                        <p className="text-sm opacity-90">पारदर्शक आर्थिक माहिती</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}

          {/* Report Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">अहवालातील मुख्य विभाग</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {reportSections.map((section, index) => {
                const IconComponent = section.icon
                return (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${section.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{section.title}</h4>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* All Annual Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">सर्व वार्षिक अहवाल</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {annualReports.filter(report => !report.featured).map((report, index) => (
                <motion.div
                  key={report.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-primary-600">{report.year}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {report.status}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{report.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <FileText className="w-4 h-4" />
                        <span>{report.pages}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{report.fileSize}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {report.highlights.map((highlight, highlightIndex) => (
                          <span
                            key={highlight}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1 flex items-center justify-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>डाउनलोड</span>
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center justify-center">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">संबंधित माहिती</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <motion.div
                    key={link.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link href={link.href}>
                      <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300 cursor-pointer group">
                        <IconComponent className="w-12 h-12 mx-auto mb-4 text-primary-600 group-hover:text-primary-700" />
                        <h4 className="font-semibold text-gray-800 group-hover:text-primary-700">
                          {link.title}
                        </h4>
                        <ArrowRight className="w-5 h-5 mx-auto mt-2 text-gray-400 group-hover:text-primary-600 transition-colors" />
                      </Card>
                    </Link>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Contact for Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">अधिक माहितीसाठी संपर्क करा</h3>
              <p className="text-gray-600 mb-6">
                वार्षिक अहवालांबद्दल अधिक माहिती किंवा विशिष्ट प्रश्नांसाठी आमच्याशी संपर्क साधा
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>माहिती मागवा</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>भेट नियोजित करा</span>
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Transparency Message */}
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
            <h3 className="text-4xl font-bold mb-6">पारदर्शकतेची आमची वचनबद्धता</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              आमच्या सदस्यांच्या विश्वासाला उत्तर देण्यासाठी आम्ही संपूर्ण पारदर्शकतेने काम करतो
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={53} suffix="+" />
                </div>
                <div className="text-sm opacity-90">वर्षांचा अनुभव</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={100} suffix="%" />
                </div>
                <div className="text-sm opacity-90">पारदर्शकता</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={25} suffix="+" />
                </div>
                <div className="text-sm opacity-90">वार्षिक अहवाल</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={2500} suffix="+" />
                </div>
                <div className="text-sm opacity-90">विश्वासू सदस्य</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
