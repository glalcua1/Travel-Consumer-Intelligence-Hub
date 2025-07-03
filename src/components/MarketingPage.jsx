import { useState } from 'react'
import { 
  TrendingUp, 
  BarChart3,
  Users,
  Target,
  Zap,
  Globe,
  DollarSign,
  ArrowRight,
  CheckCircle,
  Star,
  Eye,
  Brain,
  Lightbulb,
  Clock,
  ChevronRight,
  Play,
  X,
  Mail,
  Lock,
  User,
  Building2
} from 'lucide-react'

const MarketingPage = ({ onSignup }) => {
  const [showSignupModal, setShowSignupModal] = useState(false)
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    company: '',
    businessType: 'hotel',
    password: ''
  })

  const handleSignupSubmit = (e) => {
    e.preventDefault()
    console.log('Signup form submitted:', signupForm)
    setShowSignupModal(false)
    if (onSignup) {
      onSignup(signupForm)
    }
  }

  const features = [
    {
      icon: TrendingUp,
      title: "Real-Time Market Intelligence",
      description: "Live consumer trends and market data updated every 15 minutes",
      color: "emerald"
    },
    {
      icon: Brain,
      title: "AI-Powered Insights", 
      description: "Machine learning algorithms identify revenue opportunities automatically",
      color: "blue"
    },
    {
      icon: Target,
      title: "Actionable Campaigns",
      description: "Ready-to-launch marketing campaigns based on trend analysis",
      color: "purple"
    },
    {
      icon: BarChart3,
      title: "Competitive Benchmarking",
      description: "Real-time competitor analysis and market positioning insights",
      color: "orange"
    },
    {
      icon: DollarSign,
      title: "Revenue Optimization",
      description: "Identify pricing strategies that increase revenue by 20-40%",
      color: "green"
    },
    {
      icon: Globe,
      title: "Market Expansion",
      description: "Source market intelligence to expand into new geographical segments",
      color: "indigo"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Al-Mansouri",
      title: "Revenue Director",
      company: "Luxury Dubai Resort",
      quote: "Travel Insights Hub increased our revenue by 34% in just 3 months. The actionable trends are game-changing.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      title: "Strategy Manager", 
      company: "Regional Airline",
      quote: "Finally, one platform that gives us everything we need to make data-driven decisions. ROI was immediate.",
      rating: 5
    },
    {
      name: "Emily Chen",
      title: "Marketing Head",
      company: "Car Rental Network",
      quote: "The consumer trend predictions helped us launch campaigns that outperformed by 180%. Incredible platform.",
      rating: 5
    }
  ]

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "per month",
      description: "Perfect for single properties or small operations",
      features: [
        "Market trends analysis",
        "Basic competitor insights", 
        "Monthly reports",
        "Email support",
        "Up to 3 users"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "per month",
      description: "Ideal for growing businesses and regional chains",
      features: [
        "Real-time market intelligence",
        "AI-powered insights",
        "Campaign recommendations",
        "Advanced analytics",
        "Priority support",
        "Up to 10 users",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise", 
      price: "Custom",
      period: "contact us",
      description: "For large organizations with complex needs",
      features: [
        "Everything in Professional",
        "Dedicated account manager",
        "Custom data sources",
        "White-label options",
        "Unlimited users",
        "24/7 phone support",
        "Advanced security"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                Travel Insights Hub
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
              <button
                onClick={() => setShowSignupModal(true)}
                className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-blue-50 to-purple-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" />
                <span>AI-Powered Travel Intelligence</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Turn Travel Data Into
                <span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> Revenue Growth</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Stop guessing. Start growing. Get real-time market intelligence, consumer trends, and actionable insights that drive 20-40% revenue increases for travel businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button
                  onClick={() => setShowSignupModal(true)}
                  className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-blue-700 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl p-4 text-white mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold">Revenue Opportunity Detected</h3>
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <p className="text-emerald-100 text-sm">Solo female travel trend: +124% growth</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Potential Revenue Uplift</span>
                    <span className="font-bold text-green-600">+$285K</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Implementation Time</span>
                    <span className="font-bold text-blue-600">15-30 days</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Success Probability</span>
                    <span className="font-bold text-purple-600">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Challenge Every Travel Business Faces
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              In today's fast-moving travel industry, making decisions without real-time data is like flying blind
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100">
              <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fragmented Data</h3>
              <p className="text-gray-600 mb-6">
                Your data is scattered across multiple platforms - booking systems, reviews, social media, competitors. 
                No single source of truth means missed opportunities.
              </p>
              <div className="text-red-600 font-semibold">
                Average: 40+ hours/week spent on manual data gathering
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-yellow-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Reactive Decisions</h3>
              <p className="text-gray-600 mb-6">
                By the time you notice a trend, your competitors have already capitalized on it. 
                You're always one step behind the market.
              </p>
              <div className="text-yellow-600 font-semibold">
                Result: 20-30% lost revenue opportunities
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Guesswork Strategy</h3>
              <p className="text-gray-600 mb-6">
                Marketing campaigns based on intuition rather than intelligence. 
                Pricing strategies without competitive context. Growth without direction.
              </p>
              <div className="text-blue-600 font-semibold">
                Impact: 60% of campaigns underperform
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              One Platform. All Your Answers.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Travel Insights Hub transforms fragmented data into crystal-clear action plans that drive immediate revenue growth
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">AI-Powered Intelligence</h3>
                    <p className="text-gray-600">
                      Our machine learning algorithms analyze 50+ data sources in real-time to identify revenue opportunities before your competitors even notice them.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Action Plans</h3>
                    <p className="text-gray-600">
                      Skip the analysis paralysis. Get specific, actionable recommendations with campaign templates, pricing strategies, and implementation timelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Revenue Growth</h3>
                    <p className="text-gray-600">
                      Our customers see average revenue increases of 20-40% within 90 days. Stop leaving money on the table.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Live Demo Preview</h3>
                <div className="space-y-4">
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-100">Sustainability Trend Alert</span>
                      <span className="bg-emerald-400 text-emerald-900 px-2 py-1 rounded-full text-xs font-bold">+156%</span>
                    </div>
                    <p className="text-white/90 text-sm">Eco-conscious travel demand surging. Revenue opportunity: $340K</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-100">Solo Female Travel</span>
                      <span className="bg-blue-400 text-blue-900 px-2 py-1 rounded-full text-xs font-bold">+124%</span>
                    </div>
                    <p className="text-white/90 text-sm">Safety-focused packages showing high conversion. Launch in 15 days.</p>
                  </div>
                  <div className="bg-white/20 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-emerald-100">Bleisure Packages</span>
                      <span className="bg-purple-400 text-purple-900 px-2 py-1 rounded-full text-xs font-bold">+89%</span>
                    </div>
                    <p className="text-white/90 text-sm">Business + leisure hybrid demand rising. Campaign ready.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Everything You Need to Dominate Your Market
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive travel intelligence in one powerful platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              const colorClasses = {
                emerald: "bg-emerald-100 text-emerald-600",
                blue: "bg-blue-100 text-blue-600", 
                purple: "bg-purple-100 text-purple-600",
                orange: "bg-orange-100 text-orange-600",
                green: "bg-green-100 text-green-600",
                indigo: "bg-indigo-100 text-indigo-600"
              }
              
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 ${colorClasses[feature.color]} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Trusted by Leading Travel Brands
            </h2>
            <p className="text-xl text-gray-600">
              See how industry leaders are using Travel Insights Hub to drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-2xl p-8 border border-emerald-100">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.title}</div>
                  <div className="text-emerald-600 font-medium">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that scales with your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-2xl p-8 shadow-lg ${plan.popular ? 'ring-2 ring-emerald-500 transform scale-105' : ''} relative`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600">/{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowSignupModal(true)}
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-emerald-600 to-blue-600 text-white hover:from-emerald-700 hover:to-blue-700'
                      : 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Travel Business?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join 500+ travel businesses already using Travel Insights Hub to drive growth
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowSignupModal(true)}
              className="bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <span>Start Your Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-emerald-600 transition-all duration-200">
              Schedule Demo
            </button>
          </div>
          <p className="text-emerald-100 mt-6 text-sm">
            14-day free trial • No credit card required • Setup in 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Travel Insights Hub</span>
              </div>
              <p className="text-gray-400">
                Transforming travel data into revenue growth for industry leaders worldwide.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Features</li>
                <li>Pricing</li>
                <li>API</li>
                <li>Integrations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Documentation</li>
                <li>Status</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Travel Insights Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Signup Modal */}
      {showSignupModal && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={() => setShowSignupModal(false)}></div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-8 transform transition-all duration-300 scale-100">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Start Your Free Trial</h2>
                <button
                  onClick={() => setShowSignupModal(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <form onSubmit={handleSignupSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={signupForm.name}
                      onChange={(e) => setSignupForm({...signupForm, name: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      required
                      value={signupForm.email}
                      onChange={(e) => setSignupForm({...signupForm, email: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="you@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      required
                      value={signupForm.company}
                      onChange={(e) => setSignupForm({...signupForm, company: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type
                  </label>
                  <div className="relative">
                    <select
                      value={signupForm.businessType}
                      onChange={(e) => setSignupForm({...signupForm, businessType: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 appearance-none bg-white"
                    >
                      <option value="hotel">Hotel / Resort</option>
                      <option value="airline">Airline</option>
                      <option value="car-rental">Car Rental</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="tourism-board">Tourism Board</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronRight className="absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      required
                      value={signupForm.password}
                      onChange={(e) => setSignupForm({...signupForm, password: e.target.value})}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      placeholder="Create a strong password"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-emerald-700 hover:to-blue-700 transition-all duration-200"
                >
                  Start Free Trial
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default MarketingPage 