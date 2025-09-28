import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Trophy, Mail, Lock } from "lucide-react";
import saiLogoHero from "@/assets/sai-logo-hero.jpg";
import athletesHero from "@/assets/athletes-hero.jpg";

const CoordinatorLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Store role in localStorage for simulation
    localStorage.setItem('userRole', 'coordinator');
    
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex bg-gradient-hero animate-fade-in">
      {/* Left Panel - Branding */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 animate-pulse"></div>
        <img 
          src={athletesHero} 
          alt="SAI Athletes" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
        />
        <div className="relative z-10 text-center max-w-md animate-slide-in-right">
          <img 
            src={saiLogoHero} 
            alt="SAI Logo" 
            className="w-32 h-20 object-contain mx-auto mb-8 filter brightness-0 invert hover-scale transition-all duration-700 animate-fade-in"
          />
          <h1 className="text-4xl font-bold mb-4 animate-fade-in [animation-delay:300ms] bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">SAI-AI Portal</h1>
          <p className="text-lg opacity-90 mb-6 animate-fade-in [animation-delay:500ms]">
            Sports Coordinator - Manage Athletes & Assessments
          </p>
          <div className="flex justify-center gap-2 flex-wrap animate-fade-in [animation-delay:700ms]">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover-scale">
              Athlete Management
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover-scale">
              Performance Tracking
            </Badge>
          </div>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background/95">
        <Card className="w-full max-w-md shadow-2xl border-0 animate-scale-in backdrop-blur-sm bg-white/95 dark:bg-gray-900/95">
          <CardHeader className="text-center space-y-2 animate-fade-in">
            <Button 
              variant="ghost" 
              size="sm"
              className="absolute top-4 left-4 hover-scale transition-all duration-300"
              onClick={() => navigate('/login')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale animate-pulse shadow-lg">
              <Trophy className="h-8 w-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent animate-fade-in [animation-delay:200ms]">Sports Coordinator</CardTitle>
            <CardDescription className="text-muted-foreground animate-fade-in [animation-delay:400ms]">
              Coordinate athletes and manage performance assessments
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4 animate-fade-in [animation-delay:600ms]">
              <div className="space-y-2 animate-fade-in [animation-delay:700ms]">
                <Label htmlFor="email" className="text-foreground font-medium">Coordinator Email</Label>
                <div className="relative group">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="coordinator@sai.gov.in"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 border-border focus:ring-primary transition-all duration-300 hover:shadow-md focus:scale-[1.01]"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2 animate-fade-in [animation-delay:800ms]">
                <Label htmlFor="password" className="text-foreground font-medium">Password</Label>
                <div className="relative group">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter coordinator password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 border-border focus:ring-primary transition-all duration-300 hover:shadow-md focus:scale-[1.01]"
                    required
                  />
                </div>
              </div>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800 animate-fade-in [animation-delay:850ms]">
                <p className="text-sm text-orange-600 dark:text-orange-400">
                  🏆 Sports coordination and athlete management access
                </p>
              </div>

              <Button 
                type="button"
                variant="outline" 
                className="w-full hover-scale transition-all duration-300 animate-fade-in [animation-delay:900ms]"
                onClick={() => {
                  setEmail("coordinator@sai.gov.in");
                  setPassword("coord123");
                }}
              >
                Use Sample Credentials
              </Button>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4 animate-fade-in [animation-delay:1000ms]">
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover-scale" 
                disabled={isLoading}
                size="lg"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Authenticating...
                  </span>
                ) : "Access Coordinator Panel"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default CoordinatorLogin;