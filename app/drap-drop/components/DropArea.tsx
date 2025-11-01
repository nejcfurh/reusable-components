'use client';

import { useEffect, useRef, useState } from 'react';
import { CiImageOn, CiTextAlignCenter } from 'react-icons/ci';
import { FaVideo } from 'react-icons/fa';
import { IoClose, IoRadioButtonOn } from 'react-icons/io5';
import { RxDividerHorizontal } from 'react-icons/rx';

interface Widget {
  id: string;
  name: string;
  icon?: React.ReactNode;
  color: string;
  description: string;
  instanceId?: string;
}

// Icon mapping function to reconstruct icons from widget ID
function getIconForWidget(widgetId: string): React.ReactNode {
  const iconMap: Record<string, React.ReactNode> = {
    'text-block': <CiTextAlignCenter className="text-4xl" />,
    'image-block': <CiImageOn className="text-4xl" />,
    'button-block': <IoRadioButtonOn className="text-4xl" />,
    'video-block': <FaVideo className="text-4xl" />,
    divider: <RxDividerHorizontal className="text-4xl" />,
  };
  return iconMap[widgetId] || <CiTextAlignCenter className="text-4xl" />;
}

export default function DropArea() {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const lastWidgetRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the latest widget when a new one is added
  useEffect(() => {
    if (lastWidgetRef.current) {
      lastWidgetRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [widgets.length]);

  function handleDragOver(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  }

  function handleDragEnter(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setIsDragOver(true);
  }

  function handleDragLeave(e: React.DragEvent<HTMLDivElement>): void {
    // Only set to false if we're leaving the drop area itself, not a child
    if (e.currentTarget === e.target) {
      setIsDragOver(false);
    }
  }

  function handleOnDrop(e: React.DragEvent<HTMLDivElement>): void {
    e.preventDefault();
    setIsDragOver(false);

    const widgetData = e.dataTransfer.getData('widget');
    if (widgetData) {
      try {
        const widget: Widget = JSON.parse(widgetData);
        // Add unique instance ID and reconstruct the icon
        const widgetWithInstanceId = {
          ...widget,
          icon: getIconForWidget(widget.id),
          instanceId: `${widget.id}-${Date.now()}-${Math.random()}`,
        };
        // Add new widget at the end
        setWidgets([...widgets, widgetWithInstanceId]);
      } catch (error) {
        console.error('Error parsing widget data:', error);
      }
    }
  }

  function handleRemoveWidget(instanceId: string): void {
    setWidgets(widgets.filter(w => w.instanceId !== instanceId));
  }

  function handleClearAll(): void {
    setWidgets([]);
  }

  return (
    <div className="flex-1">
      <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Canvas
          </h2>
          {widgets.length > 0 && (
            <div className="text-center text-sm text-gray-500 dark:text-gray-500">
              {widgets.length} widget{widgets.length !== 1 ? 's' : ''} added
            </div>
          )}
          {widgets.length > 0 && (
            <button
              onClick={handleClearAll}
              className="rounded-lg bg-red-500 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-red-600"
            >
              Clear All
            </button>
          )}
        </div>

        <div
          ref={scrollRef}
          onDrop={handleOnDrop}
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          className={`h-[450px] overflow-y-auto rounded-xl border-2 border-dashed p-4 transition-all duration-300 ${
            isDragOver
              ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
              : 'border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800'
          } scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800`}
        >
          {widgets.length === 0 ? (
            <div className="flex h-full items-center justify-center text-center">
              <div>
                <div className="mb-4 text-6xl opacity-20">📦</div>
                <h3 className="mb-2 text-lg font-semibold text-gray-600 dark:text-gray-400">
                  Drop Zone
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Drag widgets here to start building
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {widgets.map((widget, index) => (
                <div
                  key={widget.instanceId}
                  ref={index === widgets.length - 1 ? lastWidgetRef : null}
                  className="group relative animate-in fade-in slide-in-from-top-2 duration-300"
                >
                  <div
                    className={`overflow-hidden rounded-xl bg-linear-to-br ${widget.color} p-5 shadow-md transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {widget.icon}
                        <div>
                          <h4 className="font-semibold text-white">
                            {widget.name}
                          </h4>
                          <p className="text-sm text-white/80">
                            {widget.description}
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() =>
                          widget.instanceId &&
                          handleRemoveWidget(widget.instanceId)
                        }
                        className="rounded-full bg-white/20 p-2 text-white opacity-0 transition-all hover:bg-white/30 group-hover:opacity-100"
                        title="Remove widget"
                      >
                        <IoClose className="text-2xl" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
