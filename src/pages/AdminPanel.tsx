import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  Users, 
  Settings, 
  Activity,
  Server,
  Database,
  AlertTriangle,
  CheckCircle,
  Plus,
  Edit,
  Trash2,
  Key,
  Monitor
} from "lucide-react";
import { Switch } from "@/components/ui/switch";

const officials = [
  {
    id: "OFF001",
    name: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@sai.gov.in",
    role: "Senior Coach",
    department: "Athletics",
    lastActive: "2024-01-15 14:30",
    status: "active",
    permissions: ["view", "verify", "report"]
  },
  {
    id: "OFF002", 
    name: "Ms. Priya Singh",
    email: "priya.singh@sai.gov.in",
    role: "Performance Analyst",
    department: "Swimming",
    lastActive: "2024-01-15 12:45",
    status: "active",
    permissions: ["view", "analyze", "report"]
  },
  {
    id: "OFF003",
    name: "Mr. Arjun Mehta",
    email: "arjun.mehta@sai.gov.in",
    role: "Regional Coordinator", 
    department: "Multi-Sport",
    lastActive: "2024-01-14 16:20",
    status: "inactive",
    permissions: ["view", "manage", "admin"]
  }
];

const systemMetrics = {
  serverHealth: 99.2,
  databaseLoad: 67,
  aiProcessing: 89,
  storageUsed: 73,
  apiLatency: 145,
  activeUsers: 23,
  totalRequests: 15847,
  errorRate: 0.3
};

const AdminPanel = () => {
  const [selectedOfficial, setSelectedOfficial] = useState("");
  const [newOfficialName, setNewOfficialName] = useState("");
  const [newOfficialEmail, setNewOfficialEmail] = useState("");

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case "inactive":
        return <Badge className="bg-muted text-muted-foreground">Inactive</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getHealthColor = (value: number) => {
    if (value >= 95) return "text-success";
    if (value >= 80) return "text-warning"; 
    return "text-destructive";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">System Administration</h1>
          <p className="text-muted-foreground mt-1">
            Manage users, monitor system health, and configure platform settings
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-success/10 text-success border-success/30">
            <Activity className="w-3 h-3 mr-1" />
            All Systems Operational
          </Badge>
        </div>
      </div>

      {/* System Health Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                <span className="font-medium text-foreground">Server Health</span>
              </div>
              <CheckCircle className="h-5 w-5 text-success" />
            </div>
            <div className="space-y-2">
              <p className={`text-2xl font-bold ${getHealthColor(systemMetrics.serverHealth)}`}>
                {systemMetrics.serverHealth}%
              </p>
              <Progress value={systemMetrics.serverHealth} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Database className="h-5 w-5 text-accent" />
                <span className="font-medium text-foreground">DB Load</span>
              </div>
              <span className="text-xs text-muted-foreground">Normal</span>
            </div>
            <div className="space-y-2">
              <p className={`text-2xl font-bold ${getHealthColor(100 - systemMetrics.databaseLoad)}`}>
                {systemMetrics.databaseLoad}%
              </p>
              <Progress value={systemMetrics.databaseLoad} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Monitor className="h-5 w-5 text-warning" />
                <span className="font-medium text-foreground">AI Processing</span>
              </div>
              <span className="text-xs text-muted-foreground">High Load</span>
            </div>
            <div className="space-y-2">
              <p className={`text-2xl font-bold ${getHealthColor(systemMetrics.aiProcessing)}`}>
                {systemMetrics.aiProcessing}%
              </p>
              <Progress value={systemMetrics.aiProcessing} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-success" />
                <span className="font-medium text-foreground">Active Users</span>
              </div>
              <span className="text-xs text-muted-foreground">Real-time</span>
            </div>
            <div className="space-y-2">
              <p className="text-2xl font-bold text-success">{systemMetrics.activeUsers}</p>
              <p className="text-xs text-muted-foreground">
                {systemMetrics.totalRequests.toLocaleString()} requests today
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Management & System Settings */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  User Management
                </CardTitle>
                <Button className="bg-gradient-primary shadow-primary flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Official
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add New Official Form */}
                <div className="p-4 bg-surface rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-3">Add New Official</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input 
                        id="name"
                        placeholder="Enter full name"
                        value={newOfficialName}
                        onChange={(e) => setNewOfficialName(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input 
                        id="email" 
                        type="email"
                        placeholder="official@sai.gov.in"
                        value={newOfficialEmail}
                        onChange={(e) => setNewOfficialEmail(e.target.value)}
                      />
                    </div>
                    <div>
                      <Label>Role</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="coach">Senior Coach</SelectItem>
                          <SelectItem value="analyst">Performance Analyst</SelectItem>
                          <SelectItem value="coordinator">Regional Coordinator</SelectItem>
                          <SelectItem value="admin">System Administrator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="athletics">Athletics</SelectItem>
                          <SelectItem value="swimming">Swimming</SelectItem>
                          <SelectItem value="gymnastics">Gymnastics</SelectItem>
                          <SelectItem value="multi-sport">Multi-Sport</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <Button size="sm">Create Account</Button>
                    <Button size="sm" variant="outline">Send Invitation</Button>
                  </div>
                </div>

                {/* Officials Table */}
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Official</TableHead>
                      <TableHead>Role & Department</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {officials.map((official) => (
                      <TableRow key={official.id} className="hover:bg-surface transition-colors">
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                {official.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-foreground text-sm">{official.name}</p>
                              <p className="text-xs text-muted-foreground">{official.email}</p>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="font-medium text-foreground text-sm">{official.role}</p>
                            <p className="text-xs text-muted-foreground">{official.department}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-muted-foreground">{official.lastActive}</span>
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(official.status)}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-1">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Key className="h-3 w-3" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-destructive">
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Configuration */}
        <Card className="shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              System Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Performance Settings */}
            <div className="space-y-4">
              <h4 className="font-medium text-foreground">Performance Settings</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">AI Auto-Verification</p>
                    <p className="text-xs text-muted-foreground">Automatically approve high confidence assessments</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Real-time Notifications</p>
                    <p className="text-xs text-muted-foreground">Push alerts for critical events</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Data Backup</p>
                    <p className="text-xs text-muted-foreground">Automatic daily backups</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground">System Status</h4>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">API Latency</span>
                  <span className="text-sm font-medium text-success">{systemMetrics.apiLatency}ms</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Error Rate</span>
                  <span className="text-sm font-medium text-success">{systemMetrics.errorRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Storage Used</span>
                  <span className="text-sm font-medium text-warning">{systemMetrics.storageUsed}%</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4 pt-4 border-t border-border">
              <h4 className="font-medium text-foreground">Quick Actions</h4>
              
              <div className="space-y-2">
                <Button variant="outline" className="w-full justify-start text-sm h-8">
                  <Database className="h-3 w-3 mr-2" />
                  Export System Logs
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm h-8">
                  <Shield className="h-3 w-3 mr-2" />
                  Security Audit
                </Button>
                <Button variant="outline" className="w-full justify-start text-sm h-8">
                  <AlertTriangle className="h-3 w-3 mr-2" />
                  System Maintenance
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;