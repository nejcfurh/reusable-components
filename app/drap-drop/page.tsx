'use client';

import BackButton from '@/components/buttons/BackButton';
import Header from './components/Header';
import AnimatedBackgroundGradient from '@/components/animation-core/AnimatedBackgroundGradient';
import FloatingOrb from '@/components/animation-core/FloatingOrb';
import Background from '@/components/Background';
import { CardDataType } from '@/features/drag-drop/types';
import { useState } from 'react';
import { CARD_DATA } from '@/features/drag-drop/constants';
import { motion, Reorder } from 'motion/react';
import Card from './components/Card';
import Widget from './components/Widget';

export default function Home() {
  const [droppedCards, setDroppedCards] = useState<CardDataType[]>([]);

  const handleDragStart = (e: React.DragEvent, data: CardDataType) => {
    e.dataTransfer.setData('application/json', JSON.stringify(data));
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('application/json');
    if (data) {
      try {
        const cardData: CardDataType = JSON.parse(data);
        // Check if card already exists
        if (!droppedCards.some(card => card.title === cardData.title)) {
          setDroppedCards([...droppedCards, cardData]);
        }
      } catch (error) {
        console.error('Error parsing dropped data:', error);
      }
    }
  };

  const handleRemoveCard = (title: string) => {
    setDroppedCards(droppedCards.filter(card => card.title !== title));
  };

  return (
    <Background className="py-10 px-4">
      <BackButton className="top-5 left-5" />
      <div className="mx-auto max-w-6xl">
        <Header />
        <AnimatedBackgroundGradient />
        <FloatingOrb className="absolute top-20 left-10 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-pulse dark:bg-blue-500/10" />
        <FloatingOrb className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-indigo-400/20 blur-3xl animate-pulse animation-delay-2000 dark:bg-indigo-500/10" />

        {/* CONTENT */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 h-[600px] flex gap-6"
        >
          {/* WIDGETS SIDEBAR */}
          <div className="shrink-0 w-64 flex flex-col h-full">
            <h3 className="text-sm font-semibold text-white/80 mb-3 px-5 shrink-0">
              Available Widgets
            </h3>
            <div className="flex-1 overflow-y-auto space-y-3 px-5 py-2 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent min-h-0">
              {CARD_DATA.map(widget => {
                const isAlreadyAdded = droppedCards.some(
                  card => card.title === widget.title
                );
                return (
                  <Widget
                    key={widget.title}
                    title={widget.title}
                    description={widget.description}
                    image={widget.image}
                    onDragStart={handleDragStart}
                    isDisabled={isAlreadyAdded}
                  />
                );
              })}
            </div>
          </div>

          {/* DROP AREA */}
          <div className="flex-1 flex flex-col min-w-0 min-h-0">
            <h3 className="text-sm font-semibold text-white/80 mb-3 px-2 shrink-0">
              Drop Zone
            </h3>
            <div
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              className="drop-zone-scroll flex-1 overflow-y-auto rounded-lg border-2 border-dashed border-white/20 bg-white/5 backdrop-blur-sm p-4 min-h-0"
            >
              {droppedCards.length === 0 ? (
                <div className="flex h-full items-center justify-center text-center">
                  <div>
                    <div className="mb-4 text-6xl opacity-20">📦</div>
                    <h3 className="mb-2 text-lg font-semibold text-white/60">
                      Drop Zone
                    </h3>
                    <p className="text-sm text-white/40">
                      Drag widgets here to create cards
                    </p>
                  </div>
                </div>
              ) : (
                <Reorder.Group
                  values={droppedCards}
                  onReorder={setDroppedCards}
                  className="space-y-3"
                >
                  {droppedCards.map(card => (
                    <Reorder.Item
                      key={card.title}
                      value={card}
                      className="cursor-grab active:cursor-grabbing"
                      whileDrag={{ scale: 0.95, opacity: 0.8, zIndex: 50 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                      layout
                    >
                      <Card
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        onRemove={() => handleRemoveCard(card.title)}
                      />
                    </Reorder.Item>
                  ))}
                </Reorder.Group>
              )}
            </div>
          </div>
        </motion.main>
      </div>
    </Background>
  );
}
