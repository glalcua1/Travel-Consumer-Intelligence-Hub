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
    <div className={`${isCollapsed ? 'w-20' : 'w-72'} bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white h-screen flex flex-col shadow-2xl transition-all duration-300 ease-in-out relative`}>
      
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="absolute -right-3 top-8 w-6 h-6 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center shadow-lg transition-colors duration-200 z-10"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>

      {/* Header */}
      <div className={`${isCollapsed ? 'p-4' : 'p-6'} border-b border-slate-700 transition-all duration-300`}>
        <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'space-x-3'} transition-all duration-300`}>
          <div className={`${isCollapsed ? 'w-10 h-10' : 'w-12 h-12'} bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg transition-all duration-300`}>
            <Globe className={`${isCollapsed ? 'w-5 h-5' : 'w-7 h-7'} transition-all duration-300`} />
          </div>
          {!isCollapsed && (
            <div className="opacity-100 transition-opacity duration-300">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Travel Insights Hub
              </h1>
              <p className="text-xs text-slate-400">Consumer Intelligence Platform</p>
            </div>
          )}
        </div>
      </div>

      {/* User Info */}
      {!isCollapsed && (
        <div className="p-4 border-b border-slate-700 opacity-100 transition-opacity duration-300">
          <button 
            onClick={onLogout}
            className="w-full flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
            title="Click to logout"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center shadow-md">
              <Crown className="w-5 h-5" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                {userInfo?.name || 'Guest User'}
              </p>
              <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                {userInfo?.company || 'Travel Business'}
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                    ? `${getCategoryColor(item.category)} text-white shadow-lg transform scale-[1.02]` 
                    : 'text-slate-300 hover:bg-slate-800/50 hover:text-white hover:scale-[1.01]'
                }`}
              >
                <div className={`p-2 rounded-lg transition-colors ${
                  isActive ? 'bg-white/20' : 'bg-slate-700/50 group-hover:bg-slate-700'
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
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 px-3 py-2 bg-slate-800 text-white text-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50 border border-slate-600">
                  <div className="font-medium">{item.label}</div>
                  {item.description && (
                    <div className="text-xs text-slate-300 mt-1">{item.description}</div>
                  )}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 rotate-45 border-l border-b border-slate-600"></div>
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Service Principles */}
      {!isCollapsed && (
        <div className="p-4 border-t border-slate-700 opacity-100 transition-opacity duration-300">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2 p-2 bg-emerald-900/30 rounded-lg">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-emerald-300">Trends</span>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-blue-900/30 rounded-lg">
              <Lightbulb className="w-4 h-4 text-blue-400" />
              <span className="text-xs text-blue-300">Insights</span>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-purple-900/30 rounded-lg">
              <Network className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-purple-300">Channels</span>
            </div>
            <div className="flex items-center space-x-2 p-2 bg-rose-900/30 rounded-lg">
              <Heart className="w-4 h-4 text-rose-400" />
              <span className="text-xs text-rose-300">Affinity</span>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      {!isCollapsed && (
        <div className="p-4 border-t border-slate-700 opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Updated: {new Date().toLocaleDateString()}</span>
            </div>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}

      {/* Collapsed footer - just the status dot */}
      {isCollapsed && (
        <div className="p-4 border-t border-slate-700 flex justify-center">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
        </div>
      )}
    </div>
  )
}

export default Sidebar 