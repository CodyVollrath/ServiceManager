// components/Auth.tsx
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
    // Handle login logic here
  };

  const handleSignupSubmit = (data: SignupInputs) => {
    console.log('Signup data:', data);
    // Handle signup logic here
  };

  const handleOAuthLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Handle OAuth login logic here
  };

  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome</h1>
          <p className="text-gray-600 mt-2">Sign in to access your account</p>
        </div>
        
        <div className="mb-6 flex">
          <button
            className={`flex-1 py-2 font-medium ${
              activeTab === 'login'
                ? 'text-teal-600 border-b-2 border-teal-600'
                : 'text-gray-500 border-b border-gray-300'
            }`}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={`flex-1 py-2 font-medium ${
              activeTab === 'signup'
                ? 'text-teal-600 border-b-2 border-teal-600'
                : 'text-gray-500 border-b border-gray-300'
            }`}
            onClick={() => setActiveTab('signup')}
          >
            Sign Up
          </button>
        </div>
        
        {activeTab === 'login' ? (
          <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                {...loginForm.register('email')}
              />
              {loginForm.formState.errors.email && (
                <p className="mt-1 text-sm text-red-600">{loginForm.formState.errors.email.message}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  {...loginForm.register('password')}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {loginForm.formState.errors.password && (
                <p className="mt-1 text-sm text-red-600">{loginForm.formState.errors.password.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors"
            >
              Sign In
            </button>
          </form>
        ) : (
          <form onSubmit={signupForm.handleSubmit(handleSignupSubmit)}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                {...signupForm.register('name')}
              />
              {signupForm.formState.errors.name && (
                <p className="mt-1 text-sm text-red-600">{signupForm.formState.errors.name.message}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label htmlFor="signup-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                id="signup-email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                {...signupForm.register('email')}
              />
              {signupForm.formState.errors.email && (
                <p className="mt-1 text-sm text-red-600">{signupForm.formState.errors.email.message}</p>
              )}
            </div>
            
            <div className="mb-6">
              <label htmlFor="signup-password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="signup-password"
                  type={showPassword ? 'text' : 'password'}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  {...signupForm.register('password')}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
              {signupForm.formState.errors.password && (
                <p className="mt-1 text-sm text-red-600">{signupForm.formState.errors.password.message}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600 transition-colors"
            >
              Create Account
            </button>
          </form>
        )}
        
        <div className="mt-8">
          <div className="relative flex items-center justify-center">
            <div className="border-t border-gray-300 w-full absolute"></div>
            <div className="bg-white px-4 relative z-10 text-sm text-gray-500">Or continue with</div>
          </div>
          
          <div className="mt-6 flex space-x-4">
            <button
              onClick={() => handleOAuthLogin('facebook')}
              className="flex-1 flex justify-center items-center py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm3 8h-1.35c-.538 0-.65.221-.65.778V10h2l-.209 2H13v7h-3v-7H8v-2h2V7.692C10 5.923 10.931 5 13.029 5H15v3z"></path>
              </svg>
            </button>
            
            <button
              onClick={() => handleOAuthLogin('google')}
              className="flex-1 flex justify-center items-center py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115z"></path>
                <path fill="#34A853" d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"></path>
                <path fill="#4A90E2" d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21z"></path>
                <path fill="#FBBC05" d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"></path>
              </svg>
            </button>
            
            <button
              onClick={() => handleOAuthLogin('microsoft')}
              className="flex-1 flex justify-center items-center py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#f25022" d="M1 1h10v10H1z"></path>
                <path fill="#00a4ef" d="M1 13h10v10H1z"></path>
                <path fill="#7fba00" d="M13 1h10v10H13z"></path>
                <path fill="#ffb900" d="M13 13h10v10H13z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}