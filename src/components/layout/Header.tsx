'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, User, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/components/ui/Button'

const navItems = [
  { name: 'मुख्यपृष्ठ', href: '/' },
  { 
    name: 'आमच्या विषयी', 
    href: '/about',
    dropdownItems: [
      { name: 'संस्थेचा इतिहास', href: '/about/history' },
      { name: 'संचालक मंडळ', href: '/about/board' },
      { name: 'अमुल्य योगदान', href: '/about/contributions' },
      { name: 'संस्थेची उद्दिष्ठे', href: '/about/objectives' }
    ]
  },
  { 
    name: 'आमच्या योजना', 
    href: '/schemes',
    dropdownItems: [
      { name: 'जामीनावर कर्ज', href: '/schemes/guarantee-loan' },
      { name: 'प्रासंगिक कर्ज', href: '/schemes/occasional-loan' }
    ]
  },
  { 
    name: 'वार्षिक अहवाल', 
    href: '/annual-reports',
    dropdownItems: [
      { name: 'वार्षिक सर्वसाधरण सभा', href: '/annual-reports/general-meeting' },
      { name: 'शेअर्स व वर्गणी', href: '/annual-reports/shares-dividends' }
    ]
  },
  { name: 'अर्ज', href: '/applications' },
  { 
    name: 'गॅलरी', 
    href: '/gallery',
    dropdownItems: [
      { name: 'वार्षिक सभा २०२४-२५', href: '/gallery/annual-meeting-2024-25' }
    ]
  },
  { name: 'संपर्क', href: '/contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [expandedDropdown, setExpandedDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/95 backdrop-blur-md'
      }`}
    >
      {/* Top contact bar */}
      <div className="bg-primary-600 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>+91 94212 93915</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span>kksspdhule@gmail.com</span>
            </div>
          </div>
          <div className="hidden md:block text-xs">
            प्लॉट नं : 28, आदर्श कॉलनी, देवपुर, धुळे
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">K</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-800">KKSSP</h1>
                <p className="text-xs text-gray-600">धुळे</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.name} className="relative group">
                {item.dropdownItems ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`font-medium transition-colors duration-200 relative cursor-pointer flex items-center space-x-1 ${
                        pathname && pathname.startsWith(item.href) 
                          ? 'text-primary-600' 
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-200 ${
                        pathname && pathname.startsWith(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </motion.div>
                    
                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                        >
                          {item.dropdownItems.map((dropdownItem) => (
                            <Link key={dropdownItem.name} href={dropdownItem.href}>
                              <div className={`px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer ${
                                pathname === dropdownItem.href ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                              }`}>
                                {dropdownItem.name}
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={item.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`font-medium transition-colors duration-200 relative group cursor-pointer ${
                        pathname === item.href 
                          ? 'text-primary-600' 
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-200 ${
                        pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}></span>
                    </motion.div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Member Login Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link href="/member/login">
              <Button variant="outline" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>सदस्य लॉगिन</span>
              </Button>
            </Link>
            <Button variant="primary">
              कर्जासाठी अर्ज करा
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 py-4 border-t border-gray-200 bg-white relative z-[101] shadow-lg"
            >
              {navItems.map((item, index) => (
                <div key={item.name}>
                  {item.dropdownItems ? (
                    <div>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between py-3 px-4 font-medium text-gray-700 border-b border-gray-100 cursor-pointer"
                        onClick={() => setExpandedDropdown(expandedDropdown === item.name ? null : item.name)}
                      >
                        <span>{item.name}</span>
                        <motion.span
                          animate={{ rotate: expandedDropdown === item.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </motion.div>
                      <AnimatePresence>
                        {expandedDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                              <Link key={dropdownItem.name} href={dropdownItem.href}>
                                <motion.div
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: dropdownIndex * 0.05 }}
                                  className={`block py-2 px-8 hover:bg-gray-50 rounded-md font-medium cursor-pointer text-sm ${
                                    pathname === dropdownItem.href 
                                      ? 'text-primary-600 bg-primary-50' 
                                      : 'text-gray-600 hover:text-primary-600'
                                  }`}
                                  onClick={() => {
                                    setIsOpen(false)
                                    setExpandedDropdown(null)
                                  }}
                                >
                                  {dropdownItem.name}
                                </motion.div>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`block py-3 px-4 hover:bg-gray-50 rounded-md font-medium cursor-pointer ${
                          pathname === item.href 
                            ? 'text-primary-600 bg-primary-50' 
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </motion.div>
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 px-4 space-y-3">
                <Link href="/member/login">
                  <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>सदस्य लॉगिन</span>
                  </Button>
                </Link>
                <Button variant="primary" className="w-full">
                  कर्जासाठी अर्ज करा
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
