'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  CreditCard, 
  Calendar, 
  TrendingUp, 
  AlertCircle, 
  CheckCircle, 
  Clock,
  Download,
  Eye,
  Banknote,
  PieChart
} from 'lucide-react'
import Header from '@/components/layout/Header'
import Footer from '@/components/sections/Footer'
import Jumbotron from '@/components/ui/Jumbotron'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

// Mock data - in real app this would come from API
const memberData = {
  name: 'श्री राम पाटील',
  memberId: 'KKSSP001234',
  joinDate: '15/03/2020',
  totalLoans: 3,
  activeLoans: 1,
  totalBorrowed: 500000,
  totalPaid: 350000,
  remainingAmount: 150000,
  nextDueDate: '15/01/2025',
  nextDueAmount: 15000,
  creditScore: 'उत्कृष्ट'
}

const loanHistory = [
  {
    id: 1,
    type: 'कृषि कर्ज',
    amount: 200000,
    sanctionDate: '15/03/2020',
    status: 'बंद',
    paidAmount: 200000,
    remainingAmount: 0,
    emi: 8500,
    tenure: 24
  },
  {
    id: 2,
    type: 'व्यक्तिगत कर्ज',
    amount: 150000,
    sanctionDate: '10/08/2021',
    status: 'बंद',
    paidAmount: 150000,
    remainingAmount: 0,
    emi: 6500,
    tenure: 24
  },
  {
    id: 3,
    type: 'गृह सुधारणा कर्ज',
    amount: 300000,
    sanctionDate: '05/01/2023',
    status: 'सक्रिय',
    paidAmount: 150000,
    remainingAmount: 150000,
    emi: 15000,
    tenure: 24
  }
]

const recentTransactions = [
  { date: '15/12/2024', amount: 15000, type: 'EMI भरणा', status: 'यशस्वी' },
  { date: '15/11/2024', amount: 15000, type: 'EMI भरणा', status: 'यशस्वी' },
  { date: '15/10/2024', amount: 15000, type: 'EMI भरणा', status: 'यशस्वी' },
  { date: '15/09/2024', amount: 15000, type: 'EMI भरणा', status: 'यशस्वी' }
]

