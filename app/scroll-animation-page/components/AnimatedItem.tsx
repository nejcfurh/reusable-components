'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import { useRef } from 'react';

interface AnimatedItemsProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

const AnimatedItem = ({
  title,
  description,
  tags,
  imageUrl,
}: AnimatedItemsProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
    >
      <section className="group bg-gray-100 max-w-2xl border border-white/50 overflow-hidden sm:pr-8 relative sm:h-80 mb-3 sm:mb-8 last:mb-0 even:pl-8 hover:bg-gray-200 transition rounded-3xl">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-72">
          <h3 className="text-3xl font-bold text-black/80">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map(tag => (
              <li
                key={tag}
                className="bg-gray-500/80 px-3 py-1 rounded-full uppercase text-xs text-white"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt={title}
          quality={85}
          width={1000}
          height={1000}
          className="absolute bottom-0 -right-1/3 w-lg rounded-l-2xl transition group-hover:scale-105 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};

export default AnimatedItem;
