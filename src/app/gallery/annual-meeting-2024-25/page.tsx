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
import { Calendar, Users, Camera, Download, Eye, MapPin, Clock, Award, Star, Heart, Share2 } from 'lucide-react'

export default function AnnualMeeting2024_25() {
  const eventDetails = {
    date: '१५ मार्च २०२५',
    time: 'सकाळी १० वाजता',
    venue: 'सहकारी संस्था सभागृह, धुळे',
    attendance: '२,२००+ सदस्य',
    highlights: [
      'रेकॉर्ड उपस्थिती',
      '१२% वर्गणी घोषणा',
      'नवीन योजनांची मंजुरी',
      'सदस्यांचा उत्साहवर्धक सहभाग'
    ]
  }

  const photoGallery = [
    {
      id: 1,
      title: 'सभेची सुरुवात',
      description: 'अध्यक्षांच्या उद्घाटन भाषणाने सभेची सुरुवात',
      image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop',
      category: 'उद्घाटन'
    },
    {
      id: 2,
      title: 'वार्षिक अहवाल सादरीकरण',
      description: 'व्यवस्थापकीय संचालकांकडून वार्षिक अहवाल सादर',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2070&auto=format&fit=crop',
      category: 'अहवाल'
    },
    {
      id: 3,
      title: 'सदस्यांचा सहभाग',
      description: 'सदस्यांकडून प्रश्न आणि सूचना',
      image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop',
      category: 'चर्चा'
    },
    {
      id: 4,
      title: 'वर्गणी घोषणा',
      description: '१२% वर्गणीची घोषणा आणि सदस्यांचा आनंद',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2070&auto=format&fit=crop',
      category: 'घोषणा'
    },
    {
      id: 5,
      title: 'संचालक मंडळ निवड',
      description: 'नवीन संचालक मंडळाची निवड प्रक्रिया',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2070&auto=format&fit=crop',
      category: 'निवड'
    },
    {
      id: 6,
      title: 'सन्मान समारंभ',
      description: 'वरिष्ठ सदस्यांचा सन्मान समारंभ',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop',
      category: 'सन्मान'
    },
    {
      id: 7,
      title: 'सामूहिक फोटो',
      description: 'सर्व उपस्थित सदस्यांचा सामूहिक फोटो',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop',
      category: 'सामूहिक'
    },
    {
      id: 8,
      title: 'समापन समारंभ',
      description: 'राष्ट्रगीतासह सभेचा समापन',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop',
      category: 'समापन'
    }
  ]

  const categories = ['सर्व', 'उद्घाटन', 'अहवाल', 'चर्चा', 'घोषणा', 'निवड', 'सन्मान', 'सामूहिक', 'समापन']
  
  const eventStats = [
    { title: 'उपस्थित सदस्य', value: '२,२००+', icon: Users },
    { title: 'फोटो', value: '१५०+', icon: Camera },
    { title: 'सभेचा कालावधी', value: '४ तास', icon: Clock },
    { title: 'मंजूर प्रस्ताव', value: '८', icon: Award }
  ]

  const keyMoments = [
    {
      time: '१०:०० AM',
      title: 'सभेची सुरुवात',
      description: 'अध्यक्षांच्या स्वागत भाषणाने सभेची सुरुवात'
    },
    {
      time: '१०:३० AM',
      title: 'वार्षिक अहवाल',
      description: 'व्यवस्थापकीय संचालकांकडून संपूर्ण वार्षिक अहवाल'
    },
    {
      time: '११:३० AM',
      title: 'आर्थिक विवरण',
      description: 'कोषाध्यक्षांकडून आर्थिक विवरणाचे सादरीकरण'
    },
    {
      time: '१२:०० PM',
      title: 'वर्गणी घोषणा',
      description: '१२% वर्गणीची घोषणा आणि सदस्यांचे कौतुक'
    },
    {
      time: '१२:३० PM',
      title: 'संचालक निवड',
      description: 'नवीन संचालक मंडळाची निवड प्रक्रिया'
    },
    {
      time: '०१:३० PM',
      title: 'सन्मान समारंभ',
      description: 'वरिष्ठ सदस्यांचा सन्मान आणि कृतज्ञता'
    },
    {
      time: '०२:०० PM',
      title: 'समापन',
      description: 'राष्ट्रगीतासह सभेचा यशस्वी समापन'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop"
        title="वार्षिक सभा २०२४-२५"
        subtitle="लोकशाही सहभागाचा उत्कृष्ट नमुना - रेकॉर्ड उपस्थिती आणि ऐतिहासिक निर्णयांची गाथा"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Event Overview */}
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
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">सभेचे तपशील</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-blue-600" />
                      <div>
                        <span className="font-semibold text-gray-800">दिनांक: </span>
                        <span className="text-gray-600">{eventDetails.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-6 h-6 text-blue-600" />
                      <div>
                        <span className="font-semibold text-gray-800">वेळ: </span>
                        <span className="text-gray-600">{eventDetails.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-blue-600" />
                      <div>
                        <span className="font-semibold text-gray-800">ठिकाण: </span>
                        <span className="text-gray-600">{eventDetails.venue}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <div>
                        <span className="font-semibold text-gray-800">उपस्थिती: </span>
                        <span className="text-gray-600">{eventDetails.attendance}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">मुख्य ठळक मुद्दे:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {eventDetails.highlights.map((highlight, index) => (
                        <div key={highlight} className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="flex items-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>फोटो डाउनलोड करा</span>
                    </Button>
                    <Button variant="outline" size="lg" className="flex items-center space-x-2">
                      <Share2 className="w-5 h-5" />
                      <span>शेअर करा</span>
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {eventStats.map((stat, index) => {
                    const IconComponent = stat.icon
                    return (
                      <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="text-center p-6 bg-white">
                          <IconComponent className="w-8 h-8 mx-auto mb-3 text-blue-600" />
                          <div className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</div>
                          <div className="text-gray-600 text-sm">{stat.title}</div>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">सभेची वेळापत्रिका</h3>
            <div className="max-w-4xl mx-auto">
              {keyMoments.map((moment, index) => (
                <motion.div
                  key={moment.time}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="inline-block p-4 max-w-sm">
                      <div className="text-blue-600 font-semibold text-sm mb-1">{moment.time}</div>
                      <h4 className="font-bold text-gray-800 mb-2">{moment.title}</h4>
                      <p className="text-gray-600 text-sm">{moment.description}</p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10"></div>
                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Photo Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">फोटो गॅलरी</h3>
            
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>

            {/* Photo Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {photoGallery.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group cursor-pointer"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={photo.image}
                        alt={photo.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-2 left-2">
                        <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-xs">
                          {photo.category}
                        </span>
                      </div>
                      <div className="absolute bottom-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                          <Eye className="w-4 h-4 text-white" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                          <Heart className="w-4 h-4 text-white" />
                        </button>
                        <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors">
                          <Download className="w-4 h-4 text-white" />
                        </button>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-800 mb-1">{photo.title}</h4>
                      <p className="text-gray-600 text-sm">{photo.description}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">सर्व फोटो डाउनलोड करा</h3>
              <p className="text-gray-600 mb-6">
                वार्षिक सभेचे सर्व फोटो उच्च गुणवत्तेत डाउनलोड करा आणि आठवणी जतन करा
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 flex items-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>सर्व फोटो डाउनलोड करा</span>
                </Button>
                <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50 flex items-center space-x-2">
                  <Share2 className="w-5 h-5" />
                  <span>सोशल मीडियावर शेअर करा</span>
                </Button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-green-700 text-sm">
                  फोटो साइज: ५०० MB | फॉर्मेट: JPG, PNG | गुणवत्ता: HD
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Memories */}
      <ParallaxSection
        backgroundImage="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
        className="py-20"
      >
        <div className="container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold mb-6">आठवणींचा खजिना</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              प्रत्येक वार्षिक सभा आमच्या संस्थेच्या इतिहासातील एक महत्त्वाचा टप्पा आहे
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={53} suffix="+" />
                </div>
                <div className="text-sm opacity-90">वार्षिक सभा</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={2200} suffix="+" />
                </div>
                <div className="text-sm opacity-90">उपस्थित सदस्य</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={150} suffix="+" />
                </div>
                <div className="text-sm opacity-90">फोटो</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">
                  <AnimatedCounter from={0} to={100} suffix="%" />
                </div>
                <div className="text-sm opacity-90">लोकशाही सहभाग</div>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
      <Footer />
    </main>
  )
}
