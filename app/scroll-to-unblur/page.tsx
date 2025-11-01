import Link from 'next/link';
import ScrollToUnblur from './components/ScrollToUnblur';
import { IoArrowBack } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <ScrollToUnblur />
      <Link
        href="/"
        className="absolute top-5 left-5 bg-white opacity-20 z-10 p-4 rounded-full backdrop-blur-3xl hover:opacity-50 hover:scale-[1.10] transition-all duration-300"
      >
        <IoArrowBack className="text-2xl text-black" />
      </Link>
    </div>
  );
}
