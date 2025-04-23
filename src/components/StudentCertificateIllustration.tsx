import React from "react";

// Pastel & student/certificate themed SVG
const StudentCertificateIllustration = () => (
  <div className="h-full w-full flex items-center justify-center p-10 select-none">
    <svg width="340" height="260" viewBox="0 0 340 260" fill="none"
      xmlns="http://www.w3.org/2000/svg" className="w-80 h-56 md:w-full md:h-full">
      <rect x="10" y="85" width="320" height="130" rx="20" fill="#F2FCE2"/>
      <rect x="25" y="110" width="110" height="80" rx="16" fill="#e5deff"/>
      <rect x="220" y="116" width="90" height="56" rx="12" fill="#D3E4FD"/>
      <ellipse cx="170" cy="90" rx="50" ry="18" fill="#FFD7E2"/>
      {/* Certificate Scroll */}
      <rect x="140" y="124" width="60" height="30" rx="7"
        fill="#fff" stroke="#C8C8C9" strokeWidth="2"/>
      <rect x="152" y="132" width="36" height="8" rx="2" fill="#FFD7E2"/>
      <circle cx="170" cy="155" r="7" fill="#7E69AB"/>
      {/* Student Head */}
      <ellipse cx="98" cy="70" rx="16" ry="16" fill="#FFA99F"/>
      {/* Student Body */}
      <rect x="84" y="86" width="28" height="36" rx="12" fill="#FFC3A0"/>
      <ellipse cx="98" cy="122" rx="14" ry="6" fill="#FFD7E2"/>
      {/* Other Details */}
      <ellipse cx="270" cy="55" rx="14" ry="10" fill="#D3E4FD" opacity="0.5"/>
      <text x="220" y="215" fontSize="18" fontWeight="bold"
        fill="#aaa" textAnchor="middle">Student</text>
      <text x="120" y="205" fontSize="16"
        fill="#8d8d8d" textAnchor="middle">NFT Certificate</text>
    </svg>
  </div>
);

export default StudentCertificateIllustration;
