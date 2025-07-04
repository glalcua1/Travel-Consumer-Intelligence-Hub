import { BarChart3, TrendingUp, Star, DollarSign, Users, Brain } from 'lucide-react'

const DubaiHeroCard = ({ activeSection = '', onExploreClick, compact = false, userInfo }) => {

  const getContextualMessage = () => {
    switch (activeSection) {
      case 'overview':
        return {
          title: 'Executive Overview',
          subtitle: 'Dubai market intelligence at a glance',
          description: 'Key performance indicators and strategic insights for executive decision-making'
        }
      case 'consumer-insights':
        return {
          title: 'Consumer Intelligence',
          subtitle: 'Unlock visitor behavior insights',
          description: 'Deep behavioral insights driving revenue growth and market positioning'
        }
      case 'financial-intelligence':
        return {
          title: 'Financial Intelligence',
          subtitle: 'Premium spending patterns decoded',
          description: 'Financial behavior analysis for strategic pricing and revenue optimization'
        }
      case 'revenue-performance':
        return {
          title: 'Revenue Performance',
          subtitle: 'Maximize your market potential',
          description: 'Performance metrics and optimization strategies for sustainable growth'
        }
      case 'consumer-trends':
        return {
          title: 'Consumer Intelligence',
          subtitle: 'Unlock visitor behavior insights',
          description: 'Deep behavioral insights driving revenue growth'
        }
      case 'product-insights':
        return {
          title: 'Product Intelligence',
          subtitle: 'Optimize every touchpoint',
          description: 'Premium positioning strategies for maximum revenue'
        }
      case 'action-planner':
        return {
          title: 'Action Intelligence',
          subtitle: 'Turn insights into growth',
          description: 'AI-powered strategies for revenue optimization'
        }
      case 'channel-evolution':
        return {
          title: 'Channel Intelligence',
          subtitle: 'Master distribution excellence',
          description: 'Strategic channel insights for market penetration'
        }
      default:
        return {
          title: 'Revenue Intelligence',
          subtitle: 'Your competitive edge in Dubai\'s premium market',
          description: 'Real-time insights from the world\'s fastest-growing tourism destination'
        }
    }
  }

  const contextual = getContextualMessage()

  // Key stats specific to each tab
  const getKeyStats = () => {
    switch (activeSection) {
      case 'overview':
        return [
          {
            value: '16.7M',
            label: 'Dubai Visitors',
            change: '+11%',
            icon: Users
          },
          {
            value: '$1,728',
            label: 'Avg Daily Spend',
            change: '+15%',
            icon: DollarSign
          },
          {
            value: '77%',
            label: 'Occupancy Rate',
            change: '+8%',
            icon: BarChart3
          },
          {
            value: '89%',
            label: 'Sustainability Interest',
            change: '+22%',
            icon: Star
          }
        ]
      case 'consumer-insights':
        return [
          {
            value: '5.2',
            label: 'Avg Stay Duration',
            change: '+18%',
            icon: BarChart3
          },
          {
            value: '89%',
            label: 'Experience Priority',
            change: '+12%',
            icon: Star
          },
          {
            value: '45%',
            label: 'Solo Travelers',
            change: '+35%',
            icon: Users
          },
          {
            value: '73%',
            label: 'Premium Willingness',
            change: '+25%',
            icon: TrendingUp
          }
        ]
      case 'financial-intelligence':
        return [
          {
            value: '42%',
            label: 'Shopping Spend',
            change: '+18%',
            icon: DollarSign
          },
          {
            value: '28%',
            label: 'Dining Investment',
            change: '+22%',
            icon: Star
          },
          {
            value: '24%',
            label: 'Experience Spend',
            change: '+35%',
            icon: TrendingUp
          },
          {
            value: '77%',
            label: 'Premium Card Usage',
            change: '+15%',
            icon: BarChart3
          }
        ]
      case 'revenue-performance':
        return [
          {
            value: '35%',
            label: 'Revenue Growth',
            change: '+8%',
            icon: TrendingUp
          },
          {
            value: '92%',
            label: 'Peak Occupancy',
            change: '+5%',
            icon: BarChart3
          },
          {
            value: '$485',
            label: 'RevPAR',
            change: '+12%',
            icon: DollarSign
          },
          {
            value: '4.8/5',
            label: 'Guest Satisfaction',
            change: '+0.3',
            icon: Star
          }
        ]
      default:
        return [
          {
            value: '16.7M',
            label: 'Dubai Visitors',
            change: '+11%',
            icon: Users
          },
          {
            value: '$1,728',
            label: 'Avg Daily Spend',
            change: '+15%',
            icon: DollarSign
          },
          {
            value: '77%',
            label: 'Occupancy Rate',
            change: '+8%',
            icon: BarChart3
          },
          {
            value: '89%',
            label: 'Sustainability Interest',
            change: '+22%',
            icon: Star
          }
        ]
    }
  }

  const keyStats = getKeyStats()

  // Help insight specific to each tab
  const getHelpInsight = () => {
    switch (activeSection) {
      case 'overview':
        return {
          title: 'Pro Tip: Executive Dashboard',
          description: 'Dubai visitors show 73% higher willingness to pay premium rates during cultural events and shopping festivals. Monitor local event calendars and adjust your pricing 2-3 weeks in advance to capture maximum revenue during these high-demand periods.',
          icon: Brain,
          color: 'from-blue-400 to-indigo-500'
        }
      case 'consumer-insights':
        return {
          title: 'Pro Tip: Consumer Behavior',
          description: 'Solo travelers in Dubai spend 45% more on premium experiences and are 35% more likely to book last-minute upgrades. Target this growing segment with personalized offers and flexible booking options to maximize revenue.',
          icon: Users,
          color: 'from-emerald-400 to-teal-500'
        }
      case 'financial-intelligence':
        return {
          title: 'Pro Tip: Financial Patterns',
          description: 'Premium card holders allocate 42% of their Dubai budget to shopping. Partner with luxury malls and offer exclusive shopping packages to capture this high-value spending category and increase average transaction value.',
          icon: DollarSign,
          color: 'from-purple-400 to-pink-500'
        }
      case 'revenue-performance':
        return {
          title: 'Pro Tip: Revenue Optimization',
          description: 'Dubai hotels achieve 92% occupancy during peak seasons. Implement dynamic pricing strategies starting 45 days before peak periods to maximize RevPAR and capture demand from the 77% of guests willing to pay premium rates.',
          icon: TrendingUp,
          color: 'from-orange-400 to-red-500'
        }
      default:
        return {
          title: 'Pro Tip: Dynamic Pricing Strategy',
          description: 'Dubai visitors show 73% higher willingness to pay premium rates during cultural events and shopping festivals. Monitor local event calendars and adjust your pricing 2-3 weeks in advance to capture maximum revenue during these high-demand periods.',
          icon: Brain,
          color: 'from-blue-400 to-indigo-500'
        }
    }
  }

  const helpInsight = getHelpInsight()



  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 mb-8">
      {/* Left Card - 70% - Key Stats */}
      <div className="lg:col-span-7 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-2xl shadow-lg">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/20 rounded-full blur-2xl"></div>
        </div>
        

        
        {/* Content */}
        <div className="relative z-10 p-6">
          {/* Welcome Message */}
          {userInfo && (
            <div className="mb-6">
              <p className="text-blue-200 text-xs">Welcome back,</p>
              <h1 className="text-lg font-bold text-white">
                {userInfo.name}
              </h1>
            </div>
          )}
          
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">{contextual.title}</h2>
              <p className="text-blue-200 text-xs">{contextual.subtitle}</p>
            </div>
          </div>
          
          <p className="text-white/80 mb-4 text-xs leading-relaxed">
            {contextual.description}
          </p>
          
          {/* Key Stats in Single Row */}
          <div className="grid grid-cols-4 gap-4 mb-4">
            {keyStats.map((stat, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-3">
                <div className="flex items-center justify-between mb-1">
                  <stat.icon className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 text-xs font-medium">{stat.change}</span>
                </div>
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-white/60 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
          

        </div>
      </div>
      
      {/* Right Card - 30% - Key Actions */}
      <div className="lg:col-span-3 relative overflow-hidden bg-gradient-to-br from-slate-800 via-purple-900 to-indigo-900 rounded-2xl shadow-lg">
        {/* Organic Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full blur-lg"></div>
            <div className="absolute bottom-8 right-2 w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full blur-md"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-xl opacity-30"></div>
          </div>
        </div>
        
                 {/* Content */}
         <div className="relative z-10 p-4">
           <div className="mb-3">
             <div className="inline-flex items-center space-x-2 bg-blue-500/10 rounded-full px-3 py-1">
               <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
               <span className="text-blue-400 text-xs font-medium">HELP CENTER</span>
             </div>
           </div>
           
           <h3 className="text-lg font-bold text-white mb-2">
             Revenue Insights
           </h3>
           
           <p className="text-white/60 text-xs mb-4">
             Expert insights to help you maximize revenue in Dubai's dynamic market
           </p>
           
           {/* Help Insight */}
           <div className="bg-white/5 rounded-lg p-4 border border-blue-400/20">
             <div className="flex items-start space-x-3 mb-3">
               <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${helpInsight.color} flex items-center justify-center flex-shrink-0`}>
                 <helpInsight.icon className="w-4 h-4 text-white" />
               </div>
               <div className="flex-1">
                 <h4 className="text-white font-semibold text-sm mb-2">{helpInsight.title}</h4>
               </div>
             </div>
             <p className="text-white/80 text-xs leading-relaxed">{helpInsight.description}</p>
             
             {/* Additional help indicator */}
             <div className="mt-3 pt-3 border-t border-white/10">
               <div className="flex items-center justify-between">
                 <span className="text-blue-400 text-xs font-medium">💡 Quick Tip</span>
                 <span className="text-white/60 text-xs">Based on 2025 market data</span>
               </div>
             </div>
           </div>
                   </div>
        </div>
      </div>
  )
}

export default DubaiHeroCard 