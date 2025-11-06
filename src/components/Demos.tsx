'use client';

interface DemoCard {
  id: string;
  title: string;
  category: string;
  image: string;
  bgColor: string;
  textColor: string;
}

const demoCards: DemoCard[] = [
  {
    id: 'showcase',
    title: 'Showcase your app in one place',
    category: 'App Showcase',
    image: '/images/demo-showcase.png',
    bgColor: 'bg-gradient-to-br from-purple-600 to-blue-600',
    textColor: 'text-white'
  },
  {
    id: 'mobile',
    title: 'Get the new app for iPhone & Android',
    category: 'Mobile App',
    image: '/images/demo-mobile.png',
    bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-500',
    textColor: 'text-white'
  },
  {
    id: 'business',
    title: 'Made for better',
    category: 'Business',
    image: '/images/demo-business.png',
    bgColor: 'bg-gradient-to-br from-red-600 to-pink-600',
    textColor: 'text-white'
  },
  {
    id: 'single-image',
    title: 'SINGLE IMAGE',
    category: 'Layout Type',
    image: '/images/demo-single-image.png',
    bgColor: 'bg-white',
    textColor: 'text-gray-800'
  },
  {
    id: 'slideshow',
    title: 'IMAGE SLIDESHOW',
    category: 'Layout Type',
    image: '/images/demo-slideshow.png',
    bgColor: 'bg-white',
    textColor: 'text-gray-800'
  },
  {
    id: 'youtube',
    title: 'YOUTUBE BACKGROUND',
    category: 'Layout Type',
    image: '/images/demo-youtube.png',
    bgColor: 'bg-white',
    textColor: 'text-gray-800'
  },
  {
    id: 'blog',
    title: 'BLOG',
    category: 'Page Type',
    image: '/images/demo-blog.png',
    bgColor: 'bg-gray-900',
    textColor: 'text-white'
  },
  {
    id: 'contact',
    title: 'CONTACT',
    category: 'Page Type',
    image: '/images/demo-contact.png',
    bgColor: 'bg-gray-900',
    textColor: 'text-white'
  },
  {
    id: 'worker',
    title: 'WORKER',
    category: 'Page Type',
    image: '/images/demo-worker.png',
    bgColor: 'bg-gray-900',
    textColor: 'text-white'
  }
];

export default function Demos() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Select Your Favorite Demo
          </h2>
          <p className="text-gray-600 text-lg">
            Fully Responsive • 24/7 Support • Well Documented
          </p>
        </div>

        {/* Demo Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {demoCards.map((demo, index) => (
            <div
              key={demo.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Demo Card */}
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                {/* Top Section - Colored Background */}
                <div className={`${demo.bgColor} p-8 h-64 flex flex-col justify-center items-center relative`}>
                  {/* Background Pattern for white cards */}
                  {demo.bgColor === 'bg-white' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100"></div>
                  )}
                  
                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {index < 3 ? (
                      // Top row - App showcase cards with phone mockups
                      <div className="flex justify-center space-x-2 mb-4">
                        <div className="w-12 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-14 bg-white/40 rounded"></div>
                        </div>
                        <div className="w-12 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                          <div className="w-8 h-14 bg-white/40 rounded"></div>
                        </div>
                      </div>
                    ) : index < 6 ? (
                      // Middle row - Layout type cards with desktop mockups
                      <div className="mb-4">
                        <div className="w-24 h-16 bg-gray-200 rounded-lg mx-auto flex items-center justify-center">
                          <div className="w-20 h-12 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                    ) : (
                      // Bottom row - Page type cards with full page mockups
                      <div className="mb-4">
                        <div className="w-20 h-24 bg-white/20 rounded-lg mx-auto flex flex-col items-center justify-center space-y-1">
                          <div className="w-16 h-2 bg-white/40 rounded"></div>
                          <div className="w-12 h-2 bg-white/40 rounded"></div>
                          <div className="w-14 h-2 bg-white/40 rounded"></div>
                          <div className="w-16 h-8 bg-white/40 rounded"></div>
                        </div>
                      </div>
                    )}
                    
                    <h3 className={`${demo.textColor} font-bold text-lg leading-tight`}>
                      {demo.title}
                    </h3>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Bottom Section - White Background */}
                <div className="bg-white p-6 text-center">
                  <p className="text-gray-600 font-medium text-sm uppercase tracking-wide">
                    {demo.category}
                  </p>
                  
                  {/* Preview Button */}
                  <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-colors duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                    Preview Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-200 hover:shadow-lg transform hover:scale-105">
            View All Demos
          </button>
        </div>
      </div>
    </section>
  );
}
