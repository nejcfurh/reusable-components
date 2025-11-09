import { FaMobile, FaNodeJs, FaReact } from 'react-icons/fa';
import { FaJs } from 'react-icons/fa6';
import { GrGraphQl } from 'react-icons/gr';
import { IoLogoVercel } from 'react-icons/io5';
import { TbBrandTailwind } from 'react-icons/tb';
import { SiTypescript } from 'react-icons/si';
import { TechStackItem } from './types';

export const TECH_STACK_DATA: TechStackItem[] = [
  {
    name: 'React',
    icon: <FaReact />,
  },
  {
    name: 'Next.js',
    icon: <IoLogoVercel />,
  },
  {
    name: 'React Native',
    icon: <FaMobile />,
  },
  {
    name: 'Tailwind CSS',
    icon: <TbBrandTailwind />,
  },
  {
    name: 'TypeScript',
    icon: <SiTypescript />,
  },
  {
    name: 'JavaScript',
    icon: <FaJs />,
  },
  {
    name: 'GraphQL',
    icon: <GrGraphQl />,
  },
  {
    name: 'NodeJS',
    icon: <FaNodeJs />,
  },
];
