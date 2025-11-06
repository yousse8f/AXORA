'use client';
import { motion } from 'framer-motion';
export default function Footer() {
  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'Instagram', icon: '📷', href: '#' },
    { name: 'LinkedIn', icon: 'in', href: '#' },
    { name: 'YouTube', icon: '▶', href: '#' },
  ];
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          {/* Logo/Brand */}
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-600 rounded-lg mb-4">
              <div className="w-6 h-6 bg-white rounded transform rotate-45"></div>
            </div>
            <h3 className="text-2xl font-bold">Axora</h3>
          </div>
          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Axora is a premium Next.js corporate template designed for startups, digital agencies, and modern brands. 
            Built with Next.js 14, TypeScript, and Tailwind CSS for clean code, high performance, and easy customization.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-800 hover:bg-purple-600 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-200 hover:scale-110 hover:shadow-lg"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          {/* Navigation Links */}
        </div>
        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2025 Axora. All rights reserved.</p>
            </div>
          </div>
        </div>
        {/* Back to Top Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-purple-600 hover:bg-purple-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto transition-all duration-200 hover:scale-110 hover:shadow-lg"
            aria-label="Back to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
