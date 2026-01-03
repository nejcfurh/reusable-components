'use client';

import BackButton from '@/components/buttons/BackButton';
import ParallaxSection from './components/ParallaxSection';
import MultiColumnScroll from './components/MultiColumnScroll';
import { ReactLenis } from 'lenis/react';

const AppleScrollEffectPage = () => {
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <BackButton className="fixed top-5 left-5" />
      {/* THIS IS A PRODUCT PAGE SCROLL ANIMATION BASED ON APPLE PRODUCT PAGE */}
      <ParallaxSection />
      {/* THIS IS MULTICOLUMN SCROLL ANIMATION EXAMPLE */}
      <MultiColumnScroll />
    </ReactLenis>
  );
};

export default AppleScrollEffectPage;
