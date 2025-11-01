import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';
import TextInputFields from './components/TextInputFields';

export default function InputFieldsPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 dark:from-gray-950 dark:via-slate-900 dark:to-gray-900">
      <Link
        href="/"
        className="absolute left-5 top-5 z-10 rounded-full bg-white p-4 opacity-20 backdrop-blur-3xl transition-all duration-300 hover:scale-[1.10] hover:opacity-50"
      >
        <IoArrowBack className="text-2xl text-black" />
      </Link>
      <TextInputFields />
    </div>
  );
}
