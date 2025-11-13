'use client';

import Image from 'next/image';

export default function Hero() {
  const handleScrollToDemos = () => {
    const target = document.getElementById('demos-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const showcaseImages = [
    {
      id: 'brands',
      src: '/images/brands.png',
      alt: 'Brand Showcase'
    },
    {
      id: 'product-launch',
      src: '/images/productLunch.png',
      alt: 'Product Launch Preview'
    },
    {
      id: 'saas',
      src: '/images/saas1.png',
      alt: 'Dashboard Snapshot'
    },
    {
      id: 'digital',
      src: '/images/digital.png',
      alt: 'Digital Experience Preview'
    }
  ];

  return (
    <section className="relative overflow-hidden mb-0 pb-0">
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('/images/backgrond.jpg')"
          }}
        />
        <div className="absolute inset-0 bg-white/35"></div>
      </div>
      <div className="relative z-10 container mx-auto px-6 pt-16 pb-0 text-center mb-0">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="flex justify-center items-center">
            <Image 
              src="/images/AxoraLogo.png" 
              alt="Axora" 
              width={64} 
              height={64}
              priority
              className="w-16 h-16"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg">AXORA</h1>
        </div>

        {/* Tagline */}
        <div className="mb-6">
          <p className="text-gray-800 font-semibold text-lg mb-2 drop-shadow-md">MODERN CORPORATE & STARTUP</p>
          <p className="text-gray-800 font-semibold text-xl drop-shadow-md">NEXT.JS TEMPLATE</p>
        </div>

        {/* Description */}
        <p className=" font-bold text-lg mb-8 max-w-5xl mx-auto rounded-lg shadow-slate-950/10">
          <span className="font-bold">Axora</span> is a premium Next.js corporate template designed for startups, digital agencies, and modern brands that need a fast and professional online presence. It includes 4 unique homepage layouts, dark mode, and smooth animations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            type="button"
            onClick={handleScrollToDemos}
            className="bg-white/90 hover:bg-white text-[#0452B0] border-2 border-[#0452B0] px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-xl sm:backdrop-blur-sm"
          >
            VIEW DEMO
          </button>
          <button className="bg-[#0452B0] hover:bg-[#034599] text-white px-8 py-3 rounded-full font-semibold transition-all duration-200 hover:shadow-xl">
            GET STARTED
          </button>
        </div>

        {/* Device Mockups - Hidden on mobile */}
        <div className="hidden md:block relative mx-auto mt-16 max-w-[90rem] px-4 sm:px-6 lg:px-8" style={{ marginBottom: 0, paddingBottom: 0 }}>
          <div className="flex w-full flex-col items-center justify-center gap-0 sm:flex-row sm:items-end sm:justify-center" style={{ marginBottom: 0, paddingBottom: 0 }}>
            {showcaseImages.map(({ id, src, alt }, index) => {
              const isCenter = index === 1 || index === 2;
              const isLeft = index === 0;
              const isRight = index === 3;
              const isPriority = index < 2;
              
              return (
                <div
                  key={id}
                  className={`group relative transition-transform duration-300 ease-out ${
                    isCenter 
                      ? 'z-20 w-full max-w-[400px] sm:max-w-[420px] md:max-w-[450px] scale-100' 
                      : isLeft
                      ? 'z-10 w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] -mr-8 sm:-mr-12 md:-mr-16 translate-y-4 sm:translate-y-6 md:translate-y-8 scale-95'
                      : 'z-10 w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] -ml-8 sm:-ml-12 md:-ml-16 translate-y-4 sm:translate-y-6 md:translate-y-8 scale-95'
                  } sm:hover:z-30 sm:hover:-translate-y-4 sm:hover:scale-105`}
                >
                  <div
                    className={`relative w-full aspect-square overflow-hidden shadow-[0_30px_90px_rgba(15,23,42,0.15)] transition-shadow duration-200 ${
                      isCenter ? 'shadow-[0_40px_120px_rgba(15,23,42,0.2)]' : ''
                    } sm:group-hover:shadow-[0_50px_150px_rgba(15,23,42,0.25)]`}
                  >
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      priority={isPriority}
                      loading={isPriority ? undefined : 'lazy'}
                      quality={80}
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
