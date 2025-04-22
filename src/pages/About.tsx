
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Users, Globe, Info } from "lucide-react";

const aboutStats = [
  { icon: <Users className="text-brand-blue w-8 h-8" />, label: "Trusted Organizations", value: "200+" },
  { icon: <Globe className="text-brand-indigo w-8 h-8" />, label: "NFT Certificates Issued", value: "10,000+" },
  { icon: <Info className="text-brand-blue w-8 h-8" />, label: "Real-time Verification", value: "IPFS & Blockchain" },
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
              CertifyFuture empowers organizations to issue tamper-proof NFT certificates to students and employees. 
              Using blockchain for authenticity and IPFS for storage, we make sure your achievements are always verifiable, global, and secure.
            </p>
            <div className="flex justify-center gap-2 mb-6">
              <img
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=facearea&w=600&q=80"
                alt="NFT Certificates on a laptop"
                className="rounded-lg shadow-lg w-1/2 max-w-xs object-cover aspect-video"
              />
            </div>
            <Link to="/" className="inline-block mt-2 text-brand-indigo underline underline-offset-4 hover-scale">
              ← Back to Home
            </Link>
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
            <h2 className="text-2xl font-semibold mb-3 text-brand-blue">Why NFT Certificates?</h2>
            <p className="text-gray-800 mb-6">
              NFT certificates let you prove achievements anywhere, anytime.<br />
              Our platform enables you to store credentials securely, share with one tap, 
              and let anyone verify them instantly using decentralized technology.
            </p>
            <div className="flex flex-col md:flex-row gap-6 items-center justify-center mt-4">
              <div className="flex-1 bg-white/80 border rounded-lg px-6 py-5 shadow-md animate-fade-in">
                <h3 className="font-semibold text-brand-indigo mb-2">For Organizations</h3>
                <p className="text-gray-700">
                  Issue verifiable certificates at scale — automate, brand, and track them with ease.
                </p>
              </div>
              <div className="flex-1 bg-white/80 border rounded-lg px-6 py-5 shadow-md animate-fade-in">
                <h3 className="font-semibold text-brand-indigo mb-2">For Students & Employees</h3>
                <p className="text-gray-700">
                   Instantly access, share, and showcase your certificates worldwide.
                </p>
              </div>
              <div className="flex-1 bg-white/80 border rounded-lg px-6 py-5 shadow-md animate-fade-in">
                <h3 className="font-semibold text-brand-indigo mb-2">For Verifiers</h3>
                <p className="text-gray-700">
                   One-click online verification — no more chasing issuers!
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
