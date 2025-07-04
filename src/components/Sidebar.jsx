import { 
  TrendingUp, 
  Lightbulb, 
  Network, 
  Heart,
  BarChart3,
  Users,
  Target,
  MessageSquare,
  Globe,
  Calendar,
  Crown,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

const Sidebar = ({ activeSection, setActiveSection, isCollapsed, toggleSidebar, userInfo, onLogout }) => {
  const menuItems = [
    { 
      id: 'overview', 
      label: 'Executive Overview', 
      icon: BarChart3,
      category: 'overview'
    },
    { 
      id: 'consumer-trends', 
      label: 'Consumer Trends', 
      icon: TrendingUp,
      category: 'trends',
      description: 'Emerging behaviors & attitudes'
    },
    { 
      id: 'product-insights', 
      label: 'Product Insights', 
      icon: Lightbulb,
      category: 'insights',
      description: 'Performance & competitive analysis'
    },
    { 
      id: 'action-planner', 
      label: 'Action Planner', 
      icon: Target,
      category: 'actions',
      description: 'Personalized business recommendations'
    },
    { 
      id: 'channel-evolution', 
      label: 'Channel Strategy', 
      icon: Network,
      category: 'channels',
      description: 'Omni-channel engagement'
    },
    { 
      id: 'brand-affinity', 
      label: 'Brand Affinity', 
      icon: Heart,
      category: 'affinity',
      description: 'Community engagement insights'
    },
    { 
      id: 'demographics', 
      label: 'Audience Analytics', 
      icon: Users,
      category: 'analytics'
    },
    { 
      id: 'competitive', 
      label: 'Market Intelligence', 
      icon: Target,
      category: 'analytics'
    },
    { 
      id: 'social-listening', 
      label: 'Social Listening', 
      icon: MessageSquare,
      category: 'affinity'
    },
  ]

  const getCategoryColor = (category) => {
    switch (category) {
      case 'overview': return 'bg-slate-600'
      case 'trends': return 'bg-emerald-600'
      case 'insights': return 'bg-blue-600'
      case 'actions': return 'bg-teal-600'
      case 'channels': return 'bg-purple-600'
      case 'affinity': return 'bg-rose-600'
      case 'analytics': return 'bg-amber-600'
      default: return 'bg-gray-600'
    }
  }

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-72'} bg-white text-gray-900 h-screen flex flex-col shadow-md border-r border-gray-100 transition-all duration-300 ease-in-out relative`}>
      
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-8 w-6 h-6 bg-white hover:bg-gray-50 border border-gray-300 rounded-full flex items-center justify-center shadow-sm transition-colors duration-200 z-10"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4 text-gray-600" /> : <ChevronLeft className="w-4 h-4 text-gray-600" />}
      </button>

      {/* Header */}
      <div className={`${isCollapsed ? 'p-4' : 'p-6'} border-b border-gray-100 transition-all duration-300`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} transition-all duration-300`}>
          <div className={`${isCollapsed ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-sm transition-all duration-300`}>
            <Globe className={`${isCollapsed ? 'w-5 h-5' : 'w-7 h-7'} text-white transition-all duration-300`} />
          </div>
          {!isCollapsed && (
            <div className="opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Travel Insights Hub
              </h1>
              <p className="text-xs text-gray-500">Consumer Intelligence Platform</p>
            </div>
          )}
        </div>
      </div>

      {/* User Info */}
      {!isCollapsed && (
        <div className="p-4 border-b border-gray-100 opacity-100 transition-opacity duration-300">
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
            title="Click to logout"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                {userInfo?.name || 'Guest User'}
              </p>
              <p className="text-xs text-gray-500 group-hover:text-gray-600 transition-colors">
                {userInfo?.company || 'Travel Business'}
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className={`flex-1 ${isCollapsed ? 'p-2' : 'p-4'} space-y-1 overflow-y-auto transition-all duration-300`}>
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id
          return (
            <div key={item.id} className="group relative">
              <button
                onClick={() => setActiveSection(item.id)}
                className={`w-full group relative flex items-center ${isCollapsed ? 'justify-center p-3' : 'space-x-3 px-4 py-3'} rounded-xl text-left transition-all duration-200 ${
                  isActive 
                    ? `${getCategoryColor(item.category)} text-white shadow-sm transform scale-[1.02]` 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 hover:scale-[1.01]'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  isActive ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-gray-200'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1 min-w-0 opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium block truncate">{item.label}</span>
                    {item.description && (
                      <span className="text-xs opacity-70 block truncate">{item.description}</span>
                    )}
                  </div>
                )}
                {!isCollapsed && isActive && (
                  <div className="absolute right-2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
              
              {/* Tooltip for collapsed state */}
              {isCollapsed && (
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-gray-700">
                  <div className="font-medium">{item.label}</div>
                  {item.description && (
                    <div className="text-xs text-gray-300 mt-1">{item.description}</div>
                  )}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-gray-900 rotate-45 border-l border-b border-gray-700"></div>
                </div>
              )}
            </div>
          )
        })}
      </nav>



      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-gray-100 opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Updated: {new Date().toLocaleDateString()}</span>
            </div>
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Collapsed footer - just the status dot */}
      {isCollapsed && (
        <div className="p-4 border-t border-gray-100 flex justify-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  )
}

export default Sidebar 