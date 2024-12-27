"use client";

import React from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          {title}
        </h1>
        <p className="text-xl md:text-2xl opacity-90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
