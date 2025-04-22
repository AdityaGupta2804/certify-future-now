
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Hero Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="block">Issue Verifiable</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-indigo">
                NFT Certificates
              </span>
              <span className="block">On The Blockchain</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Secure, immutable, and instantly verifiable digital certificates for your organization, powered by blockchain technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-indigo text-white">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                Watch Demo
              </Button>
            </div>
            <div className="pt-6 flex items-center space-x-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gray-${i * 100}`}></div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">500+ organizations</span> already trust us
              </p>
            </div>
          </div>

          {/* Hero Visualization */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative">
              {/* Certificate Animation */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-brand-indigo/10 rounded-full animate-spin-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-teal/10 rounded-full animate-spin-slow"></div>
              
              {/* Main Certificate */}
              <div className="relative bg-white border border-gray-200 rounded-xl p-6 shadow-xl w-full max-w-md mx-auto animate-float z-20">
                <div className="border-b border-dashed border-gray-300 pb-4 mb-4">
                  <div className="flex justify-between items-center">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-brand-blue to-brand-indigo"></div>
                    <div className="text-right">
                      <h3 className="font-semibold">Certificate of Completion</h3>
                      <p className="text-xs text-gray-500">Blockchain Verified</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-500">This certifies that</p>
                  <p className="font-semibold text-lg">John Doe</p>
                  <p className="text-sm text-gray-500 mt-2">has successfully completed</p>
                  <p className="font-semibold">Blockchain Development Bootcamp</p>
                </div>
                
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500">Issue Date</p>
                    <p className="text-sm">April 22, 2025</p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-2 h-16 w-16 flex items-center justify-center">
                    <div className="text-xs text-center">
                      <div className="font-mono text-[8px] text-brand-indigo">0x8f...e9a</div>
                      <p className="mt-1">VERIFIED</p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-teal/30 animate-pulse"></div>
                <div className="absolute bottom-3 left-3 w-6 h-6 rounded-full bg-brand-indigo/30"></div>
              </div>
              
              {/* Visual elements */}
              <div className="absolute top-1/4 -left-6 w-12 h-12 bg-blue-500/10 rounded-lg rotate-12"></div>
              <div className="absolute bottom-1/4 -right-8 w-16 h-16 bg-purple-500/10 rounded-full"></div>
              <div className="absolute -bottom-4 left-1/4 w-20 h-20 bg-teal-500/10 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
