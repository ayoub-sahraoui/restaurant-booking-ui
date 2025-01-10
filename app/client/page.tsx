'use client'
    
    import { useEffect } from 'react'
    import { useRouter } from 'next/navigation'
    import { FaSearch, FaCalendarCheck, FaStar, FaUser } from 'react-icons/fa'

    export default function ClientPage() {
      const router = useRouter()

      // Check authentication
      useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser') || 'null')
        if (!user || user.userType !== 'client') {
          router.push('/auth/login')
        }
      }, [router])

      return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Client Dashboard</h1>
            
            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: <FaSearch className="w-8 h-8" />,
                  title: 'Find Restaurants',
                  description: 'Discover new places',
                  link: '/client/search'
                },
                {
                  icon: <FaCalendarCheck className="w-8 h-8" />,
                  title: 'My Bookings',
                  description: 'Manage reservations',
                  link: '/client/bookings'
                },
                {
                  icon: <FaStar className="w-8 h-8" />,
                  title: 'Favorites',
                  description: 'Saved restaurants',
                  link: '/client/favorites'
                },
                {
                  icon: <FaUser className="w-8 h-8" />,
                  title: 'Profile',
                  description: 'Manage account',
                  link: '/client/profile'
                }
              ].map((action, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-primary mb-4">
                    {action.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{action.title}</h3>
                  <p className="text-gray-600">{action.description}</p>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  'Reservation confirmed at La Bella Vita',
                  'Review submitted for The Golden Fork',
                  'New favorite added: Ocean Breeze',
                  'Profile information updated'
                ].map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <p className="text-gray-600">{activity}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )
    }
