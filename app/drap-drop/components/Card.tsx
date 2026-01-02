'use client';

import Image from 'next/image';
import { IoClose } from 'react-icons/io5';
import { CardDataType } from '@/features/drag-drop/types';
import AnimatedDiv from '@/components/animation-core/AnimatedDiv';

interface CardProps extends CardDataType {
  onRemove?: () => void;
}

const Card = ({ title, description, image, onRemove }: CardProps) => {
  return (
    <AnimatedDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-white/40"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-r from-purple-500/0 via-blue-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:via-blue-500/10 group-hover:to-pink-500/10 transition-all duration-700" />

      {/* Content */}
      <div className="relative flex items-center justify-between gap-6 p-5">
        <div className="flex items-center gap-4 flex-1 min-w-0">
          {/* Larger Image */}
          <div className="relative shrink-0">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-purple-500/30 via-blue-500/30 to-pink-500/30 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
            <div className="relative rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300 p-1">
              <Image
                src={image}
                alt={title}
                width={80}
                height={80}
                className="rounded-full w-16 h-16 md:w-20 md:h-20 object-cover ring-2 ring-white/10 group-hover:ring-white/30 transition-all duration-300"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex-1 min-w-0 space-y-2">
            <h2 className="text-xl md:text-2xl font-bold bg-linear-to-r from-white via-white to-white/80 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:via-blue-200 group-hover:to-pink-200 transition-all duration-500 truncate">
              {title}
            </h2>
            <p className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors duration-300 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>

        {/* Remove Button */}
        {onRemove && (
          <button
            onClick={onRemove}
            className="shrink-0 rounded-full bg-white/10 p-2 text-white/60 opacity-0 transition-all hover:bg-white/20 hover:text-white group-hover:opacity-100 relative"
            title="Remove card"
          >
            <span className="absolute inset-0 -m-2" />
            <IoClose className="text-xl relative z-10" />
          </button>
        )}
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent" />
    </AnimatedDiv>
  );
};

export default Card;
