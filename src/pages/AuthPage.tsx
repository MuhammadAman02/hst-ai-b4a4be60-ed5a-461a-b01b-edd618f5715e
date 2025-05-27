import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

const AuthPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    // Simulate login
    login({
      id: '1',
      email: loginData.email,
      firstName: 'John',
      lastName: 'Doe'
    });
    
    toast.success('Welcome back!');
    navigate('/');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signupData.firstName || !signupData.lastName || !signupData.email || !signupData.password) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (signupData.password !== signupData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (signupData.password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    
    // Simulate signup
    login({
      id: '1',
      email: signupData.email,
      firstName: signupData.firstName,
      lastName: signupData.lastName
    });
    
    toast.success('Account created successfully!');
    navigate('/');
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-luxury-charcoal mb-2">
            Welcome to LUXE
          </h1>
          <p className="text-gray-600">
            Sign in to your account or create a new one
          </p>
        </div>

        <Card className="border-luxury-gray-medium">
          <CardContent className="p-6">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="mt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label htmlFor="login-email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="login-email"
                      type="email"
                      placeholder="Enter your email"
                      value={loginData.email}
                      onChange={(e) => setLoginData(prev => ({ ...prev, email: e.target.value }))}
                      className="border-luxury-gray-medium focus:border-luxury-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="login-password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="login-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) => setLoginData(prev => ({ ...prev, password: e.target.value }))}
                        className="border-luxury-gray-medium focus:border-luxury-gold pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-0 h-full px-3"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-luxury-gold hover:underline">
                      Forgot password?
                    </a>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
                    size="lg"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>
              
              <TabsContent value="signup" className="mt-6">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="first-name" className="block text-sm font-medium mb-2">
                        First Name
                      </label>
                      <Input
                        id="first-name"
                        type="text"
                        placeholder="First name"
                        value={signupData.firstName}
                        onChange={(e) => setSignupData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="border-luxury-gray-medium focus:border-luxury-gold"
                      />
                    </div>
                    <div>
                      <label htmlFor="last-name" className="block text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <Input
                        id="last-name"
                        type="text"
                        placeholder="Last name"
                        value={signupData.lastName}
                        onChange={(e) => setSignupData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="border-luxury-gray-medium focus:border-luxury-gold"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="signup-email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      value={signupData.email}
                      onChange={(e) => setSignupData(prev => ({ ...prev, email: e.target.value }))}
                      className="border-luxury-gray-medium focus:border-luxury-gold"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="signup-password" className="block text-sm font-medium mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Input
                        id="signup-password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Create a password"
                        value={signupData.password}
                        onChange={(e) => setSignupData(prev => ({ ...prev, password: e.target.value }))}
                        className="border-luxury-gray-medium focus:border-luxury-gold pr-10"
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 top-0 h-full px-3"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">
                      Confirm Password
                    </label>
                    <Input
                      id="confirm-password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      value={signupData.confirmPassword}
                      onChange={(e) => setSignupData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                      className="border-luxury-gray-medium focus:border-luxury-gold"
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" required />
                    <span className="text-sm text-gray-600">
                      I agree to the{' '}
                      <a href="#" className="text-luxury-gold hover:underline">
                        Terms of Service
                      </a>{' '}
                      and{' '}
                      <a href="#" className="text-luxury-gold hover:underline">
                        Privacy Policy
                      </a>
                    </span>
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
                    size="lg"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;