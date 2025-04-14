'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

type FormValues = {
  name?: string;
  email: string;
  password: string;
};

export default function Auth() {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(mode === 'login' ? loginSchema : signupSchema),
  });

  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1000));
    console.log('Form submitted', data);
    reset();
  };

  return (
    <div className="w-full max-w-sm mx-auto p-8 rounded-2xl shadow-lg bg-gradient-to-b from-slate-800 to-gray-900 text-white">
      <h2 className="text-2xl font-semibold text-center mb-6 capitalize">
        {mode}
      </h2>

      <AnimatePresence mode="wait">
        <motion.form
          key={mode}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25 }}
        >
          {mode === 'signup' && (
            <div>
              <Input
                placeholder="Name"
                {...register('name')}
                autoComplete="name"
                className="bg-gray-800 text-white placeholder-gray-400 border-gray-700"
              />
              {errors?.name && (
                <p className="text-sm text-red-400 mt-1">
                  {errors.name.message?.toString()}
                </p>
              )}
            </div>
          )}

          <div>
            <Input
              placeholder="Email"
              type="email"
              {...register('email')}
              autoComplete="email"
              className="bg-gray-800 text-white placeholder-gray-400 border-gray-700"
            />
            {errors?.email && (
              <p className="text-sm text-red-400 mt-1">
                {errors.email.message?.toString()}
              </p>
            )}
          </div>

          <div className="relative">
            <Input
              placeholder="Password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
              className="bg-gray-800 text-white placeholder-gray-400 border-gray-700"
            />
            {errors?.password && (
              <p className="text-sm text-red-400 mt-1">
                {errors.password.message?.toString()}
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 shadow-md"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? mode === 'login'
                ? 'Logging in...'
                : 'Creating account...'
              : mode === 'login'
              ? 'Login'
              : 'Sign up'}
          </Button>
        </motion.form>
      </AnimatePresence>

      <p className="text-center text-sm mt-6">
        {mode === 'login' ? (
          <>
            Don&apos;t have an account?{' '}
            <button
              type="button"
              onClick={() => setMode('signup')}
              className="text-blue-400 hover:underline"
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button
              type="button"
              onClick={() => setMode('login')}
              className="text-blue-400 hover:underline"
            >
              Login
            </button>
          </>
        )}
      </p>
    </div>
  );
}
