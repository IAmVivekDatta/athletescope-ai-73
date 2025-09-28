import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Trophy, 
  TrendingUp, 
  Target, 
  BarChart3,
  Users,
  Calendar,
  Award,
  Activity
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar
} from "recharts";

// Mock data for athlete benchmarking
const athleteData = {
  name: "Priya Sharma",
  id: "ATH001",
  sport: "Athletics", 
  specialization: "100m Sprint",
  currentPerformance: {
    time: "11.84s",
    ranking: 12,
    percentile: 88
  }
};

const radarData = [
  { subject: 'Speed', A: 88, benchmark: 85, fullMark: 100 },
  { subject: 'Acceleration', A: 92, benchmark: 80, fullMark: 100 },
  { subject: 'Technique', A: 85, benchmark: 75, fullMark: 100 },
  { subject: 'Consistency', A: 78, benchmark: 70, fullMark: 100 },
  { subject: 'Power', A: 90, benchmark: 82, fullMark: 100 },
  { subject: 'Endurance', A: 82, benchmark: 78, fullMark: 100 }
];

const progressData = [
  { date: 'Jan', performance: 12.1, benchmark: 12.0 },
  { date: 'Feb', performance: 12.0, benchmark: 12.0 },
  { date: 'Mar', performance: 11.95, benchmark: 12.0 },
  { date: 'Apr', performance: 11.89, benchmark: 12.0 },
  { date: 'May', performance: 11.84, benchmark: 12.0 },
];

const comparisonData = [
  { category: 'Regional (Maharashtra)', value: 85, color: '#10b981' },
  { category: 'National (India)', value: 68, color: '#f59e0b' },
  { category: 'International', value: 45, color: '#ef4444' },
  { category: 'Olympic Standard', value: 25, color: '#8b5cf6' }
];

const Benchmarking = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Performance Benchmarking</h1>
          <p className="text-muted-foreground mt-1">
            Compare athlete performance against standards and peers
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Export Analysis
          </Button>
          <Button className="bg-gradient-accent shadow-accent">
            Generate Report
          </Button>
        </div>
      </div>

      {/* Athlete Summary */}
      <Card className="shadow-lg border-border/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl text-primary">{athleteData.name}</CardTitle>
              <p className="text-muted-foreground">{athleteData.id} • {athleteData.sport} - {athleteData.specialization}</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold text-accent">{athleteData.currentPerformance.time}</p>
                <p className="text-xs text-muted-foreground">Personal Best</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">#{athleteData.currentPerformance.ranking}</p>
                <p className="text-xs text-muted-foreground">National Ranking</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-success">{athleteData.currentPerformance.percentile}th</p>
                <p className="text-xs text-muted-foreground">Percentile</p>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Performance Analysis Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart - Multi-dimensional Analysis */}
        <Card className="shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Performance Profile Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" className="text-xs" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} className="text-xs" />
                <Radar
                  name="Current Performance"
                  dataKey="A"
                  stroke="hsl(var(--primary))"
                  fill="hsl(var(--primary))"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Radar
                  name="SAI Benchmark"
                  dataKey="benchmark"
                  stroke="hsl(var(--accent))"
                  fill="hsl(var(--accent))"
                  fillOpacity={0.05}
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
            
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="text-center p-3 bg-success/10 rounded-lg">
                <Trophy className="h-5 w-5 mx-auto mb-1 text-success" />
                <p className="text-xs text-muted-foreground">Strengths</p>
                <p className="font-medium text-success">Speed, Power</p>
              </div>
              <div className="text-center p-3 bg-warning/10 rounded-lg">
                <Activity className="h-5 w-5 mx-auto mb-1 text-warning" />
                <p className="text-xs text-muted-foreground">Improvement</p>
                <p className="font-medium text-warning">Consistency</p>
              </div>
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <Award className="h-5 w-5 mx-auto mb-1 text-primary" />
                <p className="text-xs text-muted-foreground">Above Avg</p>
                <p className="font-medium text-primary">4/6 Areas</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Timeline */}
        <Card className="shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              Performance Progress Tracking
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis dataKey="date" />
                <YAxis domain={[11.5, 12.2]} />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="performance" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--primary))', strokeWidth: 2, r: 4 }}
                  name="Actual Performance (seconds)"
                />
                <Line 
                  type="monotone" 
                  dataKey="benchmark" 
                  stroke="hsl(var(--accent))" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  name="SAI Benchmark"
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-success/10 rounded-lg">
                <p className="text-lg font-bold text-success">-0.26s</p>
                <p className="text-xs text-muted-foreground">Improvement (5 months)</p>
              </div>
              <div className="text-center p-3 bg-primary/10 rounded-lg">
                <p className="text-lg font-bold text-primary">2.2%</p>
                <p className="text-xs text-muted-foreground">Performance Gain</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Comparative Benchmarking */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-md border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Comparative Performance Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {comparisonData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-foreground">{item.category}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">{item.value}th percentile</span>
                        <Badge 
                          className={
                            item.value >= 80 ? 'bg-success text-success-foreground' :
                            item.value >= 60 ? 'bg-warning text-warning-foreground' :
                            'bg-destructive text-destructive-foreground'
                          }
                        >
                          {item.value >= 80 ? 'Excellent' : item.value >= 60 ? 'Good' : 'Needs Focus'}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={item.value} className="h-2" />
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
                <h4 className="font-medium text-primary mb-2">Key Insights</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Strong regional performance - top 15% in Maharashtra</li>
                  <li>• National ranking places athlete in top third</li>
                  <li>• International standards require 0.5s improvement</li>
                  <li>• Olympic qualification needs significant advancement</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="text-lg">Action Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="p-3 bg-success/10 rounded-lg border border-success/30">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy className="h-4 w-4 text-success" />
                  <span className="font-medium text-success">Priority Focus</span>
                </div>
                <p className="text-sm text-foreground">Improve consistency in sprint starts and acceleration phase</p>
              </div>

              <div className="p-3 bg-warning/10 rounded-lg border border-warning/30">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-warning" />
                  <span className="font-medium text-warning">Training Goal</span>
                </div>
                <p className="text-sm text-foreground">Target 11.70s to reach top 10 national ranking</p>
              </div>

              <div className="p-3 bg-primary/10 rounded-lg border border-primary/30">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="font-medium text-primary">Timeline</span>
                </div>
                <p className="text-sm text-foreground">6-month intensive program recommended</p>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <Button className="w-full" variant="outline">
                Generate Training Plan
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Benchmarking;