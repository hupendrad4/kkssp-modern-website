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
import { Calendar, Users, FileText, CheckCircle, Clock, MapPin, Phone, Mail, ArrowRight, Vote, Mic, Award, Download } from 'lucide-react'

export default function AnnualGeneralMeeting() {
  const upcomingAGM = {
    year: '२०२४-२५',
    date: '१५ मार्च २०२५',
    time: 'सकाळी १० वाजता',
    venue: 'सहकारी संस्था सभागृह, धुळे',
    agenda: [
      'मागील वर्षाचा वार्षिक अहवाल मंजुरी',
      'आर्थिक विवरणाची मंजुरी',
      'ऑडिट अहवालाची चर्चा',
      'नवीन संचालक मंडळाची निवड',
      'वर्गणी घोषणा',
      'भविष्याच्या योजनांची चर्चा'
    ],
    registrationDeadline: '१० मार्च २०२५'
  }

  const pastAGMs = [
    {
      year: '२०२३-२४',
      date: '१२ मार्च २०२४',
      attendance: '८५%',
      decisions: ['१२% वर्गणी मंजूर', 'नवीन कर्ज योजना', 'डिजिटल बँकिंग सुरुवात'],
      highlights: 'रेकॉर्ड उपस्थिती आणि एकमताने निर्णय'
    },
    {
      year: '२०२२-२३',
      date: '१४ मार्च २०२३',
      attendance: '८२%',
      decisions: ['१०% वर्गणी मंजूर', 'नवीन शाखा मंजुरी', 'तंत्रज्ञान सुधारणा'],
      highlights: 'सदस्यांच्या सक्रिय सहभागाने यशस्वी सभा'
    },
    {
      year: '२०२१-२२',
      date: '१६ मार्च २०२२',
      attendance: '७८%',
      decisions: ['८% वर्गणी मंजूर', 'कोविड मदत योजना', 'ऑनलाइन सेवा विस्तार'],
      highlights: 'कोविड काळातील चुनौत्यांवर चर्चा'
    }
  ]

  const agmProcess = [
    {
      step: '१',
      title: 'नोटीस प्रकाशन',
      description: 'सभेच्या २१ दिवस आधी सर्व सदस्यांना नोटीस',
      icon: FileText,
      timeline: '२१ दिवस आधी'
    },
    {
      step: '२',
      title: 'नोंदणी प्रक्रिया',
      description: 'सदस्यांची उपस्थितीसाठी अग्रिम नोंदणी',
      icon: Users,
      timeline: '१० दिवस आधी'
    },
    {
      step: '३',
      title: 'सभा आयोजन',
      description: 'निर्धारित वेळी सभेचे आयोजन',
      icon: Mic,
      timeline: 'सभेचा दिवस'
    },
    {
      step: '४',
      title: 'निर्णय कार्यान्वयन',
      description: 'सभेत घेतलेल्या निर्णयांची अंमलबजावणी',
      icon: CheckCircle,
      timeline: 'सभेनंतर'
    }
  ]

  const memberRights = [
    {
      title: 'मतदानाचा अधिकार',
      description: 'सर्व महत्त्वाच्या निर्णयांवर मतदान करण्याचा अधिकार',
      icon: Vote
    },
    {
      title: 'प्रश्न विचारण्याचा अधिकार',
      description: 'संस्थेच्या कामकाजाबद्दल प्रश्न विचारण्याचा अधिकार',
      icon: Mic
    },
    {
      title: 'माहिती मिळवण्याचा अधिकार',
      description: 'आर्थिक आणि प्रशासकीय माहिती मिळवण्याचा अधिकार',
      icon: FileText
    },
    {
      title: 'सूचना देण्याचा अधिकार',
      description: 'संस्थेच्या सुधारणेसाठी सूचना देण्याचा अधिकार',
      icon: Award
    }
  ]

  const agmBenefits = [
    'पारदर्शक निर्णय प्रक्रिया',
    'सदस्यांचा प्रत्यक्ष सहभाग',
    'आर्थिक स्थितीची संपूर्ण माहिती',
    'भविष्याच्या योजनांची चर्चा',
    'संचालक मंडळाची जबाबदारी',
    'वर्गणी वितरणाची घोषणा',
    'नवीन योजनांची मंजुरी',
    'सदस्यांच्या समस्यांचे निराकरण'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
        title="वार्षिक सर्वसाधरण सभा"
        subtitle="लोकशाही पद्धतीने संस्थेच्या महत्त्वाच्या निर्णयांमध्ये सहभागी व्हा - तुमचा मत, तुमचा अधिकार, तुमची जबाबदारी"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-6">लोकशाही सहभागाचे महत्त्व</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              वार्षिक सर्वसाधरण सभा ही आमच्या संस्थेच्या लोकशाही कार्यपद्धतीचा आधारस्तंभ आहे. 
              प्रत्येक सदस्याला संस्थेच्या निर्णयांमध्ये सहभागी होण्याचा समान अधिकार आहे.
            </p>
          </motion.div>

          {/* Upcoming AGM */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">आगामी</span>
                    <span className="text-blue-600 font-semibold">{upcomingAGM.year}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">आगामी वार्षिक सर्वसाधरण सभा</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-blue-600" />
                      <div>
                        <span className="font-semibold text-gray-800">दिनांक: </span>
                        <span className="text-gray-600">{upcomingAGM.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <div>
                        <span className="font-semibold text-gray-800">वेळ: </span>
                        <span className="text-gray-600">{upcomingAGM.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <span className="font-semibold text-gray-800">ठिकाण: </span>
                        <span className="text-gray-600">{upcomingAGM.venue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">सभेचा अजेंडा:</h4>
                    <div className="space-y-2">
                      {upcomingAGM.agenda.map((item, index) => (
                        <div key={item} className="flex items-start space-x-2">
                          <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                    <p className="text-amber-800">
                      <strong>नोंदणीची अंतिम तारीख:</strong> {upcomingAGM.registrationDeadline}
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex items-center space-x-2">
                      <Users className="w-5 h-5" />
                      <span>नोंदणी करा</span>
                    </Button>
                    <Button variant="outline" size="lg" className="flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>अजेंडा डाउनलोड करा</span>
                    </Button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="h-96 rounded-xl overflow-hidden shadow-xl">
                    <Image
                      src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop"
                      alt="Annual General Meeting"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-xl font-bold mb-2">सदस्यांचा सहभाग</h4>
                      <p className="text-sm opacity-90">लोकशाही निर्णय प्रक्रिया</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* AGM Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">सभेची प्रक्रिया</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {agmProcess.map((process, index) => {
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
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        {process.step}
                      </div>
                      {index < agmProcess.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300 transform -translate-y-1/2"></div>
                      )}
                    </div>
                    <div className="mb-3">
                      <IconComponent className="w-8 h-8 mx-auto text-gray-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{process.title}</h4>
                    <p className="text-gray-600 text-sm mb-2">{process.description}</p>
                    <div className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {process.timeline}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Member Rights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">सदस्यांचे अधिकार</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {memberRights.map((right, index) => {
                const IconComponent = right.icon
                return (
                  <motion.div
                    key={right.title}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Card className="h-full text-center p-6 hover:shadow-xl transition-all duration-300">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{right.title}</h4>
                      <p className="text-gray-600 text-sm">{right.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Past AGMs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">मागील सभांचा आढावा</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastAGMs.map((agm, index) => (
                <motion.div
                  key={agm.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold text-blue-600">{agm.year}</span>
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                        {agm.attendance} उपस्थिती
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <span className="text-gray-600">{agm.date}</span>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">मुख्य निर्णय:</h4>
                      <div className="space-y-1">
                        {agm.decisions.map((decision, decisionIndex) => (
                          <div key={decision} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{decision}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-700 text-sm italic">&quot;{agm.highlights}&quot;</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AGM Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">सभेचे फायदे</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {agmBenefits.map((benefit, index) => (
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

          {/* Registration CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">आपला सहभाग महत्त्वाचा!</h3>
              <p className="text-gray-600 mb-6">
                संस्थेच्या भविष्याच्या निर्णयांमध्ये सहभागी व्हा. तुमचा मत महत्त्वाचा आहे.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>सभेसाठी नोंदणी करा</span>
                </Button>
                <Button variant="outline" size="lg" className="flex items-center space-x-2">
                  <FileText className="w-5 h-5" />
                  <span>अधिक माहिती</span>
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-200">
                <p className="text-blue-800 font-semibold text-center">
                  माहिती हेल्पलाइन: <a href="tel:+919876543210" className="underline">+91 98765 43210</a>
                </p>
                <p className="text-blue-600 text-sm text-center mt-1">सकाळी ९ ते संध्याकाळी ६ वाजेपर्यंत</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Democracy Message */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">लोकशाही सहकारिता</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              &quot;एक सदस्य, एक मत&quot; - सहकारी तत्त्वावर आधारित आमची लोकशाही व्यवस्था
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={53} suffix="+" />
                </div>
                <div className="text-sm opacity-90">वर्षांचा लोकशाही अनुभव</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={2500} suffix="+" />
                </div>
                <div className="text-sm opacity-90">मतदार सदस्य</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={85} suffix="%" />
                </div>
                <div className="text-sm opacity-90">सरासरी उपस्थिती</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={100} suffix="%" />
                </div>
                <div className="text-sm opacity-90">पारदर्शकता</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
