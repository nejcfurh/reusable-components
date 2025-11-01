import Link from 'next/link';
import AngledMediaSlider from './components/AngledMediaSlider';
import { IoArrowBack } from 'react-icons/io5';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <Link
        href="/"
        className="absolute top-10 left-5 bg-white opacity-20 z-10 p-4 rounded-full backdrop-blur-3xl hover:opacity-50 hover:scale-[1.10] transition-all duration-300"
      >
        <IoArrowBack className="text-2xl text-black" />
      </Link>
      {/* ENABLE TEXT TRUE WILL ENABLE OPAQUE OVERLAY WITH THE VIDEO TITLE */}
      <AngledMediaSlider />
    </div>
  );
}
