import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Users, Building2, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import saiLogoHero from "@/assets/sai-logo-hero.jpg";
import athletesHero from "@/assets/athletes-hero.jpg";

const LoginSelection = () => {
  const navigate = useNavigate();

  const userTypes = [
    {
      type: "user",
      title: "Athlete/User",
      description: "Access your performance records and assessments",
      icon: Users,
      color: "bg-blue-500",
      privileges: ["View personal records", "Submit assessments", "Track progress"]
    },
    {
      type: "admin", 
      title: "System Admin",
      description: "Full system administration and management",
      icon: Shield,
      color: "bg-red-500",
      privileges: ["Full system access", "User management", "System configuration"]
    },
    {
      type: "govt",
      title: "Government Official",
      description: "Policy oversight and strategic decisions",
      icon: Building2,
      color: "bg-green-500", 
      privileges: ["Policy oversight", "Regional analytics", "Strategic reports"]
    },
    {
      type: "coordinator",
      title: "Sports Coordinator",
      description: "Manage athletes and coordinate assessments",
      icon: Trophy,
      color: "bg-orange-500",
      privileges: ["Athlete management", "Assessment coordination", "Performance tracking"]
    }
  ];

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
          <h1 className="text-4xl font-bold mb-4 animate-fade-in [animation-delay:300ms] bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent">SAI-AI Portal</h1>
          <p className="text-lg opacity-90 mb-6 animate-fade-in [animation-delay:500ms]">
            Advanced Analytics Platform for Sports Talent Assessment
          </p>
          <div className="flex justify-center gap-2 flex-wrap animate-fade-in [animation-delay:700ms]">
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover-scale">
              Multi-Role Access
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover-scale">
              Secure Platform
            </Badge>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover-scale">
              Role-Based Dashboard
            </Badge>
          </div>
        </div>
      </div>

      {/* Right Panel - Role Selection */}
      <div className="flex-1 flex items-center justify-center p-8 bg-background/95">
        <div className="w-full max-w-4xl animate-scale-in">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">Select Your Role</h2>
            <p className="text-muted-foreground animate-fade-in [animation-delay:200ms]">Choose your login type to access the appropriate dashboard</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userTypes.map((user, index) => {
              const IconComponent = user.icon;
              return (
                <Card 
                  key={user.type}
                  className="hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 hover:border-primary/50 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 story-link animate-fade-in group"
                  style={{animationDelay: `${400 + index * 150}ms`}}
                  onClick={() => navigate(`/login/${user.type}`)}
                >
                  <CardHeader className="text-center animate-fade-in">
                    <div className={`w-16 h-16 ${user.color} rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                      <IconComponent className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">{user.title}</CardTitle>
                    <CardDescription className="group-hover:text-foreground/80 transition-colors duration-300">{user.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-muted-foreground">Access Privileges:</h4>
                      <ul className="space-y-1">
                        {user.privileges.map((privilege, index) => (
                          <li key={index} className="text-sm flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-200" style={{transitionDelay: `${index * 50}ms`}}>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-125 transition-transform duration-200"></div>
                            {privilege}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full mt-4 hover-scale transition-all duration-300 bg-gradient-to-r from-primary/90 to-primary hover:from-primary hover:to-primary/90 shadow-md hover:shadow-lg" variant="outline">
                      Login as {user.title}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSelection;