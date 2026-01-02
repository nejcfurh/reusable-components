'use client';

import { useEffect, useRef, useState } from 'react';
import { CiImageOn, CiTextAlignCenter } from 'react-icons/ci';
import { FaVideo } from 'react-icons/fa';
import { IoClose, IoRadioButtonOn } from 'react-icons/io5';
import { MdDragIndicator } from 'react-icons/md';
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

interface WidgetTemplate {
  id: string;
  name: string;
  icon: React.ReactNode | string;
  color: string;
  description: string;
}

const widgetsList: WidgetTemplate[] = [
  {
    id: 'text-block',
    name: 'Text Block',
    icon: <CiTextAlignCenter />,
    color: 'from-slate-600 to-slate-700',
    description: 'Add a text paragraph',
  },
  {
    id: 'image-block',
    name: 'Image Block',
    icon: <CiImageOn />,
    color: 'from-violet-600 to-purple-600',
    description: 'Insert an image',
  },
  {
    id: 'button-block',
    name: 'Button',
    icon: <IoRadioButtonOn />,
    color: 'from-emerald-600 to-teal-600',
    description: 'Add a clickable button',
  },
  {
    id: 'video-block',
    name: 'Video Block',
    icon: <FaVideo />,
    color: 'from-amber-600 to-orange-600',
    description: 'Embed a video',
  },
  {
    id: 'divider',
    name: 'Divider',
    icon: <RxDividerHorizontal />,
    color: 'from-gray-600 to-gray-700',
    description: 'Add a horizontal line',
  },
];

