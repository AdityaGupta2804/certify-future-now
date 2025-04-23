
// CertifyFuture Organization Sign-Up Page
import OrgIllustration from "@/components/OrgIllustration";
import SignUpForm from "@/components/SignUpForm";

const Index = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col md:flex-row items-stretch justify-center"
      style={{
        background: "linear-gradient(102.3deg, rgba(147,39,143,0.09) 5.9%, rgba(234,172,232,0.13) 64%, rgba(246,219,245,0.32) 89%)"
      }}
    >
      <div className="w-full md:w-1/2 flex items-center justify-center py-8 px-4 md:px-12 bg-white/60 backdrop-blur-md shadow-lg">
        <div className="flex flex-col w-full max-w-xl">
          <div className="mb-6 md:mb-10">
            <span className="inline-block bg-primary/90 text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-3 shadow hover:scale-110 transition">
              CertifyFuture
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-2">
              Organization Sign-Up
            </h1>
            <p className="text-base md:text-lg text-gray-500">
              Issue blockchain-verified certificates with CertifyFuture.<br />Create your organization account!
            </p>
          </div>
          <SignUpForm />
        </div>
      </div>
      <div className="hidden md:flex w-1/2 bg-transparent items-center justify-center">
        <OrgIllustration />
      </div>
    </div>
  );
};

export default Index;
