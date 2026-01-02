import { MainPageItem } from '@/utils/types';
import { BsInputCursor } from 'react-icons/bs';
import { CiCreditCard2 } from 'react-icons/ci';
import { FaBarsStaggered, FaScroll } from 'react-icons/fa6';
import { GiCardPlay } from 'react-icons/gi';
import { GrShareOption } from 'react-icons/gr';
import { IoShareSocialOutline } from 'react-icons/io5';
import {
  MdBlurOn,
  MdFolderCopy,
  MdNoEncryption,
  MdOutlinePermMedia,
} from 'react-icons/md';
import { PiMouseScroll } from 'react-icons/pi';
import { SlLayers } from 'react-icons/sl';
import { TbDragDrop } from 'react-icons/tb';

export const MAIN_PAGE_DATA: MainPageItem[] = [
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
    color: 'from-cyan-500 to-blue-500',
  },
  {
    name: 'Multi-option menu',
    path: '/multi-option-menu',
    icon: <GrShareOption />,
    color: 'from-orange-500 to-red-200',
  },
  {
    name: 'Transforming Cards',
    path: '/transforming-cards',
    icon: <CiCreditCard2 />,
    color: 'from-green-200 to-emerald-800',
  },
  {
    name: 'Layered Parallax',
    path: '/layered-parallax',
    icon: <SlLayers />,
    color: 'from-gray-500 to-white',
  },
  {
    name: 'Tilt Card',
    path: '/tilt-card',
    icon: <GiCardPlay />,
    color: 'from-gray-900 to-cyan-500',
  },
  {
    name: 'Staggered Animation',
    path: '/staggered-animation',
    icon: <FaBarsStaggered />,
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Smooth Scroll',
    path: '/smooth-scroll',
    icon: <FaScroll />,
    color: 'from-pink-500 to-cyan-500',
  },
];
