// components/Auth.tsx
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

const signupSchema = loginSchema.extend({
  name: z.string().min(2, 'Name must be at least 2 characters'),
});

type LoginInputs = z.infer<typeof loginSchema>;
type SignupInputs = z.infer<typeof signupSchema>;

export default function Auth() {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
  const [showPassword, setShowPassword] = useState(false);

  const loginForm = useForm<LoginInputs>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const signupForm = useForm<SignupInputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const handleLoginSubmit = (data: LoginInputs) => {
    console.log('Login data:', data);
  };

  const handleSignupSubmit = (data: SignupInputs) => {
    console.log('Signup data:', data);
  };

  const handleOAuthLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <div className="w-full max-w-md mx-auto border p-6 rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('login')}
          className={`px-4 py-2 border-b-2 ${activeTab === 'login' ? 'tab-active' : 'tab-inactive'}`}
        >
          Login
        </button>
        <button
          onClick={() => setActiveTab('signup')}
          className={`px-4 py-2 border-b-2 ${activeTab === 'signup' ? 'tab-active' : 'tab-inactive'}`}
        >
          Sign Up
        </button>
      </div>

      {activeTab === 'login' ? (
        <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            {...loginForm.register('email')}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-red-500">{loginForm.formState.errors.email?.message}</p>

          <div>
            <div className="flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...loginForm.register('password')}
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                className="btn ml-2 text-xs underline"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="text-sm text-red-500">{loginForm.formState.errors.password?.message}</p>
          </div>

          <button type="submit" className="btn w-full p-2 rounded btn-primary">Login</button>
        </form>
      ) : (
        <form onSubmit={signupForm.handleSubmit(handleSignupSubmit)} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            {...signupForm.register('name')}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-red-500">{signupForm.formState.errors.name?.message}</p>

          <input
            type="email"
            placeholder="Email"
            {...signupForm.register('email')}
            className="w-full p-2 border rounded"
          />
          <p className="text-sm text-red-500">{signupForm.formState.errors.email?.message}</p>

          <div>
            <div className="flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                {...signupForm.register('password')}
                className="w-full p-2 border rounded"
              />
              <button
                type="button"
                className="ml-2 text-xs underline"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            <p className="text-sm text-red-500">{signupForm.formState.errors.password?.message}</p>
          </div>

          <button type="submit" className="w-full p-2 rounded btn-primary">Sign Up</button>
        </form>
      )}

      <div className="mt-6">
        <p className="text-center text-sm mb-2">Or continue with</p>
        <div className="flex justify-center space-x-4">
          <button onClick={() => handleOAuthLogin('Google')} className="btn-secondary">Google</button>
          <button onClick={() => handleOAuthLogin('GitHub')} className="btn-secondary">GitHub</button>
        </div>
      </div>
    </div>
  );
}
