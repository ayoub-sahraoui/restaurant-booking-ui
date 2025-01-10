'use client'
    
    import { FaSearch, FaFilter, FaCalendarAlt, FaUser, FaTable } from 'react-icons/fa'
    import { useState } from 'react'

    export default function BookingsPage() {
      const [selectedDate, setSelectedDate] = useState(new Date())
      const [searchQuery, setSearchQuery] = useState('')

      // Sample booking data
      const bookings = [
        {
          id: 1,
          customer: 'John Doe',
          time: '19:00',
          date: '2024-01-15',
          guests: 4,
          table: 'T5',
          status: 'confirmed',
          specialRequests: 'Birthday celebration'
        },
        {
          id: 2,
          customer: 'Jane Smith',
          time: '20:30',
          date: '2024-01-15',
          guests: 2,
          table: 'T2',
          status: 'pending',
          specialRequests: 'Vegetarian options'
        }
      ]

      return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Booking Management</h1>

            {/* Filters and Search */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    value={selectedDate.toISOString().split('T')[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  />
                  <FaCalendarAlt className="absolute left-3 top-3 text-gray-400" />
                </div>
                <select
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">All Statuses</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Bookings Table */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Guests
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Table
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {bookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <FaUser className="w-4 h-4 text-primary" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {booking.customer}
                            </div>
                            <div className="text-sm text-gray-500">
                              {booking.specialRequests}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {booking.date}
                        </div>
                        <div className="text-sm text-gray-500">
                          {booking.time}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {booking.guests} guests
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <FaTable className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-900">
                            {booking.table}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 text-sm rounded-full ${
                          booking.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : booking.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800'
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {booking.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium">
                        <button className="text-primary hover:text-primary/80 mr-4">
                          Edit
                        </button>
                        <button className="text-red-600 hover:text-red-800">
                          Cancel
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add New Booking Button */}
            <div className="fixed bottom-8 right-8">
              <button className="p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                <FaCalendarAlt className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )
    }
