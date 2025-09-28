import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  CheckSquare, 
  TrendingUp, 
  FileText, 
  Shield,
  Home,
  Trophy,
  LogOut,
  User
} from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import saiLogoHero from "@/assets/sai-logo-hero.jpg";

const navigationItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    description: "Overview & Analytics"
  },
  {
    title: "Athletes",
    url: "/athletes",
    icon: Users,
    description: "Manage Athletes"
  },
  {
    title: "Verification",
    url: "/verification",
    icon: CheckSquare,
    description: "Performance Review"
  },
  {
    title: "Benchmarking",
    url: "/benchmarking",
    icon: Trophy,
    description: "Performance Analysis"
  },
  {
    title: "Reports",
    url: "/reports",
    icon: FileText,
    description: "Analytics & Reports"
  }
];

const adminItems = [
  {
    title: "Admin Panel",
    url: "/admin",
    icon: Shield,
    description: "System Management"
  }
];

export function AppSidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userRole, getRoleDisplayName, getRoleColor, logout } = useUserRole();
  
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  // Filter navigation based on user role
  const getFilteredNavigation = () => {
    if (userRole === 'user') {
      // Athletes see limited navigation
      return navigationItems.filter(item => 
        ['/', '/benchmarking'].includes(item.url)
      );
    }
    if (userRole === 'coordinator') {
      // Coordinators don't see admin panel but see most features
      return navigationItems;
    }
    // Govt and admin see all navigation
    return navigationItems;
  };

  const showAdminPanel = userRole === 'admin' || userRole === 'govt';

  return (
    <Sidebar className="border-r border-border bg-card w-64">
      <SidebarHeader className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
            <img 
              src={saiLogoHero} 
              alt="SAI Logo" 
              className="w-8 h-8 object-contain filter brightness-0 invert"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-primary">SAI Portal</h2>
            <p className="text-xs text-muted-foreground">Sports Authority</p>
          </div>
        </div>
        
        {/* User Role Badge */}
        <div className="mt-3 flex items-center gap-2">
          <User className="h-4 w-4 text-muted-foreground" />
          <Badge variant="secondary" className={`${getRoleColor()} text-white border-0`}>
            {getRoleDisplayName()}
          </Badge>
        </div>
      </SidebarHeader>

      <SidebarContent className="py-4">
        <SidebarGroup>
          <SidebarGroupLabel>
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getFilteredNavigation().map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`transition-all duration-200 ${
                      isActive(item.url) 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-primary" 
                        : "hover:bg-accent/10 text-foreground"
                    }`}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3 px-3 py-2">
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <div>
                        <span className="font-medium">{item.title}</span>
                        <p className="text-xs opacity-75">{item.description}</p>
                      </div>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {showAdminPanel && (
          <SidebarGroup>
            <SidebarGroupLabel>
              Administration
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {adminItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton 
                      asChild 
                      className={`transition-all duration-200 ${
                        isActive(item.url) 
                          ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                          : "hover:bg-accent/10 text-foreground"
                      }`}
                    >
                      <NavLink to={item.url} className="flex items-center gap-3 px-3 py-2">
                        <item.icon className="h-5 w-5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">{item.title}</span>
                          <p className="text-xs opacity-75">{item.description}</p>
                        </div>
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>
      
      <SidebarFooter className="p-4 border-t border-border">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleLogout}
          className="w-full justify-start text-muted-foreground hover:text-destructive"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}