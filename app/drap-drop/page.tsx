'use client';

import DropArea from './components/DropArea';
import Widgets from './components/Widgets';
import { IoArrowBack } from 'react-icons/io5';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900 py-12 px-4 relative">
      <Link
        href="/"
        className="absolute top-5 left-5 bg-white opacity-20 z-10 p-4 rounded-full backdrop-blur-3xl hover:opacity-50 hover:scale-[1.10] transition-all duration-300"
      >
        {' '}
        <IoArrowBack className="text-2xl text-black" />
      </Link>
      <div className="mx-auto max-w-6xl py-5">
        {/* HEADER */}
        <div className="mb-12 text-center">
          <h1 className="bg-linear-to-r from-indigo-500 to-indigo-200 h-20 bg-clip-text text-5xl font-bold text-transparent sm:text-5xl">
            Drag & Drop
          </h1>
        </div>

        {/* CONTENT */}
        <div className="flex mt-10flex-col gap-8 lg:flex-row items-center justify-center">
          <Widgets />
          <DropArea />
        </div>
      </div>
    </div>
  );
}
