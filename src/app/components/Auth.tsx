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
    <div className="">
      <h1>Auth</h1>
    </div>
  );
}