
import { Button } from "@/components/ui/button";

export const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-brand-blue to-brand-indigo text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Issue Your First NFT Certificate?
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Join hundreds of organizations that trust CertifyFuture for their credentialing needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-white text-brand-blue hover:bg-white/90"
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg"
              variant="outline" 
              className="border-white text-white hover:bg-white/20 hover:border-white/80"
            >
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            No credit card required. Free plan includes up to 50 certificates per month.
          </p>
        </div>
      </div>
    </section>
  );
};