export default function DropArea() {
  const [widgets, setWidgets] = useState<Widget[]>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [draggedWidgetIndex, setDraggedWidgetIndex] = useState<number | null>(
    null
  );
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const [draggingTemplateId, setDraggingTemplateId] = useState<string | null>(
    null
  );
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
    const draggedIndex = e.dataTransfer.getData('draggedIndex');
    // If dragging from within drop area, use move effect, otherwise copy
    e.dataTransfer.dropEffect = draggedIndex !== '' ? 'move' : 'copy';
  }

  function handleWidgetDragStart(
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ): void {
    setDraggedWidgetIndex(index);
    e.dataTransfer.setData('draggedIndex', index.toString());
    e.dataTransfer.effectAllowed = 'move';
  }

  function handleWidgetDragEnd(): void {
    setDraggedWidgetIndex(null);
    setDragOverIndex(null);
  }

  function handleWidgetDragOver(
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ): void {
    e.preventDefault();
    e.stopPropagation();
    // Only set drag over index if we're dragging a widget from within the drop area
    if (draggedWidgetIndex !== null && draggedWidgetIndex !== index) {
      const rect = e.currentTarget.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      // Determine if we should insert above or below based on mouse position
      if (e.clientY < midpoint) {
        setDragOverIndex(index);
      } else {
        setDragOverIndex(index + 1);
      }
    } else if (draggedWidgetIndex === null) {
      // If dragging from widgets list, allow dropping at this position
      const rect = e.currentTarget.getBoundingClientRect();
      const midpoint = rect.top + rect.height / 2;
      if (e.clientY < midpoint) {
        setDragOverIndex(index);
      } else {
        setDragOverIndex(index + 1);
      }
    }
  }

  function handleWidgetDragLeave(e: React.DragEvent<HTMLDivElement>): void {
    // Only clear if we're actually leaving the widget area
    const relatedTarget = e.relatedTarget as HTMLElement;
    if (!e.currentTarget.contains(relatedTarget)) {
      // Don't clear immediately to prevent flickering
    }
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
    setDragOverIndex(null);

    const widgetData = e.dataTransfer.getData('widget');
    const draggedIndex = e.dataTransfer.getData('draggedIndex');

    // If dragging from within the drop area (reordering)
    if (draggedIndex !== '' && draggedWidgetIndex !== null) {
      const sourceIndex = parseInt(draggedIndex);
      let targetIndex = dragOverIndex !== null ? dragOverIndex : widgets.length;

      // Adjust target index if dragging down (to account for removed item)
      if (targetIndex > sourceIndex) {
        targetIndex = targetIndex - 1;
      }

      if (
        sourceIndex !== targetIndex &&
        targetIndex >= 0 &&
        targetIndex <= widgets.length
      ) {
        const newWidgets = [...widgets];
        const [movedWidget] = newWidgets.splice(sourceIndex, 1);
        newWidgets.splice(targetIndex, 0, movedWidget);
        setWidgets(newWidgets);
      }
      setDraggedWidgetIndex(null);
      return;
    }

    // If dragging from the widgets list (adding new widget)
    if (widgetData) {
      try {
        const widget: Widget = JSON.parse(widgetData);
        // Add unique instance ID and reconstruct the icon
        const widgetWithInstanceId = {
          ...widget,
          icon: getIconForWidget(widget.id),
          instanceId: `${widget.id}-${Date.now()}-${Math.random()}`,
        };
        // Add new widget at the end or at the drag over index
        if (dragOverIndex !== null) {
          const newWidgets = [...widgets];
          newWidgets.splice(dragOverIndex, 0, widgetWithInstanceId);
          setWidgets(newWidgets);
        } else {
          setWidgets([...widgets, widgetWithInstanceId]);
        }
      } catch (error) {
        console.error('Error parsing widget data:', error);
      }
    }
  }

  function handleRemoveWidget(instanceId: string): void {
    setWidgets(widgets.filter(w => w.instanceId !== instanceId));
  }

  function handleTemplateDragStart(
    e: React.DragEvent<HTMLDivElement>,
    widget: WidgetTemplate
  ): void {
    const widgetData = {
      id: widget.id,
      name: widget.name,
      color: widget.color,
      description: widget.description,
    };
    e.dataTransfer.setData('widget', JSON.stringify(widgetData));
    e.dataTransfer.effectAllowed = 'copy';
    setDraggingTemplateId(widget.id);
  }

  function handleTemplateDragEnd(): void {
    setDraggingTemplateId(null);
  }

  return (
    <div className="z-50 flex-1 w-full max-w-7xl mx-auto">
      <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 dark:bg-gray-900 dark:ring-gray-800">
        {/* Available Widgets */}
        <div className="mb-4">
          <h3 className="mb-3 text-sm font-medium text-gray-700 dark:text-gray-300">
            Available Widgets
          </h3>
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex flex-wrap items-center gap-3">
              {widgetsList.map(widget => (
                <div
                  key={widget.id}
                  draggable
                  onDragStart={e => handleTemplateDragStart(e, widget)}
                  onDragEnd={handleTemplateDragEnd}
                  className={`group relative cursor-grab overflow-hidden rounded-xl bg-linear-to-br ${widget.color} px-5 py-4 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:cursor-grabbing ${
                    draggingTemplateId === widget.id
                      ? 'opacity-50'
                      : 'opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{widget.icon}</span>
                    <span className="text-base font-semibold text-white">
                      {widget.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            {widgets.length > 0 && (
              <div className="flex items-center gap-4">
                <div className="text-base text-gray-500 dark:text-gray-500">
                  {widgets.length} widget{widgets.length !== 1 ? 's' : ''} added
                </div>
              </div>
            )}
          </div>
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
                  draggable
                  onDragStart={e => handleWidgetDragStart(e, index)}
                  onDragEnd={handleWidgetDragEnd}
                  onDragOver={e => handleWidgetDragOver(e, index)}
                  onDragLeave={handleWidgetDragLeave}
                  className={`group relative animate-in fade-in slide-in-from-top-2 duration-300 cursor-grab active:cursor-grabbing transition-all ${
                    draggedWidgetIndex === index
                      ? 'opacity-30 scale-95'
                      : 'opacity-100'
                  } ${
                    dragOverIndex === index &&
                    draggedWidgetIndex !== null &&
                    draggedWidgetIndex !== index
                      ? 'translate-y-1'
                      : ''
                  }`}
                >
                  <div
                    className={`overflow-hidden rounded-xl bg-linear-to-br ${widget.color} p-5 shadow-md transition-all duration-300 hover:shadow-lg ${
                      dragOverIndex === index &&
                      draggedWidgetIndex !== null &&
                      draggedWidgetIndex !== index
                        ? 'ring-2 ring-blue-400 ring-offset-2 dark:ring-blue-500'
                        : ''
                    }`}
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
                      <div className="flex items-center gap-2">
                        <div className="text-white/60 transition-transform group-hover:translate-x-1 cursor-grab active:cursor-grabbing">
                          <MdDragIndicator className="size-6" />
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
