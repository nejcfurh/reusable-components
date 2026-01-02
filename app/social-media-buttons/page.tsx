import { Metadata } from 'next';
import SocialMediaButtons from './components/SocialMediaButtons';
import BackButton from '@/components/buttons/BackButton';
import Background from '@/components/Background';
import AnimatedBackgroundGradient from '@/components/animation-core/AnimatedBackgroundGradient';
import FloatingOrb from '@/components/animation-core/FloatingOrb';

export const metadata: Metadata = {
  title: 'Social Media Buttons Component',
  description: 'Social media buttons component',
};

export default function Home() {
  return (
    <Background className="flex items-center justify-center">
      <AnimatedBackgroundGradient />
      <FloatingOrb className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse dark:bg-blue-500/10" />
      <BackButton className="top-5 left-5" />
      <SocialMediaButtons />
    </Background>
  );
}
