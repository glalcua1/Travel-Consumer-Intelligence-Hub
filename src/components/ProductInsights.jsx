import { useState } from 'react'
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
  Clock,
  Plane,
  Car,
  HelpCircle,
  Database,
  X,
  Globe,
  BarChart3,
  Calculator
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
  const [activeTab, setActiveTab] = useState('hotels')
  const [showActionPlan, setShowActionPlan] = useState(false)
  const [showDataSources, setShowDataSources] = useState(false)
  const [showProductDetails, setShowProductDetails] = useState(false)
  const [showLifecycleDetails, setShowLifecycleDetails] = useState(false)
  const [showChannelDetails, setShowChannelDetails] = useState(false)
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    type: '',
    location: '',
    size: ''
  })
  
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

  // Tab configurations
  const tabConfigs = {
    hotels: {
      analysisScope: "5-Star Hotel Category",
      competitorSet: "Luxury Hotel Brands",
      productCount: 25,
      categoryCount: 147,
      reviewCount: "8.2K"
    },
    airlines: {
      analysisScope: "Premium Airlines",
      competitorSet: "Full-Service Carriers",
      productCount: 12,
      categoryCount: 89,
      reviewCount: "15.7K"
    },
    carRentals: {
      analysisScope: "Luxury & Premium Fleet",
      competitorSet: "Premium Car Rental Brands",
      productCount: 18,
      categoryCount: 76,
      reviewCount: "6.4K"
    }
  }

  const currentConfig = tabConfigs[activeTab]

  // Product performance metrics by industry
  const productPerformanceData = {
    hotels: [
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
    ],
    airlines: [
      {
        product: 'First Class',
        satisfaction: 96,
        revenue: 4200000,
        occupancy: 78,
        nps: 82,
        trend: 'up',
        improvement: '+15%'
      },
      {
        product: 'Business Class',
        satisfaction: 91,
        revenue: 6800000,
        occupancy: 85,
        nps: 64,
        trend: 'up',
        improvement: '+22%'
      },
      {
        product: 'Premium Economy',
        satisfaction: 84,
        revenue: 3200000,
        occupancy: 92,
        nps: 42,
        trend: 'up',
        improvement: '+18%'
      },
      {
        product: 'Lounge Access',
        satisfaction: 88,
        revenue: 1850000,
        occupancy: 76,
        nps: 58,
        trend: 'up',
        improvement: '+11%'
      },
      {
        product: 'In-Flight Services',
        satisfaction: 86,
        revenue: 2400000,
        occupancy: 89,
        nps: 51,
        trend: 'down',
        improvement: '-2%'
      }
    ],
    carRentals: [
      {
        product: 'Luxury Fleet',
        satisfaction: 92,
        revenue: 1850000,
        occupancy: 72,
        nps: 74,
        trend: 'up',
        improvement: '+20%'
      },
      {
        product: 'Premium SUVs',
        satisfaction: 89,
        revenue: 2200000,
        occupancy: 84,
        nps: 61,
        trend: 'up',
        improvement: '+14%'
      },
      {
        product: 'Executive Sedans',
        satisfaction: 87,
        revenue: 1650000,
        occupancy: 79,
        nps: 55,
        trend: 'up',
        improvement: '+9%'
      },
      {
        product: 'Concierge Services',
        satisfaction: 93,
        revenue: 950000,
        occupancy: 68,
        nps: 78,
        trend: 'up',
        improvement: '+25%'
      },
      {
        product: 'Airport Transfers',
        satisfaction: 85,
        revenue: 1320000,
        occupancy: 91,
        nps: 48,
        trend: 'down',
        improvement: '-1%'
      }
    ]
  }
  
  const productPerformance = productPerformanceData[activeTab]







  // Product lifecycle data with specific products by industry
  const productLifecycleData = {
    hotels: {
      stages: [
        { stage: 'Introduction', products: 3, revenue: 125000 },
        { stage: 'Growth', products: 8, revenue: 485000 },
        { stage: 'Maturity', products: 12, revenue: 1250000 },
        { stage: 'Decline', products: 2, revenue: 85000 }
      ],
      productsByStage: {
        'Introduction': ['Smart Room Technology', 'Wellness Programs', 'Digital Concierge'],
        'Growth': ['Spa Services', 'Conference Facilities', 'Premium Dining', 'Rooftop Experience', 'Personal Butler Service', 'Fitness Center', 'Business Lounge', 'Kids Club'],
        'Maturity': ['Luxury Suites', 'Business Rooms', 'Standard Rooms', 'Room Service', 'Housekeeping', 'Valet Parking', 'Airport Shuttle', 'Laundry Service', 'Wi-Fi', 'Pool Access', 'Gym Access', 'Breakfast Service'],
        'Decline': ['Fax Services', 'DVD Library']
      }
    },
    airlines: {
      stages: [
        { stage: 'Introduction', products: 2, revenue: 95000 },
        { stage: 'Growth', products: 6, revenue: 680000 },
        { stage: 'Maturity', products: 8, revenue: 2100000 },
        { stage: 'Decline', products: 3, revenue: 145000 }
      ],
      productsByStage: {
        'Introduction': ['Premium Plus Seats', 'Sustainable Fuel Options'],
        'Growth': ['Business Class', 'Premium Economy', 'Lounge Access', 'Priority Boarding', 'Extra Legroom', 'In-Flight Wi-Fi'],
        'Maturity': ['First Class', 'Economy Class', 'In-Flight Meals', 'Entertainment System', 'Baggage Service', 'Check-in Service', 'Customer Support', 'Loyalty Program'],
        'Decline': ['Magazine Service', 'Physical Tickets', 'Meal Vouchers']
      }
    },
    carRentals: {
      stages: [
        { stage: 'Introduction', products: 3, revenue: 110000 },
        { stage: 'Growth', products: 5, revenue: 425000 },
        { stage: 'Maturity', products: 8, revenue: 980000 },
        { stage: 'Decline', products: 2, revenue: 75000 }
      ],
      productsByStage: {
        'Introduction': ['Electric Vehicle Fleet', 'Concierge Services', 'Smart Car Features'],
        'Growth': ['Luxury Fleet', 'Premium SUVs', 'GPS Navigation', 'One-Click Booking', 'Premium Insurance'],
        'Maturity': ['Executive Sedans', 'Compact Cars', 'Standard Insurance', 'Airport Pickup', 'Basic Support', '24/7 Roadside', 'Fuel Service', 'Vehicle Cleaning'],
        'Decline': ['Physical Maps', 'Manual Booking']
      }
    }
  }
  
  const productLifecycle = productLifecycleData[activeTab].stages
  const productsByStage = productLifecycleData[activeTab].productsByStage

  // Business database for autocomplete
  const businessDatabase = {
    hotels: [
      'Grand Hyatt Dubai', 'Park Hyatt Dubai', 'Hyatt Regency Dubai', 'Atlantis The Palm Dubai', 'Burj Al Arab Jumeirah', 
      'Emirates Palace Abu Dhabi', 'Four Seasons Resort Dubai', 'Jumeirah Beach Hotel', 'Mandarin Oriental Jumeira', 
      'One&Only Royal Mirage', 'Raffles Dubai', 'Shangri La Hotel Dubai', 'The Ritz-Carlton Dubai', 'W Dubai The Palm',
      'Conrad Dubai', 'JW Marriott Marquis Dubai', 'Fairmont Dubai', 'InterContinental Dubai Festival City'
    ],
    airlines: [
      'Emirates Airlines', 'Etihad Airways', 'flydubai', 'Air Arabia', 'Qatar Airways', 'Gulf Air',
      'Oman Air', 'Kuwait Airways', 'Saudia', 'Royal Jordanian', 'Middle East Airlines', 'Turkish Airlines'
    ],
    carRentals: [
      'Hertz UAE', 'Avis UAE', 'Budget Rent a Car', 'Enterprise UAE', 'Europcar UAE', 'Thrifty UAE',
      'National Car Rental', 'Sixt UAE', 'Fast Rent a Car', 'Diamond Lease', 'Speedy Drive', 'Al Futtaim Hertz'
    ]
  }

  const getBusinessSuggestions = (input) => {
    if (!input || input.length < 1) return []
    
    // Get businesses from current tab
    const businesses = businessDatabase[activeTab] || []
    
    // Enhanced search: match beginning of words, full names, and partial matches
    const searchTerm = input.toLowerCase()
    
    const suggestions = businesses.filter(business => {
      const businessLower = business.toLowerCase()
      const words = businessLower.split(' ')
      
      // Priority 1: Exact match or starts with search term
      if (businessLower.startsWith(searchTerm)) return true
      
      // Priority 2: Any word starts with search term
      if (words.some(word => word.startsWith(searchTerm))) return true
      
      // Priority 3: Contains search term anywhere
      if (businessLower.includes(searchTerm)) return true
      
      return false
    })
    
    // Sort by relevance (exact matches first, then word matches, then partial matches)
    return suggestions.sort((a, b) => {
      const aLower = a.toLowerCase()
      const bLower = b.toLowerCase()
      
      // Exact match at start gets highest priority
      if (aLower.startsWith(searchTerm) && !bLower.startsWith(searchTerm)) return -1
      if (!aLower.startsWith(searchTerm) && bLower.startsWith(searchTerm)) return 1
      
      // Word match gets second priority
      const aWords = aLower.split(' ')
      const bWords = bLower.split(' ')
      const aWordMatch = aWords.some(word => word.startsWith(searchTerm))
      const bWordMatch = bWords.some(word => word.startsWith(searchTerm))
      
      if (aWordMatch && !bWordMatch) return -1
      if (!aWordMatch && bWordMatch) return 1
      
      // Alphabetical for same priority
      return a.localeCompare(b)
    }).slice(0, 8)
  }

  // Dynamic pricing recommendations based on behavioral insights
  const generatePricingRecommendations = () => {
    if (!businessInfo.name) return null

    const currentMonth = new Date().getMonth()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const nextThreeMonths = [currentMonth + 1, currentMonth + 2, currentMonth + 3].map(m => months[m % 12])

    const pricingData = {
      hotels: {
        baseADR: businessInfo.name.includes('Hyatt') ? 485 : 420,
        insights: [
          'Sustainable Travel trend (+156% growth) - guests willing to pay 18% premium for eco-certified rooms',
          'Solo Female Travel (+124% growth) - 23% higher spend on room upgrades and amenities',  
          'Bleisure Travel (+89% growth) - extended stays with 31% higher total spend',
          'Digital Detox trend - wellness packages command 42% premium pricing'
        ],
        recommendations: [
          { month: nextThreeMonths[0], rate: businessInfo.name.includes('Hyatt') ? 512 : 445, reasoning: 'Peak season + sustainability premium', confidence: 92 },
          { month: nextThreeMonths[1], rate: businessInfo.name.includes('Hyatt') ? 535 : 465, reasoning: 'MICE events increase + solo female travel growth', confidence: 88 },
          { month: nextThreeMonths[2], rate: businessInfo.name.includes('Hyatt') ? 498 : 430, reasoning: 'Bleisure travel extension + wellness package bundling', confidence: 85 }
        ]
      },
      airlines: {
        basePrice: 1245,
        insights: [
          'Premium class demand growing 19% YoY - opportunity for yield management',
          'Business travel recovery at 24% growth - corporate rates optimization needed',
          'Sustainable aviation preference - 12% willing to pay green premium',
          'Digital experience leadership - leverage for ancillary revenue'
        ],
        recommendations: [
          { month: nextThreeMonths[0], rate: 1298, reasoning: 'Peak travel season + premium demand surge', confidence: 90 },
          { month: nextThreeMonths[1], rate: 1334, reasoning: 'Corporate travel peak + sustainability premium', confidence: 87 },
          { month: nextThreeMonths[2], rate: 1267, reasoning: 'Leisure-business mix optimization', confidence: 83 }
        ]
      },
      carRentals: {
        baseRate: 89,
        insights: [
          'Luxury fleet preference up 34% YoY - premium vehicle demand strong',
          'Tourism vehicle demand increased 26% - seasonal pricing opportunities',
          'Corporate fleet services growing 21% - B2B rate optimization potential',
          'Digital platform competition - direct booking incentives needed'
        ],
        recommendations: [
          { month: nextThreeMonths[0], rate: 95, reasoning: 'Tourism peak + luxury preference surge', confidence: 89 },
          { month: nextThreeMonths[1], rate: 102, reasoning: 'Corporate demand peak + premium positioning', confidence: 86 },
          { month: nextThreeMonths[2], rate: 92, reasoning: 'Extended tourism season + fleet optimization', confidence: 84 }
        ]
      }
    }

    return pricingData[activeTab]
  }

  const generateActionPlan = () => {
    if (!businessInfo.name) return []

    const baseRecommendations = {
      hotels: [
        {
          category: 'Behavioral-Driven Revenue Strategy',
          priority: 'High',
          impact: 'Immediate',
          recommendations: [
            `Leverage Sustainable Travel trend (+156% growth) - implement eco-certification for ${businessInfo.name} to justify 18% rate premium`,
            'Target Solo Female Travelers (+124% growth) - create safety-focused packages with 23% higher room upgrade rates',
            'Capture Bleisure Travel trend (+89% growth) - offer extended stay packages with 31% higher total revenue per guest',
            'Introduce Digital Detox wellness packages - command 42% premium over standard rates'
          ]
        },
        {
          category: 'Dynamic Revenue Optimization',
          priority: 'High',
          impact: 'Immediate',
          recommendations: [
            'Implement AI-driven pricing based on real-time demand signals and behavioral patterns',
            'Optimize RevPAR through micro-segmentation of guest personas (sustainable, solo, bleisure, wellness)',
            'Reduce OTA dependency from 65% to 45% through direct booking behavioral incentives',
            'Bundle ancillary services based on guest behavior analysis to increase TRevPAR by $75-95 per stay'
          ]
        },
        {
          category: 'Market Positioning Strategy',
          priority: 'Medium',
          impact: '3-6 months',
          recommendations: [
            'Position as Dubai\'s leading sustainable luxury hotel to capture 156% growth trend',
            'Develop female-centric amenities and marketing to capture 124% solo female travel growth',
            'Create co-working spaces and extended stay packages for 89% bleisure travel growth',
            'Launch wellness-focused positioning to differentiate in crowded luxury market'
          ]
        }
      ],
      airlines: [
        {
          category: 'Behavioral-Driven Revenue Strategy',
          priority: 'High',
          impact: 'Immediate',
          recommendations: [
            `Leverage Business Travel Recovery (+24% growth) - optimize ${businessInfo.name} corporate pricing for 15-20% yield improvement`,
            'Target Premium Class Demand surge (+19% YoY) - implement dynamic business class pricing for 25% revenue uplift',
            'Capture Sustainable Aviation preference - offer 12% green premium for eco-conscious travelers',
            'Monetize Digital Experience leadership - increase ancillary revenue by $35-50 per passenger through app-based services'
          ]
        },
        {
          category: 'Hub Strategy Optimization',
          priority: 'High',
          impact: 'Immediate',
          recommendations: [
            'Capitalize on Dubai Hub Traffic Growth (+22% YoY) through strategic slot optimization',
            'Implement micro-segmentation pricing for connecting vs. origin-destination passengers',
            'Leverage route network expansion (+15% growth) for premium route yield management',
            'Optimize capacity allocation based on passenger behavior patterns and willingness to pay'
          ]
        },
        {
          category: 'Experience-Based Pricing',
          priority: 'Medium',
          impact: '3-6 months',
          recommendations: [
            'Develop experience-tiered pricing beyond traditional class structure',
            'Implement personalized ancillary offerings based on passenger travel behavior',
            'Create premium ground service packages for business travelers',
            'Launch loyalty-based dynamic pricing for repeat customers'
          ]
        }
      ],
      carRentals: [
        {
          category: 'Behavioral-Driven Revenue Strategy',
          priority: 'High',
          impact: 'Immediate',
          recommendations: [
            `Leverage Luxury Fleet Preference (+34% YoY) - optimize ${businessInfo.name} premium vehicle pricing for 20-25% rate increase`,
            'Target Tourism Vehicle Demand surge (+26% growth) - implement seasonal dynamic pricing',
            'Capture Corporate Fleet Services growth (+21% YoY) - develop B2B subscription pricing models',
            'Counter Digital Platform Competition with direct booking incentives and rate parity strategies'
          ]
        },
        {
          category: 'Fleet Revenue Optimization',
          priority: 'High',
          impact: 'Immediate',
          recommendations: [
            'Optimize fleet mix based on tourist behavior patterns and luxury preferences',
            'Implement location-based pricing reflecting tourist density and demand patterns',
            'Develop experience packages (chauffeur, concierge) for premium revenue capture',
            'Create subscription models for frequent business travelers with 40% revenue potential'
          ]
        },
        {
          category: 'Market Positioning Strategy',
          priority: 'Medium',
          impact: '3-6 months',
          recommendations: [
            'Position as premium mobility solution rather than commodity rental service',
            'Develop sustainability messaging to capture eco-conscious luxury travelers',
            'Create integrated tourism packages with hotels and experiences',
            'Launch smart mobility services for tech-savvy business travelers'
          ]
        }
      ]
    }

    return baseRecommendations[activeTab] || []
  }

  // Customer journey pain points by industry
  const painPointsData = {
    hotels: [
      { stage: 'Discovery', issue: 'Limited online visibility', severity: 'High', impact: 85 },
      { stage: 'Booking', issue: 'Complex reservation process', severity: 'Medium', impact: 62 },
      { stage: 'Check-in', issue: 'Long wait times', severity: 'Medium', impact: 58 },
      { stage: 'Stay', issue: 'Inconsistent service quality', severity: 'High', impact: 78 },
      { stage: 'Check-out', issue: 'Billing discrepancies', severity: 'Low', impact: 34 }
    ],
    airlines: [
      { stage: 'Search', issue: 'Complex fare structures', severity: 'Medium', impact: 67 },
      { stage: 'Booking', issue: 'Hidden fees & charges', severity: 'High', impact: 82 },
      { stage: 'Check-in', issue: 'Mobile app issues', severity: 'Medium', impact: 54 },
      { stage: 'Flight', issue: 'Delays & cancellations', severity: 'High', impact: 91 },
      { stage: 'Baggage', issue: 'Lost luggage handling', severity: 'High', impact: 76 }
    ],
    carRentals: [
      { stage: 'Search', issue: 'Unclear pricing models', severity: 'Medium', impact: 71 },
      { stage: 'Booking', issue: 'Insurance upselling pressure', severity: 'High', impact: 79 },
      { stage: 'Pickup', issue: 'Vehicle availability issues', severity: 'Medium', impact: 65 },
      { stage: 'Usage', issue: 'Fuel policy confusion', severity: 'Low', impact: 43 },
      { stage: 'Return', issue: 'Damage assessment disputes', severity: 'High', impact: 88 }
    ]
  }
  
  const painPoints = painPointsData[activeTab]

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'High': return 'bg-red-100 text-red-800'
      case 'Medium': return 'bg-yellow-100 text-yellow-800'
      case 'Low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <>
    <div className="space-y-8 p-2">
      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl border border-gray-100">
        <div className="px-8 pt-6 pb-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Product Categories</h3>
              <p className="text-gray-500 text-sm">Select product category for detailed revenue insights</p>
            </div>
            <button
              onClick={() => setShowDataSources(true)}
              className="p-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
              title="Data Sources"
            >
              <HelpCircle className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
        
        <div className="px-8 pb-6">
          <div className="flex space-x-0">
            <button
              onClick={() => setActiveTab('hotels')}
              className={`relative px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 flex items-center space-x-3 ${
                activeTab === 'hotels'
                  ? 'border-blue-500 text-blue-600 bg-blue-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Building className={`w-5 h-5 ${activeTab === 'hotels' ? 'text-blue-600' : 'text-gray-400'}`} />
              <span>Hotels</span>
              <div className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold">+18%</div>
              {activeTab === 'hotels' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
              )}
            </button>

            <button
              onClick={() => setActiveTab('airlines')}
              className={`relative px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 flex items-center space-x-3 ${
                activeTab === 'airlines'
                  ? 'border-purple-500 text-purple-600 bg-purple-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Plane className={`w-5 h-5 ${activeTab === 'airlines' ? 'text-purple-600' : 'text-gray-400'}`} />
              <span>Airlines</span>
              <div className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold">+15%</div>
              {activeTab === 'airlines' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500"></div>
              )}
            </button>

            <button
              onClick={() => setActiveTab('carRentals')}
              className={`relative px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 flex items-center space-x-3 ${
                activeTab === 'carRentals'
                  ? 'border-emerald-500 text-emerald-600 bg-emerald-50'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <Car className={`w-5 h-5 ${activeTab === 'carRentals' ? 'text-emerald-600' : 'text-gray-400'}`} />
              <span>Car Rentals</span>
              <div className="bg-emerald-600 text-white text-xs px-2 py-1 rounded-full font-semibold">+22%</div>
              {activeTab === 'carRentals' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-500"></div>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Header - Magazine Style */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-light bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-3">
              Product Revenue <span className="font-bold">Intelligence</span>
            </h1>
            <p className="text-gray-600 text-lg mb-2">
              Strategic product performance & revenue optimization insights
            </p>
            <p className="text-gray-500 text-sm">
              {currentConfig.analysisScope} • {marketRegion} • {currentPeriod}
            </p>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">Revenue Uplift</p>
              <p className="text-3xl font-light text-emerald-600">+{activeTab === 'hotels' ? '18' : activeTab === 'airlines' ? '15' : '22'}<span className="text-lg">%</span></p>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowActionPlan(true)}
                className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors flex items-center space-x-2"
              >
                <span>Get Action Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-600" />
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Behavioral Revenue Drivers - Magazine Style */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100" data-section="product-performance">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-2">Behavioral Revenue <span className="font-bold">Drivers</span></h2>
              <p className="text-gray-500 text-sm">Key trends beyond price influencing revenue opportunities • {currentPeriod}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-light text-emerald-600 mb-1">+{activeTab === 'hotels' ? '127' : activeTab === 'airlines' ? '93' : '106'}<span className="text-lg">%</span></p>
              <p className="text-xs text-gray-500 mb-2">Avg Growth</p>
              <div className="flex items-center justify-center text-xs text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                <span className="font-semibold">High Impact</span>
              </div>
            </div>
          </div>
        </div>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeTab === 'hotels' && (
              <>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+156%</h4>
                    <p className="text-sm font-medium text-gray-600">Sustainable Travel</p>
                    <p className="text-xs text-gray-500">18% willing to pay premium for eco-certified rooms</p>
                    <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-rose-200 transition-colors">
                    <span className="text-2xl">👩</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+124%</h4>
                    <p className="text-sm font-medium text-gray-600">Solo Female Travel</p>
                    <p className="text-xs text-gray-500">23% higher spend on room upgrades & amenities</p>
                    <div className="w-12 h-1 bg-rose-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+89%</h4>
                    <p className="text-sm font-medium text-gray-600">Bleisure Travel</p>
                    <p className="text-xs text-gray-500">31% higher total spend per extended stay</p>
                    <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <span className="text-2xl">🧘</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+42%</h4>
                    <p className="text-sm font-medium text-gray-600">Wellness Premium</p>
                    <p className="text-xs text-gray-500">Digital detox packages command premium rates</p>
                    <div className="w-12 h-1 bg-purple-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'airlines' && (
              <>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                    <span className="text-2xl">💼</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+24%</h4>
                    <p className="text-sm font-medium text-gray-600">Business Travel Recovery</p>
                    <p className="text-xs text-gray-500">Corporate rates optimization opportunity</p>
                    <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <span className="text-2xl">✈️</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+19%</h4>
                    <p className="text-sm font-medium text-gray-600">Premium Class Demand</p>
                    <p className="text-xs text-gray-500">Yield management opportunities in business class</p>
                    <div className="w-12 h-1 bg-purple-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+22%</h4>
                    <p className="text-sm font-medium text-gray-600">Hub Traffic Growth</p>
                    <p className="text-xs text-gray-500">Strategic slot optimization potential</p>
                    <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+12%</h4>
                    <p className="text-sm font-medium text-gray-600">Sustainability Premium</p>
                    <p className="text-xs text-gray-500">Eco-conscious travelers willing to pay more</p>
                    <div className="w-12 h-1 bg-green-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
              </>
            )}
            {activeTab === 'carRentals' && (
              <>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                    <span className="text-2xl">🚗</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+34%</h4>
                    <p className="text-sm font-medium text-gray-600">Luxury Fleet Preference</p>
                    <p className="text-xs text-gray-500">Premium vehicle demand driving rate increases</p>
                    <div className="w-12 h-1 bg-amber-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors">
                    <span className="text-2xl">🗺️</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+26%</h4>
                    <p className="text-sm font-medium text-gray-600">Tourism Vehicle Demand</p>
                    <p className="text-xs text-gray-500">Seasonal pricing optimization opportunity</p>
                    <div className="w-12 h-1 bg-teal-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-indigo-200 transition-colors">
                    <span className="text-2xl">🏢</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">+21%</h4>
                    <p className="text-sm font-medium text-gray-600">Corporate Fleet Services</p>
                    <p className="text-xs text-gray-500">B2B subscription pricing model potential</p>
                    <div className="w-12 h-1 bg-indigo-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
                <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-gray-900">40%</h4>
                    <p className="text-sm font-medium text-gray-600">Subscription Revenue</p>
                    <p className="text-xs text-gray-500">New business model opportunity</p>
                    <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-3"></div>
                  </div>
                </div>
              </>
            )}
        </div>

        {/* Revenue Performance Summary - Magazine Style */}
        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="mb-6">
            <h4 className="text-xl font-light text-gray-900 mb-2">Key Performance <span className="font-bold">Metrics</span></h4>
            <p className="text-gray-500 text-sm">Core revenue indicators • {currentPeriod} Performance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">💰</span>
              </div>
              <div className="space-y-1">
                <h5 className="text-2xl font-bold text-gray-900">${activeTab === 'hotels' ? '485' : activeTab === 'airlines' ? '625' : '285'}</h5>
                <p className="text-sm font-medium text-gray-600">{activeTab === 'hotels' ? 'ADR (Avg Daily Rate)' : activeTab === 'airlines' ? 'Avg Ticket Price' : 'Avg Rental Rate'}</p>
                <p className="text-xs text-green-600 font-semibold">+8.2% vs {previousPeriod}</p>
              </div>
            </div>
            
            <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <div className="space-y-1">
                <h5 className="text-2xl font-bold text-gray-900">{activeTab === 'hotels' ? '78.5%' : activeTab === 'airlines' ? '82.1%' : '71.3%'}</h5>
                <p className="text-sm font-medium text-gray-600">{activeTab === 'hotels' ? 'Occupancy Rate' : activeTab === 'airlines' ? 'Load Factor' : 'Utilization Rate'}</p>
                <p className="text-xs text-green-600 font-semibold">+4.1% vs {previousPeriod}</p>
              </div>
            </div>
            
            <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                <span className="text-2xl">📈</span>
              </div>
              <div className="space-y-1">
                <h5 className="text-2xl font-bold text-gray-900">${activeTab === 'hotels' ? '381' : activeTab === 'airlines' ? '513' : '204'}</h5>
                <p className="text-sm font-medium text-gray-600">{activeTab === 'hotels' ? 'RevPAR' : activeTab === 'airlines' ? 'RevPAX' : 'Revenue per Rental'}</p>
                <p className="text-xs text-green-600 font-semibold">+12.8% vs {previousPeriod}</p>
              </div>
            </div>
            
            <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-2xl">🎯</span>
              </div>
              <div className="space-y-1">
                <h5 className="text-2xl font-bold text-gray-900">{activeTab === 'hotels' ? '24.5%' : activeTab === 'airlines' ? '18.2%' : '31.7%'}</h5>
                <p className="text-sm font-medium text-gray-600">Profit Margin</p>
                <p className="text-xs text-green-600 font-semibold">+2.3% vs {previousPeriod}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Performance Overview - Magazine Style */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-2">Product Performance <span className="font-bold">Portfolio</span></h2>
              <p className="text-gray-500 text-sm">Revenue & satisfaction insights by product category • {currentPeriod}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-light text-emerald-600 mb-1">{productPerformance.length}</p>
              <p className="text-xs text-gray-500 mb-2">Products</p>
              <div className="flex items-center justify-center text-xs text-green-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                <span className="font-semibold">High Performers</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
          {productPerformance.map((product, index) => (
            <div key={index} className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300 border border-gray-200">
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-gray-900">{product.product}</h4>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-emerald-600">${(product.revenue / 1000000).toFixed(1)}M</div>
                  <div className="text-sm text-gray-600">Revenue</div>
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    product.trend === 'up' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {product.improvement}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progressive Disclosure Button */}
        <div className="text-center">
          <button
            onClick={() => setShowProductDetails(!showProductDetails)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2 mx-auto"
          >
            <span>{showProductDetails ? 'Hide' : 'Show'} Detailed Analytics</span>
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Detailed Performance Cards */}
        {showProductDetails && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Detailed Performance Metrics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {productPerformance.map((product, index) => (
          <div key={index} className="bg-white rounded border border-gray-200 p-4 hover:border-gray-300 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900 truncate">{product.product}</h3>
              <span className={`text-xs font-medium ${
                product.trend === 'up' ? 'text-emerald-600' : 'text-red-600'
              }`}>
                {product.improvement}
              </span>
            </div>
            
            <div className="space-y-3">
              {/* KPI 1: Total Revenue */}
              <div className="bg-emerald-50 rounded-lg p-3 border border-emerald-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-emerald-700 uppercase">Total Revenue</span>
                    <div className="text-lg font-bold text-emerald-600">${(product.revenue / 1000000).toFixed(1)}M</div>
                  </div>
                  <div className="text-emerald-500">💰</div>
                </div>
              </div>
              
              {/* KPI 2: Average Daily/Unit Rate */}
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-blue-700 uppercase">
                      {activeTab === 'hotels' ? 'ADR (Avg Daily Rate)' : activeTab === 'airlines' ? 'Avg Ticket Price' : 'Daily Rental Rate'}
                    </span>
                    <div className="text-lg font-bold text-blue-600">
                      ${activeTab === 'hotels' ? (product.revenue / product.occupancy * 100 / 365).toFixed(0) : activeTab === 'airlines' ? (product.revenue / product.occupancy * 100 / 12).toFixed(0) : (product.revenue / product.occupancy * 100 / 365).toFixed(0)}
                    </div>
                  </div>
                  <div className="text-blue-500">💳</div>
                </div>
              </div>
              
              {/* KPI 3: Occupancy/Utilization */}
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-purple-700 uppercase">
                      {activeTab === 'hotels' ? 'Occupancy Rate' : activeTab === 'airlines' ? 'Load Factor' : 'Utilization Rate'}
                    </span>
                    <div className="text-lg font-bold text-purple-600">{product.occupancy}%</div>
                  </div>
                  <div className="text-purple-500">📊</div>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-purple-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full transition-all duration-500" style={{ width: `${product.occupancy}%` }}></div>
                  </div>
                </div>
              </div>
              
              {/* KPI 4: Revenue per Available Unit */}
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-amber-700 uppercase">
                      {activeTab === 'hotels' ? 'RevPAR (Revenue per Available Room)' : activeTab === 'airlines' ? 'RevPAX (Revenue per Passenger)' : 'Revenue per Available Unit'}
                    </span>
                    <div className={`text-lg font-bold ${
                      product.occupancy > 80 ? 'text-emerald-600' : product.occupancy > 60 ? 'text-amber-600' : 'text-red-600'
                    }`}>
                      ${(product.revenue / 1000000 * product.occupancy / 100).toFixed(0)}K
                    </div>
                  </div>
                  <div className={product.occupancy > 80 ? 'text-emerald-500' : product.occupancy > 60 ? 'text-amber-500' : 'text-red-500'}>
                    {product.occupancy > 80 ? '🚀' : product.occupancy > 60 ? '📈' : '⚠️'}
                  </div>
                </div>
              </div>
              
              {/* KPI 5: Profit Margin */}
              <div className="bg-rose-50 rounded-lg p-3 border border-rose-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-medium text-rose-700 uppercase">Profit Margin</span>
                    <div className={`text-lg font-bold ${
                      (product.revenue * 0.25 / 1000000) > 0.5 ? 'text-emerald-600' : 'text-rose-600'
                    }`}>
                      {(25 - (100 - product.occupancy) * 0.2).toFixed(1)}%
                    </div>
                  </div>
                  <div className={(product.revenue * 0.25 / 1000000) > 0.5 ? 'text-emerald-500' : 'text-rose-500'}>
                    {(product.revenue * 0.25 / 1000000) > 0.5 ? '✅' : '📉'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
          </div>
        )}
      </div>

      {/* Highlighted Product Portfolio Lifecycle */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Product Portfolio Lifecycle</h3>
              <p className="text-gray-600">Strategic product distribution across lifecycle stages • {currentPeriod}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="bg-white rounded-xl px-4 py-2 shadow-md">
              <div className="text-2xl font-bold text-blue-600">{productLifecycle.reduce((sum, stage) => sum + stage.products, 0)}</div>
              <div className="text-sm text-gray-500">Total Products</div>
            </div>
            <div className="text-sm text-gray-500 mt-2">{currentConfig.analysisScope}</div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {productLifecycle.map((stage, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className={`text-xl font-bold ${
                  stage.stage === 'Introduction' ? 'text-blue-600' :
                  stage.stage === 'Growth' ? 'text-green-600' :
                  stage.stage === 'Maturity' ? 'text-orange-600' :
                  'text-red-600'
                }`}>
                  {stage.stage}
                </h4>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-900">{stage.products}</div>
                  <div className="text-sm text-gray-500">products</div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  ${(stage.revenue / 1000).toFixed(0)}K revenue
                </div>
                <div className={`w-full h-3 rounded-full ${
                  stage.stage === 'Introduction' ? 'bg-blue-100' :
                  stage.stage === 'Growth' ? 'bg-green-100' :
                  stage.stage === 'Maturity' ? 'bg-orange-100' :
                  'bg-red-100'
                }`}>
                  <div 
                    className={`h-3 rounded-full transition-all duration-1000 ${
                      stage.stage === 'Introduction' ? 'bg-gradient-to-r from-blue-400 to-blue-600' :
                      stage.stage === 'Growth' ? 'bg-gradient-to-r from-green-400 to-green-600' :
                      stage.stage === 'Maturity' ? 'bg-gradient-to-r from-orange-400 to-orange-600' :
                      'bg-gradient-to-r from-red-400 to-red-600'
                    }`}
                    style={{ 
                      width: `${(stage.revenue / Math.max(...productLifecycle.map(s => s.revenue))) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-sm font-semibold text-gray-800 mb-3">Key Products:</div>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {productsByStage[stage.stage].slice(0, 6).map((product, productIndex) => (
                    <div 
                      key={productIndex} 
                      className={`text-sm text-gray-700 px-3 py-2 rounded-lg ${
                        stage.stage === 'Introduction' ? 'bg-blue-50 border border-blue-200' :
                        stage.stage === 'Growth' ? 'bg-green-50 border border-green-200' :
                        stage.stage === 'Maturity' ? 'bg-orange-50 border border-orange-200' :
                        'bg-red-50 border border-red-200'
                      }`}
                    >
                      {product}
                    </div>
                  ))}
                  {productsByStage[stage.stage].length > 6 && (
                    <div className="text-xs text-gray-500 text-center py-1">
                      +{productsByStage[stage.stage].length - 6} more products
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Progressive Disclosure for Lifecycle Insights */}
        <div className="mt-8 text-center">
          <button
            onClick={() => setShowLifecycleDetails(!showLifecycleDetails)}
            className="bg-white/90 hover:bg-white text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2 mx-auto shadow-sm border border-white/50"
          >
            <span>{showLifecycleDetails ? 'Hide' : 'Show'} Stage Definitions & Strategy</span>
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {showLifecycleDetails && (
          <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/50">
            <div className="text-lg font-semibold text-gray-900 mb-4">Lifecycle Stage Definitions:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                <span className="text-gray-700"><strong>Introduction:</strong> New products with low market penetration but high growth potential</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                <span className="text-gray-700"><strong>Growth:</strong> Rapidly expanding market share and accelerating revenue</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
              <span className="text-gray-700"><strong>Maturity:</strong> Established products with stable revenue and market position</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-gradient-to-r from-red-400 to-red-600 rounded-full"></div>
              <span className="text-gray-700"><strong>Decline:</strong> Decreasing demand and revenue requiring strategic decisions</span>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Lightbulb className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-900">Strategic Insights:</span>
            </div>
            <p className="text-blue-800 text-sm">
              Focus investment on <strong>Growth stage products</strong> for maximum ROI. 
              Consider innovation or repositioning for <strong>Decline stage products</strong>. 
              <strong>Introduction stage</strong> products show promising potential for future growth.
            </p>
          </div>
          </div>
        )}
      </div>

      {/* Full Width Market Intelligence */}
      <div className="bg-white rounded border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-medium text-gray-900">{currentConfig.analysisScope} Market Intelligence</h3>
            <p className="text-sm text-gray-600">Competitive landscape analysis • {marketRegion} • {currentPeriod}</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>{currentConfig.productCount} {activeTab.slice(0, -1)} businesses</p>
            <p>Market Leaders Analysis</p>
          </div>
        </div>
        
        {/* Market Performance Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Market Leaders Performance */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
              <h4 className="font-medium text-blue-900">Market Leaders Performance</h4>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {activeTab === 'hotels' && (
                <>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">$458</div>
                    <div className="text-xs text-blue-600">Avg ADR (Top 5)</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">84%</div>
                    <div className="text-xs text-blue-600">Avg Occupancy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">$385</div>
                    <div className="text-xs text-blue-600">Avg RevPAR</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">27%</div>
                    <div className="text-xs text-blue-600">Avg Margin</div>
                  </div>
                </>
              )}
              {activeTab === 'airlines' && (
                <>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">$1,245</div>
                    <div className="text-xs text-blue-600">Avg Ticket Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">82%</div>
                    <div className="text-xs text-blue-600">Avg Load Factor</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">$1,021</div>
                    <div className="text-xs text-blue-600">RevPAX</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">18%</div>
                    <div className="text-xs text-blue-600">Avg Margin</div>
                  </div>
                </>
              )}
              {activeTab === 'carRentals' && (
                <>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">$89</div>
                    <div className="text-xs text-blue-600">Avg Daily Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">76%</div>
                    <div className="text-xs text-blue-600">Fleet Utilization</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">$68</div>
                    <div className="text-xs text-blue-600">Rev per Unit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold text-blue-800">22%</div>
                    <div className="text-xs text-blue-600">Avg Margin</div>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Market Growth Drivers */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-emerald-600 rounded-full mr-2"></div>
              <h4 className="font-medium text-emerald-900">Market Growth Drivers</h4>
            </div>
            <div className="space-y-2">
              {activeTab === 'hotels' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Luxury Tourism Growth</span>
                    <span className="text-sm font-semibold text-emerald-800">+18% YoY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Business Travel Recovery</span>
                    <span className="text-sm font-semibold text-emerald-800">+24% YoY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">MICE Events Increase</span>
                    <span className="text-sm font-semibold text-emerald-800">+31% YoY</span>
                  </div>
                </>
              )}
              {activeTab === 'airlines' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Hub Traffic Growth</span>
                    <span className="text-sm font-semibold text-emerald-800">+22% YoY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Premium Class Demand</span>
                    <span className="text-sm font-semibold text-emerald-800">+19% YoY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Regional Route Expansion</span>
                    <span className="text-sm font-semibold text-emerald-800">+15% YoY</span>
                  </div>
                </>
              )}
              {activeTab === 'carRentals' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Tourism Vehicle Demand</span>
                    <span className="text-sm font-semibold text-emerald-800">+26% YoY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Luxury Fleet Preference</span>
                    <span className="text-sm font-semibold text-emerald-800">+34% YoY</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-emerald-700">Corporate Fleet Services</span>
                    <span className="text-sm font-semibold text-emerald-800">+21% YoY</span>
                  </div>
                </>
              )}
            </div>
          </div>
          
          {/* Market Challenges */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
              <h4 className="font-medium text-orange-900">Market Challenges</h4>
            </div>
            <div className="space-y-2">
              {activeTab === 'hotels' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Rising OTA Commission Costs</span>
                    <span className="text-sm font-semibold text-orange-800">18.5% avg</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Staff Shortage Impact</span>
                    <span className="text-sm font-semibold text-orange-800">-8% service levels</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Energy Cost Increases</span>
                    <span className="text-sm font-semibold text-orange-800">+12% operational costs</span>
                  </div>
                </>
              )}
              {activeTab === 'airlines' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Fuel Cost Volatility</span>
                    <span className="text-sm font-semibold text-orange-800">+15% operational costs</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Slot Availability Constraints</span>
                    <span className="text-sm font-semibold text-orange-800">Limited expansion</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Price Competition Pressure</span>
                    <span className="text-sm font-semibold text-orange-800">-5% average yields</span>
                  </div>
                </>
              )}
              {activeTab === 'carRentals' && (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Fleet Acquisition Costs</span>
                    <span className="text-sm font-semibold text-orange-800">+20% vehicle prices</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Insurance Premium Rise</span>
                    <span className="text-sm font-semibold text-orange-800">+14% annually</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-orange-700">Digital Platform Competition</span>
                    <span className="text-sm font-semibold text-orange-800">-6% direct bookings</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* Market Outlook */}
        <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Market Outlook & Opportunities</h4>
          <div className="text-sm text-gray-700 space-y-1">
            {activeTab === 'hotels' && (
              <>
                <div>• Dubai's luxury hotel market expected to grow 12-15% annually through 2025</div>
                <div>• Sustainable tourism practices becoming key differentiator for premium segment</div>
                <div>• Technology integration driving operational efficiency and guest experience</div>
              </>
            )}
            {activeTab === 'airlines' && (
              <>
                <div>• Dubai hub capacity expansion creating 18% more premium seat availability</div>
                <div>• Sustainable aviation fuel adoption accelerating among market leaders</div>
                <div>• Digital transformation reducing operational costs by 8-12% annually</div>
              </>
            )}
            {activeTab === 'carRentals' && (
              <>
                <div>• Electric vehicle adoption in luxury fleet expected to reach 25% by 2025</div>
                <div>• Subscription-based models gaining traction with 40% revenue potential</div>
                <div>• Smart mobility integration creating new revenue streams</div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Revenue Channel Performance - Magazine Style */}
      <div className="bg-white rounded-2xl p-8 border border-gray-100">
        <div className="border-b border-gray-200 pb-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-2">Revenue Channel <span className="font-bold">Performance</span></h2>
              <p className="text-gray-500 text-sm">Distribution & booking optimization insights • {currentPeriod}</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-light text-emerald-600 mb-1">${activeTab === 'hotels' ? '8.95' : activeTab === 'airlines' ? '16.4' : '4.2'}<span className="text-lg">M</span></p>
              <p className="text-xs text-gray-500 mb-2">Total Revenue</p>
              <div className="flex items-center justify-center text-xs text-red-600">
                <TrendingDown className="w-3 h-3 mr-1" />
                <span className="font-semibold">-{activeTab === 'hotels' ? '12.5%' : activeTab === 'airlines' ? '8.2%' : '15.1%'} Commission</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Channel Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
              <span className="text-2xl">🌐</span>
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-gray-900">${activeTab === 'hotels' ? '3.2' : activeTab === 'airlines' ? '6.8' : '1.8'}M</h4>
              <p className="text-sm font-medium text-gray-600">Direct Bookings</p>
              <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto mt-3"></div>
            </div>
          </div>
          
          <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
              <span className="text-2xl">📱</span>
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-gray-900">${activeTab === 'hotels' ? '4.7' : activeTab === 'airlines' ? '7.3' : '1.9'}M</h4>
              <p className="text-sm font-medium text-gray-600">OTA & Partners</p>
              <div className="w-12 h-1 bg-orange-500 rounded-full mx-auto mt-3"></div>
            </div>
          </div>
          
          <div className="text-center group hover:bg-gray-50 rounded-xl p-6 transition-all duration-300">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
              <span className="text-2xl">🏢</span>
            </div>
            <div className="space-y-2">
              <h4 className="text-2xl font-bold text-gray-900">${activeTab === 'hotels' ? '1.05' : activeTab === 'airlines' ? '2.3' : '0.5'}M</h4>
              <p className="text-sm font-medium text-gray-600">Corporate & Direct</p>
              <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mt-3"></div>
            </div>
          </div>
        </div>

        {/* Progressive Disclosure Button */}
        <div className="text-center">
          <button
            onClick={() => setShowChannelDetails(!showChannelDetails)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-medium transition-colors flex items-center space-x-2 mx-auto"
          >
            <span>{showChannelDetails ? 'Hide' : 'Show'} Detailed Channel Breakdown</span>
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Detailed Channel Breakdown */}
        {showChannelDetails && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Channel Performance Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {[
            { channel: 'Direct Website', revenue: activeTab === 'hotels' ? 3.2 : activeTab === 'airlines' ? 6.8 : 1.8, commission: 0, growth: '+18%' },
            { channel: activeTab === 'hotels' ? 'Booking.com' : activeTab === 'airlines' ? 'Travel Agents' : 'Rental Sites', revenue: activeTab === 'hotels' ? 2.8 : activeTab === 'airlines' ? 4.2 : 1.1, commission: activeTab === 'hotels' ? 15 : activeTab === 'airlines' ? 9 : 18, growth: '+5%' },
            { channel: activeTab === 'hotels' ? 'Expedia' : activeTab === 'airlines' ? 'OTA Partners' : 'Aggregators', revenue: activeTab === 'hotels' ? 1.9 : activeTab === 'airlines' ? 3.1 : 0.8, commission: activeTab === 'hotels' ? 18 : activeTab === 'airlines' ? 12 : 20, growth: '-2%' },
            { channel: activeTab === 'hotels' ? 'Corporate' : activeTab === 'airlines' ? 'Corporate Sales' : 'B2B Partners', revenue: activeTab === 'hotels' ? 0.8 : activeTab === 'airlines' ? 1.8 : 0.4, commission: activeTab === 'hotels' ? 5 : activeTab === 'airlines' ? 3 : 8, growth: '+25%' },
            { channel: 'Phone/Walk-in', revenue: activeTab === 'hotels' ? 0.15 : activeTab === 'airlines' ? 0.5 : 0.1, commission: 0, growth: '-15%' }
          ].map((channel, index) => (
            <div key={index} className="relative p-4 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-gray-900">{channel.channel}</h4>
                <span className={`text-xs font-medium ${
                  channel.growth.startsWith('+') ? 'text-emerald-600' : 'text-red-600'
                }`}>
                  {channel.growth}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Revenue</span>
                  <span className="text-sm font-semibold text-emerald-600">${channel.revenue}M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Commission</span>
                  <span className="text-sm font-medium text-red-600">{channel.commission}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="h-2 bg-blue-500 rounded-full" 
                    style={{ width: `${(channel.revenue / (activeTab === 'hotels' ? 8.95 : activeTab === 'airlines' ? 16.4 : 4.2)) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>
        )}
      </div>
    </div>

    {/* Action Plan Drawer */}
    {showActionPlan && (
        <div className="fixed inset-0 z-50">
          <div 
            className="absolute inset-0 bg-black bg-opacity-20 transition-opacity"
            onClick={() => setShowActionPlan(false)}
          ></div>
          
          <div className="absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-xl transform transition-transform">
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Revenue Action Plan</h2>
                  <p className="text-sm text-gray-600">Get personalized recommendations for your {activeTab.slice(0, -1)} business</p>
                </div>
                <button
                  onClick={() => setShowActionPlan(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {!businessInfo.name ? (
                  // Business Information Form
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Tell us about your business</h3>
                      <div className="space-y-4">
                                                 <div>
                           <label className="block text-sm font-medium text-gray-700 mb-2">
                             Business Name *
                           </label>
                           <div className="relative">
                             <div className="relative">
                               <input
                                 type="text"
                                 className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                                 placeholder={`Search ${activeTab === 'hotels' ? 'hotels' : activeTab === 'airlines' ? 'airlines' : 'car rental companies'} in Dubai & UAE...`}
                                 value={businessInfo.name}
                                 onChange={(e) => setBusinessInfo({...businessInfo, name: e.target.value})}
                                 autoComplete="off"
                               />
                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                 <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                 </svg>
                               </div>
                             </div>
                             
                             {/* Search suggestions dropdown */}
                             {businessInfo.name && getBusinessSuggestions(businessInfo.name).length > 0 && (
                               <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                 <div className="p-2 border-b border-gray-100">
                                   <div className="text-xs text-gray-500 font-medium">
                                     {getBusinessSuggestions(businessInfo.name).length} {activeTab.slice(0, -1)} businesses found
                                   </div>
                                 </div>
                                 {getBusinessSuggestions(businessInfo.name).map((business, index) => (
                                   <div
                                     key={index}
                                     className="px-4 py-3 hover:bg-blue-50 cursor-pointer text-sm border-b border-gray-50 last:border-b-0 flex items-center justify-between group"
                                     onClick={() => setBusinessInfo({...businessInfo, name: business})}
                                   >
                                     <div className="flex items-center space-x-3">
                                       <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                         {activeTab === 'hotels' ? (
                                           <Building className="w-4 h-4 text-gray-600" />
                                         ) : activeTab === 'airlines' ? (
                                           <Plane className="w-4 h-4 text-gray-600" />
                                         ) : (
                                           <Car className="w-4 h-4 text-gray-600" />
                                         )}
                                       </div>
                                       <div>
                                         <div className="font-medium text-gray-900">{business}</div>
                                         <div className="text-xs text-gray-500">
                                           {activeTab === 'hotels' ? 'Luxury Hotel' : 
                                            activeTab === 'airlines' ? 'Airline' : 'Car Rental'}
                                         </div>
                                       </div>
                                     </div>
                                     <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                                   </div>
                                 ))}
                               </div>
                             )}
                             
                             {/* No results message */}
                             {businessInfo.name && businessInfo.name.length > 0 && getBusinessSuggestions(businessInfo.name).length === 0 && (
                               <div className="absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4">
                                 <div className="text-center text-gray-500">
                                   <div className="text-sm font-medium">No businesses found</div>
                                   <div className="text-xs mt-1">
                                     Try searching for "{activeTab === 'hotels' ? 'Atlantis, Burj Al Arab, Four Seasons' : 
                                                        activeTab === 'airlines' ? 'Emirates, Etihad, Qatar Airways' : 
                                                        'Hertz, Avis, Enterprise'}"
                                   </div>
                                 </div>
                               </div>
                             )}
                             
                             {/* Search tips */}
                             {!businessInfo.name && (
                               <div className="mt-2 text-xs text-gray-500">
                                 <div className="font-medium mb-1">Popular {activeTab.slice(0, -1)} businesses:</div>
                                 <div className="flex flex-wrap gap-1">
                                   {businessDatabase[activeTab].slice(0, 3).map((business, index) => (
                                     <button
                                       key={index}
                                       onClick={() => setBusinessInfo({...businessInfo, name: business})}
                                       className="px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded text-xs transition-colors"
                                     >
                                       {business.split(' ').slice(0, 2).join(' ')}
                                     </button>
                                   ))}
                                 </div>
                               </div>
                             )}
                           </div>
                         </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Type
                          </label>
                          <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={businessInfo.type}
                            onChange={(e) => setBusinessInfo({...businessInfo, type: e.target.value})}
                          >
                            <option value="">Select type</option>
                            {activeTab === 'hotels' && (
                              <>
                                <option value="luxury">Luxury Hotel (5-Star)</option>
                                <option value="business">Business Hotel (4-Star)</option>
                                <option value="boutique">Boutique Hotel</option>
                                <option value="resort">Resort Property</option>
                              </>
                            )}
                            {activeTab === 'airlines' && (
                              <>
                                <option value="full-service">Full-Service Carrier</option>
                                <option value="low-cost">Low-Cost Carrier</option>
                                <option value="regional">Regional Airline</option>
                                <option value="charter">Charter Airline</option>
                              </>
                            )}
                            {activeTab === 'carRentals' && (
                              <>
                                <option value="premium">Premium Car Rental</option>
                                <option value="economy">Economy Car Rental</option>
                                <option value="luxury">Luxury Car Rental</option>
                                <option value="corporate">Corporate Fleet</option>
                              </>
                            )}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Primary Location
                          </label>
                          <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={businessInfo.location}
                            onChange={(e) => setBusinessInfo({...businessInfo, location: e.target.value})}
                          >
                            <option value="">Select location</option>
                            <option value="dubai">Dubai</option>
                            <option value="abu-dhabi">Abu Dhabi</option>
                            <option value="sharjah">Sharjah</option>
                            <option value="ras-al-khaimah">Ras Al Khaimah</option>
                            <option value="fujairah">Fujairah</option>
                            <option value="multiple">Multiple UAE Locations</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Size
                          </label>
                          <select
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            value={businessInfo.size}
                            onChange={(e) => setBusinessInfo({...businessInfo, size: e.target.value})}
                          >
                            <option value="">Select size</option>
                            {activeTab === 'hotels' && (
                              <>
                                <option value="small">Small (Under 100 rooms)</option>
                                <option value="medium">Medium (100-300 rooms)</option>
                                <option value="large">Large (300+ rooms)</option>
                                <option value="chain">Hotel Chain</option>
                              </>
                            )}
                            {activeTab === 'airlines' && (
                              <>
                                <option value="small">Small (Under 20 aircraft)</option>
                                <option value="medium">Medium (20-100 aircraft)</option>
                                <option value="large">Large (100+ aircraft)</option>
                                <option value="major">Major Carrier</option>
                              </>
                            )}
                            {activeTab === 'carRentals' && (
                              <>
                                <option value="small">Small (Under 500 vehicles)</option>
                                <option value="medium">Medium (500-2000 vehicles)</option>
                                <option value="large">Large (2000+ vehicles)</option>
                                <option value="franchise">Franchise Network</option>
                              </>
                            )}
                          </select>
                        </div>
                      </div>

                      <button
                        onClick={() => businessInfo.name && generateActionPlan()}
                        disabled={!businessInfo.name}
                        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        Generate Revenue Action Plan
                      </button>
                    </div>
                  </div>
                ) : (
                  // Action Plan Display
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-blue-900">{businessInfo.name}</h3>
                          <p className="text-sm text-blue-700">
                            AI-Powered Revenue Intelligence & Pricing Recommendations • {currentPeriod}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-800">
                            +{activeTab === 'hotels' ? '18-25%' : activeTab === 'airlines' ? '15-20%' : '20-25%'} Revenue Potential
                          </div>
                          <div className="text-xs text-blue-600">Based on behavioral insights</div>
                        </div>
                      </div>
                    </div>

                    {/* Dynamic Price Recommendations */}
                    {generatePricingRecommendations() && (
                      <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-semibold text-emerald-900">
                              AI-Driven Pricing Recommendations
                            </h4>
                            <p className="text-sm text-emerald-700">
                              Based on behavioral trends, market intelligence & competitor analysis
                            </p>
                          </div>
                          <div className="text-emerald-800 font-semibold">
                            Next 3 Months Strategy
                          </div>
                        </div>

                        {/* Behavioral Insights Summary */}
                        <div className="mb-6 p-4 bg-white/60 rounded-lg">
                          <h5 className="font-medium text-emerald-900 mb-3">Key Behavioral Insights Driving Pricing</h5>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {generatePricingRecommendations().insights.map((insight, index) => (
                              <div key={index} className="flex items-start space-x-2">
                                <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                                <p className="text-sm text-emerald-800">{insight}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Monthly Pricing Recommendations */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          {generatePricingRecommendations().recommendations.map((rec, index) => (
                            <div key={index} className="bg-white border border-emerald-200 rounded-lg p-4">
                              <div className="text-center mb-3">
                                <h6 className="font-semibold text-gray-900">{rec.month} 2024</h6>
                                <div className="text-2xl font-bold text-emerald-600">
                                  ${rec.rate}{activeTab === 'hotels' ? '/night' : activeTab === 'airlines' ? '/ticket' : '/day'}
                                </div>
                                <div className="text-xs text-gray-500">
                                  vs current ${generatePricingRecommendations()[activeTab === 'hotels' ? 'baseADR' : activeTab === 'airlines' ? 'basePrice' : 'baseRate']}
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="text-xs text-gray-600">
                                  <strong>Strategy:</strong> {rec.reasoning}
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-500">Confidence Level</span>
                                  <div className="flex items-center space-x-1">
                                    <div className="w-16 bg-gray-200 rounded-full h-1.5">
                                      <div 
                                        className="bg-emerald-500 h-1.5 rounded-full" 
                                        style={{ width: `${rec.confidence}%` }}
                                      ></div>
                                    </div>
                                    <span className="text-xs font-medium text-emerald-600">{rec.confidence}%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* OTA Publishing Section */}
                        <div className="bg-white border border-emerald-200 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <h5 className="font-medium text-gray-900">Publish Rates to Distribution Channels</h5>
                              <p className="text-sm text-gray-600">Deploy AI-recommended rates across your booking channels</p>
                            </div>
                            <div className="text-xs text-gray-500">
                              Last sync: 2 hours ago
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg transition-colors">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/>
                              </svg>
                              <span className="font-medium">Booking.com</span>
                            </button>
                            <button className="flex items-center justify-center space-x-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-3 rounded-lg transition-colors">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/>
                              </svg>
                              <span className="font-medium">Expedia</span>
                            </button>
                            <button className="flex items-center justify-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg transition-colors">
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2L2 7v10c0 5.55 3.84 9.95 9 11 5.16-1.05 9-5.45 9-11V7l-10-5z"/>
                              </svg>
                              <span className="font-medium">Agoda</span>
                            </button>
                          </div>
                          
                          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                            <div className="flex items-start space-x-2">
                              <svg className="w-4 h-4 text-yellow-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                              <div>
                                <p className="text-sm text-yellow-800 font-medium">Rate Publishing Guidelines</p>
                                <p className="text-xs text-yellow-700 mt-1">
                                  Ensure rate parity compliance and consider BAR restrictions before publishing. 
                                  Changes take 2-4 hours to reflect across all channels.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Strategic Action Plan */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-gray-900">Strategic Action Plan</h4>
                      {generateActionPlan().map((section, sectionIndex) => (
                        <div key={sectionIndex} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors">
                          <div className="flex items-center justify-between mb-3">
                            <h5 className="font-medium text-gray-900">{section.category}</h5>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                section.priority === 'High' ? 'bg-red-100 text-red-800' :
                                section.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {section.priority} Priority
                              </span>
                              <span className="text-xs text-gray-500">{section.impact}</span>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            {section.recommendations.map((rec, recIndex) => (
                              <div key={recIndex} className="flex items-start space-x-3">
                                <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                                <p className="text-sm text-gray-700">{rec}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Implementation Support */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                      <h4 className="font-medium text-gray-900 mb-2">Implementation & Support</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Our revenue optimization experts can help implement these behavioral-driven strategies for maximum impact.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        <button
                          onClick={() => setBusinessInfo({name: '', type: '', location: '', size: ''})}
                          className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                          Generate New Plan
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Schedule Consultation
                        </button>
                        <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Export Action Plan
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

    {/* Data Sources & KPI Methodology Drawer */}
    {showDataSources && (
        <>
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setShowDataSources(false)}></div>
          <div className={`fixed right-0 top-0 h-full w-full max-w-4xl bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
            showDataSources ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Data Sources & KPI Methodology</h2>
                  <p className="text-gray-600">Revenue intelligence data sourcing and calculation transparency</p>
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
                        <li>• Competitive set analysis</li>
                        <li>• Market penetration metrics</li>
                        <li>• RevPAR and ADR trends</li>
                        <li>• Demand forecasting data</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <Calculator className="w-4 h-4 mr-2" />
                        Revenue Management Systems
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Real-time pricing analytics</li>
                        <li>• Booking pace analysis</li>
                        <li>• Demand optimization data</li>
                        <li>• Channel performance metrics</li>
                        <li>• Inventory management data</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Market Intelligence Platforms
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Competitor rate shopping</li>
                        <li>• Market demand indicators</li>
                        <li>• Seasonal trend analysis</li>
                        <li>• Event impact assessment</li>
                        <li>• Economic indicator correlation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        Customer Behavior Analytics
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Guest satisfaction surveys</li>
                        <li>• Booking pattern analysis</li>
                        <li>• Price sensitivity studies</li>
                        <li>• Channel preference tracking</li>
                        <li>• Loyalty program insights</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Revenue Intelligence KPI Methodologies */}
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calculator className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">Revenue Intelligence KPI Methodologies</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Revenue Performance Metrics</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>ADR (Average Daily Rate):</strong> Total room revenue ÷ total rooms sold</p>
                        <p><strong>RevPAR (Revenue per Available Room):</strong> ADR × Occupancy Rate</p>
                        <p><strong>GOPPAR (Gross Operating Profit per Available Room):</strong> Total GOP ÷ available rooms</p>
                        <p><strong>Revenue Uplift Potential:</strong> AI-predicted improvement based on optimization strategies</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Product Performance Analysis</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Customer Satisfaction Score:</strong> Weighted average of guest reviews (1-100 scale)</p>
                        <p><strong>Net Promoter Score (NPS):</strong> % Promoters - % Detractors</p>
                        <p><strong>Revenue Contribution:</strong> Product revenue as % of total property revenue</p>
                        <p><strong>Profit Margin:</strong> (Revenue - Direct Costs) ÷ Revenue × 100</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Behavioral Revenue Drivers</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Growth Rate Calculation:</strong> (Current Period - Previous Period) ÷ Previous Period × 100</p>
                        <p><strong>Premium Willingness:</strong> Price elasticity analysis from booking data</p>
                        <p><strong>Trend Impact Assessment:</strong> Revenue correlation with specific behavioral trends</p>
                        <p><strong>Market Share Analysis:</strong> Property performance vs. competitive set</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Product Lifecycle Metrics</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Stage Classification:</strong> Based on revenue growth rate and market penetration</p>
                        <p><strong>Portfolio Balance:</strong> Distribution of products across lifecycle stages</p>
                        <p><strong>Investment Priority:</strong> ROI potential weighted by market opportunity</p>
                        <p><strong>Strategic Positioning:</strong> Competitive advantage assessment per product</p>
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
                        <li>• Inventory availability</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Daily (6 AM GST)</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• STR performance data</li>
                        <li>• Customer satisfaction scores</li>
                        <li>• Market intelligence updates</li>
                        <li>• Financial performance metrics</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Weekly/Monthly</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Guest behavior analysis</li>
                        <li>• Product lifecycle assessments</li>
                        <li>• Strategic market positioning</li>
                        <li>• Revenue optimization opportunities</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Revenue Intelligence Data Validation
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-800">
                      <div>
                        <p><strong>Revenue Accuracy:</strong> ±1% variance tolerance for all financial metrics</p>
                        <p><strong>Predictive Confidence:</strong> 95% confidence intervals for revenue forecasts</p>
                      </div>
                      <div>
                        <p><strong>Multi-source Validation:</strong> Revenue metrics verified across 3+ data sources</p>
                        <p><strong>Real-time Monitoring:</strong> Automated alerts for significant deviations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default ProductInsights 