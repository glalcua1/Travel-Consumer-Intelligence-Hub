import { useState, useEffect } from 'react'
import { 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  BarChart3, 
  TrendingUp, 
  Users, 
  Lightbulb,
  Brain,
  CheckCircle,
  Play,
  ArrowDown,
  Zap,
  Star
} from 'lucide-react'

const CoachMarks = ({ userInfo, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const [highlightElement, setHighlightElement] = useState(null)
  const [waitingForAction, setWaitingForAction] = useState(false)

  const steps = [
    {
      id: 'welcome',
      title: 'Welcome to Your Travel Intelligence Hub',
      description: `Hi ${userInfo?.name || 'there'}! Let's take a quick tour of the most comprehensive consumer travel data platform.`,
      content: 'This 2-minute walkthrough will show you how to unlock powerful insights and get business-specific action plans.',
      target: null,
      position: 'center',
      icon: Brain,
      highlight: false
    },
    {
      id: 'comprehensive-data',
      title: 'Most Comprehensive Consumer & Travel Data',
      description: 'Access real-time insights from millions of travelers across Dubai & UAE',
      content: 'We aggregate data from booking platforms, social media, reviews, and direct consumer behavior to give you the complete picture.',
      target: '[data-coach="data-overview"]',
      position: 'bottom',
      icon: BarChart3,
      highlight: true,
      autoScroll: true
    },
    {
      id: 'consumer-insights',
      title: 'Deep Consumer Intelligence',
      description: 'Understand traveler behavior, spending patterns, and preferences',
      content: 'Track emerging trends, seasonal patterns, and consumer sentiment across all travel segments.',
      target: '[data-coach="consumer-trends"]',
      position: 'bottom',
      icon: TrendingUp,
      highlight: true,
      autoScroll: true
    },
    {
      id: 'action-plans-intro',
      title: 'Get Action Plans for Business-Specific Insights',
      description: 'Turn data into actionable strategies tailored to your business',
      content: 'Our AI analyzes your business type and generates personalized recommendations for revenue growth.',
      target: '[data-coach="action-plans-button"]',
      position: 'top',
      icon: Target,
      highlight: true,
      autoScroll: true
    },
    {
      id: 'action-plans-demo',
      title: 'Let\'s See Action Plans in Action',
      description: 'Now click the blue "Get Action Plans" button to see the magic happen',
      content: 'This will open the action plan drawer where you can create personalized strategies for your business.',
      target: '[data-coach="action-plans-button"]',
      position: 'bottom',
      icon: Play,
      highlight: true,
      autoScroll: true,
      requiresAction: true,
      actionText: 'Click the blue "Get Action Plans" button above to continue'
    },
    {
      id: 'drawer-walkthrough',
      title: 'Personalized Business Strategy',
      description: 'This is how we create your custom action plan',
      content: 'The drawer shows business setup options and generates AI-powered recommendations based on your selection.',
      target: '[data-coach="action-drawer"]',
      position: 'left',
      icon: Lightbulb,
      highlight: true,
      autoScroll: false
    },
    {
      id: 'demo-example',
      title: 'Example: Luxury Hotel Strategy',
      description: 'See how the system generates specific recommendations',
      content: 'For a luxury hotel in Dubai, we\'d recommend sustainable practices, solo female traveler amenities, and premium experiences.',
      target: '[data-coach="action-drawer"]',
      position: 'left',
      icon: Star,
      highlight: true,
      autoScroll: false
    },
    {
      id: 'complete',
      title: 'You\'re All Set!',
      description: 'Start exploring your data and getting actionable insights',
      content: 'Navigate through different sections to discover trends, analyze competitors, and optimize your strategy.',
      target: null,
      position: 'center',
      icon: CheckCircle,
      highlight: false
    }
  ]

  useEffect(() => {
    // Show coach marks for first-time users
    const hasSeenTour = localStorage.getItem('travel-hub-tour-completed')
    if (!hasSeenTour) {
      setIsVisible(true)
    }
  }, [])

  useEffect(() => {
    if (isVisible && !showWelcome) {
      const step = steps[currentStep]
      if (step.target) {
        const element = document.querySelector(step.target)
        if (element) {
          setHighlightElement(element)
          if (step.autoScroll) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' })
          }
        }
      } else {
        setHighlightElement(null)
      }

      // Handle action plan drawer detection
      if (step.requiresAction && step.id === 'action-plans-demo') {
        setWaitingForAction(true)
      }
    }
  }, [currentStep, isVisible, showWelcome])

  // Listen for action plan drawer opening using both MutationObserver and polling
  useEffect(() => {
    if (waitingForAction) {
      let isDetected = false
      
      const checkDrawer = () => {
        if (isDetected) return
        
        const drawer = document.querySelector('[data-coach="action-drawer"]')
        if (drawer) {
          // Check if drawer exists and is visible
          const rect = drawer.getBoundingClientRect()
          const isVisible = rect.width > 0 && rect.height > 0 && rect.right > window.innerWidth * 0.3
          
          if (isVisible) {
            isDetected = true
            setWaitingForAction(false)
            setTimeout(() => {
              nextStep()
            }, 1000) // Wait 1 second to show the drawer
          }
        }
      }
      
      // Use both MutationObserver and polling for reliability
      const observer = new MutationObserver(checkDrawer)
      const polling = setInterval(checkDrawer, 200)
      
      // Observe the document for changes
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style', 'transform']
      })
      
      return () => {
        observer.disconnect()
        clearInterval(polling)
      }
    }
  }, [waitingForAction])

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      completeTour()
    }
  }

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const completeTour = () => {
    setIsVisible(false)
    localStorage.setItem('travel-hub-tour-completed', 'true')
    if (onComplete) onComplete()
  }

  const skipTour = () => {
    completeTour()
  }

  const startTour = () => {
    setShowWelcome(false)
    setCurrentStep(0)
  }

  const resetTour = () => {
    localStorage.removeItem('travel-hub-tour-completed')
    setCurrentStep(0)
    setShowWelcome(true)
    setIsVisible(true)
    setWaitingForAction(false)
  }

  // Expose reset function globally for testing
  useEffect(() => {
    window.resetCoachMarks = resetTour
  }, [])

  if (!isVisible) return null

  const currentStepData = steps[currentStep]
  const Icon = currentStepData.icon

  return (
    <div className="fixed inset-0 z-[80]">
      {/* Overlay with Spotlight Effect */}
      <div className="absolute inset-0">
        {highlightElement && currentStepData.highlight ? (
          <SpotlightOverlay 
            element={highlightElement} 
            allowInteraction={currentStepData.requiresAction}
          />
        ) : (
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        )}
      </div>

      
      {/* Highlight Ring */}
      {highlightElement && currentStepData.highlight && (
        <HighlightRing 
          element={highlightElement} 
          isActionRequired={currentStepData.requiresAction}
        />
      )}

      {/* Click Indicator for Action Required Steps */}
      {highlightElement && currentStepData.requiresAction && (
        <ClickIndicator element={highlightElement} />
      )}

      {/* Welcome Modal */}
      {showWelcome && (
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                Welcome to Your Travel Intelligence Hub
              </h2>
              <p className="text-gray-600 mb-6">
                Hi {userInfo?.name || 'there'}! Ready to explore the most comprehensive consumer travel data platform? 
              </p>
              <p className="text-sm text-gray-500 mb-8">
                This 2-minute tour will show you how to unlock powerful insights and get business-specific action plans.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={skipTour}
                  className="flex-1 px-4 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Skip Tour
                </button>
                <button
                  onClick={startTour}
                  className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all font-medium"
                >
                  Start Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step Modal */}
      {!showWelcome && (
        <div 
          className={`absolute p-4 z-[110] ${getModalPosition(currentStepData.position, highlightElement)}`}
          style={getModalStyle(currentStepData.position, highlightElement)}
        >
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-sm w-full">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 border-b border-gray-100 rounded-t-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm">{currentStepData.title}</h3>
                    <p className="text-xs text-gray-600">Step {currentStep + 1} of {steps.length}</p>
                  </div>
                </div>
                <button
                  onClick={skipTour}
                  className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-gray-700 text-sm mb-3">{currentStepData.description}</p>
              <p className="text-gray-600 text-xs mb-4">{currentStepData.content}</p>
              
              {currentStepData.requiresAction && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center space-x-2">
                    <ArrowDown className="w-4 h-4 text-blue-600 animate-bounce" />
                    <p className="text-blue-800 text-xs font-medium">{currentStepData.actionText}</p>
                  </div>
                </div>
              )}

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>Progress</span>
                  <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-1 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    currentStep === 0 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft className="w-3 h-3" />
                  <span>Back</span>
                </button>
                
                <div className="flex space-x-2">
                  <button
                    onClick={skipTour}
                    className="px-3 py-1.5 text-sm text-gray-500 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    Skip
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={currentStepData.requiresAction}
                    className={`flex items-center space-x-1 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                      currentStepData.requiresAction
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                    }`}
                  >
                    <span>{currentStep === steps.length - 1 ? 'Finish' : 'Next'}</span>
                    {currentStep < steps.length - 1 && <ChevronRight className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// Spotlight overlay component that creates a cutout effect
const SpotlightOverlay = ({ element, allowInteraction = false }) => {
  const rect = element.getBoundingClientRect()
  const padding = 8
  
  return (
    <div className="absolute inset-0">
      {/* Top overlay */}
      <div 
        className="absolute top-0 left-0 right-0 bg-black/60 backdrop-blur-sm pointer-events-auto z-[85]"
        style={{ height: rect.top - padding }}
      />
      
      {/* Bottom overlay */}
      <div 
        className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm pointer-events-auto z-[85]"
        style={{ height: window.innerHeight - rect.bottom - padding }}
      />
      
      {/* Left overlay */}
      <div 
        className="absolute bg-black/60 backdrop-blur-sm pointer-events-auto z-[85]"
        style={{ 
          top: rect.top - padding,
          left: 0,
          width: rect.left - padding,
          height: rect.height + padding * 2
        }}
      />
      
      {/* Right overlay */}
      <div 
        className="absolute bg-black/60 backdrop-blur-sm pointer-events-auto z-[85]"
        style={{ 
          top: rect.top - padding,
          right: 0,
          width: window.innerWidth - rect.right - padding,
          height: rect.height + padding * 2
        }}
      />
      
      {/* Cutout area for the highlighted element - no overlay here */}
    </div>
  )
}

// Highlight ring component
const HighlightRing = ({ element, isActionRequired = false }) => {
  const rect = element.getBoundingClientRect()
  const padding = 8
  
  const baseStyle = {
    top: rect.top - padding,
    left: rect.left - padding,
    width: rect.width + padding * 2,
    height: rect.height + padding * 2,
    borderRadius: '12px',
    pointerEvents: 'none'
  }

  if (isActionRequired) {
    return (
      <>
        {/* Main highlight ring for action required */}
        <div 
          className="absolute pointer-events-none z-[90]"
          style={{
            ...baseStyle,
            border: '4px solid #10b981',
            boxShadow: '0 0 0 6px rgba(16, 185, 129, 0.4), 0 0 32px rgba(16, 185, 129, 0.6)',
            animation: 'pulse 1.5s infinite'
          }}
        />
        {/* Secondary glow ring */}
        <div 
          className="absolute pointer-events-none z-[89]"
          style={{
            ...baseStyle,
            top: rect.top - padding - 4,
            left: rect.left - padding - 4,
            width: rect.width + padding * 2 + 8,
            height: rect.height + padding * 2 + 8,
            border: '2px solid #34d399',
            borderRadius: '16px',
            boxShadow: '0 0 0 8px rgba(52, 211, 153, 0.2), 0 0 48px rgba(52, 211, 153, 0.4)',
            animation: 'pulse 2s infinite reverse'
          }}
        />
      </>
    )
  }
  
  return (
    <div 
      className="absolute pointer-events-none z-[90]"
      style={{
        ...baseStyle,
        border: '3px solid #3b82f6',
        boxShadow: '0 0 0 4px rgba(59, 130, 246, 0.3), 0 0 24px rgba(59, 130, 246, 0.5)',
        animation: 'pulse 2s infinite'
      }}
    />
  )
}

// Click indicator component for action required steps
const ClickIndicator = ({ element }) => {
  const rect = element.getBoundingClientRect()
  
  return (
    <div 
      className="absolute pointer-events-none z-[95]"
      style={{
        top: rect.top + rect.height/2 - 12,
        left: rect.right + 15,
        animation: 'bounce 1s infinite'
      }}
    >
      <div className="flex items-center space-x-2">
        <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
          CLICK HERE
        </div>
        <div className="text-green-500 text-xl animate-pulse">
          👆
        </div>
      </div>
    </div>
  )
}

const getModalPosition = (position, element) => {
  if (!element) {
    switch (position) {
      case 'top':
        return 'top-4 left-1/2 transform -translate-x-1/2'
      case 'bottom':
        return 'bottom-4 left-1/2 transform -translate-x-1/2'
      case 'left':
        return 'left-4 top-1/2 transform -translate-y-1/2'
      case 'right':
        return 'right-4 top-1/2 transform -translate-y-1/2'
      case 'center':
      default:
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
    }
  }

  const rect = element.getBoundingClientRect()
  const modalWidth = 384 // max-w-sm = 384px
  const modalHeight = 400 // approximate modal height
  const gap = 20

  switch (position) {
    case 'top':
      return `fixed`
    case 'bottom':
      return `fixed`
    case 'left':
      return `fixed`
    case 'right':
      return `fixed`
    case 'center':
    default:
      return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
  }
}

const getModalStyle = (position, element) => {
  if (!element) return {}
  
  const rect = element.getBoundingClientRect()
  const modalWidth = 384
  const modalHeight = 400
  const gap = 20

  switch (position) {
    case 'top':
      return {
        top: Math.max(gap, rect.top - modalHeight - gap),
        left: Math.max(gap, Math.min(window.innerWidth - modalWidth - gap, rect.left + rect.width/2 - modalWidth/2))
      }
    case 'bottom':
      return {
        top: Math.min(window.innerHeight - modalHeight - gap, rect.bottom + gap),
        left: Math.max(gap, Math.min(window.innerWidth - modalWidth - gap, rect.left + rect.width/2 - modalWidth/2))
      }
    case 'left':
      return {
        top: Math.max(gap, Math.min(window.innerHeight - modalHeight - gap, rect.top + rect.height/2 - modalHeight/2)),
        left: Math.max(gap, rect.left - modalWidth - gap)
      }
    case 'right':
      return {
        top: Math.max(gap, Math.min(window.innerHeight - modalHeight - gap, rect.top + rect.height/2 - modalHeight/2)),
        left: Math.min(window.innerWidth - modalWidth - gap, rect.right + gap)
      }
    case 'center':
    default:
      return {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }
  }
}

export default CoachMarks 