import { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  TrendingDown,
  Users, 
  Heart,
  Star,
  MapPin,
  Calendar,
  Smartphone,
  Leaf,
  Zap,
  Target,
  ArrowRight,
  Clock,
  Info,
  Building2,
  DollarSign,
  CheckCircle,
  BarChart3,
  X,
  Lightbulb,
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
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Cell,
  PieChart,
  Pie
} from 'recharts'

const ConsumerTrends = () => {
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

  // Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    type: 'hotel',
    category: '',
    location: ''
  })
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [businessSuggestions, setBusinessSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [showDataGuide, setShowDataGuide] = useState(false)

  // Mock business database for autocomplete
  const businessDatabase = [
    // Hotels
    { name: 'Burj Al Arab', type: 'hotel', category: 'luxury', location: 'Jumeirah, Dubai' },
    { name: 'Atlantis The Palm', type: 'hotel', category: 'luxury', location: 'Palm Jumeirah, Dubai' },
    { name: 'Emirates Palace', type: 'hotel', category: 'luxury', location: 'Abu Dhabi' },
    { name: 'Armani Hotel Dubai', type: 'hotel', category: 'luxury', location: 'Downtown Dubai' },
    { name: 'Four Seasons Resort Dubai', type: 'hotel', category: 'luxury', location: 'Jumeirah Beach, Dubai' },
    { name: 'Ritz Carlton Dubai', type: 'hotel', category: 'premium', location: 'DIFC, Dubai' },
    { name: 'Hilton Dubai Jumeirah', type: 'hotel', category: 'premium', location: 'Jumeirah Beach, Dubai' },
    { name: 'Marriott Downtown Abu Dhabi', type: 'hotel', category: 'premium', location: 'Downtown Abu Dhabi' },
    { name: 'JW Marriott Marquis Dubai', type: 'hotel', category: 'luxury', location: 'Business Bay, Dubai' },
    { name: 'Conrad Dubai', type: 'hotel', category: 'luxury', location: 'Sheikh Zayed Road, Dubai' },
    { name: 'Park Hyatt Dubai', type: 'hotel', category: 'luxury', location: 'Dubai Creek, Dubai' },
    { name: 'Waldorf Astoria Dubai', type: 'hotel', category: 'luxury', location: 'Palm Jumeirah, Dubai' },
    { name: 'Address Downtown Dubai', type: 'hotel', category: 'premium', location: 'Downtown Dubai' },
    { name: 'Jumeirah Beach Hotel', type: 'hotel', category: 'premium', location: 'Jumeirah Beach, Dubai' },
    
    // Restaurants
    { name: 'Nobu Dubai', type: 'restaurant', category: 'fine-dining', location: 'Atlantis The Palm, Dubai' },
    { name: 'La Petite Maison', type: 'restaurant', category: 'fine-dining', location: 'DIFC, Dubai' },
    { name: 'Zuma Dubai', type: 'restaurant', category: 'fine-dining', location: 'DIFC, Dubai' },
    { name: 'CÉ LA VIE Dubai', type: 'restaurant', category: 'fine-dining', location: 'Address Sky View, Dubai' },
    { name: 'Jones the Grocer', type: 'restaurant', category: 'casual-dining', location: 'Multiple Locations, Dubai' },
    { name: 'The Cheesecake Factory', type: 'restaurant', category: 'casual-dining', location: 'Dubai Mall, Dubai' },
    { name: 'Shake Shack', type: 'restaurant', category: 'fast-casual', location: 'Multiple Locations, UAE' },
    
    // Airlines
    { name: 'Emirates', type: 'airline', category: 'full-service', location: 'Dubai International Airport' },
    { name: 'Etihad Airways', type: 'airline', category: 'full-service', location: 'Abu Dhabi International Airport' },
    { name: 'flydubai', type: 'airline', category: 'low-cost', location: 'Dubai International Airport' },
    { name: 'Air Arabia', type: 'airline', category: 'low-cost', location: 'Sharjah International Airport' },
    { name: 'Qatar Airways', type: 'airline', category: 'full-service', location: 'Hamad International Airport, Doha' },
    { name: 'Saudi Arabian Airlines', type: 'airline', category: 'full-service', location: 'King Abdulaziz International Airport' },
    { name: 'Lufthansa', type: 'airline', category: 'full-service', location: 'Munich & Frankfurt Airports' },
    { name: 'British Airways', type: 'airline', category: 'full-service', location: 'London Heathrow Airport' },
    { name: 'Turkish Airlines', type: 'airline', category: 'full-service', location: 'Istanbul Airport' },
    
    // Car Rentals
    { name: 'Hertz UAE', type: 'car-rental', category: 'premium', location: 'Multiple Locations, UAE' },
    { name: 'Avis Dubai', type: 'car-rental', category: 'premium', location: 'Dubai International Airport' },
    { name: 'Budget Rent a Car', type: 'car-rental', category: 'budget', location: 'Multiple Locations, UAE' },
    { name: 'Thrifty Car Rental', type: 'car-rental', category: 'budget', location: 'Dubai & Abu Dhabi Airports' },
    { name: 'Sixt Rent a Car', type: 'car-rental', category: 'mid-size', location: 'Dubai Marina, Dubai' },
    { name: 'Enterprise Rent-A-Car', type: 'car-rental', category: 'mid-size', location: 'Multiple Locations, UAE' },
    { name: 'Diamond Lease', type: 'car-rental', category: 'luxury', location: 'Business Bay, Dubai' },
    { name: 'Be VIP Rent a Car', type: 'car-rental', category: 'luxury', location: 'Downtown Dubai' },
    { name: 'Europcar UAE', type: 'car-rental', category: 'mid-size', location: 'Dubai & Abu Dhabi' },
    { name: 'National Car Rental', type: 'car-rental', category: 'premium', location: 'Dubai International Airport' },
    { name: 'Alamo Rent A Car', type: 'car-rental', category: 'budget', location: 'Multiple Airport Locations' },
    { name: 'Fast Rent a Car', type: 'car-rental', category: 'budget', location: 'Multiple Locations, Dubai' },
    { name: 'Elite Rent a Car', type: 'car-rental', category: 'luxury', location: 'Luxury Vehicle Specialists, Dubai' },
    { name: 'Careem Car Rental', type: 'car-rental', category: 'mid-size', location: 'App-based, Multiple Locations' }
  ]

  // Emerging trend data
  const emergingTrends = [
    { 
      trend: 'Sustainable Travel', 
      growth: 156, 
      impact: 'High',
      adoption: 34,
      color: 'from-emerald-500 to-green-600',
      icon: Leaf,
      description: 'Eco-conscious bookings up 156% YoY'
    },
    { 
      trend: 'Bleisure Travel', 
      growth: 89, 
      impact: 'High',
      adoption: 28,
      color: 'from-blue-500 to-indigo-600',
      icon: Zap,
      description: 'Business + leisure trips growing rapidly'
    },
    { 
      trend: 'Digital Detox', 
      growth: 67, 
      impact: 'Medium',
      adoption: 19,
      color: 'from-purple-500 to-violet-600',
      icon: Smartphone,
      description: 'Tech-free vacation demand rising'
    },
    { 
      trend: 'Solo Female Travel', 
      growth: 124, 
      impact: 'High',
      adoption: 41,
      color: 'from-rose-500 to-pink-600',
      icon: Heart,
      description: 'Independent female travelers increasing'
    }
  ]

  // Consumer behavior evolution
  const behaviorEvolution = [
    { month: 'Jul', instantBooking: 45, advancePlanning: 55, lastMinute: 32 },
    { month: 'Aug', instantBooking: 52, advancePlanning: 58, lastMinute: 28 },
    { month: 'Sep', instantBooking: 48, advancePlanning: 62, lastMinute: 25 },
    { month: 'Oct', instantBooking: 61, advancePlanning: 59, lastMinute: 31 },
    { month: 'Nov', instantBooking: 58, advancePlanning: 64, lastMinute: 29 },
    { month: 'Dec', instantBooking: 67, advancePlanning: 68, lastMinute: 35 },
  ]

  // Travel motivations radar
  const travelMotivations = [
    { motivation: 'Wellness', current: 78, emerging: 92 },
    { motivation: 'Adventure', current: 85, emerging: 88 },
    { motivation: 'Culture', current: 72, emerging: 79 },
    { motivation: 'Luxury', current: 68, emerging: 75 },
    { motivation: 'Sustainability', current: 45, emerging: 87 },
    { motivation: 'Social Media', current: 82, emerging: 95 },
  ]

  // Generation preferences
  const generationData = [
    { name: 'Gen Z', experience: 45, convenience: 35, price: 20 },
    { name: 'Millennial', experience: 40, convenience: 35, price: 25 },
    { name: 'Gen X', experience: 30, convenience: 45, price: 25 },
    { name: 'Boomer', experience: 25, convenience: 35, price: 40 },
  ]

  // Seasonal attitude shifts
  const seasonalAttitudes = [
    { season: 'Spring', adventure: 85, relaxation: 65, cultural: 75, luxury: 55 },
    { season: 'Summer', adventure: 95, relaxation: 45, cultural: 60, luxury: 70 },
    { season: 'Fall', adventure: 70, relaxation: 85, cultural: 90, luxury: 80 },
    { season: 'Winter', adventure: 45, relaxation: 95, cultural: 70, luxury: 90 },
  ]

  // Consumer sentiment timeline
  const sentimentData = [
    { week: 'Week 1', confidence: 78, optimism: 85, satisfaction: 82 },
    { week: 'Week 2', confidence: 82, optimism: 88, satisfaction: 79 },
    { week: 'Week 3', confidence: 79, optimism: 82, satisfaction: 85 },
    { week: 'Week 4', confidence: 85, optimism: 90, satisfaction: 88 },
  ]

  // Business search functions
  const handleBusinessNameChange = (value) => {
    setBusinessInfo({...businessInfo, name: value})
    
    if (value.length > 1) {
      // Filter for hotels, airlines, and car rentals only
      const filtered = businessDatabase.filter(business =>
        business.name.toLowerCase().includes(value.toLowerCase()) &&
        (business.type === 'hotel' || business.type === 'airline' || business.type === 'car-rental')
      ).slice(0, 6) // Show max 6 suggestions
      
      setBusinessSuggestions(filtered)
      setShowSuggestions(true)
    } else {
      setBusinessSuggestions([])
      setShowSuggestions(false)
    }
  }

  const selectBusiness = (business) => {
    setBusinessInfo({
      name: business.name,
      type: business.type,
      category: business.category,
      location: business.location
    })
    setShowSuggestions(false)
    setBusinessSuggestions([])
  }

  // Drawer functions
  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (businessInfo.name && businessInfo.type && businessInfo.category) {
      setShowRecommendations(true)
    }
  }

  const generateTrendBasedRecommendations = () => {
    const isHotel = businessInfo.type === 'hotel'
    const isLuxury = businessInfo.category === 'luxury' || businessInfo.category === 'fine-dining' || 
                     businessInfo.category === 'full-service' || businessInfo.category === 'premium'
    
    return [
      {
        id: 1,
        trend: 'Sustainable Travel (+156%)',
        priority: 'High',
        timeline: '30-45 days',
        investment: isLuxury ? '$50K-$100K' : '$15K-$30K',
        roi: '180-250%',
        action: businessInfo.type === 'hotel' 
          ? `Launch eco-certification program for ${businessInfo.name}` 
          : businessInfo.type === 'restaurant'
          ? `Implement sustainable dining practices at ${businessInfo.name}`
          : businessInfo.type === 'airline'
          ? `Launch carbon offset programs for ${businessInfo.name}`
          : `Implement green fleet initiatives at ${businessInfo.name}`,
        description: businessInfo.type === 'hotel'
          ? 'Obtain Green Key certification, install energy-efficient systems, and launch green packages'
          : businessInfo.type === 'restaurant'
          ? 'Source local organic ingredients, eliminate single-use plastics, create farm-to-table menu'
          : businessInfo.type === 'airline'
          ? 'Launch sustainable aviation fuel programs, carbon offset options, and eco-friendly cabin amenities'
          : 'Transition to electric/hybrid fleet, implement carbon-neutral delivery, partner with eco-conscious suppliers',
        steps: businessInfo.type === 'hotel' ? [
          'Apply for Green Key or EarthCheck certification',
          'Install LED lighting and smart thermostats',
          'Partner with local eco-tour operators',
          'Launch "Green Stay" packages with premium pricing',
          'Train staff on sustainability practices'
        ] : businessInfo.type === 'restaurant' ? [
          'Partner with local organic farms and suppliers',
          'Replace single-use items with biodegradable alternatives',
          'Create seasonal menu highlighting local ingredients', 
          'Launch "Sustainable Dining" experience',
          'Install water filtration systems'
        ] : businessInfo.type === 'airline' ? [
          'Partner with sustainable aviation fuel suppliers',
          'Launch passenger carbon offset programs',
          'Replace single-use cabin items with eco-friendly alternatives',
          'Implement fuel-efficient flight routing',
          'Obtain carbon neutrality certification'
        ] : [
          'Research electric/hybrid vehicle options for fleet',
          'Partner with renewable energy providers',
          'Implement paperless booking and documentation',
          'Launch "Green Drive" sustainability packages',
          'Install EV charging stations at locations'
        ],
        kpis: ['Certification completion', 'Energy cost reduction', 'Premium bookings', 'Guest satisfaction'],
        icon: Leaf,
        color: 'emerald'
      },
      {
        id: 2, 
        trend: 'Solo Female Travel (+124%)',
        priority: 'High',
        timeline: '15-30 days',
        investment: isLuxury ? '$25K-$50K' : '$8K-$20K',
        roi: '200-300%',
        action: businessInfo.type === 'hotel' 
          ? `Create women-only spaces and safety programs at ${businessInfo.name}`
          : businessInfo.type === 'restaurant'
          ? `Design female-friendly dining experiences at ${businessInfo.name}`
          : businessInfo.type === 'airline'
          ? `Launch female-focused travel services at ${businessInfo.name}`
          : `Implement women's safety features at ${businessInfo.name}`,
        description: businessInfo.type === 'hotel'
          ? 'Develop female-only floors, enhanced security, and women-centric amenities'
          : businessInfo.type === 'restaurant'
          ? 'Create safe, welcoming environment with solo dining options and events'
          : businessInfo.type === 'airline'
          ? 'Develop women-only check-in, priority seating, and female crew assistance programs'
          : 'Implement female driver options, safety tracking, and women-focused vehicle features',
        steps: businessInfo.type === 'hotel' ? [
          'Designate female-only floor or wing',
          'Install enhanced security features',
          'Train female concierge specialists',
          'Partner with female travel groups',
          'Create "Solo Female Traveler" packages'
        ] : businessInfo.type === 'restaurant' ? [
          'Design comfortable solo dining spaces',
          'Train staff on solo female diner preferences',
          'Create book clubs or events for female diners',
          'Offer express service options',
          'Partner with women-focused organizations'
        ] : businessInfo.type === 'airline' ? [
          'Implement women-only check-in counters',
          'Offer female-only seating sections',
          'Train female cabin crew specialists',
          'Create "Women Travelers" loyalty program',
          'Partner with women-focused travel organizations'
        ] : [
          'Recruit and train female drivers',
          'Install enhanced vehicle safety features',
          'Implement real-time GPS tracking sharing',
          'Create "Women Drive Safe" packages',
          'Partner with women safety organizations'
        ],
        kpis: ['Female guest bookings', 'Safety ratings', 'Repeat bookings', 'Social media mentions'],
        icon: Heart,
        color: 'rose'
      },
      {
        id: 3,
        trend: 'Bleisure Travel (+89%)',
        priority: 'Medium',
        timeline: '45-60 days',
        investment: isLuxury ? '$75K-$150K' : '$25K-$50K',
        roi: '150-200%',
        action: businessInfo.type === 'hotel' 
          ? `Launch bleisure packages at ${businessInfo.name}`
          : businessInfo.type === 'restaurant'
          ? `Create co-working dining spaces at ${businessInfo.name}`
          : businessInfo.type === 'airline'
          ? `Launch business-leisure travel packages at ${businessInfo.name}`
          : `Implement bleisure rental programs at ${businessInfo.name}`,
        description: businessInfo.type === 'hotel'
          ? 'Develop hybrid business-leisure packages with flexible booking and workspaces'
          : businessInfo.type === 'restaurant'
          ? 'Design spaces that accommodate business meals and work-friendly dining'
          : businessInfo.type === 'airline'
          ? 'Create flexible tickets combining business trips with leisure extensions'
          : 'Offer extended rental periods and premium vehicles for business travelers with leisure plans',
        steps: businessInfo.type === 'hotel' ? [
          'Create flexible booking policies',
          'Design co-working spaces with leisure views',
          'Partner with local business centers',
          'Develop 3-7 day bleisure packages',
          'Offer concierge business services'
        ] : businessInfo.type === 'restaurant' ? [
          'Install business-friendly WiFi and charging stations',
          'Create private dining rooms for meetings',
          'Offer express lunch options for business travelers',
          'Design quiet zones for calls/work',
          'Partner with nearby hotels for referrals'
        ] : businessInfo.type === 'airline' ? [
          'Develop flexible ticket change policies',
          'Create bleisure travel packages with hotel partners',
          'Offer extended stopover programs',
          'Launch business + leisure fare classes',
          'Partner with local tour operators'
        ] : [
          'Create extended rental discount packages',
          'Offer premium vehicle upgrades for longer rentals',
          'Partner with business hotels and leisure attractions',
          'Develop "Business + Play" rental packages',
          'Provide concierge travel planning services'
        ],
        kpis: ['Bleisure bookings', 'Extended stays', 'Business services usage', 'Corporate partnerships'],
        icon: Zap,
        color: 'blue'
      }
    ]
  }

  const resetDrawer = () => {
    setBusinessInfo({ name: '', type: 'hotel', category: '', location: '' })
    setShowRecommendations(false)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    setTimeout(resetDrawer, 300) // Reset after animation completes
  }

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isDrawerOpen])

  return (
    <>
      <div className="space-y-8 p-2">
      {/* Market Context & Time Period Header */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-100 rounded-lg">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{marketRegion}</h3>
                <p className="text-sm text-gray-600">{marketScope}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{currentPeriod}</h3>
                <p className="text-sm text-gray-600">Consumer Trends Analysis</p>
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
              <span className="text-xs text-gray-500">Live Trends</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
              Consumer Trends Intelligence
            </h1>
            <p className="text-gray-600 mt-2 text-lg">
              Emerging behaviors & attitudes shaping travel decisions
            </p>
            <p className="text-gray-500 mt-1 text-base">
              {marketScope} • {currentPeriod} Behavioral Analysis
            </p>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-center group relative">
              <p className="text-sm text-gray-500">Trend Confidence</p>
              <p className="text-2xl font-bold text-emerald-600">94.2%</p>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 p-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <p className="text-sm text-gray-700 font-semibold mb-1">Trend Confidence Score</p>
                <p className="text-xs text-gray-600">Statistical confidence in trend predictions based on data quality, sample size, and correlation strength.</p>
              </div>
            </div>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Target className="w-5 h-5" />
              <span>Get Action Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Data Guide Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
        <div 
          className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors"
          onClick={() => setShowDataGuide(!showDataGuide)}
        >
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Calculator className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">How to Read Consumer Trends Data</h3>
              <p className="text-sm text-gray-600">Complete guide to understanding metrics, charts, and insights</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">
              {showDataGuide ? 'Hide Guide' : 'Show Guide'}
            </span>
            {showDataGuide ? (
              <ChevronUp className="w-5 h-5 text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-400" />
            )}
          </div>
        </div>
        
        {showDataGuide && (
          <div className="px-6 pb-6 border-t border-gray-100">
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Trend Metrics Guide */}
              <div className="space-y-6">
                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <TrendingUp className="w-5 h-5 text-emerald-600" />
                    <h4 className="font-bold text-gray-900">Understanding Trend Metrics</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Growth Rate (%)</h5>
                      <p className="text-sm text-gray-600">Year-over-year percentage change in consumer interest, measured through search volume, booking patterns, and social media mentions.</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Adoption Rate (%)</h5>
                      <p className="text-sm text-gray-600">Percentage of travelers currently engaging with this trend. Values range from 0-100%, with higher values indicating mainstream adoption.</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Impact Level</h5>
                      <p className="text-sm text-gray-600">
                        <strong>High:</strong> Major revenue/strategy implications<br/>
                        <strong>Medium:</strong> Moderate business impact<br/>
                        <strong>Low:</strong> Emerging opportunity
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    <h4 className="font-bold text-gray-900">Chart Reading Guide</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Line Charts (Behavior Evolution)</h5>
                      <p className="text-sm text-gray-600">Track changes over time. Upward trends indicate growing behaviors, downward trends show declining patterns.</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Radar Charts (Motivations)</h5>
                      <p className="text-sm text-gray-600">Compare multiple factors on a 0-100 scale. Larger areas indicate stronger performance or higher values.</p>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Stacked Charts (Generational)</h5>
                      <p className="text-sm text-gray-600">Show proportional breakdowns. Each segment represents percentage contribution to the total (100%).</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Sources & Methodology */}
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Database className="w-5 h-5 text-purple-600" />
                    <h4 className="font-bold text-gray-900">Data Sources & Quality</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Primary Data Sources</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Consumer surveys (12,500+ respondents)</li>
                        <li>• Booking system analytics</li>
                        <li>• Social media sentiment analysis</li>
                        <li>• Search trend data</li>
                        <li>• Industry research reports</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Sample Demographics</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Geographic: GCC region focus</li>
                        <li>• Age range: 18-65+ years</li>
                        <li>• Income: Premium travel segment</li>
                        <li>• Travel frequency: 2+ trips/year</li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Data Freshness</h5>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Real-time: Social sentiment, booking data</li>
                        <li>• Weekly: Consumer surveys, search trends</li>
                        <li>• Monthly: Industry reports, competitor analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <HelpCircle className="w-5 h-5 text-yellow-600" />
                    <h4 className="font-bold text-gray-900">Key Interpretation Tips</h4>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-600">Growth rates above 50% indicate strong emerging trends worth immediate attention.</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-600">Adoption rates above 30% suggest trends are moving from niche to mainstream.</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-600">Seasonal variations are normal - focus on year-over-year comparisons.</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-yellow-600 rounded-full mt-2"></div>
                      <p className="text-sm text-gray-600">High-impact + high-growth trends require immediate strategic planning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="flex items-start space-x-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Statistical Confidence & Reliability</h5>
                  <p className="text-sm text-gray-700 mb-3">
                    Our trend analysis uses statistical methods to ensure reliability and actionability:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div>
                      <p className="font-medium text-gray-700">Confidence Intervals</p>
                      <p>95% confidence level for all trend predictions</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Sample Size</p>
                      <p>Minimum 1,000 data points per trend metric</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-700">Validation</p>
                      <p>Cross-validated with external industry data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Emerging Trends Cards */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-900">Emerging Travel Trends</h2>
            <div className="group relative">
              <HelpCircle className="w-5 h-5 text-gray-400 hover:text-emerald-600 cursor-help" />
              <div className="absolute left-0 top-8 w-80 p-4 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <p className="text-sm text-gray-700 mb-3">
                  These cards show the most significant emerging trends based on consumer behavior analysis and booking data.
                </p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>Growth Rate:</strong> Year-over-year increase in consumer interest</p>
                  <p><strong>Adoption:</strong> Current percentage of travelers engaging with this trend</p>
                  <p><strong>Impact Level:</strong> Potential business/revenue implications</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Top 4 Emerging Trends</p>
            <p className="text-xs text-gray-500">{currentPeriod} Analysis</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {emergingTrends.map((trend, index) => {
          const Icon = trend.icon
          return (
            <div key={index} className="group relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-gray-200">
              <div className={`absolute inset-0 bg-gradient-to-br ${trend.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${trend.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    trend.impact === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {trend.impact} Impact
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2">{trend.trend}</h3>
                <p className="text-sm text-gray-600 mb-4">{trend.description}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Growth Rate</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-emerald-600">+{trend.growth}%</span>
                      <div className="group/tooltip relative">
                        <HelpCircle className="w-3 h-3 text-gray-400 hover:text-blue-600 cursor-help" />
                        <div className="absolute right-0 top-5 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20">
                          YoY growth in searches, bookings, and social mentions
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Adoption</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-semibold">{trend.adoption}%</span>
                        <div className="group/tooltip relative">
                          <HelpCircle className="w-3 h-3 text-gray-400 hover:text-blue-600 cursor-help" />
                          <div className="absolute right-0 top-5 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20">
                            Current percentage of travelers actively engaging with this trend
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${trend.color}`}
                        style={{ width: `${trend.adoption}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Consumer Behavior Evolution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Consumer Behavior Evolution</h3>
                <p className="text-sm text-gray-600">{marketRegion} • {currentPeriod}</p>
              </div>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-help" />
                <div className="absolute left-0 top-6 w-72 p-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>How to read this chart:</strong> Track changes in booking behaviors over time.
                  </p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p><strong>Instant Booking:</strong> Same-day booking decisions</p>
                    <p><strong>Advance Planning:</strong> Bookings made 30+ days ahead</p>
                    <p><strong>Last Minute:</strong> Bookings within 7 days of travel</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>6-Month Trend</p>
              <p>Jul - Dec 2024</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={behaviorEvolution}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="instantBooking" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Instant Booking"
              />
              <Line 
                type="monotone" 
                dataKey="advancePlanning" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Advance Planning"
              />
              <Line 
                type="monotone" 
                dataKey="lastMinute" 
                stroke="#F59E0B" 
                strokeWidth={3}
                name="Last Minute"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Travel Motivations Radar */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Travel Motivations</h3>
                <p className="text-sm text-gray-600">{currentPeriod} vs Emerging Trends</p>
              </div>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 hover:text-purple-600 cursor-help" />
                <div className="absolute left-0 top-6 w-72 p-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>How to read this radar chart:</strong> Compare current motivations (purple) vs emerging trends (green).
                  </p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p>• Larger areas = stronger motivations</p>
                    <p>• Gap between lines = growth opportunity</p>
                    <p>• Scale: 0-100 (consumer interest level)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>Motivation Strength</p>
              <p>0-100 Scale</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={travelMotivations}>
              <PolarGrid />
              <PolarAngleAxis dataKey="motivation" />
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
                name="Emerging" 
                dataKey="emerging" 
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.2}
                strokeWidth={2}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Generational Preferences & Seasonal Attitudes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-amber-100 rounded-lg">
                <Users className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Generational Preferences</h3>
                <p className="text-sm text-gray-600">{marketScope} Breakdown</p>
              </div>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 hover:text-amber-600 cursor-help" />
                <div className="absolute left-0 top-6 w-72 p-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>How to read this chart:</strong> Stacked bars show priority breakdown for each generation (totals 100%).
                  </p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p><strong>Experience:</strong> Unique experiences & activities</p>
                    <p><strong>Convenience:</strong> Ease of booking & travel</p>
                    <p><strong>Price:</strong> Value for money considerations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>Priority Distribution</p>
              <p>Percentage Breakdown</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={generationData} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Bar dataKey="experience" stackId="a" fill="#3B82F6" name="Experience" />
              <Bar dataKey="convenience" stackId="a" fill="#10B981" name="Convenience" />
              <Bar dataKey="price" stackId="a" fill="#F59E0B" name="Price" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-rose-100 rounded-lg">
                <Star className="w-5 h-5 text-rose-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">Seasonal Attitude Shifts</h3>
                <p className="text-sm text-gray-600">{currentPeriod} Seasonal Analysis</p>
              </div>
              <div className="group relative">
                <HelpCircle className="w-4 h-4 text-gray-400 hover:text-rose-600 cursor-help" />
                <div className="absolute left-0 top-6 w-72 p-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>How to read this chart:</strong> Stacked areas show travel attitude intensity by season (0-100 scale).
                  </p>
                  <div className="space-y-1 text-xs text-gray-600">
                    <p><strong>Adventure:</strong> Seeking thrills & new experiences</p>
                    <p><strong>Relaxation:</strong> Rest & wellness focused</p>
                    <p><strong>Cultural:</strong> Heritage & local experiences</p>
                    <p><strong>Luxury:</strong> Premium service preferences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right text-sm text-gray-500">
              <p>Attitude Intensity</p>
              <p>Seasonal Patterns</p>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={seasonalAttitudes}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="season" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="adventure" 
                stackId="1"
                stroke="#3B82F6" 
                fill="#3B82F6" 
                fillOpacity={0.8}
                name="Adventure"
              />
              <Area 
                type="monotone" 
                dataKey="relaxation" 
                stackId="1"
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.8}
                name="Relaxation"
              />
              <Area 
                type="monotone" 
                dataKey="cultural" 
                stackId="1"
                stroke="#8B5CF6" 
                fill="#8B5CF6" 
                fillOpacity={0.8}
                name="Cultural"
              />
              <Area 
                type="monotone" 
                dataKey="luxury" 
                stackId="1"
                stroke="#F59E0B" 
                fill="#F59E0B" 
                fillOpacity={0.8}
                name="Luxury"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Consumer Sentiment Timeline */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Heart className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Consumer Sentiment Timeline</h3>
              <p className="text-sm text-gray-600">{marketRegion} • {currentPeriod} Weekly Tracking</p>
            </div>
            <div className="group relative">
              <HelpCircle className="w-4 h-4 text-gray-400 hover:text-emerald-600 cursor-help" />
              <div className="absolute left-0 top-6 w-72 p-3 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>How to read this chart:</strong> Track weekly changes in consumer sentiment across multiple dimensions.
                </p>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><strong>Confidence Index:</strong> Travel confidence level (0-100)</p>
                  <p><strong>Optimism Level:</strong> Positive future outlook</p>
                  <p><strong>Satisfaction Score:</strong> Current service satisfaction</p>
                  <p>• Higher values = more positive sentiment</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>Real-time Sentiment Analysis</p>
            <p>Weekly Consumer Pulse</p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={sentimentData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="confidence" 
              stroke="#3B82F6" 
              strokeWidth={3}
              name="Confidence Index"
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="optimism" 
              stroke="#10B981" 
              strokeWidth={3}
              name="Optimism Level"
              dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="satisfaction" 
              stroke="#8B5CF6" 
              strokeWidth={3}
              name="Satisfaction Score"
              dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Strategic Insights Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold">Strategic Consumer Insights</h3>
          <div className="text-right text-sm text-emerald-100">
            <p>{marketScope}</p>
            <p>{currentPeriod} Key Findings</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <Leaf className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-2">Sustainability Focus</h4>
            <p className="text-sm opacity-90">
              156% growth in eco-conscious travel. Immediate opportunity for green certification programs.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <Heart className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-2">Solo Female Travel</h4>
            <p className="text-sm opacity-90">
              124% increase in independent female travelers. Safety-focused packages showing high demand.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <Zap className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-2">Bleisure Revolution</h4>
            <p className="text-sm opacity-90">
              Business-leisure hybrid trips up 89%. Flexible accommodation packages needed.
            </p>
          </div>
          
          <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
            <Target className="w-8 h-8 mb-3" />
            <h4 className="font-semibold mb-2">Digital Integration</h4>
            <p className="text-sm opacity-90">
              Social media influence at 95%. Digital detox demand creates unique positioning opportunity.
            </p>
          </div>
        </div>
      </div>

      {/* Action Plan Drawer */}
      <div className={`fixed inset-0 z-50 overflow-hidden transition-opacity duration-300 ${isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div 
          className={`absolute inset-0 bg-black transition-all duration-300 ${isDrawerOpen ? 'bg-opacity-20' : 'bg-opacity-0'}`} 
          onClick={closeDrawer}
        ></div>
        <div className={`absolute right-0 top-0 h-full w-full max-w-2xl bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex flex-col h-full">
              {/* Drawer Header */}
              <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Actionable Business Intelligence</h2>
                    <p className="text-teal-100">Transform trends into immediate actions</p>
                  </div>
                </div>
                <button
                  onClick={closeDrawer}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Drawer Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {!showRecommendations ? (
                  /* Business Information Form */
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="p-2 bg-teal-100 rounded-lg">
                        <Building2 className="w-5 h-5 text-teal-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">Your Business Information</h3>
                    </div>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="relative">
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Name *
                          </label>
                          <input
                            type="text"
                            value={businessInfo.name}
                            onChange={(e) => handleBusinessNameChange(e.target.value)}
                            onFocus={() => businessInfo.name.length > 1 && setShowSuggestions(true)}
                            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            placeholder="Search hotels, airlines, or car rentals..."
                            required
                          />
                          
                          {/* Business Suggestions Dropdown */}
                          {showSuggestions && businessSuggestions.length > 0 && (
                            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
                              {businessSuggestions.map((business, index) => (
                                <div
                                  key={index}
                                  onClick={() => selectBusiness(business)}
                                  className="px-4 py-3 hover:bg-teal-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                                >
                                  <div className="font-semibold text-gray-900">{business.name}</div>
                                  <div className="text-sm text-gray-600 capitalize">
                                    {business.type.replace('-', ' ')} • {business.category.replace('-', ' ')}
                                  </div>
                                  <div className="text-sm text-gray-500">{business.location}</div>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Business Type *
                          </label>
                          <select
                            value={businessInfo.type}
                            onChange={(e) => setBusinessInfo({...businessInfo, type: e.target.value, category: ''})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            required
                          >
                            <option value="hotel">Hotel</option>
                            <option value="restaurant">Restaurant</option>
                            <option value="airline">Airline</option>
                            <option value="car-rental">Car Rental</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category *
                          </label>
                          <select
                            value={businessInfo.category}
                            onChange={(e) => setBusinessInfo({...businessInfo, category: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            required
                          >
                            <option value="">Select category</option>
                            {businessInfo.type === 'hotel' && (
                              <>
                                <option value="luxury">Luxury (5-star)</option>
                                <option value="premium">Premium (4-star)</option>
                                <option value="mid-range">Mid-range (3-star)</option>
                                <option value="budget">Budget (1-2 star)</option>
                              </>
                            )}
                            {businessInfo.type === 'restaurant' && (
                              <>
                                <option value="fine-dining">Fine Dining</option>
                                <option value="casual-dining">Casual Dining</option>
                                <option value="fast-casual">Fast Casual</option>
                                <option value="cafe">Cafe/Bistro</option>
                              </>
                            )}
                            {businessInfo.type === 'airline' && (
                              <>
                                <option value="full-service">Full-Service Carrier</option>
                                <option value="low-cost">Low-Cost Carrier</option>
                                <option value="regional">Regional Airline</option>
                                <option value="charter">Charter Airline</option>
                              </>
                            )}
                            {businessInfo.type === 'car-rental' && (
                              <>
                                <option value="luxury">Luxury Fleet</option>
                                <option value="premium">Premium Service</option>
                                <option value="mid-size">Mid-Size Provider</option>
                                <option value="budget">Budget Option</option>
                              </>
                            )}
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Location
                          </label>
                          <input
                            type="text"
                            value={businessInfo.location}
                            onChange={(e) => setBusinessInfo({...businessInfo, location: e.target.value})}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                            placeholder="e.g., Downtown Dubai, Marina"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-200 flex items-center justify-center space-x-2"
                      >
                        <Lightbulb className="w-5 h-5" />
                        <span>Generate Trend-Based Action Plan</span>
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                ) : (
                  /* Generated Recommendations */
                  <div className="space-y-6">
                    {/* Business Summary */}
                    <div className="bg-gradient-to-r from-teal-600 to-emerald-600 rounded-xl p-6 text-white">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold">Action Plan for {businessInfo.name}</h3>
                          <p className="text-teal-100">
                            {businessInfo.type === 'hotel' ? 'Hotel' : 'Restaurant'} • {businessInfo.category}
                            {businessInfo.location && ` • ${businessInfo.location}`}
                          </p>
                        </div>
                        <button
                          onClick={() => setShowRecommendations(false)}
                          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                        >
                          Edit Info
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                          <BarChart3 className="w-5 h-5 mb-1" />
                          <p className="text-xs text-teal-100">Opportunities</p>
                          <p className="text-lg font-bold">3</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                          <TrendingUp className="w-5 h-5 mb-1" />
                          <p className="text-xs text-teal-100">Projected ROI</p>
                          <p className="text-lg font-bold">150-300%</p>
                        </div>
                        <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                          <Clock className="w-5 h-5 mb-1" />
                          <p className="text-xs text-teal-100">Timeline</p>
                          <p className="text-lg font-bold">15-60 days</p>
                        </div>
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="space-y-4">
                      {generateTrendBasedRecommendations().map((recommendation) => {
                        const Icon = recommendation.icon
                        return (
                          <div key={recommendation.id} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-br ${
                                  recommendation.color === 'emerald' ? 'from-emerald-500 to-green-600' :
                                  recommendation.color === 'rose' ? 'from-rose-500 to-pink-600' :
                                  'from-blue-500 to-indigo-600'
                                }`}>
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <h4 className="font-bold text-gray-900">{recommendation.action}</h4>
                                  <p className="text-sm text-gray-600">{recommendation.description}</p>
                                </div>
                              </div>
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                recommendation.priority === 'High' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                              }`}>
                                {recommendation.priority}
                              </span>
                            </div>

                            <div className="grid grid-cols-3 gap-4 mb-4">
                              <div className="text-center">
                                <p className="text-xs text-gray-500">Timeline</p>
                                <p className="font-semibold text-sm">{recommendation.timeline}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">Investment</p>
                                <p className="font-semibold text-sm">{recommendation.investment}</p>
                              </div>
                              <div className="text-center">
                                <p className="text-xs text-gray-500">Expected ROI</p>
                                <p className="font-semibold text-sm">{recommendation.roi}</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <h5 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                                  <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                                  Action Steps
                                </h5>
                                <ol className="space-y-1">
                                  {recommendation.steps.slice(0, 3).map((step, i) => (
                                    <li key={i} className="flex items-start space-x-2 text-sm">
                                      <span className="flex-shrink-0 w-4 h-4 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs font-semibold">
                                        {i + 1}
                                      </span>
                                      <span className="text-gray-700">{step}</span>
                                    </li>
                                  ))}
                                </ol>
                              </div>

                              <div>
                                <h5 className="font-semibold text-gray-900 mb-2 flex items-center text-sm">
                                  <BarChart3 className="w-4 h-4 text-purple-600 mr-1" />
                                  Success KPIs
                                </h5>
                                <div className="space-y-1">
                                  {recommendation.kpis.slice(0, 3).map((kpi, i) => (
                                    <div key={i} className="flex items-center space-x-2 text-sm">
                                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                                      <span className="text-gray-700">{kpi}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsumerTrends 