'use client';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
 
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          {/* Logo/Brand */}
          <div className="mb-6">
          <div className="flex justify-center items-center">
            <Image 
              src="/images/AxoraLogo.png" 
              alt="Axora" 
              width={64} 
              height={64}
              className="w-16 h-16"
              loading="lazy"
            />
          </div>
            <h3 className="text-2xl font-bold">Axora</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Axora is a premium Next.js corporate template designed for startups, digital agencies, and modern brands. 
            Built with Next.js 14, TypeScript, and Tailwind CSS for clean code, high performance, and easy customization.
          </p>       
          {/* Navigation Links */}
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; {currentYear} Axora. All rights reserved.</p>
          </div>
        </div>
        {/* Back to Top Button */}
     
      </div>
    </footer>
  );
}
