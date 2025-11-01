import Link from 'next/link';
import { BsInputCursor } from 'react-icons/bs';
import { IoShareSocialOutline } from 'react-icons/io5';
import {
  MdBlurOn,
  MdFolderCopy,
  MdNoEncryption,
  MdOutlinePermMedia,
} from 'react-icons/md';
import { PiMouseScroll } from 'react-icons/pi';
import { TbDragDrop } from 'react-icons/tb';

export default function Home() {
  const components = [
    {
      name: 'Drag & Drop',
      path: '/drap-drop',
      icon: <TbDragDrop />,
      color: 'from-purple-500 to-pink-500',
    },
    {
      name: 'File Upload',
      path: '/file-upload',
      icon: <MdFolderCopy />,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Input Fields',
      path: '/input-fields',
      icon: <BsInputCursor />,
      color: 'from-green-500 to-emerald-500',
    },
    {
      name: 'Media Slider',
      path: '/media-slider',
      icon: <MdOutlinePermMedia />,
      color: 'from-orange-500 to-red-500',
    },
    {
      name: 'Scroll Animation',
      path: '/scroll-animation-page',
      icon: <PiMouseScroll />,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Scroll to Decrypt',
      path: '/scroll-to-decrypt',
      icon: <MdNoEncryption />,
      color: 'from-teal-500 to-cyan-500',
    },
    {
      name: 'Scroll to Unblur',
      path: '/scroll-to-unblur',
      icon: <MdBlurOn />,
      color: 'from-indigo-500 to-purple-500',
    },
    {
      name: 'Social Media Buttons',
      path: '/social-media-buttons',
      icon: <IoShareSocialOutline />,
      color: 'from-violet-500 to-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br flex justify-evenly items-center from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <div className="mx-auto h-screen flex flex-col justify-between items-center max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="my-16 text-center">
          <h1 className="mb-4 bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl">
            Reusable Components
          </h1>
        </div>

        {/* COMPONENTS GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {components.map(component => (
            <Link
              key={component.path}
              href={component.path}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-2 hover:ring-gray-300 dark:bg-gray-900 dark:ring-gray-800 dark:hover:ring-gray-700"
            >
              {/* GRADIENT BACKGROUND ON HOVER */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${component.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
              ></div>

              {/* CONTENT */}
              <div className="relative">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-4xl transition-transform duration-300 group-hover:scale-110">
                    {component.icon}
                  </span>
                  <svg
                    className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gray-600 dark:group-hover:text-gray-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {component.name}
                </h3>
              </div>

              {/* BOTTOM BORDER GRADIENT */}
              <div
                className={`absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r ${component.color} transition-all duration-300 group-hover:w-full`}
              ></div>
            </Link>
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-500">
            Built by Nejc Furh, 2025 - Inspired by other talented developers.
          </p>
        </div>
      </div>
    </div>
  );
}
