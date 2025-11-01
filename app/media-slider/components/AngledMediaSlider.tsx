'use client';

import { useState } from 'react';

const videos = [
  {
    url: 'https://videos.pexels.com/video-files/12328655/12328655-uhd_2560_1440_24fps.mp4',
    content: 'Video 1',
  },
  {
    url: 'https://videos.pexels.com/video-files/9342691/9342691-uhd_2560_1440_24fps.mp4',
    content: 'Video 2',
  },
  {
    url: 'https://videos.pexels.com/video-files/19909915/19909915-uhd_2560_1440_30fps.mp4',
    content: 'Video 3',
  },
  {
    url: 'https://videos.pexels.com/video-files/30986296/13247016_2560_1440_24fps.mp4',
    content: 'Video 4',
  },
  {
    url: 'https://videos.pexels.com/video-files/2575219/2575219-hd_1920_1080_24fps.mp4',
    content: 'Video 5',
  },
];

const AngledMediaSlider = ({
  enableText = false,
}: {
  enableText?: boolean;
}) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const split = 30;
  const count = videos.length;
  const pps = 100 / count;

  const computeClip = (idx: number): string | undefined => {
    const j = idx + 1;
    const i = hovered !== null ? hovered + 1 : null;

    // WHEN NOT HOVERED
    if (i === null) {
      if (j === 1) return undefined;
      return `polygon(calc(${j - 1} * ${pps}% - ${split}px) 100%, calc(${
        j - 1
      } * ${pps}% + ${split}px) 0, 100% 0, 100% 100%)`;
    }

    // WHEN HOVERED
    if (j <= i) {
      if (j === 1) return undefined;
      const numLeft = j - 1;
      const base = numLeft * 2;
      return `polygon(${base * split}px 100%, ${
        (base + 2) * split
      }px 0, 100% 0, 100% 100%)`;
    } else {
      const numRight = count - j;
      const base = numRight * 2;
      return `polygon(calc(100% - ${(base + 4) * split}px) 100%, calc(100% - ${
        (base + 2) * split
      }px) 0, 100% 0, 100% 100%)`;
    }
  };

  return (
    <ul
      role="tablist"
      className="slidey with-text w-full grid list-none p-0 m-0 relative"
    >
      {videos.map((video, idx) => {
        const fgStyles = {
          width: `calc(100% - ${(count + 1) * split * 2}px)`,
          marginLeft: `${(idx + 1) * split * 2}px`,
        };

        return (
          <li
            key={video.url}
            role="tab"
            tabIndex={0}
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(idx)}
            onBlur={() => setHovered(null)}
            style={{ clipPath: computeClip(idx) }}
            className="relative outline-none"
          >
            <div
              className="background absolute top-0 left-0 w-full h-full pointer-events-none"
              inert
            >
              <video
                className="w-full h-full object-cover"
                muted
                autoPlay
                loop
                src={video.url}
              />
            </div>
            {enableText && (
              <div className="foreground absolute top-0 left-0 w-full h-full pointer-events-none">
                <div
                  className="fg_content relative h-full overflow-hidden"
                  style={fgStyles}
                >
                  <h1 className="absolute top-0 left-[50%] m-0">
                    {video.content}
                  </h1>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default AngledMediaSlider;
