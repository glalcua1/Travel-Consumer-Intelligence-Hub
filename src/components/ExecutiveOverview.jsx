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
  Database,
  PlayCircle,
  X,
  CheckCircle,
  Clock,
  DollarSign,
  Settings,
  Brain,
  Activity,
  ExternalLink
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
  const [showDataSources, setShowDataSources] = useState(false)
  const [showActionPlanner, setShowActionPlanner] = useState(false)
  const [selectedMetric, setSelectedMetric] = useState(null)
  
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

  // Revenue intelligence performance
  const revenueIntelligenceData = [
    { 
      metric: 'Behavioral Pricing Intelligence',
      score: 94,
      growth: '+22%',
      color: 'from-emerald-500 to-green-600',
      icon: TrendingUp,
      insights: 'AI-driven pricing optimization yielding 18% revenue uplift',
      description: 'Advanced behavioral analysis driving dynamic pricing strategies',
      methodology: 'Price elasticity modeling (40%) + Behavioral trend analysis (35%) + Revenue impact (25%)',
      actionItems: [
        {
          action: 'Implement Dynamic Pricing Engine',
          timeline: '2-4 weeks',
          impact: '$380K annual revenue uplift',
          urgency: 'High',
          steps: [
            'Deploy real-time competitor price monitoring',
            'Configure demand-based pricing rules',
            'Set up A/B testing for price sensitivity',
            'Train revenue team on new pricing tools'
          ]
        },
        {
          action: 'Launch Behavioral Segmentation',
          timeline: '3-6 weeks', 
          impact: '$250K revenue increase',
          urgency: 'High',
          steps: [
            'Analyze booking patterns by customer type',
            'Create price-sensitive customer segments',
            'Develop targeted pricing strategies',
            'Implement segment-based rate optimization'
          ]
        },
        {
          action: 'Optimize Weekend vs Weekday Pricing',
          timeline: '1-2 weeks',
          impact: '$120K revenue boost',
          urgency: 'Medium',
          steps: [
            'Analyze demand patterns by day of week',
            'Adjust weekend premium pricing',
            'Implement day-of-week pricing rules',
            'Monitor booking velocity changes'
          ]
        }
      ]
    },
    { 
      metric: 'Market Position Intelligence',
      score: 91,
      growth: '+15%',
      color: 'from-blue-500 to-indigo-600',
      icon: Target,
      insights: 'Premium positioning capturing 34% market share',
      description: 'Competitive landscape analysis for pricing advantage',
      methodology: 'Competitive pricing analysis (45%) + Market share tracking (30%) + Positioning effectiveness (25%)',
      actionItems: [
        {
          action: 'Competitive Price Monitoring',
          timeline: '1-2 weeks',
          impact: '$200K revenue protection',
          urgency: 'High',
          steps: [
            'Set up automated competitor rate alerts',
            'Define competitive response strategies',
            'Create pricing war protocols',
            'Implement rapid pricing adjustments'
          ]
        },
        {
          action: 'Premium Value Communication',
          timeline: '4-6 weeks',
          impact: '$350K incremental revenue',
          urgency: 'Medium',
          steps: [
            'Audit current value proposition messaging',
            'Develop premium amenity packages',
            'Update booking platform messaging',
            'Train sales team on value selling'
          ]
        }
      ]
    },
    { 
      metric: 'Channel Revenue Optimization',
      score: 87,
      growth: '+18%',
      color: 'from-purple-500 to-violet-600',
      icon: Network,
      insights: 'Direct booking revenue up 28% reducing OTA dependency',
      description: 'Distribution channel performance and commission optimization',
      methodology: 'Channel profitability (40%) + Direct booking conversion (35%) + Commission efficiency (25%)',
      actionItems: [
        {
          action: 'Boost Direct Bookings',
          timeline: '2-3 weeks',
          impact: '$290K commission savings',
          urgency: 'High',
          steps: [
            'Launch "Book Direct" incentive program',
            'Optimize website booking experience',
            'Implement rate parity monitoring',
            'Create loyalty member exclusive rates'
          ]
        },
        {
          action: 'OTA Commission Negotiation',
          timeline: '6-8 weeks',
          impact: '$180K annual cost reduction',
          urgency: 'Medium',
          steps: [
            'Analyze current OTA performance metrics',
            'Prepare negotiation data package',
            'Schedule quarterly business reviews',
            'Negotiate reduced commission rates'
          ]
        }
      ]
    },
    { 
      metric: 'Premium Segment Capture',
      score: 89,
      growth: '+20%',
      color: 'from-rose-500 to-pink-600',
      icon: Star,
      insights: 'Luxury traveler segment driving 42% margin premium',
      description: 'High-value customer segment identification and revenue capture',
      methodology: 'Premium pricing realization (45%) + Customer lifetime value (30%) + Segment growth (25%)',
      actionItems: [
        {
          action: 'VIP Guest Experience Program',
          timeline: '3-4 weeks',
          impact: '$420K premium revenue',
          urgency: 'High',
          steps: [
            'Design exclusive VIP amenities package',
            'Train staff on premium service protocols',
            'Create personalized guest recognition system',
            'Launch platinum tier loyalty program'
          ]
        },
        {
          action: 'Luxury Package Bundling',
          timeline: '4-6 weeks',
          impact: '$310K incremental revenue',
          urgency: 'Medium',
          steps: [
            'Create premium experience packages',
            'Partner with luxury service providers',
            'Design exclusive booking portal',
            'Implement premium pricing strategy'
          ]
        }
      ]
    }
  ]

  // Revenue performance intelligence
  const revenuePerformance = [
    { month: 'Jul', adr: 485, revpar: 378, occupancy: 78, marginOptimization: 85 },
    { month: 'Aug', adr: 495, revpar: 392, occupancy: 79, marginOptimization: 87 },
    { month: 'Sep', adr: 505, revpar: 404, occupancy: 80, marginOptimization: 89 },
    { month: 'Oct', adr: 520, revpar: 421, occupancy: 81, marginOptimization: 91 },
    { month: 'Nov', adr: 535, revpar: 440, occupancy: 82, marginOptimization: 93 },
    { month: 'Dec', adr: 550, revpar: 462, occupancy: 84, marginOptimization: 95 },
  ]

  // High-value customer segments by spending behavior
  const revenueSegments = [
    { name: 'Luxury Spenders', value: 22, color: '#8B5CF6', avgSpend: 1850, willingness: 95 },
    { name: 'Experience Premium', value: 35, color: '#3B82F6', avgSpend: 1240, willingness: 82 },
    { name: 'Sustainable Premium', value: 15, color: '#10B981', avgSpend: 980, willingness: 76 },
    { name: 'Value Optimizers', value: 28, color: '#F59E0B', avgSpend: 620, willingness: 45 },
  ]

  // Revenue optimization opportunities
  const revenueOpportunities = [
    { opportunity: 'Dynamic Pricing', current: 75, potential: 95, uplift: 18 },
    { opportunity: 'Premium Upselling', current: 68, potential: 88, uplift: 25 },
    { opportunity: 'Package Bundling', current: 82, potential: 94, uplift: 15 },
    { opportunity: 'Behavioral Targeting', current: 71, potential: 89, uplift: 22 },
    { opportunity: 'Seasonal Optimization', current: 79, potential: 92, uplift: 20 },
    { opportunity: 'Channel Mix Optimization', current: 74, potential: 86, uplift: 16 },
  ]

  // Revenue impact by intelligence area
  const revenueImpact = [
    { service: 'Behavioral Pricing', impact: 1850000, change: 22 },
    { service: 'Market Positioning', impact: 1340000, change: 18 },
    { service: 'Channel Optimization', impact: 1120000, change: 15 },
    { service: 'Premium Segmentation', impact: 1650000, change: 20 },
  ]

  // Revenue opportunity alerts
  const revenueAlerts = [
    {
      trend: 'Solo Female Travel Premium',
      urgency: 'High',
      growth: '+124%',
      action: 'Premium solo packages with 35% markup',
      revenueUplift: '+$285K',
      timeline: '30 days'
    },
    {
      trend: 'Bleisure Package Bundling',
      urgency: 'High',
      growth: '+89%',
      action: 'Business-leisure bundles at 28% premium',
      revenueUplift: '+$420K',
      timeline: '45 days'
    },
    {
      trend: 'Sustainable Travel Premium',
      urgency: 'Medium',
      growth: '+156%',
      action: 'Eco-luxury positioning with 22% premium',
      revenueUplift: '+$340K',
      timeline: '60 days'
    }
  ]

  const kpiData = [
    {
      title: 'Revenue Intelligence Score',
      value: 92,
      change: '+18%',
      changeType: 'positive',
      icon: BarChart3,
      format: 'number',
      description: 'Composite score measuring pricing intelligence, revenue optimization, and behavioral analytics accuracy',
      methodology: 'Weighted average of: Pricing Accuracy (35%), Revenue Impact (30%), Behavioral Prediction (25%), Implementation Success (10%)',
      dataSources: 'Revenue data, booking analytics, pricing models, competitive intelligence, behavioral tracking'
    },
    {
      title: 'Market Revenue Position',
      value: 94,
      change: '+15%',
      changeType: 'positive',
      icon: TrendingUp,
      format: 'number',
      description: 'Competitive revenue position across ADR, RevPAR, and market share in the premium travel market',
      methodology: 'Composite of: ADR Performance (40%), RevPAR Growth (35%), Market Share (25%)',
      dataSources: 'Revenue management systems, competitive pricing data, industry benchmarks, STR reports'
    },
    {
      title: 'Premium Pricing Realization',
      value: 89,
      change: '+22%',
      changeType: 'positive',
      icon: Target,
      format: 'number',
      description: 'Ability to capture premium pricing based on demand patterns and willingness to pay',
      methodology: 'Weighted scoring of: Premium pricing success (40%), Demand elasticity optimization (30%), Yield management (30%)',
      dataSources: 'Dynamic pricing systems, demand forecasting, competitor rate shopping, booking pattern analysis'
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

  // Revenue Action Plan Generator
  const generateRevenueActionPlan = (metric) => {
    return {
      title: `Action Plan: ${metric.metric}`,
      currentScore: metric.score,
      growthPotential: '+35%',
      timeframe: '90 days',
      totalImpact: metric.actionItems.reduce((sum, item) => {
        const impact = parseInt(item.impact.replace(/[^\d]/g, ''))
        return sum + impact
      }, 0),
      actions: metric.actionItems,
      implementation: {
        week1: 'Setup and team briefing',
        week2: 'System configuration and testing',
        week3: 'Pilot launch with limited inventory',
        week4: 'Full rollout and monitoring'
      },
      kpis: [
        'Revenue per available room (RevPAR)',
        'Average daily rate (ADR) improvement', 
        'Booking conversion rate increase',
        'Customer acquisition cost reduction'
      ]
    }
  }

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
              <p className="text-lg text-blue-200 mb-4">
                {marketScope} • {currentPeriod} Performance Analysis
              </p>
              <div className="flex items-center space-x-3 mb-6">
                <button
                  onClick={() => setShowDataSources(true)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 border border-white/20"
                >
                  <Database className="w-4 h-4" />
                  <span>Data Sources & KPIs</span>
                </button>
                <div className="flex items-center space-x-1 text-blue-200 text-sm">
                  <Database className="w-3 h-3" />
                  <span>STR • Tourism Board • Financial Systems</span>
                </div>
              </div>
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



      {/* Data Sources & KPI Methodology Drawer */}
      {showDataSources && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setShowDataSources(false)}></div>
          <div className={`fixed right-0 top-0 h-full w-full max-w-4xl bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            showDataSources ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-emerald-50">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Sources & KPI Methodology</h2>
                  <p className="text-gray-600">Comprehensive data sourcing and calculation transparency</p>
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
                        <li>• Hotel performance benchmarking</li>
                        <li>• Market penetration analysis</li>
                        <li>• Competitive set performance</li>
                        <li>• RevPAR and occupancy trends</li>
                        <li>• Regional market intelligence</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Financial Systems
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Real-time revenue reporting</li>
                        <li>• Budget vs. actual performance</li>
                        <li>• Channel-specific profitability</li>
                        <li>• Profit margin analysis</li>
                        <li>• Cost optimization tracking</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <Globe className="w-4 h-4 mr-2" />
                        Dubai Tourism Board
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Official visitor arrival statistics</li>
                        <li>• Country-wise source market data</li>
                        <li>• Tourism economic impact reports</li>
                        <li>• Hotel classification and inventory</li>
                        <li>• Event and conference data</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Market Intelligence
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Competitor pricing analysis</li>
                        <li>• Market share tracking</li>
                        <li>• Economic indicators</li>
                        <li>• Industry benchmarks</li>
                        <li>• Seasonal trend analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Executive KPI Calculation Methodologies */}
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calculator className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">Executive KPI Calculation Methodologies</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Revenue Intelligence Performance</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Performance Scores:</strong> Weighted composite of pricing optimization (30%), market positioning (25%), channel performance (25%), segment capture (20%)</p>
                        <p><strong>Benchmarking:</strong> STR competitive set data with market penetration analysis</p>
                        <p><strong>Growth Rates:</strong> YoY revenue impact from intelligence-driven decisions</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Revenue Performance Trends</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>RevPAR Calculation:</strong> Total room revenue ÷ total available room nights</p>
                        <p><strong>ADR Analysis:</strong> Total room revenue ÷ total rooms sold</p>
                        <p><strong>Margin Optimization:</strong> (Current margin - baseline) / baseline × 100</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Revenue Opportunities</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Market Potential:</strong> Total addressable market × penetration opportunity</p>
                        <p><strong>Current Performance:</strong> Actual revenue ÷ potential revenue × 100</p>
                        <p><strong>Gap Analysis:</strong> Opportunity radar maps show current vs. potential across dimensions</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Intelligence Accuracy</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Prediction Accuracy:</strong> (Predicted outcomes - actual outcomes) / predicted outcomes</p>
                        <p><strong>Revenue Impact Attribution:</strong> Revenue directly linked to intelligence-driven decisions</p>
                        <p><strong>Consumer Insights Volume:</strong> Total analyzed data points across all channels</p>
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
                        <li>• Revenue management systems</li>
                        <li>• Booking velocity tracking</li>
                        <li>• Competitor rate monitoring</li>
                        <li>• Market demand signals</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Daily (6 AM GST)</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• STR performance data</li>
                        <li>• Tourism board statistics</li>
                        <li>• Financial system reports</li>
                        <li>• Market intelligence updates</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Weekly/Monthly</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Executive performance reviews</li>
                        <li>• Strategic market analysis</li>
                        <li>• ROI validation studies</li>
                        <li>• Competitive positioning audits</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Executive Data Validation & Quality Assurance
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-800">
                      <div>
                        <p><strong>Revenue Accuracy:</strong> ±2% variance tolerance for all financial metrics</p>
                        <p><strong>Statistical Confidence:</strong> 95% confidence intervals for all projections</p>
                      </div>
                      <div>
                        <p><strong>Multi-source Validation:</strong> Critical metrics verified across 3+ data sources</p>
                        <p><strong>Executive Reporting:</strong> Daily automated validation with exception alerts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Revenue Intelligence Performance - Enhanced */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-900">Revenue Intelligence Performance</h2>
            <div className="group relative">
              <HelpCircle className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-help" />
              <div className="absolute left-0 top-8 w-80 p-4 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <p className="text-sm text-gray-700 mb-3">
                  These scores measure the effectiveness of our revenue optimization intelligence across pricing, positioning, channels, and segmentation. Click any metric for detailed action plans.
                </p>
                <p className="text-xs text-gray-500">
                  Scores range from 0-100, with 90+ indicating excellence and 80+ showing strong revenue performance.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Revenue Impact vs. Market Benchmarks</p>
              <p className="text-xs text-gray-500">{currentPeriod} Performance Analysis</p>
            </div>
            <button
              onClick={() => setShowActionPlanner(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
            >
              <Brain className="w-4 h-4" />
              <span>Get Action Plan</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueIntelligenceData.map((service, index) => {
          const Icon = service.icon
          return (
            <div key={index} className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden cursor-pointer"
                 onClick={() => {
                   setSelectedMetric(service)
                   setShowActionPlanner(true)
                 }}>
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
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.metric}</h3>
                <p className="text-sm text-gray-600 mb-4">{service.insights}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-emerald-600">{service.growth}</span>
                  <div className="flex items-center space-x-2">
                    <PlayCircle className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-blue-600">Click for Actions</span>
                  </div>
                </div>
                
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${service.color}`}
                    style={{ width: `${service.score}%` }}
                  ></div>
                </div>

                {/* Action Preview */}
                <div className="bg-gray-50 rounded-lg p-3 text-xs">
                  <p className="font-semibold text-gray-800 mb-1">Next Actions:</p>
                  <p className="text-gray-600">
                    {service.actionItems.length} immediate opportunities • 
                    Potential impact: ${service.actionItems.reduce((sum, item) => {
                      const impact = parseInt(item.impact.replace(/[^\d]/g, ''))
                      return sum + impact
                    }, 0)}K
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Action Plan Drawer */}
      {showActionPlanner && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full shadow-2xl">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold mb-2">
                    {selectedMetric ? `Revenue Action Plan: ${selectedMetric.metric}` : 'Revenue Intelligence Action Plans'}
                  </h2>
                  <p className="text-blue-100">
                    Immediate actions to maximize revenue performance
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowActionPlanner(false)
                    setSelectedMetric(null)
                  }}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {selectedMetric ? (
                <div className="space-y-6">
                  {/* Metric Overview */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-600">{selectedMetric.score}/100</p>
                        <p className="text-sm text-gray-600">Current Score</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-emerald-600">{generateRevenueActionPlan(selectedMetric).growthPotential}</p>
                        <p className="text-sm text-gray-600">Growth Potential</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-purple-600">${generateRevenueActionPlan(selectedMetric).totalImpact}K</p>
                        <p className="text-sm text-gray-600">Revenue Impact</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-orange-600">{generateRevenueActionPlan(selectedMetric).timeframe}</p>
                        <p className="text-sm text-gray-600">Timeframe</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Items */}
                  <div className="space-y-4">
                    {selectedMetric.actionItems.map((action, index) => (
                      <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{action.action}</h3>
                            <div className="flex items-center space-x-4 text-sm">
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4 text-blue-600" />
                                <span className="text-gray-600">{action.timeline}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <DollarSign className="w-4 h-4 text-emerald-600" />
                                <span className="font-semibold text-emerald-600">{action.impact}</span>
                              </div>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            action.urgency === 'High' 
                              ? 'bg-red-100 text-red-800' 
                              : action.urgency === 'Medium'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-green-100 text-green-800'
                          }`}>
                            {action.urgency} Priority
                          </span>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Settings className="w-5 h-5 text-gray-600 mr-2" />
                            Implementation Steps
                          </h4>
                          <ol className="space-y-2">
                            {action.steps.map((step, stepIndex) => (
                              <li key={stepIndex} className="flex items-start space-x-3">
                                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                                  {stepIndex + 1}
                                </span>
                                <span className="text-gray-700">{step}</span>
                              </li>
                            ))}
                          </ol>
                          
                          {/* RateShopping CTA for Dynamic Pricing Engine */}
                          {action.action === 'Implement Dynamic Pricing Engine' && (
                            <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
                              <div className="flex items-center justify-between">
                                <div>
                                  <h5 className="font-semibold text-gray-900 mb-1">Get Started with RateShopping</h5>
                                  <p className="text-sm text-gray-600">Access our advanced pricing intelligence platform to implement dynamic pricing strategies</p>
                                </div>
                                <a
                                  href="https://navigator-react-ko026iel7-gauravlal-6528s-projects.vercel.app/"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
                                >
                                  <span>Launch RateShopping</span>
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Success Metrics */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Activity className="w-5 h-5 text-purple-600 mr-2" />
                      Key Success Metrics to Track
                    </h4>
                    <div className="grid grid-cols-2 gap-4">
                      {generateRevenueActionPlan(selectedMetric).kpis.map((kpi, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-emerald-600" />
                          <span className="text-gray-700">{kpi}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="text-center py-8">
                    <Brain className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Revenue Intelligence Action Center</h3>
                    <p className="text-gray-600 mb-6">Select a revenue intelligence metric above to see detailed action plans</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {revenueIntelligenceData.map((metric, index) => (
                      <div key={index} 
                           className="p-4 border border-gray-200 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
                           onClick={() => setSelectedMetric(metric)}>
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${metric.color}`}>
                            <metric.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{metric.metric}</h4>
                            <p className="text-sm text-gray-600">{metric.actionItems.length} action items available</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}


      {/* Revenue Optimization Opportunities */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Target className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Revenue Optimization Opportunities</h3>
              <p className="text-sm text-gray-600">{currentPeriod} Assessment</p>
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart data={revenueOpportunities}>
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

      {/* Revenue Opportunity Alerts */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Revenue Opportunity Alerts</h3>
              <p className="text-sm text-gray-600">{marketRegion} • {currentPeriod} Intelligence</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Implementation Timeline</p>
            <p>Next 30-60 days</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {revenueAlerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-xl border-2 ${getUrgencyColor(alert.urgency)}`}>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold">{alert.trend}</h4>
                <span className="text-lg font-bold text-emerald-600">{alert.growth}</span>
              </div>
              <p className="text-sm mb-3">{alert.action}</p>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-green-600">{alert.revenueUplift}</span>
                <span className="font-semibold">Priority: {alert.urgency}</span>
              </div>
              <div className="text-xs text-gray-600">
                <span>Timeline: {alert.timeline}</span>
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