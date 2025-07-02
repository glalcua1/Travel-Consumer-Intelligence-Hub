import { BarChart3, TrendingUp, Star, Globe, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const DubaiHeroCard = ({ activeSection = '', onExploreClick, compact = false }) => {
  const [showToast, setShowToast] = useState(false)

  const getContextualMessage = () => {
    switch (activeSection) {
      case 'consumer-trends':
        return {
          title: 'Consumer Intelligence',
          subtitle: 'Unlock the minds of 16.7M+ Dubai visitors',
          description: 'Deep behavioral insights driving $1,728 average daily spend'
        }
      case 'product-insights':
        return {
          title: 'Product Intelligence',
          subtitle: 'Optimize every touchpoint for maximum revenue',
          description: 'Premium positioning strategies in the world\'s fastest-growing luxury market'
        }
      case 'action-planner':
        return {
          title: 'Action Intelligence',
          subtitle: 'Turn insights into immediate revenue growth',
          description: 'AI-powered strategies for capturing Dubai\'s $28.4B tourism market'
        }
      case 'channel-evolution':
        return {
          title: 'Channel Intelligence',
          subtitle: 'Master multi-channel excellence in Dubai',
          description: 'Strategic distribution insights for premium market penetration'
        }
      case 'financial-intelligence':
        return {
          title: 'Financial Intelligence',
          subtitle: 'Decode spending patterns of Dubai visitors',
          description: 'Premium pricing strategies for the $28.4B tourism economy'
        }
      case 'revenue-performance':
        return {
          title: 'Revenue Intelligence',
          subtitle: 'Maximize performance in Dubai\'s premium market',
          description: 'Strategic optimization for 77% occupancy and growing demand'
        }
      default:
        return {
          title: 'Executive Intelligence',
          subtitle: 'Your competitive edge in the world\'s premier tourism destination',
          description: 'Real-time insights from the market growing at 11% annually'
        }
    }
  }

  const contextual = getContextualMessage()

  const handleExploreClick = () => {
    // Show toast notification
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
    
    if (onExploreClick) {
      onExploreClick()
    } else {
      // Default fallback actions based on section
      switch (activeSection) {
        case 'consumer-trends':
          // Scroll to revenue drivers section
          const revenueSection = document.querySelector('[data-section="revenue-drivers"]')
          if (revenueSection) {
            revenueSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          break
        case 'product-insights':
          // Scroll to product performance section
          const productSection = document.querySelector('[data-section="product-performance"]')
          if (productSection) {
            productSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          break
        case 'action-planner':
          // Scroll to business form or recommendations
          const formSection = document.querySelector('[data-section="business-form"]')
          if (formSection) {
            formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          break
        case 'channel-evolution':
          // Scroll to channel performance
          const channelSection = document.querySelector('[data-section="channel-performance"]')
          if (channelSection) {
            channelSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          break
        case 'financial-intelligence':
          // Scroll to spending patterns
          const spendingSection = document.querySelector('[data-section="spending-patterns"]')
          if (spendingSection) {
            spendingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          break
        case 'revenue-performance':
          // Scroll to optimization opportunities
          const revenueOpSection = document.querySelector('[data-section="revenue-optimization"]')
          if (revenueOpSection) {
            revenueOpSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
          break
        default:
          // For overview, scroll to market metrics
          const metricsSection = document.querySelector('[data-section="market-metrics"]')
          if (metricsSection) {
            metricsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
      }
    }
  }

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 ${compact ? 'rounded-2xl' : 'rounded-3xl'} shadow-2xl mb-8`}>
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,${btoa(`
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
              <defs>
                <linearGradient id="skyline" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" style="stop-color:#1e40af;stop-opacity:0.8"/>
                  <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:0.6"/>
                  <stop offset="100%" style="stop-color:#60a5fa;stop-opacity:0.4"/>
                </linearGradient>
              </defs>
              
              <!-- Dubai Skyline Silhouette -->
              <rect width="1200" height="600" fill="url(#skyline)"/>
              
              <!-- Burj Khalifa -->
              <polygon points="550,600 550,80 560,70 570,80 570,600" fill="#1e3a8a" opacity="0.7"/>
              <polygon points="560,70 565,65 570,70" fill="#1e3a8a" opacity="0.9"/>
              
              <!-- Burj Al Arab -->
              <path d="M 150,600 L 150,200 Q 150,150 200,150 Q 250,150 250,200 L 250,600 Z" fill="#1e3a8a" opacity="0.6"/>
              <circle cx="200" cy="180" r="15" fill="#fbbf24" opacity="0.8"/>
              
              <!-- Dubai Frame -->
              <rect x="800" y="200" width="20" height="400" fill="#1e3a8a" opacity="0.7"/>
              <rect x="900" y="200" width="20" height="400" fill="#1e3a8a" opacity="0.7"/>
              <rect x="820" y="200" width="80" height="30" fill="#1e3a8a" opacity="0.7"/>
              <rect x="820" y="450" width="80" height="30" fill="#1e3a8a" opacity="0.7"/>
              
              <!-- Other Buildings -->
              <rect x="300" y="300" width="60" height="300" fill="#1e3a8a" opacity="0.6"/>
              <rect x="380" y="250" width="50" height="350" fill="#1e3a8a" opacity="0.5"/>
              <rect x="450" y="320" width="40" height="280" fill="#1e3a8a" opacity="0.6"/>
              <rect x="650" y="280" width="55" height="320" fill="#1e3a8a" opacity="0.5"/>
              <rect x="720" y="310" width="45" height="290" fill="#1e3a8a" opacity="0.6"/>
              <rect x="950" y="280" width="50" height="320" fill="#1e3a8a" opacity="0.5"/>
              <rect x="1020" y="320" width="40" height="280" fill="#1e3a8a" opacity="0.6"/>
              
              <!-- Decorative Elements -->
              <circle cx="100" cy="100" r="3" fill="#fbbf24" opacity="0.6"/>
              <circle cx="1100" cy="120" r="2" fill="#fbbf24" opacity="0.7"/>
              <circle cx="300" cy="80" r="2.5" fill="#fbbf24" opacity="0.5"/>
              <circle cx="900" cy="90" r="2" fill="#fbbf24" opacity="0.6"/>
            </svg>
          `)}`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/90 to-purple-900/95"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-20 right-20 w-48 h-48 bg-purple-400/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-indigo-400/10 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>
      
      {/* Content */}
      <div className={`relative z-10 ${compact ? 'p-6' : 'p-8 md:p-12'}`}>
        <div className="max-w-6xl mx-auto">
          <div className={`grid grid-cols-1 ${compact ? 'lg:grid-cols-2' : 'lg:grid-cols-3'} gap-8 items-center`}>
            
            {/* Left Content */}
            <div className={`${compact ? 'lg:col-span-1' : 'lg:col-span-2'} space-y-${compact ? '4' : '6'}`}>
              {/* Brand Badge */}
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span className="text-white/90 font-semibold text-sm">Dubai Travel Market Intelligence</span>
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              </div>
              
              {/* Main Headline */}
              <div className={`space-y-${compact ? '3' : '4'}`}>
                <h1 className={`${compact ? 'text-2xl md:text-3xl' : 'text-4xl md:text-5xl lg:text-6xl'} font-bold text-white leading-tight`}>
                  <span className="block">{contextual.title}</span>
                  <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                    Powered by AI
                  </span>
                </h1>
                
                {!compact && (
                  <>
                    <h2 className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed">
                      {contextual.subtitle}
                    </h2>
                    
                    <p className="text-lg text-blue-200/80 leading-relaxed max-w-2xl">
                      {contextual.description}
                    </p>
                  </>
                )}
                
                {compact && (
                  <p className="text-base text-blue-200/80 leading-relaxed">
                    {contextual.subtitle}
                  </p>
                )}
              </div>
              
              {/* Key Metrics */}
              {!compact && (
                <div className="grid grid-cols-3 gap-6 py-4">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">16.7M</div>
                    <div className="text-sm text-blue-200">Annual Visitors</div>
                    <div className="text-xs text-emerald-400 font-semibold">+11% YoY</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">$1,728</div>
                    <div className="text-sm text-blue-200">Avg Daily Spend</div>
                    <div className="text-xs text-emerald-400 font-semibold">+15% YoY</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1">77%</div>
                    <div className="text-sm text-blue-200">Hotel Occupancy</div>
                    <div className="text-xs text-emerald-400 font-semibold">+8% YoY</div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Right Content - CTA */}
            <div className="lg:col-span-1 space-y-6">
              <div className={`bg-white/10 backdrop-blur-md rounded-2xl ${compact ? 'p-4' : 'p-6'} border border-white/20`}>
                <div className="text-center space-y-4">
                  <div className={`${compact ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}>
                    <BarChart3 className={`${compact ? 'w-6 h-6' : 'w-8 h-8'} text-white`} />
                  </div>
                  
                  <div>
                    <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-white mb-2`}>Live Market Data</h3>
                    {!compact && (
                      <p className="text-blue-200 text-sm">
                        Real-time insights from Dubai's $28.4B tourism market
                      </p>
                    )}
                  </div>
                  
                  {!compact && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-200">Data Freshness</span>
                        <span className="text-emerald-400 font-semibold">Real-time</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-200">Market Coverage</span>
                        <span className="text-emerald-400 font-semibold">100%</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-blue-200">AI Accuracy</span>
                        <span className="text-emerald-400 font-semibold">96.8%</span>
                      </div>
                    </div>
                  )}
                  
                  <button 
                    onClick={handleExploreClick}
                    className={`w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold ${compact ? 'py-2 px-4 text-sm' : 'py-3 px-6'} rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2 group`}
                  >
                    <span>Explore Insights</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Stats Bar */}
          {!compact && (
            <div className="mt-8 pt-6 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm font-semibold text-white">World #1</span>
                  </div>
                  <div className="text-xs text-blue-200">Tourism Destination Growth</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-white">89%</span>
                  </div>
                  <div className="text-xs text-blue-200">Sustainability Interest</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1">
                    <Globe className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm font-semibold text-white">200+</span>
                  </div>
                  <div className="text-xs text-blue-200">Source Countries</div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-center space-x-1">
                    <BarChart3 className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-white">24/7</span>
                  </div>
                  <div className="text-xs text-blue-200">Live Monitoring</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 z-50 bg-emerald-600 text-white px-6 py-3 rounded-xl shadow-lg flex items-center space-x-2 animate-in slide-in-from-right duration-300">
          <BarChart3 className="w-5 h-5" />
          <span className="font-medium">Exploring Dubai insights...</span>
        </div>
      )}
    </div>
  )
}

export default DubaiHeroCard 