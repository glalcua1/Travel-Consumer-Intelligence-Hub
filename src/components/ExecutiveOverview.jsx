import { 
  BarChart3,
  TrendingUp, 
  Users, 
  Target,
  Heart,
  Lightbulb,
  Network,
  Globe,
  Star,
  ArrowRight,
  Zap,
  Award,
  MapPin,
  Calendar,
  TrendingDown,
  Info,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Calculator,
  Database
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts'
import KPICard from './KPICard'
import { useState } from 'react'

const ExecutiveOverview = () => {
  const [showMethodology, setShowMethodology] = useState(false)
  
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

  // Service principles performance
  const servicePrinciplesData = [
    { 
      principle: 'Consumer Trends',
      score: 92,
      growth: '+18%',
      color: 'from-emerald-500 to-green-600',
      icon: TrendingUp,
      insights: 'Sustainability trend driving 156% growth',
      description: 'Measures effectiveness in identifying and leveraging emerging consumer behaviors',
      methodology: 'Trend prediction accuracy (40%) + Implementation speed (30%) + Revenue impact (30%)'
    },
    { 
      principle: 'Product Insights',
      score: 87,
      growth: '+12%',
      color: 'from-blue-500 to-indigo-600',
      icon: Lightbulb,
      insights: 'Smart features showing highest ROI',
      description: 'Evaluates ability to derive actionable product improvements from consumer data',
      methodology: 'Feature adoption rate (35%) + Customer satisfaction (30%) + Revenue per feature (35%)'
    },
    { 
      principle: 'Channel Evolution',
      score: 78,
      growth: '+8%',
      color: 'from-purple-500 to-violet-600',
      icon: Network,
      insights: 'Omni-channel adoption accelerating',
      description: 'Assesses digital transformation and channel optimization effectiveness',
      methodology: 'Channel integration (40%) + Conversion rates (30%) + Customer journey optimization (30%)'
    },
    { 
      principle: 'Brand Affinity',
      score: 85,
      growth: '+15%',
      color: 'from-rose-500 to-pink-600',
      icon: Heart,
      insights: 'Community engagement up 67%',
      description: 'Measures brand loyalty and emotional connection building capabilities',
      methodology: 'Engagement rate (35%) + Retention metrics (30%) + Advocacy score (35%)'
    }
  ]

  // Market intelligence overview
  const marketIntelligence = [
    { month: 'Jul', consumerSentiment: 78, marketShare: 34, brandAffinity: 82, competition: 65 },
    { month: 'Aug', consumerSentiment: 82, marketShare: 35, brandAffinity: 84, competition: 68 },
    { month: 'Sep', consumerSentiment: 79, marketShare: 36, brandAffinity: 86, competition: 71 },
    { month: 'Oct', consumerSentiment: 85, marketShare: 37, brandAffinity: 89, competition: 74 },
    { month: 'Nov', consumerSentiment: 88, marketShare: 38, brandAffinity: 91, competition: 76 },
    { month: 'Dec', consumerSentiment: 91, marketShare: 39, brandAffinity: 94, competition: 79 },
  ]

  // Consumer behavior segments
  const consumerSegments = [
    { name: 'Experience Seekers', value: 35, color: '#3B82F6', revenue: 4.2 },
    { name: 'Value Conscious', value: 28, color: '#10B981', revenue: 2.8 },
    { name: 'Luxury Travelers', value: 22, color: '#8B5CF6', revenue: 6.5 },
    { name: 'Eco-Conscious', value: 15, color: '#F59E0B', revenue: 3.1 },
  ]

  // Strategic opportunities radar
  const opportunities = [
    { opportunity: 'Sustainability', current: 75, potential: 95 },
    { opportunity: 'Digital Experience', current: 82, potential: 94 },
    { opportunity: 'Personalization', current: 68, potential: 88 },
    { opportunity: 'Community', current: 71, potential: 89 },
    { opportunity: 'Innovation', current: 79, potential: 92 },
    { opportunity: 'Partnerships', current: 74, potential: 86 },
  ]

  // Revenue impact by service
  const revenueImpact = [
    { service: 'Consumer Trends', impact: 1250000, change: 18 },
    { service: 'Product Insights', impact: 890000, change: 12 },
    { service: 'Channel Strategy', impact: 675000, change: 8 },
    { service: 'Brand Affinity', impact: 945000, change: 15 },
  ]

  // Emerging trend alerts
  const trendAlerts = [
    {
      trend: 'Solo Female Travel',
      urgency: 'High',
      growth: '+124%',
      action: 'Develop safety-focused packages',
      timeline: '30 days'
    },
    {
      trend: 'Bleisure Travel',
      urgency: 'High',
      growth: '+89%',
      action: 'Create hybrid business-leisure offerings',
      timeline: '45 days'
    },
    {
      trend: 'Digital Detox',
      urgency: 'Medium',
      growth: '+67%',
      action: 'Launch tech-free vacation packages',
      timeline: '60 days'
    }
  ]

  const kpiData = [
    {
      title: 'Overall Consumer Intelligence Score',
      value: 87,
      change: '+12%',
      changeType: 'positive',
      icon: BarChart3,
      format: 'number',
      description: 'Composite score measuring data quality, insights accuracy, and strategic relevance',
      methodology: 'Weighted average of: Data Coverage (25%), Insight Accuracy (30%), Actionability (25%), Timeliness (20%)',
      dataSources: 'Social media analytics, booking data, guest feedback, market research surveys'
    },
    {
      title: 'Market Leadership Index',
      value: 94,
      change: '+8%',
      changeType: 'positive',
      icon: TrendingUp,
      format: 'number',
      description: 'Measures competitive position across key performance indicators in the premium travel market',
      methodology: 'Composite of: Market Share (35%), Brand Recognition (25%), Revenue Growth (25%), Innovation Score (15%)',
      dataSources: 'Industry reports, competitor analysis, brand tracking studies, financial performance data'
    },
    {
      title: 'Brand Affinity Score',
      value: 89,
      change: '+15%',
      changeType: 'positive',
      icon: Heart,
      format: 'number',
      description: 'Quantifies emotional connection and loyalty levels among target consumer segments',
      methodology: 'Weighted scoring of: Social sentiment (30%), Repeat booking rate (25%), NPS score (25%), Community engagement (20%)',
      dataSources: 'Social listening tools, customer surveys, booking system data, loyalty program analytics'
    },
    {
      title: 'Innovation Readiness',
      value: 82,
      change: '+11%',
      changeType: 'positive',
      icon: Zap,
      format: 'number',
      description: 'Assesses organizational capability to adapt to emerging trends and consumer preferences',
      methodology: 'Evaluation of: Technology adoption (30%), Trend response speed (25%), R&D investment (25%), Staff training (20%)',
      dataSources: 'Internal systems audit, trend implementation tracking, investment data, training records'
    }
  ]

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200'
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'Low': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  // Custom tooltip component for better styling
  const CustomTooltip = ({ active, payload, label, type = 'default' }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-200/60">
          <p className="font-semibold text-gray-900 mb-2">{label}</p>
          <div className="space-y-1">
            {payload.map((entry, index) => (
              <div key={index} className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: entry.color }}
                  />
                  <span className="text-sm font-medium text-gray-700">{entry.name}</span>
                </div>
                <span className="text-sm font-bold text-gray-900">
                  {type === 'currency' ? `$${entry.value}M` : `${entry.value}${type === 'percentage' ? '%' : ''}`}
                </span>
              </div>
            ))}
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <div className="space-y-8 p-2">
      {/* Market Context & Time Period Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
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
                <Calendar className="w-5 h-5 text-purple-600" />
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
      </div>

      {/* Hero Header */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-3">
                Travel Consumer Intelligence Hub
              </h1>
              <p className="text-xl text-blue-100 mb-2">
                Transforming consumer insights into competitive advantage
              </p>
              <p className="text-lg text-blue-200 mb-6">
                {marketScope} • {currentPeriod} Performance Analysis
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center group relative">
                  <p className="text-3xl font-bold text-emerald-400">94.2%</p>
                  <p className="text-sm text-blue-200">Intelligence Accuracy</p>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <p className="text-xs text-gray-700">Prediction accuracy vs. actual market outcomes over last 12 months</p>
                  </div>
                </div>
                <div className="text-center group relative">
                  <p className="text-3xl font-bold text-blue-400">$3.76M</p>
                  <p className="text-sm text-blue-200">Revenue Impact</p>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <p className="text-xs text-gray-700">Total revenue attributed to intelligence-driven decisions in {currentPeriod}</p>
                  </div>
                </div>
                <div className="text-center group relative">
                  <p className="text-3xl font-bold text-purple-400">847K</p>
                  <p className="text-sm text-blue-200">Consumer Insights</p>
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <p className="text-xs text-gray-700">Number of consumer data points analyzed across all channels</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <Globe className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      {/* KPI Methodology Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div 
          className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setShowMethodology(!showMethodology)}
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Calculator className="w-5 h-5 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">How We Calculate Our KPIs</h3>
              <p className="text-sm text-gray-600">Transparent methodology and data sources for all metrics</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {showMethodology ? 'Hide Details' : 'Show Details'}
            </span>
            {showMethodology ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
        
        {showMethodology && (
          <div className="px-6 pb-6 border-t border-gray-100">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {kpiData.map((kpi, index) => {
                const Icon = kpi.icon
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-indigo-100 rounded-lg">
                        <Icon className="w-4 h-4 text-indigo-600" />
                      </div>
                      <h4 className="font-bold text-gray-900">{kpi.title}</h4>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">What it measures:</h5>
                        <p className="text-sm text-gray-600">{kpi.description}</p>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-semibold text-gray-700 mb-2">Calculation method:</h5>
                        <p className="text-sm text-gray-600">{kpi.methodology}</p>
                      </div>
                      
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Database className="w-4 h-4 text-gray-500" />
                          <h5 className="text-sm font-semibold text-gray-700">Data sources:</h5>
                        </div>
                        <p className="text-sm text-gray-600">{kpi.dataSources}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-blue-900 mb-2">Data Quality & Refresh Frequency</h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-blue-800">
                    <div>
                      <p className="font-medium">Real-time data (Updated every 15 minutes):</p>
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        <li>Social media sentiment</li>
                        <li>Website analytics</li>
                        <li>Booking system data</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Batch updates (Daily at 6 AM GST):</p>
                      <ul className="list-disc list-inside ml-2 space-y-1">
                        <li>Market research surveys</li>
                        <li>Competitor analysis</li>
                        <li>Financial performance data</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-blue-700">
                    All calculations use a 90-day rolling average to smooth seasonal variations while maintaining sensitivity to recent trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Service Principles Performance */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-900">Service Principles Performance</h2>
            <div className="group relative">
              <HelpCircle className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-help" />
              <div className="absolute left-0 top-8 w-80 p-4 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <p className="text-sm text-gray-700 mb-3">
                  These scores measure how effectively we deliver on our four core service principles, calculated using performance metrics specific to each area.
                </p>
                <p className="text-xs text-gray-500">
                  Scores range from 0-100, with 90+ indicating excellence and 70+ showing strong performance.
                </p>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Performance vs. Industry Benchmarks</p>
            <p className="text-xs text-gray-500">{currentPeriod} Assessment</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servicePrinciplesData.map((service, index) => {
          const Icon = service.icon
          return (
            <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right relative">
                    <span className="text-2xl font-bold text-gray-900">{service.score}</span>
                    <span className="text-sm text-gray-500">/100</span>
                    <div className="group/tooltip relative inline-block ml-2">
                      <HelpCircle className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-help" />
                      <div className="absolute right-0 top-6 w-72 p-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20">
                        <p className="text-sm font-semibold text-gray-900 mb-2">{service.description}</p>
                        <p className="text-xs text-gray-600 mb-2">
                          <strong>Calculation:</strong> {service.methodology}
                        </p>
                        <p className="text-xs text-gray-500">
                          Updated daily based on real-time performance data
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.principle}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.insights}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-emerald-600">{service.growth}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>
                
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${service.color}`}
                    style={{ width: `${service.score}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Market Intelligence & Consumer Segments */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BarChart3 className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Market Intelligence Overview</h3>
                <p className="text-sm text-gray-600">{marketRegion} • {currentPeriod}</p>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>6-Month Trend Analysis</p>
              <p>Jul - Dec 2024</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <ComposedChart data={marketIntelligence}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="consumerSentiment" 
                fill="#3B82F6" 
                fillOpacity={0.2}
                stroke="#3B82F6"
                strokeWidth={2}
                name="Consumer Sentiment"
              />
              <Line 
                type="monotone" 
                dataKey="brandAffinity" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Brand Affinity"
              />
              <Line 
                type="monotone" 
                dataKey="marketShare" 
                stroke="#8B5CF6" 
                strokeWidth={3}
                name="Market Share"
              />
              <Bar dataKey="competition" fill="#F59E0B" fillOpacity={0.6} name="Competitive Index" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Consumer Segments</h3>
                <p className="text-sm text-gray-600">{marketScope}</p>
              </div>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-help" />
                <div className="absolute left-0 top-6 w-72 p-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <p className="text-sm text-gray-700 mb-2">
                    Consumer segments based on behavior analysis, preferences, and spending patterns.
                  </p>
                  <p className="text-xs text-gray-500">
                    <strong>ARV:</strong> Average Revenue Value per customer segment over 12 months
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={consumerSegments}
                cx="50%"
                cy="50%"
                outerRadius={80}
                dataKey="value"
                label={false}
              >
                {consumerSegments.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-3">
            {consumerSegments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <span className="text-sm font-medium text-gray-700">{segment.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-gray-900">${segment.revenue}M</span>
                  <span className="text-xs text-gray-500 ml-1">ARV</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strategic Opportunities & Revenue Impact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <Target className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Strategic Opportunities</h3>
                <p className="text-sm text-gray-600">{currentPeriod} Assessment</p>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={opportunities}>
              <PolarGrid />
              <PolarAngleAxis dataKey="opportunity" />
              <PolarRadiusAxis angle={90} domain={[0, 100]} />
              <Radar 
                name="Current" 
                dataKey="current" 
                stroke="#8B5CF6" 
                fill="#8B5CF6" 
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Radar 
                name="Potential" 
                dataKey="potential" 
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <Award className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Revenue Impact by Service</h3>
                <p className="text-sm text-gray-600">{currentPeriod} Performance</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            {revenueImpact.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{item.service}</h4>
                  <span className="text-lg font-bold text-emerald-600">
                    ${(item.impact / 1000000).toFixed(2)}M
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="h-2 bg-emerald-500 rounded-full" 
                      style={{ width: `${(item.impact / 1250000) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600">+{item.change}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Emerging Trend Alerts */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Emerging Trend Alerts</h3>
              <p className="text-sm text-gray-600">{marketRegion} • {currentPeriod} Insights</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Action Required Timeline</p>
            <p>Next 30-60 days</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trendAlerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-xl border-2 ${getUrgencyColor(alert.urgency)}`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">{alert.trend}</h4>
                <span className="text-lg font-bold text-emerald-600">{alert.growth}</span>
              </div>
              <p className="text-sm mb-3">{alert.action}</p>
              <div className="flex items-center justify-between text-xs">
                <span>Timeline: {alert.timeline}</span>
                <span className="font-semibold">Priority: {alert.urgency}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Executive Summary */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Executive Strategic Summary</h3>
          <div className="text-right text-sm text-blue-100">
            <p>{marketScope}</p>
            <p>{currentPeriod} Strategic Priorities</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <TrendingUp className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-2">Consumer Trends</h4>
            <p className="text-sm opacity-90">
              Sustainability and solo travel driving major shifts. Immediate action required on eco-certifications.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <Lightbulb className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-2">Product Innovation</h4>
            <p className="text-sm opacity-90">
              Smart room technology and wellness programs showing highest ROI potential.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <Network className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-2">Channel Strategy</h4>
            <p className="text-sm opacity-90">
              Omni-channel integration accelerating. Focus on mobile and social commerce.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <Heart className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-2">Brand Affinity</h4>
            <p className="text-sm opacity-90">
              Community engagement up 67%. Leverage user-generated content for authentic marketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExecutiveOverview 