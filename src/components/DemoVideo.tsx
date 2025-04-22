
import { Button } from "@/components/ui/button";

export const DemoVideo = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Watch how easy it is to create, issue, and verify blockchain certificates on our platform.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl">
          {/* Video Thumbnail */}
          <div className="aspect-video bg-gray-900 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-indigo/40"></div>
            
            {/* Placeholder Image */}
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='450' viewBox='0 0 800 450' preserveAspectRatio='none'%3E%3Crect fill='%23121827' width='800' height='450'/%3E%3Cg%3E%3Ctext x='50%25' y='50%25' style='fill:%23999999;font-weight:bold;font-family:Arial, Helvetica, sans-serif;font-size:42px' text-anchor='middle' dy='.3em'%3EDEMO VIDEO%3C/text%3E%3C/g%3E%3C/svg%3E"
                alt="Demo Video Thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Play Button */}
            <Button 
              variant="outline" 
              size="icon" 
              className="w-20 h-20 rounded-full bg-white/90 hover:bg-white border-none shadow-lg z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-brand-indigo">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
            </Button>
          </div>

          {/* Video Caption */}
          <div className="bg-white p-6 text-left">
            <h3 className="text-xl font-semibold mb-1">CertifyFuture Platform Demo</h3>
            <p className="text-gray-600">
              See how a university can issue, manage, and verify blockchain certificates in just a few clicks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
