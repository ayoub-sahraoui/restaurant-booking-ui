import { LoginForm } from '@/components/auth/LoginForm'
    import { ErrorBoundary } from '@/components/ErrorBoundary'
    import Link from 'next/link'

    export default function LoginPage() {
      return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Illustration and Content */}
              <div className="hidden md:block">
                <div className="max-w-md">
                  <h2 className="text-4xl font-bold mb-6">
                    Welcome Back to RestaurantBook
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Streamline your restaurant operations with our powerful booking management system. Login to access your dashboard and manage reservations with ease.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary text-2xl">📅</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Real-Time Updates</h3>
                        <p className="text-sm text-gray-600">Instant reservation synchronization</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary text-2xl">📊</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Advanced Analytics</h3>
                        <p className="text-sm text-gray-600">Track your restaurant's performance</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Login Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
                <ErrorBoundary>
                  <LoginForm />
                </ErrorBoundary>
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{' '}
                    <Link
                      href="/auth/register"
                      className="text-primary hover:text-primary/80"
                    >
                      Register here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
