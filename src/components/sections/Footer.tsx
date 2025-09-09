'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">KKSSP धुळे</h3>
                <p className="text-gray-400 text-sm">कृषि खाते सेवक सहकारी पतसंस्था</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              1971 पासून धुळे जिल्ह्यातील शासकीय कर्मचाऱ्यांना विश्वसनीय आर्थिक सेवा प्रदान करत आहोत. 
              आपल्या सदस्यांच्या आर्थिक स्थैर्यासाठी आणि वाढीसाठी आम्ही समर्पित आहोत.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">द्रुत दुवे</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">मुख्यपृष्ठ</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">आमच्या विषयी</a></li>
              <li><a href="#board" className="text-gray-300 hover:text-white transition-colors">संचालक मंडळ</a></li>
              <li><a href="#loans" className="text-gray-300 hover:text-white transition-colors">कर्ज योजना</a></li>
              <li><a href="#gallery" className="text-gray-300 hover:text-white transition-colors">गॅलरी</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">संपर्क</a></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">संपर्क माहिती</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  प्लॉट नं : 28, आदर्श कॉलनी,<br />
                  देवपुर, धुळे, महाराष्ट्र
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+919421293915" className="text-gray-300 hover:text-white transition-colors">
                  +91 94212 93915
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:kksspdhule@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                  kksspdhule@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 कृषि खाते सेवक सहकारी पतसंस्था मर्या, धुळे. सर्व हक्क राखीव.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">गोपनीयता धोरण</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">अटी व शर्ती</a>
            <a href="https://www.quoriumtechnologies.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              Powered by Quorium Technologies
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
