'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Users, Building, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function Contact() {
  return (
    <>
      {/* Advanced Jumbotron */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
        title="संपर्क"
        subtitle="आमच्याशी संपर्क साधा आणि तुमच्या आर्थिक गरजांसाठी योग्य मार्गदर्शन मिळवा"
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
            <h2 className="text-4xl font-bold text-gray-800 mb-4">आमच्याशी जुडा</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              तुमच्या प्रश्नांची उत्तरे मिळवा आणि आमच्या सेवांचा लाभ घ्या
            </p>
            
            {/* Office Image with enhanced styling */}
            <div className="relative h-80 max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                alt="Modern Office Building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center space-x-3 mb-2">
                  <Building className="w-6 h-6" />
                  <h4 className="text-xl font-bold">आमचे कार्यालय</h4>
                </div>
                <p className="text-base opacity-90">प्लॉट नं: 28, आदर्श कॉलनी, देवपुर, धुळे</p>
                <p className="text-sm opacity-75 mt-1">आधुनिक सुविधांसह सुसज्ज कार्यालय</p>
              </div>
            </div>
          </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-8">संपर्क माहिती</h3>
            
            {/* Address */}
            <Card className="bg-gradient-to-r from-primary-50 to-primary-100 border-l-4 border-primary-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-800 mb-2">पत्ता</h4>
                  <p className="text-gray-700">
                    कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे<br />
                    प्लॉट नं : 28, आदर्श कॉलनी, देवपुर, धुळे<br />
                    महाराष्ट्र, भारत
                  </p>
                </div>
              </div>
            </Card>

            {/* Phone */}
            <Card className="bg-gradient-to-r from-secondary-50 to-secondary-100 border-l-4 border-secondary-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-secondary-800 mb-2">फोन</h4>
                  <p className="text-gray-700">
                    <a href="tel:+919421293915" className="hover:text-secondary-600 transition-colors">
                      +91 94212 93915
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            {/* Email */}
            <Card className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">ईमेल</h4>
                  <p className="text-gray-700">
                    <a href="mailto:kksspdhule@gmail.com" className="hover:text-green-600 transition-colors">
                      kksspdhule@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </Card>

            {/* Office Hours */}
            <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-l-4 border-blue-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">कार्यालयीन वेळ</h4>
                  <div className="text-gray-700 space-y-1">
                    <p>सोमवार - शुक्रवार: सकाळी 10:00 - संध्याकाळी 6:00</p>
                    <p>शनिवार: सकाळी 10:00 - दुपारी 2:00</p>
                    <p>रविवार: बंद</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-gray-50 to-white">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">संदेश पाठवा</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      नाव *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="तुमचे नाव"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      फोन नंबर *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="तुमचा फोन नंबर"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ईमेल *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                    placeholder="तुमचा ईमेल"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    विषय *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  >
                    <option value="">विषय निवडा</option>
                    <option value="loan">कर्ज संबंधी चौकशी</option>
                    <option value="membership">सदस्यत्व संबंधी</option>
                    <option value="general">सामान्य चौकशी</option>
                    <option value="complaint">तक्रार</option>
                    <option value="other">इतर</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    संदेश *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder="तुमचा संदेश येथे लिहा..."
                  ></textarea>
                </div>

                <Button type="submit" size="lg" className="w-full">
                  संदेश पाठवा
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-gray-100 to-gray-200 h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">नकाशा</h3>
              <p className="text-gray-500">
                प्लॉट नं : 28, आदर्श कॉलनी, देवपुर, धुळे
              </p>
            </div>
          </Card>
        </motion.div>

        {/* Quick contact buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">त्वरित संपर्क</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => window.open('tel:+919421293915')}
            >
              <Phone className="mr-2 w-5 h-5" />
              आता कॉल करा
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open('mailto:kksspdhule@gmail.com')}
            >
              <Mail className="mr-2 w-5 h-5" />
              ईमेल पाठवा
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Parallax Section with Contact Statistics */}
    <ParallaxSection
      backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
      className="py-20"
    >
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6">आमच्या सेवांचे आकडे</h3>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            आमच्या सदस्यांना दिलेल्या सेवांचे आकडे आणि संपर्क माहिती
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={5000} suffix="+" />
              </div>
              <div className="text-sm opacity-90">संपर्क केलेले सदस्य</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={24} suffix=" तास" />
              </div>
              <div className="text-sm opacity-90">सेवा उपलब्धता</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={99} suffix="%" />
              </div>
              <div className="text-sm opacity-90">समाधानकारक सेवा</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={15} suffix=" वर्षे" />
              </div>
              <div className="text-sm opacity-90">सेवा अनुभव</div>
            </div>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
    </>
  )
}
