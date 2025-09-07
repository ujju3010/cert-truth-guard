import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, Shield, BarChart3, Users, Award } from "lucide-react";

const InstitutionPage = () => {
  const [certificateCount, setCertificateCount] = useState(1247);
  const [verificationRequests, setVerificationRequests] = useState(89);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Institution Dashboard</h1>
          <p className="text-muted-foreground">Manage certificates and track verification activities</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{certificateCount}</p>
                  <p className="text-sm text-muted-foreground">Certificates Issued</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">{verificationRequests}</p>
                  <p className="text-sm text-muted-foreground">Verifications Today</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">98.5%</p>
                  <p className="text-sm text-muted-foreground">Success Rate</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-warning" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="upload" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="upload">Bulk Upload</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain Registry</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="upload" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Bulk Certificate Upload</CardTitle>
                <CardDescription>
                  Upload multiple certificates using CSV or Excel format
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="upload-zone p-8 text-center">
                  <Upload className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium mb-2">Upload Certificate Data</p>
                  <p className="text-sm text-muted-foreground mb-4">
                    Supports CSV and Excel files with certificate information
                  </p>
                  <Button variant="verify">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="batch-name">Batch Name</Label>
                    <Input id="batch-name" placeholder="e.g., Computer Science 2024" />
                  </div>
                  <div>
                    <Label htmlFor="issue-date">Issue Date</Label>
                    <Input id="issue-date" type="date" />
                  </div>
                </div>
                
                <Button variant="success" className="w-full">
                  Process and Register on Blockchain
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Blockchain Certificate Registry</CardTitle>
                <CardDescription>
                  All certificates are registered on blockchain for immutable verification
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">CS2024-001 to CS2024-100</p>
                      <p className="text-sm text-muted-foreground">Computer Science Batch 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-success">0x1a2b3c...def123</p>
                      <p className="text-xs text-muted-foreground">Registered 2024-06-15</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">ME2024-001 to ME2024-75</p>
                      <p className="text-sm text-muted-foreground">Mechanical Engineering 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-success">0x2b3c4d...abc456</p>
                      <p className="text-xs text-muted-foreground">Registered 2024-06-12</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <p className="font-medium">EC2024-001 to EC2024-120</p>
                      <p className="text-sm text-muted-foreground">Electronics & Communication 2024</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono text-success">0x3c4d5e...789xyz</p>
                      <p className="text-xs text-muted-foreground">Registered 2024-06-10</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Verification Trends</CardTitle>
                  <CardDescription>Weekly verification requests</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">This Week</span>
                      <span className="font-medium">89 requests</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: "89%" }}></div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Last Week</span>
                      <span className="font-medium">67 requests</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-secondary h-2 rounded-full" style={{ width: "67%" }}></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>AI Insights</CardTitle>
                  <CardDescription>Generated insights from verification data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <p className="text-sm font-medium text-primary">Peak Activity</p>
                      <p className="text-sm text-muted-foreground">
                        60% of verification requests come from IT companies during recruitment season
                      </p>
                    </div>
                    <div className="p-3 bg-success/10 rounded-lg">
                      <p className="text-sm font-medium text-success">High Confidence</p>
                      <p className="text-sm text-muted-foreground">
                        98.5% of your certificates pass verification with high confidence scores
                      </p>
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

export default InstitutionPage;