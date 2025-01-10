import Link from 'next/link'
    import { FaCheckCircle, FaCalendarAlt, FaUsers, FaChartLine, FaMobileAlt, FaShieldAlt } from 'react-icons/fa'

    export default function Home() {
      return (
        <div className="bg-background">
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-primary/10 to-background">
            <div className="container mx-auto px-4 py-32">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Revolutionize Your Restaurant's Booking System
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Streamline reservations, manage tables efficiently, and boost your restaurant's performance with our all-in-one booking management platform.
                </p>
                <div className="flex gap-4 justify-center">
                  <Link
                    href="/auth/register"
                    className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#features"
                    className="px-8 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16">
                Powerful Features for Your Restaurant
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Feature Cards */}
                {[
                  {
                    icon: <FaCalendarAlt className="w-8 h-8 mb-4" />,
                    title: 'Real-Time Booking',
                    description: 'Manage reservations in real-time with instant updates across all platforms'
                  },
                  {
                    icon: <FaUsers className="w-8 h-8 mb-4" />,
                    title: 'Table Management',
                    description: 'Visual floor plan with drag-and-drop table arrangement'
                  },
                  {
                    icon: <FaChartLine className="w-8 h-8 mb-4" />,
                    title: 'Advanced Analytics',
                    description: 'Track performance metrics and customer trends'
                  },
                  {
                    icon: <FaMobileAlt className="w-8 h-8 mb-4" />,
                    title: 'Mobile Optimization',
                    description: 'Fully responsive design for all devices'
                  },
                  {
                    icon: <FaShieldAlt className="w-8 h-8 mb-4" />,
                    title: 'Secure Payments',
                    description: 'Integrated payment processing with PCI compliance'
                  },
                  {
                    icon: <FaCheckCircle className="w-8 h-8 mb-4" />,
                    title: 'Automated Reminders',
                    description: 'Reduce no-shows with automated SMS and email reminders'
                  }
                ].map((feature, index) => (
                  <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section id="pricing" className="py-20 bg-gradient-to-b from-background to-primary/10">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-16">
                Flexible Pricing Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Pricing Cards */}
                {[
                  {
                    title: 'Starter',
                    price: 'Free',
                    description: 'Perfect for small restaurants',
                    features: [
                      'Up to 50 bookings/month',
                      'Basic table management',
                      'Email support',
                      'Mobile access'
                    ],
                    cta: 'Start Free'
                  },
                  {
                    title: 'Professional',
                    price: '$49/mo',
                    description: 'For growing restaurants',
                    features: [
                      'Up to 500 bookings/month',
                      'Advanced analytics',
                      'Priority support',
                      'Custom branding',
                      'SMS notifications'
                    ],
                    cta: 'Get Started',
                    featured: true
                  },
                  {
                    title: 'Enterprise',
                    price: 'Custom',
                    description: 'For large restaurant groups',
                    features: [
                      'Unlimited bookings',
                      'Dedicated account manager',
                      'API access',
                      'Custom integrations',
                      '24/7 support'
                    ],
                    cta: 'Contact Us'
                  }
                ].map((plan, index) => (
                  <div 
                    key={index}
                    className={`p-8 bg-white rounded-lg shadow-lg ${
                      plan.featured ? 'border-2 border-primary' : ''
                    }`}
                  >
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                      <p className="text-4xl font-bold mb-2">
                        {plan.price}
                      </p>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <FaCheckCircle className="w-5 h-5 text-primary mr-2" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={plan.price === 'Custom' ? '/contact' : '/auth/register'}
                      className={`block w-full text-center px-6 py-3 rounded-lg transition-colors ${
                        plan.featured 
                          ? 'bg-primary text-white hover:bg-primary/90'
                          : 'bg-secondary text-white hover:bg-secondary/90'
                      }`}
                    >
                      {plan.cta}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-b from-background to-primary/10">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">
                  Ready to Transform Your Restaurant?
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join hundreds of restaurants already using our platform to streamline their operations and boost their revenue.
                </p>
                <Link
                  href="/auth/register"
                  className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Your Free Trial
                </Link>
              </div>
            </div>
          </section>
        </div>
      )
    }
