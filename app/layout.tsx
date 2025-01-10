import './globals.css'
    import Link from 'next/link'
    import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en">
          <body className="min-h-screen bg-background flex flex-col">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-md">
              <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center">
                    <Link href="/" className="text-xl font-bold text-primary">
                      RestaurantBook
                    </Link>
                  </div>
                  <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className="text-gray-700 hover:text-primary transition-colors">
                      Home
                    </Link>
                    <Link href="#features" className="text-gray-700 hover:text-primary transition-colors">
                      Features
                    </Link>
                    <Link href="/auth/login" className="text-gray-700 hover:text-primary transition-colors">
                      Login
                    </Link>
                    <Link 
                      href="/auth/register" 
                      className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Main Content */}
            <main className="flex-1">
              {children}
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-8">
              <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-bold mb-4">RestaurantBook</h3>
                    <p className="text-sm text-gray-400">
                      Revolutionizing restaurant management with cutting-edge booking solutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                      <li>
                        <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link href="#features" className="text-gray-400 hover:text-primary transition-colors">
                          Features
                        </Link>
                      </li>
                      <li>
                        <Link href="/auth/login" className="text-gray-400 hover:text-primary transition-colors">
                          Login
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <ul className="text-sm text-gray-400 space-y-2">
                      <li>Email: support@restaurantbook.com</li>
                      <li>Phone: +212 600-000000</li>
                      <li>Address: Casablanca, Morocco</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <FaFacebook className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <FaTwitter className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <FaInstagram className="w-6 h-6" />
                      </a>
                      <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                        <FaLinkedin className="w-6 h-6" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                  © {new Date().getFullYear()} RestaurantBook. All rights reserved.
                </div>
              </div>
            </footer>
          </body>
        </html>
      )
    }
