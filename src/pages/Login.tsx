import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lock, Mail, Shield } from "lucide-react";
import saiLogoHero from "@/assets/sai-logo-hero.jpg";
import athletesHero from "@/assets/athletes-hero.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-gradient-hero">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <img 
          src={athletesHero} 
          alt="SAI Athletes" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-10 text-center max-w-md">
          <img 
            src={saiLogoHero} 
            alt="SAI Logo" 
            className="w-32 h-20 object-contain mx-auto mb-8 filter brightness-0 invert"
          />
          <h1 className="text-4xl font-bold mb-4">SAI-AI Portal</h1>
          <p className="text-lg opacity-90 mb-6">
            Advanced Analytics Platform for Sports Talent Assessment
          </p>
          <div className="flex justify-center gap-2 flex-wrap">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              AI-Powered
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Secure Platform
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Real-time Analysis
            </Badge>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background/95">
        <Card className="w-full max-w-md shadow-2xl border-0 animate-scale-in">
          <CardHeader className="text-center space-y-2">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-primary">Official Login</CardTitle>
            <CardDescription className="text-muted-foreground">
              Access your SAI-AI dashboard with authorized credentials
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground font-medium">Official Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="official@sai.gov.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-border focus:ring-primary"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter secure password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-border focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <a href="#" className="text-primary hover:text-primary-light">
                  Forgot password?
                </a>
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:bg-primary-dark text-white shadow-primary" 
                disabled={isLoading}
                size="lg"
              >
                {isLoading ? "Authenticating..." : "Access Dashboard"}
              </Button>
              
              <div className="text-center text-sm text-muted-foreground">
                <p>Need access? Contact your <a href="#" className="text-primary hover:text-primary-light font-medium">System Administrator</a></p>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;