
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { DemoVideo } from "@/components/DemoVideo";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Verify } from "@/components/Verify";
import { FloatingButton } from "@/components/FloatingButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <DemoVideo />
        <Verify />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
      <FloatingButton />
    </div>
  );
};

export default Index;
