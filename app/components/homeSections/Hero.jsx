"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { helmetandbat, manwithdice, Logo } from "@/app/common/index";
import gsap from "gsap";
import { AuroraText } from "../ui/aurora-text.jsx";

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
          "-=0.4",
        )
        .to(
          leftCharRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6",
        )
        .to(
          rightCharRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<",
        )
        .to(
          waveRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8",
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
      className="hero h-[80dvh] lg:h-[1340px] relative overflow-hidden"
    >
      {/* Center Content - Logo and Text */}
      <div className="relative z-10 w-full px-4 flex flex-col items-center pt-6 md:pt-10">
        {/* Logo */}
        <div className="flex flex-col items-center mt-2 md:mt-4">
          <div
            ref={logoRef}
            className="flex flex-col items-center justify-center"
          >
            <Image
              src={Logo}
              alt="CricLudo Logo"
              width={360}
              height={360}
              className="object-contain drop-shadow-2xl w-[140px] sm:w-[180px] md:w-[220px] lg:w-[300px] xl:w-[360px]"
              priority
            />
          </div>
          <div ref={textRef} className="text-center mt-10 md:mt-6 z-20 heroTitle">
            <h1 className=" text-white text-[50px] lg:text-[120px] leading-tight lg:leading-[1]">
              where <span className="italic bg-gradient-to-r from-[#A238FF] to-[#D862FF] bg-clip-text text-transparent"> Cricket </span>
              <br />
              Meets <span className="italic bg-gradient-to-r from-[#A238FF] to-[#D862FF] bg-clip-text text-transparent">Ludo</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Left Character - Cricket Player (Responsive) */}
      <div
        ref={leftCharRef}
        className="
    absolute
    top-16
    sm:top-8
    lg:top-auto
    lg:bottom-50
    left-[-40px]
    lg:left-0
    w-50
    sm:w-40
    md:w-56
    lg:w-80
    xl:w-96
  "
      >
        <Image
          src={helmetandbat}
          alt="Cricket Character"
          width={450}
          height={400}
          className="object-contain drop-shadow-2xl w-full h-auto"
          priority
        />
      </div>

      {/* Right Character - Ludo Player (Responsive) */}
      <div
        ref={rightCharRef}
        className="absolute bottom-10 sm:bottom-22 lg:bottom-80 right-[-60px] lg:right-0 w-70 sm:w-40 md:w-56 lg:w-80 xl:w-96"
      >
        <Image
          src={manwithdice}
          alt="Ludo Character"
          width={400}
          height={400}
          className="object-contain drop-shadow-2xl w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
