import { cn } from '@/lib/utils'
    import { ReactNode } from 'react'

    interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
      children: ReactNode
      className?: string
    }

    export function Button({ children, className, ...props }: ButtonProps) {
      return (
        <button
          className={cn(
            'px-4 py-2 rounded-lg transition-colors',
            'bg-primary text-white hover:bg-primary/90',
            className
          )}
          {...props}
        >
          {children}
        </button>
      )
    }
