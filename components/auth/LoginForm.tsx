'use client'
    
    import { useEffect, useState } from 'react'
    import { useForm } from 'react-hook-form'
    import { zodResolver } from '@hookform/resolvers/zod'
    import * as z from 'zod'
    import { Button } from '@/components/ui/Button'
    import { Input } from '@/components/ui/Input'
    import { useRouter } from 'next/navigation'

    const loginSchema = z.object({
      email: z.string().email(),
      password: z.string().min(8)
    })

    // Static user data
    const staticUsers = [
      {
        email: 'restaurant@example.com',
        password: 'restaurant123',
        userType: 'restaurant'
      },
      {
        email: 'client@example.com',
        password: 'client123',
        userType: 'client'
      }
    ]

    export function LoginForm() {
      const [isMounted, setIsMounted] = useState(false)
      const [loginError, setLoginError] = useState('')
      const router = useRouter()
      const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm({
        resolver: zodResolver(loginSchema)
      })

      useEffect(() => {
        setIsMounted(true)
      }, [])

      const onSubmit = (data: any) => {
        setLoginError('')
        const user = staticUsers.find(
          u => u.email === data.email && u.password === data.password
        )

        if (user) {
          // Store user data in localStorage (for demo purposes)
          localStorage.setItem('currentUser', JSON.stringify(user))
          
          // Redirect based on user type
          if (user.userType === 'restaurant') {
            router.push('/restaurant')
          } else {
            router.push('/client')
          }
        } else {
          setLoginError('Invalid email or password')
        }
      }

      if (!isMounted) return null

      return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {loginError && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{loginError}</p>
            </div>
          )}

          <Input
            label="Email Address"
            type="email"
            error={errors.email}
            {...register('email')}
          />
          <Input
            label="Password"
            type="password"
            error={errors.password}
            {...register('password')}
          />

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-primary hover:text-primary/80">
                Forgot your password?
              </a>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Sign In
          </Button>
        </form>
      )
    }
