'use client'
    
    import { useState, useEffect, useRef } from 'react'
    import { FaPlus, FaEdit, FaTrash, FaChair } from 'react-icons/fa'
    import interact from 'interactjs'

    export default function TablesPage() {
      const [tables, setTables] = useState([
        { id: 1, name: 'T1', capacity: 4, position: { x: 50, y: 50 }, status: 'available' },
        { id: 2, name: 'T2', capacity: 2, position: { x: 200, y: 50 }, status: 'occupied' },
        { id: 3, name: 'T3', capacity: 6, position: { x: 350, y: 50 }, status: 'reserved' }
      ])

      const [selectedTable, setSelectedTable] = useState(null)
      const [isEditing, setIsEditing] = useState(false)
      const floorPlanRef = useRef(null)

      useEffect(() => {
        if (!floorPlanRef.current) return

        interact('.draggable')
          .draggable({
            inertia: true,
            modifiers: [
              interact.modifiers.restrictRect({
                restriction: floorPlanRef.current,
                endOnly: true
              })
            ],
            autoScroll: true,
            listeners: {
              move: (event) => {
                const { target } = event
                const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
                const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

                target.style.transform = `translate(${x}px, ${y}px)`
                target.setAttribute('data-x', x)
                target.setAttribute('data-y', y)

                const tableId = target.dataset.id
                setTables(prevTables =>
                  prevTables.map(table =>
                    table.id === Number(tableId)
                      ? { ...table, position: { x, y } }
                      : table
                  )
                )
              }
            }
          })
      }, [])

      const handleAddTable = () => {
        const newTable = {
          id: tables.length + 1,
          name: `T${tables.length + 1}`,
          capacity: 4,
          position: { x: 100, y: 100 },
          status: 'available'
        }
        setTables([...tables, newTable])
      }

      const handleTableClick = (table) => {
        setSelectedTable(table)
      }

      const handleDeleteTable = (id) => {
        setTables(tables.filter(table => table.id !== id))
        setSelectedTable(null)
      }

      return (
        <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Table Management</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Floor Plan */}
              <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Floor Plan</h2>
                <div 
                  ref={floorPlanRef}
                  className="relative w-full h-[600px] bg-gray-50 rounded-lg overflow-hidden"
                >
                  {tables.map((table) => (
                    <div
                      key={table.id}
                      data-id={table.id}
                      className={`draggable absolute w-20 h-20 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-all
                        ${
                          table.status === 'available'
                            ? 'bg-green-100 hover:bg-green-200'
                            : table.status === 'occupied'
                            ? 'bg-red-100 hover:bg-red-200'
                            : 'bg-yellow-100 hover:bg-yellow-200'
                        }
                        ${selectedTable?.id === table.id ? 'ring-2 ring-primary' : ''}
                      `}
                      style={{
                        transform: `translate(${table.position.x}px, ${table.position.y}px)`,
                        left: 0,
                        top: 0
                      }}
                      data-x={table.position.x}
                      data-y={table.position.y}
                      onClick={() => handleTableClick(table)}
                    >
                      <FaChair className="w-6 h-6 mb-2" />
                      <span className="font-medium">{table.name}</span>
                      <span className="text-sm text-gray-600">{table.capacity} seats</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table Details */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">
                  {selectedTable ? 'Table Details' : 'Add New Table'}
                </h2>

                {selectedTable ? (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Table Name
                      </label>
                      <input
                        type="text"
                        value={selectedTable.name}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        readOnly={!isEditing}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Capacity
                      </label>
                      <input
                        type="number"
                        value={selectedTable.capacity}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        readOnly={!isEditing}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Status
                      </label>
                      <select
                        value={selectedTable.status}
                        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                        disabled={!isEditing}
                      >
                        <option value="available">Available</option>
                        <option value="occupied">Occupied</option>
                        <option value="reserved">Reserved</option>
                      </select>
                    </div>

                    <div className="flex gap-2">
                      <button
                        className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? 'Save' : 'Edit'}
                      </button>
                      <button
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        onClick={() => handleDeleteTable(selectedTable.id)}
                      >
                        <FaTrash className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 flex items-center justify-center"
                    onClick={handleAddTable}
                  >
                    <FaPlus className="w-5 h-5 mr-2" />
                    Add New Table
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )
    }
