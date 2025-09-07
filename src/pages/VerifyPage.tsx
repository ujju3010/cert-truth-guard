import Header from "@/components/Header";
import CertificateUpload from "@/components/CertificateUpload";

const VerifyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="py-8">
        <CertificateUpload />
      </main>
    </div>
  );
};

export default VerifyPage;