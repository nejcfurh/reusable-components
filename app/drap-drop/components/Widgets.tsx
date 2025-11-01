'use client';

import { useState } from 'react';
import { CiImageOn, CiTextAlignCenter } from 'react-icons/ci';
import { FaVideo } from 'react-icons/fa';
import { IoRadioButtonOn } from 'react-icons/io5';
import { MdDragIndicator } from 'react-icons/md';
import { RxDividerHorizontal } from 'react-icons/rx';

interface Widget {
  id: string;
  name: string;
  icon: React.ReactNode | string;
  color: string;
  description: string;
}

const widgetsList: Widget[] = [
  {
    id: 'text-block',
    name: 'Text Block',
    icon: <CiTextAlignCenter />,
    color: 'from-blue-500 to-cyan-500',
    description: 'Add a text paragraph',
  },
  {
    id: 'image-block',
    name: 'Image Block',
    icon: <CiImageOn />,
    color: 'from-purple-500 to-pink-500',
    description: 'Insert an image',
  },
  {
    id: 'button-block',
    name: 'Button',
    icon: <IoRadioButtonOn />,
    color: 'from-green-500 to-emerald-500',
    description: 'Add a clickable button',
  },
  {
    id: 'video-block',
    name: 'Video Block',
    icon: <FaVideo />,
    color: 'from-orange-500 to-red-500',
    description: 'Embed a video',
  },
  {
    id: 'divider',
    name: 'Divider',
    icon: <RxDividerHorizontal />,
    color: 'from-gray-500 to-slate-500',
    description: 'Add a horizontal line',
  },
];

export default function Widgets() {
  const [draggingId, setDraggingId] = useState<string | null>(null);

  function handleDragStart(
    e: React.DragEvent<HTMLDivElement>,
    widget: Widget
  ): void {
    // Only transfer the widget data without the icon component
    const widgetData = {
      id: widget.id,
      name: widget.name,
      color: widget.color,
      description: widget.description,
    };
    e.dataTransfer.setData('widget', JSON.stringify(widgetData));
    e.dataTransfer.effectAllowed = 'copy';
    setDraggingId(widget.id);
  }

  function handleDragEnd(): void {
    setDraggingId(null);
  }

  return (
    <div className="w-full lg:w-80">
      <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
        <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
          Available Widgets
        </h2>
        <div className="flex flex-col gap-3">
          {widgetsList.map(widget => (
            <div
              key={widget.id}
              draggable
              onDragStart={e => handleDragStart(e, widget)}
              onDragEnd={handleDragEnd}
              className={`group relative cursor-grab overflow-hidden rounded-xl bg-linear-to-br ${widget.color} p-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:cursor-grabbing ${
                draggingId === widget.id ? 'opacity-50' : 'opacity-100'
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">{widget.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{widget.name}</h3>
                  <p className="text-sm text-white/80">{widget.description}</p>
                </div>
                <div className="text-white/60 transition-transform group-hover:translate-x-1">
                  <MdDragIndicator className="size-8" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
