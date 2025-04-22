
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StudentSignUpForm } from "@/components/StudentSignUpForm";

export default function StudentSignUp() {
  return (
    <div>
      <Navbar />
      <main className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#F2FCE2] via-[#E5DEFF] to-[#D3E4FD] py-8 px-4">
        <div className="w-full max-w-5xl bg-white/80 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden">
          {/* Illustration Section */}
          <div className="hidden md:flex flex-1 items-center justify-center bg-gradient-to-br from-[#D3E4FD] to-[#F2FCE2] p-8">
            <StudentIllustration />
          </div>
          {/* Form Section */}
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-bold text-brand-blue mb-2 text-center">Student Sign-Up</h2>
            <p className="text-center text-gray-600 mb-6">
              Get started with CertifyFuture and unlock digital, verifiable credentials.
            </p>
            <StudentSignUpForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// SVG Illustration Component
function StudentIllustration() {
  return (
    <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
      <rect width="240" height="240" rx="36" fill="#F2FCE2" />
      <ellipse cx="120" cy="175" rx="80" ry="26" fill="#E5DEFF" />
      <circle cx="120" cy="96" r="56" fill="#D3E4FD" />
      <ellipse cx="120" cy="110" rx="30" ry="18" fill="#fff" />
      {/* Face */}
      <circle cx="120" cy="96" r="38" fill="#fff" />
      {/* Hair */}
      <ellipse cx="120" cy="78" rx="22" ry="14" fill="#4F46E5" />
      {/* Body */}
      <rect x="97" y="134" width="46" height="40" rx="16" fill="#4F46E5" />
      {/* Certificate */}
      <rect x="154" y="150" width="38" height="25" rx="6" fill="#fffbe9" stroke="#FFD580" strokeWidth="2"/>
      <rect x="157" y="160" width="32" height="5" rx="2.5" fill="#FFD580" />
      {/* Arm */}
      <rect x="135" y="134" width="16" height="34" rx="8" fill="#FFE4A1" />
      {/* Smile */}
      <path d="M108 108 Q120 120 132 108" stroke="#FFA99F" strokeWidth="3" fill="none" />
      {/* Eyes */}
      <ellipse cx="110" cy="94" rx="3" ry="3.5" fill="#555" />
      <ellipse cx="130" cy="94" rx="3" ry="3.5" fill="#555" />
    </svg>
  );
}
