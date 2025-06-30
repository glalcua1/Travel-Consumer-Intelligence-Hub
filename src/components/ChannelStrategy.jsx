import { useState } from 'react'
import { 
  Network,
  TrendingUp,
  DollarSign,
  Users,
  Globe,
  Smartphone,
  Monitor,
  Share2,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Zap,
  ArrowRight,
  Info,
  HelpCircle,
  Database,
  X,
  Calculator,
  CheckCircle,
  Building2,
  Wifi,
  ShoppingCart,
  Star,
  AlertTriangle,
  TrendingDown,
  Eye,
  Clock,
  Calendar
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
  ComposedChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'

const ChannelStrategy = () => {
  const [showDataSources, setShowDataSources] = useState(false)
  const [selectedTimeframe, setSelectedTimeframe] = useState('6months')
  const [selectedChannel, setSelectedChannel] = useState('all')

  // Market and time period context
  const currentPeriod = "Q3 2024"
  const previousPeriod = "Q2 2024"
  const marketRegion = "Dubai & UAE"
  const marketScope = "GCC Premium Travel Market"
  const dataLastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  // Channel Evolution Data
  const channelEvolutionData = [
    { month: 'Jan', direct: 35, ota: 45, gds: 12, social: 5, mobile: 3 },
    { month: 'Feb', direct: 38, ota: 43, gds: 11, social: 6, mobile: 4 },
    { month: 'Mar', direct: 42, ota: 40, gds: 10, social: 6, mobile: 5 },
    { month: 'Apr', direct: 45, ota: 38, gds: 9, social: 7, mobile: 6 },
    { month: 'May', direct: 48, ota: 36, gds: 8, social: 8, mobile: 7 },
    { month: 'Jun', direct: 52, ota: 34, gds: 7, social: 9, mobile: 8 }
  ]

  // Channel Performance Metrics
  const channelPerformance = [
    {
      channel: 'Direct Website',
      revenue: 3250000,
      bookings: 8420,
      conversionRate: 4.8,
      averageValue: 385,
      commission: 0,
      netRevenue: 3250000,
      growth: '+28%',
      trend: 'up',
      color: 'from-emerald-500 to-green-600',
      icon: Monitor
    },
    {
      channel: 'Booking.com',
      revenue: 2850000,
      bookings: 9650,
      conversionRate: 3.2,
      averageValue: 295,
      commission: 18,
      netRevenue: 2337000,
      growth: '+12%',
      trend: 'up',
      color: 'from-blue-500 to-indigo-600',
      icon: Globe
    },
    {
      channel: 'Expedia Group',
      revenue: 2200000,
      bookings: 7890,
      conversionRate: 2.8,
      averageValue: 278,
      commission: 20,
      netRevenue: 1760000,
      growth: '+8%',
      trend: 'up',
      color: 'from-orange-500 to-red-600',
      icon: Network
    },
    {
      channel: 'Mobile Apps',
      revenue: 1850000,
      bookings: 6420,
      conversionRate: 6.2,
      averageValue: 288,
      commission: 5,
      netRevenue: 1757500,
      growth: '+45%',
      trend: 'up',
      color: 'from-purple-500 to-violet-600',
      icon: Smartphone
    },
    {
      channel: 'GDS/Corporate',
      revenue: 1650000,
      bookings: 3250,
      conversionRate: 8.5,
      averageValue: 508,
      commission: 12,
      netRevenue: 1452000,
      growth: '-5%',
      trend: 'down',
      color: 'from-gray-500 to-slate-600',
      icon: Building2
    },
    {
      channel: 'Social Media',
      revenue: 980000,
      bookings: 4120,
      conversionRate: 2.1,
      averageValue: 238,
      commission: 8,
      netRevenue: 901600,
      growth: '+67%',
      trend: 'up',
      color: 'from-pink-500 to-rose-600',
      icon: Share2
    }
  ]

  // Channel Evolution Intelligence Insights
  const evolutionInsights = [
    {
      trend: 'Direct Booking Surge',
      impact: 'High',
      growth: '+28%',
      description: 'Direct bookings increasing as travelers seek better rates and flexible cancellation',
      opportunity: 'Expand loyalty program and exclusive direct benefits',
      timeframe: 'Next 3 months',
      priority: 'High'
    },
    {
      trend: 'Mobile-First Behavior',
      impact: 'High', 
      growth: '+45%',
      description: 'Mobile bookings dominating especially for last-minute and local travelers',
      opportunity: 'Optimize mobile experience and app-exclusive rates',
      timeframe: 'Immediate',
      priority: 'High'
    },
    {
      trend: 'Social Commerce Growth',
      impact: 'Medium',
      growth: '+67%',
      description: 'Social media platforms becoming direct booking channels, not just discovery',
      opportunity: 'Integrate social booking widgets and influencer partnerships',
      timeframe: 'Next 6 months',
      priority: 'Medium'
    },
    {
      trend: 'OTA Commission Pressure',
      impact: 'High',
      growth: '+2%',
      description: 'OTA commission rates increasing while maintaining market share',
      opportunity: 'Rate parity optimization and direct booking incentives',
      timeframe: 'Ongoing',
      priority: 'High'
    }
  ]

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-blue-100 rounded-xl">
              <Network className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Channel Strategy Intelligence</h1>
              <p className="text-gray-600 mt-1">Distribution channel optimization • {marketRegion} • {currentPeriod}</p>
              <div className="flex items-center space-x-1 text-xs text-gray-500 mt-1">
                <Database className="w-3 h-3" />
                <span>STR • Channel Analytics • Revenue Systems</span>
              </div>
            </div>
            <button
              onClick={() => setShowDataSources(true)}
              className="p-2 bg-white/50 hover:bg-white/80 rounded-lg transition-colors group"
              title="Data Sources & KPI Methodology"
            >
              <HelpCircle className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
            </button>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-emerald-600">$12.8M</div>
            <div className="text-sm text-gray-600">Total Channel Revenue</div>
            <div className="text-xs text-emerald-600 font-medium">+18% vs {previousPeriod}</div>
            <div className="text-xs text-gray-500 mt-1">Last Updated: {dataLastUpdated}</div>
          </div>
        </div>
      </div>

      {/* Channel Evolution Intelligence */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Channel Evolution Intelligence</h3>
              <p className="text-sm text-gray-600">6-Month channel distribution trend analysis • {currentPeriod}</p>
            </div>
            <button
              onClick={() => setShowDataSources(true)}
              className="p-2 bg-gray-100 hover:bg-purple-100 rounded-lg transition-colors group"
              title="Data Sources & KPI Methodology"
            >
              <HelpCircle className="w-4 h-4 text-gray-500 group-hover:text-purple-600" />
            </button>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Jan - Jun 2024 Evolution</p>
            <p className="flex items-center justify-end text-xs">
              <Database className="w-3 h-3 mr-1" />
              Booking Systems • Channel Analytics
            </p>
          </div>
        </div>
        
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={channelEvolutionData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area 
              type="monotone" 
              dataKey="direct" 
              stackId="1"
              stroke="#10B981" 
              fill="#10B981"
              fillOpacity={0.8}
              name="Direct Bookings (%)"
            />
            <Area 
              type="monotone" 
              dataKey="ota" 
              stackId="1"
              stroke="#3B82F6" 
              fill="#3B82F6"
              fillOpacity={0.8}
              name="OTA Platforms (%)"
            />
            <Area 
              type="monotone" 
              dataKey="gds" 
              stackId="1"
              stroke="#6B7280" 
              fill="#6B7280"
              fillOpacity={0.8}
              name="GDS/Corporate (%)"
            />
            <Area 
              type="monotone" 
              dataKey="social" 
              stackId="1"
              stroke="#EC4899" 
              fill="#EC4899"
              fillOpacity={0.8}
              name="Social Media (%)"
            />
            <Area 
              type="monotone" 
              dataKey="mobile" 
              stackId="1"
              stroke="#8B5CF6" 
              fill="#8B5CF6"
              fillOpacity={0.8}
              name="Mobile Apps (%)"
            />
          </AreaChart>
        </ResponsiveContainer>

        {/* Evolution Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {evolutionInsights.map((insight, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <h5 className="font-bold text-gray-900 text-sm">{insight.trend}</h5>
                <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  insight.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {insight.impact}
                </div>
              </div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">{insight.growth}</div>
              <p className="text-xs text-gray-600 mb-3">{insight.description}</p>
              <div className="space-y-2">
                <div className="text-xs">
                  <span className="font-semibold text-gray-700">Opportunity:</span>
                  <p className="text-gray-600">{insight.opportunity}</p>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-gray-500">{insight.timeframe}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    insight.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {insight.priority}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Channel Performance Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {channelPerformance.map((channel, index) => {
          const Icon = channel.icon
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${channel.color}`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <div className={`text-lg font-bold ${
                    channel.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {channel.growth}
                  </div>
                  <div className="text-xs text-gray-500">Growth</div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4">{channel.channel}</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                    <div className="text-xs font-medium text-green-700">Revenue</div>
                    <div className="text-lg font-bold text-green-600">
                      ${(channel.revenue / 1000000).toFixed(1)}M
                    </div>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="text-xs font-medium text-blue-700">Bookings</div>
                    <div className="text-lg font-bold text-blue-600">
                      {channel.bookings.toLocaleString()}
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                    <div className="text-xs font-medium text-purple-700">Conversion</div>
                    <div className="text-lg font-bold text-purple-600">{channel.conversionRate}%</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
                    <div className="text-xs font-medium text-orange-700">Avg Value</div>
                    <div className="text-lg font-bold text-orange-600">${channel.averageValue}</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-700">Commission</span>
                    <span className="text-lg font-bold text-gray-600">{channel.commission}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-700">Net Revenue</span>
                    <span className="text-lg font-bold text-gray-900">
                      ${(channel.netRevenue / 1000000).toFixed(1)}M
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Data Sources & KPI Methodology Drawer */}
      {showDataSources && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setShowDataSources(false)}></div>
          <div className={`fixed right-0 top-0 h-full w-full max-w-4xl bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            showDataSources ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Sources & KPI Methodology</h2>
                  <p className="text-gray-600">Channel strategy data sourcing and calculation transparency</p>
                </div>
              </div>
              <button
                onClick={() => setShowDataSources(false)}
                className="p-2 hover:bg-white rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-500" />
              </button>
            </div>
            
            {/* Drawer Content */}
            <div className="h-full overflow-y-auto pb-20">
              <div className="p-6">
                
                {/* Data Sources Section */}
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Globe className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-900">Primary Data Sources</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <BarChart3 className="w-4 h-4 mr-2" />
                        STR (Smith Travel Research)
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Channel performance benchmarking</li>
                        <li>• Market distribution analysis</li>
                        <li>• Competitive channel strategies</li>
                        <li>• Commission rate intelligence</li>
                        <li>• Direct booking penetration rates</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <Network className="w-4 h-4 mr-2" />
                        Channel Analytics Platforms
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Real-time booking velocity</li>
                        <li>• Conversion rate optimization</li>
                        <li>• Channel attribution analysis</li>
                        <li>• Customer journey tracking</li>
                        <li>• A/B testing results</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Revenue Management Systems
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Channel-specific pricing</li>
                        <li>• Commission cost analysis</li>
                        <li>• Net revenue calculations</li>
                        <li>• Rate parity monitoring</li>
                        <li>• Distribution cost optimization</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Customer Behavior Analytics
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Channel preference surveys</li>
                        <li>• Booking pattern analysis</li>
                        <li>• Mobile vs desktop behavior</li>
                        <li>• Social media engagement</li>
                        <li>• Loyalty program interactions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Channel Strategy KPI Methodologies */}
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calculator className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">Channel Strategy KPI Methodologies</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Channel Performance Metrics</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Channel Revenue:</strong> Total bookings revenue attributed to each channel</p>
                        <p><strong>Conversion Rate:</strong> Bookings ÷ total channel traffic × 100</p>
                        <p><strong>Average Booking Value:</strong> Total channel revenue ÷ number of bookings</p>
                        <p><strong>Net Revenue:</strong> Gross revenue - commission costs - channel fees</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Channel Evolution Analysis</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Market Share Shift:</strong> Monthly percentage change in channel distribution</p>
                        <p><strong>Growth Rate Calculation:</strong> (Current - Previous) ÷ Previous × 100</p>
                        <p><strong>Trend Classification:</strong> 6-month rolling average with seasonal adjustment</p>
                        <p><strong>Impact Assessment:</strong> Revenue correlation with distribution changes</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Commission & Cost Analysis</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Commission Rate:</strong> Platform fees as percentage of gross booking value</p>
                        <p><strong>Cost Per Acquisition:</strong> Total marketing spend ÷ number of bookings</p>
                        <p><strong>Channel ROI:</strong> (Net revenue - channel costs) ÷ channel costs × 100</p>
                        <p><strong>Profitability Index:</strong> Net margin ranking across all channels</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Optimization Opportunities</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Direct Booking Potential:</strong> Addressable OTA volume × conversion probability</p>
                        <p><strong>Rate Parity Impact:</strong> Price differential effect on channel performance</p>
                        <p><strong>Mobile Optimization Score:</strong> Mobile conversion rate vs. desktop baseline</p>
                        <p><strong>Emerging Channel ROI:</strong> New platform performance vs. investment</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Quality & Refresh */}
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <Info className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-900">Data Quality & Refresh Frequency</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Real-time (15 min refresh)</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Channel booking velocity</li>
                        <li>• Conversion rate tracking</li>
                        <li>• Rate parity monitoring</li>
                        <li>• Inventory distribution</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Daily (6 AM GST)</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• STR channel benchmarks</li>
                        <li>• Commission reconciliation</li>
                        <li>• Channel performance reports</li>
                        <li>• Customer acquisition costs</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Weekly/Monthly</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Channel strategy optimization</li>
                        <li>• Market share analysis</li>
                        <li>• Competitive intelligence</li>
                        <li>• ROI assessment reviews</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Channel Data Validation & Quality Assurance
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-800">
                      <div>
                        <p><strong>Revenue Reconciliation:</strong> Daily cross-validation with channel reporting</p>
                        <p><strong>Booking Attribution:</strong> Multi-touch attribution model with 95% accuracy</p>
                      </div>
                      <div>
                        <p><strong>Commission Verification:</strong> Automated matching with partner statements</p>
                        <p><strong>Performance Monitoring:</strong> Real-time alerts for significant deviations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ChannelStrategy 