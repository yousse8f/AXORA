import Hero from '@/components/Hero';
import Demos from '@/components/Demos';
import Subscribe from '@/components/Subscribe';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Demos />
      <Subscribe />
      <Footer />
    </main>
  );
}
