import { Metadata } from 'next';
import SocialMediaButtons from './components/SocialMediaButtons';
import BackButton from '@/components/buttons/BackButton';

export const metadata: Metadata = {
  title: 'Social Media Buttons Component',
  description: 'Social media buttons component',
};

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative">
      <BackButton className="top-5 left-5" />
      <SocialMediaButtons />
    </div>
  );
}
