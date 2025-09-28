import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  CheckSquare, 
  Trophy, 
  TrendingUp, 
  Activity,
  Target,
  Award,
  Timer,
  Download,
  Loader2
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line
} from "recharts";

const performanceData = [
  { month: "Jan", assessments: 245, athletes: 180 },
  { month: "Feb", assessments: 312, athletes: 220 },
  { month: "Mar", assessments: 189, athletes: 150 },
  { month: "Apr", assessments: 278, athletes: 200 },
  { month: "May", assessments: 356, athletes: 280 },
  { month: "Jun", assessments: 423, athletes: 320 }
];

const sportDistribution = [
  { name: "Athletics", value: 35, color: "#1f2937" },
  { name: "Swimming", value: 20, color: "#f97316" },
  { name: "Gymnastics", value: 15, color: "#10b981" },
  { name: "Wrestling", value: 18, color: "#8b5cf6" },
  { name: "Other", value: 12, color: "#06b6d4" }
];

const Dashboard = () => {
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);
  const { toast } = useToast();

  const generateReport = async () => {
    setIsGeneratingReport(true);
    
    try {
      // Simulate report generation process
      toast({
        title: "Generating Report",
        description: "Please wait while we compile your performance analytics...",
      });

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Create mock report data
      const reportData = {
        totalAthletes: 2847,
        totalAssessments: 1423,
        topPerformers: 156,
        aiAccuracy: 97.8,
        performanceData,
        sportDistribution,
        generatedAt: new Date().toISOString(),
        reportType: "Monthly Performance Analytics"
      };

      // Convert to downloadable format
      const reportBlob = new Blob([JSON.stringify(reportData, null, 2)], {
        type: 'application/json'
      });
      
      // Create download link
      const url = URL.createObjectURL(reportBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `SAI-Performance-Report-${new Date().toISOString().split('T')[0]}.json`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast({
        title: "Report Generated Successfully",
        description: "Your performance analytics report has been downloaded.",
      });

    } catch (error) {
      toast({
        title: "Report Generation Failed",
        description: "There was an error generating your report. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGeneratingReport(false);
    }
  };
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Performance Dashboard</h1>
          <p className="text-muted-foreground mt-1">
            Real-time analytics and athlete performance insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-success-muted text-success border-success/30">
            <Activity className="w-3 h-3 mr-1" />
            System Online
          </Badge>
          <Button 
            className="bg-gradient-accent shadow-accent" 
            onClick={generateReport}
            disabled={isGeneratingReport}
          >
            {isGeneratingReport ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                Generate Report
              </>
            )}
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-to-br from-primary to-primary-light text-white shadow-primary border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Total Athletes</CardTitle>
            <Users className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">2,847</div>
            <div className="flex items-center text-xs opacity-80">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent to-accent-light text-white shadow-accent border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Assessments</CardTitle>
            <CheckSquare className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">1,423</div>
            <div className="flex items-center text-xs opacity-80">
              <Timer className="h-3 w-3 mr-1" />
              423 this month
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-success to-success-light text-white border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">Top Performers</CardTitle>
            <Trophy className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">156</div>
            <div className="flex items-center text-xs opacity-80">
              <Award className="h-3 w-3 mr-1" />
              Above benchmarks
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-chart-4 to-purple-600 text-white border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium opacity-90">AI Accuracy</CardTitle>
            <Target className="h-5 w-5 opacity-80" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold mb-1">97.8%</div>
            <div className="flex items-center text-xs opacity-80">
              <Activity className="h-3 w-3 mr-1" />
              Verification rate
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Performance Trends */}
        <Card className="shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <BarChart className="h-5 w-5" />
              Assessment Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="assessments" fill="hsl(var(--primary))" name="Assessments" radius={[2, 2, 0, 0]} />
                <Bar dataKey="athletes" fill="hsl(var(--accent))" name="Athletes" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Sport Distribution */}
        <Card className="shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Sport Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={sportDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sportDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity & Quick Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { athlete: "Priya Sharma", action: "Completed 100m Sprint Assessment", time: "2 minutes ago", status: "verified" },
              { athlete: "Rahul Kumar", action: "Submitted High Jump Video", time: "15 minutes ago", status: "pending" },
              { athlete: "Anjali Patel", action: "Long Jump - Benchmark Achieved", time: "1 hour ago", status: "approved" },
              { athlete: "Vikram Singh", action: "Weightlifting Assessment Review", time: "2 hours ago", status: "flagged" }
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-surface rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{activity.athlete}</p>
                  <p className="text-sm text-muted-foreground">{activity.action}</p>
                </div>
                <div className="text-right">
                  <Badge 
                    variant={activity.status === 'verified' ? 'default' : 
                            activity.status === 'approved' ? 'default' :
                            activity.status === 'pending' ? 'secondary' : 'destructive'}
                    className={
                      activity.status === 'verified' ? 'bg-success text-success-foreground' :
                      activity.status === 'approved' ? 'bg-primary text-primary-foreground' :
                      activity.status === 'pending' ? 'bg-warning text-warning-foreground' :
                      'bg-destructive text-destructive-foreground'
                    }
                  >
                    {activity.status}
                  </Badge>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="text-primary flex items-center gap-2">
              <Target className="h-5 w-5" />
              Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">AI Verification Rate</span>
                <span className="font-medium text-foreground">97.8%</span>
              </div>
              <Progress value={97.8} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Processing Speed</span>
                <span className="font-medium text-foreground">94.2%</span>
              </div>
              <Progress value={94.2} className="h-2" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">System Uptime</span>
                <span className="font-medium text-foreground">99.9%</span>
              </div>
              <Progress value={99.9} className="h-2" />
            </div>

            <div className="pt-4 border-t border-border">
              <Button className="w-full" variant="outline">
                View Detailed Analytics
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;