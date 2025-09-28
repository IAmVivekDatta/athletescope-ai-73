import { useState, useRef, useEffect } from "react";
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
  Flag,
  Cpu,
  Activity,
  Zap,
  Brain,
  Radar
} from "lucide-react";

const PerformanceVerification = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [aiProcessing, setAiProcessing] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simulate AI processing completion
    const timer = setTimeout(() => setAiProcessing(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Mock data for the assessment - Women Athlete Training Analysis
  const assessment = {
    athlete: {
      name: "Anjali Patel",
      id: "ATH102",
      age: 21,
      sport: "Track & Field",
      specialization: "400m Sprint & Long Jump"
    },
    submission: {
      date: "2024-01-20",
      time: "16:45",
      location: "SAI National Training Center, Delhi",
      exercise: "400m Sprint Training Session",
      duration: "62 seconds"
    },
    aiAnalysis: {
      detectedTime: "54.23 seconds",
      confidence: 94.8,
      processingStatus: "Complete",
      keyPoints: [
        { time: "0:05", description: "Starting block exit analyzed", status: "excellent", aiScore: 9.2 },
        { time: "0:15", description: "First curve technique assessment", status: "good", aiScore: 8.7 },
        { time: "0:30", description: "Stride frequency optimization detected", status: "excellent", aiScore: 9.5 },
        { time: "0:45", description: "Final sprint acceleration phase", status: "good", aiScore: 8.9 },
        { time: "0:54", description: "Finish line crossed with optimal form", status: "excellent", aiScore: 9.3 }
      ],
      anomalies: [
        { type: "info", message: "Optimal lighting conditions for motion capture" },
        { type: "warning", message: "Minor form inconsistency at 30-second mark" },
        { type: "success", message: "Superior breathing technique throughout race" }
      ],
      metrics: {
        avgSpeed: "7.4 m/s", 
        maxSpeed: "8.9 m/s",
        acceleration: "3.2 m/s²",
        technique: "Superior",
        formConsistency: "92%",
        energyEfficiency: "88%"
      },
      biomechanics: {
        strideLength: "2.1m",
        strideFrequency: "4.2 steps/sec",
        groundContactTime: "0.18s",
        verticalOscillation: "7.2cm"
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
              {/* AI Video Analysis Player */}
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg aspect-video flex items-center justify-center overflow-hidden group">
                {aiProcessing ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center animate-pulse">
                    <div className="text-center text-white">
                      <Brain className="h-16 w-16 mx-auto mb-4 animate-spin text-blue-400" />
                      <p className="text-lg font-medium">AI Analysis in Progress...</p>
                      <p className="text-sm opacity-75">Processing women athlete training data</p>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Training Video Simulation */}
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop&crop=center"
                      controls={false}
                    >
                      <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    </video>
                    
                    {/* AI Overlay with Motion Tracking */}
                    <div className="absolute inset-0 pointer-events-none">
                      {/* Motion tracking points */}
                      <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      
                      {/* AI Analysis Overlay */}
                      <div className="absolute top-4 right-4 bg-black/70 rounded-lg p-3 text-white text-xs space-y-1">
                        <div className="flex items-center gap-2">
                          <Cpu className="h-3 w-3 text-blue-400" />
                          <span>AI Vision: Active</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Activity className="h-3 w-3 text-green-400" />
                          <span>Motion Tracking: ON</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Zap className="h-3 w-3 text-yellow-400" />
                          <span>Form Analysis: Real-time</span>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                
                {/* Enhanced AI Metrics Overlay */}
                <div className="absolute top-4 left-4 space-y-2">
                  <div className="bg-black/70 rounded-lg px-3 py-2 text-white text-xs backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Radar className="h-3 w-3 text-cyan-400" />
                      <span className="font-medium">Live Analysis</span>
                    </div>
                    <div className="space-y-1">
                      <div>Speed: {assessment.aiAnalysis.metrics.maxSpeed}</div>
                      <div>Form: {assessment.aiAnalysis.metrics.formConsistency}</div>
                      <div>Time: {assessment.aiAnalysis.detectedTime}</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-blue-500/80 to-purple-500/80 rounded px-2 py-1 text-white text-xs">
                    AI Confidence: {assessment.aiAnalysis.confidence}%
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
                  <Progress value={(currentTime / 62) * 100} className="h-2" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {currentTime}s / 62s
                </span>
              </div>

              {/* Enhanced AI Analysis Timeline */}
              <div className="space-y-3">
                <h4 className="font-medium text-foreground flex items-center gap-2">
                  <Brain className="h-4 w-4 text-blue-500" />
                  AI Performance Analysis Points
                </h4>
                {assessment.aiAnalysis.keyPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-blue-900 rounded-lg border border-blue-200 dark:border-blue-700 hover-scale">
                    <div className="w-16 text-sm font-mono text-blue-600 dark:text-blue-400 font-medium">
                      {point.time}
                    </div>
                    <div className="flex-1">
                      <span className="text-foreground font-medium">{point.description}</span>
                      <div className="text-xs text-muted-foreground mt-1">
                        AI Score: {point.aiScore}/10
                      </div>
                    </div>
                    <Badge className={`${
                      point.status === 'excellent' ? 'bg-green-100 text-green-800 border-green-300' :
                      point.status === 'good' ? 'bg-blue-100 text-blue-800 border-blue-300' :
                      'bg-yellow-100 text-yellow-800 border-yellow-300'
                    }`}>
                      {point.status === 'excellent' ? '⭐ Excellent' : 
                       point.status === 'good' ? '✓ Good' : '⚡ Needs Work'}
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