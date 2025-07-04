import { 
  Building2, 
  DollarSign, 
  Users, 
  Star,
  TrendingUp,
  Calendar,
  MapPin,
  Crown
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
  AreaChart
} from 'recharts'
import KPICard from './KPICard'

const HotelsAnalytics = () => {
  // Revenue per room data
  const revParData = [
    { month: 'Jan', revPAR: 285, occupancy: 78, adr: 365 },
    { month: 'Feb', revPAR: 312, occupancy: 82, adr: 380 },
    { month: 'Mar', revPAR: 295, occupancy: 75, adr: 393 },
    { month: 'Apr', revPAR: 342, occupancy: 85, adr: 402 },
    { month: 'May', revPAR: 358, occupancy: 88, adr: 407 },
    { month: 'Jun', revPAR: 385, occupancy: 92, adr: 418 },
  ]

  // Competitor analysis
  const competitorData = [
    { hotel: 'Your Hotel', adr: 418, occupancy: 92, revPAR: 385, rating: 4.8 },
    { hotel: 'Burj Al Arab', adr: 850, occupancy: 88, revPAR: 748, rating: 4.9 },
    { hotel: 'Atlantis Palm', adr: 520, occupancy: 90, revPAR: 468, rating: 4.7 },
    { hotel: 'Four Seasons', adr: 480, occupancy: 85, revPAR: 408, rating: 4.8 },
    { hotel: 'St. Regis', adr: 460, occupancy: 82, revPAR: 377, rating: 4.6 },
  ]

  // Pricing optimization data
  const pricingData = [
    { date: 'Mon', currentPrice: 380, optimizedPrice: 420, demand: 85 },
    { date: 'Tue', currentPrice: 360, optimizedPrice: 390, demand: 75 },
    { date: 'Wed', currentPrice: 340, optimizedPrice: 365, demand: 72 },
    { date: 'Thu', currentPrice: 380, optimizedPrice: 435, demand: 88 },
    { date: 'Fri', currentPrice: 450, optimizedPrice: 510, demand: 95 },
    { date: 'Sat', currentPrice: 520, optimizedPrice: 580, demand: 98 },
    { date: 'Sun', currentPrice: 480, optimizedPrice: 525, demand: 92 },
  ]

  const kpiData = [
    {
      title: 'Revenue per Available Room',
      value: 385,
      change: '+12.4%',
      changeType: 'positive',
      icon: DollarSign,
      format: 'currency'
    },
    {
      title: 'Occupancy Rate',
      value: 92,
      change: '+5.2%',
      changeType: 'positive',
      icon: Building2,
      format: 'percentage'
    },
    {
      title: 'Average Daily Rate',
      value: 418,
      change: '+8.7%',
      changeType: 'positive',
      icon: Star,
      format: 'currency'
    },
    {
      title: 'Guest Satisfaction',
      value: 4.8,
      change: '+0.2',
      changeType: 'positive',
      icon: Crown,
      format: 'number'
    }
  ]

  // Guest segments
  const guestSegments = [
    { segment: 'Business Travelers', percentage: 35, revenue: 890000, avgStay: 2.3 },
    { segment: 'Leisure Tourists', percentage: 28, revenue: 720000, avgStay: 4.2 },
    { segment: 'Conference Groups', percentage: 20, revenue: 650000, avgStay: 3.1 },
    { segment: 'Wedding Events', percentage: 12, revenue: 480000, avgStay: 2.8 },
    { segment: 'VIP/Celebrity', percentage: 5, revenue: 380000, avgStay: 5.2 },
  ]

  // Seasonal trends
  const seasonalTrends = [
    { month: 'Jul', leisure: 65, business: 25, events: 10 },
    { month: 'Aug', leisure: 58, business: 30, events: 12 },
    { month: 'Sep', leisure: 45, business: 40, events: 15 },
    { month: 'Oct', leisure: 40, business: 45, events: 15 },
    { month: 'Nov', leisure: 35, business: 50, events: 15 },
    { month: 'Dec', leisure: 50, business: 35, events: 15 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Hotels Analytics</h1>
            <p className="text-gray-600 mt-1">Five-Star Hotel Performance Dashboard</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Market Position</p>
              <p className="font-semibold text-blue-600">#3 in Dubai Luxury</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Building2 className="w-6 h-6 text-blue-600" />
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

      {/* Revenue Metrics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* RevPAR & Occupancy Trends */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">RevPAR & Performance Metrics</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={revParData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Bar yAxisId="left" dataKey="revPAR" fill="#3B82F6" name="RevPAR ($)" />
              <Line 
                yAxisId="right" 
                type="monotone" 
                dataKey="occupancy" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Occupancy (%)"
              />
              <Line 
                yAxisId="left" 
                type="monotone" 
                dataKey="adr" 
                stroke="#F59E0B" 
                strokeWidth={2}
                name="ADR ($)"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        {/* Pricing Optimization */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Dynamic Pricing Opportunities</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pricingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="currentPrice" fill="#94A3B8" name="Current Price" />
              <Bar dataKey="optimizedPrice" fill="#10B981" name="Optimized Price" />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-800">
              <strong>Potential Revenue Increase:</strong> $124,000/week with optimized pricing
            </p>
          </div>
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Competitive Landscape Analysis</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Hotel</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">ADR</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Occupancy</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">RevPAR</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Rating</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Position</th>
              </tr>
            </thead>
            <tbody>
              {competitorData.map((hotel, index) => (
                <tr 
                  key={index} 
                  className={`border-b border-gray-100 ${
                    hotel.hotel === 'Your Hotel' ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      {hotel.hotel === 'Your Hotel' && <Crown className="w-4 h-4 text-blue-600" />}
                      <span className={hotel.hotel === 'Your Hotel' ? 'font-semibold text-blue-900' : ''}>
                        {hotel.hotel}
                      </span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4">${hotel.adr}</td>
                  <td className="text-right py-3 px-4">{hotel.occupancy}%</td>
                  <td className="text-right py-3 px-4 font-semibold">${hotel.revPAR}</td>
                  <td className="text-right py-3 px-4">
                    <div className="flex items-center justify-end space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span>{hotel.rating}</span>
                    </div>
                  </td>
                  <td className="text-center py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      index === 0 ? 'bg-green-100 text-green-800' :
                      index === 1 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      #{index + 1}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Guest Segments & Seasonal Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Guest Segments */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Guest Segment Analysis</h3>
          <div className="space-y-4">
            {guestSegments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{segment.segment}</h4>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="text-sm text-gray-600">{segment.percentage}% of guests</span>
                    <span className="text-sm text-gray-600">{segment.avgStay} avg days</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">
                    ${(segment.revenue / 1000).toFixed(0)}K
                  </p>
                  <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                    <div 
                      className="h-2 bg-blue-600 rounded-full" 
                      style={{ width: `${segment.percentage * 2}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Booking Patterns */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Seasonal Booking Patterns</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={seasonalTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="leisure" 
                stackId="1" 
                stroke="#3B82F6" 
                fill="#3B82F6" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="business" 
                stackId="1" 
                stroke="#10B981" 
                fill="#10B981" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="events" 
                stackId="1" 
                stroke="#F59E0B" 
                fill="#F59E0B" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Revenue Optimization Recommendations */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Revenue Optimization Action Items</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <DollarSign className="w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-2">Dynamic Pricing</h4>
            <p className="text-sm opacity-90">
              Implement AI-driven pricing for 15-20% revenue increase
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <Users className="w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-2">Business Segment</h4>
            <p className="text-sm opacity-90">
              Focus on corporate packages - highest margin segment
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <Calendar className="w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-2">Seasonal Strategy</h4>
            <p className="text-sm opacity-90">
              Optimize Q4 pricing for peak leisure demand
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <Star className="w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-2">Service Excellence</h4>
            <p className="text-sm opacity-90">
              Target 4.9 rating to command premium pricing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HotelsAnalytics 