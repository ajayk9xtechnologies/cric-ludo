"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { helmetandbat, manwithdice, Logo } from "@/app/common/index";
import gsap from "gsap";
import { lalezar } from "@/app/font";

export default function Hero() {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const leftCharRef = useRef(null);
  const rightCharRef = useRef(null);
  const waveRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial States
      gsap.set([logoRef.current, textRef.current], { opacity: 0, y: 50 });
      gsap.set(leftCharRef.current, { opacity: 0, x: -100 });
      gsap.set(rightCharRef.current, { opacity: 0, x: 100 });
      gsap.set(waveRef.current, { y: 100, opacity: 0 });

      // Animation Sequence
      tl.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
      })
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .to(
          leftCharRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          rightCharRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          waveRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        );

      // Continuous Floating Animation for Characters
      gsap.to(leftCharRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(rightCharRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.5,
      });

      // Subtle pulse for Logo
      gsap.to(logoRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero relative min-h-[600px] md:h-[80vh] flex flex-col items-center overflow-hidden"
    >
      {/* Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto h-full px-4 flex flex-col items-center pt-10 md:pt-20">

        {/* Logo */}
        <div ref={logoRef} className="relative w-32 md:w-48 lg:w-56 h-auto mb-6 md:mb-10">
          <Image
            src={Logo}
            alt="CricLudo Logo"
            width={300}
            height={300}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Text */}
        <div ref={textRef} className="text-center md:mb-0 z-20">
          <h1 className={`text-4xl md:text-6xl lg:text-8xl text-white drop-shadow-lg leading-tight ${lalezar.className}`}>
            Where <span className="text-[#d946ef]">Cricket</span>
          </h1>
          <h1 className={`text-4xl md:text-6xl lg:text-8xl text-white drop-shadow-lg leading-tight ${lalezar.className}`}>
            Meets <span className="text-[#a855f7]">Ludo</span>
          </h1>
        </div>

        {/* Characters (positioned absolutely relative to container for overlap) */}
        {/* Left Character: Cricket Player */}
        <div
          ref={leftCharRef}
          className="absolute bottom-10 left-[-20px] md:bottom-20 md:left-0 lg:left-10 w-48 md:w-80 lg:w-[450px] z-10"
        >
          <Image
            src={helmetandbat}
            alt="Cricket Character"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        {/* Right Character: Ludo Player */}
        <div
          ref={rightCharRef}
          className="absolute bottom-10 right-[-20px] md:bottom-20 md:right-0 lg:right-10 w-48 md:w-80 lg:w-[450px] z-10"
        >
          <Image
            src={manwithdice}
            alt="Ludo Character"
            width={500}
            height={500}
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

      </div>

      {/* Blue Wave Bottom */}
      <div ref={waveRef} className="absolute bottom-0 left-0 w-full z-0 h-24 md:h-48">
        <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="#3b82f6" fillOpacity="1" d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,224C840,245,960,267,1080,261.3C1200,256,1320,224,1380,208L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
        {/* Layered lighter blue for depth */}
        <div className="absolute bottom-0 w-full h-full opacity-50 z-[-1]">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path fill="#60a5fa" fillOpacity="1" d="M0,256L60,229.3C120,203,240,149,360,149.3C480,149,600,203,720,224C840,245,960,235,1080,218.7C1200,203,1320,181,1380,170.7L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}