export default function MemberDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Jumbotron Section */}
      <Jumbotron
        backgroundImage="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2070&auto=format&fit=crop"
        title={`स्वागत आहे, ${memberData.name}`}
        subtitle="आपल्या कर्जाची संपूर्ण माहिती आणि स्थिती"
        height="md"
        overlay="gradient"
      />

      {/* Dashboard Content */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="container mx-auto px-4">
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-blue-100 text-sm">एकूण कर्ज</p>
                    <p className="text-2xl font-bold">
                      <AnimatedCounter from={0} to={memberData.totalLoans} />
                    </p>
                  </div>
                  <CreditCard className="w-8 h-8 text-blue-200" />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-green-100 text-sm">भरलेली रक्कम</p>
                    <p className="text-2xl font-bold">
                      ₹<AnimatedCounter from={0} to={memberData.totalPaid / 1000} />K
                    </p>
                  </div>
                  <CheckCircle className="w-8 h-8 text-green-200" />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-orange-100 text-sm">बाकी रक्कम</p>
                    <p className="text-2xl font-bold">
                      ₹<AnimatedCounter from={0} to={memberData.remainingAmount / 1000} />K
                    </p>
                  </div>
                  <Clock className="w-8 h-8 text-orange-200" />
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-purple-100 text-sm">पुढील EMI</p>
                    <p className="text-2xl font-bold">
                      ₹<AnimatedCounter from={0} to={memberData.nextDueAmount / 1000} />K
                    </p>
                  </div>
                  <Calendar className="w-8 h-8 text-purple-200" />
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8 bg-white rounded-lg p-2 shadow-sm">
            {[
              { id: 'overview', label: 'सारांश', icon: PieChart },
              { id: 'loans', label: 'कर्ज तपशील', icon: CreditCard },
              { id: 'transactions', label: 'व्यवहार', icon: Banknote },
              { id: 'profile', label: 'प्रोफाइल', icon: Eye }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <Card>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">कर्ज सारांश</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <span className="text-gray-600">एकूण कर्ज रक्कम</span>
                        <span className="font-bold text-lg">₹{memberData.totalBorrowed.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                        <span className="text-gray-600">भरलेली रक्कम</span>
                        <span className="font-bold text-lg text-green-600">₹{memberData.totalPaid.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                        <span className="text-gray-600">बाकी रक्कम</span>
                        <span className="font-bold text-lg text-orange-600">₹{memberData.remainingAmount.toLocaleString()}</span>
                      </div>
                    </div>
                  </Card>

                  <Card>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">पुढील EMI</h3>
                    <div className="bg-gradient-to-r from-red-50 to-red-100 p-6 rounded-lg border border-red-200">
                      <div className="flex items-center space-x-3 mb-3">
                        <AlertCircle className="w-6 h-6 text-red-500" />
                        <span className="font-semibold text-red-700">लक्ष द्या!</span>
                      </div>
                      <p className="text-gray-700 mb-2">
                        तारीख: <span className="font-bold">{memberData.nextDueDate}</span>
                      </p>
                      <p className="text-gray-700">
                        रक्कम: <span className="font-bold">₹{memberData.nextDueAmount.toLocaleString()}</span>
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'loans' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <Card>
                    <h3 className="text-xl font-bold text-gray-800 mb-6">कर्ज तपशील</h3>
                    <div className="space-y-4">
                      {loanHistory.map((loan) => (
                        <div key={loan.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-semibold text-gray-800">{loan.type}</h4>
                              <p className="text-sm text-gray-600">मंजूर तारीख: {loan.sanctionDate}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              loan.status === 'सक्रिय' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {loan.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">कर्ज रक्कम</p>
                              <p className="font-semibold">₹{loan.amount.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">भरलेली रक्कम</p>
                              <p className="font-semibold">₹{loan.paidAmount.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">बाकी रक्कम</p>
                              <p className="font-semibold">₹{loan.remainingAmount.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">मासिक EMI</p>
                              <p className="font-semibold">₹{loan.emi.toLocaleString()}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'transactions' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <Card>
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="text-xl font-bold text-gray-800">अलीकडील व्यवहार</h3>
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        डाउनलोड करा
                      </Button>
                    </div>
                    <div className="space-y-3">
                      {recentTransactions.map((transaction, index) => (
                        <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-semibold text-gray-800">{transaction.type}</p>
                            <p className="text-sm text-gray-600">{transaction.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-gray-800">₹{transaction.amount.toLocaleString()}</p>
                            <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded">
                              {transaction.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )}

              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-6"
                >
                  <Card>
                    <h3 className="text-xl font-bold text-gray-800 mb-6">सदस्य माहिती</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm text-gray-600">नाव</label>
                          <p className="font-semibold">{memberData.name}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">सदस्य क्रमांक</label>
                          <p className="font-semibold">{memberData.memberId}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">सदस्यत्व तारीख</label>
                          <p className="font-semibold">{memberData.joinDate}</p>
                        </div>
                        <div>
                          <label className="text-sm text-gray-600">क्रेडिट स्कोअर</label>
                          <p className="font-semibold text-green-600">{memberData.creditScore}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <h4 className="font-bold text-gray-800 mb-4">जलद क्रिया</h4>
                <div className="space-y-3">
                  <Button className="w-full justify-start">
                    <CreditCard className="w-4 h-4 mr-2" />
                    नवीन कर्जासाठी अर्ज करा
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    स्टेटमेंट डाउनलोड करा
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    EMI शेड्यूल पहा
                  </Button>
                </div>
              </Card>

              <Card>
                <h4 className="font-bold text-gray-800 mb-4">संपर्क माहिती</h4>
                <div className="space-y-2 text-sm">
                  <p><strong>फोन:</strong> +91 94212 93915</p>
                  <p><strong>ईमेल:</strong> kksspdhule@gmail.com</p>
                  <p><strong>पत्ता:</strong> प्लॉट नं: 28, आदर्श कॉलनी, देवपुर, धुळे</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
