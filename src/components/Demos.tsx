'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';

import home1 from '../../public/images/home1.png';
import home2 from '../../public/images/home2.png';
import home3 from '../../public/images/home3.png';
import home4 from '../../public/images/home4.png';

type DemoCard = {
  id: string;
  title: string;
  category: string;
  image: StaticImageData;
  href: string;
  priority?: boolean;
};

const demoCards: DemoCard[] = [
  {
    id: 'launchly-home',
    title: 'Showcase your App in one place',
    category: 'SINGLE IMAGE',
    image: home1,
    href: 'https://launchly-corporate.vercel.app/home1',
    priority: true
  },
  {
    id: 'launchly-mobile',
    title: 'Get the new App for iPhone & Android',
    category: 'IMAGE SLIDESHOW',
    image: home2,
    href: 'https://launchly-corporate.vercel.app/home2'
  },
  {
    id: 'launchly-youtube',
    title: 'Made for better',
    category: 'YOUTUBE BACKGROUND',
    image: home3,
    href: 'https://launchly-corporate.vercel.app/home3'
  },
  {
    id: 'launchly-brand',
    title: 'Made for better',
    category: 'YOUTUBE BACKGROUND',
    image: home4,
    href: 'https://launchly-corporate.vercel.app/home-brand'
  }
];

export default function Demos() {
  return (
    <section
      id="demos-section"
      className="relative py-20 bg-gradient-to-br from-[#f4f7ff] via-[#f2ecff] to-[#e7f3ff] overflow-hidden"
    >
      {/* Circular Patterns Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="circular-patterns"></div>
      </div>
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Select Your Favorite Demo
          </h2>
          <p className="text-gray-500 text-lg">
            Fully Responsive • 24/7 Support • Well Documented
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {demoCards.map((demo) => (
            <Link
              key={demo.id}
              href={demo.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 sm:transition-all sm:duration-500 sm:hover:-translate-y-2 sm:hover:shadow-[0_40px_120px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-[420px] w-full overflow-hidden rounded-[32px] bg-gray-50 shadow-[0_25px_60px_rgba(15,23,42,0.08)]">
                <div className="h-full overflow-y-auto px-6 py-8">
                  <Image
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-auto rounded-[24px] object-top"
                    sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 90vw"
                    priority={demo.priority}
                    loading={demo.priority ? undefined : 'lazy'}
                    quality={80}
                  />
                </div>
              </div>
              <div className="px-8 py-10 text-center">
                <h3 className="text-xl font-semibold text-gray-800">
                  {demo.title}
                </h3>
                <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
                  {demo.category}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
