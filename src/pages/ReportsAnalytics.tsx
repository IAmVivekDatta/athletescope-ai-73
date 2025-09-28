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
  FileText, 
  Download, 
  Calendar,
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  Users,
  Clock,
  Eye
} from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const ReportsAnalytics = () => {
  const [reportType, setReportType] = useState("");
  const [dateRange, setDateRange] = useState("");
  const [selectedSports, setSelectedSports] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);

  const reportHistory = [
    {
      id: "RPT001",
      name: "Monthly Performance Summary - Athletics",
      type: "Performance Report",
      dateGenerated: "2024-01-15",
      size: "2.4 MB",
      status: "completed"
    },
    {
      id: "RPT002", 
      name: "Regional Talent Analysis - West Zone",
      type: "Analytics Report",
      dateGenerated: "2024-01-10",
      size: "1.8 MB",
      status: "completed"
    },
    {
      id: "RPT003",
      name: "AI System Performance Metrics",
      type: "System Report", 
      dateGenerated: "2024-01-08",
      size: "945 KB",
      status: "completed"
    },
    {
      id: "RPT004",
      name: "Quarterly Benchmarking Analysis",
      type: "Benchmark Report",
      dateGenerated: "2024-01-05",
      size: "3.1 MB", 
      status: "processing"
    }
  ];

  const quickStats = [
    { label: "Total Reports Generated", value: "1,247", icon: FileText, color: "text-primary" },
    { label: "Active Analytics", value: "23", icon: BarChart3, color: "text-accent" },
    { label: "Data Points Analyzed", value: "58.7K", icon: TrendingUp, color: "text-success" },
    { label: "Export Downloads", value: "432", icon: Download, color: "text-warning" }
  ];

  const availableReports = [
    {
      title: "Performance Summary Report",
      description: "Comprehensive athlete performance analysis with trends and insights",
      estimatedTime: "3-5 minutes"
    },
    {
      title: "Talent Identification Report", 
      description: "Regional and sport-wise talent distribution and potential analysis",
      estimatedTime: "5-8 minutes"
    },
    {
      title: "Benchmarking Analysis",
      description: "Comparative performance against national and international standards",
      estimatedTime: "4-6 minutes"
    },
    {
      title: "AI System Analytics",
      description: "AI model performance, accuracy metrics, and system utilization",
      estimatedTime: "2-3 minutes"
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-1">
            Generate comprehensive reports and analyze performance data
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Schedule Report
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                </div>
                <stat.icon className={`h-8 w-8 ${stat.color} opacity-20`} />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Report Builder */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-primary" />
                Custom Report Builder
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Report Type Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableReports.map((report, index) => (
                  <div 
                    key={index}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      reportType === report.title 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setReportType(report.title)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground">{report.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {report.estimatedTime}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                  </div>
                ))}
              </div>

              {/* Filters */}
              <div className="space-y-4 p-4 bg-surface rounded-lg border border-border">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Report Filters
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date Range */}
                  <div className="space-y-2">
                    <Label>Date Range</Label>
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                        <SelectItem value="last-3-months">Last 3 Months</SelectItem>
                        <SelectItem value="last-6-months">Last 6 Months</SelectItem>
                        <SelectItem value="last-year">Last Year</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Region Selection */}
                  <div className="space-y-2">
                    <Label>Regions</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select regions" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Regions</SelectItem>
                        <SelectItem value="north">North Zone</SelectItem>
                        <SelectItem value="south">South Zone</SelectItem>
                        <SelectItem value="east">East Zone</SelectItem>
                        <SelectItem value="west">West Zone</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Sports Selection */}
                <div className="space-y-2">
                  <Label>Sports Categories</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['Athletics', 'Swimming', 'Gymnastics', 'Wrestling', 'Badminton', 'Boxing'].map((sport) => (
                      <div key={sport} className="flex items-center space-x-2">
                        <Checkbox 
                          id={sport}
                          checked={selectedSports.includes(sport)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedSports([...selectedSports, sport]);
                            } else {
                              setSelectedSports(selectedSports.filter(s => s !== sport));
                            }
                          }}
                        />
                        <Label htmlFor={sport} className="text-sm">{sport}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Generate Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Button className="bg-gradient-primary shadow-primary flex items-center gap-2">
                  <BarChart3 className="h-4 w-4" />
                  Generate Report
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Preview
                </Button>
                <Button variant="ghost">
                  Save Template
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Report History */}
        <Card className="shadow-md border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Reports
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {reportHistory.map((report, index) => (
              <div key={index} className="p-3 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground text-sm">{report.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{report.type}</p>
                  </div>
                  <Badge 
                    className={
                      report.status === 'completed' 
                        ? 'bg-success/10 text-success border-success/30' 
                        : 'bg-warning/10 text-warning border-warning/30'
                    }
                  >
                    {report.status}
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{report.dateGenerated}</span>
                  <span>{report.size}</span>
                </div>
                {report.status === 'completed' && (
                  <div className="flex items-center gap-2 mt-3">
                    <Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
                      <Eye className="h-3 w-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="ghost" className="h-7 px-2 text-xs">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-border">
              <Button variant="outline" className="w-full text-sm">
                View All Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analytics Dashboard Preview */}
      <Card className="shadow-md border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary" />
            Analytics Dashboard Preview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-surface rounded-lg">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <p className="text-2xl font-bold text-primary">2,847</p>
              <p className="text-sm text-muted-foreground">Total Athletes Analyzed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-accent" />
              </div>
              <p className="text-2xl font-bold text-accent">89.7%</p>
              <p className="text-sm text-muted-foreground">Performance Improvement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="h-8 w-8 text-success" />
              </div>
              <p className="text-2xl font-bold text-success">1,423</p>
              <p className="text-sm text-muted-foreground">Reports Generated</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportsAnalytics;