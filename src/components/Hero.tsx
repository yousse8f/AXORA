'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Mountain Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/backgrond.jpg')"
        }}
      ></div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-white/80"></div>
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/90 backdrop-blur-sm rounded-lg mb-4 shadow-lg">
            <div className="w-8 h-8 bg-purple-600 rounded transform rotate-45"></div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">AXORA</h1>
        </div>

        {/* Tagline */}
        <div className="mb-6">
          <p className="text-purple-200 font-semibold text-lg mb-2 drop-shadow-md">MODERN CORPORATE & STARTUP</p>
          <p className="text-purple-100 font-semibold text-xl drop-shadow-md">NEXT.JS TEMPLATE</p>
        </div>

        {/* Description */}
        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto drop-shadow-md bg-black/20 backdrop-blur-sm rounded-lg p-4">
          <span className="font-semibold">Axora</span> is a premium Next.js corporate template designed for startups, digital agencies, and modern brands that need a fast and professional online presence. It includes 4 unique homepage layouts, dark mode, and smooth animations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-white/90 hover:bg-white text-purple-600 border-2 border-purple-600 px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-xl backdrop-blur-sm">
            VIEW DEMO
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-xl">
            GET STARTED
          </button>
        </div>

        {/* Device Mockups */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main showcase banner with transparent background */}
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Left Image */}
              <div className="flex justify-center">
                <img
                  src="/images/brands.png"
                  alt="App Preview Left"
                  className="w-full max-w-xs rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Center Image */}
              <div className="flex justify-center">
                <img
                  src="/images/saas1.png"
                  alt="App Preview Center"
                  className="w-full max-w-md rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Right Image */}
              <div className="flex justify-center">
                <img
                  src="/images/digital.png"
                  alt="App Preview Right"
                  className="w-full max-w-xs rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
