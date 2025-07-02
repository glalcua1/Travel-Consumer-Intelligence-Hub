import { createContext, useContext, useState, useEffect } from 'react'

const BusinessContext = createContext()

export const useBusinessContext = () => {
  const context = useContext(BusinessContext)
  if (!context) {
    throw new Error('useBusinessContext must be used within a BusinessProvider')
  }
  return context
}

export const BusinessProvider = ({ children }) => {
  // Core Business Information
  const [businessProfile, setBusinessProfile] = useState({
    name: '',
    type: 'hotel', // hotel, restaurant, airline, car-rental
    category: '', // luxury, premium, mid-range, budget
    location: 'Dubai, UAE',
    size: '', // rooms, seats, fleet size
    marketSegment: 'premium',
    established: '2018',
    staff: 285
  })

  // Market Context
  const marketContext = {
    currentPeriod: 'Q3 2024',
    previousPeriod: 'Q2 2024',
    marketRegion: 'Dubai & UAE',
    marketScope: 'GCC Premium Travel Market',
    dataLastUpdated: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    competitorCount: 247,
    marketSize: 15600000000 // $15.6B market
  }

  // Executive Level Metrics
  const executiveMetrics = {
    totalRevenue: 12850000,
    revenueGrowth: 18.4,
    overallMargin: 32.8,
    marginImprovement: 4.2,
    overallSatisfaction: 89.2,
    satisfactionGrowth: 6.8,
    marketShare: 3.7,
    marketShareGrowth: 12.5,
    efficiencyScore: 87.3,
    efficiencyImprovement: 9.1,
    revenuePerCustomer: 485,
    rpcGrowth: 14.7
  }

  // Consumer Trends Intelligence
  const consumerTrends = {
    averageTrendGrowth: 128.5,
    trendGrowthChange: 23.2,
    alignmentScore: 84.6,
    alignmentChange: 15.8,
    totalRevenueImpact: 3200000,
    revenueImpactGrowth: 42.3,
    engagementScore: 91.4,
    engagementChange: 18.7,
    topTrends: [
      'Sustainable Travel',
      'Solo Female Travel', 
      'Bleisure Travel',
      'Digital Detox',
      'Wellness Tourism'
    ]
  }

  // Product Intelligence
  const productIntelligence = {
    totalProductRevenue: 8950000,
    revenueGrowth: 16.8,
    overallPerformanceScore: 87.3,
    performanceGrowth: 12.4,
    averageSatisfaction: 89.7,
    satisfactionChange: 8.2,
    competitiveScore: 84.1,
    competitiveGrowth: 15.6,
    averageMargin: 38.9,
    marginImprovement: 6.4,
    productCategories: 4,
    totalProducts: 25
  }

  // Channel Intelligence
  const channelIntelligence = {
    totalChannelRevenue: 12850000,
    revenueGrowth: 18.4,
    directBookingPercentage: 52.3,
    directBookingGrowth: 24.7,
    averageChannelMargin: 28.4,
    profitabilityGrowth: 11.2,
    averageCAC: 68,
    cacReduction: 18.5,
    diversificationIndex: 76.8,
    diversificationGrowth: 9.3,
    attributionAccuracy: 94.2,
    activeChannels: 12
  }

  // Action Planning & Recommendations
  const recommendations = {
    immediate: [
      {
        category: 'Revenue Optimization',
        action: 'Implement dynamic pricing based on demand patterns',
        impact: 'High',
        timeframe: '30 days',
        expectedROI: '15-20%'
      },
      {
        category: 'Channel Strategy',
        action: 'Increase direct booking incentives',
        impact: 'High',
        timeframe: '45 days',
        expectedROI: '12-18%'
      }
    ],
    shortTerm: [
      {
        category: 'Product Development',
        action: 'Launch wellness package offerings',
        impact: 'Medium',
        timeframe: '60-90 days',
        expectedROI: '8-12%'
      }
    ],
    longTerm: [
      {
        category: 'Market Positioning',
        action: 'Establish sustainability leadership',
        impact: 'High',
        timeframe: '6-12 months',
        expectedROI: '20-25%'
      }
    ]
  }

  // Utility Functions
  const formatCurrency = (amount, currency = 'USD', compact = false) => {
    if (typeof amount !== 'number') return '$0'
    
    if (compact && amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (compact && amount >= 1000) {
      return `$${(amount / 1000).toFixed(1)}K`
    }
    
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: amount >= 1000 ? 0 : 2
    }).format(amount)
  }

  const formatPercentage = (value, decimals = 1) => {
    if (typeof value !== 'number') return '0%'
    return `${value.toFixed(decimals)}%`
  }

  const formatNumber = (value, compact = false) => {
    if (typeof value !== 'number') return '0'
    
    if (compact && value >= 1000000) {
      return `${(value / 1000000).toFixed(1)}M`
    } else if (compact && value >= 1000) {
      return `${(value / 1000).toFixed(1)}K`
    }
    
    return new Intl.NumberFormat('en-US').format(value)
  }

  const getPerformanceVsBenchmark = (metric, value) => {
    // Industry benchmarks for various metrics
    const benchmarks = {
      revPAR: 385,
      occupancy: 78.5,
      satisfaction: 85.2,
      directBooking: 45.8,
      margin: 28.3
    }
    
    const benchmark = benchmarks[metric]
    if (!benchmark) return null
    
    const difference = ((value - benchmark) / benchmark) * 100
    return {
      benchmark,
      difference: difference.toFixed(1),
      performance: difference > 0 ? 'above' : 'below'
    }
  }

  const calculateTrendImpact = (trendGrowth, premiumWillingness, marketSize) => {
    const potentialCustomers = marketSize * (trendGrowth / 100) * 0.1 // 10% capture rate
    const premiumRevenue = potentialCustomers * (premiumWillingness / 100) * 150 // $150 premium
    return {
      potentialCustomers,
      premiumRevenue,
      totalImpact: potentialCustomers * 485 + premiumRevenue // base + premium
    }
  }

  const getRecommendationsByCategory = (category) => {
    const allRecommendations = [
      ...recommendations.immediate,
      ...recommendations.shortTerm,
      ...recommendations.longTerm
    ]
    
    return allRecommendations.filter(rec => 
      rec.category.toLowerCase().includes(category.toLowerCase())
    )
  }

  const contextValue = {
    // Core Data
    businessProfile,
    setBusinessProfile,
    marketContext,
    executiveMetrics,
    consumerTrends,
    productIntelligence,
    channelIntelligence,
    recommendations,
    
    // Utility Functions
    formatCurrency,
    formatPercentage,
    formatNumber,
    getPerformanceVsBenchmark,
    calculateTrendImpact,
    getRecommendationsByCategory,
    
    // Helper Methods
    updateBusinessProfile: (updates) => {
      setBusinessProfile(prev => ({ ...prev, ...updates }))
    },
    
    getTotalRevenueImpact: () => {
      return consumerTrends.totalRevenueImpact + 
             productIntelligence.totalProductRevenue + 
             channelIntelligence.totalChannelRevenue
    },
    
    getOverallPerformanceScore: () => {
      const scores = [
        consumerTrends.alignmentScore,
        productIntelligence.overallPerformanceScore,
        channelIntelligence.attributionAccuracy
      ]
      return scores.reduce((sum, score) => sum + score, 0) / scores.length
    },
    
    generateInsights: () => ({
      topOpportunity: recommendations.immediate[0],
      biggestGrowthArea: 'Consumer Trends',
      keyRisk: 'OTA dependency at 35% of revenue',
      nextMilestone: '$15M annual revenue target'
    })
  }

  return (
    <BusinessContext.Provider value={contextValue}>
      {children}
    </BusinessContext.Provider>
  )
}

export default BusinessContext 