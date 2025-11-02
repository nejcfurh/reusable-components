import Link from 'next/link';
import { ScrollToDecryptWithSuspense } from './components/ScrollToDecrypt';
import { IoArrowBack } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Link
        href="/"
        className="absolute top-5 left-5 bg-white opacity-20 z-10 p-4 rounded-full backdrop-blur-3xl hover:opacity-50 hover:scale-[1.10] transition-all duration-300"
      >
        {' '}
        <IoArrowBack className="text-2xl text-black" />
      </Link>
      <ScrollToDecryptWithSuspense
        title="NaturalEarth.ai"
        subtitle="A smarter way to reconnect with the natural world."
        trackLength={40}
        startOffset={-1.7}
        endOffset={-0.5}
        enableScrollContent={true}
      />
    </div>
  );
}
