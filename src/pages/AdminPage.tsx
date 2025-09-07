import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Building, 
  FileX, 
  CheckCircle, 
  XCircle 
} from "lucide-react";

const AdminPage = () => {
  const [fraudAlerts] = useState([
    {
      id: 1,
      message: "3 new forged certificates detected today from Northern Region",
      severity: "high",
      timestamp: "2024-01-15 14:30"
    },
    {
      id: 2,
      message: "Unusual verification pattern detected from TechCorp Industries",
      severity: "medium", 
      timestamp: "2024-01-15 12:15"
    }
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">Higher Education Department - Certificate Verification System</p>
        </div>

        {/* AI Fraud Alerts */}
        <div className="mb-8 space-y-4">
          <h2 className="text-xl font-semibold flex items-center">
            <AlertTriangle className="h-5 w-5 mr-2 text-warning" />
            AI Fraud Alerts
          </h2>
          {fraudAlerts.map((alert) => (
            <Alert key={alert.id} className={alert.severity === "high" ? "border-destructive" : "border-warning"}>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <div className="flex justify-between items-start">
                  <span>{alert.message}</span>
                  <div className="text-right">
                    <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                    <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          ))}
        </div>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">24,567</p>
                  <p className="text-sm text-muted-foreground">Authentic Certificates</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <XCircle className="h-8 w-8 text-destructive" />
                <div>
                  <p className="text-2xl font-bold">127</p>
                  <p className="text-sm text-muted-foreground">Fake Certificates</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Building className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">89</p>
                  <p className="text-sm text-muted-foreground">Registered Institutions</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">99.5%</p>
                  <p className="text-sm text-muted-foreground">Detection Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="analytics" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="fraud">Fraud Detection</TabsTrigger>
            <TabsTrigger value="blacklist">Blacklist</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Regional Verification Trends</CardTitle>
                  <CardDescription>Certificate verification by region</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Northern Region</span>
                      <span className="font-medium">45% (11,234)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "45%" }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Southern Region</span>
                      <span className="font-medium">32% (7,981)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "32%" }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Eastern Region</span>
                      <span className="font-medium">23% (5,743)</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: "23%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Fraud Detection by Institution Type</CardTitle>
                  <CardDescription>Fraudulent certificates by institution category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-destructive/10 rounded-lg">
                      <div>
                        <p className="font-medium">Private Colleges</p>
                        <p className="text-sm text-muted-foreground">67 fake certificates</p>
                      </div>
                      <Badge variant="destructive">High Risk</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
                      <div>
                        <p className="font-medium">Online Universities</p>
                        <p className="text-sm text-muted-foreground">34 fake certificates</p>
                      </div>
                      <Badge variant="secondary">Medium Risk</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
                      <div>
                        <p className="font-medium">Government Institutions</p>
                        <p className="text-sm text-muted-foreground">3 fake certificates</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Low Risk</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="fraud" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Fraud Detection</CardTitle>
                <CardDescription>Latest fraudulent certificates detected by the AI system</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <FileX className="h-8 w-8 text-destructive" />
                      <div>
                        <p className="font-medium">Certificate ID: ABC-2024-001</p>
                        <p className="text-sm text-muted-foreground">Fake seal detected - Digital Arts College</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">FAKE</Badge>
                      <p className="text-xs text-muted-foreground mt-1">2024-01-15 14:30</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-destructive/20 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <FileX className="h-8 w-8 text-destructive" />
                      <div>
                        <p className="font-medium">Certificate ID: XYZ-2024-089</p>
                        <p className="text-sm text-muted-foreground">Tampered grades - Tech Institute</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="destructive">FAKE</Badge>
                      <p className="text-xs text-muted-foreground mt-1">2024-01-15 12:15</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-warning/20 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <AlertTriangle className="h-8 w-8 text-warning" />
                      <div>
                        <p className="font-medium">Certificate ID: PQR-2024-156</p>
                        <p className="text-sm text-muted-foreground">Suspicious format - Global University</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">REVIEW</Badge>
                      <p className="text-xs text-muted-foreground mt-1">2024-01-15 11:45</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blacklist" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Blacklisted Certificate IDs</CardTitle>
                <CardDescription>Known fraudulent certificate identifiers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-mono text-sm">ABC-2024-001</span>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-mono text-sm">XYZ-2024-089</span>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                    <span className="font-mono text-sm">DEF-2023-234</span>
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Add to Blacklist
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Institution Access</CardTitle>
                  <CardDescription>Manage institutional user accounts</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Tech University</p>
                        <p className="text-sm text-muted-foreground">admin@techuni.edu</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">State College</p>
                        <p className="text-sm text-muted-foreground">registrar@statecollege.edu</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Digital Arts Institute</p>
                        <p className="text-sm text-muted-foreground">admin@dai.edu</p>
                      </div>
                      <Badge variant="secondary">Suspended</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Employer Access</CardTitle>
                  <CardDescription>Companies with verification access</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">TechCorp Industries</p>
                        <p className="text-sm text-muted-foreground">hr@techcorp.com</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">Global Solutions</p>
                        <p className="text-sm text-muted-foreground">recruitment@globalsol.com</p>
                      </div>
                      <Badge className="bg-success text-success-foreground">Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminPage;