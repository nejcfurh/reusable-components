'use client';

import DropArea from './components/DropArea';
import Widgets from './components/Widgets';
import BackButton from '@/components/buttons/BackButton';
import Header from './components/Header';
import AnimatedBackgroundGradient from '@/components/animation-core/AnimatedBackgroundGradient';
import FloatingOrb from '@/components/animation-core/FloatingOrb';
import Background from '@/components/Background';

export default function Home() {
  return (
    <Background className="py-10 px-4">
      <BackButton className="top-5 left-5" />
      <div className="mx-auto max-w-6xl">
        <Header />
        <AnimatedBackgroundGradient />
        <FloatingOrb className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse dark:bg-blue-500/10" />
        <FloatingOrb className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse animation-delay-2000 dark:bg-indigo-500/10" />

        {/* CONTENT */}
        <div className="flex mt-5 flex-col gap-8 lg:flex-row items-center justify-center">
          <Widgets />
          <DropArea />
        </div>
      </div>
    </Background>
  );
}
