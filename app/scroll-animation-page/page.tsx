'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';

export default function ScrollAnimationPage() {
  const [activeImage, setActiveImage] = useState('img-1');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // HANDLE SCROLL PROGRESS
  useEffect(() => {
    const setScrollVar = () => {
      const htmlElement = document.documentElement;
      const percentOfScreenHeightScrolled =
        htmlElement.scrollTop / htmlElement.clientHeight;
      const progress = Math.min(percentOfScreenHeightScrolled * 100, 100);
      htmlElement.style.setProperty('--scroll', progress.toString());
    };

    window.addEventListener('scroll', setScrollVar);
    window.addEventListener('resize', setScrollVar);
    setScrollVar();

    return () => {
      window.removeEventListener('scroll', setScrollVar);
      window.removeEventListener('resize', setScrollVar);
    };
  }, []);

  // HANDLE INTERSECTION OBSERVER FOR IMAGE SWITCHING
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        for (let i = entries.length - 1; i >= 0; i--) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            const imgId = entry.target.getAttribute('data-img-to-show');
            if (imgId) {
              setActiveImage(imgId.replace('#', ''));
            }
            break;
          }
        }
      },
      {
        threshold: 0.5,
      }
    );

    // OBSERVE ALL SECTIONS WITH DATA-IMG-TO-SHOW ATTRIBUTE
    sectionRefs.current.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const images = [
    {
      id: 'img-1',
      src: '/images/scroll-animation-page/img-1.png',
      alt: 'img-1',
    },
    {
      id: 'img-2',
      src: '/images/scroll-animation-page/img-2.png',
      alt: 'img-2',
    },
    {
      id: 'img-3',
      src: '/images/scroll-animation-page/img-3.png',
      alt: 'img-3',
    },
  ];

  const sections = [
    {
      title: 'Completely Visual',
      description:
        'Never touch the command line, from provision to production.',
      imgId: 'img-1',
      className: 'first-main-section',
    },
    {
      title: 'Full Stack',
      description:
        'Never manage infrastructure again. One click gets you: a database, APIs, deployments, hosting, etc.',
      imgId: 'img-2',
      className: '',
    },
    {
      title: 'Launch Faster',
      description:
        'Logical can get systems to market in minutes instead of weeks.',
      imgId: 'img-3',
      className: '',
    },
  ];

  return (
    <>
      <Link
        href="/"
        className="absolute top-5 left-5 bg-white opacity-20 z-10 p-4 rounded-full backdrop-blur-3xl hover:opacity-50 hover:scale-[1.10] transition-all duration-300"
      >
        <IoArrowBack className="text-2xl text-black" />
      </Link>
      <div className="imgs">
        {images.map((image, index) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={1000}
            height={1000}
            id={image.id}
            className={`${index === 0 ? 'top-section-img' : ''} ${
              activeImage === image.id ? 'show' : ''
            }`}
            data-img="true"
          />
        ))}
      </div>

      <section className="full-screen-section top-section">
        <div className="left">
          <h1 className=" text-black text-9xl font-bold mb-10">
            Build Better Backends
          </h1>
          <p className="text-black text-3xl">
            The only platform that gives AI the ability to autonomously build
            web services.
          </p>
        </div>
        <div className="right"></div>
      </section>

      {sections.map((section, index) => (
        <section
          key={section.imgId}
          className={`h-screen text-center p-4 relative ${section.className}`}
        >
          <h1 className="text-9xl font-bold mb-10">{section.title}</h1>
          <p className="text-3xl">{section.description}</p>
          <div
            ref={el => {
              sectionRefs.current[index] = el;
            }}
            data-img-to-show={`#${section.imgId}`}
          ></div>
        </section>
      ))}
    </>
  );
}
