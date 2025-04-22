
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "CertifyFuture has completely transformed the way we issue certificates to our graduates. The platform is intuitive, secure, and our students love having blockchain-verified credentials.",
    name: "Dr. Samantha Wilson",
    title: "Director of Academic Affairs",
    organization: "Tech University",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23DDD'/%3E%3Ccircle cx='24' cy='18' r='6' fill='%23AAA'/%3E%3Cpath d='M12 40C12 32.8203 17.3726 27 24 27C30.6274 27 36 32.8203 36 40H12Z' fill='%23AAA'/%3E%3C/svg%3E"
  },
  {
    id: 2,
    quote: "The verification process is seamless. Our HR team can instantly verify the authenticity of candidate certificates, saving us a tremendous amount of time in the recruitment process.",
    name: "Michael Johnson",
    title: "Head of Human Resources",
    organization: "Global Innovations Inc.",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23DDD'/%3E%3Ccircle cx='24' cy='18' r='6' fill='%23AAA'/%3E%3Cpath d='M12 40C12 32.8203 17.3726 27 24 27C30.6274 27 36 32.8203 36 40H12Z' fill='%23AAA'/%3E%3C/svg%3E"
  },
  {
    id: 3,
    quote: "As a student, having my certificates on the blockchain gives me confidence that my credentials are secure, immutable, and easily shareable with potential employers around the world.",
    name: "Emma Rodriguez",
    title: "Computer Science Graduate",
    organization: "Digital Academy",
    image: "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48' fill='none'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23DDD'/%3E%3Ccircle cx='24' cy='18' r='6' fill='%23AAA'/%3E%3Cpath d='M12 40C12 32.8203 17.3726 27 24 27C30.6274 27 36 32.8203 36 40H12Z' fill='%23AAA'/%3E%3C/svg%3E"
  }
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handlePrevious = () => {
    setActiveIndex((current) => 
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-gradient-to-br from-brand-blue/5 to-brand-indigo/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Trusted by institutions, businesses, and students worldwide.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Slider */}
            <div className="overflow-hidden">
              <div 
                className="transition-transform duration-500 ease-in-out" 
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                <div className="flex">
                  {testimonials.map((testimonial) => (
                    <div 
                      key={testimonial.id}
                      className="min-w-full p-4"
                    >
                      <div className="glass rounded-xl p-8 md:p-10">
                        <div className="flex flex-col items-center text-center">
                          <div className="mb-6">
                            <svg 
                              className="w-10 h-10 text-brand-indigo/30" 
                              fill="currentColor" 
                              viewBox="0 0 32 32"
                            >
                              <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-10c0-2.2-1.8-4-4-4h-10zM5 4v4h-4v-4h4zM27 4v4h-4v-4h4z"></path>
                            </svg>
                          </div>
                          
                          <p className="text-lg md:text-xl mb-8 italic">
                            "{testimonial.quote}"
                          </p>
                          
                          <div className="mt-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
                              <img 
                                src={testimonial.image} 
                                alt={testimonial.name}
                                className="w-full h-full object-cover" 
                              />
                            </div>
                            <div>
                              <p className="font-semibold text-lg">{testimonial.name}</p>
                              <p className="text-gray-600">{testimonial.title}</p>
                              <p className="text-brand-blue font-medium">{testimonial.organization}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center mt-8 space-x-2">
              <Button 
                variant="outline" 
                size="icon"
                onClick={handlePrevious}
                className="rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </Button>
              
              <div className="flex space-x-2 items-center">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === activeIndex 
                        ? "bg-brand-indigo" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={handleNext}
                className="rounded-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
