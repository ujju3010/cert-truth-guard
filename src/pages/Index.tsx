import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import { 
  Shield, 
  Brain, 
  Blocks, 
  CheckCircle, 
  Users, 
  Building, 
  Zap, 
  Eye,
  ArrowRight,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-verification.jpg";
import verificationShield from "@/assets/verification-shield.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <img src={verificationShield} alt="Verification Shield" className="h-12 w-12" />
                  <span className="text-primary font-semibold">CertVerify AI</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                  Smart Certificate
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Verification</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  Powered by AI-OCR extraction, blockchain authentication, and advanced fraud detection. 
                  Verify certificates instantly with 99.5% accuracy.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="hero" asChild>
                  <Link to="/verify">
                    Verify Certificate <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/institution">Institution Login</Link>
                </Button>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4 text-success" />
                  <span>24/7 Instant Verification</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Blockchain Secured</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-warning" />
                  <span>99.5% Accuracy</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Certificate Verification System" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-success text-success-foreground p-3 rounded-full shadow-lg">
                <CheckCircle className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-3 rounded-full shadow-lg">
                <Shield className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              AI-Powered Certificate Authentication
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Revolutionary technology that combines artificial intelligence, blockchain security, 
              and advanced OCR to deliver unmatched certificate verification accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="verification-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-primary to-primary-glow p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Brain className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">AI-OCR Extraction</CardTitle>
                <CardDescription>
                  Automatically extract and analyze certificate data with advanced machine learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Instant text recognition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Multi-format support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Tamper detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="verification-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-accent to-primary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Blocks className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Blockchain Security</CardTitle>
                <CardDescription>
                  Immutable certificate registration with cryptographic proof of authenticity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Immutable records</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Cryptographic hashes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Transparent verification</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="verification-card group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="bg-gradient-to-r from-success to-secondary p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">Fraud Detection</CardTitle>
                <CardDescription>
                  Advanced algorithms identify forgeries and anomalies in real-time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Real-time analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Pattern recognition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span>Confidence scoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Built for Everyone
            </h2>
            <p className="text-xl text-muted-foreground">
              Tailored solutions for different verification needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-primary to-accent p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Employers & Agencies</h3>
              <p className="text-muted-foreground mb-6">
                Verify candidate certificates instantly during recruitment with detailed verification reports.
              </p>
              <Button variant="verify" asChild>
                <Link to="/verify">Start Verifying</Link>
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-secondary to-success p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Building className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Educational Institutions</h3>
              <p className="text-muted-foreground mb-6">
                Register certificates on blockchain and manage verification requests seamlessly.
              </p>
              <Button variant="success" asChild>
                <Link to="/institution">Institution Portal</Link>
              </Button>
            </Card>

            <Card className="text-center p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-gradient-to-r from-accent to-primary p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Government Admins</h3>
              <p className="text-muted-foreground mb-6">
                Monitor fraud trends, manage institutions, and maintain system integrity.
              </p>
              <Button variant="outline" asChild>
                <Link to="/admin">Admin Dashboard</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Verify Certificates?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of organizations already using our AI-powered verification system
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/verify">
                <Zap className="mr-2 h-5 w-5" />
                Verify Now - Free
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/institution">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={verificationShield} alt="CertVerify" className="h-8 w-8" />
                <span className="text-lg font-bold">CertVerify</span>
              </div>
              <p className="text-muted text-sm">
                Smart Certificate Verification System powered by AI and blockchain technology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><Link to="/verify" className="hover:text-white transition-colors">Verification</Link></li>
                <li><Link to="/institution" className="hover:text-white transition-colors">For Institutions</Link></li>
                <li><Link to="/admin" className="hover:text-white transition-colors">Admin Panel</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Technology</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>AI-OCR Extraction</li>
                <li>Blockchain Security</li>
                <li>Fraud Detection</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li>support@certverify.ai</li>
                <li>+1 (555) 123-4567</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-muted mt-12 pt-8 text-center text-sm text-muted">
            <p>&copy; 2024 CertVerify. All rights reserved. Built for educational verification excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;