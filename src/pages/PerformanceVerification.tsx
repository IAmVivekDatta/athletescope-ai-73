import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { 
  Play, 
  Pause, 
  CheckSquare, 
  X, 
  AlertTriangle,
  Eye,
  Calendar,
  MapPin,
  Timer,
  Target,
  Flag
} from "lucide-react";

const PerformanceVerification = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [feedback, setFeedback] = useState("");

  // Mock data for the assessment
  const assessment = {
    athlete: {
      name: "Priya Sharma",
      id: "ATH001",
      age: 19,
      sport: "Athletics",
      specialization: "100m Sprint"
    },
    submission: {
      date: "2024-01-15",
      time: "14:30",
      location: "SAI Training Center, Mumbai",
      exercise: "100m Sprint Time Trial",
      duration: "45 seconds"
    },
    aiAnalysis: {
      detectedTime: "11.84 seconds",
      confidence: 97.2,
      keyPoints: [
        { time: "0:02", description: "Start position verified", status: "pass" },
        { time: "0:08", description: "Peak speed achieved", status: "pass" },
        { time: "0:11", description: "Finish line crossed", status: "pass" }
      ],
      anomalies: [
        { type: "warning", message: "Slight wind assistance detected (0.8 m/s)" },
        { type: "info", message: "Camera angle optimal for analysis" }
      ],
      metrics: {
        avgSpeed: "9.7 m/s", 
        maxSpeed: "10.2 m/s",
        acceleration: "4.8 m/s²",
        technique: "Excellent"
      }
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Performance Verification</h1>
          <p className="text-muted-foreground mt-1">
            Review AI-analyzed performance submissions for accuracy
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="bg-warning/10 text-warning border-warning/30">
            <Timer className="w-3 h-3 mr-1" />
            23 Pending Reviews
          </Badge>
        </div>
      </div>

      {/* Main Verification Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player Section */}
        <div className="lg:col-span-2">
          <Card className="shadow-lg border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5 text-primary" />
                  Performance Video Analysis
                </CardTitle>
                <Badge className="bg-accent/10 text-accent border-accent/30">
                  AI Confidence: {assessment.aiAnalysis.confidence}%
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Video Player */}
              <div className="relative bg-black rounded-lg aspect-video flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-medium">100m Sprint Performance Video</p>
                    <p className="text-sm opacity-75">Duration: {assessment.submission.duration}</p>
                  </div>
                </div>
                
                {/* AI Overlay Indicators */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="bg-black/50 rounded px-2 py-1 text-white text-xs">
                    Speed: {assessment.aiAnalysis.metrics.maxSpeed}
                  </div>
                  <div className="bg-black/50 rounded px-2 py-1 text-white text-xs">
                    Time: {assessment.aiAnalysis.detectedTime}
                  </div>
                </div>
              </div>

              {/* Video Controls */}
              <div className="flex items-center gap-4">
                <Button 
                  size="sm" 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="bg-primary hover:bg-primary-dark"
                >
                  {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <div className="flex-1">
                  <Progress value={(currentTime / 45) * 100} className="h-2" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {currentTime}s / 45s
                </span>
              </div>

              {/* AI Analysis Timeline */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground">AI Detection Points</h4>
                {assessment.aiAnalysis.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-surface rounded-lg">
                    <div className="w-16 text-sm font-mono text-muted-foreground">
                      {point.time}
                    </div>
                    <div className="flex-1">
                      <span className="text-foreground">{point.description}</span>
                    </div>
                    <Badge className="bg-success/10 text-success border-success/30">
                      ✓ Pass
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Analysis Panel */}
        <div className="space-y-6">
          {/* Athlete Info */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Athlete Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="font-medium text-foreground">{assessment.athlete.name}</p>
                <p className="text-sm text-muted-foreground">{assessment.athlete.id} • Age {assessment.athlete.age}</p>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Target className="h-3 w-3" />
                {assessment.athlete.sport} - {assessment.athlete.specialization}
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <Calendar className="h-3 w-3" />
                {assessment.submission.date} at {assessment.submission.time}
              </div>
              <div className="flex items-center gap-1 text-muted-foreground text-sm">
                <MapPin className="h-3 w-3" />
                {assessment.submission.location}
              </div>
            </CardContent>
          </Card>

          {/* Performance Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Performance Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="text-2xl font-bold text-primary">{assessment.aiAnalysis.detectedTime}</p>
                  <p className="text-xs text-muted-foreground">Sprint Time</p>
                </div>
                <div className="text-center p-3 bg-accent/5 rounded-lg border border-accent/20">
                  <p className="text-2xl font-bold text-accent">{assessment.aiAnalysis.metrics.maxSpeed}</p>
                  <p className="text-xs text-muted-foreground">Max Speed</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Avg Speed:</span>
                  <span className="text-sm font-medium">{assessment.aiAnalysis.metrics.avgSpeed}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Acceleration:</span>
                  <span className="text-sm font-medium">{assessment.aiAnalysis.metrics.acceleration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Technique:</span>
                  <span className="text-sm font-medium text-success">{assessment.aiAnalysis.metrics.technique}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Anomaly Detection */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Flag className="h-4 w-4 text-warning" />
                Detection Alerts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {assessment.aiAnalysis.anomalies.map((anomaly, index) => (
                <div key={index} className={`flex items-start gap-3 p-3 rounded-lg ${
                  anomaly.type === 'warning' ? 'bg-warning/10 border border-warning/30' : 'bg-blue-50 border border-blue-200'
                }`}>
                  {anomaly.type === 'warning' ? (
                    <AlertTriangle className="h-4 w-4 text-warning flex-shrink-0 mt-0.5" />
                  ) : (
                    <Eye className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="text-sm text-foreground">{anomaly.message}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Verification Actions */}
      <Card className="shadow-lg border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckSquare className="h-5 w-5 text-primary" />
            Official Verification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Official Comments & Feedback
            </label>
            <Textarea
              placeholder="Add your official review comments, observations, or notes about this performance submission..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-20"
            />
          </div>
          
          <div className="flex items-center gap-4 pt-4">
            <Button className="bg-success hover:bg-success-light text-white flex items-center gap-2">
              <CheckSquare className="h-4 w-4" />
              Approve Performance
            </Button>
            <Button variant="destructive" className="flex items-center gap-2">
              <X className="h-4 w-4" />
              Reject Submission
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              Request Re-submission
            </Button>
            <Button variant="ghost">
              Save as Draft
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PerformanceVerification;