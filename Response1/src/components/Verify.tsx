
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Verify = () => {
  const [verifyId, setVerifyId] = useState("");
  
  return (
    <section id="verify" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Verify a Certificate</h2>
            <p className="text-gray-600">
              Enter a certificate ID or upload a certificate to verify its authenticity on the blockchain.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="certificate-id" className="text-sm font-medium">
                  Certificate ID or Hash
                </label>
                <div className="flex gap-2">
                  <Input
                    id="certificate-id"
                    placeholder="Enter certificate ID or hash"
                    value={verifyId}
                    onChange={(e) => setVerifyId(e.target.value)}
                    className="flex-1"
                  />
                  <Button className="bg-brand-blue hover:bg-brand-indigo">
                    Verify
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-gray-50 px-2 text-gray-500">or</span>
                </div>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <div className="mx-auto flex flex-col items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gray-400 mb-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500">
                    <span className="font-semibold">Click to upload</span> or drag and drop
                  </p>
                  <p className="text-xs text-gray-500">
                    PDF or image (max. 10MB)
                  </p>
                  <Button variant="outline" className="mt-4">
                    Upload Certificate
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
