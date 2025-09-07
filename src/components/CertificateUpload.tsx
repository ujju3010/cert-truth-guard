import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, FileText, Loader2, CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CertificateData {
  studentName: string;
  rollNumber: string;
  institution: string;
  course: string;
  marks: string;
  certificateId: string;
  issueDate: string;
}

interface VerificationResult {
  status: "authentic" | "fake" | "review";
  confidence: number;
  blockchainHash?: string;
  issues?: string[];
  explanation: string;
}

const CertificateUpload = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedData, setExtractedData] = useState<CertificateData | null>(null);
  const [verificationResult, setVerificationResult] = useState<VerificationResult | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = Array.from(e.dataTransfer.files);
    const file = files[0];
    
    if (file && (file.type === "application/pdf" || file.type.startsWith("image/"))) {
      processFile(file);
    } else {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF or image file.",
        variant: "destructive",
      });
    }
  }, [toast]);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = async (file: File) => {
    setUploadedFile(file);
    setIsProcessing(true);
    setExtractedData(null);
    setVerificationResult(null);

    try {
      // Simulate OCR extraction
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockData: CertificateData = {
        studentName: "John Doe",
        rollNumber: "CS2021001",
        institution: "Tech University",
        course: "Bachelor of Computer Science",
        marks: "85%",
        certificateId: "TU-CS-2024-001",
        issueDate: "2024-06-15"
      };
      
      setExtractedData(mockData);
      
      // Simulate verification process
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const mockResult: VerificationResult = {
        status: Math.random() > 0.3 ? "authentic" : (Math.random() > 0.5 ? "fake" : "review"),
        confidence: Math.floor(Math.random() * 40) + 60,
        blockchainHash: "0x1a2b3c4d5e6f7g8h9i0j",
        explanation: "Certificate validated against blockchain records and institutional database."
      };
      
      if (mockResult.status === "fake") {
        mockResult.issues = ["Invalid institutional seal", "Tampered grade information"];
        mockResult.explanation = "Multiple anomalies detected: The institutional seal does not match official records, and grade information appears to have been digitally altered.";
      } else if (mockResult.status === "review") {
        mockResult.issues = ["Unusual certificate format"];
        mockResult.explanation = "Certificate format is uncommon but appears legitimate. Manual review recommended.";
      }
      
      setVerificationResult(mockResult);
      
      toast({
        title: "Processing complete",
        description: "Certificate has been analyzed and verified.",
      });
      
    } catch (error) {
      toast({
        title: "Processing failed",
        description: "Failed to process the certificate. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "authentic":
        return (
          <div className="flex items-center space-x-2 status-badge-authentic">
            <CheckCircle className="h-4 w-4" />
            <span>Authentic</span>
          </div>
        );
      case "fake":
        return (
          <div className="flex items-center space-x-2 status-badge-fake">
            <XCircle className="h-4 w-4" />
            <span>Fake / Forged</span>
          </div>
        );
      case "review":
        return (
          <div className="flex items-center space-x-2 status-badge-review">
            <AlertTriangle className="h-4 w-4" />
            <span>Needs Review</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Certificate Verification Portal</h1>
        <p className="text-muted-foreground">Upload or scan a certificate to verify its authenticity using AI-powered analysis</p>
      </div>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Certificate</CardTitle>
          <CardDescription>
            Drag and drop your certificate file or click to select. Supports PDF and image formats.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className={`upload-zone p-8 text-center cursor-pointer transition-all duration-300 ${
              isDragging ? "upload-zone-active" : ""
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => document.getElementById("file-input")?.click()}
          >
            <input
              id="file-input"
              type="file"
              accept=".pdf,image/*"
              className="hidden"
              onChange={handleFileSelect}
            />
            
            {isProcessing ? (
              <div className="flex flex-col items-center space-y-4">
                <Loader2 className="h-12 w-12 text-primary animate-spin" />
                <p className="text-lg font-medium">Processing Certificate...</p>
                <p className="text-sm text-muted-foreground">Extracting data and verifying authenticity</p>
              </div>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <div className="flex space-x-4">
                  <Upload className="h-12 w-12 text-primary" />
                  <Camera className="h-12 w-12 text-primary" />
                </div>
                <div>
                  <p className="text-lg font-medium">Drop your certificate here</p>
                  <p className="text-sm text-muted-foreground">or click to browse files</p>
                </div>
                <div className="flex space-x-4">
                  <Button variant="verify">
                    <Upload className="h-4 w-4 mr-2" />
                    Choose File
                  </Button>
                  <Button variant="outline">
                    <Camera className="h-4 w-4 mr-2" />
                    Scan QR Code
                  </Button>
                </div>
              </div>
            )}
          </div>

          {uploadedFile && (
            <div className="mt-4 flex items-center space-x-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span>{uploadedFile.name}</span>
              <span>({(uploadedFile.size / 1024 / 1024).toFixed(2)} MB)</span>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Extracted Data */}
      {extractedData && (
        <Card>
          <CardHeader>
            <CardTitle>Extracted Information</CardTitle>
            <CardDescription>AI-OCR has extracted the following details from your certificate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Student Name</label>
                <p className="text-lg font-semibold">{extractedData.studentName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Roll Number</label>
                <p className="text-lg font-semibold">{extractedData.rollNumber}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Institution</label>
                <p className="text-lg font-semibold">{extractedData.institution}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Course</label>
                <p className="text-lg font-semibold">{extractedData.course}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Marks</label>
                <p className="text-lg font-semibold">{extractedData.marks}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Certificate ID</label>
                <p className="text-lg font-semibold">{extractedData.certificateId}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Verification Result */}
      {verificationResult && (
        <Card>
          <CardHeader>
            <CardTitle>Verification Result</CardTitle>
            <CardDescription>AI-powered analysis and blockchain verification complete</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                {getStatusBadge(verificationResult.status)}
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Confidence Score</p>
                  <p className="text-2xl font-bold">{verificationResult.confidence}%</p>
                </div>
              </div>

              {verificationResult.blockchainHash && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Blockchain Hash</label>
                  <p className="text-sm font-mono bg-muted p-2 rounded">{verificationResult.blockchainHash}</p>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-muted-foreground">AI Analysis</label>
                <p className="text-sm mt-1">{verificationResult.explanation}</p>
              </div>

              {verificationResult.issues && verificationResult.issues.length > 0 && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Issues Detected</label>
                  <ul className="text-sm mt-1 space-y-1">
                    {verificationResult.issues.map((issue, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <AlertTriangle className="h-4 w-4 text-warning" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex space-x-4">
                <Button variant="outline">
                  <FileText className="h-4 w-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="ghost" onClick={() => {
                  setExtractedData(null);
                  setVerificationResult(null);
                  setUploadedFile(null);
                }}>
                  Verify Another
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CertificateUpload;