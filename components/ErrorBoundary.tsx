'use client'
    
    import { Component, ReactNode } from 'react'

    interface Props {
      children: ReactNode
    }

    interface State {
      hasError: boolean
    }

    export class ErrorBoundary extends Component<Props, State> {
      constructor(props: Props) {
        super(props)
        this.state = { hasError: false }
      }

      static getDerivedStateFromError() {
        return { hasError: true }
      }

      componentDidCatch(error: Error) {
        console.error('ErrorBoundary caught an error:', error)
      }

      render() {
        if (this.state.hasError) {
          return (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h2 className="text-red-600 font-medium">
                Something went wrong
              </h2>
              <p className="text-red-500 text-sm mt-1">
                Please try refreshing the page
              </p>
            </div>
          )
        }

        return this.props.children
      }
    }
