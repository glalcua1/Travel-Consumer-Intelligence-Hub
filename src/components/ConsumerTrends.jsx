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
  Database,
  Globe,
  Activity
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

  const [showDataSources, setShowDataSources] = useState(false)

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

  // Revenue-driving behavioral trends
  const revenueDrivers = [
    { 
      trend: 'Sustainable Travel Premium', 
      growth: 156, 
      impact: 'High',
      adoption: 34,
      premiumWillingness: 22,
      revenueUplift: 340,
      color: 'from-emerald-500 to-green-600',
      icon: Leaf,
      description: 'Eco-conscious travelers pay 22% premium for sustainable options'
    },
    { 
      trend: 'Bleisure Package Bundles', 
      growth: 89, 
      impact: 'High',
      adoption: 28,
      premiumWillingness: 28,
      revenueUplift: 420,
      color: 'from-blue-500 to-indigo-600',
      icon: Zap,
      description: 'Business travelers extend stays for leisure at premium rates'
    },
    { 
      trend: 'Solo Female Travel Premium', 
      growth: 124, 
      impact: 'High',
      adoption: 41,
      premiumWillingness: 35,
      revenueUplift: 285,
      color: 'from-rose-500 to-pink-600',
      icon: Heart,
      description: 'Solo female travelers pay premium for safety and convenience'
    },
    { 
      trend: 'Digital Detox Luxury', 
      growth: 67, 
      impact: 'Medium',
      adoption: 19,
      premiumWillingness: 18,
      revenueUplift: 125,
      color: 'from-purple-500 to-violet-600',
      icon: Smartphone,
      description: 'Tech-free experiences command luxury pricing premiums'
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



  // Demographics and audience analysis data
  const audienceData = {
    ageGroups: [
      { age: '25-34', percentage: 32, travelers: '2.1M', spending: '$2,850' },
      { age: '35-44', percentage: 28, travelers: '1.8M', spending: '$3,420' },
      { age: '45-54', percentage: 22, travelers: '1.4M', spending: '$4,100' },
      { age: '18-24', percentage: 12, travelers: '780K', spending: '$1,650' },
      { age: '55+', percentage: 6, travelers: '390K', spending: '$5,200' }
    ],
    travelTypes: [
      { type: 'Leisure', percentage: 45, growth: '+18%', avgSpend: '$3,200', icon: Heart },
      { type: 'Business', percentage: 32, growth: '+8%', avgSpend: '$4,800', icon: Building2 },
      { type: 'Bleisure', percentage: 15, growth: '+89%', avgSpend: '$5,400', icon: Zap },
      { type: 'Medical Tourism', percentage: 5, growth: '+34%', avgSpend: '$8,200', icon: Activity },
      { type: 'Events & Conferences', percentage: 3, growth: '+12%', avgSpend: '$3,800', icon: Calendar }
    ],
    demographics: {

      travelerTypes: [
        { type: 'Solo Travelers', percentage: 28, avgStay: '4.2 days', preference: 'Flexibility & independence' },
        { type: 'Couples', percentage: 35, avgStay: '5.8 days', preference: 'Romance & experiences' },
        { type: 'Families', percentage: 22, avgStay: '6.5 days', preference: 'Safety & activities' },
        { type: 'Friends Groups', percentage: 12, avgStay: '4.8 days', preference: 'Adventure & nightlife' },
        { type: 'Business Groups', percentage: 3, avgStay: '3.2 days', preference: 'Convenience & efficiency' }
      ]
    }
  }

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
              <span>Get Action Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>




      {/* Revenue-Driving Behavioral Trends */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <h2 className="text-2xl font-bold text-gray-900">Revenue-Driving Behavioral Trends</h2>
            <div className="group relative">
              <HelpCircle className="w-5 h-5 text-gray-400 hover:text-emerald-600 cursor-help" />
              <div className="absolute left-0 top-8 w-80 p-4 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                <p className="text-sm text-gray-700 mb-3">
                  These behavioral trends show strong revenue potential through premium pricing opportunities and higher willingness to pay.
                </p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>Growth Rate:</strong> Year-over-year increase in demand</p>
                  <p><strong>Premium Willingness:</strong> Additional percentage customers will pay</p>
                  <p><strong>Revenue Uplift:</strong> Projected revenue increase in thousands AED</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowDataSources(true)}
              className="p-2 bg-gray-100 hover:bg-emerald-100 rounded-lg transition-colors group"
              title="Data Sources & KPI Methodology"
            >
              <HelpCircle className="w-4 h-4 text-gray-500 group-hover:text-emerald-600" />
            </button>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">Top 4 Revenue Drivers</p>
            <p className="text-xs text-gray-500">{currentPeriod} Intelligence</p>
            <p className="flex items-center justify-end text-xs text-gray-500">
              <Database className="w-3 h-3 mr-1" />
              STR • Survey Data • Analytics
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {revenueDrivers.map((trend, index) => {
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
                          YoY growth in demand and bookings for this trend
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Premium Willingness</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-lg font-bold text-blue-600">+{trend.premiumWillingness}%</span>
                      <div className="group/tooltip relative">
                        <HelpCircle className="w-3 h-3 text-gray-400 hover:text-blue-600 cursor-help" />
                        <div className="absolute right-0 top-5 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20">
                          Additional percentage customers will pay for this experience
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Revenue Uplift</span>
                      <div className="flex items-center space-x-1">
                        <span className="text-sm font-semibold text-green-600">+{trend.revenueUplift}K AED</span>
                        <div className="group/tooltip relative">
                          <HelpCircle className="w-3 h-3 text-gray-400 hover:text-blue-600 cursor-help" />
                          <div className="absolute right-0 top-5 w-48 p-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-20">
                            Projected quarterly revenue increase from implementing this trend
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-gradient-to-r ${trend.color}`}
                        style={{ width: `${trend.premiumWillingness * 2}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dubai Source Markets - World Map */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Globe className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Dubai Source Markets Intelligence</h3>
              <p className="text-sm text-gray-600">Top international visitor markets • {currentPeriod} Analysis</p>
            </div>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p>6.5M Total Visitors</p>
            <p>+16% vs {previousPeriod}</p>
          </div>
        </div>
        
        {/* Source Markets Overview */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Top Source Markets</h3>
              <p className="text-gray-600">International visitor distribution • Q3 2024</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">6.5M</div>
              <div className="text-sm text-gray-500">Total Visitors</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Saudi Arabia - Top Source Market */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🇸🇦</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">28%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Saudi Arabia</h4>
              <p className="text-lg font-bold text-blue-600 mb-1">1.82M</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{width: '93%'}}></div>
              </div>
            </div>

            {/* India - Second Largest */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🇮🇳</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">18%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">India</h4>
              <p className="text-lg font-bold text-blue-600 mb-1">1.17M</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{width: '75%'}}></div>
              </div>
            </div>

            {/* United Kingdom */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🇬🇧</span>
                <span className="bg-blue-600 text-white px-2 py-1 rounded-full text-sm font-bold">12%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">United Kingdom</h4>
              <p className="text-lg font-bold text-blue-600 mb-1">780K</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 rounded-full h-2" style={{width: '50%'}}></div>
              </div>
            </div>

            {/* Germany */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🇩🇪</span>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-sm font-bold">8%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Germany</h4>
              <p className="text-lg font-bold text-gray-600 mb-1">520K</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-gray-600 rounded-full h-2" style={{width: '33%'}}></div>
              </div>
            </div>

            {/* Russia */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🇷🇺</span>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-sm font-bold">7%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Russia</h4>
              <p className="text-lg font-bold text-gray-600 mb-1">455K</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-gray-600 rounded-full h-2" style={{width: '29%'}}></div>
              </div>
            </div>

            {/* United States */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🇺🇸</span>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-sm font-bold">6%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">United States</h4>
              <p className="text-lg font-bold text-gray-600 mb-1">390K</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-gray-600 rounded-full h-2" style={{width: '25%'}}></div>
              </div>
            </div>

            {/* Iran */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🇮🇷</span>
                <span className="bg-gray-600 text-white px-2 py-1 rounded-full text-sm font-bold">5%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Iran</h4>
              <p className="text-lg font-bold text-gray-600 mb-1">325K</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-gray-600 rounded-full h-2" style={{width: '21%'}}></div>
              </div>
            </div>

            {/* France */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🇫🇷</span>
                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-sm font-bold">4%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">France</h4>
              <p className="text-lg font-bold text-gray-500 mb-1">260K</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-gray-500 rounded-full h-2" style={{width: '17%'}}></div>
              </div>
            </div>

            {/* Others - Remaining Markets */}
            <div className="bg-gray-50 hover:bg-gray-100 rounded-lg p-4 border border-gray-200 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl">🌍</span>
                <span className="bg-gray-400 text-white px-2 py-1 rounded-full text-sm font-bold">12%</span>
              </div>
              <h4 className="font-bold text-gray-800 mb-1">Other Markets</h4>
              <p className="text-lg font-bold text-gray-400 mb-1">780K</p>
              <p className="text-xs text-gray-500">visitors</p>
              <div className="mt-2 bg-gray-200 rounded-full h-2">
                <div className="bg-gray-400 rounded-full h-2" style={{width: '50%'}}></div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center text-sm text-gray-600">
                <Globe className="w-4 h-4 mr-2"/>
                <span className="font-medium">Market Distribution Summary</span>
              </div>
              <div className="text-xs text-gray-500">
                Total: 100% • 6.5M visitors
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-blue-600 font-semibold">Top 3 Markets:</span> 58% (3.78M)
              </div>
              <div>
                <span className="text-gray-600 font-semibold">Key Markets:</span> 30% (1.95M)
              </div>
              <div>
                <span className="text-gray-500 font-semibold">Others:</span> 12% (780K)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Audience Analysis - Demographics & Travel Types */}
      <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">Audience Analysis & Demographics</h3>
              <p className="text-sm text-gray-600">Comprehensive visitor segmentation • {currentPeriod}</p>
            </div>
            <button
              onClick={() => setShowDataSources(true)}
              className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors group"
              title="Data Sources & KPI Methodology"
            >
              <HelpCircle className="w-4 h-4 text-gray-500 group-hover:text-blue-600" />
            </button>
          </div>
          <div className="text-right text-xs text-gray-500">
            <p>Multi-dimensional Analysis</p>
            <p className="flex items-center text-xs">
              <Database className="w-3 h-3 mr-1" />
              STR • Tourism Board • Survey Data
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Age Demographics */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <Calendar className="w-4 h-4 text-purple-600" />
              <h4 className="text-base font-bold text-gray-900">Age Demographics</h4>
            </div>
            <div className="space-y-2">
              {audienceData.ageGroups.map((group, index) => (
                <div key={index} className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-purple-900">{group.age} years</span>
                    <span className="text-sm font-bold text-purple-600">{group.percentage}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                    <span>{group.travelers} travelers</span>
                    <span className="font-semibold text-emerald-600">{group.spending}</span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-1.5">
                    <div className="bg-purple-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${group.percentage * 2.5}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Travel Types */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <MapPin className="w-4 h-4 text-blue-600" />
              <h4 className="text-base font-bold text-gray-900">Travel Types</h4>
            </div>
            <div className="space-y-2">
              {audienceData.travelTypes.map((type, index) => {
                const Icon = type.icon
                return (
                  <div key={index} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-3 h-3 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-900">{type.type}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-bold text-blue-600">{type.percentage}%</span>
                        <span className="text-xs text-emerald-600 ml-1">{type.growth}</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-600 mb-2">
                      <span>Avg Spend: <span className="font-semibold text-gray-900">{type.avgSpend}</span></span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-1.5">
                      <div className="bg-blue-500 h-1.5 rounded-full transition-all duration-500" style={{ width: `${type.percentage * 2}%` }}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Traveler Group Types */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <Users className="w-4 h-4 text-indigo-600" />
              <h4 className="text-base font-bold text-gray-900">Traveler Groups</h4>
            </div>
            
            {/* Traveler Types */}
            <div className="space-y-2">
              {audienceData.demographics.travelerTypes.map((traveler, index) => (
                <div key={index} className="bg-indigo-50 rounded-lg p-2 border border-indigo-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-indigo-900 text-xs">{traveler.type}</span>
                    <span className="text-xs font-bold text-indigo-600">{traveler.percentage}%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-indigo-700">{traveler.avgStay}</span>
                    <span className="text-indigo-600 text-xs">{traveler.preference}</span>
                  </div>
                  <div className="w-full bg-indigo-200 rounded-full h-1">
                    <div className="bg-indigo-500 h-1 rounded-full transition-all duration-500" style={{ width: `${traveler.percentage * 2.5}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Consumer Behavior Evolution - Full Width */}
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Consumer Behavior Evolution</h3>
              <p className="text-sm text-gray-600">{marketRegion} • {currentPeriod} Booking Pattern Analysis</p>
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
            <p>6-Month Trend Analysis</p>
            <p>Jul - Dec 2024</p>
            <p className="flex items-center justify-end text-xs">
              <Database className="w-3 h-3 mr-1" />
              Booking System • STR • Surveys
            </p>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={400}>
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
              dot={{ fill: '#3B82F6', strokeWidth: 2, r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="advancePlanning" 
              stroke="#10B981" 
              strokeWidth={3}
              name="Advance Planning"
              dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
            />
            <Line 
              type="monotone" 
              dataKey="lastMinute" 
              stroke="#F59E0B" 
              strokeWidth={3}
              name="Last Minute"
              dot={{ fill: '#F59E0B', strokeWidth: 2, r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        
        {/* Behavior Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <h5 className="font-semibold text-blue-900">Instant Booking Trend</h5>
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-1">+49%</p>
            <p className="text-sm text-blue-700">Same-day decisions increasing, indicating growing consumer confidence and impulse travel behavior.</p>
          </div>
          <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <h5 className="font-semibold text-emerald-900">Advance Planning</h5>
            </div>
            <p className="text-2xl font-bold text-emerald-600 mb-1">+23%</p>
            <p className="text-sm text-emerald-700">Strategic planners remain strong, showing continued demand for planned travel experiences.</p>
          </div>
          <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
            <div className="flex items-center space-x-2 mb-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <h5 className="font-semibold text-orange-900">Last Minute Bookings</h5>
            </div>
            <p className="text-2xl font-bold text-orange-600 mb-1">+9%</p>
            <p className="text-sm text-orange-700">Steady growth in spontaneous travel, creating opportunities for dynamic pricing strategies.</p>
          </div>
        </div>
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
                        <Building2 className="w-4 h-4 mr-2" />
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
                        <Users className="w-4 h-4 mr-2" />
                        Primary Research Surveys
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Consumer behavior tracking (15,000+ respondents)</li>
                        <li>• Travel motivation and preferences</li>
                        <li>• Spending pattern analysis</li>
                        <li>• Brand perception studies</li>
                        <li>• Post-travel satisfaction surveys</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Digital Intelligence
                      </h4>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Social media sentiment analysis</li>
                        <li>• Google Trends and search data</li>
                        <li>• Online booking platform analytics</li>
                        <li>• Review platform aggregation</li>
                        <li>• Competitor digital performance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* KPI Calculation Methodologies */}
                <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Calculator className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-xl font-bold text-gray-900">KPI Calculation Methodologies</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Consumer Behavior Trends</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Growth Rate:</strong> YoY percentage change in demand/bookings</p>
                        <p><strong>Premium Willingness:</strong> Price elasticity analysis from booking data</p>
                        <p><strong>Revenue Uplift:</strong> Projected quarterly impact based on historical correlation</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Source Market Analysis</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Visitor Volume:</strong> Official tourism board + immigration data</p>
                        <p><strong>Growth Rates:</strong> 12-month rolling average comparison</p>
                        <p><strong>Market Share:</strong> Percentage of total visitor arrivals</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Demographics & Segmentation</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Age Distribution:</strong> Survey data + booking system demographics</p>
                        <p><strong>Spending Analysis:</strong> Transaction data + expense surveys</p>
                        <p><strong>Travel Patterns:</strong> Booking timing and duration analysis</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-emerald-200">
                      <h4 className="font-semibold text-emerald-900 mb-3">Revenue Intelligence</h4>
                      <div className="text-sm text-emerald-800 space-y-2">
                        <p><strong>Performance Scores:</strong> Weighted composite of multiple metrics</p>
                        <p><strong>Market Position:</strong> STR competitive set benchmarking</p>
                        <p><strong>Channel Optimization:</strong> Revenue per channel analysis</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Data Quality & Refresh */}
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Info className="w-6 h-6 text-yellow-600" />
                    <h3 className="text-xl font-bold text-gray-900">Data Quality & Refresh Frequency</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Real-time (15 min refresh)</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Digital sentiment tracking</li>
                        <li>• Website analytics</li>
                        <li>• Booking system data</li>
                        <li>• Search trends</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Daily (6 AM GST)</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• STR performance data</li>
                        <li>• Tourism board statistics</li>
                        <li>• Competitor analysis</li>
                        <li>• Financial performance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h4 className="font-semibold text-yellow-900 mb-3">Weekly/Monthly</h4>
                      <ul className="text-sm text-yellow-800 space-y-1">
                        <li>• Consumer surveys</li>
                        <li>• Market research reports</li>
                        <li>• Industry benchmarks</li>
                        <li>• Economic indicators</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Data Validation & Quality Assurance
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-800">
                      <div>
                        <p><strong>Statistical Confidence:</strong> 95% confidence intervals for all projections</p>
                        <p><strong>Sample Sizes:</strong> Minimum 1,000 data points per metric</p>
                      </div>
                      <div>
                        <p><strong>Cross-validation:</strong> Multiple source verification for key metrics</p>
                        <p><strong>Seasonal Adjustment:</strong> 90-day rolling averages with trend analysis</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* How to Read Consumer Trends Data */}
                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <div className="flex items-center space-x-3 mb-6">
                    <Lightbulb className="w-6 h-6 text-purple-600" />
                    <h3 className="text-xl font-bold text-gray-900">How to Read Consumer Trends Data</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-3">Understanding Growth Metrics</h4>
                      <div className="text-sm text-purple-800 space-y-2">
                        <p><strong>Growth Rate:</strong> Year-over-year percentage increase in consumer demand for specific trends</p>
                        <p><strong>Premium Willingness:</strong> Additional percentage customers will pay for trend-related experiences</p>
                        <p><strong>Revenue Uplift:</strong> Projected quarterly revenue increase in thousands AED</p>
                        <p><strong>Impact Rating:</strong> High (&gt;$300K), Medium ($100K-$300K), Low (&lt;$100K)</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-3">Chart & Visualization Guide</h4>
                      <div className="text-sm text-purple-800 space-y-2">
                        <p><strong>Trend Lines:</strong> Upward slopes indicate growing demand; steeper = faster growth</p>
                        <p><strong>Color Coding:</strong> Green = High growth, Blue = Medium growth, Yellow = Emerging trends</p>
                        <p><strong>Bar Heights:</strong> Represent market size or consumer adoption rates</p>
                        <p><strong>Progress Bars:</strong> Show premium willingness as percentage of base pricing</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-3">Source Market Intelligence</h4>
                      <div className="text-sm text-purple-800 space-y-2">
                        <p><strong>Circle Size:</strong> Larger circles = higher visitor volumes from that market</p>
                        <p><strong>Line Thickness:</strong> Represents strength of travel connection to Dubai</p>
                        <p><strong>Growth Indicators:</strong> Green arrows = growing market, Red = declining</p>
                        <p><strong>Spending Data:</strong> Average per-capita tourism expenditure by source market</p>
                      </div>
                    </div>
                    
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-3">Key Performance Indicators</h4>
                      <div className="text-sm text-purple-800 space-y-2">
                        <p><strong>Confidence Score:</strong> Statistical reliability of trend predictions (0-100)</p>
                        <p><strong>Market Penetration:</strong> Percentage of target demographic engaging with trend</p>
                        <p><strong>Seasonality Index:</strong> How much trends vary by season/month</p>
                        <p><strong>Competitive Advantage:</strong> Your position vs. market competitors</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-3 flex items-center">
                      <Calculator className="w-4 h-4 mr-2" />
                      Action-Oriented Insights
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-purple-800">
                      <div>
                        <p><strong>High-Growth Trends:</strong> Prioritize investment and marketing focus</p>
                        <p><strong>Premium Opportunities:</strong> Trends with 20%+ willingness to pay premium</p>
                        <p><strong>Quick Wins:</strong> Trends with high growth + low implementation complexity</p>
                      </div>
                      <div>
                        <p><strong>Market Timing:</strong> Seasonal patterns to optimize launch timing</p>
                        <p><strong>Resource Allocation:</strong> Budget distribution based on revenue potential</p>
                        <p><strong>Risk Assessment:</strong> Confidence scores help evaluate implementation risk</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

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