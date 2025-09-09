'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import Card from '@/components/ui/Card'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import { User, Award, Calendar, MapPin, Phone } from 'lucide-react'

const boardMembers = [
  {
    name: 'श्री.सिध्दार्थ ईश्वर वाघ',
    position: 'अध्यक्ष',
    phone: '9404970079',
    photo: '/images/board/siddharth-wagh.jpg',
    color: 'from-primary-500 to-primary-600'
  },
  {
    name: 'श्री.मुकेश भाईदास सोनवणे',
    position: 'उपाध्यक्ष',
    phone: '94230 82749',
    photo: '/images/board/mukesh-sonawane.jpg',
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    name: 'श्री.जगदीश अरुण पाटील',
    position: 'सचिव',
    phone: '9421293915',
    photo: '/images/board/jagdish-patil.jpg',
    color: 'from-green-500 to-green-600'
  },
  {
    name: 'श्री कैलास सिताराम गोपाळ',
    position: 'संचालक',
    phone: '94231 01467',
    photo: '/images/board/kailas-gopal.jpg',
    color: 'from-blue-500 to-blue-600'
  },
  {
    name: 'श्रीमती.दिपाली भटू पाटील',
    position: 'संचालिका',
    phone: '94049 70646',
    photo: '/images/board/dipali-patil.jpg',
    color: 'from-purple-500 to-purple-600'
  },
  {
    name: 'श्री.प्रशांत बापुराव पाटील',
    position: 'संचालक',
    phone: '7588889160',
    photo: '/images/board/prashant-patil.jpg',
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    name: 'श्रीमती.अश्विनी मधुकर चौधरी',
    position: 'संचालिका',
    phone: '75883 18522',
    photo: '/images/board/ashwini-chaudhari.jpg',
    color: 'from-pink-500 to-pink-600'
  },
  {
    name: 'श्री.मनोहर चुडामण पाटील',
    position: 'संचालक',
    phone: '9404693518',
    photo: '/images/board/manohar-patil.jpg',
    color: 'from-teal-500 to-teal-600'
  },
  {
    name: 'श्री.कपिल सदाशिव चौधरी',
    position: 'संचालक',
    phone: '75883 19898',
    photo: '/images/board/kapil-chaudhari.jpg',
    color: 'from-orange-500 to-orange-600'
  },
  {
    name: 'श्री.अमोल हिरालाल बोरसे',
    position: 'संचालक',
    phone: '9422085475',
    photo: '/images/board/amol-borse.jpg',
    color: 'from-red-500 to-red-600'
  },
  {
    name: 'श्री.अमित शरदराव भामरे',
    position: 'स्वीकृत-संचालक',
    phone: '9403740785',
    photo: '/images/board/amit-bhamre.jpg',
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    name: 'श्री.राहुल दिलीप खेडकर',
    position: 'स्वीकृत-संचालक',
    phone: '8888207181',
    photo: '/images/board/rahul-khedkar.jpg',
    color: 'from-lime-500 to-lime-600'
  }
]

export default function BoardMembers() {
  return (
    <>
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
        title="संचालक मंडळ"
        subtitle="अनुभवी आणि समर्पित नेतृत्व - सहकारी तत्त्वांवर आधारित प्रगतीशील व्यवस्थापन"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">संचालक मंडळ</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              आमच्या अनुभवी आणि समर्पित संचालक मंडळाची ओळख करून घ्या
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {boardMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:scale-105 transition-transform duration-300 relative">
                  {/* Avatar with Photo */}
                  <div className="relative mb-4">
                    <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to gradient background if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                      ) : null}
                      <div className={`w-full h-full flex items-center justify-center ${member.color} ${member.photo ? 'hidden' : ''}`}>
                        <User className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    {/* Position badge */}
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r ${member.color} text-white text-xs font-medium rounded-full whitespace-nowrap`}>
                      {member.position}
                    </div>
                  </div>

                  {/* Member info */}
                  <div className="pt-4">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
                      {member.name}
                    </h3>
                    
                    <div className="flex items-center justify-center space-x-2 text-gray-600">
                      <Phone size={14} />
                      <span className="text-sm">{member.phone}</span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                    <button className="bg-white/90 text-gray-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-colors">
                      संपर्क करा
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Leadership message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <Card className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-center max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">नेतृत्वाचा संदेश</h3>
              <p className="text-lg text-primary-100 leading-relaxed">
                &quot;आपल्या विश्वास आणि सहकार्यामुळेच आज आपण ही उन्नती साध्य करू शकलो आहोत. 
                आपला सहभाग आणि विश्वास हेच आमच्या यशाचे गमक आहे. आपल्यासोबत या सहकाराच्या 
                प्रवासात पुढे जाण्याचा आणि शाश्वत विकास साधण्याचा आम्हाला विश्वास आहे.&quot;
              </p>
              <div className="mt-6 pt-4 border-t border-primary-400">
                <p className="font-semibold">सिद्धार्थ वाघ</p>
                <p className="text-primary-200 text-sm">सभापती, कृषि खाते सेवक सहकारी पतसंस्था मर्या., धुळे</p>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Parallax Section with Meeting Schedule */}
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
            <h3 className="text-4xl font-bold mb-6">संचालक मंडळाची बैठक</h3>
            <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
              पारदर्शक आणि प्रभावी निर्णय प्रक्रियेसाठी नियमित बैठका
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h4 className="text-xl font-semibold mb-2">नियमित बैठक</h4>
                <p className="text-white/80">दर महिन्याच्या पहिल्या शनिवारी</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <MapPin className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h4 className="text-xl font-semibold mb-2">स्थान</h4>
                <p className="text-white/80">मुख्य कार्यालय, धुळे</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Award className="w-12 h-12 mx-auto mb-4 opacity-90" />
                <h4 className="text-xl font-semibold mb-2">निर्णय प्रक्रिया</h4>
                <p className="text-white/80">सर्वसहमतीने</p>
              </div>
            </div>
          </motion.div>
        </div>
      </ParallaxSection>
    </>
  )
}
