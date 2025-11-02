import { ScrollToDecryptWithSuspense } from './components/ScrollToDecrypt';
import BackButton from '@/components/buttons/BackButton';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <BackButton className="fixed top-5 left-5" />
      <ScrollToDecryptWithSuspense
        title="NaturalEarth.ai"
        subtitle="A smarter way to reconnect with the natural world."
        trackLength={35}
        startOffset={-1.7}
        endOffset={-0.5}
        enableScrollContent={true}
      />
    </div>
  );
}
