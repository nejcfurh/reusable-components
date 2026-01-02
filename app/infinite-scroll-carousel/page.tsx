'use client';

import AnimatedBackgroundGradient from '@/components/animation-core/AnimatedBackgroundGradient';
import FloatingOrb from '@/components/animation-core/FloatingOrb';
import Background from '@/components/Background';
import BackButton from '@/components/buttons/BackButton';
import InfiniteCarousel from './components/InfiniteCarousel';

const InfiniteScrollCarouselPage = () => {
  return (
    <Background>
      <BackButton className="top-5 left-5" />
      <AnimatedBackgroundGradient />
      <FloatingOrb className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse dark:bg-blue-500/10" />
      <h1 className="text-5xl w-full text-center font-bold text-white py-10 ">
        Infinite Scroll Carousel
      </h1>
      <InfiniteCarousel />
    </Background>
  );
};

export default InfiniteScrollCarouselPage;
