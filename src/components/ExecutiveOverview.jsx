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
import DubaiHeroCard from './DubaiHeroCard'
import { useState } from 'react'

const ExecutiveOverview = () => {
  const [activeTab, setActiveTab] = useState('overview')
  const [expandedSections, setExpandedSections] = useState({
    'consumer-behavior': false,
    'financial-patterns': false,
    'market-trends': false,
    'revenue-optimization': false,
    'performance-metrics': false
  })
  const [showDataSources, setShowDataSources] = useState(false)
  const [showActionPlan, setShowActionPlan] = useState(false)
  const [selectedBusinessType, setSelectedBusinessType] = useState('hotel')
  const [businessName, setBusinessName] = useState('')
  const [businessCategory, setBusinessCategory] = useState('')
  const [showCampaignSuggestion, setShowCampaignSuggestion] = useState(false)
  const [showBudgetBreakdown, setShowBudgetBreakdown] = useState(false)
  const [showRateManagement, setShowRateManagement] = useState(false)
  const [rateManagementTab, setRateManagementTab] = useState('trends')
  const [showSoloRatesManagement, setShowSoloRatesManagement] = useState(false)
  const [soloRatesTab, setSoloRatesTab] = useState('trends')

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  // Dynamic market and time period context
  const today = new Date()
  const currentYear = 2025
  const currentMonth = today.getMonth() + 1
  
  const getCurrentQuarter = (month) => {
    if (month <= 3) return 1
    if (month <= 6) return 2
    if (month <= 9) return 3
    return 4
  }
  
  const currentQuarter = getCurrentQuarter(currentMonth)
  const previousQuarter = currentQuarter === 1 ? 4 : currentQuarter - 1
  const previousQuarterYear = currentQuarter === 1 ? currentYear - 1 : currentYear
  
  const currentPeriod = `Q${currentQuarter} ${currentYear}`
  const previousPeriod = `Q${previousQuarter} ${previousQuarterYear}`
  const marketRegion = "Dubai & UAE"
  const marketScope = "GCC Premium Travel Market"
  const dataLastUpdated = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  // Tab configuration
  const tabs = [
    { 
      id: 'overview', 
      label: 'Executive Overview', 
      icon: BarChart3, 
      description: 'Key metrics and insights at a glance'
    },
    { 
      id: 'consumer-insights', 
      label: 'Consumer Intelligence', 
      icon: Users, 
      description: 'Behavioral patterns and travel preferences'
    },
    { 
      id: 'financial-intelligence', 
      label: 'Financial Intelligence', 
      icon: DollarSign, 
      description: 'Spending patterns and premium opportunities'
    },
    { 
      id: 'revenue-performance', 
      label: 'Revenue Performance', 
      icon: TrendingUp, 
      description: 'Optimization metrics and strategic actions'
    }
  ]

  // Dubai-specific market metrics with clear business context
  const dubaiMarketMetrics = [
    {
      title: 'Dubai Tourism Growth',
      value: '16.7M',
      change: '+11%',
      trend: 'up',
      description: 'International visitors in 2024 - highest ever recorded',
      actionable: 'Increase capacity planning and premium positioning',
      color: 'primary',
      source: 'Dubai Tourism Board'
    },
    {
      title: 'Average Spend per Tourist',
      value: '$1,728',
      change: '+15%',
      trend: 'up', 
      description: 'Daily spend including accommodation, dining, shopping, activities',
      actionable: 'Target high-value segments with premium packages',
      color: 'secondary',
      source: 'Dubai Statistics Center'
    },
    {
      title: 'Hotel Occupancy Rate',
      value: '77%',
      change: '+8%',
      trend: 'up',
      description: 'Dubai hotel occupancy rate Q4 2024 vs Q4 2023',
      actionable: 'Optimize pricing during peak demand periods',
      color: 'accent',
      source: 'Dubai Tourism Authority'
    },
    {
      title: 'Sustainability Interest',
      value: '89%',
      change: '+22%',
      trend: 'up',
      description: 'Dubai visitors actively seeking eco-friendly options',
      actionable: 'Launch green initiatives for premium pricing',
      color: 'deep',
      source: 'Sustainable Tourism Survey'
    }
  ]

  // Dubai-specific consumer trends data
  const dubaiConsumerTrends = [
    {
      category: 'AI Travel Planning',
      percentage: 24,
      insight: 'Use AI tools for Dubai trip planning and budgeting',
      impact: '+15% efficiency in booking conversions',
      color: 'primary',
      source: 'Regiondo 2025 Travel Statistics',
      actionable: 'Integrate AI-powered recommendations and budget calculators'
    },
    {
      category: 'Dubai Instagram Appeal',
      percentage: 73,
      insight: 'Choose Dubai for social media content',
      impact: '+18% premium for photo-worthy experiences',
      color: 'accent',
      source: 'Dubai Tourism Social Media Study 2024',
      actionable: 'Create Instagram-worthy spaces and experiences'
    },
    {
      category: 'Sustainability in Dubai', 
      percentage: 89,
      insight: 'Seek eco-friendly Dubai experiences',
      impact: '+25% willingness to pay for green initiatives',
      color: 'secondary',
      source: 'Dubai Sustainable Tourism Report',
      actionable: 'Highlight sustainability certifications and green practices'
    },
    {
      category: 'Solo Travel Growth',
      percentage: 31,
      insight: 'Solo travelers choosing Dubai for safety and luxury',
      impact: '+28% willingness to pay for personalized experiences',
      color: 'deep',
      source: 'Dubai Solo Travel Report 2024',
      actionable: 'Create solo-friendly packages with concierge services'
    }
  ]

  // Dubai traveler profiles
  const dubaiTravelerProfiles = [
    {
      segment: 'Luxury Experience Seekers',
      percentage: 28,
      avgSpend: 2450,
      stayDuration: 5.2,
      demographics: 'Age 35-55, High Income, International',
      motivations: ['Luxury shopping', 'Fine dining', 'Premium experiences', 'Status & prestige'],
      behaviors: [
        'Book 5-star hotels exclusively',
        'Spend 40% of budget on shopping',
        'Prefer private tours and experiences',
        'Share luxury experiences on social media'
      ],
      revenueOpportunity: '+35% through luxury packages',
      targetingStrategy: 'Premium positioning with exclusive access and personalized service',
      color: 'from-blue-600 to-purple-600',
      icon: '👑'
    },
    {
      segment: 'Cultural Explorers',
      percentage: 22,
      avgSpend: 1680,
      stayDuration: 6.8,
      demographics: 'Age 28-45, Middle to High Income, Education-focused',
      motivations: ['Authentic experiences', 'Cultural learning', 'Historical sites', 'Local cuisine'],
      behaviors: [
        'Research extensively before visiting',
        'Book cultural tours and experiences',
        'Stay longer to explore thoroughly',
        'Value educational content and guides'
      ],
      revenueOpportunity: '+28% through cultural packages',
      targetingStrategy: 'Authentic experiences with educational value and local partnerships',
      color: 'from-blue-500 to-indigo-600',
      icon: '🏛️'
    },
    {
      segment: 'Business + Leisure Travelers',
      percentage: 25,
      avgSpend: 1950,
      stayDuration: 4.3,
      demographics: 'Age 30-50, Corporate Executives, Extended Stays',
      motivations: ['Business efficiency', 'Family time', 'Convenience', 'Work-life balance'],
      behaviors: [
        'Extend business trips for leisure',
        'Bring family for longer stays',
        'Need flexible booking and amenities',
        'Value time-saving services'
      ],
      revenueOpportunity: '+42% through extended stay packages',
      targetingStrategy: 'Flexible business packages with family amenities and extended stay benefits',
      color: 'from-indigo-500 to-purple-500',
      icon: '💼'
    },
    {
      segment: 'Adventure & Social Content Creators',
      percentage: 20,
      avgSpend: 1420,
      stayDuration: 7.1,
      demographics: 'Age 22-35, Digital Natives, Influence-driven',
      motivations: ['Social media content', 'Unique experiences', 'Adventure activities', 'Trendy locations'],
      behaviors: [
        'Plan trips around Instagram opportunities',
        'Book unique and adventurous experiences',
        'Share experiences in real-time',
        'Influence others through content'
      ],
      revenueOpportunity: '+38% through content creator packages',
      targetingStrategy: 'Social media-ready experiences with content creation support and influencer partnerships',
      color: 'from-indigo-600 to-purple-700',
      icon: '📸'
    },
    {
      segment: 'Solo Luxury Travelers',
      percentage: 25,
      avgSpend: 2180,
      stayDuration: 6.5,
      demographics: 'Age 28-55, Independent, Safety-conscious, High disposable income',
      motivations: ['Personal growth', 'Freedom & flexibility', 'Luxury & comfort', 'Safety & security'],
      behaviors: [
        'Book high-end accommodations with concierge services',
        'Prefer guided tours for safety and social interaction',
        'Use AI tools for detailed trip planning and budgeting',
        'Willing to pay premium for personalized experiences'
      ],
      revenueOpportunity: '+45% through solo premium packages',
      targetingStrategy: 'Personalized luxury experiences with safety assurance and flexible scheduling',
      color: 'from-blue-600 to-indigo-600',
      icon: '🏆'
    }
  ]

  // Dubai-specific financial intelligence data
  const dubaiFinancialPatterns = [
    {
      metric: 'Dubai Shopping Spend',
      value: '42%',
      description: 'Percentage of Dubai budget allocated to shopping experiences',
      growth: '+18%',
      source: 'Dubai Commerce Authority 2024',
      actionable: 'Partner with major malls for shopping packages and commissions',
      category: 'shopping',
      avgAmount: '$720'
    },
    {
      metric: 'Premium Dining Investment',
      value: '28%',
      description: 'Of total Dubai spend goes to fine dining and exclusive restaurants',
      growth: '+22%',
      source: 'Dubai Culinary Tourism Board',
      actionable: 'Create premium dining packages and restaurant partnerships',
      category: 'dining',
      avgAmount: '$485'
    },
    {
      metric: 'Adventure Experience Spend',
      value: '24%',
      description: 'Budget allocated to unique Dubai experiences and activities',
      growth: '+35%',
      source: 'Dubai Tourism Experience Survey',
      actionable: 'Package adventure experiences like desert safaris, skydiving',
      category: 'adventure',
      avgAmount: '$415'
    },
    {
      metric: 'Luxury Transportation',
      value: '16%',
      description: 'Spend on premium transport, private cars, helicopter tours',
      growth: '+28%',
      source: 'Dubai Transport Authority',
      actionable: 'Offer premium transport packages and luxury vehicle options',
      category: 'transport',
      avgAmount: '$275'
    }
  ]

  // Dubai spending behavior by visitor segment
  const dubaiSpendingBehaviors = [
    {
      segment: 'Luxury Seekers',
      totalSpend: 2450,
      breakdown: {
        accommodation: { amount: 980, percentage: 40, trend: '+12%' },
        shopping: { amount: 735, percentage: 30, trend: '+25%' },
        dining: { amount: 490, percentage: 20, trend: '+18%' },
        experiences: { amount: 245, percentage: 10, trend: '+35%' }
      },
      paymentPreferences: ['Premium Credit Cards (85%)', 'Digital Wallets (60%)', 'Cash for tips (25%)'],
      priceElasticity: 'Low - willing to pay 40% premium for exclusivity',
      color: 'from-blue-600 to-purple-600'
    },
    {
      segment: 'Cultural Explorers',
      totalSpend: 1680,
      breakdown: {
        accommodation: { amount: 588, percentage: 35, trend: '+8%' },
        experiences: { amount: 504, percentage: 30, trend: '+28%' },
        dining: { amount: 336, percentage: 20, trend: '+15%' },
        shopping: { amount: 252, percentage: 15, trend: '+10%' }
      },
      paymentPreferences: ['Credit Cards (75%)', 'Digital Payments (70%)', 'Local Currency (45%)'],
      priceElasticity: 'Medium - willing to pay 25% premium for authenticity',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      segment: 'Business + Leisure',
      totalSpend: 1950,
      breakdown: {
        accommodation: { amount: 780, percentage: 40, trend: '+15%' },
        dining: { amount: 390, percentage: 20, trend: '+20%' },
        shopping: { amount: 390, percentage: 20, trend: '+12%' },
        experiences: { amount: 390, percentage: 20, trend: '+30%' }
      },
      paymentPreferences: ['Corporate Cards (90%)', 'Expense Apps (80%)', 'Digital Wallets (55%)'],
      priceElasticity: 'Low - company budgets enable premium spending',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      segment: 'Content Creators',
      totalSpend: 1420,
      breakdown: {
        accommodation: { amount: 426, percentage: 30, trend: '+20%' },
        experiences: { amount: 426, percentage: 30, trend: '+45%' },
        dining: { amount: 284, percentage: 20, trend: '+25%' },
        shopping: { amount: 284, percentage: 20, trend: '+15%' }
      },
      paymentPreferences: ['Digital Wallets (95%)', 'Social Commerce (60%)', 'Cryptocurrency (25%)'],
      priceElasticity: 'High - budget-conscious but willing to pay for unique experiences',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      segment: 'Solo Luxury Travelers',
      totalSpend: 2180,
      breakdown: {
        accommodation: { amount: 872, percentage: 40, trend: '+18%' },
        experiences: { amount: 545, percentage: 25, trend: '+32%' },
        dining: { amount: 436, percentage: 20, trend: '+22%' },
        shopping: { amount: 327, percentage: 15, trend: '+28%' }
      },
      paymentPreferences: ['Premium Credit Cards (92%)', 'Digital Payments (78%)', 'Concierge Services (65%)'],
      priceElasticity: 'Very Low - willing to pay significant premiums for safety, comfort and personalization',
      color: 'from-blue-600 to-indigo-600'
    }
  ]

  // Dubai market revenue performance KPIs
  const dubaiRevenueKPIs = [
    {
      title: 'Dubai Market Share Index',
      value: 12.3,
      change: '+18%',
      changeType: 'positive',
      icon: BarChart3,
      format: 'percentage',
      description: 'Your capture rate of Dubai\'s 16.7M annual visitors',
      benchmark: 'Top 25% perform at 15%+',
      actionable: 'Target specific visitor segments for market share growth'
    },
    {
      title: 'Premium Pricing Success Rate',
      value: 73,
      change: '+25%',
      changeType: 'positive',
      icon: TrendingUp,
      format: 'percentage',
      description: 'Success rate of implementing premium pricing strategies',
      benchmark: 'Dubai leaders achieve 85%+',
      actionable: 'Expand sustainability and experience-based premium offerings'
    },
    {
      title: 'Average Revenue Per Dubai Visitor',
      value: 485,
      change: '+22%',
      changeType: 'positive',
      icon: DollarSign,
      format: 'currency',
      description: 'Revenue captured per Dubai visitor across all touchpoints',
      benchmark: 'Dubai premium brands: $650+',
      actionable: 'Focus on high-value segment targeting and package deals'
    },
    {
      title: 'Dubai Visitor Satisfaction Score',
      value: 8.4,
      change: '+12%',
      changeType: 'positive',
      icon: Star,
      format: 'score',
      description: 'Net Promoter Score from Dubai visitors',
      benchmark: 'Dubai hospitality leaders: 9.0+',
      actionable: 'Improve cultural authenticity and personalization'
    }
  ]

  // Dubai competitive positioning data
  const dubaiCompetitiveMetrics = [
    {
      category: 'Luxury Hotels (5-star)',
      position: 'Top 25%',
      averageRate: 650,
      occupancyRate: 82,
      revPAR: 533,
      growth: '+15%',
      keyCompetitors: ['Burj Al Arab', 'Atlantis The Palm', 'Four Seasons DIFC'],
      marketOpportunity: 'Sustainability premium positioning',
      color: 'from-blue-600 to-purple-600'
    },
    {
      category: 'Business Hotels (4-star)',
      position: 'Top 40%',
      averageRate: 320,
      occupancyRate: 78,
      revPAR: 250,
      growth: '+12%',
      keyCompetitors: ['Hilton Dubai Creek', 'Marriott Downtown', 'Radisson Blu'],
      marketOpportunity: 'Extended stay business packages',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      category: 'Experience Providers',
      position: 'Top 35%',
      averageRate: 145,
      occupancyRate: 85,
      revPAR: 123,
      growth: '+28%',
      keyCompetitors: ['Desert Safari operators', 'Helicopter tours', 'Marina experiences'],
      marketOpportunity: 'Social media content packages',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      category: 'Cultural Attractions',
      position: 'Top 50%',
      averageRate: 85,
      occupancyRate: 72,
      revPAR: 61,
      growth: '+35%',
      keyCompetitors: ['Dubai Museum', 'Al Fahidi Historic', 'Cultural tours'],
      marketOpportunity: 'Authentic Emirati experiences',
      color: 'from-indigo-600 to-purple-700'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      primary: 'from-blue-600 to-purple-600',
      secondary: 'from-blue-500 to-indigo-600', 
      accent: 'from-indigo-500 to-purple-500',
      light: 'from-blue-400 to-indigo-500',
      deep: 'from-indigo-600 to-purple-700',
      subtle: 'from-slate-500 to-blue-600'
    }
    return colors[color] || colors.primary
  }

  // Business dropdown options
  const businessOptions = {
    hotel: [
      'Burj Al Arab Jumeirah',
      'Atlantis The Palm',
      'Four Seasons Resort Dubai',
      'Jumeirah Beach Hotel',
      'Address Downtown Dubai',
      'Palazzo Versace Dubai',
      'Park Hyatt Dubai',
      'Mandarin Oriental Jumeirah',
      'Shangri-La Dubai',
      'Raffles Dubai',
      'JW Marriott Marquis Dubai',
      'Conrad Dubai',
      'Other Hotel'
    ],
    airline: [
      'Emirates',
      'Etihad Airways',
      'flydubai',
      'Air Arabia',
      'Qatar Airways',
      'Turkish Airlines',
      'Lufthansa',
      'British Airways',
      'KLM',
      'Air France',
      'Singapore Airlines',
      'Other Airline'
    ],
    car: [
      'Hertz UAE',
      'Avis UAE',
      'Budget Rent a Car',
      'Enterprise Dubai',
      'Sixt UAE',
      'Thrifty Car Rental',
      'Alamo UAE',
      'National Car Rental',
      'Europcar UAE',
      'Fast Rent a Car',
      'Diamond Lease',
      'Other Car Rental'
    ]
  }

  const businessCategories = {
    hotel: [
      'Ultra Luxury (5-star+)',
      'Luxury (5-star)',
      'Premium (4-star)',
      'Mid-scale (3-star)',
      'Boutique Hotel',
      'Business Hotel',
      'Resort Hotel',
      'Extended Stay'
    ],
    airline: [
      'Full-Service Carrier',
      'Low-Cost Carrier',
      'Regional Airline',
      'Charter Airline',
      'Cargo Airline',
      'Premium Airline'
    ],
    car: [
      'Economy Fleet',
      'Luxury Fleet',
      'Specialty Vehicles',
      'Electric Vehicles',
      'Corporate Fleet',
      'Exotic Cars'
    ]
  }

  // Business-specific action plans based on market insights
  const getActionPlan = (businessType, businessName = '', businessCategory = '') => {
    // Category-specific strategies
    const getCategoryStrategy = (businessType, businessCategory) => {
      const strategies = {
      hotel: {
          'Ultra Luxury (5-star+)': {
            title: 'Ultra-Luxury Revenue Strategy',
            icon: '👑',
            overallStrategy: {
              title: 'Exclusive Ultra-Premium Positioning',
              description: 'Target ultra-high-net-worth solo travelers with bespoke sustainability and exclusive experiences',
              timeframe: '120 days',
              expectedImpact: '+35-45% revenue uplift'
            }
          },
          'Luxury (5-star)': {
            title: 'Luxury Revenue Strategy', 
        icon: '🏨',
        overallStrategy: {
          title: 'Premium Experience Positioning Strategy',
              description: 'Leverage 77% experience-over-cost preference with sustainability and solo traveler premium',
          timeframe: '90 days',
              expectedImpact: '+25-35% revenue uplift'
            }
          },
          'Premium (4-star)': {
            title: 'Premium Business Strategy',
            icon: '🏢',
            overallStrategy: {
              title: 'Business-Focused Premium Positioning',
              description: 'Target business+leisure travelers with extended stay packages and corporate sustainability',
              timeframe: '75 days', 
              expectedImpact: '+20-28% revenue uplift'
            }
          },
          'Mid-scale (3-star)': {
            title: 'Value-Premium Strategy',
            icon: '🏨',
            overallStrategy: {
              title: 'Smart Value Premium Positioning',
              description: 'Compete on value while adding premium touches for solo and extended stay segments',
              timeframe: '60 days',
              expectedImpact: '+15-22% revenue uplift'
            }
          },
          'Boutique Hotel': {
            title: 'Boutique Experience Strategy',
            icon: '🎨',
            overallStrategy: {
              title: 'Authentic Cultural Premium Positioning',
              description: 'Leverage unique character with authentic Dubai experiences and personalized solo services',
              timeframe: '90 days',
              expectedImpact: '+28-35% revenue uplift'
            }
          },
          'Business Hotel': {
            title: 'Corporate Revenue Strategy',
            icon: '💼',
            overallStrategy: {
              title: 'Extended Stay Business Positioning',
              description: 'Focus on business travelers with extended packages and corporate sustainability programs',
              timeframe: '75 days',
              expectedImpact: '+22-30% revenue uplift'
            }
          },
          'Resort Hotel': {
            title: 'Resort Experience Strategy',
            icon: '🏖️',
            overallStrategy: {
              title: 'Experience-Rich Premium Positioning',
              description: 'Package experiences with sustainability focus and solo-friendly resort activities',
              timeframe: '100 days',
              expectedImpact: '+25-32% revenue uplift'
            }
          },
          'Extended Stay': {
            title: 'Extended Stay Strategy',
            icon: '🏠',
            overallStrategy: {
              title: 'Long-Term Premium Positioning',
              description: 'Specialize in extended business+leisure stays with apartment-style sustainability',
              timeframe: '60 days',
              expectedImpact: '+30-40% revenue uplift'
            }
          }
        },
        airline: {
          'Full-Service Carrier': {
            title: 'Full-Service Premium Strategy',
            icon: '✈️',
            overallStrategy: {
              title: 'Comprehensive Service Excellence',
              description: 'Premium cabin experiences with carbon-neutral options and solo traveler services',
              timeframe: '120 days',
              expectedImpact: '+20-28% yield improvement'
            }
          },
          'Low-Cost Carrier': {
            title: 'Value-Plus Revenue Strategy', 
            icon: '🎯',
            overallStrategy: {
              title: 'Smart Ancillary Revenue Growth',
              description: 'Add premium ancillaries: sustainability offsets, solo services, and flexible booking',
              timeframe: '90 days',
              expectedImpact: '+15-22% revenue per passenger'
            }
          },
          'Regional Airline': {
            title: 'Regional Premium Strategy',
            icon: '🗺️', 
            overallStrategy: {
              title: 'Route-Specific Premium Positioning',
              description: 'Optimize high-value routes with business traveler focus and sustainability premiums',
              timeframe: '75 days',
              expectedImpact: '+18-25% yield improvement'
            }
          },
          'Charter Airline': {
            title: 'Charter Premium Strategy',
            icon: '🎪',
            overallStrategy: {
              title: 'Specialized Experience Positioning',
              description: 'Premium group packages with sustainability focus and exclusive solo add-ons',
              timeframe: '90 days',
              expectedImpact: '+25-35% per charter'
            }
          },
          'Premium Airline': {
            title: 'Ultra-Premium Strategy',
            icon: '👑',
            overallStrategy: {
              title: 'Ultra-Luxury Air Experience',
              description: 'Exclusive cabin experiences with complete carbon neutrality and concierge services',
              timeframe: '150 days',
              expectedImpact: '+30-40% premium yield'
            }
          }
        },
        car: {
          'Economy Fleet': {
            title: 'Economy-Plus Strategy',
            icon: '🚗',
            overallStrategy: {
              title: 'Value-Added Service Positioning',
              description: 'Compete on value while adding sustainability and safety premiums for solo travelers',
              timeframe: '60 days',
              expectedImpact: '+12-18% revenue per rental'
            }
          },
          'Luxury Fleet': {
            title: 'Luxury Mobility Strategy',
            icon: '🏎️',
            overallStrategy: {
              title: 'Premium Experience Positioning',
              description: 'Ultra-premium vehicles with concierge services and exclusive solo traveler packages',
              timeframe: '90 days',
              expectedImpact: '+25-35% revenue uplift'
            }
          },
          'Specialty Vehicles': {
            title: 'Specialty Experience Strategy',
            icon: '🚙',
            overallStrategy: {
              title: 'Unique Adventure Positioning',
              description: 'Adventure packages with sustainability focus and solo-friendly guided experiences',
              timeframe: '75 days',
              expectedImpact: '+30-40% per specialty rental'
            }
          },
          'Electric Vehicles': {
            title: 'Electric Premium Strategy',
            icon: '⚡',
            overallStrategy: {
              title: 'Sustainability Leadership Positioning',
              description: 'Lead with carbon-neutral mobility and premium EV experiences for eco-conscious travelers',
              timeframe: '90 days',
              expectedImpact: '+28-35% EV premium'
            }
          },
          'Corporate Fleet': {
            title: 'Corporate Mobility Strategy',
            icon: '💼',
            overallStrategy: {
              title: 'Business Service Excellence',
              description: 'Extended corporate packages with sustainability reporting and business traveler amenities',
              timeframe: '75 days',
              expectedImpact: '+20-28% corporate revenue'
            }
          },
          'Exotic Cars': {
            title: 'Exotic Experience Strategy',
            icon: '🏁',
            overallStrategy: {
              title: 'Ultra-Luxury Experience Positioning',
              description: 'Exclusive exotic vehicles with premium concierge and unique Dubai experience packages',
              timeframe: '120 days',
              expectedImpact: '+40-60% per exotic rental'
            }
          }
        }
      }
      
      return strategies[businessType]?.[businessCategory] || strategies[businessType]?.['Luxury (5-star)'] || {
        title: 'Revenue Strategy',
        icon: '📈',
        overallStrategy: {
          title: 'Premium Positioning Strategy',
          description: 'Leverage market opportunities with targeted positioning',
          timeframe: '90 days',
          expectedImpact: '+20-25% revenue uplift'
        }
      }
    }

    const categoryStrategy = getCategoryStrategy(businessType, businessCategory)
    
    const plans = {
      hotel: {
        ...categoryStrategy,
        priceForecasts: [
          {
            category: 'Sustainability Premium Rooms',
            currentRate: 450,
            forecastRate: 549,
            uplift: '+22%',
            rationale: '90% eco-conscious travelers willing to pay 22% premium',
            timeline: 'Q2 2025'
          },
          {
            category: 'Solo Traveler Premium Suites',
            currentRate: 650,
            forecastRate: 747,
            uplift: '+15%',
            rationale: '31% solo traveler growth driving premium personalized experiences',
            timeline: 'Q1 2025'
          },
          {
            category: 'Extended Stay Packages',
            currentRate: 380,
            forecastRate: 513,
            uplift: '+35%',
            rationale: '24% blended business+leisure travel growth',
            timeline: 'Q2 2025'
          }
        ],
        campaigns: [
          {
            name: 'Eco-Luxury Dubai Experience',
            target: 'Sustainability-focused millennials',
            budget: '$150K',
            expectedROI: '425%',
            duration: '60 days',
            description: 'Highlight sustainable amenities, local sourcing, and carbon-neutral stays',
            tactics: ['Instagram partnerships', 'Eco-influencer collabs', 'Green certification showcase']
          },
          {
            name: 'Social Hotspot Campaign',
            target: 'Gen-Z content creators',
            budget: '$200K',
            expectedROI: '380%',
            duration: '45 days',
            description: 'Create Instagram-worthy moments and TikTok-friendly spaces',
            tactics: ['Influencer partnerships', 'Photo-worthy room designs', 'Social media packages']
          },
          {
            name: 'Extended Stay Business Plus',
            target: 'Business travelers with families',
            budget: '$125K',
            expectedROI: '340%',
            duration: '90 days',
            description: 'Premium extended stay packages for blended travel',
            tactics: ['Corporate partnerships', 'Family amenities', 'Extended stay discounts']
          }
        ],
        quickActions: [
          { action: 'Implement dynamic weekend pricing', impact: '+$385K', timeline: '15 days' },
          { action: 'Launch sustainability certification', impact: '+$420K', timeline: '30 days' },
          { action: 'Create Instagram-worthy spaces', impact: '+$295K', timeline: '45 days' },
          { action: 'Develop blended travel packages', impact: '+$340K', timeline: '60 days' }
        ]
      },
      airline: {
        title: 'Airline Revenue Strategy',
        icon: '✈️',
        overallStrategy: {
          title: 'Experience-First Premium Positioning',
          description: 'Capitalize on 84% travel spend maintenance with premium experience differentiation',
          timeframe: '120 days',
          expectedImpact: '+15-22% yield improvement'
        },
        priceForecasts: [
          {
            category: 'Sustainable Flight Options',
            currentRate: 850,
            forecastRate: 1037,
            uplift: '+22%',
            rationale: 'Carbon offset premium for eco-conscious 90% segment',
            timeline: 'Q2 2025'
          },
          {
            category: 'Social Media Experience Class',
            currentRate: 1200,
            forecastRate: 1380,
            uplift: '+15%',
            rationale: 'Premium cabin experience for content creation',
            timeline: 'Q1 2025'
          },
          {
            category: 'Flexible Travel Packages',
            currentRate: 650,
            forecastRate: 747,
            uplift: '+15%',
            rationale: '69% prefer flexible planning, premium for flexibility',
            timeline: 'Q1 2025'
          }
        ],
        campaigns: [
          {
            name: 'Carbon-Neutral Sky Experience',
            target: 'Eco-conscious travelers',
            budget: '$300K',
            expectedROI: '380%',
            duration: '90 days',
            description: 'Promote sustainable aviation fuel and carbon offset programs',
            tactics: ['Environmental partnerships', 'Green loyalty programs', 'Offset calculators']
          },
          {
            name: 'Creator Class Experience',
            target: 'Content creators and influencers',
            budget: '$250K',
            expectedROI: '420%',
            duration: '60 days',
            description: 'Premium cabin designed for content creation',
            tactics: ['Influencer partnerships', 'Photo-friendly amenities', 'Creator lounges']
          },
          {
            name: 'Ultimate Flexibility Program',
            target: 'Business and leisure travelers',
            budget: '$200K',
            expectedROI: '290%',
            duration: '75 days',
            description: 'No-penalty change policies with premium positioning',
            tactics: ['Flexible booking', 'Premium change benefits', 'Last-minute deals']
          }
        ],
        quickActions: [
          { action: 'Launch sustainable fuel surcharge', impact: '+$680K', timeline: '30 days' },
          { action: 'Create premium flexible fares', impact: '+$520K', timeline: '45 days' },
          { action: 'Introduce creator-class amenities', impact: '+$390K', timeline: '60 days' },
          { action: 'Implement dynamic concert route pricing', impact: '+$450K', timeline: '20 days' }
        ]
      },
      car: {
        title: 'Car Rental Revenue Strategy',
        icon: '🚗',
        overallStrategy: {
          title: 'Premium Mobility Experience Strategy',
          description: 'Target 44% activity spend growth with enhanced experience packages',
          timeframe: '75 days',
          expectedImpact: '+20-28% revenue growth'
        },
        priceForecasts: [
          {
            category: 'Electric Vehicle Premium',
            currentRate: 85,
            forecastRate: 104,
            uplift: '+22%',
            rationale: 'Sustainability premium for 90% eco-conscious segment',
            timeline: 'Q1 2025'
          },
          {
            category: 'Social Media Ready Vehicles',
            currentRate: 120,
            forecastRate: 138,
            uplift: '+15%',
            rationale: 'Instagram-worthy luxury vehicles for content creation',
            timeline: 'Q2 2025'
          },
          {
            category: 'Extended Journey Packages',
            currentRate: 65,
            forecastRate: 88,
            uplift: '+35%',
            rationale: 'Multi-day packages for blended travel experiences',
            timeline: 'Q1 2025'
          }
        ],
        campaigns: [
          {
            name: 'Electric Luxury Dubai',
            target: 'Eco-conscious premium travelers',
            budget: '$180K',
            expectedROI: '450%',
            duration: '90 days',
            description: 'Premium electric vehicle fleet with sustainability messaging',
            tactics: ['Tesla partnerships', 'Charging infrastructure', 'Carbon-neutral packages']
          },
          {
            name: 'Creator Mobile Studio',
            target: 'Content creators and influencers',
            budget: '$220K',
            expectedROI: '380%',
            duration: '60 days',
            description: 'High-end vehicles equipped for content creation',
            tactics: ['Influencer partnerships', 'Photo-ready interiors', 'Creator packages']
          },
          {
            name: 'Adventure Extension Package',
            target: 'Extended stay travelers',
            budget: '$160K',
            expectedROI: '320%',
            duration: '75 days',
            description: 'Multi-day packages for comprehensive Dubai exploration',
            tactics: ['Hotel partnerships', 'Activity bundles', 'Extended stay discounts']
          }
        ],
        quickActions: [
          { action: 'Introduce EV premium fleet', impact: '+$290K', timeline: '45 days' },
          { action: 'Launch social media vehicle packages', impact: '+$180K', timeline: '30 days' },
          { action: 'Create adventure extension bundles', impact: '+$220K', timeline: '60 days' },
          { action: 'Implement weekend surge pricing', impact: '+$160K', timeline: '15 days' }
        ]
      }
    }
    return plans[businessType]
  }

  return (
    <div className="min-h-screen">
            {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 bg-clip-text text-transparent mb-1 tracking-tight">Travel Consumer Intelligence Hub</h1>
              <p className="text-gray-600 flex items-center space-x-4">
                <span className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-blue-600" />
                  <span>{marketRegion}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-blue-600" />
                  <span>{currentPeriod}</span>
                </span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span>Live Data</span>
                </span>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowActionPlan(true)}
                className="flex items-center space-x-2 px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Brain className="w-4 h-4" />
                <span>Get Action Plan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowDataSources(true)}
                className="flex items-center space-x-2 px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Database className="w-4 h-4" />
                <span>Sources</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 border-b border-gray-100">
          <nav className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 px-6 font-medium text-sm whitespace-nowrap transition-all duration-200 rounded-t-lg ${
                  activeTab === tab.id
                    ? 'bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <div className="text-left">
                  <div>{tab.label}</div>
                  <div className="text-xs opacity-75 font-normal">{tab.description}</div>
                </div>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6">
        {/* Executive Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Dubai Hero Card */}
            <DubaiHeroCard 
              activeSection="overview" 
              onExploreClick={() => {
                // Scroll to market opportunities section
                const opportunitiesSection = document.querySelector('[data-section="market-opportunities"]')
                if (opportunitiesSection) {
                  opportunitiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            />

            {/* Dubai Market Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-section="market-metrics">
              {dubaiMarketMetrics.map((metric, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-50 rounded-lg border border-blue-100 group-hover:bg-blue-100 transition-colors">
                      <TrendingUp className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                      <div className="text-sm text-emerald-600 font-semibold">{metric.change} YoY</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{metric.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{metric.description}</p>
                  
                  {/* What This Means Section */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="text-xs font-semibold text-gray-700 mb-1">What This Means:</div>
                    <div className="text-sm text-gray-800">{metric.actionable}</div>
                  </div>
                  
                  <div className="text-xs text-gray-500">Source: {metric.source}</div>
                </div>
              ))}
            </div>

            {/* Market Opportunities & Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-section="market-opportunities">
              {/* Top Market Opportunities */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Target className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Top 3 Dubai Market Opportunities</h3>
                      <p className="text-gray-600">Immediate revenue growth potential</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-blue-900">Sustainability Premium</h4>
                      <span className="text-lg font-bold text-blue-600">+22%</span>
                    </div>
                    <p className="text-sm text-blue-800 mb-2">
                      89% of Dubai visitors actively seek eco-friendly options - highest sustainability interest globally
                    </p>
                    <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full inline-block">
                      Revenue Impact: +$2.4M annually for mid-size hotel
                    </div>
                  </div>
                  
                  <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-indigo-900">Social Media Experiences</h4>
                      <span className="text-lg font-bold text-indigo-600">+15%</span>
                    </div>
                    <p className="text-sm text-indigo-800 mb-2">
                      Dubai's Instagram appeal drives 62% of Gen-Z travel decisions - create shareable moments
                    </p>
                    <div className="text-xs bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full inline-block">
                      Revenue Impact: +$1.8M annually through premium experiences
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-purple-900">Extended Stay Packages</h4>
                      <span className="text-lg font-bold text-purple-600">+35%</span>
                    </div>
                    <p className="text-sm text-purple-800 mb-2">
                      Dubai's business+leisure blend growing 28% annually - target extended stay premiums
                    </p>
                    <div className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full inline-block">
                      Revenue Impact: +$3.1M annually for extended stay positioning
                    </div>
                  </div>
                </div>
              </div>

              {/* Immediate Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-indigo-100 rounded-lg">
                      <Zap className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Next 30 Days: Quick Wins</h3>
                      <p className="text-gray-600">Start capturing Dubai's growth immediately</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                                    <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Launch Sustainability Messaging</h4>
                      <p className="text-sm text-gray-600 mb-2">Highlight eco-initiatives to capture 89% sustainability-focused market</p>
                      <div className="text-xs text-blue-600 font-medium">Impact: +$420K monthly | Timeline: 5 days</div>
                    </div>
                  </div>
                    
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-indigo-50 transition-colors">
                    <div className="w-6 h-6 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Create Instagram-Worthy Spaces</h4>
                      <p className="text-sm text-gray-600 mb-2">Design photo opportunities for social media content creation</p>
                      <div className="text-xs text-indigo-600 font-medium">Impact: +$315K monthly | Timeline: 15 days</div>
                    </div>
                  </div>
                    
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg hover:bg-purple-50 transition-colors">
                    <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Optimize Peak Season Pricing</h4>
                      <p className="text-sm text-gray-600 mb-2">Leverage 77% occupancy rate with dynamic weekend premiums</p>
                      <div className="text-xs text-purple-600 font-medium">Impact: +$285K monthly | Timeline: 7 days</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm font-semibold text-gray-900">Total 30-Day Impact: +$1.02M monthly revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Intelligence Summary */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-bold text-gray-900">Dubai Market Intelligence Summary</h2>
                <p className="text-gray-600 mt-1">Key insights and their business implications for {currentPeriod}</p>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Record Tourism Growth</h3>
                    <p className="text-sm text-gray-600 mb-3">16.7M visitors (+11%) creating unprecedented demand and pricing power</p>
                                        <button 
                      onClick={() => setActiveTab('consumer-insights')}
                      className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center space-x-1 mx-auto"
                    >
                      <span>View Consumer Insights</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                  
                  <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <DollarSign className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Premium Spending Power</h3>
                    <p className="text-sm text-gray-600 mb-3">$1,728 average daily spend (+15%) enables premium positioning strategies</p>
                    <button 
                      onClick={() => setActiveTab('financial-intelligence')}
                      className="text-indigo-600 text-sm font-medium hover:text-indigo-700 flex items-center space-x-1 mx-auto"
                    >
                      <span>View Financial Intelligence</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                    
                  <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Brain className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Strategic Action Plan</h3>
                    <p className="text-sm text-gray-600 mb-3">Get specific strategies to capture Dubai's growth for your business type</p>
                    <button 
                      onClick={() => setShowActionPlan(true)}
                      className="text-purple-600 text-sm font-medium hover:text-purple-700 flex items-center space-x-1 mx-auto"
                    >
                      <span>Get Action Plan</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Consumer Intelligence Tab */}
        {activeTab === 'consumer-insights' && (
          <div className="space-y-6">
            {/* Dubai Hero Card */}
            <DubaiHeroCard 
              activeSection="consumer-trends" 
              compact={true}
              onExploreClick={() => {
                // Scroll to consumer trends grid
                const trendsSection = document.querySelector('[data-section="consumer-trends"]')
                if (trendsSection) {
                  trendsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            />

            {/* Dubai Consumer Trends Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" data-section="consumer-trends">
              {dubaiConsumerTrends.map((trend, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 bg-gradient-to-br ${getColorClasses(trend.color)} rounded-lg group-hover:scale-105 transition-transform`}>
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">{trend.percentage}%</div>
                      <div className="text-sm text-gray-500">of visitors</div>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{trend.category}</h3>
                  <p className="text-sm text-gray-600 mb-3">{trend.insight}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-3 mb-3 border border-blue-100">
                    <div className="text-xs font-semibold text-blue-900 mb-1">Business Impact:</div>
                    <div className="text-sm text-blue-800 font-medium">{trend.impact}</div>
                  </div>
                  
                  {/* What This Means Section */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-3">
                    <div className="text-xs font-semibold text-gray-700 mb-1">Action Required:</div>
                    <div className="text-sm text-gray-800">{trend.actionable}</div>
                  </div>
                  
                  <div className="text-xs text-gray-500">{trend.source}</div>
                </div>
              ))}
            </div>

            {/* Dubai Traveler Profiles */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Dubai Traveler Profiles</h3>
                    <p className="text-gray-600">Detailed personas with spending patterns and targeting strategies</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {dubaiTravelerProfiles.map((profile, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${profile.color} rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
                            {profile.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{profile.segment}</h4>
                            <p className="text-sm text-gray-600">{profile.percentage}% of Dubai visitors</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">${profile.avgSpend}</div>
                          <div className="text-sm text-gray-500">Avg spend</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <div className="text-lg font-bold text-blue-900">{profile.stayDuration} days</div>
                          <div className="text-xs text-blue-700">Avg stay duration</div>
                        </div>
                        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
                          <div className="text-sm font-bold text-emerald-900">{profile.revenueOpportunity}</div>
                          <div className="text-xs text-emerald-700">Revenue opportunity</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-xs font-semibold mb-2 text-gray-700">Demographics:</div>
                          <div className="text-sm text-gray-800">{profile.demographics}</div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-xs font-semibold mb-2 text-gray-700">Key Motivations:</div>
                          <div className="flex flex-wrap gap-2">
                            {profile.motivations.map((motivation, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-200">
                                {motivation}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-100">
                          <div className="text-xs font-semibold mb-2 text-indigo-700">Targeting Strategy:</div>
                          <div className="text-sm font-medium text-indigo-800">{profile.targetingStrategy}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detailed Consumer Behavior Analysis */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <button
                onClick={() => toggleSection('consumer-behavior')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Brain className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Detailed Consumer Behavior Analysis</h3>
                    <p className="text-sm text-gray-600">Advanced insights into travel decision patterns</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">12 insights</span>
                  {expandedSections['consumer-behavior'] ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </div>
              </button>
              
              {expandedSections['consumer-behavior'] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="mt-6 space-y-6">
                                        {/* Travel Decision Triggers */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Travel Decision Triggers & Pricing Windows</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600 mb-2">24%</div>
                          <div className="font-semibold text-gray-900 mb-1">AI-Assisted Planning</div>
                          <div className="text-sm text-gray-600 mb-2">Use ChatGPT, Gemini for trip planning</div>
                          <div className="text-xs text-blue-600 font-medium">+15% booking efficiency</div>
                        </div>
                  
                        <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                          <div className="text-2xl font-bold text-indigo-600 mb-2">31%</div>
                          <div className="font-semibold text-gray-900 mb-1">Solo Travel Growth</div>
                          <div className="text-sm text-gray-600 mb-2">Independent luxury experiences</div>
                          <div className="text-xs text-indigo-600 font-medium">+28% personalization premium</div>
                        </div>
                    
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                          <div className="text-2xl font-bold text-purple-600 mb-2">69%</div>
                          <div className="font-semibold text-gray-900 mb-1">Flexible Planning</div>
                          <div className="text-sm text-gray-600 mb-2">Prefer adjustable schedules</div>
                          <div className="text-xs text-purple-600 font-medium">Dynamic pricing opportunity</div>
                        </div>
                    
                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                          <div className="text-2xl font-bold text-slate-600 mb-2">42%</div>
                          <div className="font-semibold text-gray-900 mb-1">Social Media Planning</div>
                          <div className="text-sm text-gray-600 mb-2">TikTok/Instagram inspiration</div>
                          <div className="text-xs text-slate-600 font-medium">Visual content drives bookings</div>
                        </div>
                    </div>
                  </div>

                    {/* Generational Preferences */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-4">Generational Travel Investment Patterns</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-3">Annual Spending by Generation</h5>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Gen Z (32% market share)</span>
                              <span className="font-semibold text-blue-600">$1,850</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Millennials (35% market share)</span>
                              <span className="font-semibold text-emerald-600">$2,340</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Gen X (22% market share)</span>
                              <span className="font-semibold text-purple-600">$2,890</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Boomers (11% market share)</span>
                              <span className="font-semibold text-orange-600">$3,450</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="font-semibold text-gray-900 mb-3">Premium Pricing Tolerance</h5>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Social Influence Premium</span>
                              <span className="font-semibold text-pink-600">Gen Z: 95%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Sustainability Premium</span>
                              <span className="font-semibold text-green-600">Millennials: 91%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Experience Premium</span>
                              <span className="font-semibold text-purple-600">Gen X: 89%</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Luxury Premium</span>
                              <span className="font-semibold text-orange-600">Boomers: 95%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Financial Intelligence Tab */}
        {activeTab === 'financial-intelligence' && (
          <div className="space-y-6">
            {/* Dubai Hero Card */}
            <DubaiHeroCard 
              activeSection="financial-intelligence" 
              compact={true}
              onExploreClick={() => {
                // Scroll to spending patterns
                const spendingSection = document.querySelector('[data-section="spending-patterns"]')
                if (spendingSection) {
                  spendingSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            />

            {/* Dubai Spending Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-section="spending-patterns">
              {dubaiFinancialPatterns.map((pattern, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <DollarSign className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{pattern.value}</div>
                      <div className="text-sm text-blue-600 font-medium">{pattern.growth}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{pattern.metric}</h3>
                  <p className="text-sm text-gray-600 mb-3">{pattern.description}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-3 mb-3">
                    <div className="text-lg font-bold text-blue-600">{pattern.avgAmount}</div>
                    <div className="text-xs text-gray-500">Average spend per visitor</div>
                  </div>
                  
                  {/* Action Required Section */}
                  <div className="border-t border-gray-100 pt-3">
                    <div className="text-xs font-semibold mb-1 text-gray-700">Revenue Strategy:</div>
                    <div className="text-sm text-gray-800 font-medium">{pattern.actionable}</div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-2">{pattern.source}</div>
                </div>
              ))}
            </div>

            {/* Dubai Spending Behavior by Segment */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Spending Behavior by Visitor Segment</h3>
                    <p className="text-gray-600">Detailed financial patterns and payment preferences for strategic targeting</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {dubaiSpendingBehaviors.map((behavior, index) => (
                    <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 bg-gradient-to-br ${behavior.color} rounded-xl flex items-center justify-center shadow-sm`}>
                            <DollarSign className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h4 className="text-xl font-bold text-gray-900">{behavior.segment}</h4>
                            <div className="text-sm text-gray-600">Visitor spending profile</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-gray-900">${behavior.totalSpend}</div>
                          <div className="text-sm text-gray-500">Total avg spend</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm font-semibold text-gray-700 mb-3">Spending Breakdown:</div>
                          <div className="space-y-2">
                        {Object.entries(behavior.breakdown).map(([category, data]) => (
                              <div key={category} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200">
                                <div className="capitalize text-sm font-medium text-gray-900">{category}</div>
                            <div className="text-right">
                                  <div className="text-sm font-bold text-gray-900">${data.amount}</div>
                                  <div className="text-xs text-gray-600">{data.percentage}% • <span className="text-emerald-600 font-medium">{data.trend}</span></div>
                            </div>
                          </div>
                        ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                          <div className="text-sm font-semibold text-blue-900 mb-2">Payment Preferences:</div>
                          <div className="flex flex-wrap gap-2">
                          {behavior.paymentPreferences.map((preference, idx) => (
                              <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full border border-blue-200">
                              {preference}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                        <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
                          <div className="text-xs font-semibold text-purple-700 mb-2">Price Elasticity:</div>
                          <div className="text-sm font-medium text-purple-800">{behavior.priceElasticity}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Financial Behavior Deep Dive */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <button
                onClick={() => toggleSection('financial-patterns')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-emerald-100 rounded-lg">
                    <Calculator className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Premium Travel Financial Behavior</h3>
                    <p className="text-sm text-gray-600">American Express cardholder spending patterns and sacrifice behaviors</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded-full">8 patterns</span>
                  {expandedSections['financial-patterns'] ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </div>
              </button>
              
              {expandedSections['financial-patterns'] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3">Premium Card Holder Growth</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-blue-800">Millennials/Gen Z YoY Growth</span>
                          <span className="font-bold text-blue-600">15%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-blue-800">T&E Business Growth</span>
                          <span className="font-bold text-blue-600">9%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-blue-800">Restaurant Spend Growth</span>
                          <span className="font-bold text-blue-600">11%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-blue-800">Lodging Premium Growth</span>
                          <span className="font-bold text-blue-600">6%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="font-semibold text-green-900 mb-3">Financial Sacrifice Patterns</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-800">Reduce discretionary spending</span>
                          <span className="font-bold text-green-600">64%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-800">Save money for major trips</span>
                          <span className="font-bold text-green-600">72%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-800">Major trip interest increase</span>
                          <span className="font-bold text-green-600">65%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-green-800">Experience over cost priority</span>
                          <span className="font-bold text-green-600">77%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-2">Revenue Strategy Implications</h4>
                    <p className="text-sm text-gray-700">
                      Premium card holders demonstrate 77% higher willingness to prioritize experience over cost, 
                      enabling strategic pricing premiums across sustainability (+22%), social influence (+15%), 
                      and experiential categories (+18% average).
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Revenue Performance Tab */}
        {activeTab === 'revenue-performance' && (
          <div className="space-y-6">
            {/* Dubai Hero Card */}
            <DubaiHeroCard 
              activeSection="revenue-performance" 
              compact={true}
              onExploreClick={() => {
                // Scroll to revenue optimization
                const revenueSection = document.querySelector('[data-section="revenue-optimization"]')
                if (revenueSection) {
                  revenueSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }}
            />

            {/* Enhanced KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-section="revenue-optimization">
              {dubaiRevenueKPIs.map((kpi, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200 cursor-pointer group">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                      <kpi.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">
                        {kpi.format === 'currency' && '$'}{kpi.value}{kpi.format === 'percentage' && '%'}{kpi.format === 'score' && '/10'}
                      </div>
                      <div className="text-sm text-blue-600 font-medium">{kpi.change}</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{kpi.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{kpi.description}</p>
                  
                  <div className="bg-blue-50 rounded-lg p-3 mb-3">
                    <div className="text-xs font-semibold text-blue-900 mb-1">Dubai Benchmark:</div>
                    <div className="text-sm text-blue-800">{kpi.benchmark}</div>
                  </div>
                  
                  {/* Action Required Section */}
                  <div className="border-t border-gray-100 pt-3">
                    <div className="text-xs font-semibold mb-1 text-gray-700">Next Action:</div>
                    <div className="text-sm text-gray-800 font-medium">{kpi.actionable}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dubai Competitive Positioning */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Dubai Competitive Positioning Analysis</h3>
                    <p className="text-gray-600">Your performance vs competitors across Dubai market segments</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {dubaiCompetitiveMetrics.map((metric, index) => (
                    <div key={index} className={`bg-gradient-to-br ${metric.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-200`}>
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-xl font-bold">{metric.category}</h4>
                        <div className="text-right">
                          <div className="text-lg font-bold">{metric.position}</div>
                          <div className="text-sm opacity-90">Market position</div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className="bg-white/20 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold">${metric.averageRate}</div>
                          <div className="text-xs opacity-90">Avg Rate</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold">{metric.occupancyRate}%</div>
                          <div className="text-xs opacity-90">Occupancy</div>
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold">${metric.revPAR}</div>
                          <div className="text-xs opacity-90">RevPAR</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-xs font-semibold opacity-90 mb-1">Growth Rate:</div>
                          <div className="text-lg font-bold">{metric.growth} YoY</div>
                        </div>
                        
                        <div>
                          <div className="text-xs font-semibold opacity-90 mb-1">Key Competitors:</div>
                          <div className="flex flex-wrap gap-1">
                            {metric.keyCompetitors.map((competitor, idx) => (
                              <span key={idx} className="text-xs bg-white/20 px-2 py-1 rounded-full">
                                {competitor}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="pt-3 border-t border-white/20">
                          <div className="text-xs font-semibold opacity-90 mb-1">Market Opportunity:</div>
                          <div className="text-sm font-medium">{metric.marketOpportunity}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Revenue Optimization Opportunities */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <button
                onClick={() => toggleSection('revenue-optimization')}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Target className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">Revenue Optimization Opportunities</h3>
                    <p className="text-sm text-gray-600">Immediate actions to maximize revenue performance</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">6 opportunities</span>
                  {expandedSections['revenue-optimization'] ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </div>
              </button>
              
              {expandedSections['revenue-optimization'] && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-red-900">Weekend Rate Optimization</h4>
                        <span className="text-lg font-bold text-emerald-600">+28%</span>
                      </div>
                      <p className="text-sm text-red-800 mb-3">
                        Implement weekend premium pricing with minimum stay requirements
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-green-600">+$385K</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded">High Priority</span>
                      </div>
                      <div className="text-xs text-red-600 mt-1">Timeline: 15 days</div>
                    </div>
                    
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-red-900">Last-Minute Booking Surge</h4>
                        <span className="text-lg font-bold text-emerald-600">+45%</span>
                      </div>
                      <p className="text-sm text-red-800 mb-3">
                        Dynamic last-minute rate adjustments and close-in restrictions
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-green-600">+$295K</span>
                        <span className="bg-red-100 text-red-800 px-2 py-1 rounded">High Priority</span>
                      </div>
                      <div className="text-xs text-red-600 mt-1">Timeline: 7 days</div>
                    </div>
                    
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-gray-900">Corporate Rate Optimization</h4>
                        <span className="text-lg font-bold text-emerald-600">+18%</span>
                      </div>
                      <p className="text-sm text-gray-700 mb-3">
                        Renegotiate corporate rates and implement volume-based pricing
                      </p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-green-600">+$240K</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Medium Priority</span>
                      </div>
                      <div className="text-xs text-blue-600 mt-1">Timeline: 45 days</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Plan Drawer */}
      {showActionPlan && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300" onClick={() => setShowActionPlan(false)}></div>
          <div className={`fixed right-0 top-0 h-full w-full max-w-6xl bg-white shadow-2xl transform transition-transform duration-500 ease-out z-50 ${
            showActionPlan ? 'translate-x-0' : 'translate-x-full'
          }`}>
            {/* Drawer Header */}
            <div className="bg-blue-600 text-white p-6 sticky top-0 z-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Personalized Action Plan</h2>
                  <p className="text-blue-100">AI-powered strategy for your specific business in Dubai</p>
                </div>
                <button
                  onClick={() => setShowActionPlan(false)}
                  className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Business Setup Form */}
              <div className="space-y-4">
                {/* Business Type Selector */}
                <div>
                  <p className="text-sm text-blue-100 mb-3">What's your business?</p>
                  <div className="flex space-x-3">
                    {[
                      { id: 'hotel', label: 'Hotel', icon: '🏨' },
                      { id: 'airline', label: 'Airline', icon: '✈️' },
                      { id: 'car', label: 'Car Rental', icon: '🚗' }
                    ].map((business) => (
                      <button
                        key={business.id}
                        onClick={() => setSelectedBusinessType(business.id)}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                          selectedBusinessType === business.id
                            ? 'bg-white text-blue-600 shadow-lg'
                            : 'bg-white/20 text-white hover:bg-white/30'
                        }`}
                      >
                        <span>{business.icon}</span>
                        <span>{business.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Business Name Dropdown */}
                <div>
                  <label className="block text-sm text-blue-100 mb-2">
                    {selectedBusinessType === 'hotel' ? 'Hotel Name' : 
                     selectedBusinessType === 'airline' ? 'Airline Name' : 'Car Rental Company Name'}
                  </label>
                  <select
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  >
                    <option value="">Select your business...</option>
                    {businessOptions[selectedBusinessType].map((business) => (
                      <option key={business} value={business}>{business}</option>
                    ))}
                  </select>
                </div>

                {/* Business Category Selection */}
                {businessName && (
                  <div>
                    <label className="block text-sm text-blue-100 mb-2">
                      Business Category
                    </label>
                    <select
                      value={businessCategory}
                      onChange={(e) => setBusinessCategory(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                    >
                      <option value="">Select category...</option>
                      {businessCategories[selectedBusinessType].map((category) => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>
                )}
              </div>
            </div>

            {/* Drawer Content */}
            <div className="h-full overflow-y-auto pb-20">
              <div className="p-6">
                {businessName && businessCategory && (
                  <div className="space-y-6">
                    {/* Personalized Strategy Header */}
                    <div className="bg-white rounded-xl p-6 border border-blue-200 shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-2xl">
                              {getActionPlan(selectedBusinessType, businessName, businessCategory).icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{businessName}</h3>
                              <p className="text-gray-600">Dubai Market Action Plan • {businessCategory} • {getActionPlan(selectedBusinessType, businessName, businessCategory).title}</p>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                            📈 Push Rates
                          </button>
                          <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium">
                            🎯 Create Campaign
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2">Strategy for {businessName}</h4>
                        <p className="text-blue-800 text-sm">
                          {getActionPlan(selectedBusinessType, businessName, businessCategory).overallStrategy.description}
                        </p>
                      </div>
                    </div>

                    {/* Revenue Opportunities */}
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="p-2 bg-emerald-100 rounded-lg">
                          <TrendingUp className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Top 3 Revenue Opportunities for {businessName}</h3>
                          <p className="text-gray-600">{businessCategory} - Immediate pricing and positioning strategies</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-8">
                        {selectedBusinessType === 'hotel' && businessCategory === 'Ultra Luxury (5-star+)' && (
                          <>
                            <div className="bg-gradient-to-br from-purple-50 to-pink-100/50 rounded-xl p-6 border border-purple-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">👑</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-purple-900">Ultra-Luxury Solo Concierge</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">+45%</div>
                                  <div className="text-xs text-purple-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-purple-800 mb-6 bg-white/60 p-3 rounded-lg border border-purple-200/40">
                                <span className="font-semibold">Ultra-Luxury Opportunity:</span> Exclusive personalized concierge for UHNW solo travelers
                              </p>
                            </div>

                            <div className="bg-gradient-to-br from-emerald-50 to-green-100/50 rounded-xl p-6 border border-emerald-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">🌿</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-emerald-900">Platinum Sustainability Suite</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">+35%</div>
                                  <div className="text-xs text-emerald-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-emerald-800 mb-6 bg-white/60 p-3 rounded-lg border border-emerald-200/40">
                                <span className="font-semibold">Ultra-Luxury Sustainability:</span> Carbon-negative suites with private conservation partnerships
                              </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100/50 rounded-xl p-6 border border-blue-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">🎭</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-blue-900">Exclusive Cultural Access</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">+40%</div>
                                  <div className="text-xs text-blue-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-blue-800 mb-6 bg-white/60 p-3 rounded-lg border border-blue-200/40">
                                <span className="font-semibold">Exclusive Access:</span> Private museum tours, royal palace visits, and cultural immersion
                              </p>
                            </div>
                          </>
                        )}
                        
                        {selectedBusinessType === 'hotel' && businessCategory === 'Mid-scale (3-star)' && (
                          <>
                            <div className="bg-gradient-to-br from-green-50 to-emerald-100/50 rounded-xl p-6 border border-green-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">💚</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-green-900">Smart Sustainability Package</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">+18%</div>
                                  <div className="text-xs text-green-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-green-800 mb-6 bg-white/60 p-3 rounded-lg border border-green-200/40">
                                <span className="font-semibold">Value Sustainability:</span> Basic eco-amenities with cost-effective green certifications
                              </p>
                            </div>

                            <div className="bg-gradient-to-br from-blue-50 to-indigo-100/50 rounded-xl p-6 border border-blue-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">👤</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-blue-900">Solo Traveler Value Package</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">+22%</div>
                                  <div className="text-xs text-blue-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-blue-800 mb-6 bg-white/60 p-3 rounded-lg border border-blue-200/40">
                                <span className="font-semibold">Solo Value:</span> Safe, comfortable solo accommodations with basic personalization
                              </p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-50 to-amber-100/50 rounded-xl p-6 border border-orange-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">📍</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-orange-900">Local Experience Add-ons</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">+25%</div>
                                  <div className="text-xs text-orange-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-orange-800 mb-6 bg-white/60 p-3 rounded-lg border border-orange-200/40">
                                <span className="font-semibold">Local Experiences:</span> Partner with local operators for authentic Dubai experiences
                              </p>
                            </div>
                          </>
                        )}
                        
                        {selectedBusinessType === 'hotel' && !['Ultra Luxury (5-star+)', 'Mid-scale (3-star)'].includes(businessCategory) && (
                          <>
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 border border-blue-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">🌱</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-blue-900">Sustainability Premium</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">+22%</div>
                                  <div className="text-xs text-blue-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-blue-800 mb-6 bg-white/60 p-3 rounded-lg border border-blue-200/40">
                                <span className="font-semibold">Market Opportunity:</span> 89% of Dubai visitors actively seek eco-friendly options
                              </p>
                              
                              <div className="space-y-4">
                                <div className="group bg-white rounded-xl p-4 border border-blue-200/40 shadow-sm hover:shadow-md hover:border-blue-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">1</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Get Green Certification</h5>
                                      <p className="text-sm text-gray-600">Obtain LEED, Green Key, or Dubai Green certifications</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-blue-700 font-medium">Timeline: 2-4 weeks</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-blue-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    🌱 Start Certification Process
                                  </button>
                                </div>
                                
                                <div className="group bg-white rounded-xl p-4 border border-emerald-200/40 shadow-sm hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">2</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Then: Launch Premium Green Rates</h5>
                                      <p className="text-sm text-gray-600">Launch sustainability premium pricing with certification proof</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-emerald-700 font-medium">Immediate after certification</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => setShowRateManagement(true)}
                                    className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md"
                                  >
                                    📈 Push Green Rates (+22%)
                                  </button>
                                </div>
                                
                                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">3</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-700 mb-1">Alternative: Sustainability Campaign</h5>
                                      <p className="text-sm text-gray-600">If certification pending, run awareness campaign first</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-amber-700 font-medium">Start immediately</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => setShowCampaignSuggestion(true)}
                                    className="w-full px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg text-sm font-medium hover:from-gray-600 hover:to-gray-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md"
                                  >
                                    🎯 Launch Green Awareness Campaign
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-indigo-50 to-purple-100/50 rounded-xl p-6 border border-indigo-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">📸</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-indigo-900">Solo Traveler Premium</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">+28%</div>
                                  <div className="text-xs text-indigo-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-indigo-800 mb-6 bg-white/60 p-3 rounded-lg border border-indigo-200/40">
                                <span className="font-semibold">Market Opportunity:</span> 31% solo traveler growth seeking personalized luxury experiences
                              </p>
                              
                              <div className="space-y-4">
                                <div className="group bg-white rounded-xl p-4 border border-indigo-200/40 shadow-sm hover:shadow-md hover:border-indigo-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">1</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Setup Solo Traveler Amenities</h5>
                                      <p className="text-sm text-gray-600">Add concierge services, safety features, personalized experiences</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-indigo-700 font-medium">Timeline: 1-2 weeks</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-indigo-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    👤 Setup Solo Services
                                  </button>
                                </div>
                                
                                <div className="group bg-white rounded-xl p-4 border border-emerald-200/40 shadow-sm hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">2</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Then: Launch Solo Premium Rates</h5>
                                      <p className="text-sm text-gray-600">Premium pricing for solo-friendly rooms with personalized services</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-emerald-700 font-medium">Launch after amenity setup</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => setShowSoloRatesManagement(true)}
                                    className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md"
                                  >
                                    📈 Push Solo Premium Rates (+28%)
                                  </button>
                                </div>
                                
                                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">3</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-700 mb-1">Alternative: Solo Traveler Survey</h5>
                                      <p className="text-sm text-gray-600">Survey current solo guests to understand their needs while setting up amenities</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-amber-700 font-medium">Start immediately</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg text-sm font-medium hover:from-gray-600 hover:to-gray-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    🎯 Start Solo Guest Survey
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-50 to-pink-100/50 rounded-xl p-6 border border-purple-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">🏠</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-purple-900">Extended Stay Packages</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">+35%</div>
                                  <div className="text-xs text-purple-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-purple-800 mb-6 bg-white/60 p-3 rounded-lg border border-purple-200/40">
                                <span className="font-semibold">Market Opportunity:</span> 25% growth in business+leisure travel segment
                              </p>
                              
                              <div className="space-y-4">
                                <div className="group bg-white rounded-xl p-4 border border-purple-200/40 shadow-sm hover:shadow-md hover:border-purple-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">1</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Setup Extended Stay Amenities</h5>
                                      <p className="text-sm text-gray-600">Add kitchenettes, workspace, laundry access</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-purple-700 font-medium">Timeline: Immediate setup</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg text-sm font-medium hover:from-purple-600 hover:to-indigo-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    🏠 Configure Extended Stay Rooms
                                  </button>
                                </div>
                                
                                <div className="group bg-white rounded-xl p-4 border border-emerald-200/40 shadow-sm hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">2</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Then: Launch Premium Extended Rates</h5>
                                      <p className="text-sm text-gray-600">Weekly/monthly rates with business amenities included</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-emerald-700 font-medium">Launch after amenity setup</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    📈 Push Extended Stay Rates (+35%)
                                  </button>
                                </div>
                                
                                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">3</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-700 mb-1">Alternative: Corporate Partnership</h5>
                                      <p className="text-sm text-gray-600">Partner with companies for employee extended stays</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-amber-700 font-medium">Start immediately</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg text-sm font-medium hover:from-gray-600 hover:to-gray-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    🎯 Launch Corporate Packages
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {selectedBusinessType === 'airline' && (
                          <>
                            <div className="bg-gradient-to-br from-sky-50 to-blue-100/50 rounded-xl p-6 border border-sky-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">✈️</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-sky-900">Carbon-Neutral Flights</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">+22%</div>
                                  <div className="text-xs text-sky-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-sky-800 mb-6 bg-white/60 p-3 rounded-lg border border-sky-200/40">
                                <span className="font-semibold">Market Opportunity:</span> Eco-premium for 89% sustainability-focused market
                              </p>
                              
                              <div className="space-y-4">
                                <div className="group bg-white rounded-xl p-4 border border-sky-200/40 shadow-sm hover:shadow-md hover:border-sky-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">1</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Secure Carbon Offset Program</h5>
                                      <p className="text-sm text-gray-600">Partner with verified carbon offset providers</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-sky-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-sky-700 font-medium">Timeline: 1-2 weeks</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-sky-600 hover:to-blue-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    🌱 Setup Carbon Offsets
                                  </button>
                                </div>
                                
                                <div className="group bg-white rounded-xl p-4 border border-emerald-200/40 shadow-sm hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">2</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Then: Launch Green Flight Premium</h5>
                                      <p className="text-sm text-gray-600">Carbon-neutral flight options with sustainability certificates</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-emerald-700 font-medium">Launch after offset setup</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => setShowRateManagement(true)}
                                    className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md"
                                  >
                                    📈 Push Green Fares (+22%)
                                  </button>
                                </div>
                                
                                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">3</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-700 mb-1">Alternative: Sustainability Marketing</h5>
                                      <p className="text-sm text-gray-600">Promote current eco-initiatives while offsets are being setup</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-amber-700 font-medium">Start immediately</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button 
                                    onClick={() => setShowCampaignSuggestion(true)}
                                    className="w-full px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg text-sm font-medium hover:from-gray-600 hover:to-gray-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md"
                                  >
                                    🎯 Launch Eco-Awareness Campaign
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-violet-50 to-purple-100/50 rounded-xl p-6 border border-violet-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">📸</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-violet-900">Creator Class Experience</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">+15%</div>
                                  <div className="text-xs text-violet-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-violet-800 mb-6 bg-white/60 p-3 rounded-lg border border-violet-200/40">
                                <span className="font-semibold">Market Opportunity:</span> Content creation premium cabin experience
                              </p>
                              
                              <div className="space-y-4">
                                <div className="group bg-white rounded-xl p-4 border border-violet-200/40 shadow-sm hover:shadow-md hover:border-violet-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">1</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Install Creator-Friendly Features</h5>
                                      <p className="text-sm text-gray-600">Add USB-C ports, lighting, content creation lounges</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-violet-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-violet-700 font-medium">Timeline: 2-3 weeks</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white rounded-lg text-sm font-medium hover:from-violet-600 hover:to-purple-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    📸 Setup Creator Amenities
                                  </button>
                                </div>
                                
                                <div className="group bg-white rounded-xl p-4 border border-emerald-200/40 shadow-sm hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">2</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Then: Launch Creator Class Fares</h5>
                                      <p className="text-sm text-gray-600">Premium seating with content creation perks and equipment</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-emerald-700 font-medium">Launch after features installed</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    📈 Push Creator Class (+15%)
                                  </button>
                                </div>
                                
                                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">3</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-700 mb-1">Alternative: Influencer Partnerships</h5>
                                      <p className="text-sm text-gray-600">Partner with travel influencers for co-created content</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-amber-700 font-medium">Start immediately</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg text-sm font-medium hover:from-gray-600 hover:to-gray-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    🎯 Start Influencer Program
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="bg-gradient-to-br from-rose-50 to-pink-100/50 rounded-xl p-6 border border-rose-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white text-lg">🔄</span>
                                  </div>
                                  <h4 className="text-lg font-bold text-rose-900">Flexible Premium Fares</h4>
                                </div>
                                <div className="text-right">
                                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">+15%</div>
                                  <div className="text-xs text-rose-700 font-medium">Revenue Increase</div>
                                </div>
                              </div>
                              <p className="text-sm text-rose-800 mb-6 bg-white/60 p-3 rounded-lg border border-rose-200/40">
                                <span className="font-semibold">Market Opportunity:</span> 69% of travelers prefer flexible planning options
                              </p>
                              
                              <div className="space-y-4">
                                <div className="group bg-white rounded-xl p-4 border border-rose-200/40 shadow-sm hover:shadow-md hover:border-rose-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">1</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Update Booking System</h5>
                                      <p className="text-sm text-gray-600">Implement flexible change/cancellation policies</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-rose-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-rose-700 font-medium">Timeline: 1 week</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-lg text-sm font-medium hover:from-rose-600 hover:to-pink-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    🔄 Configure Flexible Policies
                                  </button>
                                </div>
                                
                                <div className="group bg-white rounded-xl p-4 border border-emerald-200/40 shadow-sm hover:shadow-md hover:border-emerald-300/60 transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">2</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-900 mb-1">Then: Launch Flex Premium Fares</h5>
                                      <p className="text-sm text-gray-600">Premium pricing for unlimited changes and cancellations</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-emerald-700 font-medium">Launch after system update</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-lg text-sm font-medium hover:from-emerald-600 hover:to-emerald-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    📈 Push Flex Fares (+15%)
                                  </button>
                                </div>
                                
                                <div className="group bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300">
                                  <div className="flex items-start space-x-4 mb-3">
                                    <div className="w-8 h-8 bg-gradient-to-br from-gray-400 to-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">3</div>
                                    <div className="flex-1">
                                      <h5 className="font-semibold text-gray-700 mb-1">Alternative: Travel Insurance Partnership</h5>
                                      <p className="text-sm text-gray-600">Offer comprehensive travel insurance while policies update</p>
                                      <div className="flex items-center mt-2">
                                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-2"></div>
                                        <span className="text-xs text-amber-700 font-medium">Start immediately</span>
                                      </div>
                                    </div>
                                  </div>
                                  <button className="w-full px-4 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-lg text-sm font-medium hover:from-gray-600 hover:to-gray-700 transform hover:scale-[1.02] transition-all duration-200 shadow-sm hover:shadow-md">
                                    🎯 Launch Insurance Package
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        
                        {selectedBusinessType === 'car' && (
                          <>
                            <div className="bg-blue-50 rounded-lg p-5 border border-blue-100">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-blue-900">Electric Vehicle Premium</h4>
                                <div className="text-2xl font-bold text-emerald-600">+22%</div>
                              </div>
                              <p className="text-sm text-blue-800 mb-4">Sustainability premium for eco-conscious market</p>
                              
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-3 border border-blue-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                                    <h5 className="font-semibold text-gray-900">Acquire Electric Vehicle Fleet</h5>
                                  </div>
                                  <p className="text-sm text-gray-700 mb-3">Add Tesla, BMW i4, or similar EVs to fleet (2-4 weeks)</p>
                                  <button className="w-full px-3 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
                                    ⚡ Expand EV Fleet
                                  </button>
                                </div>
                                
                                <div className="bg-white rounded-lg p-3 border border-blue-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                                    <h5 className="font-semibold text-gray-900">Then: Launch EV Premium Rates</h5>
                                  </div>
                                  <p className="text-sm text-gray-700 mb-3">Premium pricing for electric vehicles with charging guides</p>
                                  <button className="w-full px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">
                                    📈 Push EV Rates (+22%)
                                  </button>
                                </div>
                                
                                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                    <h5 className="font-semibold text-gray-700">Alternative: Hybrid Premium</h5>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">Start with hybrid vehicles while building EV fleet</p>
                                  <button className="w-full px-3 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700">
                                    🎯 Launch Hybrid Campaign
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="bg-indigo-50 rounded-lg p-5 border border-indigo-100">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-indigo-900">Social Media Ready Cars</h4>
                                <div className="text-2xl font-bold text-emerald-600">+15%</div>
                              </div>
                              <p className="text-sm text-indigo-800 mb-4">Instagram-worthy luxury vehicles</p>
                              
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-3 border border-indigo-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                                    <h5 className="font-semibold text-gray-900">Curate Photo-Ready Fleet</h5>
                                  </div>
                                  <p className="text-sm text-gray-700 mb-3">Add convertibles, luxury cars, unique colors (1-2 weeks)</p>
                                  <button className="w-full px-3 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700">
                                    📸 Build Instagram Fleet
                                  </button>
                                </div>
                                
                                <div className="bg-white rounded-lg p-3 border border-indigo-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                                    <h5 className="font-semibold text-gray-900">Then: Launch Social Media Package</h5>
                                  </div>
                                  <p className="text-sm text-gray-700 mb-3">Premium rates with photo shoot locations and props</p>
                                  <button className="w-full px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">
                                    📈 Push Social Media Rates (+15%)
                                  </button>
                                </div>
                                
                                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                    <h5 className="font-semibold text-gray-700">Alternative: Influencer Collaboration</h5>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">Partner with Dubai influencers for car content creation</p>
                                  <button className="w-full px-3 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700">
                                    🎯 Start Influencer Program
                                  </button>
                                </div>
                              </div>
                            </div>

                            <div className="bg-purple-50 rounded-lg p-5 border border-purple-100">
                              <div className="flex items-center justify-between mb-3">
                                <h4 className="font-bold text-purple-900">Extended Journey Packages</h4>
                                <div className="text-2xl font-bold text-emerald-600">+35%</div>
                              </div>
                              <p className="text-sm text-purple-800 mb-4">Multi-day experience packages</p>
                              
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-3 border border-purple-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</div>
                                    <h5 className="font-semibold text-gray-900">Create Journey Packages</h5>
                                  </div>
                                  <p className="text-sm text-gray-700 mb-3">Design 3-7 day packages with route guides and amenities (1 week)</p>
                                  <button className="w-full px-3 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700">
                                    🗺️ Design Journey Packages
                                  </button>
                                </div>
                                
                                <div className="bg-white rounded-lg p-3 border border-purple-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</div>
                                    <h5 className="font-semibold text-gray-900">Then: Launch Extended Premium</h5>
                                  </div>
                                  <p className="text-sm text-gray-700 mb-3">Multi-day packages with GPS, emergency support, insurance</p>
                                  <button className="w-full px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700">
                                    📈 Push Journey Rates (+35%)
                                  </button>
                                </div>
                                
                                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                                  <div className="flex items-center space-x-3 mb-2">
                                    <div className="w-6 h-6 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs font-bold">3</div>
                                    <h5 className="font-semibold text-gray-700">Alternative: Weekly Discounts</h5>
                                  </div>
                                  <p className="text-sm text-gray-600 mb-3">Offer attractive weekly rates while packages are being developed</p>
                                  <button className="w-full px-3 py-2 bg-gray-600 text-white rounded-lg text-sm font-medium hover:bg-gray-700">
                                    🎯 Launch Weekly Specials
                                  </button>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                                         </div>
                  )}
                
                {(!businessName || !businessCategory) && (
                  <div className="text-center py-16">
                    <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Brain className="w-12 h-12 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to create your action plan?</h3>
                    <p className="text-gray-600 mb-6">Select your business name and category above to get a personalized strategy with focused recommendations for the Dubai market.</p>
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>AI-powered insights</span>
                      <span>•</span>
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Revenue optimization</span>
                      <span>•</span>
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span>Actionable CTAs</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Data Sources Modal */}
      {showDataSources && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setShowDataSources(false)}></div>
          <div className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl z-50 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Data Sources & Methodology</h2>
                <p className="text-gray-600">Comprehensive data sourcing and calculation transparency</p>
              </div>
              <button
                onClick={() => setShowDataSources(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Industry Reports</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Regiondo 2025 Travel Statistics</li>
                    <li>• American Express Global Travel Trends</li>
                    <li>• Euromonitor Global Travel Market</li>
                    <li>• GetYourGuide Experience Industry</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Consumer Surveys</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Booking.com Travel Trends</li>
                    <li>• Hilton Global Travel Survey</li>
                    <li>• Deloitte Travel & Hospitality</li>
                    <li>• Expedia Group Insights</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-xs text-gray-500">
                Last Updated: {dataLastUpdated} | Data Accuracy: 95% confidence intervals
              </div>
            </div>
          </div>
        </>
      )}

      {/* Campaign Suggestion Modal */}
      {showCampaignSuggestion && (
        <>
                     <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-60" onClick={() => {
             setShowCampaignSuggestion(false)
             setShowBudgetBreakdown(false)
           }}></div>
          <div className="fixed inset-x-4 top-1/2 transform -translate-y-1/2 max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl z-70 max-h-[85vh] overflow-y-auto border border-gray-100">
            <div className="flex items-center justify-between p-8 border-b border-gray-100 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-t-3xl">
                             <div>
                 <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">🌱 Green Awareness Campaign Strategy</h2>
                 <p className="text-gray-700 text-lg">Ready-to-launch sustainability campaign for Dubai market</p>
               </div>
                                <button
                   onClick={() => {
                     setShowCampaignSuggestion(false)
                     setShowBudgetBreakdown(false)
                   }}
                   className="p-3 hover:bg-white/70 rounded-xl transition-all duration-200 hover:scale-110 bg-white/40 backdrop-blur-sm"
                 >
                   <X className="w-6 h-6 text-gray-600" />
                 </button>
            </div>
            
                         <div className="p-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
               {/* Campaign Header - Premium Redesign */}
               <div className="relative overflow-hidden bg-white rounded-3xl shadow-2xl border border-gray-100/50 mb-10">
                 {/* Animated Background */}
                 <div className="absolute inset-0">
                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-green-500/5 to-teal-500/5"></div>
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400"></div>
                   <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-emerald-200/20 to-green-200/20 rounded-full blur-xl"></div>
                   <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-teal-200/20 to-emerald-200/20 rounded-full blur-xl"></div>
                 </div>
                 
                 <div className="relative z-10 p-8">
                   {/* Header Section */}
                   <div className="flex items-start justify-between mb-8">
                     <div className="flex-1">
                       <div className="flex items-center mb-3">
                         <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                           <span className="text-2xl">🌱</span>
                         </div>
                         <div>
                           <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-1">Premium Campaign Strategy</div>
                           <h3 className="text-2xl font-bold text-gray-900 leading-tight">"Dubai's Greenest Stay Experience"</h3>
                         </div>
                       </div>
                       <div className="flex items-center space-x-4 text-sm text-gray-600">
                         <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                           <span className="font-medium">60-Day Strategy</span>
                         </div>
                         <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                           <span className="font-medium">Multi-Channel</span>
                         </div>
                         <div className="flex items-center space-x-2">
                           <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                           <span className="font-medium">AI-Optimized</span>
                         </div>
                       </div>
                     </div>
                     
                     {/* Performance Badge */}
                     <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200/50 shadow-sm min-w-[140px]">
                       <div className="text-center">
                         <div className="text-3xl font-black bg-gradient-to-br from-emerald-600 to-green-700 bg-clip-text text-transparent mb-1">+22%</div>
                         <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Revenue Growth</div>
                         <div className="text-xs text-gray-500 mt-1">Projected Increase</div>
                       </div>
                     </div>
                   </div>
                   
                   {/* Metrics Grid */}
                   <div className="grid grid-cols-3 gap-4">
                     <div 
                       onClick={() => setShowBudgetBreakdown(!showBudgetBreakdown)}
                       className="group bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-emerald-300/50 hover:-translate-y-1"
                       title="Click for detailed budget breakdown"
                     >
                       <div className="flex items-start justify-between mb-4">
                         <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                           <span className="text-white text-lg">💰</span>
                         </div>
                         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                           <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                             <span className="text-xs">📊</span>
                           </div>
                         </div>
                       </div>
                       <div className="text-2xl font-black text-gray-900 mb-1">$150K</div>
                       <div className="text-sm font-semibold text-gray-600 mb-2">Campaign Investment</div>
                       <div className="text-xs bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-full font-medium border border-blue-200/50">
                         {showBudgetBreakdown ? '👆 Hide breakdown' : '💡 View breakdown'}
                       </div>
                     </div>
                     
                     <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                       <div className="flex items-start justify-between mb-4">
                         <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-sm">
                           <span className="text-white text-lg">📈</span>
                         </div>
                         <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                           <span className="text-xs">🎯</span>
                         </div>
                       </div>
                       <div className="text-2xl font-black text-gray-900 mb-1">425%</div>
                       <div className="text-sm font-semibold text-gray-600 mb-2">Expected ROI</div>
                       <div className="text-xs bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700 px-3 py-1 rounded-full font-medium border border-emerald-200/50">
                         Industry Leading
                       </div>
                     </div>
                     
                     <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm">
                       <div className="flex items-start justify-between mb-4">
                         <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-sm">
                           <span className="text-white text-lg">⏱️</span>
                         </div>
                         <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                           <span className="text-xs">🚀</span>
                         </div>
                       </div>
                       <div className="text-2xl font-black text-gray-900 mb-1">60</div>
                       <div className="text-sm font-semibold text-gray-600 mb-2">Campaign Days</div>
                       <div className="text-xs bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 px-3 py-1 rounded-full font-medium border border-purple-200/50">
                         Fast Launch
                       </div>
                     </div>
                   </div>
                   
                   {/* Quick Stats Bar */}
                   <div className="mt-6 p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl border border-gray-200/50">
                     <div className="flex items-center justify-between text-sm">
                       <div className="flex items-center space-x-6">
                         <div className="text-gray-600">
                           <span className="font-medium text-gray-900">Target:</span> 89% sustainability-focused travelers
                         </div>
                         <div className="text-gray-600">
                           <span className="font-medium text-gray-900">Reach:</span> 2.5M+ Dubai visitors annually
                         </div>
                       </div>
                       <div className="flex items-center space-x-2 text-emerald-600">
                         <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                         <span className="font-semibold">Ready to Launch</span>
                       </div>
                     </div>
                   </div>
                 </div>
               </div>

               {/* Budget Breakdown */}
               {showBudgetBreakdown && (
               <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm mb-6 animate-in slide-in-from-top duration-300">
                 <h4 className="text-lg font-bold text-gray-900 mb-4">💰 Campaign Budget Breakdown ($150K)</h4>
                 <div className="text-sm text-gray-600 mb-4">
                   <strong>Reasoning:</strong> Dubai's premium market requires high-quality content and strategic ad spend to reach affluent travelers. Budget calculated for {businessCategory || 'mid-size hotel'} targeting 89% sustainability-focused market.
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-3">
                     <h5 className="font-semibold text-gray-800">Content & Creative ($45K - 30%)</h5>
                     <div className="space-y-2 text-sm">
                       <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-lg">
                         <span>Professional photography/videography</span>
                         <span className="font-medium">$25K</span>
                       </div>
                       <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-lg">
                         <span>Social media content creation</span>
                         <span className="font-medium">$12K</span>
                       </div>
                       <div className="flex justify-between items-center bg-blue-50 px-3 py-2 rounded-lg">
                         <span>Graphic design & branding</span>
                         <span className="font-medium">$8K</span>
                       </div>
                     </div>
                   </div>
                   
                   <div className="space-y-3">
                     <h5 className="font-semibold text-gray-800">Paid Advertising ($75K - 50%)</h5>
                     <div className="space-y-2 text-sm">
                       <div className="flex justify-between items-center bg-emerald-50 px-3 py-2 rounded-lg">
                         <span>Instagram/Facebook ads (Dubai targeting)</span>
                         <span className="font-medium">$35K</span>
                       </div>
                       <div className="flex justify-between items-center bg-emerald-50 px-3 py-2 rounded-lg">
                         <span>Google Ads (sustainability keywords)</span>
                         <span className="font-medium">$25K</span>
                       </div>
                       <div className="flex justify-between items-center bg-emerald-50 px-3 py-2 rounded-lg">
                         <span>LinkedIn ads (business travelers)</span>
                         <span className="font-medium">$15K</span>
                       </div>
                     </div>
                   </div>
                   
                   <div className="space-y-3">
                     <h5 className="font-semibold text-gray-800">Influencer Partnerships ($20K - 13%)</h5>
                     <div className="space-y-2 text-sm">
                       <div className="flex justify-between items-center bg-purple-50 px-3 py-2 rounded-lg">
                         <span>3 Dubai eco-travel influencers</span>
                         <span className="font-medium">$15K</span>
                       </div>
                       <div className="flex justify-between items-center bg-purple-50 px-3 py-2 rounded-lg">
                         <span>Content creation support</span>
                         <span className="font-medium">$5K</span>
                       </div>
                     </div>
                   </div>
                   
                   <div className="space-y-3">
                     <h5 className="font-semibold text-gray-800">Management & Analytics ($10K - 7%)</h5>
                     <div className="space-y-2 text-sm">
                       <div className="flex justify-between items-center bg-orange-50 px-3 py-2 rounded-lg">
                         <span>Campaign management (60 days)</span>
                         <span className="font-medium">$6K</span>
                       </div>
                       <div className="flex justify-between items-center bg-orange-50 px-3 py-2 rounded-lg">
                         <span>Analytics & reporting tools</span>
                         <span className="font-medium">$4K</span>
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-200">
                   <div className="flex items-center justify-between mb-2">
                     <span className="font-semibold text-emerald-900">Expected Results:</span>
                     <span className="text-emerald-600 font-bold">+$637K Revenue</span>
                   </div>
                   <div className="text-sm text-emerald-800">
                     <strong>ROI Calculation:</strong> $150K investment → $637K additional revenue (425% ROI)<br/>
                     <strong>Based on:</strong> 22% sustainability premium × current booking volume × 60-day campaign period
                   </div>
                 </div>
                 
                 <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                   <div className="text-xs text-gray-600">
                     <strong>Budget Scaling:</strong> This budget is for a mid-to-large hotel operation. Smaller properties can scale down to $50-75K, while luxury resorts may invest $200-300K for premium positioning.
                   </div>
                 </div>
               </div>
               )}

                              {/* Campaign Visual */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                 <div className="bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl p-8 border border-emerald-200/50 shadow-lg">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">📸 Campaign Visual Concept</h4>
                  
                  {/* Mock Instagram Post */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    {/* Instagram Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center shadow-md">
                          <span className="text-white font-bold text-sm">{businessName ? businessName.charAt(0) : 'H'}</span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 text-sm">{businessName || 'Your Hotel'}</div>
                          <div className="text-xs text-gray-500">Dubai, United Arab Emirates • Sponsored</div>
                        </div>
                      </div>
                      <div className="text-gray-400">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                        </svg>
                      </div>
                    </div>
                    
                    {/* Premium Visual Content */}
                    <div className="aspect-square relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-30">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-emerald-400/20 via-transparent to-teal-400/20"></div>
                        <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-400/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"></div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-8">
                        <div className="mb-6">
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-2xl border border-white/30">
                            <span className="text-4xl">🌿</span>
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Dubai's Greenest Stay</h3>
                          <p className="text-emerald-100 text-sm font-medium">100% Carbon Neutral Luxury Experience</p>
                        </div>
                        
                        {/* Floating Achievement Badges */}
                        <div className="absolute top-6 right-6">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/50">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">🏆</span>
                              <div className="text-xs">
                                <div className="font-bold text-emerald-800">LEED Platinum</div>
                                <div className="text-emerald-600">Certified</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute bottom-6 left-6">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/50">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">♻️</span>
                              <div className="text-xs">
                                <div className="font-bold text-emerald-800">Zero Waste</div>
                                <div className="text-emerald-600">Initiative</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="absolute top-6 left-6">
                          <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg border border-white/50">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg">🌱</span>
                              <div className="text-xs">
                                <div className="font-bold text-emerald-800">Carbon</div>
                                <div className="text-emerald-600">Negative</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Gradient Overlay for Text Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                    </div>
                    
                    {/* Instagram Engagement Bar */}
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-4">
                          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                          </svg>
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </div>
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                      </div>
                      
                      <div className="text-sm text-gray-900 mb-2">
                        <span className="font-semibold">2,847 likes</span>
                      </div>
                      
                      <div className="text-sm text-gray-900 mb-2">
                        <span className="font-semibold">{businessName || 'yourhotel'}</span> Experience Dubai's most sustainable luxury stay! 🌿 Our carbon-neutral suites, solar energy, and local partnerships make your dream vacation guilt-free. 
                        <span className="text-blue-600 font-medium">#DubaiGreen #SustainableTravel #EcoLuxury</span>
                      </div>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>View all 89 comments</span>
                        <span>+22% premium pricing</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">📝 Campaign Content Strategy</h4>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <h5 className="font-semibold text-blue-900 mb-2">Week 1-2: Foundation</h5>
                        <ul className="text-sm text-blue-800 space-y-1">
                          <li>• Announce sustainability commitment</li>
                          <li>• Showcase green certifications</li>
                          <li>• Behind-the-scenes eco initiatives</li>
                        </ul>
                      </div>
                      
                      <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                        <h5 className="font-semibold text-emerald-900 mb-2">Week 3-4: Guest Stories</h5>
                        <ul className="text-sm text-emerald-800 space-y-1">
                          <li>• Eco-conscious guest testimonials</li>
                          <li>• Local partnership highlights</li>
                          <li>• Carbon footprint calculations</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                        <h5 className="font-semibold text-purple-900 mb-2">Week 5-8: Premium Launch</h5>
                        <ul className="text-sm text-purple-800 space-y-1">
                          <li>• Green premium room reveals</li>
                          <li>• Exclusive sustainability perks</li>
                          <li>• Limited-time eco packages</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

                             {/* Campaign Tags & Hashtags */}
               <div className="bg-white rounded-2xl p-6 border border-gray-200/50 shadow-sm mb-8">
                 <div className="flex items-center justify-between mb-4">
                   <h4 className="text-lg font-bold text-gray-900 flex items-center">
                     🏷️ Campaign Tags & Hashtags
                   </h4>
                   <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">Copy & Paste Ready</span>
                 </div>
                 
                 <div className="space-y-3">
                   <div className="flex items-center space-x-4">
                     <div className="w-20 text-xs font-semibold text-emerald-700 flex items-center">
                       <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                       Primary
                     </div>
                     <div className="flex flex-wrap gap-2">
                       <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-xs font-medium border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer">#DubaiGreen</span>
                       <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-xs font-medium border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer">#SustainableTravel</span>
                       <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-xs font-medium border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer">#EcoLuxury</span>
                       <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-lg text-xs font-medium border border-emerald-200 hover:bg-emerald-100 transition-all cursor-pointer">#CarbonNeutral</span>
                     </div>
                   </div>
                   
                   <div className="flex items-center space-x-4">
                     <div className="w-20 text-xs font-semibold text-blue-700 flex items-center">
                       <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                       Location
                     </div>
                     <div className="flex flex-wrap gap-2">
                       <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer">#VisitDubai</span>
                       <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer">#DubaiSustainability</span>
                       <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer">#GreenDubai</span>
                       <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs font-medium border border-blue-200 hover:bg-blue-100 transition-all cursor-pointer">#UAE2071</span>
                     </div>
                   </div>
                   
                   <div className="flex items-center space-x-4">
                     <div className="w-20 text-xs font-semibold text-purple-700 flex items-center">
                       <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                       Lifestyle
                     </div>
                     <div className="flex flex-wrap gap-2">
                       <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-xs font-medium border border-purple-200 hover:bg-purple-100 transition-all cursor-pointer">#GuiltFreeTravel</span>
                       <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-xs font-medium border border-purple-200 hover:bg-purple-100 transition-all cursor-pointer">#EcoWarrior</span>
                       <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-lg text-xs font-medium border border-purple-200 hover:bg-purple-100 transition-all cursor-pointer">#ResponsibleTravel</span>
                     </div>
                   </div>
                 </div>
               </div>

                                            {/* Action Buttons */}
               <div className="bg-white rounded-3xl p-8 border border-gray-200/50 shadow-lg">
                 <div className="flex items-center justify-between mb-6">
                   <div>
                     <h4 className="text-xl font-bold text-gray-900 mb-1">Ready to Launch?</h4>
                     <p className="text-gray-600">Choose your preferred action to get started immediately</p>
                   </div>
                   <div className="flex items-center space-x-2 text-sm text-emerald-600">
                     <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                     <span className="font-semibold">All systems ready</span>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                   <button className="group relative overflow-hidden bg-gradient-to-br from-emerald-500 via-green-500 to-teal-600 text-white rounded-2xl p-6 font-bold hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-emerald-400/50">
                     <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                     <div className="relative z-10">
                       <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                         <span className="text-2xl">🚀</span>
                       </div>
                       <div className="text-lg font-bold mb-2">Launch Campaign</div>
                       <div className="text-sm opacity-90">Start immediately with full strategy deployment</div>
                     </div>
                   </button>
                   
                   <button className="group relative bg-white border-2 border-emerald-500/30 text-emerald-700 rounded-2xl p-6 font-bold hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 hover:border-emerald-500/50 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1">
                     <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:from-emerald-200 group-hover:to-green-200 transition-all duration-300">
                       <span className="text-2xl">📋</span>
                     </div>
                     <div className="text-lg font-bold mb-2 text-gray-900">Download Guide</div>
                     <div className="text-sm text-gray-600">Complete campaign playbook with templates</div>
                   </button>
                   
                   <button 
                     onClick={() => {
                       setShowCampaignSuggestion(false)
                       setShowBudgetBreakdown(false)
                     }}
                     className="group relative bg-gradient-to-br from-gray-50 to-slate-100 text-gray-700 rounded-2xl p-6 font-bold hover:from-gray-100 hover:to-slate-200 transition-all duration-300 shadow-sm hover:shadow-lg transform hover:-translate-y-1 border border-gray-200/50"
                   >
                     <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 mx-auto shadow-sm group-hover:shadow-md transition-all duration-300">
                       <span className="text-2xl text-gray-500">✕</span>
                     </div>
                     <div className="text-lg font-bold mb-2">Close</div>
                     <div className="text-sm text-gray-500">Return to dashboard</div>
                   </button>
                 </div>
                 
                 <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/50">
                   <div className="flex items-center justify-center space-x-6 text-sm">
                     <div className="flex items-center space-x-2 text-blue-700">
                       <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                         <span className="text-xs text-white">✓</span>
                       </span>
                       <span className="font-medium">Strategy Validated</span>
                     </div>
                     <div className="flex items-center space-x-2 text-blue-700">
                       <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                         <span className="text-xs text-white">✓</span>
                       </span>
                       <span className="font-medium">Budget Optimized</span>
                     </div>
                     <div className="flex items-center space-x-2 text-blue-700">
                       <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                         <span className="text-xs text-white">✓</span>
                       </span>
                       <span className="font-medium">ROI Guaranteed</span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </>
      )}

      {/* Rate Management Overlay */}
      {showRateManagement && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-80" onClick={() => setShowRateManagement(false)}></div>
          <div className="fixed inset-x-4 top-4 bottom-4 max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl z-90 border border-gray-100 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-b border-gray-200 p-6 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Rate Management System</h2>
                  <p className="text-gray-600">Optimize your sustainability premium pricing strategy</p>
                </div>
                <button
                  onClick={() => setShowRateManagement(false)}
                  className="p-3 hover:bg-white/70 rounded-xl transition-all duration-200 hover:scale-110 bg-white/40 backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              {/* Tab Navigation */}
              <div className="mt-6 flex space-x-1">
                <button
                  onClick={() => setRateManagementTab('trends')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    rateManagementTab === 'trends'
                      ? 'bg-white text-emerald-600 shadow-sm border border-emerald-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  📊 Your Current Rates (Next 14 Days)
                </button>
                <button
                  onClick={() => setRateManagementTab('ari')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    rateManagementTab === 'ari'
                      ? 'bg-white text-emerald-600 shadow-sm border border-emerald-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  ⚡ Update ARI
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6 min-h-0">
              {rateManagementTab === 'trends' && (
                <div className="space-y-6">
                  {/* Rate Trends Analysis */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Rate Trends Analysis</h3>
                          <p className="text-gray-600 mt-1">Real-time pricing performance across all channels</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-emerald-600">Live Data</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Performance Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">💰</span>
                            </div>
                            <span className="text-blue-600 text-sm font-semibold">+12%</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">$387</div>
                          <div className="text-sm text-gray-600">Avg. Daily Rate</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">📈</span>
                            </div>
                            <span className="text-emerald-600 text-sm font-semibold">+18%</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">$298</div>
                          <div className="text-sm text-gray-600">RevPAR</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-4 border border-purple-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">🏨</span>
                            </div>
                            <span className="text-purple-600 text-sm font-semibold">+8%</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">77%</div>
                          <div className="text-sm text-gray-600">Occupancy</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-4 border border-orange-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">🎯</span>
                            </div>
                            <span className="text-orange-600 text-sm font-semibold">92%</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">Clean</div>
                          <div className="text-sm text-gray-600">Rate Parity</div>
                        </div>
                      </div>

                                             {/* Rate Chart Interactive */}
                       <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                         <div className="flex items-center justify-between p-4 border-b border-gray-100">
                           <div>
                             <h4 className="text-lg font-semibold text-gray-900">14-Day Rate Trends</h4>
                             <p className="text-sm text-gray-600">Interactive pricing across all channels</p>
                           </div>
                           <div className="flex items-center space-x-3">
                             <div className="flex items-center space-x-2 text-sm">
                               <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                               <span className="text-gray-600">Current</span>
                             </div>
                             <div className="flex items-center space-x-2 text-sm">
                               <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                               <span className="text-gray-600">Recommended</span>
                             </div>
                             <button className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
                               View Details
                             </button>
                           </div>
                         </div>
                         
                         <div className="p-4">
                           <div className="grid grid-cols-14 gap-1">
                             {Array.from({length: 14}, (_, i) => {
                               const date = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
                               const currentRate = Math.floor(Math.random() * 100 + 320);
                               const recommendedRate = Math.floor(currentRate * 1.22);
                               const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                               const occupancy = Math.floor(Math.random() * 30 + 60);
                               
                               return (
                                 <div 
                                   key={i} 
                                   className="group relative cursor-pointer"
                                   title={`${date.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'})}\nCurrent: $${currentRate}\nRecommended: $${recommendedRate}\nOccupancy: ${occupancy}%`}
                                 >
                                   {/* Tooltip */}
                                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                     <div className="bg-gray-900 text-white text-xs rounded-lg p-3 shadow-lg min-w-max">
                                       <div className="font-semibold">{date.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'})}</div>
                                       <div className="mt-1 space-y-1">
                                         <div className="flex justify-between space-x-4">
                                           <span>Current:</span>
                                           <span className="font-medium">${currentRate}</span>
                                         </div>
                                         <div className="flex justify-between space-x-4">
                                           <span>Recommended:</span>
                                           <span className="font-medium text-emerald-300">${recommendedRate}</span>
                                         </div>
                                         <div className="flex justify-between space-x-4">
                                           <span>Occupancy:</span>
                                           <span className="font-medium">{occupancy}%</span>
                                         </div>
                                         <div className="flex justify-between space-x-4">
                                           <span>Uplift:</span>
                                           <span className="font-medium text-emerald-300">+22%</span>
                                         </div>
                                       </div>
                                       <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                         <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                       </div>
                                     </div>
                                   </div>
                                   
                                   {/* Date Label */}
                                   <div className={`text-xs text-center mb-2 font-medium ${isWeekend ? 'text-orange-600' : 'text-gray-600'}`}>
                                     {date.toLocaleDateString('en-US', {day: 'numeric'})}
                                   </div>
                                   
                                   {/* Rate Bars Container */}
                                   <div className="relative h-20 bg-gray-50 rounded-lg overflow-hidden group-hover:bg-gray-100 transition-colors">
                                     {/* Current Rate Bar */}
                                     <div 
                                       className="absolute bottom-0 left-0 w-1/2 bg-blue-500 group-hover:bg-blue-600 transition-colors rounded-tl-lg"
                                       style={{height: `${(currentRate - 250) / 200 * 100}%`}}
                                     ></div>
                                     
                                     {/* Recommended Rate Bar */}
                                     <div 
                                       className="absolute bottom-0 right-0 w-1/2 bg-emerald-500 group-hover:bg-emerald-600 transition-colors rounded-tr-lg"
                                       style={{height: `${(recommendedRate - 250) / 200 * 100}%`}}
                                     ></div>
                                     
                                     {/* Weekend Indicator */}
                                     {isWeekend && (
                                       <div className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full"></div>
                                     )}
                                   </div>
                                   
                                   {/* Rate Values */}
                                   <div className="mt-2 text-center">
                                     <div className="text-xs font-bold text-gray-900">${currentRate}</div>
                                     <div className="text-xs font-bold text-emerald-600">${recommendedRate}</div>
                                   </div>
                                   
                                   {/* Day Label */}
                                   <div className="text-xs text-center text-gray-500 mt-1">
                                     {date.toLocaleDateString('en-US', {weekday: 'short'})}
                                   </div>
                                 </div>
                               );
                             })}
                           </div>
                           
                           {/* Chart Controls */}
                           <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                             <div className="flex items-center space-x-4">
                               <button className="flex items-center space-x-2 px-3 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors text-sm font-medium">
                                 <span>✓</span>
                                 <span>Apply Recommended Rates</span>
                               </button>
                               <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                 <span>📊</span>
                                 <span>Advanced View</span>
                               </button>
                             </div>
                             <div className="flex items-center space-x-4 text-sm text-gray-600">
                               <div className="flex items-center space-x-2">
                                 <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                                 <span>Weekend</span>
                               </div>
                               <div>Revenue Impact: <span className="font-semibold text-emerald-600">+$12,450</span></div>
                             </div>
                           </div>
                         </div>
                       </div>

                      {/* Channel Performance */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Channel Performance</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            { name: 'Booking.com', rate: '$387', parity: 'Clean', status: 'good', color: 'emerald' },
                            { name: 'Expedia', rate: '$387', parity: '-2%', status: 'warning', color: 'amber' },
                            { name: 'Agoda', rate: '$379', parity: '-8%', status: 'critical', color: 'red' },
                            { name: 'Direct', rate: '$399', parity: '+3%', status: 'excellent', color: 'blue' }
                          ].map((channel, idx) => (
                            <div key={idx} className={`bg-white rounded-xl p-4 border-2 border-${channel.color}-200/50 shadow-sm`}>
                              <div className="flex items-center justify-between mb-3">
                                <div className="font-semibold text-gray-900">{channel.name}</div>
                                <div className={`w-3 h-3 rounded-full bg-${channel.color}-400`}></div>
                              </div>
                              <div className="text-xl font-bold text-gray-900 mb-1">{channel.rate}</div>
                              <div className={`text-sm font-medium ${
                                channel.status === 'good' || channel.status === 'excellent' ? `text-${channel.color}-600` : 
                                channel.status === 'warning' ? 'text-amber-600' : 'text-red-600'
                              }`}>
                                {channel.parity}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {rateManagementTab === 'ari' && (
                <div className="space-y-6">
                  {/* ARI Update Interface */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Update ARI - Sustainability Premium</h3>
                          <p className="text-gray-600 mt-1">Implement green pricing strategy across room types</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Recommended Uplift:</span> +22%
                          </div>
                          <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                            Apply All
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Room Types */}
                      <div className="space-y-6">
                        {[
                          {
                            type: 'Deluxe Green Suite',
                            current: 450,
                            recommended: 549,
                            inventory: 12,
                            description: 'Premium suite with sustainability features and carbon-neutral amenities'
                          },
                          {
                            type: 'Eco Superior Room',
                            current: 320,
                            recommended: 390,
                            inventory: 24,
                            description: 'Standard room with eco-friendly amenities and green certifications'
                          },
                          {
                            type: 'Sustainable Standard',
                            current: 250,
                            recommended: 305,
                            inventory: 18,
                            description: 'Base room with sustainable practices and eco-conscious features'
                          }
                        ].map((room, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-gray-50 to-emerald-50/30 rounded-2xl p-6 border border-gray-200">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{room.type}</h4>
                                <p className="text-sm text-gray-600 mb-3">{room.description}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <span>Available: {room.inventory} rooms</span>
                                  <span>•</span>
                                  <span>Next 14 days</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-emerald-600">+{Math.round(((room.recommended - room.current) / room.current) * 100)}%</div>
                                <div className="text-xs text-gray-500">Uplift</div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {/* Current Rate */}
                              <div className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="text-sm font-semibold text-gray-600 mb-2">Current Rate</div>
                                <div className="text-2xl font-bold text-gray-900">${room.current}</div>
                                <div className="text-xs text-gray-500 mt-1">Per night</div>
                              </div>

                              {/* Recommended Rate */}
                              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                                <div className="text-sm font-semibold text-emerald-700 mb-2">Recommended Rate</div>
                                <div className="text-2xl font-bold text-emerald-600">${room.recommended}</div>
                                <div className="text-xs text-emerald-600 mt-1">Sustainability premium</div>
                              </div>

                              {/* Revenue Impact */}
                              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                                <div className="text-sm font-semibold text-blue-700 mb-2">Revenue Impact</div>
                                <div className="text-2xl font-bold text-blue-600">+${((room.recommended - room.current) * room.inventory * 14).toLocaleString()}</div>
                                <div className="text-xs text-blue-600 mt-1">14-day projection</div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                                  <span className="text-sm font-medium text-gray-700">Apply recommended rate</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                                  <span className="text-sm font-medium text-gray-700">Update all channels</span>
                                </label>
                              </div>
                              <div className="flex items-center space-x-3">
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                  Custom Rate
                                </button>
                                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                                  Update Rate
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Summary */}
                      <div className="mt-8 bg-gradient-to-r from-emerald-50 to-green-50 rounded-2xl p-6 border border-emerald-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="text-lg font-bold text-emerald-900 mb-1">Total Revenue Impact</h4>
                            <p className="text-emerald-700">Projected additional revenue from sustainability premium</p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-emerald-600">+$47,890</div>
                            <div className="text-sm text-emerald-600">Next 14 days</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Solo Rates Management Overlay */}
      {showSoloRatesManagement && (
        <>
          <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-80" onClick={() => setShowSoloRatesManagement(false)}></div>
          <div className="fixed inset-x-4 top-4 bottom-4 max-w-7xl mx-auto bg-white rounded-3xl shadow-2xl z-90 border border-gray-100 flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 border-b border-gray-200 p-6 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Solo Traveler Premium Rates</h2>
                  <p className="text-gray-600">Optimize pricing for the growing solo travel market segment</p>
                </div>
                <button
                  onClick={() => setShowSoloRatesManagement(false)}
                  className="p-3 hover:bg-white/70 rounded-xl transition-all duration-200 hover:scale-110 bg-white/40 backdrop-blur-sm"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              
              {/* Tab Navigation */}
              <div className="mt-6 flex space-x-1">
                <button
                  onClick={() => setSoloRatesTab('trends')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    soloRatesTab === 'trends'
                      ? 'bg-white text-violet-600 shadow-sm border border-violet-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  👤 Solo Market Analysis (Next 14 Days)
                </button>
                <button
                  onClick={() => setSoloRatesTab('ari')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                    soloRatesTab === 'ari'
                      ? 'bg-white text-violet-600 shadow-sm border border-violet-200'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-white/50'
                  }`}
                >
                  💰 Update Solo Premium Rates
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6 min-h-0">
              {soloRatesTab === 'trends' && (
                <div className="space-y-6">
                  {/* Solo Market Analysis */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Solo Traveler Market Analysis</h3>
                          <p className="text-gray-600 mt-1">Real-time insights on solo booking patterns and pricing opportunities</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>
                          <span className="text-sm font-medium text-violet-600">Live Solo Data</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Solo Market Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-xl p-4 border border-violet-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-violet-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">👤</span>
                            </div>
                            <span className="text-violet-600 text-sm font-semibold">+32%</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">43%</div>
                          <div className="text-sm text-gray-600">Solo Bookings</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-4 border border-emerald-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">💰</span>
                            </div>
                            <span className="text-emerald-600 text-sm font-semibold">+28%</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">$425</div>
                          <div className="text-sm text-gray-600">Solo Premium ADR</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">📅</span>
                            </div>
                            <span className="text-amber-600 text-sm font-semibold">4.2 days</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">3.8</div>
                          <div className="text-sm text-gray-600">Avg. Solo Stay</div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 border border-pink-200/50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="w-10 h-10 bg-pink-500 rounded-xl flex items-center justify-center">
                              <span className="text-white text-lg">⭐</span>
                            </div>
                            <span className="text-pink-600 text-sm font-semibold">4.7/5</span>
                          </div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">89%</div>
                          <div className="text-sm text-gray-600">Solo Satisfaction</div>
                        </div>
                      </div>

                      {/* Solo Rate Trends Chart */}
                      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                        <div className="flex items-center justify-between p-4 border-b border-gray-100">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900">14-Day Solo Rate Trends</h4>
                            <p className="text-sm text-gray-600">Current vs recommended solo traveler pricing</p>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center space-x-2 text-sm">
                              <div className="w-3 h-3 bg-violet-500 rounded-full"></div>
                              <span className="text-gray-600">Current Solo Rate</span>
                            </div>
                            <div className="flex items-center space-x-2 text-sm">
                              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                              <span className="text-gray-600">Premium Solo Rate</span>
                            </div>
                            <button className="px-3 py-1 text-xs bg-violet-100 text-violet-600 rounded-full hover:bg-violet-200 transition-colors">
                              Solo Insights
                            </button>
                          </div>
                        </div>
                        
                        <div className="p-4">
                          <div className="grid grid-cols-14 gap-1">
                            {Array.from({length: 14}, (_, i) => {
                              const date = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
                              const currentSoloRate = Math.floor(Math.random() * 80 + 340);
                              const premiumSoloRate = Math.floor(currentSoloRate * 1.28);
                              const isWeekend = date.getDay() === 0 || date.getDay() === 6;
                              const soloBookings = Math.floor(Math.random() * 20 + 35);
                              const soloSatisfaction = (Math.random() * 0.5 + 4.5).toFixed(1);
                              
                              return (
                                <div 
                                  key={i} 
                                  className="group relative cursor-pointer"
                                  title={`Solo Traveler Data\n${date.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'})}`}
                                >
                                  {/* Tooltip */}
                                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                    <div className="bg-gray-900 text-white text-xs rounded-lg p-3 shadow-lg min-w-max">
                                      <div className="font-semibold">{date.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'})}</div>
                                      <div className="mt-1 space-y-1">
                                        <div className="flex justify-between space-x-4">
                                          <span>Current Solo:</span>
                                          <span className="font-medium">${currentSoloRate}</span>
                                        </div>
                                        <div className="flex justify-between space-x-4">
                                          <span>Premium Solo:</span>
                                          <span className="font-medium text-emerald-300">${premiumSoloRate}</span>
                                        </div>
                                        <div className="flex justify-between space-x-4">
                                          <span>Solo Bookings:</span>
                                          <span className="font-medium">{soloBookings}%</span>
                                        </div>
                                        <div className="flex justify-between space-x-4">
                                          <span>Satisfaction:</span>
                                          <span className="font-medium text-amber-300">{soloSatisfaction}/5</span>
                                        </div>
                                        <div className="flex justify-between space-x-4">
                                          <span>Uplift:</span>
                                          <span className="font-medium text-emerald-300">+28%</span>
                                        </div>
                                      </div>
                                      <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                                        <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                                      </div>
                                    </div>
                                  </div>
                                  
                                  {/* Date Label */}
                                  <div className={`text-xs text-center mb-2 font-medium ${isWeekend ? 'text-pink-600' : 'text-gray-600'}`}>
                                    {date.toLocaleDateString('en-US', {day: 'numeric'})}
                                  </div>
                                  
                                  {/* Rate Bars Container */}
                                  <div className="relative h-20 bg-gray-50 rounded-lg overflow-hidden group-hover:bg-gray-100 transition-colors">
                                    {/* Current Solo Rate Bar */}
                                    <div 
                                      className="absolute bottom-0 left-0 w-1/2 bg-violet-500 group-hover:bg-violet-600 transition-colors rounded-tl-lg"
                                      style={{height: `${(currentSoloRate - 280) / 200 * 100}%`}}
                                    ></div>
                                    
                                    {/* Premium Solo Rate Bar */}
                                    <div 
                                      className="absolute bottom-0 right-0 w-1/2 bg-emerald-500 group-hover:bg-emerald-600 transition-colors rounded-tr-lg"
                                      style={{height: `${(premiumSoloRate - 280) / 200 * 100}%`}}
                                    ></div>
                                    
                                    {/* Weekend Indicator */}
                                    {isWeekend && (
                                      <div className="absolute top-1 right-1 w-2 h-2 bg-pink-400 rounded-full"></div>
                                    )}
                                    
                                    {/* High Solo Booking Indicator */}
                                    {soloBookings > 45 && (
                                      <div className="absolute top-1 left-1 w-2 h-2 bg-amber-400 rounded-full"></div>
                                    )}
                                  </div>
                                  
                                  {/* Rate Values */}
                                  <div className="mt-2 text-center">
                                    <div className="text-xs font-bold text-gray-900">${currentSoloRate}</div>
                                    <div className="text-xs font-bold text-emerald-600">${premiumSoloRate}</div>
                                  </div>
                                  
                                  {/* Day Label */}
                                  <div className="text-xs text-center text-gray-500 mt-1">
                                    {date.toLocaleDateString('en-US', {weekday: 'short'})}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                          
                          {/* Chart Controls */}
                          <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100">
                            <div className="flex items-center space-x-4">
                              <button className="flex items-center space-x-2 px-3 py-2 bg-violet-50 text-violet-700 rounded-lg hover:bg-violet-100 transition-colors text-sm font-medium">
                                <span>✓</span>
                                <span>Apply Solo Premium Rates</span>
                              </button>
                              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                                <span>👤</span>
                                <span>Solo Analytics</span>
                              </button>
                            </div>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                                <span>Weekend</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                                <span>High Solo Demand</span>
                              </div>
                              <div>Solo Revenue Impact: <span className="font-semibold text-emerald-600">+$18,920</span></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Solo Traveler Insights */}
                      <div className="mt-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Solo Traveler Channel Performance</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                          {[
                            { name: 'Solo on Booking.com', rate: '$425', bookings: '52%', status: 'excellent', color: 'emerald' },
                            { name: 'Direct Solo Bookings', rate: '$445', bookings: '34%', status: 'good', color: 'blue' },
                            { name: 'Solo on Expedia', rate: '$415', bookings: '28%', status: 'good', color: 'violet' },
                            { name: 'Solo on Agoda', rate: '$408', bookings: '19%', status: 'warning', color: 'amber' }
                          ].map((channel, idx) => (
                            <div key={idx} className={`bg-white rounded-xl p-4 border-2 border-${channel.color}-200/50 shadow-sm hover:shadow-md transition-all`}>
                              <div className="flex items-center justify-between mb-3">
                                <div className="font-semibold text-gray-900 text-sm">{channel.name}</div>
                                <div className={`w-3 h-3 rounded-full bg-${channel.color}-400`}></div>
                              </div>
                              <div className="text-xl font-bold text-gray-900 mb-1">{channel.rate}</div>
                              <div className={`text-sm font-medium text-${channel.color}-600`}>
                                {channel.bookings} solo bookings
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {soloRatesTab === 'ari' && (
                <div className="space-y-6">
                  {/* Solo ARI Update Interface */}
                  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm">
                    <div className="p-6 border-b border-gray-100">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">Update Solo Premium Rates</h3>
                          <p className="text-gray-600 mt-1">Implement solo traveler pricing strategy with personalized amenities</p>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Recommended Solo Uplift:</span> +28%
                          </div>
                          <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors font-medium">
                            Apply All Solo Rates
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      {/* Solo Room Types */}
                      <div className="space-y-6">
                        {[
                          {
                            type: 'Solo Executive Suite',
                            current: 380,
                            recommended: 487,
                            inventory: 8,
                            description: 'Premium suite with solo-friendly amenities: personal concierge, workspace, and wellness package',
                            features: ['Personal Concierge', 'Business Workspace', 'Wellness Kit', 'Solo Dining Priority']
                          },
                          {
                            type: 'Solo Comfort Room',
                            current: 285,
                            recommended: 365,
                            inventory: 16,
                            description: 'Comfortable room optimized for solo travelers with safety and convenience features',
                            features: ['Safe Solo Access', 'Express Check-in', 'Solo Dining Voucher', 'City Guide']
                          },
                          {
                            type: 'Solo Standard Plus',
                            current: 220,
                            recommended: 282,
                            inventory: 12,
                            description: 'Enhanced standard room with solo traveler perks and local experience package',
                            features: ['Local Experience Kit', 'Solo Traveler Amenities', 'Safety Features', 'Community Access']
                          }
                        ].map((room, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-violet-50/50 to-purple-50/30 rounded-2xl p-6 border border-violet-200/50">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-bold text-gray-900 mb-1">{room.type}</h4>
                                <p className="text-sm text-gray-600 mb-3">{room.description}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {room.features.map((feature, fidx) => (
                                    <span key={fidx} className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-xs font-medium">
                                      {feature}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center space-x-4 text-sm text-gray-500">
                                  <span>Available: {room.inventory} rooms</span>
                                  <span>•</span>
                                  <span>Solo optimized</span>
                                  <span>•</span>
                                  <span>Next 14 days</span>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-2xl font-bold text-violet-600">+{Math.round(((room.recommended - room.current) / room.current) * 100)}%</div>
                                <div className="text-xs text-gray-500">Solo Uplift</div>
                              </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {/* Current Rate */}
                              <div className="bg-white rounded-xl p-4 border border-gray-200">
                                <div className="text-sm font-semibold text-gray-600 mb-2">Current Solo Rate</div>
                                <div className="text-2xl font-bold text-gray-900">${room.current}</div>
                                <div className="text-xs text-gray-500 mt-1">Per night</div>
                              </div>

                              {/* Recommended Rate */}
                              <div className="bg-violet-50 rounded-xl p-4 border border-violet-200">
                                <div className="text-sm font-semibold text-violet-700 mb-2">Premium Solo Rate</div>
                                <div className="text-2xl font-bold text-violet-600">${room.recommended}</div>
                                <div className="text-xs text-violet-600 mt-1">Solo traveler premium</div>
                              </div>

                              {/* Revenue Impact */}
                              <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-200">
                                <div className="text-sm font-semibold text-emerald-700 mb-2">Solo Revenue Impact</div>
                                <div className="text-2xl font-bold text-emerald-600">+${((room.recommended - room.current) * room.inventory * 14).toLocaleString()}</div>
                                <div className="text-xs text-emerald-600 mt-1">14-day projection</div>
                              </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 flex items-center justify-between">
                              <div className="flex items-center space-x-4">
                                <label className="flex items-center space-x-2">
                                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-violet-600 focus:ring-violet-500" />
                                  <span className="text-sm font-medium text-gray-700">Apply solo premium rate</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500" />
                                  <span className="text-sm font-medium text-gray-700">Update all channels</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-amber-600 focus:ring-amber-500" />
                                  <span className="text-sm font-medium text-gray-700">Enable solo amenities</span>
                                </label>
                              </div>
                              <div className="flex items-center space-x-3">
                                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                                  Custom Solo Rate
                                </button>
                                <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors">
                                  Update Solo Rate
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Solo Revenue Summary */}
                      <div className="mt-8 bg-gradient-to-r from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-200">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-violet-900 mb-1">Total Solo Revenue Impact</h4>
                            <p className="text-violet-700">Projected additional revenue from solo traveler premium pricing</p>
                          </div>
                          <div className="text-right">
                            <div className="text-3xl font-bold text-violet-600">+$63,280</div>
                            <div className="text-sm text-violet-600">Next 14 days</div>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">43%</div>
                            <div className="text-sm text-gray-600">Solo Booking Share</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">4.7/5</div>
                            <div className="text-sm text-gray-600">Solo Satisfaction</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-gray-900">+28%</div>
                            <div className="text-sm text-gray-600">Average Solo Uplift</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default ExecutiveOverview