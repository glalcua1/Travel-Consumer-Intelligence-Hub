import { 
  Plane, 
  DollarSign, 
  Users, 
  MapPin,
  TrendingUp,
  Clock,
  Globe,
  Award
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
  PieChart,
  Pie,
  Cell
} from 'recharts'
import KPICard from './KPICard'

const AirlinesAnalytics = () => {
  // Airline partnership revenue data
  const airlineRevenueData = [
    { month: 'Jan', emirates: 285000, qatar: 220000, etihad: 180000, other: 120000 },
    { month: 'Feb', emirates: 312000, qatar: 245000, etihad: 195000, other: 135000 },
    { month: 'Mar', emirates: 295000, qatar: 238000, etihad: 188000, other: 128000 },
    { month: 'Apr', emirates: 342000, qatar: 268000, etihad: 215000, other: 148000 },
    { month: 'May', emirates: 358000, qatar: 285000, etihad: 228000, other: 162000 },
    { month: 'Jun', emirates: 385000, qatar: 305000, etihad: 248000, other: 175000 },
  ]

  // Flight route analysis
  const routeAnalysis = [
    { route: 'London-Dubai', passengers: 45200, hotelBookings: 18500, conversionRate: 41, avgSpend: 2850 },
    { route: 'Mumbai-Dubai', passengers: 38500, hotelBookings: 14200, conversionRate: 37, avgSpend: 1950 },
    { route: 'New York-Dubai', passengers: 28400, hotelBookings: 12800, conversionRate: 45, avgSpend: 3200 },
    { route: 'Frankfurt-Dubai', passengers: 31200, hotelBookings: 11900, conversionRate: 38, avgSpend: 2650 },
    { route: 'Paris-Dubai', passengers: 26800, hotelBookings: 10200, conversionRate: 38, avgSpend: 2750 },
  ]

  // Airline market share
  const airlineMarketShare = [
    { name: 'Emirates', value: 42, color: '#EF4444', passengers: 156000 },
    { name: 'Qatar Airways', value: 28, color: '#8B5CF6', passengers: 104000 },
    { name: 'Etihad', value: 18, color: '#10B981', passengers: 67000 },
    { name: 'Other Airlines', value: 12, color: '#F59E0B', passengers: 45000 },
  ]

  // Peak travel times
  const peakTravelData = [
    { time: '6-9 AM', arrivals: 25, departures: 8 },
    { time: '9-12 PM', arrivals: 35, departures: 15 },
    { time: '12-3 PM', arrivals: 45, departures: 28 },
    { time: '3-6 PM', arrivals: 55, departures: 42 },
    { time: '6-9 PM', arrivals: 38, departures: 58 },
    { time: '9-12 AM', arrivals: 22, departures: 35 },
  ]

  const kpiData = [
    {
      title: 'Airline Partnership Revenue',
      value: 1113000,
      change: '+18.7%',
      changeType: 'positive',
      icon: DollarSign,
      format: 'currency'
    },
    {
      title: 'Flight-to-Hotel Conversion',
      value: 39.5,
      change: '+3.2%',
      changeType: 'positive',
      icon: Users,
      format: 'percentage'
    },
    {
      title: 'Average Guest Spend (Air)',
      value: 2685,
      change: '+12.1%',
      changeType: 'positive',
      icon: TrendingUp,
      format: 'currency'
    },
    {
      title: 'Partner Airlines',
      value: 24,
      change: '+3',
      changeType: 'positive',
      icon: Plane,
      format: 'number'
    }
  ]

  // Seasonal flight patterns
  const seasonalFlights = [
    { month: 'Jul', business: 35, leisure: 65, events: 12 },
    { month: 'Aug', business: 32, leisure: 58, events: 15 },
    { month: 'Sep', business: 45, leisure: 40, events: 18 },
    { month: 'Oct', business: 48, leisure: 38, events: 22 },
    { month: 'Nov', business: 52, leisure: 35, events: 25 },
    { month: 'Dec', business: 38, leisure: 55, events: 20 },
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Airlines Analytics</h1>
            <p className="text-gray-600 mt-1">Flight Partnership & Revenue Intelligence</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">DXB Traffic Share</p>
              <p className="font-semibold text-blue-600">12.4% Hotel Bookings</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Plane className="w-6 h-6 text-blue-600" />
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

      {/* Airline Partnership Revenue */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by Airline Partner */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Revenue by Airline Partner</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={airlineRevenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`$${(value/1000).toFixed(0)}K`, '']} />
              <Bar dataKey="emirates" fill="#EF4444" name="Emirates" />
              <Bar dataKey="qatar" fill="#8B5CF6" name="Qatar Airways" />
              <Bar dataKey="etihad" fill="#10B981" name="Etihad" />
              <Bar dataKey="other" fill="#F59E0B" name="Other Airlines" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Market Share */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Airline Market Share (Guest Arrivals)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={airlineMarketShare}
                cx="50%"
                cy="50%"
                outerRadius={100}
                dataKey="value"
                label={({name, value}) => `${name}: ${value}%`}
              >
                {airlineMarketShare.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {airlineMarketShare.map((airline, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: airline.color }}
                  ></div>
                  <span>{airline.name}</span>
                </div>
                <span className="font-semibold">{airline.passengers.toLocaleString()} passengers</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Route Performance Analysis */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Top Flight Routes Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Route</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Total Passengers</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Hotel Bookings</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Conversion Rate</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-900">Avg Spend</th>
                <th className="text-center py-3 px-4 font-semibold text-gray-900">Revenue Potential</th>
              </tr>
            </thead>
            <tbody>
              {routeAnalysis.map((route, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">{route.route}</span>
                    </div>
                  </td>
                  <td className="text-right py-3 px-4">{route.passengers.toLocaleString()}</td>
                  <td className="text-right py-3 px-4 font-semibold text-blue-600">
                    {route.hotelBookings.toLocaleString()}
                  </td>
                  <td className="text-right py-3 px-4">{route.conversionRate}%</td>
                  <td className="text-right py-3 px-4">${route.avgSpend.toLocaleString()}</td>
                  <td className="text-center py-3 px-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      route.conversionRate > 40 ? 'bg-green-100 text-green-800' :
                      route.conversionRate > 35 ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {route.conversionRate > 40 ? 'High' : route.conversionRate > 35 ? 'Medium' : 'Low'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Travel Patterns Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Peak Travel Times */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Peak Travel Times (DXB)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <ComposedChart data={peakTravelData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="arrivals" fill="#3B82F6" name="Arrivals" />
              <Line 
                type="monotone" 
                dataKey="departures" 
                stroke="#EF4444" 
                strokeWidth={3}
                name="Departures"
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Peak Arrival Time:</strong> 3-6 PM - Optimize shuttle services and check-in capacity
            </p>
          </div>
        </div>

        {/* Seasonal Flight Patterns */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Seasonal Flight Passenger Types</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={seasonalFlights}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="business" 
                stroke="#10B981" 
                strokeWidth={3}
                name="Business Travelers"
              />
              <Line 
                type="monotone" 
                dataKey="leisure" 
                stroke="#3B82F6" 
                strokeWidth={3}
                name="Leisure Travelers"
              />
              <Line 
                type="monotone" 
                dataKey="events" 
                stroke="#F59E0B" 
                strokeWidth={3}
                name="Event Attendees"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Partnership Opportunities */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Partnerships */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Active Partnerships</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Emirates</h4>
                  <p className="text-sm text-gray-600">Skywards Program</p>
                </div>
              </div>
              <Award className="w-5 h-5 text-yellow-500" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Qatar Airways</h4>
                  <p className="text-sm text-gray-600">Privilege Club</p>
                </div>
              </div>
              <Award className="w-5 h-5 text-yellow-500" />
            </div>

            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Plane className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Etihad</h4>
                  <p className="text-sm text-gray-600">Guest Program</p>
                </div>
              </div>
              <Award className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Revenue Metrics */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Partnership Metrics</h3>
          <div className="space-y-4">
            <div className="border-b border-gray-100 pb-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Commission Rate</span>
                <span className="font-semibold">12-15%</span>
              </div>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Monthly Referrals</span>
                <span className="font-semibold">2,340</span>
              </div>
            </div>
            <div className="border-b border-gray-100 pb-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Conversion Rate</span>
                <span className="font-semibold text-green-600">39.5%</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Avg Revenue/Guest</span>
                <span className="font-semibold">$2,685</span>
              </div>
            </div>
          </div>
        </div>

        {/* Optimization Opportunities */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Growth Opportunities</h3>
          <div className="space-y-3">
            <div className="p-3 bg-yellow-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900">London Route</h4>
              <p className="text-xs text-gray-600 mt-1">
                Highest conversion at 41%. Negotiate better rates with Emirates.
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900">New York Route</h4>
              <p className="text-xs text-gray-600 mt-1">
                Premium market with $3,200 avg spend. Increase capacity.
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900">Mumbai Route</h4>
              <p className="text-xs text-gray-600 mt-1">
                Large volume, low conversion. Improve targeting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Recommendations */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h3 className="text-xl font-bold mb-4">Airline Partnership Strategy</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/10 rounded-lg p-4">
            <Plane className="w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-2">Emirates Focus</h4>
            <p className="text-sm opacity-90">
              Strengthen partnership - 42% market share, highest revenue contributor
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <MapPin className="w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-2">Route Optimization</h4>
            <p className="text-sm opacity-90">
              Focus on London & New York routes for premium guest acquisition
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <Clock className="w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-2">Peak Time Services</h4>
            <p className="text-sm opacity-90">
              Enhance 3-6 PM arrival services for better guest experience
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-4">
            <DollarSign className="w-8 h-8 mb-2" />
            <h4 className="font-semibold mb-2">Revenue Growth</h4>
            <p className="text-sm opacity-90">
              Target 45% conversion rate to increase revenue by $890K annually
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AirlinesAnalytics 