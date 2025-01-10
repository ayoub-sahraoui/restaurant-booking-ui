import { cn } from '@/lib/utils'
    import { InputHTMLAttributes, forwardRef } from 'react'

    interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
      label: string
      error?: any
    }

    export const Input = forwardRef<HTMLInputElement, InputProps>(
      ({ label, error, className, ...props }, ref) => {
        return (
          <div className="space-y-1">
            <label className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              ref={ref}
              className={cn(
                'w-full px-3 py-2 border rounded-lg',
                'focus:ring-2 focus:ring-primary focus:border-primary',
                'transition-all duration-200',
                error && 'border-red-500',
                className
              )}
              {...props}
            />
            {error && (
              <p className="text-sm text-red-500">{error.message}</p>
            )}
          </div>
        )
      }
    )

    Input.displayName = 'Input'
