import { useState } from 'react'
import { 
  Building2,
  Utensils,
  Target,
  TrendingUp,
  Clock,
  DollarSign,
  Users,
  Leaf,
  Heart,
  Zap,
  Star,
  CheckCircle,
  AlertCircle,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Lightbulb,
  BarChart3
} from 'lucide-react'
import DubaiHeroCard from './DubaiHeroCard'

const ActionPlanner = () => {
  const [businessInfo, setBusinessInfo] = useState({
    name: '',
    type: 'hotel',
    category: '',
    location: '',
    currentSize: '',
    email: '',
    phone: ''
  })
  
  const [showRecommendations, setShowRecommendations] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (businessInfo.name && businessInfo.type && businessInfo.category) {
      setShowRecommendations(true)
    }
  }

  const generateRecommendations = () => {
    const isHotel = businessInfo.type === 'hotel'
    const isLuxury = businessInfo.category === 'luxury' || businessInfo.category === 'fine-dining'
    
    return [
      {
        id: 1,
        trend: 'Sustainable Travel (+156%)',
        priority: 'High',
        timeline: '30-45 days',
        investment: isLuxury ? '$50K-$100K' : '$15K-$30K',
        roi: '180-250%',
        action: isHotel 
          ? `Launch eco-certification program for ${businessInfo.name}` 
          : `Implement sustainable dining practices at ${businessInfo.name}`,
        description: isHotel
          ? 'Obtain Green Key or EarthCheck certification, implement energy-efficient systems'
          : 'Source local organic ingredients, eliminate single-use plastics',
        steps: isHotel ? [
          'Apply for Green Key certification',
          'Install LED lighting and smart thermostats',
          'Partner with local eco-tour operators',
          'Launch "Green Stay" packages',
          'Train staff on sustainability'
        ] : [
          'Partner with local organic farms',
          'Replace single-use items',
          'Create seasonal local menu',
          'Launch "Sustainable Dining" experience',
          'Install water filtration systems'
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
        action: isHotel 
          ? `Create women-only spaces at ${businessInfo.name}`
          : `Design female-friendly dining at ${businessInfo.name}`,
        description: isHotel
          ? 'Develop female-only floors, enhanced security, women-centric amenities'
          : 'Create safe, welcoming environment with solo dining options',
        steps: isHotel ? [
          'Designate female-only floor',
          'Install enhanced security',
          'Train female concierge specialists',
          'Partner with female travel groups',
          'Create solo traveler packages'
        ] : [
          'Design comfortable solo dining spaces',
          'Train staff on female preferences',
          'Create events for female diners',
          'Offer express service options',
          'Partner with women organizations'
        ],
        kpis: ['Female guest bookings', 'Safety ratings', 'Repeat bookings', 'Social mentions'],
        icon: Heart,
        color: 'rose'
      }
    ]
  }

  return (
    <div className="space-y-8 p-2">
      {/* Dubai Hero Card */}
      <DubaiHeroCard 
        activeSection="action-planner" 
        onExploreClick={() => {
          if (!showRecommendations) {
            // Focus on the business name input if form is visible
            const nameInput = document.querySelector('input[type="text"]')
            if (nameInput) {
              nameInput.focus()
              nameInput.scrollIntoView({ behavior: 'smooth', block: 'center' })
            }
          } else {
            // If recommendations are shown, scroll to them
            const recommendationsSection = document.querySelector('[data-section="recommendations"]')
            if (recommendationsSection) {
              recommendationsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
          }
        }}
      />

      {!showRecommendations && (
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100" data-section="business-form">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Building2 className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Business Information</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Name *
                </label>
                <input
                  type="text"
                  value={businessInfo.name}
                  onChange={(e) => setBusinessInfo({...businessInfo, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your business name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Type *
                </label>
                <select
                  value={businessInfo.type}
                  onChange={(e) => setBusinessInfo({...businessInfo, type: e.target.value, category: ''})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="hotel">Hotel</option>
                  <option value="restaurant">Restaurant</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  value={businessInfo.category}
                  onChange={(e) => setBusinessInfo({...businessInfo, category: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select category</option>
                  {businessInfo.type === 'hotel' ? (
                    <>
                      <option value="luxury">Luxury (5-star)</option>
                      <option value="premium">Premium (4-star)</option>
                      <option value="mid-range">Mid-range (3-star)</option>
                      <option value="budget">Budget (1-2 star)</option>
                    </>
                  ) : (
                    <>
                      <option value="fine-dining">Fine Dining</option>
                      <option value="casual-dining">Casual Dining</option>
                      <option value="fast-casual">Fast Casual</option>
                      <option value="cafe">Cafe/Bistro</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., Downtown Dubai, Marina"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Target className="w-5 h-5" />
              <span>Generate Personalized Action Plan</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}

      {showRecommendations && (
        <div className="space-y-8" data-section="recommendations">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Action Plan for {businessInfo.name}</h2>
                <p className="text-blue-100">
                  {businessInfo.type === 'hotel' ? 'Hotel' : 'Restaurant'} • {businessInfo.category}
                </p>
              </div>
              <button
                onClick={() => setShowRecommendations(false)}
                className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium"
              >
                Edit Info
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {generateRecommendations().map((rec) => {
              const Icon = rec.icon
              return (
                <div key={rec.id} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{rec.action}</h3>
                        <p className="text-gray-600 mt-1">{rec.description}</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-800">
                      {rec.priority} Priority
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Clock className="w-5 h-5 text-gray-600 mb-2" />
                      <p className="text-sm text-gray-600">Timeline</p>
                      <p className="font-semibold">{rec.timeline}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <DollarSign className="w-5 h-5 text-gray-600 mb-2" />
                      <p className="text-sm text-gray-600">Investment</p>
                      <p className="font-semibold">{rec.investment}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <TrendingUp className="w-5 h-5 text-gray-600 mb-2" />
                      <p className="text-sm text-gray-600">Expected ROI</p>
                      <p className="font-semibold">{rec.roi}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <Users className="w-5 h-5 text-gray-600 mb-2" />
                      <p className="text-sm text-gray-600">Market Trend</p>
                      <p className="font-semibold">{rec.trend}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                        Implementation Steps
                      </h4>
                      <ol className="space-y-2">
                        {rec.steps.map((step, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
                              {i + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <BarChart3 className="w-5 h-5 text-purple-600 mr-2" />
                        Success Metrics
                      </h4>
                      <div className="space-y-2">
                        {rec.kpis.map((kpi, i) => (
                          <div key={i} className="flex items-center space-x-3">
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
  )
}

export default ActionPlanner 