"use client";

import React from 'react';
import '../scroll-to-unblur.css';

export default function ScrollToUnblur() {
  // Extended Lorem Ipsum text split into words
  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tempus eros sit amet erat rutrum
    elementum. Sed euismod, nisl vel tincidunt lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
    quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
    ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
    Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
    condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis.
    Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
    Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. Phasellus ultrices
    nulla quis nibh. Quisque a lectus. Donec consectetuer ligula vulputate sem tristique cursus. Nam nulla quam,
    gravida non, commodo a, sodales sit amet, nisi. Pellentesque fermentum dolor. Aliquam quam lectus, facilisis auctor,
    ultrices ut, elementum vulputate, nunc. Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel,
    euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna. Ut aliquam sollicitudin leo.
    Cras iaculis ultricies nulla. Donec quis dui at dolor tempor interdum.`;

  // Split text into words and filter out empty strings
  const words = text.split(/\s+/).filter(word => word.length > 0);

  return (
    <main className="scroll-unblur-container">
      <div className="scroll-unblur-spacer">
        <p className="sticky top-20 px-8 md:px-20 text-3xl md:text-5xl lg:text-6xl leading-relaxed text-white">
          {words.map((word, index) => (
            <span 
              key={index} 
              className="word"
              style={{ '--i': index + 1 } as React.CSSProperties}
            >
              {word}{' '}
            </span>
          ))}
        </p>
      </div>
    </main>
  );
}

