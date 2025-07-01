import { useState } from 'react'
import Sidebar from './components/Sidebar'
import ExecutiveOverview from './components/ExecutiveOverview'
import ConsumerTrends from './components/ConsumerTrends'
import ProductInsights from './components/ProductInsights'
import ActionPlanner from './components/ActionPlanner'
import ChannelStrategy from './components/ChannelStrategy'

// Placeholder components for other sections

const BrandAffinity = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 border border-rose-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
            Brand Affinity Intelligence
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Community engagement insights & user-generated content analysis
          </p>
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">❤️</span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
      <p className="text-gray-600">
        <strong>Coming Soon:</strong> Deep analysis of consumer communities, user-generated content mining, 
        brand sentiment tracking, and engagement optimization strategies for enhanced brand affinity.
      </p>
    </div>
  </div>
)

const AudienceAnalytics = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
            Audience Analytics
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Detailed demographic analysis & behavioral insights
          </p>
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">👥</span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
      <p className="text-gray-600">
        <strong>Coming Soon:</strong> Advanced audience segmentation, demographic analysis, 
        behavioral pattern recognition, and targeted marketing insights.
      </p>
    </div>
  </div>
)

const MarketIntelligence = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
            Market Intelligence
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Competitive landscape & market opportunity analysis
          </p>
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">🎯</span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
      <p className="text-gray-600">
        <strong>Coming Soon:</strong> Comprehensive competitive intelligence, market share analysis, 
        opportunity identification, and strategic positioning insights.
      </p>
    </div>
  </div>
)

const SocialListening = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            Social Listening Intelligence
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Real-time social sentiment & conversation analysis
          </p>
        </div>
        <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
          <span className="text-2xl">💬</span>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
      <p className="text-gray-600">
        <strong>Coming Soon:</strong> Advanced social media monitoring, sentiment analysis, 
        conversation tracking, and brand mention insights across all platforms.
      </p>
    </div>
  </div>
)

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarCollapsed(prev => !prev)
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <ExecutiveOverview />
      case 'consumer-trends':
        return <ConsumerTrends />
      case 'product-insights':
        return <ProductInsights />
      case 'action-planner':
        return <ActionPlanner />
      case 'channel-evolution':
        return <ChannelStrategy />
      case 'brand-affinity':
        return <BrandAffinity />
      case 'demographics':
        return <AudienceAnalytics />
      case 'competitive':
        return <MarketIntelligence />
      case 'social-listening':
        return <SocialListening />
      default:
        return <ExecutiveOverview />
    }
  }

  return (
    <div className="flex h-screen bg-slate-200">
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={toggleSidebar}
      />
      
      {/* Main Content */}
      <div className={`flex-1 overflow-auto transition-all duration-300 ${isSidebarCollapsed ? 'ml-2' : 'ml-0'}`}>
        <div className="p-8">
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default App
