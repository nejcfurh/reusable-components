'use client';

import DropArea from './components/DropArea';
import Widgets from './components/Widgets';
import BackButton from '@/components/buttons/BackButton';
import Header from './components/Header';
import AnimatedBackgroundGradient from '@/components/animation-core/AnimatedBackgroundGradient';
import FloatingOrb from '@/components/animation-core/FloatingOrb';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900 py-12 px-4 relative">
      <BackButton className="top-5 left-5" />
      <div className="mx-auto max-w-6xl py-5">
        {/* HEADER */}
        <Header />
        <AnimatedBackgroundGradient />
        <FloatingOrb className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse dark:bg-blue-500/10" />
        <FloatingOrb className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse animation-delay-2000 dark:bg-indigo-500/10" />

        {/* CONTENT */}
        <div className="flex mt-10 flex-col gap-8 lg:flex-row items-center justify-center">
          <Widgets />
          <DropArea />
        </div>
      </div>
    </div>
  );
}
