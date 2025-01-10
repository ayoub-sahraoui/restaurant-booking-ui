import { RegisterForm } from '@/components/auth/RegisterForm'
    import { ErrorBoundary } from '@/components/ErrorBoundary'
    import Link from 'next/link'

    export default function RegisterPage() {
      return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Illustration and Content */}
              <div className="hidden md:block">
                <div className="max-w-md">
                  <h2 className="text-4xl font-bold mb-6">
                    Join RestaurantBook Today
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Transform your restaurant operations with our comprehensive booking management system. Register now to start streamlining your reservations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary text-2xl">🚀</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Boost Efficiency</h3>
                        <p className="text-sm text-gray-600">Automate your booking process</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-primary text-2xl">💼</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Professional Tools</h3>
                        <p className="text-sm text-gray-600">Manage your restaurant like a pro</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Register Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6 text-center">Register</h2>
                <ErrorBoundary>
                  <RegisterForm />
                </ErrorBoundary>
                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Already have an account?{' '}
                    <Link
                      href="/auth/login"
                      className="text-primary hover:text-primary/80"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
