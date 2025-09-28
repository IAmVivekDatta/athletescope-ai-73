import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  MoreHorizontal,
  MapPin,
  Calendar,
  Trophy
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const athletes = [
  {
    id: "ATH001",
    name: "Priya Sharma",
    age: 19,
    sport: "Athletics",
    specialization: "100m Sprint",
    location: "Mumbai, Maharashtra",
    lastAssessment: "2024-01-15",
    status: "active",
    performance: 92,
    assessments: 12
  },
  {
    id: "ATH002", 
    name: "Rahul Kumar",
    age: 21,
    sport: "Swimming", 
    specialization: "Freestyle",
    location: "Delhi, NCT",
    lastAssessment: "2024-01-14",
    status: "pending",
    performance: 87,
    assessments: 8
  },
  {
    id: "ATH003",
    name: "Anjali Patel",
    age: 18,
    sport: "Gymnastics",
    specialization: "Artistic",
    location: "Ahmedabad, Gujarat", 
    lastAssessment: "2024-01-13",
    status: "active",
    performance: 95,
    assessments: 15
  },
  {
    id: "ATH004",
    name: "Vikram Singh", 
    age: 22,
    sport: "Wrestling",
    specialization: "Freestyle 74kg",
    location: "Chandigarh, Punjab",
    lastAssessment: "2024-01-12",
    status: "review",
    performance: 89,
    assessments: 10
  },
  {
    id: "ATH005",
    name: "Sneha Reddy",
    age: 20,
    sport: "Badminton", 
    specialization: "Singles",
    location: "Hyderabad, Telangana",
    lastAssessment: "2024-01-11",
    status: "active",
    performance: 91,
    assessments: 14
  }
];

const AthleteManagement = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredAthletes = athletes.filter(athlete => {
    const matchesSearch = athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         athlete.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         athlete.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === "all" || athlete.sport === selectedSport;
    const matchesStatus = selectedStatus === "all" || athlete.status === selectedStatus;
    
    return matchesSearch && matchesSport && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-success text-success-foreground">Active</Badge>;
      case "pending":
        return <Badge className="bg-warning text-warning-foreground">Pending</Badge>;
      case "review":
        return <Badge className="bg-accent text-accent-foreground">Review</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const getPerformanceColor = (performance: number) => {
    if (performance >= 90) return "text-success";
    if (performance >= 80) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Athlete Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage and monitor athlete profiles and performance data
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Data
          </Button>
          <Button className="bg-gradient-primary shadow-primary">
            Add New Athlete
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Athletes</p>
                <p className="text-2xl font-bold text-primary">2,847</p>
              </div>
              <Trophy className="h-8 w-8 text-primary opacity-20" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Athletes</p>
                <p className="text-2xl font-bold text-success">2,156</p>
              </div>
              <Badge className="bg-success/10 text-success border-success/20">76%</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Review</p>
                <p className="text-2xl font-bold text-warning">423</p>
              </div>
              <Badge className="bg-warning/10 text-warning border-warning/20">15%</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Top Performers</p>
                <p className="text-2xl font-bold text-accent">268</p>
              </div>
              <Badge className="bg-accent/10 text-accent border-accent/20">9%</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Search & Filter Athletes
          </CardTitle>
          <CardDescription>
            Use filters to find specific athletes and their performance data
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Search by name, ID, or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={selectedSport} onValueChange={setSelectedSport}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="Athletics">Athletics</SelectItem>
                <SelectItem value="Swimming">Swimming</SelectItem>
                <SelectItem value="Gymnastics">Gymnastics</SelectItem>
                <SelectItem value="Wrestling">Wrestling</SelectItem>
                <SelectItem value="Badminton">Badminton</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="review">Review</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Athletes Table */}
      <Card>
        <CardHeader>
          <CardTitle>Athletes Directory</CardTitle>
          <CardDescription>
            Showing {filteredAthletes.length} athletes matching your criteria
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Athlete</TableHead>
                <TableHead>Sport & Specialization</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Performance Score</TableHead>
                <TableHead>Last Assessment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAthletes.map((athlete) => (
                <TableRow key={athlete.id} className="hover:bg-surface transition-colors">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/athletes/${athlete.id}.jpg`} />
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {athlete.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-foreground">{athlete.name}</p>
                        <p className="text-sm text-muted-foreground">{athlete.id} • Age {athlete.age}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <p className="font-medium text-foreground">{athlete.sport}</p>
                      <p className="text-sm text-muted-foreground">{athlete.specialization}</p>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      <span className="text-sm">{athlete.location}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${getPerformanceColor(athlete.performance)}`}>
                        {athlete.performance}%
                      </span>
                      <span className="text-xs text-muted-foreground">
                        ({athlete.assessments} tests)
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span className="text-sm">{athlete.lastAssessment}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    {getStatusBadge(athlete.status)}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm" className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        View
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Edit Profile</DropdownMenuItem>
                          <DropdownMenuItem>View Assessments</DropdownMenuItem>
                          <DropdownMenuItem>Generate Report</DropdownMenuItem>
                          <DropdownMenuItem className="text-destructive">
                            Archive Athlete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AthleteManagement;