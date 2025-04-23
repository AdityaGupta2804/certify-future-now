import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Globe, Info, Shield, Zap, Lock } from "lucide-react";

const aboutStats = [
  { icon: <Users className="text-brand-blue w-8 h-8" />, label: "Trusted Organizations", value: "200+" },
  { icon: <Globe className="text-brand-indigo w-8 h-8" />, label: "NFT Certificates Issued", value: "10,000+" },
  { icon: <Info className="text-brand-blue w-8 h-8" />, label: "Real-time Verification", value: "IPFS & Blockchain" },
];

// Further detailed features for expansion
const featureDetails = [
  {
    icon: <Shield className="text-brand-indigo w-8 h-8" />,
    title: "Unparalleled Security",
    description: "Leveraging blockchain technology, we ensure that every certificate is tamper-proof and permanently verifiable. Each NFT certificate is cryptographically signed and stored on decentralized networks."
  },
  {
    icon: <Zap className="text-brand-blue w-8 h-8" />,
    title: "Instant Global Verification",
    description: "Eliminate tedious verification processes. Anyone can instantly validate the authenticity of a certificate through our universal verification platform, breaking down geographical barriers."
  },
  {
    icon: <Lock className="text-brand-indigo w-8 h-8" />,
    title: "Privacy and Ownership",
    description: "Students and employees have complete control over their digital credentials. Share, revoke, or transfer certificates with a simple click, ensuring data sovereignty."
  }
];

export default function About() {
  return (
    <div>
      <Navbar />
      <main className="pt-28 pb-16 bg-gradient-to-br from-[#f6f8fe] to-[#eaf2fb] min-h-[80vh]">
        <div className="container mx-auto">
          <section className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-brand-blue">About CertifyFuture</h1>
            <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
              CertifyFuture is revolutionizing digital credentials by transforming traditional certificates into 
              secure, verifiable NFTs. We're bridging the gap between educational achievements and 
              modern blockchain technology, making credentials more accessible, trustworthy, and portable.
            </p>
            {/* Extra content for About */}
            <p className="text-lg text-gray-700 mb-4 max-w-2xl mx-auto">
              Our mission is to empower both organizations and individuals with a transparent, global standard for credential verification. We partner with academic institutions, professional training centers, and employers to issue NFT-based certificates that are easy to share, impossible to forge, and instantly verifiable by anyone.
            </p>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              With a user-centric approach, CertifyFuture ensures privacy and ownership of credentials are maintained at every stage. Whether you are a student seeking to amplify your achievements or an organization aiming to streamline certificate management, our platform provides a seamless experience built on cutting-edge security and blockchain innovation.
            </p>
            <div className="flex justify-center gap-2 mb-6">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=facearea&w=600&q=80"
                alt="NFT Certificates on a laptop"
                className="rounded-lg shadow-lg w-1/2 max-w-xs object-cover aspect-video"
              />
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href="/signup/student" className="bg-gradient-to-r from-brand-indigo to-brand-blue text-white px-5 py-2 rounded-xl font-semibold shadow-md hover-scale transition">
                Start Free Trial
              </a>
              <Link to="/" className="inline-block text-brand-indigo underline underline-offset-4 hover-scale">
                ← Back to Home
              </Link>
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            {aboutStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center glass py-8 px-5 rounded-xl animate-fade-in"
              >
                <div className="mb-2">{stat.icon}</div>
                <div className="text-3xl font-extrabold text-brand-indigo mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </section>

          <section className="max-w-4xl mx-auto text-center mt-10">
            <h2 className="text-2xl font-semibold mb-6 text-brand-blue">Our Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featureDetails.map((feature) => (
                <div 
                  key={feature.title} 
                  className="bg-white/80 border rounded-lg px-6 py-7 shadow-md animate-fade-in hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="font-semibold text-brand-indigo mb-3 text-xl">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto text-center mt-16">
            <h2 className="text-2xl font-semibold mb-3 text-brand-blue">Why NFT Certificates?</h2>
            <p className="text-gray-800 mb-6 max-w-2xl mx-auto">
              Traditional paper and digital certificates are vulnerable to fraud, hard to verify, 
              and quickly become outdated. CertifyFuture transforms credentials into dynamic, 
              secure digital assets that travel with you throughout your professional journey.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-4">
              <div className="flex-1 bg-white/80 border rounded-lg px-6 py-5 shadow-md animate-fade-in">
                <h3 className="font-semibold text-brand-indigo mb-2">For Organizations</h3>
                <p className="text-gray-700">
                  Issue verifiable certificates at scale — automate, brand, and track them with ease. 
                  Reduce administrative overhead and enhance credential management.
                </p>
              </div>
              <div className="flex-1 bg-white/80 border rounded-lg px-6 py-5 shadow-md animate-fade-in">
                <h3 className="font-semibold text-brand-indigo mb-2">For Students & Employees</h3>
                <p className="text-gray-700">
                   Instantly access, share, and showcase your certificates worldwide. 
                   Own your professional narrative with blockchain-backed credentials.
                </p>
              </div>
              <div className="flex-1 bg-white/80 border rounded-lg px-6 py-5 shadow-md animate-fade-in">
                <h3 className="font-semibold text-brand-indigo mb-2">For Verifiers</h3>
                <p className="text-gray-700">
                   One-click online verification — no more chasing issuers! Instant, 
                   cryptographically secure validation of any certificate.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
