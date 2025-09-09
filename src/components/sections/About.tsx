'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Target, Wheat, Users, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Card from '@/components/ui/Card'
import Jumbotron from '@/components/ui/Jumbotron'
import ParallaxSection from '@/components/ui/ParallaxSection'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function About() {
  return (
    <>
      {/* Jumbotron Section */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2032&auto=format&fit=crop"
        title="आमच्या विषयी"
        subtitle="1971 पासून शेतकरी आणि ग्रामीण समुदायाची सेवा करत आहोत"
        height="lg"
        overlay="gradient"
      />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* Achievement Stats with Agriculture Theme */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
                <Wheat className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <div className="text-3xl font-bold text-green-700 mb-2">
                  <AnimatedCounter from={0} to={2500} suffix="+" />
                </div>
                <p className="text-green-600 font-medium">शेतकरी सदस्य</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <Users className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold text-blue-700 mb-2">
                  <AnimatedCounter from={0} to={53} suffix=" वर्षे" />
                </div>
                <p className="text-blue-600 font-medium">सेवेचा अनुभव</p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 text-purple-600" />
                <div className="text-3xl font-bold text-purple-700 mb-2">
                  <AnimatedCounter from={0} to={98} suffix="%" />
                </div>
                <p className="text-purple-600 font-medium">यशस्वी परतफेड</p>
              </Card>
            </motion.div>
          </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-800 mb-6">आमचा इतिहास आणि ध्येय</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              प्रिय सदस्य, कृषि खाते सेवक सहकारी पतसंस्था मर्या., धुळे, आपल्या सभासदांमध्ये स्वावलंबन आणि सहकार्याची तत्त्वे जोपासण्यासाठी समर्पित आहे. याच विचारातून संस्थापक अध्यक्ष कै. आप्पासो दौलतराव राजाराम शिंदे यांच्या नेतृत्वाखाली पतसंस्थेची स्थापना झाली.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              एकत्रित प्रयत्न आणि सहकाराच्या माध्यमातून समाजसेवेचं ध्येय पूर्ण करण्यासाठी त्यांनी खूप परिश्रम घेतले. आपली पतसंस्था शासकीय कर्मचाऱ्यांना बचत आणि स्वावलंबनासाठी प्रोत्साहित करते.
            </p>
            <p className="text-gray-600 leading-relaxed">
              आपल्या सदस्यांच्या आर्थिक आणि सामाजिक उन्नतीसाठी विविध उपक्रम हाती घेतले आहेत. कर्मचारी वर्गाच्या मुलांसाठी शैक्षणिक सुविधा, आरोग्य सेवा आणि आवश्यक तंत्रज्ञान यांची उपलब्धता सुनिश्चित करण्यात आली आहे.
            </p>
          </motion.div>

          {/* Right content - Agriculture themed image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=2074&auto=format&fit=crop"
                alt="Agriculture and Rural Development"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-2xl font-bold mb-2">कृषी विकास</h4>
                <p className="text-lg opacity-90">शेतकऱ्यांच्या प्रगतीसाठी</p>
              </div>
            </div>

            {/* Key Info Cards */}
            <div className="grid gap-4 mt-8">
              <Card className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                <div className="flex items-center space-x-4">
                  <Calendar className="w-8 h-8" />
                  <div>
                    <h4 className="font-semibold text-lg">स्थापना दिनांक</h4>
                    <p className="text-primary-100">१२/०४/१९७१</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-secondary-500 to-secondary-600 text-white">
                <div className="flex items-center space-x-4">
                  <MapPin className="w-8 h-8" />
                  <div>
                    <h4 className="font-semibold text-lg">पत्ता</h4>
                    <p className="text-secondary-100">प्लॉट नं -२८, आदर्श कॉलनी, देवपुर, धुळे</p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <div className="flex items-center space-x-4">
                  <Award className="w-8 h-8" />
                  <div>
                    <h4 className="font-semibold text-lg">नोंदणी क्रमांक</h4>
                    <p className="text-green-100">डीएलए/बीएनके/११९</p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-primary-50 to-primary-100 border-l-4 border-primary-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-800 mb-4">आमचे ध्येय</h3>
                  <p className="text-gray-700 leading-relaxed">
                    कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे येथे, आम्ही आमच्या सदस्यांमध्ये काटकसर, स्वावलंबन आणि सहकार्याची तत्त्वे जोपासण्यासाठी समर्पित आहोत. आपल्या सहकार्यामुळे, आज धुळे जिल्ह्यातील शासकीय कर्मचाऱ्यांसाठी पतसंस्था एक आदर्श ठरली आहे.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-to-br from-secondary-50 to-secondary-100 border-l-4 border-secondary-500">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary-800 mb-4">आमची उद्दिष्टे</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• सदस्यांच्या आर्थिक आणि सामाजिक उन्नतीसाठी कार्य</li>
                    <li>• शैक्षणिक सुविधा आणि आरोग्य सेवा प्रदान करणे</li>
                    <li>• स्वावलंबन आणि सहकार्याची तत्त्वे जोपासणे</li>
                    <li>• आवश्यक तंत्रज्ञानाची उपलब्धता सुनिश्चित करणे</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Founder tribute */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-gray-800 to-gray-900 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">संस्थापक अध्यक्ष</h3>
            <p className="text-xl text-gray-300 mb-2">कै. आप्पासो दौलतराव राजाराम शिंदे</p>
            <p className="text-gray-400 italic">
              &quot;सहकाराच्या या प्रेरणादायी प्रवासात आपल्यासारख्या सदस्यांचा सहभाग हा खूप महत्वाचा आहे&quot;
            </p>
          </Card>
        </motion.div>
      </div>
    </section>

    {/* Parallax Section with Agriculture Impact */}
    <ParallaxSection
      backgroundImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
      className="py-20"
    >
      <div className="container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold mb-6">आमचा प्रभाव</h3>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            ग्रामीण भागातील शेतकरी आणि कर्मचाऱ्यांच्या जीवनमानात सुधारणा घडवून आणण्यासाठी आम्ही कटिबद्ध आहोत
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={15} suffix=" गावे" />
              </div>
              <div className="text-sm opacity-90">सेवा क्षेत्र</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={500} suffix="+" />
              </div>
              <div className="text-sm opacity-90">कृषि कर्जे</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={1200} suffix="+" />
              </div>
              <div className="text-sm opacity-90">कुटुंबांना फायदा</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold mb-2">
                <AnimatedCounter from={0} to={99} suffix="%" />
              </div>
              <div className="text-sm opacity-90">सदस्य समाधान</div>
            </div>
          </div>
        </motion.div>
      </div>
    </ParallaxSection>
    </>
  )
}
