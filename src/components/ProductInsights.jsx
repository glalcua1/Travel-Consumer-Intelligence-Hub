import { 
  Lightbulb, 
  Star,
  TrendingUp,
  TrendingDown,
  Target,
  Users,
  Award,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Eye,
  ThumbsUp,
  MessageSquare,
  Calendar,
  MapPin,
  Info,
  Building,
  Clock
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
  ComposedChart,
  Area,
  AreaChart,
  ScatterChart,
  Scatter,
  Cell,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie
} from 'recharts'

const ProductInsights = () => {
  // Market and time period context
  const currentPeriod = "Q3 2024"
  const previousPeriod = "Q2 2024"
  const marketRegion = "Dubai & UAE"
  const marketScope = "GCC Premium Travel Market"
  const analysisScope = "5-Star Hotel Category"
  const competitorSet = "Luxury Hotel Brands"
  const dataLastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  // Product performance metrics
  const productPerformance = [
    { 
      product: 'Luxury Suites', 
      satisfaction: 94, 
      revenue: 2850000, 
      occupancy: 87, 
      nps: 68,
      trend: 'up',
      improvement: '+12%'
    },
    { 
      product: 'Business Rooms', 
      satisfaction: 88, 
      revenue: 1950000, 
      occupancy: 92, 
      nps: 45,
      trend: 'up',
      improvement: '+8%'
    },
    { 
      product: 'Spa Services', 
      satisfaction: 91, 
      revenue: 850000, 
      occupancy: 78, 
      nps: 72,
      trend: 'up',
      improvement: '+15%'
    },
    { 
      product: 'Conference Facilities', 
      satisfaction: 85, 
      revenue: 1250000, 
      occupancy: 65, 
      nps: 38,
      trend: 'down',
      improvement: '-3%'
    },
    { 
      product: 'Dining Experience', 
      satisfaction: 89, 
      revenue: 1680000, 
      occupancy: 82, 
      nps: 56,
      trend: 'up',
      improvement: '+18%'
    }
  ]

  // Competitive analysis
  const competitorAnalysis = [
    { feature: 'Room Quality', yourScore: 92, competitor1: 88, competitor2: 85, competitor3: 90 },
    { feature: 'Service Level', yourScore: 89, competitor1: 92, competitor2: 87, competitor3: 86 },
    { feature: 'Amenities', yourScore: 85, competitor1: 90, competitor2: 88, competitor3: 91 },
    { feature: 'Location', yourScore: 94, competitor1: 89, competitor2: 92, competitor3: 87 },
    { feature: 'Value for Money', yourScore: 78, competitor1: 82, competitor2: 85, competitor3: 80 },
    { feature: 'Digital Experience', yourScore: 81, competitor1: 88, competitor2: 90, competitor3: 85 }
  ]

  // Customer feedback evolution
  const feedbackEvolution = [
    { month: 'Jan', positive: 78, neutral: 15, negative: 7 },
    { month: 'Feb', positive: 82, neutral: 12, negative: 6 },
    { month: 'Mar', positive: 79, neutral: 14, negative: 7 },
    { month: 'Apr', positive: 85, neutral: 11, negative: 4 },
    { month: 'May', positive: 88, neutral: 9, negative: 3 },
    { month: 'Jun', positive: 91, neutral: 7, negative: 2 }
  ]

  // Feature impact analysis
  const featureImpact = [
    { feature: 'Smart Room Technology', satisfaction: 89, adoption: 67, roi: 245 },
    { feature: 'Personalized Service', satisfaction: 94, adoption: 82, roi: 189 },
    { feature: 'Sustainable Practices', satisfaction: 87, adoption: 45, roi: 156 },
    { feature: 'Mobile App Integration', satisfaction: 85, adoption: 72, roi: 134 },
    { feature: 'Wellness Programs', satisfaction: 92, adoption: 38, roi: 298 }
  ]

  // Product lifecycle data
  const productLifecycle = [
    { stage: 'Introduction', products: 3, revenue: 125000 },
    { stage: 'Growth', products: 8, revenue: 485000 },
    { stage: 'Maturity', products: 12, revenue: 1250000 },
    { stage: 'Decline', products: 2, revenue: 85000 }
  ]

  // Customer journey pain points
  const painPoints = [
    { stage: 'Discovery', issue: 'Limited online visibility', severity: 'High', impact: 85 },
    { stage: 'Booking', issue: 'Complex reservation process', severity: 'Medium', impact: 62 },
    { stage: 'Check-in', issue: 'Long wait times', severity: 'Medium', impact: 58 },
    { stage: 'Stay', issue: 'Inconsistent service quality', severity: 'High', impact: 78 },
    { stage: 'Check-out', issue: 'Billing discrepancies', severity: 'Low', impact: 34 }
  ]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      {/* Market Context & Scope Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <MapPin className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{marketRegion}</h3>
                <p className="text-sm text-gray-600">{marketScope}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Building className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{analysisScope}</h3>
                <p className="text-sm text-gray-600">Analysis Scope</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{currentPeriod}</h3>
                <p className="text-sm text-gray-600">Reporting Period</p>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <Info className="w-4 h-4" />
              <span>Last Updated: {dataLastUpdated}</span>
            </div>
            <div className="mt-1 flex items-center space-x-2">
              <div className="flex items-center space-x-1 text-sm text-emerald-600">
                <TrendingUp className="w-4 h-4" />
                <span>vs {previousPeriod}</span>
              </div>
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-500">Live Data</span>
            </div>
          </div>
        </div>
        
        {/* Analysis Scope Details */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-gray-50 rounded-xl p-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">25</div>
            <div className="text-sm text-gray-600">Hotels Analyzed</div>
            <div className="text-xs text-gray-500">5-Star Properties</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">147</div>
            <div className="text-sm text-gray-600">Product Categories</div>
            <div className="text-xs text-gray-500">Rooms, Services, Amenities</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">8.2K</div>
            <div className="text-sm text-gray-600">Guest Reviews</div>
            <div className="text-xs text-gray-500">Q3 2024 Analysis</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">12</div>
            <div className="text-sm text-gray-600">Competitor Brands</div>
            <div className="text-xs text-gray-500">{competitorSet}</div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-3">
                Product Insights Intelligence
              </h1>
              <p className="text-xl text-blue-100 mb-2">
                Comprehensive product performance & competitive analysis
              </p>
              <p className="text-lg text-blue-200 mb-6">
                {analysisScope} • {marketRegion} • {currentPeriod} Performance
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-emerald-400">89.4</p>
                  <p className="text-sm text-blue-200">Avg. Product Score</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-400">+12%</p>
                  <p className="text-sm text-blue-200">Performance Growth</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">94.2%</p>
                  <p className="text-sm text-blue-200">Guest Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Lightbulb className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Performance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {productPerformance.map((product, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-900 truncate">{product.product}</h3>
              <div className={`p-2 rounded-lg ${
                product.trend === 'up' ? 'bg-emerald-100' : 'bg-red-100'
              }`}>
                {product.trend === 'up' ? (
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                ) : (
                  <TrendingDown className="w-4 h-4 text-red-600" />
                )}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Satisfaction</span>
                <span className="text-lg font-bold text-blue-600">{product.satisfaction}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Revenue</span>
                <span className="text-sm font-semibold">${(product.revenue / 1000000).toFixed(1)}M</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Utilization</span>
                <span className="text-sm font-semibold">{product.occupancy}%</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">NPS Score</span>
                <span className={`text-sm font-bold ${
                  product.nps > 50 ? 'text-emerald-600' : product.nps > 30 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {product.nps}
                </span>
              </div>
              
              <div className="pt-2 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Improvement</span>
                  <span className={`text-xs font-bold ${
                    product.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
                  }`}>
                    {product.improvement}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Analysis & Feature Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Competitive Benchmarking</h3>
                <p className="text-sm text-gray-600">{competitorSet} • {currentPeriod}</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>vs Top 3 Competitors</p>
              <p>{marketRegion}</p>
            </div>
          </div>
          <div className="space-y-4">
            {competitorAnalysis.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">{item.feature}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold text-blue-600">{item.yourScore}</span>
                    <span className="text-xs text-gray-400">vs</span>
                    <span className="text-xs text-gray-500">{Math.max(item.competitor1, item.competitor2, item.competitor3)}</span>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-blue-600 rounded-full" 
                      style={{ width: `${item.yourScore}%` }}
                    ></div>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 bg-gray-400 rounded-full" 
                      style={{ width: `${Math.max(item.competitor1, item.competitor2, item.competitor3)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Star className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Feature Impact Analysis</h3>
                <p className="text-sm text-gray-600">Guest Satisfaction vs Adoption • {currentPeriod}</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>ROI Analysis</p>
              <p>{analysisScope}</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ScatterChart data={featureImpact}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                dataKey="adoption" 
                name="Adoption Rate" 
                unit="%" 
                domain={[0, 100]}
              />
              <YAxis 
                type="number" 
                dataKey="satisfaction" 
                name="Satisfaction" 
                unit="%" 
                domain={[80, 100]}
              />
              <Tooltip 
                cursor={{ strokeDasharray: '3 3' }}
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    const data = payload[0].payload
                    return (
                      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
                        <p className="font-semibold">{data.feature}</p>
                        <p className="text-sm text-gray-600">Satisfaction: {data.satisfaction}%</p>
                        <p className="text-sm text-gray-600">Adoption: {data.adoption}%</p>
                        <p className="text-sm text-gray-600">ROI: {data.roi}%</p>
                      </div>
                    )
                  }
                  return null
                }}
              />
              <Scatter dataKey="roi" fill="#8B5CF6" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Feedback Evolution & Product Lifecycle */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Customer Feedback Evolution</h3>
                <p className="text-sm text-gray-600">Sentiment Analysis • Jan-Jun 2024</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>8.2K Reviews</p>
              <p>{analysisScope}</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={feedbackEvolution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="positive" 
                stackId="1" 
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.6}
                name="Positive"
              />
              <Area 
                type="monotone" 
                dataKey="neutral" 
                stackId="1" 
                stroke="#F59E0B" 
                fill="#F59E0B" 
                fillOpacity={0.6}
                name="Neutral"
              />
              <Area 
                type="monotone" 
                dataKey="negative" 
                stackId="1" 
                stroke="#EF4444" 
                fill="#EF4444" 
                fillOpacity={0.6}
                name="Negative"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <TrendingUp className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Product Portfolio Lifecycle</h3>
                <p className="text-sm text-gray-600">Revenue Distribution • {currentPeriod}</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>147 Products</p>
              <p>{analysisScope}</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={productLifecycle}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="stage" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="products" fill="#3B82F6" name="Number of Products" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="revenue" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Revenue ($)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Customer Journey Pain Points */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-red-100 rounded-lg">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Customer Journey Pain Points</h3>
              <p className="text-sm text-gray-600">Experience Analysis • {currentPeriod}</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Guest Experience Journey</p>
            <p>{marketRegion}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {painPoints.map((point, index) => (
            <div key={index} className="relative p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-900">{point.stage}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(point.severity)}`}>
                  {point.severity}
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-3">{point.issue}</p>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Impact Score</span>
                  <span className="text-sm font-bold text-red-600">{point.impact}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 bg-red-500 rounded-full" 
                    style={{ width: `${point.impact}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold">Product Optimization Roadmap</h3>
            <p className="text-blue-100 mt-1">{analysisScope} Strategic Priorities • {currentPeriod}</p>
          </div>
          <div className="text-right text-blue-200 text-sm">
            <p>{marketRegion}</p>
            <p>Implementation Timeline: Next 12 months</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6" />
              <span className="font-semibold">Quick Wins</span>
            </div>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Improve mobile app UX</li>
              <li>• Reduce check-in wait times</li>
              <li>• Standardize service quality</li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Target className="w-6 h-6" />
              <span className="font-semibold">Focus Areas</span>
            </div>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Enhance digital experience</li>
              <li>• Expand wellness programs</li>
              <li>• Personalization engine</li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Lightbulb className="w-6 h-6" />
              <span className="font-semibold">Innovation</span>
            </div>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Smart room technology</li>
              <li>• AI-powered concierge</li>
              <li>• Sustainable initiatives</li>
            </ul>
          </div>
          
          <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
            <div className="flex items-center space-x-3 mb-4">
              <Award className="w-6 h-6" />
              <span className="font-semibold">Long-term Goals</span>
            </div>
            <ul className="space-y-2 text-sm opacity-90">
              <li>• Market leadership in luxury</li>
              <li>• NPS score above 70</li>
              <li>• Digital transformation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInsights 