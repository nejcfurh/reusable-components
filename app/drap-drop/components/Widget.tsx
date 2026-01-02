'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { CardDataType } from '@/features/drag-drop/types';

interface WidgetProps extends CardDataType {
  onDragStart: (e: React.DragEvent, data: CardDataType) => void;
  isDisabled?: boolean;
}

const Widget = ({
  title,
  description,
  image,
  onDragStart,
  isDisabled = false,
}: WidgetProps) => {
  return (
    <motion.div
      draggable={!isDisabled}
      onDragStart={e =>
        !isDisabled &&
        onDragStart(e as unknown as React.DragEvent, {
          title,
          description,
          image,
        })
      }
      className={`group relative ${
        isDisabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-grab active:cursor-grabbing'
      }`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: isDisabled ? 0.5 : 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`flex items-center gap-3 p-3 rounded-xl bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ${
          isDisabled ? '' : 'hover:shadow-xl hover:border-white/40'
        }`}
      >
        <div className="relative shrink-0">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Image
            src={image}
            alt={title}
            width={40}
            height={40}
            className="relative rounded-full w-10 h-10 object-cover ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300"
          />
        </div>
        <span className="text-sm font-semibold text-white/90 group-hover:text-white transition-colors duration-300">
          {title}
        </span>
      </div>
    </motion.div>
  );
};

export default Widget;
