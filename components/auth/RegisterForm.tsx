'use client'
    
    import { useEffect, useState } from 'react'
    import { useForm, Controller } from 'react-hook-form'
    import { zodResolver } from '@hookform/resolvers/zod'
    import * as z from 'zod'
    import { Button } from '@/components/ui/Button'
    import { Input } from '@/components/ui/Input'

    const registerSchema = z.object({
      name: z.string().min(2),
      email: z.string().email(),
      password: z.string().min(8),
      confirmPassword: z.string().min(8),
      userType: z.enum(['restaurant', 'client'])
    }).refine(data => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ['confirmPassword']
    })

    export function RegisterForm() {
      const [isMounted, setIsMounted] = useState(false)
      const {
        register,
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors }
      } = useForm({
        resolver: zodResolver(registerSchema),
        defaultValues: {
          userType: 'client'
        }
      })

      const userType = watch('userType')

      useEffect(() => {
        setIsMounted(true)
      }, [])

      const onSubmit = (data: any) => {
        console.log(data)
      }

      if (!isMounted) return null

      return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button
              type="button"
              onClick={() => setValue('userType', 'restaurant')}
              className={`p-4 rounded-lg border-2 transition-colors ${
                userType === 'restaurant'
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <div className="text-lg font-medium mb-2">Restaurant Owner</div>
              <p className="text-sm text-gray-600">
                Manage bookings, tables, and operations
              </p>
            </button>
            <button
              type="button"
              onClick={() => setValue('userType', 'client')}
              className={`p-4 rounded-lg border-2 transition-colors ${
                userType === 'client'
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 hover:border-primary'
              }`}
            >
              <div className="text-lg font-medium mb-2">Client</div>
              <p className="text-sm text-gray-600">
                Make reservations and manage bookings
              </p>
            </button>
            <input
              type="hidden"
              {...register('userType')}
            />
          </div>

          <Input
            label="Full Name"
            type="text"
            error={errors.name}
            {...register('name')}
          />
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
          <Input
            label="Confirm Password"
            type="password"
            error={errors.confirmPassword}
            {...register('confirmPassword')}
          />

          <div className="flex items-center">
            <input
              id="terms"
              name="terms"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the{' '}
              <a href="#" className="text-primary hover:text-primary/80">
                terms and conditions
              </a>
            </label>
          </div>

          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      )
    }
