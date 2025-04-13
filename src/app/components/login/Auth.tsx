// components/Auth.tsx
'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

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
    defaultValues: { email: '', password: '' },
  });

  const signupForm = useForm<SignupInputs>({
    resolver: zodResolver(signupSchema),
    defaultValues: { name: '', email: '', password: '' },
  });

  const handleLoginSubmit = (data: LoginInputs) => console.log('Login data:', data);
  const handleSignupSubmit = (data: SignupInputs) => console.log('Signup data:', data);
  const handleOAuthLogin = (provider: string) => console.log(`Login with ${provider}`);

  const renderPasswordField = (register: any, error?: string) => (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        className="w-72 pr-10"
        {...register('password')}
      />
      <Button
        type="button"
        size="icon"
        variant="ghost"
        className="absolute right-0 top-1/2 -translate-y-1/2"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
      </Button>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );

  return (
    <div className="w-full flex justify-center">
      <div className="authBox rounded-2xl shadow-lg p-8">
        {/* Tabs */}
        <div className="mb-6 flex gap-2">
          <Button
            variant={activeTab === 'login' ? 'default' : 'secondary'}
            onClick={() => setActiveTab('login')}
          >
            Login
          </Button>
          <Button
            variant={activeTab === 'signup' ? 'default' : 'secondary'}
            onClick={() => setActiveTab('signup')}
          >
            Sign&nbsp;Up
          </Button>
        </div>

        {/* Forms */}
        {activeTab === 'login' ? (
          <form onSubmit={loginForm.handleSubmit(handleLoginSubmit)} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              className="w-72"
              {...loginForm.register('email')}
            />
            {loginForm.formState.errors.email && (
              <p className="text-xs text-red-500">{loginForm.formState.errors.email.message}</p>
            )}

            {renderPasswordField(loginForm.register, loginForm.formState.errors.password?.message)}

            <Button type="submit" className="w-72">
              Login
            </Button>
          </form>
        ) : (
          <form onSubmit={signupForm.handleSubmit(handleSignupSubmit)} className="space-y-4">
            <Input
              type="text"
              placeholder="Name"
              className="w-72"
              {...signupForm.register('name')}
            />
            {signupForm.formState.errors.name && (
              <p className="text-xs text-red-500">{signupForm.formState.errors.name.message}</p>
            )}

            <Input
              type="email"
              placeholder="Email"
              className="w-72"
              {...signupForm.register('email')}
            />
            {signupForm.formState.errors.email && (
              <p className="text-xs text-red-500">{signupForm.formState.errors.email.message}</p>
            )}

            {renderPasswordField(
              signupForm.register,
              signupForm.formState.errors.password?.message
            )}

            <Button type="submit" className="bg-primary hover:bg-primary-dark px-4 rounded w-72">
              Sign&nbsp;Up
            </Button>
          </form>
        )}

        {/* OAuth */}
        <div className="mt-6">
          <p className="mb-2 text-center text-sm">Or continue with</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => handleOAuthLogin('Google')}>
              Google
            </Button>
            <Button variant="outline" onClick={() => handleOAuthLogin('GitHub')}>
              GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
