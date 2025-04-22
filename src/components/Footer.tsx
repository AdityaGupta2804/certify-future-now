
import React from "react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-blue to-brand-indigo rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">CF</span>
              </div>
              <span className="text-lg font-bold">CertifyFuture</span>
            </div>
            <p className="text-gray-600">
              Secure, verifiable blockchain certificates for educational institutions and organizations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-600 hover:text-brand-blue transition-colors">About Us</a></li>
              <li><a href="#how-it-works" className="text-gray-600 hover:text-brand-blue transition-colors">How It Works</a></li>
              <li><a href="#features" className="text-gray-600 hover:text-brand-blue transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-600 hover:text-brand-blue transition-colors">Pricing</a></li>
              <li><a href="#faq" className="text-gray-600 hover:text-brand-blue transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#help" className="text-gray-600 hover:text-brand-blue transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-brand-blue transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="text-gray-600 hover:text-brand-blue transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-gray-600 hover:text-brand-blue transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* GitHub Stats */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h3 className="font-semibold text-lg mb-4">GitHub Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Stars</span>
                <span className="font-medium">3.2k</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Forks</span>
                <span className="font-medium">845</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Contributors</span>
                <span className="font-medium">67</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Latest Release</span>
                <span className="text-xs font-medium bg-brand-indigo/10 text-brand-indigo py-1 px-2 rounded">v1.5.2</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full mt-2 border-brand-blue text-brand-blue hover:bg-brand-blue/5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © 2025 CertifyFuture. All rights reserved.
          </p>
          
          {/* Animated Brand Mascot */}
          <div className="relative">
            <div className="absolute -top-10 right-0 w-10 h-10 animate-float">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-blue to-brand-indigo flex items-center justify-center text-white text-xs font-bold">
                CF
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
