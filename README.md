# Reusable Components Library

A collection of modern, interactive React components built with Next.js 16, TypeScript, and Tailwind CSS. This library showcases various UI patterns and animations that can be easily integrated into your projects.

## 🚀 Features

- **Next.js 16** with App Router
- **React 19** with the latest features
- **TypeScript** for type safety
- **Tailwind CSS v4** for modern styling
- **Dark mode** support
- **Responsive design** across all components
- **Modern animations** and interactions

## 📦 Components

### 1. Drag & Drop

Interactive drag-and-drop interface with customizable widgets and drop areas.

- **Path**: `/drap-drop`
- **Features**: Drag widgets between areas, smooth animations, visual feedback

### 2. File Upload

Modern file upload component with drag-and-drop support.

- **Path**: `/file-upload`
- **Features**: Dropzone interface, file preview, drag-and-drop support

### 3. Input Fields

Collection of beautifully styled text input fields with various animations.

- **Path**: `/input-fields`
- **Features**: Floating labels, modern styling, multiple variants

### 4. Media Slider

Angled media slider with smooth transitions and hover effects.

- **Path**: `/media-slider`
- **Features**: Image slider, angled design, hover animations

### 5. Scroll Animation

Scroll-triggered animations with image reveals.

- **Path**: `/scroll-animation-page`
- **Features**: Scroll-based animations, image effects, smooth transitions

### 6. Scroll to Decrypt

Text that decrypts as you scroll through the page.

- **Path**: `/scroll-to-decrypt`
- **Features**: Character-by-character decryption, scroll-driven animation

### 7. Scroll to Unblur

Text that progressively unblurs as you scroll down the page.

- **Path**: `/scroll-to-unblur`
- **Features**: Word-by-word unblur effect, scroll-timeline API, modern gradient background
- **Browser Support**: Chrome 115+, Edge 115+ (uses CSS Scroll-Timeline API)

### 8. Social Media Buttons

Animated social media share buttons with modern styling.

- **Path**: `/social-media-buttons`
- **Features**: Email, LinkedIn, Facebook, X (Twitter) buttons with hover effects

## 🛠️ Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, pnpm, or bun

## 📁 Project Structure

```
reusable-components/
├── app/
│   ├── drap-drop/           # Drag & Drop component
│   ├── file-upload/         # File Upload component
│   ├── input-fields/        # Input Fields component
│   ├── media-slider/        # Media Slider component
│   ├── scroll-animation-page/   # Scroll Animation component
│   ├── scroll-to-decrypt/   # Scroll to Decrypt component
│   ├── scroll-to-unblur/    # Scroll to Unblur component
│   ├── social-media-buttons/    # Social Media Buttons component
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page with component gallery
├── public/
│   └── images/              # Static images
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Technologies Used

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library
- **CSS Scroll-Timeline API** - For scroll-driven animations

## 📄 License

This project is free to use.
