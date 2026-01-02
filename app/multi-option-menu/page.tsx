'use client';

import BackButton from '@/components/buttons/BackButton';
import MultiOptionButtons from './components/MultiOptionButtons';
import FloatingOrb from '@/components/animation-core/FloatingOrb';
import { useState } from 'react';
import SwitchVariantButton from './components/SwitchVariantButton';
import Footer from './components/Footer';
import Background from '@/components/Background';

export default function Home() {
  const [variant, setVariant] = useState<'circular' | 'horizontal'>('circular');

  const handleSwitchVariant = () => {
    setVariant(prev => (prev === 'circular' ? 'horizontal' : 'circular'));
  };

  return (
    <Background className="flex items-center justify-center">
      <FloatingOrb className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse dark:bg-blue-500/10" />
      <FloatingOrb className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse animation-delay-2000 dark:bg-indigo-500/10" />
      <BackButton className="top-5 left-5" />
      <SwitchVariantButton
        variant={variant}
        handleSwitchVariant={handleSwitchVariant}
      />
      <MultiOptionButtons variant={variant} />
      <Footer />
    </Background>
  );
}
